import { MangaModel } from "../graphql/modules/manga/model";
import { UserModel } from "../graphql/modules/user/model";
import { TakoProjectDB } from "../plugins/mongoose";

await TakoProjectDB.asPromise();
const [mangas, users] = await Promise.all([
  MangaModel.collection.updateMany({ isAdult: { $exists: false } }, { $set: { isAdult: false } }),
  UserModel.collection.updateMany(
    { "preferences.showAdultContent": { $exists: false } },
    { $set: { "preferences.showAdultContent": false } },
  ),
]);
console.log(`${mangas.modifiedCount} mangá(s) e ${users.modifiedCount} usuário(s) receberam padrões +18 seguros.`);
await TakoProjectDB.close();
