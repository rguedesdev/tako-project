import { z } from "zod";

import { graphQLError } from "../../errors";
import { normalizeCountryCode } from "../../../config/countries";

const countryCodeSchema = z.string().transform((value, context) => {
  const code = normalizeCountryCode(value);
  if (!code) context.addIssue({ code: "custom", message: "Selecione um país válido." });
  return code ?? "";
});

const SOCIAL_DOMAINS: Record<string, string[]> = {
  discord: ["discord.gg", "discord.com", "discordapp.com"],
  telegram: ["t.me", "telegram.me", "telegram.org"],
  x: ["x.com", "twitter.com"],
  instagram: ["instagram.com"],
  facebook: ["facebook.com", "fb.com"],
  youtube: ["youtube.com", "youtu.be"],
  tiktok: ["tiktok.com"],
  bluesky: ["bsky.app"],
};

function externalUrl(label: string, domains?: string[]) {
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

const socialMediasSchema = z.object({
  site: externalUrl("Website"),
  discord: externalUrl("Discord", SOCIAL_DOMAINS.discord),
  telegram: externalUrl("Telegram", SOCIAL_DOMAINS.telegram),
  x: externalUrl("X / Twitter", SOCIAL_DOMAINS.x),
  instagram: externalUrl("Instagram", SOCIAL_DOMAINS.instagram),
  facebook: externalUrl("Facebook", SOCIAL_DOMAINS.facebook),
  youtube: externalUrl("YouTube", SOCIAL_DOMAINS.youtube),
  tiktok: externalUrl("TikTok", SOCIAL_DOMAINS.tiktok),
  bluesky: externalUrl("Bluesky", SOCIAL_DOMAINS.bluesky),
  orkut: externalUrl("Orkkut"),
  email: z.string().trim().max(254).transform((value) => value || null).refine(
    (value) => !value || z.email().safeParse(value).success,
    "E-mail: informe um endereço válido.",
  ).optional().nullable(),
}).strict();

const groupSchema = z.object({
  name: z.string().trim().min(2, "O nome da scan é obrigatório.").max(120),
  description: z.string().trim().min(10, "A descrição deve ter ao menos 10 caracteres.").max(1200),
  countryCode: countryCodeSchema,
  groupImageID: z.string().optional(),
  socialMedias: socialMediasSchema.optional(),
}).passthrough();

function parse<T>(result: { success: true; data: T } | { success: false; error: z.ZodError }) {
  if (!result.success) throw graphQLError(result.error.issues[0]?.message ?? "Dados do grupo inválidos.", "BAD_USER_INPUT");
  return result.data;
}

class GroupValidation {
  static createGroup(data: unknown) { return parse(groupSchema.safeParse(data)); }
  static updateGroup(data: unknown) { return parse(groupSchema.partial().safeParse(data)); }
}

export { GroupValidation };
