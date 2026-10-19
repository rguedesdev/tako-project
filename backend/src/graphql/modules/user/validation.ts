import { z } from "zod";

import { graphQLError } from "../../errors";

const usernameSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(3, "O username precisa ter pelo menos 3 caracteres.")
  .max(30, "O username deve ter no máximo 30 caracteres.")
  .regex(
    /^[a-z0-9](?:[a-z0-9._]{1,28}[a-z0-9])?$/,
    "Use apenas letras minúsculas, números, ponto ou sublinhado, sem pontuação nas extremidades.",
  );

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, "Informe seu e-mail.")
  .email("Informe um e-mail válido.")
  .max(254, "O e-mail deve ter no máximo 254 caracteres.");

const passwordSchema = z
  .string()
  .min(8, "A senha precisa ter pelo menos 8 caracteres.")
  .max(120, "A senha deve ter no máximo 120 caracteres.")
  .refine(
    (password) => Buffer.byteLength(password, "utf8") <= 72,
    "A senha é muito longa para o mecanismo de segurança utilizado.",
  );

const signUpSchema = z
  .object({
    name: z.string().trim().min(2, "Informe seu nome.").max(120),
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirme a senha."),
  })
  .strict()
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

const signInSchema = z
  .object({
    login: z.string().trim().min(1, "Informe username ou e-mail."),
    password: z.string().min(1, "Informe a senha."),
  })
  .strict();

const PROFILE_LINK_DOMAINS: Record<string, string[]> = {
  discord: ["discord.gg", "discord.com", "discordapp.com"],
  telegram: ["t.me", "telegram.me", "telegram.org"],
  x: ["x.com", "twitter.com"],
  instagram: ["instagram.com"],
  facebook: ["facebook.com", "fb.com"],
  youtube: ["youtube.com", "youtu.be"],
  tiktok: ["tiktok.com"],
  bluesky: ["bsky.app"],
};

function profileUrl(label: string, domains?: string[]) {
  return z.string().trim().max(500, `${label}: o link deve ter no máximo 500 caracteres.`)
    .transform((value) => value || null)
    .refine((value) => {
      if (!value) return true;
      try {
        const url = new URL(value);
        if (url.protocol !== "https:" || url.username || url.password) return false;
        return !domains || domains.some((domain) => url.hostname === domain || url.hostname.endsWith(`.${domain}`));
      } catch {
        return false;
      }
    }, `${label}: informe uma URL HTTPS válida${domains ? " da plataforma" : ""}.`)
    .optional()
    .nullable();
}

const profileSocialMediasSchema = z.object({
  site: profileUrl("Site"),
  discord: profileUrl("Discord", PROFILE_LINK_DOMAINS.discord),
  telegram: profileUrl("Telegram", PROFILE_LINK_DOMAINS.telegram),
  x: profileUrl("X / Twitter", PROFILE_LINK_DOMAINS.x),
  instagram: profileUrl("Instagram", PROFILE_LINK_DOMAINS.instagram),
  facebook: profileUrl("Facebook", PROFILE_LINK_DOMAINS.facebook),
  youtube: profileUrl("YouTube", PROFILE_LINK_DOMAINS.youtube),
  tiktok: profileUrl("TikTok", PROFILE_LINK_DOMAINS.tiktok),
  bluesky: profileUrl("Bluesky", PROFILE_LINK_DOMAINS.bluesky),
}).strict();

const profileTrackersSchema = z.object({
  myanimelist: profileUrl("MyAnimeList", ["myanimelist.net"]),
  anilist: profileUrl("AniList", ["anilist.co"]),
  animeplanet: profileUrl("Anime-Planet", ["anime-planet.com"]),
  anidb: profileUrl("AniDB", ["anidb.net"]),
}).strict();

function parseOrThrow<T>(schema: z.ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw graphQLError(result.error.issues[0]?.message ?? "Dados inválidos.", "BAD_USER_INPUT");
  }
  return result.data;
}

const normalizeSignUp = (data: unknown) => parseOrThrow(signUpSchema, data);
const normalizeSignIn = (data: unknown) => parseOrThrow(signInSchema, data);
const normalizeProfileSocialMedias = (data: unknown) => parseOrThrow(profileSocialMediasSchema, data);
const normalizeProfileTrackers = (data: unknown) => parseOrThrow(profileTrackersSchema, data);

export {
  emailSchema,
  normalizeSignIn,
  normalizeSignUp,
  normalizeProfileSocialMedias,
  normalizeProfileTrackers,
  passwordSchema,
  signInSchema,
  signUpSchema,
  usernameSchema,
};
