import { z } from "zod";

export const usernameSchema = z.string().trim().toLowerCase()
  .min(3, "O username precisa ter pelo menos 3 caracteres.")
  .max(30, "O username deve ter no máximo 30 caracteres.")
  .regex(/^[a-z0-9](?:[a-z0-9._]{1,28}[a-z0-9])?$/, "Use de 3 a 30 letras minúsculas, números, ponto ou sublinhado.");

export const emailSchema = z.string().trim().toLowerCase()
  .min(1, "Informe seu e-mail.")
  .email("Informe um e-mail válido.")
  .max(254, "O e-mail deve ter no máximo 254 caracteres.");

export const signUpSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120, "O nome deve ter no máximo 120 caracteres."),
  username: usernameSchema,
  email: emailSchema,
  password: z.string().min(8, "A senha precisa ter pelo menos 8 caracteres.").max(120, "A senha deve ter no máximo 120 caracteres.").refine((value) => new TextEncoder().encode(value).length <= 72, "A senha é muito longa para o mecanismo de segurança utilizado."),
  confirmPassword: z.string().min(1, "Confirme a senha."),
}).strict().refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.", path: ["confirmPassword"],
});

export const signInSchema = z.object({
  login: z.string().trim().min(1, "Informe seu username ou e-mail.").max(254, "O login deve ter no máximo 254 caracteres."),
  password: z.string().min(1, "Informe sua senha.").max(120, "A senha deve ter no máximo 120 caracteres.").refine((value) => new TextEncoder().encode(value).length <= 72, "A senha é muito longa para o mecanismo de segurança utilizado."),
}).strict();

const profileUrlSchema = (label: string, hosts?: string[]) => z.string().trim().max(500, `${label}: o link deve ter no máximo 500 caracteres.`)
  .transform((value) => value || null)
  .refine((value) => {
    if (!value) return true;
    try {
      const url = new URL(value);
      return url.protocol === "https:" && !url.username && !url.password
        && (!hosts || hosts.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`)));
    } catch { return false; }
  }, `${label}: informe uma URL HTTPS válida${hosts ? " da plataforma" : ""}.`);

export const profileSettingsSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120, "O nome deve ter no máximo 120 caracteres."),
  email: emailSchema,
  showAdultContent: z.boolean(),
  socialMedias: z.object({
    site: profileUrlSchema("Site"), discord: profileUrlSchema("Discord", ["discord.gg", "discord.com", "discordapp.com"]),
    telegram: profileUrlSchema("Telegram", ["t.me", "telegram.me", "telegram.org"]), x: profileUrlSchema("X / Twitter", ["x.com", "twitter.com"]),
    instagram: profileUrlSchema("Instagram", ["instagram.com"]), facebook: profileUrlSchema("Facebook", ["facebook.com", "fb.com"]),
    youtube: profileUrlSchema("YouTube", ["youtube.com", "youtu.be"]), tiktok: profileUrlSchema("TikTok", ["tiktok.com"]),
    bluesky: profileUrlSchema("Bluesky", ["bsky.app"]),
  }).strict(),
  trackers: z.object({
    myanimelist: profileUrlSchema("MyAnimeList", ["myanimelist.net"]), anilist: profileUrlSchema("AniList", ["anilist.co"]),
    animeplanet: profileUrlSchema("Anime-Planet", ["anime-planet.com"]), anidb: profileUrlSchema("AniDB", ["anidb.net"]),
  }).strict(),
}).strict();

const trackerInputSchema = z.object({
  myanimelist: profileUrlSchema("MyAnimeList", ["myanimelist.net"]),
  anilist: profileUrlSchema("AniList", ["anilist.co"]),
  animeplanet: profileUrlSchema("Anime-Planet", ["anime-planet.com"]),
  anidb: profileUrlSchema("AniDB", ["anidb.net"]),
}).strict();
export const groupInputSchema = z.object({
  name: z.string().trim().min(2, "O nome da scan precisa ter pelo menos 2 caracteres.").max(120),
  description: z.string().trim().min(10, "A descrição precisa ter pelo menos 10 caracteres.").max(1200),
  countryCode: z.string().regex(/^[A-Z]{2}$/, "Selecione um país válido."),
  groupImageID: z.string().regex(/^[a-f\d]{24}$/i, "Imagem do grupo inválida.").optional(),
  socialMedias: z.object({
    site: profileUrlSchema("Website"), discord: profileUrlSchema("Discord", ["discord.gg", "discord.com", "discordapp.com"]),
    x: profileUrlSchema("X / Twitter", ["x.com", "twitter.com"]), instagram: profileUrlSchema("Instagram", ["instagram.com"]),
    facebook: profileUrlSchema("Facebook", ["facebook.com", "fb.com"]), youtube: profileUrlSchema("YouTube", ["youtube.com", "youtu.be"]),
    tiktok: profileUrlSchema("TikTok", ["tiktok.com"]),
  }).strict(),
}).strict();

export const mangaInputSchema = z.object({
  title: z.string().trim().min(1, "Informe o título do manga.").max(180),
  description: z.string().trim().min(120, "A descrição precisa ter pelo menos 120 caracteres.").max(600),
  mangaka: z.string().trim().min(1, "Informe o nome do mangaká.").max(180),
  genders: z.array(z.string().trim().min(1).max(60)).min(1, "Insira pelo menos um gênero.").max(30),
  demographics: z.array(z.string().trim().min(1).max(60)).max(20),
  aliases: z.array(z.string().trim().min(1).max(180)).max(30),
  trackers: trackerInputSchema,
  isAdult: z.boolean(),
  malId: z.number().int().positive().optional(),
  translationLanguage: z.string().trim().min(2).max(80).optional(),
  mangaCoverID: z.string().regex(/^[a-f\d]{24}$/i, "Capa inválida.").optional(),
}).strict();

export function firstValidationMessage(error: unknown, fallback = "Confira os dados informados e tente novamente.") {
  if (error instanceof z.ZodError) return error.issues[0]?.message ?? fallback;
  if (error instanceof Error) return error.message;
  return fallback;
}
