import assert from "node:assert/strict";

import buildApp from "../app";
import { ChapterModel } from "../graphql/modules/chapter/model";
import { TakoProjectDB } from "../plugins/mongoose";

const app = await buildApp();

try {
  await app.ready();
  const chapter = await ChapterModel.findOne({ "pages.0": { $exists: true } }).sort({ chapterNumber: -1 }).lean();
  assert.ok(chapter, "Nenhum capítulo com páginas foi encontrado.");

  const query = await app.inject({
    method: "POST",
    url: "/graphql",
    payload: { query: "query($id:ID!){chapter(id:$id){id chapterNumber pages}}", variables: { id: chapter._id.toString() } },
  });
  assert.equal(query.statusCode, 200);
  const payload = query.json();
  assert.equal(payload.errors, undefined);
  assert.equal(payload.data.chapter.pages[0], chapter.pages[0]);

  const image = await app.inject({ method: "GET", url: `/ipfs/${chapter.pages[0]}` });
  assert.equal(image.statusCode, 200, `A página IPFS retornou ${image.statusCode}.`);
  assert.match(String(image.headers["content-type"]), /^image\//);
  assert.ok(image.rawPayload.length > 0);

  console.log(`Capítulo ${chapter.chapterNumber}: GraphQL e primeira página IPFS validados.`);
} finally {
  await app.close();
  await TakoProjectDB.close();
}
