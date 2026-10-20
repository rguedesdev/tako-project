import { z } from "zod";

import { graphQLError } from "../../errors";

function trackerUrl(label: string, domains: string[]) {
  return z.string().trim().max(500, `${label}: o link deve ter no máximo 500 caracteres.`)
    .transform((value) => value || null)
    .refine((value) => {
      if (!value) return true;
      try {
        const url = new URL(value);
        return url.protocol === "https:"
          && !url.username
          && !url.password
          && domains.some((domain) => url.hostname === domain || url.hostname.endsWith(`.${domain}`));
      } catch {
        return false;
      }
    }, `${label}: informe uma URL HTTPS válida da plataforma.`)
    .optional()
    .nullable();
}

const trackersSchema = z.object({
  myanimelist: trackerUrl("MyAnimeList", ["myanimelist.net"]),
  anilist: trackerUrl("AniList", ["anilist.co"]),
  animeplanet: trackerUrl("Anime-Planet", ["anime-planet.com"]),
  anidb: trackerUrl("AniDB", ["anidb.net"]),
}).strict();

const mangaFields = {
  title: z.string().trim().min(1, "O título do manga é obrigatório.").max(180),
  aliases: z.array(z.string().trim().min(1).max(180)).max(30).optional(),
  description: z.string().trim().min(120, "A descrição deve ter ao menos 120 caracteres.").max(600),
  mangaka: z.string().trim().min(1, "O nome do mangaká é obrigatório.").max(180),
  genders: z.array(z.string().trim().min(1).max(60)).min(1, "Insira pelo menos um gênero.").max(30),
  demographics: z.array(z.string().trim().min(1).max(60)).max(20).optional().default([]),
  mangaCoverID: z.string().regex(/^[a-f\d]{24}$/i, "Capa inválida.").optional(),
  trackers: trackersSchema.optional(),
  isAdult: z.boolean().default(false),
  malId: z.number().int().positive().optional(),
  translationLanguage: z.string().trim().min(2).max(80).optional(),
};
const mangaSchema = z.object(mangaFields).strict();
const mangaUpdateSchema = z.object({
  title: mangaFields.title.optional(),
  aliases: mangaFields.aliases,
  description: mangaFields.description.optional(),
  mangaka: mangaFields.mangaka.optional(),
  genders: mangaFields.genders.optional(),
  demographics: z.array(z.string().trim().min(1).max(60)).max(20).optional(),
  mangaCoverID: mangaFields.mangaCoverID,
  trackers: mangaFields.trackers,
  isAdult: mangaFields.isAdult,
  removeCover: z.boolean().optional(),
}).strict();

class MangaValidation {
  static createManga(data: unknown) {
    const result = mangaSchema.safeParse(data);
    if (!result.success) {
      throw graphQLError(result.error.issues[0]?.message ?? "Dados do manga inválidos.", "BAD_USER_INPUT");
    }
    return result.data;
  }

  static updateManga(data: unknown) {
    const result = mangaUpdateSchema.safeParse(data);
    if (!result.success) {
      throw graphQLError(result.error.issues[0]?.message ?? "Dados do manga inválidos.", "BAD_USER_INPUT");
    }
    return result.data;
  }
}

export { MangaValidation };
