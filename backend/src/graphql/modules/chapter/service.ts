import { ChapterModel } from "./model";
import { MangaModel } from "../manga/model"; // Ajuste o caminho do model de mangá
import { ChapterValidation } from "./validation";
import { graphQLError } from "../../errors";

class ChapterService {
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
    return chapters.map((chapter: any) => {
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
  }

  static getExistingNumbers(mangaID: string, groupID: string) {
    return ChapterModel.distinct("chapterNumber", { manga: mangaID, group: groupID });
  }

  static async createChapter(data: any, userID: string) {
    // 1. Valida se o número e as páginas estão corretos
    data = ChapterValidation.createChapter(data);

    // 2. Valida se o mangá do parâmetro realmente existe no banco
    const mangaExist = await MangaModel.findById(data.manga);
    if (!mangaExist) {
      throw new Error("O mangá especificado não existe!");
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
