import { ChapterModel } from "./model";
import { MangaModel } from "../manga/model"; // Ajuste o caminho do model de manga
import { UserModel } from "../user/model";
import { ChapterValidation } from "./validation";
import { graphQLError } from "../../errors";
import { UserChapterReadModel } from "./read-model";
import { Types } from "mongoose";

class ChapterService {
  static async getFirstChaptersByManga(mangaIDs: string[], showAdultContent = false) {
    const ids = [...new Set(mangaIDs.filter((id) => Types.ObjectId.isValid(id)))].map((id) => new Types.ObjectId(id));
    if (!ids.length) return [];
    const adultMangaIDs = showAdultContent ? [] : await MangaModel.distinct("_id", { _id: { $in: ids }, isAdult: true });
    const excludedIDs = new Set(adultMangaIDs.map(String));
    const visibleIDs = ids.filter((id) => !excludedIDs.has(String(id)));
    if (!visibleIDs.length) return [];
    const chapters = await ChapterModel.aggregate([
      { $match: { manga: { $in: visibleIDs } } },
      { $sort: { createdAt: 1, _id: 1 } },
      { $group: { _id: "$manga", chapterID: { $first: "$_id" } } },
    ]);
    return chapters.map((chapter) => ({ mangaID: String(chapter._id), chapterID: String(chapter.chapterID) }));
  }

  static async getWeeklyMostReadMangas(limit = 10, showAdultContent = false) {
    const safeLimit = Math.min(Math.max(Math.trunc(limit || 10), 1), 50);
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const reads = await UserChapterReadModel.aggregate([
      { $match: { createdAt: { $gte: since } } },
      { $group: { _id: "$manga", reads: { $sum: 1 } } },
      { $sort: { reads: -1, _id: 1 } },
      { $limit: safeLimit },
    ]);
    if (!reads.length) return [];
    const mangaIDs = reads.map((row: any) => row._id);
    const mangas = await MangaModel.find({
      _id: { $in: mangaIDs },
      ...(showAdultContent ? {} : { isAdult: { $ne: true } }),
    }).select("title mangaCover mangaCoverID").lean();
    const byID = new Map(mangas.map((manga: any) => [String(manga._id), manga]));
    return reads.flatMap((row: any) => {
      const manga = byID.get(String(row._id));
      return manga ? [{ manga, reads: row.reads }] : [];
    });
  }

  static async getTopReaders(period: "WEEK" | "ALL_TIME" = "ALL_TIME", limit = 10) {
    const safeLimit = Math.min(Math.max(Math.trunc(limit || 10), 1), 50);
    const match = period === "WEEK" ? { createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } : {};
    const reads = await UserChapterReadModel.aggregate([
      { $match: match },
      { $group: { _id: "$user", chaptersRead: { $sum: 1 } } },
      { $sort: { chaptersRead: -1, _id: 1 } },
      { $limit: safeLimit },
    ]);
    if (!reads.length) return [];
    const users = await UserModel.find({ _id: { $in: reads.map((row: any) => row._id) } })
      .select("name username profilePicture profilePictureID")
      .lean();
    const byID = new Map(users.map((user: any) => [String(user._id), user]));
    return reads.flatMap((row: any) => {
      const user = byID.get(String(row._id));
      return user ? [{ user, chaptersRead: row.chaptersRead }] : [];
    });
  }

  static serialize(chapter: any) {
    return {
      ...chapter,
      id: chapter._id.toString(),
      manga: chapter.manga.toString(),
      group: chapter.group.toString(),
      views: Number(chapter.views ?? 0),
      createdAt: chapter.createdAt.toISOString(),
    };
  }

  static async getChapter(id: string) {
    const chapter = await ChapterModel.findById(id).lean();
    if (!chapter) return null;
    return ChapterService.serialize(chapter);
  }

