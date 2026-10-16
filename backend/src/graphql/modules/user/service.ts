import bcrypt from "bcrypt";

import { createUserToken } from "../../../services/auth/create-user-token";
import { graphQLError } from "../../errors";
import { UserModel } from "./model";
import MediaService from "../media/service";
import {
  emailSchema,
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
    accountType: user.accountType === "AEGIS" ? "AEGIS" : "MEMBER",
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
    preferences: { showAdultContent: user.preferences?.showAdultContent === true },
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
      throw graphQLError("Usuário não encontrado.", "UNAUTHENTICATED");
    }

    const hash = user.passwordHash ?? user.password;
    if (!hash || !(await bcrypt.compare(parsed.password, hash))) {
      throw graphQLError("Senha incorreta.", "UNAUTHENTICATED");
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
  static async updateProfile(userID: string, data: any) {
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
