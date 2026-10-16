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
    if (data.chapterType != null && !CHAPTER_TYPES.includes(data.chapterType)) {
      throw graphQLError("Tipo de capítulo inválido.", "BAD_USER_INPUT");
    }
    const chapterType: ChapterType = data.chapterType
      ?? (Number.isInteger(data.chapterNumber) && data.chapterNumber > 0 ? "MAIN" : "EXTRA");
    if (chapterType === "MAIN" && (!Number.isInteger(data.chapterNumber) || data.chapterNumber <= 0)) {
      throw graphQLError("Capítulos principais devem usar um número inteiro maior que zero.", "BAD_USER_INPUT");
    }
    return { ...data, chapterType, pages: data.pages.map((page: string) => page.trim()) };
  }
}

export { CHAPTER_TYPES, ChapterValidation };
export type { ChapterType };