  static async recordRead(chapterID: string, userID: string) {
    const chapter = await ChapterModel.findById(chapterID).select("manga").lean();
    if (!chapter) return false;
    try {
      const result = await UserChapterReadModel.updateOne(
        { user: userID, chapter: chapter._id },
        { $setOnInsert: { user: userID, chapter: chapter._id, manga: chapter.manga } },
        { upsert: true },
      );
      return result.upsertedCount > 0;
    } catch (error: any) {
      if (error?.code === 11000) return false;
      throw error;
    }
  }

  static async getLatestChapters(
    limit = 40,
    showAdultContent = false,
    options: { includePages?: boolean; includeMangaInfo?: boolean; includeGroupInfo?: boolean } = {},
  ) {
    const { includePages = false, includeMangaInfo = true, includeGroupInfo = true } = options;
    const safeLimit = Math.min(Math.max(limit, 1), 100);
    const adultMangaIDs = showAdultContent ? [] : await MangaModel.distinct("_id", { isAdult: true });
    const filter: Record<string, unknown> = showAdultContent ? {} : { manga: { $nin: adultMangaIDs } };
    const query = ChapterModel.find(filter).sort({ createdAt: -1 }).limit(safeLimit);
    if (includeMangaInfo) query.populate("manga");
    if (includeGroupInfo) query.populate("group");
    if (!includePages) query.select("-pages");
    const chapters = await query.lean();
    const latest = chapters.map((chapter: any) => {
      const mangaInfo = chapter.manga && typeof chapter.manga === "object" && "title" in chapter.manga
        ? chapter.manga
        : undefined;
      const groupInfo = chapter.group && typeof chapter.group === "object" && "name" in chapter.group
        ? chapter.group
        : undefined;
      return {
        ...ChapterService.serialize({
          ...chapter,
          manga: mangaInfo?._id ?? chapter.manga,
          group: groupInfo?._id ?? chapter.group,
        }),
        mangaInfo,
        groupInfo,
      };
    });
    const mangaIDs = [...new Set(latest.map((chapter: any) => String(chapter.manga)))];
    const firstChapters = await ChapterService.getFirstChaptersByManga(mangaIDs, showAdultContent);
    const firstChapterIDs = new Map(firstChapters.map((chapter) => [chapter.mangaID, chapter.chapterID]));
    return latest.map((chapter: any) => ({ ...chapter, firstChapterID: firstChapterIDs.get(String(chapter.manga)) ?? null }));
  }

  static getExistingNumbers(mangaID: string, groupID: string) {
    return ChapterModel.distinct("chapterNumber", { manga: mangaID, group: groupID });
  }

  static async createChapter(data: any, userID: string) {
    // 1. Valida se o número e as páginas estão corretos
    data = ChapterValidation.createChapter(data);

    // 2. Valida se o manga do parâmetro realmente existe no banco
    const mangaExist = await MangaModel.findById(data.manga);
    if (!mangaExist) {
      throw new Error("O manga especificado não existe!");
    }

    // 3. Valida se esse grupo já postou esse número de capítulo para evitar duplicados
    const chapterExist = await ChapterModel.findOne({
      manga: data.manga,
      group: data.group,
      chapterNumber: data.chapterNumber,
    });

    if (chapterExist) {
      throw graphQLError(`O seu grupo já cadastrou o Capítulo ${data.chapterNumber}!`, "CONFLICT");
    }

    // 4. Salva com segurança
    try {
      return await ChapterModel.create(data);
    } catch (error: any) {
      if (error?.code === 11000) {
        throw graphQLError(`O seu grupo já cadastrou o Capítulo ${data.chapterNumber}!`, "CONFLICT");
      }
      throw error;
    }
  }

  static async recordView(chapterID: string) {
    const chapter = await ChapterModel.findByIdAndUpdate(
      chapterID,
      { $inc: { views: 1 } },
      { returnDocument: "after" },
    ).select("views").lean();
    if (!chapter) return null;
    return { chapterID: chapter._id.toString(), views: Number(chapter.views ?? 0) };
  }
}

export default ChapterService;
