export const normalizeMangaTitle = (value: string) => value.normalize("NFKC").trim().toLocaleLowerCase("pt-BR").replace(/\s+/g, " ");
