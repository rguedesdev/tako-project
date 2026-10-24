import { z } from "zod";

import { UserModel } from "../user/model";
import { graphQLError } from "../../errors";
import { parseObjectID } from "../../validation";
import { GroupClaimModel } from "./group-claim-model";
import { GroupModel } from "./model";

const claimLink = z.string().trim().max(500).optional().nullable().refine((value) => {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}, "Informe um link HTTPS válido.");

const socialLinksSchema = z.object({
  site: claimLink,
  discord: claimLink,
  telegram: claimLink,
  x: claimLink,
  instagram: claimLink,
  facebook: claimLink,
  youtube: claimLink,
  tiktok: claimLink,
  bluesky: claimLink,
  orkut: claimLink,
}).strict();

const createClaimSchema = z.object({
  groupID: z.string().regex(/^[a-f\d]{24}$/i, "Grupo inválido."),
  contactEmail: z.email("Informe um e-mail de contato válido.").max(254),
  socialMedias: socialLinksSchema.optional(),
  proof: z.string().trim().min(30, "Descreva as provas com pelo menos 30 caracteres.").max(4000),
}).strict();

function validate<T>(schema: z.ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) throw graphQLError(result.error.issues[0]?.message ?? "Dados inválidos.", "BAD_USER_INPUT");
  return result.data;
}

async function requireHades(userID: string) {
  const user = await UserModel.findById(userID).select("accountType").lean();
  if (user?.accountType !== "HADES") throw graphQLError("Apenas administradores podem revisar reivindicações.", "FORBIDDEN");
  return user;
}

class GroupClaimService {
  static async canReceiveSupport(group: any) {
    const owner = await UserModel.findById(group.ownerID).select("accountType").lean();
    return owner?.accountType === "MEMBER";
  }

  static async canClaim(group: any, userID: string | null) {
    if (!userID || String(group.ownerID) === userID) return { claimableByMe: false, claimPendingByMe: false };
    const [owner, claimant, pending] = await Promise.all([
      UserModel.findById(group.ownerID).select("accountType").lean(),
      UserModel.findById(userID).select("accountType").lean(),
      GroupClaimModel.exists({ group: group._id ?? group.id, claimant: userID, status: "PENDING" }),
    ]);
    const isEligible = owner?.accountType === "HADES" && claimant?.accountType !== "HADES";
    return { claimableByMe: isEligible && !pending, claimPendingByMe: isEligible && Boolean(pending) };
  }

  static async createClaim(userID: string, rawData: unknown) {
    const data = validate(createClaimSchema, rawData);
    const groupID = parseObjectID(data.groupID, "Grupo");
    const [group, claimant] = await Promise.all([
      GroupModel.findById(groupID).select("ownerID").lean(),
      UserModel.findById(userID).select("accountType").lean(),
    ]);
    if (!group) throw graphQLError("Grupo não encontrado.", "NOT_FOUND");
    if (!claimant || claimant.accountType === "HADES") throw graphQLError("Esta conta não pode reivindicar grupos.", "FORBIDDEN");
    const owner = await UserModel.findById(group.ownerID).select("accountType").lean();
    if (owner?.accountType !== "HADES") throw graphQLError("Este grupo não está disponível para reivindicação.", "FORBIDDEN");

    try {
      return await GroupClaimModel.create({
        group: groupID,
        claimant: userID,
        contactEmail: data.contactEmail,
        socialMedias: data.socialMedias ?? {},
        proof: data.proof,
      });
    } catch (error: any) {
      if (error?.code === 11000) throw graphQLError("Você já possui uma reivindicação pendente para este grupo.", "BAD_USER_INPUT");
      throw error;
    }
  }

  static async getPendingClaims(userID: string) {
    await requireHades(userID);
    return GroupClaimModel.find({ status: "PENDING" })
      .sort({ createdAt: 1 })
      .populate("group", "name groupImageID groupImage")
      .populate("claimant", "name username")
      .lean();
  }

  static async reviewClaim(userID: string, rawID: string, approve: boolean, rawNote?: string | null) {
    await requireHades(userID);
    const id = parseObjectID(rawID, "Reivindicação");
    const note = z.string().trim().max(1000, "A observação deve ter no máximo 1000 caracteres.").nullable().optional().parse(rawNote ?? null) || null;
    const claim = await GroupClaimModel.findOne({ _id: id, status: "PENDING" }).lean();
    if (!claim) throw graphQLError("Reivindicação não encontrada ou já revisada.", "NOT_FOUND");

    if (approve) {
      const group = await GroupModel.findOne({ _id: claim.group, ownerID: { $exists: true } }).lean();
      const owner = group ? await UserModel.findById(group.ownerID).select("accountType").lean() : null;
      if (!group || owner?.accountType !== "HADES") throw graphQLError("O grupo não pertence mais a um administrador.", "CONFLICT");
      const socialMedias: Record<string, string> = { ...(group.socialMedias ?? {}) };
      for (const [key, value] of Object.entries(claim.socialMedias ?? {})) {
        if (typeof value === "string" && value.trim()) socialMedias[key] = value.trim();
      }
      socialMedias.email = claim.contactEmail;
      const transferred = await GroupModel.updateOne(
        { _id: group._id, ownerID: group.ownerID },
        { $set: { ownerID: claim.claimant, socialMedias } },
      );
      if (!transferred.modifiedCount) throw graphQLError("O grupo foi alterado durante a revisão. Atualize e tente novamente.", "CONFLICT");
    }

    const updated = await GroupClaimModel.findOneAndUpdate(
      { _id: id, status: "PENDING" },
      { $set: { status: approve ? "APPROVED" : "REJECTED", reviewedBy: userID, reviewedAt: new Date(), reviewNote: note } },
      { new: true },
    ).populate("group", "name groupImageID groupImage").populate("claimant", "name username").lean();

    if (!updated) throw graphQLError("A reivindicação foi revisada em outra sessão.", "CONFLICT");
    return updated;
  }
}

export { GroupClaimService };
