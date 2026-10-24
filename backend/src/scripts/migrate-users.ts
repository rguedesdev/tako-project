import bcrypt from "bcrypt";

import { UserModel } from "../graphql/modules/user/model";
import { TakoProjectDB } from "../plugins/mongoose";

const defaultSubscription = {
  plan: "FREE",
  status: "NONE",
  startedAt: null,
  expiresAt: null,
  renewalAt: null,
  autoRenew: false,
  source: null,
};

async function migrateUsers() {
  const indexes = await UserModel.collection.indexes();
  const legacyNicknameIndex = indexes.find(
    (index) => index.name === "nickname_1" && index.key?.nickname === 1,
  );
  if (legacyNicknameIndex) {
    await UserModel.collection.dropIndex("nickname_1");
    console.log("Índice legado nickname_1 removido.");
  }

  const users = await UserModel.find()
    .select("+password +passwordHash")
    .lean();

  const operations = await Promise.all(
    users.map(async (user) => {
      const legacyPassword = user.password;
      const passwordHash = user.passwordHash ?? (
        typeof legacyPassword === "string" && /^\$2[aby]\$/.test(legacyPassword)
          ? legacyPassword
          : typeof legacyPassword === "string" && legacyPassword.length
            ? await bcrypt.hash(legacyPassword, 12)
            : null
      );

      if (!passwordHash) {
        throw new Error(`Migração interrompida: o usuário ${user._id} não possui senha.`);
      }

      return {
        updateOne: {
          filter: { _id: user._id },
          update: {
            $set: {
              passwordHash,
              accountType: String(user.accountType) === "admin" || user.accountType === "HADES" || String(user.accountType) === "AEGIS" ? "HADES" : "MEMBER",
              subscription: {
                ...defaultSubscription,
                ...(user.subscription ?? {}),
              },
              preferences: { showAdultContent: user.preferences?.showAdultContent === true },
            },
            $unset: { password: "" },
          },
        },
      };
    }),
  );

  const result = operations.length
    ? await UserModel.collection.bulkWrite(operations)
    : { matchedCount: 0, modifiedCount: 0 };

  const invalidCount = await UserModel.collection.countDocuments({
    $or: [
      { passwordHash: { $exists: false } },
      { password: { $exists: true } },
    ],
  });
  if (invalidCount) {
    throw new Error(`${invalidCount} usuário(s) permaneceram em formato legado.`);
  }

  console.log(
    `Migração de usuários concluída: ${result.matchedCount} verificados, ${result.modifiedCount} atualizados.`,
  );
}

migrateUsers()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await TakoProjectDB.close();
  });
