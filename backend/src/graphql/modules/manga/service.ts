import { ChapterModel } from "../chapter/model";
import { CommentLikeModel, CommentModel } from "../comment/model";
import { GroupModel } from "../group/model";
import MediaService from "../media/service";
import { UserModel } from "../user/model";
import { graphQLError } from "../../errors";
import { GroupMangaModel } from "./group-manga-model";
import { MangaModel } from "./model";
import { normalizeMangaTitle } from "./normalize-title";
import { MangaValidation } from "./validation";
import { Types } from "mongoose";
import { jikanService } from "../../../services/jikan";
import { JIKAN_RETRY_AFTER_HOURS, JIKAN_SYNC_AFTER_DAYS } from "../../../config/translation";
import { resolveTranslationStatus, TRANSLATION_STATUSES, type TranslationStatus } from "./translation-status";
import { parseObjectID } from "../../validation";

class MangaService {
  static serialize(manga: any) {
    return { ...manga, id: manga._id.toString(), isAdult: manga.isAdult === true };
  }

  static async getMangas(showAdultContent = false) {
    const mangas = await MangaModel.find(showAdultContent ? {} : { isAdult: { $ne: true } }).sort({ title: 1 }).lean();
    return mangas.map(MangaService.serialize);
  }

  static async getManga(id: string, showAdultContent = false) {
    const manga = await MangaModel.findOne({ _id: id, ...(showAdultContent ? {} : { isAdult: { $ne: true } }) }).lean();
    return manga ? MangaService.serialize(manga) : null;
  }

  static searchExternal(query: string, limit = 8) {
    return jikanService.searchManga(query, limit);
  }

  static async getExternal(malId: number) {
    const response = await jikanService.getManga(malId);
    if (!response.data || response.data.malId !== malId) throw graphQLError("Metadados da obra não encontrados no MyAnimeList.", "NOT_FOUND");
    return response.data;
  }

  static async getStats(mangaID: string) {
    const rows = await ChapterModel.aggregate([
      { $match: { manga: new Types.ObjectId(mangaID) } },
      { $lookup: { from: CommentModel.collection.name, localField: "_id", foreignField: "chapter", as: "comments" } },
      { $lookup: { from: CommentLikeModel.collection.name, localField: "comments._id", foreignField: "comment", as: "commentLikes" } },
      { $group: {
        _id: null,
        chapters: { $sum: 1 },
        views: { $sum: { $ifNull: ["$views", 0] } },
        likes: { $sum: { $size: "$commentLikes" } },
      } },
    ]);
    return {
      chapters: rows[0]?.chapters ?? 0,
      views: rows[0]?.views ?? 0,
      likes: rows[0]?.likes ?? 0,
    };
  }

  static async search(query: string, limit = 8, showAdultContent = false) {
    const normalized = normalizeMangaTitle(query);
    if (!normalized) return [];

    const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const rows = await MangaModel.find({
      ...(showAdultContent ? {} : { isAdult: { $ne: true } }),
      $or: [
        { normalizedTitle: { $regex: escaped } },
        { normalizedAliases: { $regex: escaped } },
      ],
    })
      .sort({ title: 1 })
      .limit(Math.min(Math.max(limit, 1), 20))
      .lean();
    return rows.map(MangaService.serialize);
  }

