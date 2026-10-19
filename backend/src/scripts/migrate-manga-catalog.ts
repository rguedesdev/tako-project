import { MangaModel } from "../graphql/modules/manga/model";
import { normalizeMangaTitle } from "../graphql/modules/manga/normalize-title";
import { TakoProjectDB } from "../plugins/mongoose";
await TakoProjectDB.asPromise();
const mangas=await MangaModel.find().lean();
for(const manga of mangas){const aliases=[...new Set((manga.aliases??[]).map(v=>v.trim()).filter(Boolean))];const normalizedTitle=normalizeMangaTitle(manga.title);const normalizedAliases=[...new Set(aliases.map(normalizeMangaTitle).filter(value=>value!==normalizedTitle))];await MangaModel.updateOne({_id:manga._id},{$set:{normalizedTitle,aliases,normalizedAliases,normalizedTitles:[normalizedTitle,...normalizedAliases]}});}
await MangaModel.syncIndexes();
console.log(`${mangas.length} manga(s) normalizado(s).`);
await TakoProjectDB.close();
