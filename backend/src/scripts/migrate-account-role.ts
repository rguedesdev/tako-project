import { TakoProjectDB } from "../plugins/mongoose";

async function migrateAccountRole() {
  await TakoProjectDB.asPromise();

  const result = await TakoProjectDB.collection("users").updateMany(
    { accountType: "AEGIS" },
    { $set: { accountType: "HADES" } },
  );

  console.log(`Migração concluída: ${result.modifiedCount} conta(s) atualizada(s) para HADES.`);
}

migrateAccountRole()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await TakoProjectDB.close();
  });