  static async createManga(rawData: unknown, groupID: string, userID: string) {
    groupID = parseObjectID(groupID, "Grupo");
    const group = await GroupModel.findOne({ _id: groupID, ownerID: userID });
    if (!group) {
      throw graphQLError("Sem permissão para administrar este grupo.", "FORBIDDEN");
    }

    const data = MangaValidation.createManga(rawData);
    const { malId, translationLanguage, ...catalogData } = data;
    const aliases = [...new Set((data.aliases ?? []).map((value) => value.trim()).filter(Boolean))];
    const normalizedTitle = normalizeMangaTitle(data.title);
    const normalizedAliases = [...new Set(aliases.map(normalizeMangaTitle).filter((value) => value !== normalizedTitle))];

    if (catalogData.mangaCoverID) {
      await MediaService.requireAttachable(catalogData.mangaCoverID, userID, "MANGA_COVER");
    }

    let externalData: Awaited<ReturnType<typeof jikanService.getManga>>["data"] = null;
    let externalEtag: string | null = null;
    let externalError: string | null = null;
    if (malId) {
      try {
        const response = await jikanService.getManga(malId);
        if (!response.data || response.data.malId !== malId) throw new Error("A Jikan retornou uma obra incompatível com o MAL ID selecionado.");
        externalData = response.data;
        externalEtag = response.etag;
      } catch (error) {
        externalError = error instanceof Error ? error.message.slice(0, 500) : "Falha ao sincronizar com a Jikan.";
      }
    }

    const selectedDemographics = [...new Set((catalogData.demographics ?? []).map((value: string) => value.trim()).filter(Boolean))];
    if (selectedDemographics.length && (!externalData || selectedDemographics.some((value) => !externalData!.demographics.includes(value)))) {
      throw graphQLError("Selecione apenas demografias retornadas pelo MyAnimeList.", "BAD_USER_INPUT");
    }

    try {
      const newManga = await MangaModel.create({
        ...catalogData,
        title: catalogData.title.trim(),
        description: catalogData.description.trim(),
        mangaka: catalogData.mangaka.trim(),
        genders: [...new Set(catalogData.genders.map((value) => value.trim()))],
        demographics: selectedDemographics,
        normalizedTitle,
        aliases,
        normalizedAliases,
        normalizedTitles: [normalizedTitle, ...normalizedAliases],
        createdByUserID: userID,
        mangaCover: "",
        officialPublicationStatus: externalData?.publicationStatus ?? "UNKNOWN",
        officialTotalChapters: externalData?.totalChapters ?? null,
        ...(malId ? {
          externalMetadata: {
            malId,
            lastSyncedAt: externalData ? new Date() : null,
            demographicsFetchedAt: externalData ? new Date() : null,
            etag: externalEtag,
            lastSyncError: externalError,
            nextSyncAttemptAt: externalError ? new Date(Date.now() + JIKAN_RETRY_AFTER_HOURS * 3_600_000) : null,
          },
          trackers: {
            ...(catalogData.trackers ?? {}),
            myanimelist: externalData?.malUrl ?? `https://myanimelist.net/manga/${malId}`,
          },
        } : {}),
      });

      if (catalogData.mangaCoverID) {
        await MediaService.attach(catalogData.mangaCoverID, userID, "MANGA_COVER", "MANGA", newManga._id);
      }
      await GroupMangaModel.updateOne(
        { group: groupID, manga: newManga._id },
        { $setOnInsert: { addedByUserID: userID, translationLanguage: translationLanguage ?? group.country } },
        { upsert: true },
      );
      return newManga;
    } catch (error: any) {
      if (error?.code === 11000) {
        throw graphQLError("Este manga já existe no catálogo global.", "CONFLICT");
      }
      throw error;
    }
  }

  static async addToGroup(mangaID: string, groupID: string, userID: string, showAdultContent = false, translationLanguage?: string) {
    const group = await GroupModel.findOne({ _id: groupID, ownerID: userID });
    if (!group) throw graphQLError("Sem permissão para administrar este grupo.", "FORBIDDEN");
    const manga = await MangaModel.findOne({ _id: mangaID, ...(showAdultContent ? {} : { isAdult: { $ne: true } }) });
    if (!manga) throw graphQLError("Manga não encontrado.", "NOT_FOUND");
    await GroupMangaModel.updateOne(
      { group: groupID, manga: mangaID },
      { $setOnInsert: { addedByUserID: userID, translationLanguage: translationLanguage?.trim().slice(0, 80) || group.country } },
      { upsert: true },
    );
    return manga;
  }

