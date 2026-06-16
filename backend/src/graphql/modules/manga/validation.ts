class MangaValidation {
  static createManga(data: any) {
    if (!data.title) {
      throw new Error("O titulo do manga é obrigatório!");
    }

    if (!data.description) {
      throw new Error("A descrição do manga é obrigatória!");
    }

    if (!data.mangaka) {
      throw new Error("O nome do mangaka é obrigatório!");
    }

    if (!data.genders) {
      throw new Error("Insira pelo menos 1 gênero!");
    }
  }
}

export { MangaValidation };
