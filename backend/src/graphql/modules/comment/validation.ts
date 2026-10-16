import { isValidObjectId } from "mongoose";

const MAX_COMMENT_LENGTH = 2000;

class CommentValidation {
  static id(value: unknown, fieldName = "ID") {
    if (typeof value !== "string" || !isValidObjectId(value)) {
      throw new Error(`${fieldName} inválido.`);
    }
  }

  static content(value: unknown) {
    if (typeof value !== "string") {
      throw new Error("O comentário precisa ser um texto.");
    }

    const content = value.trim();
    if (!content) throw new Error("Escreva algo antes de publicar.");
    if (content.length > MAX_COMMENT_LENGTH) {
      throw new Error(`O comentário pode ter no máximo ${MAX_COMMENT_LENGTH} caracteres.`);
    }

    return content;
  }

  static pagination(offset: unknown, limit: unknown) {
    if (!Number.isInteger(offset) || Number(offset) < 0) {
      throw new Error("Offset de paginação inválido.");
    }
    if (!Number.isInteger(limit) || Number(limit) < 1 || Number(limit) > 50) {
      throw new Error("O limite deve estar entre 1 e 50.");
    }
  }
}

export { CommentValidation, MAX_COMMENT_LENGTH };