  static async updateManga(id: string, data: any, userID: string) {
    id = parseObjectID(id, "Obra");
    const [current, user] = await Promise.all([
      MangaModel.findById(id).lean(),
      UserModel.findById(userID).select("accountType").lean(),
    ]);
    if (!current) throw graphQLError("Manga não encontrado.", "NOT_FOUND");

    if (user?.accountType !== "AEGIS") {
      throw graphQLError("Somente a autoridade AEGIS pode editar metadados globais.", "FORBIDDEN");
    }

    data = MangaValidation.updateManga(data);

    if (data.demographics !== undefined && data.demographics.length) {
      const malId = current.externalMetadata?.malId;
      if (!malId) throw graphQLError("Vincule a obra ao MyAnimeList antes de definir a demografia.", "BAD_USER_INPUT");
      const externalData = await this.getExternal(malId);
      if (data.demographics.some((value: string) => !externalData.demographics.includes(value))) {
        throw graphQLError("Selecione apenas demografias retornadas pelo MyAnimeList.", "BAD_USER_INPUT");
      }
    }

    const updates: any = {};
    for (const field of ["description", "mangaka", "genders", "demographics", "trackers", "isAdult"]) {
      if (data[field] !== undefined) updates[field] = data[field];
    }
    if (data.title !== undefined) {
      updates.title = String(data.title).trim();
      updates.normalizedTitle = normalizeMangaTitle(data.title);
    }
    if (data.aliases !== undefined) {
      updates.aliases = [...new Set(data.aliases.map((value: string) => value.trim()).filter(Boolean))];
      updates.normalizedAliases = updates.aliases.map(normalizeMangaTitle);
    }
    if (data.title !== undefined || data.aliases !== undefined) {
      const nextTitle = updates.normalizedTitle ?? current.normalizedTitle;
      const nextAliases = updates.normalizedAliases ?? current.normalizedAliases ?? [];
      updates.normalizedAliases = [...new Set(nextAliases.filter((value: string) => value !== nextTitle))];
      updates.normalizedTitles = [nextTitle, ...updates.normalizedAliases];
    }

    const nextCover = data.removeCover
      ? null
      : data.mangaCoverID === undefined
        ? current.mangaCoverID
        : data.mangaCoverID;
    const coverChanged = String(nextCover ?? "") !== String(current.mangaCoverID ?? "");
    if (coverChanged && nextCover) {
      await MediaService.requireAttachable(nextCover, userID, "MANGA_COVER");
      await MediaService.attach(nextCover, userID, "MANGA_COVER", "MANGA", id);
    }
    if (coverChanged) updates.mangaCoverID = nextCover;

    try {
      const result = await MangaModel.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true });
      if (coverChanged && current.mangaCoverID) {
        await MediaService.orphan(current.mangaCoverID, "MANGA", id);
      }
      return result;
    } catch (error: any) {
      if (error?.code === 11000) throw graphQLError("Este título já existe.", "CONFLICT");
      throw error;
    }
  }

  static async updateGroupManga(groupID: string, mangaID: string, rawData: any, userID: string) {
    groupID = parseObjectID(groupID, "Grupo");
    mangaID = parseObjectID(mangaID, "Obra");
    const allowedFields = new Set(["description", "mangaCoverID"]);
    if (!rawData || Object.keys(rawData).length === 0 || Object.keys(rawData).some((field) => !allowedFields.has(field))) {
      throw graphQLError("O grupo pode atualizar apenas a descrição e a capa da obra.", "BAD_USER_INPUT");
    }

    const [group, relation, current] = await Promise.all([
      GroupModel.findOne({ _id: groupID, ownerID: userID }).lean(),
      GroupMangaModel.findOne({ group: groupID, manga: mangaID }),
      MangaModel.findById(mangaID).lean(),
    ]);
    if (!group) throw graphQLError("Grupo não encontrado ou sem permissão.", "FORBIDDEN");
    if (!relation) throw graphQLError("Esta obra não está relacionada ao grupo.", "NOT_FOUND");
    if (!current) throw graphQLError("Manga não encontrado.", "NOT_FOUND");

    const data = MangaValidation.updateManga(rawData);
    const updates: Record<string, unknown> = {};
    if (data.description !== undefined) updates.descriptionOverride = data.description;

    const nextCover = data.mangaCoverID === undefined ? relation.mangaCoverIDOverride : data.mangaCoverID;
    const coverChanged = String(nextCover ?? "") !== String(relation.mangaCoverIDOverride ?? "");
    if (coverChanged && nextCover) {
      await MediaService.requireAttachable(nextCover, userID, "MANGA_COVER");
      await MediaService.attach(nextCover, userID, "MANGA_COVER", "GROUP", groupID);
    }
    if (coverChanged) updates.mangaCoverIDOverride = nextCover;

    if (Object.keys(updates).length) await GroupMangaModel.updateOne({ _id: relation._id }, { $set: updates }, { runValidators: true });
    if (coverChanged && relation.mangaCoverIDOverride) await MediaService.orphan(relation.mangaCoverIDOverride, "GROUP", groupID);
    return {
      ...current,
      description: data.description ?? relation.descriptionOverride ?? current.description,
      mangaCoverID: data.mangaCoverID ?? relation.mangaCoverIDOverride ?? current.mangaCoverID,
    };
  }

  static async getByMangaAndGroup(
    mangaId: string,
    groupId?: string,
    options: { includePages?: boolean; includeMangaInfo?: boolean; includeGroupInfo?: boolean } = {},
  ) {
    if (!mangaId) throw graphQLError("mangaId é obrigatório.", "BAD_USER_INPUT");
    const { includePages = false, includeMangaInfo = true, includeGroupInfo = true } = options;
    const filter: Record<string, string> = { manga: mangaId };
    if (groupId) filter.group = groupId;
    const query = ChapterModel.find(filter).sort({ chapterNumber: -1, createdAt: -1 });
    if (includeMangaInfo) query.populate("manga");
    if (includeGroupInfo) query.populate("group");
    if (!includePages) query.select("-pages");
    const chapters = await query.lean();
    return chapters.map((chapter: any) => {
      const mangaInfo = chapter.manga && typeof chapter.manga === "object" && "title" in chapter.manga
        ? chapter.manga
        : undefined;
      const groupInfo = chapter.group && typeof chapter.group === "object" && "name" in chapter.group
        ? chapter.group
        : undefined;
      return {
        ...chapter,
        id: chapter._id.toString(),
        manga: String(mangaInfo?._id ?? chapter.manga),
        group: String(groupInfo?._id ?? chapter.group),
        mangaInfo,
        groupInfo,
        views: Number(chapter.views ?? 0),
      };
    });
  }

  static async syncExternalMetadata(mangaID: string, throwOnFailure = true) {
    const manga = await MangaModel.findById(mangaID).lean();
    const malId = manga?.externalMetadata?.malId;
    if (!manga) throw graphQLError("Manga não encontrado.", "NOT_FOUND");
    if (!malId) throw graphQLError("Este manga ainda não está associado ao MyAnimeList.", "BAD_USER_INPUT");
    try {
      const response = await jikanService.getManga(
        malId,
        manga.demographics?.length ? manga.externalMetadata?.etag : null,
      );
      const now = new Date();
      const updates: Record<string, unknown> = {
        "externalMetadata.lastSyncedAt": now,
        "externalMetadata.demographicsFetchedAt": now,
        "externalMetadata.lastSyncError": null,
        "externalMetadata.nextSyncAttemptAt": null,
      };
      if (!response.notModified && response.data) {
        updates.officialPublicationStatus = response.data.publicationStatus;
        updates.officialTotalChapters = response.data.totalChapters;
        updates["externalMetadata.etag"] = response.etag;
        updates["trackers.myanimelist"] = response.data.malUrl ?? `https://myanimelist.net/manga/${malId}`;
      }
      return MangaModel.findByIdAndUpdate(mangaID, { $set: updates }, { returnDocument: "after" }).lean();
    } catch (error) {
      const message = error instanceof Error ? error.message.slice(0, 500) : "Falha ao sincronizar com a Jikan.";
      await MangaModel.updateOne({ _id: mangaID }, { $set: {
        "externalMetadata.lastSyncError": message,
        "externalMetadata.nextSyncAttemptAt": new Date(Date.now() + JIKAN_RETRY_AFTER_HOURS * 3_600_000),
      } });
      if (throwOnFailure) throw graphQLError(message, "SERVICE_UNAVAILABLE");
      return manga;
    }
  }

  static async syncExternalMetadataAsAdmin(mangaID: string, userID: string) {
    const user = await UserModel.findById(userID).select("accountType").lean();
    if (user?.accountType !== "AEGIS") throw graphQLError("Somente administradores podem sincronizar metadados oficiais.", "FORBIDDEN");
    return this.syncExternalMetadata(mangaID, true);
  }

  static async linkExternalMetadata(mangaID: string, malId: number, userID: string) {
    mangaID = parseObjectID(mangaID, "Obra");
    const user = await UserModel.findById(userID).select("accountType").lean();
    if (user?.accountType !== "AEGIS") throw graphQLError("Somente administradores podem vincular uma obra ao MyAnimeList.", "FORBIDDEN");
    if (!Number.isSafeInteger(malId) || malId <= 0) throw graphQLError("Identificador do MyAnimeList inválido.", "BAD_USER_INPUT");
    const current = await MangaModel.findById(mangaID).lean();
    if (!current) throw graphQLError("Manga não encontrado.", "NOT_FOUND");

    const response = await jikanService.getManga(malId);
    if (!response.data || response.data.malId !== malId) throw graphQLError("A Jikan não retornou os dados da obra selecionada.", "SERVICE_UNAVAILABLE");
    try {
      return await MangaModel.findByIdAndUpdate(mangaID, {
        $set: {
          officialPublicationStatus: response.data.publicationStatus,
          officialTotalChapters: response.data.totalChapters,
          "externalMetadata.malId": malId,
          "externalMetadata.lastSyncedAt": new Date(),
          "externalMetadata.demographicsFetchedAt": new Date(),
          "externalMetadata.etag": response.etag,
          "externalMetadata.lastSyncError": null,
          "externalMetadata.nextSyncAttemptAt": null,
          "trackers.myanimelist": response.data.malUrl ?? `https://myanimelist.net/manga/${malId}`,
        },
      }, { returnDocument: "after", runValidators: true });
    } catch (error: any) {
      if (error?.code === 11000) throw graphQLError("Esta obra do MyAnimeList já está vinculada a outro manga.", "CONFLICT");
      throw error;
    }
  }

  static async syncStaleExternalMetadata(limit = 10) {
    const staleBefore = new Date(Date.now() - JIKAN_SYNC_AFTER_DAYS * 86_400_000);
    const staleFilter: any = {
      "externalMetadata.malId": { $type: "number" },
      $or: [
        {
          $and: [
            { $or: [{ "externalMetadata.lastSyncedAt": null }, { "externalMetadata.lastSyncedAt": { $lte: staleBefore } }] },
            { $or: [{ "externalMetadata.nextSyncAttemptAt": null }, { "externalMetadata.nextSyncAttemptAt": { $lte: new Date() } }] },
          ],
        },
        {
          "externalMetadata.demographicsFetchedAt": null,
          $or: [{ "externalMetadata.nextSyncAttemptAt": null }, { "externalMetadata.nextSyncAttemptAt": { $lte: new Date() } }],
        },
      ],
    };
    const rows = await MangaModel.find(staleFilter).select("_id").limit(Math.min(Math.max(limit, 1), 30)).lean();
    for (const row of rows) await this.syncExternalMetadata(row._id.toString(), false);
    return rows.length;
  }

  static async getTranslations(mangaID: string) {
    const mangaObjectID = new Types.ObjectId(mangaID);
    const [manga, relations, progressRows] = await Promise.all([
      MangaModel.findById(mangaObjectID).select("officialPublicationStatus officialTotalChapters").lean(),
      GroupMangaModel.find({ manga: mangaObjectID }).lean(),
      ChapterModel.aggregate([
        { $match: { manga: mangaObjectID } },
        { $addFields: { isMainForProgress: { $or: [
          { $eq: ["$chapterType", "MAIN"] },
          { $eq: ["$chapterType", "ONESHOT"] },
          { $and: [
            { $eq: [{ $ifNull: ["$chapterType", null] }, null] },
            { $gt: ["$chapterNumber", 0] },
            { $eq: ["$chapterNumber", { $trunc: "$chapterNumber" }] },
          ] },
        ] }, progressChapterNumber: { $cond: [
          { $eq: ["$chapterType", "ONESHOT"] },
          { $max: ["$chapterNumber", 1] },
          "$chapterNumber",
        ] } } },
        { $group: {
          _id: "$group",
          latestMainChapter: { $max: { $cond: ["$isMainForProgress", "$progressChapterNumber", null] } },
          lastMainChapterPublishedAt: { $max: { $cond: ["$isMainForProgress", "$createdAt", null] } },
          firstPublicationAt: { $min: "$createdAt" },
        } },
      ]),
    ]);
    if (!manga) return [];

    const relationByGroup = new Map(relations.map((relation) => [relation.group.toString(), relation]));
    const progressByGroup = new Map(progressRows.map((row) => [row._id.toString(), row]));
    const groupIDs = [...new Set([...relationByGroup.keys(), ...progressByGroup.keys()])];
    const groups = await GroupModel.find({ _id: { $in: groupIDs } }).lean();

    return groups.map((group) => {
      const groupID = group._id.toString();
      const relation = relationByGroup.get(groupID);
      const progress = progressByGroup.get(groupID);
      const resolved = resolveTranslationStatus({
        officialPublicationStatus: manga.officialPublicationStatus ?? "UNKNOWN",
        officialTotalChapters: manga.officialTotalChapters,
        latestMainChapter: progress?.latestMainChapter,
        lastMainChapterPublishedAt: progress?.lastMainChapterPublishedAt,
        relationshipCreatedAt: relation?.createdAt ?? progress?.firstPublicationAt,
        override: relation?.translationStatusOverride,
      });
      return {
        mangaID,
        group: { ...group, id: groupID },
        groupID,
        language: relation?.translationLanguage ?? group.country,
        latestMainChapter: progress?.latestMainChapter ?? null,
        lastMainChapterPublishedAt: progress?.lastMainChapterPublishedAt?.toISOString?.() ?? progress?.lastMainChapterPublishedAt ?? null,
        translationStatus: resolved.status,
        calculatedTranslationStatus: resolved.calculatedStatus,
        translationStatusOverride: relation?.translationStatusOverride ?? null,
        overridden: resolved.overridden,
        statusOverrideByUserID: relation?.statusOverrideByUserID?.toString() ?? null,
        statusOverrideAt: relation?.statusOverrideAt?.toISOString?.() ?? relation?.statusOverrideAt ?? null,
      };
    });
  }

  static async getTranslationsForGroup(groupID: string) {
    const groupObjectID = new Types.ObjectId(groupID);
    const [group, relations, progressRows] = await Promise.all([
      GroupModel.findById(groupObjectID).lean(),
      GroupMangaModel.find({ group: groupObjectID }).lean(),
      ChapterModel.aggregate([
        { $match: { group: groupObjectID } },
        { $addFields: { isMainForProgress: { $or: [
          { $eq: ["$chapterType", "MAIN"] },
          { $eq: ["$chapterType", "ONESHOT"] },
          { $and: [
            { $eq: [{ $ifNull: ["$chapterType", null] }, null] },
            { $gt: ["$chapterNumber", 0] },
            { $eq: ["$chapterNumber", { $trunc: "$chapterNumber" }] },
          ] },
        ] }, progressChapterNumber: { $cond: [
          { $eq: ["$chapterType", "ONESHOT"] },
          { $max: ["$chapterNumber", 1] },
          "$chapterNumber",
        ] } } },
        { $group: {
          _id: "$manga",
          latestMainChapter: { $max: { $cond: ["$isMainForProgress", "$progressChapterNumber", null] } },
          lastMainChapterPublishedAt: { $max: { $cond: ["$isMainForProgress", "$createdAt", null] } },
          firstPublicationAt: { $min: "$createdAt" },
        } },
      ]),
    ]);
    if (!group) return [];
    const relationByManga = new Map(relations.map((relation) => [relation.manga.toString(), relation]));
    const progressByManga = new Map(progressRows.map((row) => [row._id.toString(), row]));
    const mangaIDs = [...new Set([...relationByManga.keys(), ...progressByManga.keys()])];
    const mangas = await MangaModel.find({ _id: { $in: mangaIDs } }).select("officialPublicationStatus officialTotalChapters").lean();
    return mangas.map((manga) => {
      const mangaID = manga._id.toString();
      const relation = relationByManga.get(mangaID);
      const progress = progressByManga.get(mangaID);
      const resolved = resolveTranslationStatus({
        officialPublicationStatus: manga.officialPublicationStatus ?? "UNKNOWN",
        officialTotalChapters: manga.officialTotalChapters,
        latestMainChapter: progress?.latestMainChapter,
        lastMainChapterPublishedAt: progress?.lastMainChapterPublishedAt,
        relationshipCreatedAt: relation?.createdAt ?? progress?.firstPublicationAt,
        override: relation?.translationStatusOverride,
      });
      return {
        mangaID,
        group: { ...group, id: groupID },
        groupID,
        language: relation?.translationLanguage ?? group.country,
        latestMainChapter: progress?.latestMainChapter ?? null,
        lastMainChapterPublishedAt: progress?.lastMainChapterPublishedAt?.toISOString?.() ?? progress?.lastMainChapterPublishedAt ?? null,
        translationStatus: resolved.status,
        calculatedTranslationStatus: resolved.calculatedStatus,
        translationStatusOverride: relation?.translationStatusOverride ?? null,
        overridden: resolved.overridden,
        statusOverrideByUserID: relation?.statusOverrideByUserID?.toString() ?? null,
        statusOverrideAt: relation?.statusOverrideAt?.toISOString?.() ?? relation?.statusOverrideAt ?? null,
      };
    });
  }

  static async setTranslationStatusOverride(mangaID: string, groupID: string, value: TranslationStatus | null, userID: string) {
    mangaID = parseObjectID(mangaID, "Obra");
    groupID = parseObjectID(groupID, "Grupo");
    const user = await UserModel.findById(userID).select("accountType").lean();
    if (user?.accountType !== "AEGIS") throw graphQLError("Somente administradores podem alterar o status da tradução.", "FORBIDDEN");
    if (value != null && !TRANSLATION_STATUSES.includes(value)) throw graphQLError("Status de tradução inválido.", "BAD_USER_INPUT");
    const relation = await GroupMangaModel.findOneAndUpdate(
      { manga: mangaID, group: groupID },
      { $set: { translationStatusOverride: value, statusOverrideByUserID: userID, statusOverrideAt: new Date() } },
      { returnDocument: "after", runValidators: true },
    );
    if (!relation) throw graphQLError("Relação entre grupo e manga não encontrada.", "NOT_FOUND");
    return (await this.getTranslations(mangaID)).find((translation) => translation.groupID === groupID);
  }
}

export default MangaService;
