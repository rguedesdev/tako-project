import { z } from "zod";

import { graphQLError } from "../../errors";

const MAX_COMMENT_LENGTH = 2000;
const objectIDSchema = z.string().regex(/^[a-f\d]{24}$/i);
const contentSchema = z.string().trim().min(1, "Escreva algo antes de publicar.").max(MAX_COMMENT_LENGTH, `O comentário pode ter no máximo ${MAX_COMMENT_LENGTH} caracteres.`);
const paginationSchema = z.object({
  offset: z.number().int().min(0, "Offset de paginação inválido."),
  limit: z.number().int().min(1, "O limite deve estar entre 1 e 50.").max(50, "O limite deve estar entre 1 e 50."),
}).strict();

function invalid(message: string): never {
  throw graphQLError(message, "BAD_USER_INPUT");
}

class CommentValidation {
  static id(value: unknown, fieldName = "ID") {
    if (!objectIDSchema.safeParse(value).success) invalid(`${fieldName} inválido.`);
  }

  static content(value: unknown) {
    const parsed = contentSchema.safeParse(value);
    if (!parsed.success) invalid(parsed.error.issues[0]?.message ?? "Comentário inválido.");
    return parsed.data;
  }

  static pagination(offset: unknown, limit: unknown) {
    const parsed = paginationSchema.safeParse({ offset, limit });
    if (!parsed.success) invalid(parsed.error.issues[0]?.message ?? "Paginação inválida.");
  }
}

export { CommentValidation, MAX_COMMENT_LENGTH };
