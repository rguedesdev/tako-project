import { ACCOUNT_TYPES, UserModel } from "../graphql/modules/user/model";
import { TakoProjectDB } from "../plugins/mongoose";

async function setAccountRole() {
  const username = process.argv[2]?.trim().toLowerCase();
  const accountType = process.argv[3]?.trim().toUpperCase();

  if (!username || !ACCOUNT_TYPES.includes(accountType as (typeof ACCOUNT_TYPES)[number])) {
    throw new Error("Uso: npm run account:role -- <username> <MEMBER|HADES>");
  }

  const user = await UserModel.findOneAndUpdate(
    { username },
    { $set: { accountType } },
    { new: true, runValidators: true },
  ).lean();

  if (!user) throw new Error(`Usuário @${username} não encontrado.`);
  console.log(`Papel de @${username} atualizado para ${user.accountType}.`);
}

setAccountRole()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await TakoProjectDB.close();
  });
