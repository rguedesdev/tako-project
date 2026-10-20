import { z } from "zod";

import { graphQLError } from "../../errors";

const CHAPTER_TYPES = ["MAIN", "EXTRA", "SPECIAL", "ONESHOT"] as const;
type ChapterType = (typeof CHAPTER_TYPES)[number];

const chapterSchema = z.object({
  chapterTitle: z.string().trim().max(180, "O título do capítulo deve ter no máximo 180 caracteres.").nullable().optional().transform((value) => value ?? undefined),
  chapterNumber: z.number().finite().min(0, "O número do capítulo deve ser válido e não negativo."),
  pages: z.array(z.string().trim().min(1).max(2048)).min(1, "O capítulo precisa conter pelo menos uma página válida.").max(500, "O capítulo excede o limite de 500 páginas."),
  telegramPages: z.array(z.string().trim().url().max(2048)).max(500).nullable().optional().transform((value) => value ?? []),
  chapterType: z.enum(CHAPTER_TYPES).nullable().optional().transform((value) => value ?? undefined),
  manga: z.string().regex(/^[a-f\d]{24}$/i, "Obra inválida."),
  group: z.string().regex(/^[a-f\d]{24}$/i, "Grupo inválido."),
}).strict().superRefine((data, context) => {
  if (data.telegramPages.length && data.telegramPages.length !== data.pages.length) {
    context.addIssue({ code: "custom", path: ["telegramPages"], message: "Cada página precisa ter uma URL de reserva correspondente." });
  }
  if (data.telegramPages.some((url) => new URL(url).protocol !== "https:")) {
    context.addIssue({ code: "custom", path: ["telegramPages"], message: "As URLs de reserva devem usar HTTPS." });
  }
  const kind = data.chapterType ?? (Number.isInteger(data.chapterNumber) && data.chapterNumber > 0 ? "MAIN" : "EXTRA");
  if (kind === "MAIN" && (!Number.isInteger(data.chapterNumber) || data.chapterNumber <= 0)) {
    context.addIssue({ code: "custom", path: ["chapterNumber"], message: "Capítulos principais devem usar um número inteiro maior que zero." });
  }
});

class ChapterValidation {
  static createChapter(data: unknown) {
    const result = chapterSchema.safeParse(data);
    if (!result.success) throw graphQLError(result.error.issues[0]?.message ?? "Dados do capítulo inválidos.", "BAD_USER_INPUT");
    const chapterType: ChapterType = result.data.chapterType
      ?? (Number.isInteger(result.data.chapterNumber) && result.data.chapterNumber > 0 ? "MAIN" : "EXTRA");
    return { ...result.data, chapterType };
  }
}

export { CHAPTER_TYPES, ChapterValidation };
export type { ChapterType };
