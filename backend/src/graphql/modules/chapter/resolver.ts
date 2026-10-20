import ChapterService from "./service";
import { GroupModel } from "../group/model"; // Ajuste o caminho do seu model de grupo
import { requireAuthenticated } from "../../../services/auth/authorization";
import { MangaModel } from "../manga/model";
import { getViewerAccess } from "../../../services/auth/viewer-access";
import { graphQLError } from "../../errors";
import { GroupMangaModel } from "../manga/group-manga-model";
import { selectionHasField } from "../../selection";
import { ReaderNodeQueue } from "../../../services/reader-node-queue";
import { parseObjectID } from "../../validation";

const chapterResolvers = {
  Query: {
    chapter: async (_: any, { id }: any) => ChapterService.getChapter(id),
    latestChapters: async (_: any, { limit }: any, context: any, info: any) =>
      ChapterService.getLatestChapters(
        limit,
        (await getViewerAccess(context)).showAdultContent,
        {
          includePages: selectionHasField(info, "pages"),
          includeMangaInfo: selectionHasField(info, "mangaInfo"),
          includeGroupInfo: selectionHasField(info, "groupInfo"),
        },
      ),
    weeklyMostReadMangas: async (_: unknown, { limit }: { limit: number }, context: any) =>
      ChapterService.getWeeklyMostReadMangas(limit, (await getViewerAccess(context)).showAdultContent),
    topReaders: (_: unknown, { period, limit }: { period: "WEEK" | "ALL_TIME"; limit: number }) =>
      ChapterService.getTopReaders(period, limit),
    existingChapterNumbers: async (_: unknown, { mangaID, groupID }: { mangaID: string; groupID: string }, context: any) => {
      const userID = requireAuthenticated(context);
      const userGroup = await GroupModel.exists({ _id: groupID, ownerID: userID });
      if (!userGroup) throw graphQLError("Grupo não encontrado ou sem permissão para publicar.", "FORBIDDEN");
      return ChapterService.getExistingNumbers(mangaID, groupID);
    },
    readerPinRequests: (_: unknown, { limit }: { limit: number }, context: any) =>
      ReaderNodeQueue.listPending(requireAuthenticated(context), limit),
  },

  Mutation: {
    // 1. Capturamos o parâmetro 'mangaId' e o input 'data' separadamente
    createChapter: async (_: any, { mangaID, groupID, data }: any, context: any) => {
      const userID = requireAuthenticated(context);
      mangaID = parseObjectID(mangaID, "Obra");
      groupID = parseObjectID(groupID, "Grupo");

      // O grupo vem da área atualmente administrada, mas a propriedade é
      // sempre confirmada no backend com o usuário autenticado.
      const userGroup = await GroupModel.findOne({ _id: groupID, ownerID: userID });

      if (!userGroup) {
        throw new Error(
          "Grupo não encontrado ou sem permissão para publicar.",
        );
      }

      // 3. Montamos o payload completo exigido pelo banco, injetando os parâmetros
      const fullChapterData = {
        ...data, // chapterNumber, chapterTitle, pages
        manga: mangaID, // ID pego do parâmetro da Mutation
        group: userGroup._id.toString(), // ID pego do contexto de autenticação
      };

      await GroupMangaModel.updateOne(
        { group: userGroup._id, manga: mangaID },
        { $setOnInsert: { addedByUserID: userID, translationLanguage: userGroup.country } },
        { upsert: true },
      );

      // 4. Passamos o objeto completo e o ID do usuário para o Service rodar os testes de negócio
      return ChapterService.createChapter(fullChapterData, userID);
    },
    recordChapterView: async (_: unknown, { chapterID }: { chapterID: string }) => {
      const result = await ChapterService.recordView(chapterID);
      if (!result) throw graphQLError("Capítulo não encontrado.", "NOT_FOUND");
      return result;
    },
    recordChapterRead: async (_: unknown, { chapterID }: { chapterID: string }, context: any) =>
      ChapterService.recordRead(chapterID, requireAuthenticated(context)),
    setReaderNodeOnline: (_: unknown, { online }: { online: boolean }, context: any) =>
      ReaderNodeQueue.setOnline(requireAuthenticated(context), online),
    reportChapterPagesToReaderNode: (_: unknown, { chapterID, pageIndexes }: { chapterID: string; pageIndexes: number[] }, context: any) =>
      ReaderNodeQueue.reportChapterPages(requireAuthenticated(context), chapterID, pageIndexes),
    acknowledgeReaderPinRequests: (_: unknown, { cids }: { cids: string[] }, context: any) =>
      ReaderNodeQueue.acknowledge(requireAuthenticated(context), cids),
  },
  Chapter: {
    views: (chapter: any) => Number(chapter.views ?? 0),
    telegramPages: (chapter: any) => chapter.telegramPages ?? [],
    chapterType: (chapter: any) => chapter.chapterType
      ?? (Number.isInteger(chapter.chapterNumber) && chapter.chapterNumber > 0 ? "MAIN" : "EXTRA"),
    mangaInfo: async (chapter: any) => chapter.mangaInfo ?? MangaModel.findById(chapter.manga),
    groupInfo: async (chapter: any) => chapter.groupInfo ?? GroupModel.findById(chapter.group),
  },
};

export { chapterResolvers };
