import { graphQLError } from "../../errors";

const CHAPTER_TYPES = ["MAIN", "EXTRA", "SPECIAL", "ONESHOT"] as const;
type ChapterType = (typeof CHAPTER_TYPES)[number];

class ChapterValidation {
  static createChapter(data: any) {
    if (typeof data.chapterNumber !== "number" || !Number.isFinite(data.chapterNumber) || data.chapterNumber < 0) {
      throw graphQLError("O número do capítulo deve ser um número válido e não negativo.", "BAD_USER_INPUT");
    }
    if (!Array.isArray(data.pages) || data.pages.length === 0 || data.pages.some((page: unknown) => typeof page !== "string" || !page.trim())) {
      throw graphQLError("O capítulo precisa conter pelo menos uma página válida.", "BAD_USER_INPUT");
    }
    if (data.telegramPages != null && (!Array.isArray(data.telegramPages)
      || data.telegramPages.length !== data.pages.length
      || data.telegramPages.some((url: unknown) => typeof url !== "string" || !/^https?:\/\//i.test(url.trim())))) {
      throw graphQLError("Cada página precisa ter uma URL de reserva válida do Telegram.", "BAD_USER_INPUT");
    }
    if (data.chapterType != null && !CHAPTER_TYPES.includes(data.chapterType)) {
      throw graphQLError("Tipo de capítulo inválido.", "BAD_USER_INPUT");
    }
    const chapterType: ChapterType = data.chapterType
      ?? (Number.isInteger(data.chapterNumber) && data.chapterNumber > 0 ? "MAIN" : "EXTRA");
    if (chapterType === "MAIN" && (!Number.isInteger(data.chapterNumber) || data.chapterNumber <= 0)) {
      throw graphQLError("Capítulos principais devem usar um número inteiro maior que zero.", "BAD_USER_INPUT");
    }
    return {
      ...data,
      chapterType,
      pages: data.pages.map((page: string) => page.trim()),
      telegramPages: data.telegramPages?.map((url: string) => url.trim()) ?? [],
    };
  }
}

export { CHAPTER_TYPES, ChapterValidation };
export type { ChapterType };
