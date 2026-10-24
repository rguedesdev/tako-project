import bcrypt from "bcrypt";
import { Types } from "mongoose";

import { createUserToken } from "../../../services/auth/create-user-token";
import { graphQLError } from "../../errors";
import { UserFollowModel, UserModel } from "./model";
import { MangaModel } from "../manga/model";
import { GroupMangaModel } from "../manga/group-manga-model";
import MediaService from "../media/service";
import { CommentLikeModel, CommentModel } from "../comment/model";
import { parseObjectID } from "../../validation";
import { UserChapterReadModel } from "../chapter/read-model";
import {
  emailSchema,
  normalizeProfileSocialMedias,
  normalizeProfileTrackers,
  normalizeProfileUpdate,
  normalizeSignIn,
  normalizeSignUp,
  usernameSchema,
} from "./validation";

const defaultSubscription = {
  plan: "FREE" as const,
  status: "NONE" as const,
  startedAt: null,
  expiresAt: null,
  renewalAt: null,
  autoRenew: false,
  source: null,
};

const serializeUser = (user: any) => {
  const subscription = { ...defaultSubscription, ...(user.subscription ?? {}) };

  // Keep the object returned by the service allow-listed. This prevents a
  // password hash selected during sign-in from leaking into another caller.
  return {
    id: user._id?.toString() ?? user.id?.toString(),
    accountType: user.accountType === "HADES" ? "HADES" : "MEMBER",
    profilePicture: user.profilePicture ?? null,
    profilePictureID: user.profilePictureID ?? null,
    name: user.name,
    username: user.username,
    email: user.email,
    subscription: {
      plan: subscription.plan,
      status: subscription.status,
      startedAt: subscription.startedAt?.toISOString?.() ?? subscription.startedAt ?? null,
      expiresAt: subscription.expiresAt?.toISOString?.() ?? subscription.expiresAt ?? null,
      renewalAt: subscription.renewalAt?.toISOString?.() ?? subscription.renewalAt ?? null,
      autoRenew: subscription.autoRenew,
      source: subscription.source ?? null,
    },
    preferences: {
      showAdultContent: user.preferences?.showAdultContent === true,
    },
    socialMedias: user.socialMedias ?? {},
    trackers: user.trackers ?? {},
  };
};

class UserService {
  static async usernameAvailable(username: string) {
    const normalized = usernameSchema.safeParse(username);
    if (!normalized.success) return false;
    return !(await UserModel.exists({ username: normalized.data }));
  }

  static async emailAvailable(email: string) {
    const normalized = emailSchema.safeParse(email);
    if (!normalized.success) return false;
    return !(await UserModel.exists({ email: normalized.data }));
  }

  static async signUp(data: unknown) {
    const parsed = normalizeSignUp(data);
    const [usernameAvailable, emailAvailable] = await Promise.all([
      this.usernameAvailable(parsed.username),
      this.emailAvailable(parsed.email),
    ]);

    if (!usernameAvailable) {
      throw graphQLError("Este username já está em uso.", "CONFLICT");
    }
    if (!emailAvailable) {
      throw graphQLError("Este e-mail já está em uso.", "CONFLICT");
    }

    const passwordHash = await bcrypt.hash(parsed.password, 12);
    try {
      const user = await UserModel.create({
        name: parsed.name,
        username: parsed.username,
        email: parsed.email,
        passwordHash,
        accountType: "MEMBER",
        subscription: defaultSubscription,
      });
      const serialized = serializeUser(user.toObject());
      return { user: serialized, token: createUserToken(user) };
    } catch (error: any) {
      if (error?.code === 11000) {
        if (error?.keyPattern?.email || error?.keyValue?.email) {
          throw graphQLError("Este e-mail já está em uso.", "CONFLICT");
        }
        if (error?.keyPattern?.username || error?.keyValue?.username) {
          throw graphQLError("Este username já está em uso.", "CONFLICT");
        }
        throw graphQLError("Não foi possível criar a conta por conflito de dados.", "CONFLICT");
      }
      throw error;
    }
  }

