import { ChapterModel } from "../graphql/modules/chapter/model";
import { TakoProjectDB } from "../plugins/mongoose";

await TakoProjectDB.asPromise();

const indexes = await ChapterModel.collection.indexes();
const legacyGlobalChapterIndex = indexes.find((index) => {
  if (!index.unique) return false;
  const keys = Object.entries(index.key ?? {});
  return keys.length === 2
    && keys[0]?.[0] === "manga"
    && keys[0]?.[1] === 1
    && keys[1]?.[0] === "chapterNumber"
    && keys[1]?.[1] === 1;
});

if (legacyGlobalChapterIndex?.name) {
  await ChapterModel.collection.dropIndex(legacyGlobalChapterIndex.name);
  console.log(`Índice global legado removido: ${legacyGlobalChapterIndex.name}`);
} else {
  console.log("Nenhum índice global legado de capítulos encontrado.");
}

await ChapterModel.createIndexes();
console.log("Índices atuais de capítulos garantidos.");

await TakoProjectDB.close();