  static async signIn(data: unknown) {
    const parsed = normalizeSignIn(data);
    const normalizedLogin = parsed.login.toLowerCase();
    const user = await UserModel.findOne({
      $or: [{ username: normalizedLogin }, { email: normalizedLogin }],
    })
      .select("+passwordHash +password")
      .lean();

    if (!user) {
      throw graphQLError("Credenciais inválidas.", "UNAUTHENTICATED");
    }

    const hash = user.passwordHash ?? user.password;
    if (!hash || !(await bcrypt.compare(parsed.password, hash))) {
      throw graphQLError("Credenciais inválidas.", "UNAUTHENTICATED");
    }

    const serialized = serializeUser(user);
    return { user: serialized, token: createUserToken(user) };
  }

  static async getAuthenticatedUser(userID: string) {
    const user = await UserModel.findById(userID).lean();
    if (!user) {
      throw graphQLError("Sessão inválida ou expirada.", "UNAUTHENTICATED");
    }
    return serializeUser(user);
  }
  static async getByUsername(username: string) { const user = await UserModel.findOne({ username: username.trim().toLowerCase() }).lean(); if(!user)return null;const {email: _privateEmail,...publicUser}=serializeUser(user);return publicUser; }
  static async getProfileStats(userID: string) {
    const userObjectID = new Types.ObjectId(userID);
    const [chaptersRead, mangaIDs, comments, likesReceived, followers] = await Promise.all([
      UserChapterReadModel.countDocuments({ user: userObjectID }),
      UserChapterReadModel.distinct("manga", { user: userObjectID }),
      CommentModel.countDocuments({ author: userObjectID, deletedAt: null }),
      CommentLikeModel.aggregate([
        { $lookup: { from: CommentModel.collection.name, localField: "comment", foreignField: "_id", as: "comment" } },
        { $unwind: "$comment" },
        { $match: { "comment.author": userObjectID, "comment.deletedAt": null } },
        { $count: "total" },
      ]),
      UserFollowModel.countDocuments({ following: userObjectID }),
    ]);
    return {
      mangasRead: mangaIDs.length,
      chaptersRead,
      comments,
      likes: likesReceived[0]?.total ?? 0,
      followers,
    };
  }
  static async getRecentReadMangas(userID: string, requestedLimit = 6) {
    const limit = Math.min(100, Math.max(1, Math.trunc(requestedLimit || 6)));
    const rows = await UserChapterReadModel.aggregate([
      { $match: { user: new Types.ObjectId(userID) } },
      { $sort: { createdAt: -1 } },
      { $group: { _id: "$manga", lastReadAt: { $first: "$createdAt" } } },
      { $sort: { lastReadAt: -1 } },
      { $limit: limit },
    ]);
    const mangaIDs = rows.map((row: any) => row._id);
    const [mangas, groupCoverRelations] = await Promise.all([
      MangaModel.find({ _id: { $in: mangaIDs } }).select("title mangaCover mangaCoverID").lean(),
      GroupMangaModel.find({ manga: { $in: mangaIDs }, mangaCoverIDOverride: { $ne: null } })
        .sort({ updatedAt: -1 })
        .select("manga mangaCoverIDOverride")
        .lean(),
    ]);
    const byID = new Map(mangas.map((manga: any) => [String(manga._id), manga]));
    const coverByManga = new Map<string, string>();
    for (const relation of groupCoverRelations as any[]) {
      const key = String(relation.manga);
      if (!coverByManga.has(key) && relation.mangaCoverIDOverride) coverByManga.set(key, String(relation.mangaCoverIDOverride));
    }
    const recentMangas = await Promise.all(rows.map(async (row: any) => {
      const manga: any = byID.get(String(row._id));
      if (!manga) return null;
      const groupCoverID = coverByManga.get(String(manga._id));
      const mangaCover = manga.mangaCoverID
        ? (await MediaService.getReady(manga.mangaCoverID))?.url ?? null
        : manga.mangaCover || (groupCoverID
          ? (await MediaService.getReady(groupCoverID))?.url ?? null
          : null);
      return {
        id: String(manga._id),
        title: manga.title,
        mangaCover,
        lastReadAt: new Date(row.lastReadAt).toISOString(),
      };
    }));
    return recentMangas.filter(Boolean);
  }
  static async isFollowedBy(userID: string, followerID: string | null) {
    return followerID ? Boolean(await UserFollowModel.exists({ following: userID, follower: followerID })) : false;
  }
  static async toggleFollow(userID: string, followerID: string) {
    userID = parseObjectID(userID, "Leitor");
    if (userID === followerID) throw graphQLError("Você não pode seguir a si mesmo.", "BAD_USER_INPUT");
    if (!(await UserModel.exists({ _id: userID }))) throw graphQLError("Leitor não encontrado.", "NOT_FOUND");
    const removed = await UserFollowModel.findOneAndDelete({ following: userID, follower: followerID });
    let followed = false;
    if (!removed) {
      try { await UserFollowModel.create({ following: userID, follower: followerID }); followed = true; }
      catch (error: any) { if (error?.code !== 11000) throw error; followed = true; }
    }
    return { followed, followers: await UserFollowModel.countDocuments({ following: userID }) };
  }
  static async updateProfile(userID: string, input: unknown) {
    const data = normalizeProfileUpdate(input);
    const current = await UserModel.findById(userID).lean();
    if (!current) throw graphQLError("Usuário não encontrado.", "NOT_FOUND");

    const updates: any = {};
    if (data.name !== undefined) {
      const name = String(data.name).trim();
      if (name.length < 2 || name.length > 120) {
        throw graphQLError("Nome inválido.", "BAD_USER_INPUT");
      }
      updates.name = name;
    }
    if (data.email !== undefined) {
      const parsedEmail = emailSchema.safeParse(data.email);
      if (!parsedEmail.success) {
        throw graphQLError(
          parsedEmail.error.issues[0]?.message ?? "E-mail inválido.",
          "BAD_USER_INPUT",
        );
      }
      if (parsedEmail.data !== current.email) {
        const alreadyUsed = await UserModel.exists({
          email: parsedEmail.data,
          _id: { $ne: current._id },
        });
        if (alreadyUsed) throw graphQLError("Este e-mail já está em uso.", "CONFLICT");
        updates.email = parsedEmail.data;
      }
    }
    if (data.showAdultContent !== undefined) {
      if (typeof data.showAdultContent !== "boolean") {
        throw graphQLError("Preferência de conteúdo adulto inválida.", "BAD_USER_INPUT");
      }
      updates["preferences.showAdultContent"] = data.showAdultContent;
    }
    if (data.socialMedias !== undefined) {
      updates.socialMedias = { ...(current.socialMedias ?? {}), ...normalizeProfileSocialMedias(data.socialMedias) };
    }
    if (data.trackers !== undefined) {
      updates.trackers = { ...(current.trackers ?? {}), ...normalizeProfileTrackers(data.trackers) };
    }

    const nextProfilePictureID = data.removeProfilePicture
      ? null
      : data.profilePictureID === undefined
        ? current.profilePictureID
        : data.profilePictureID;
    const pictureChanged = String(nextProfilePictureID ?? "") !== String(current.profilePictureID ?? "");
    if (pictureChanged && nextProfilePictureID) {
      await MediaService.requireAttachable(nextProfilePictureID, userID, "USER_AVATAR");
      await MediaService.attach(nextProfilePictureID, userID, "USER_AVATAR", "USER", userID);
    }
    if (pictureChanged) updates.profilePictureID = nextProfilePictureID;

    try {
      const user = await UserModel.findByIdAndUpdate(
        userID,
        { $set: updates },
        { returnDocument: "after", runValidators: true },
      ).lean();
      if (pictureChanged && current.profilePictureID) {
        await MediaService.orphan(current.profilePictureID, "USER", userID);
      }
      return serializeUser(user);
    } catch (error: any) {
      if (error?.code === 11000 && (error?.keyPattern?.email || error?.keyValue?.email)) {
        throw graphQLError("Este e-mail já está em uso.", "CONFLICT");
      }
      throw error;
    }
  }
}

export { serializeUser };
export default UserService;
