import assert from "node:assert/strict";

import { JikanService, mapPublicationStatus } from "../services/jikan";
import { calculateTranslationStatus, isMainChapter, mainChapterProgress, resolveTranslationStatus } from "../graphql/modules/manga/translation-status";
import { ChapterValidation } from "../graphql/modules/chapter/validation";

const now = new Date("2026-08-08T12:00:00.000Z");

assert.equal(calculateTranslationStatus({ officialPublicationStatus: "ONGOING", latestMainChapter: 10, lastMainChapterPublishedAt: "2026-07-01", now }), "ONGOING");
assert.equal(calculateTranslationStatus({ officialPublicationStatus: "COMPLETED", officialTotalChapters: 700, latestMainChapter: 700, now }), "COMPLETED");
assert.equal(calculateTranslationStatus({ officialPublicationStatus: "COMPLETED", officialTotalChapters: null, latestMainChapter: 700, lastMainChapterPublishedAt: "2026-07-01", now }), "ONGOING");
assert.equal(calculateTranslationStatus({ officialPublicationStatus: "COMPLETED", officialTotalChapters: 700, latestMainChapter: 520, lastMainChapterPublishedAt: "2026-06-01", now }), "ONGOING");
assert.equal(calculateTranslationStatus({ officialPublicationStatus: "ONGOING", latestMainChapter: 410, lastMainChapterPublishedAt: "2025-06-01", now }), "PAUSED");

for (const override of ["ONGOING", "PAUSED", "COMPLETED"] as const) {
  const resolved = resolveTranslationStatus({ officialPublicationStatus: "ONGOING", lastMainChapterPublishedAt: "2025-01-01", override, now });
  assert.equal(resolved.calculatedStatus, "PAUSED");
  assert.equal(resolved.status, override);
  assert.equal(resolved.overridden, true);
}
assert.equal(resolveTranslationStatus({ officialPublicationStatus: "ONGOING", lastMainChapterPublishedAt: "2025-01-01", override: null, now }).status, "PAUSED");

assert.equal(isMainChapter({ chapterNumber: 1 }), true);
assert.equal(isMainChapter({ chapterNumber: 5 }), true);
assert.equal(isMainChapter({ chapterNumber: 0 }), false);
assert.equal(isMainChapter({ chapterNumber: 9.5 }), false);
assert.equal(isMainChapter({ chapterNumber: 10.5, chapterType: "MAIN" }), true);
assert.equal(isMainChapter({ chapterNumber: 0, chapterType: "ONESHOT" }), true);
assert.equal(isMainChapter({ chapterNumber: 1, chapterType: "ONESHOT" }), true);
assert.equal(mainChapterProgress({ chapterNumber: 0, chapterType: "ONESHOT" }), 1);
assert.equal(mainChapterProgress({ chapterNumber: 1, chapterType: "ONESHOT" }), 1);
assert.equal(mainChapterProgress({ chapterNumber: 5, chapterType: "ONESHOT" }), 5);
for (const chapterType of ["EXTRA", "SPECIAL"]) {
  assert.equal(isMainChapter({ chapterNumber: 11, chapterType }), false);
  assert.equal(mainChapterProgress({ chapterNumber: 11, chapterType }), null);
}
assert.equal(ChapterValidation.createChapter({ chapterNumber: 12, pages: ["cid"] }).chapterType, "MAIN");
assert.equal(ChapterValidation.createChapter({ chapterNumber: 0, pages: ["cid"] }).chapterType, "EXTRA");
assert.equal(ChapterValidation.createChapter({ chapterNumber: 12.5, pages: ["cid"] }).chapterType, "EXTRA");
for (const chapterType of ["EXTRA", "SPECIAL", "ONESHOT"] as const) {
  assert.equal(ChapterValidation.createChapter({ chapterNumber: 1, chapterType, pages: ["cid"] }).chapterType, chapterType);
}
assert.throws(() => ChapterValidation.createChapter({ chapterNumber: 1.5, chapterType: "MAIN", pages: ["cid"] }), /inteiro maior que zero/);

assert.equal(mapPublicationStatus("Finished"), "COMPLETED");
assert.equal(mapPublicationStatus("Publishing", true), "ONGOING");
assert.equal(mapPublicationStatus("On Hiatus"), "HIATUS");
assert.equal(mapPublicationStatus("Discontinued"), "UNKNOWN");

let calls = 0;
const requestTimes: number[] = [];
const fetcher = async (input: string | URL | Request) => {
  calls += 1;
  requestTimes.push(Date.now());
  const url = String(input);
  if (url.includes("failure")) return new Response("{}", { status: 503 });
  const candidate = {
    mal_id: url.includes("second") ? 2 : 1,
    title: "Obra de teste",
    chapters: 10,
    status: "Finished",
    title_english: "Test work",
    title_japanese: "テスト作品",
    titles: [{ type: "Default", title: "Obra de teste" }, { type: "English", title: "Test work" }, { type: "Japanese", title: "テスト作品" }],
    published: { from: "2002-01-01T00:00:00+00:00" },
    authors: [{ mal_id: 1, name: "Autoria" }],
    genres: [{ mal_id: 1, name: "Aventura" }],
  };
  return new Response(JSON.stringify({ data: url.includes("similar")
    ? [candidate, { ...candidate, mal_id: 99, title: "Obra de teste: spin-off", type: "One-shot" }]
    : [candidate] }), { status: 200, headers: { "content-type": "application/json" } });
};
const jikan = new JikanService({ baseURL: "https://jikan.test", fetcher: fetcher as typeof fetch, minIntervalMs: 20 });
const firstSearch = await jikan.searchManga("cache");
const cachedSearch = await jikan.searchManga("cache");
assert.equal(firstSearch[0].malId, 1);
assert.equal(firstSearch[0].titleEnglish, "Test work");
assert.equal(firstSearch[0].titleJapanese, "テスト作品");
assert.ok(firstSearch[0].aliases.includes("テスト作品"));
assert.equal(firstSearch[0].year, 2002);
assert.deepEqual(firstSearch[0].authors, ["Autoria"]);
assert.deepEqual(firstSearch[0].genres, ["Aventura"]);
assert.deepEqual(cachedSearch, firstSearch);
assert.equal(calls, 1, "A busca repetida deve vir do cache local.");
const similarResults = await jikan.searchManga("similar");
assert.equal(similarResults.length, 2, "Resultados semelhantes devem permanecer separados para seleção explícita do cliente.");
assert.notEqual(similarResults[0].malId, similarResults[1].malId);

await Promise.all([jikan.searchManga("first"), jikan.searchManga("second")]);
assert.ok(requestTimes[3] - requestTimes[2] >= 15, "As requisições devem respeitar o espaçamento do rate limit.");

const failing = new JikanService({ baseURL: "https://jikan.test/failure", fetcher: fetcher as typeof fetch, minIntervalMs: 0, fallbackToMyAnimeList: false });
await assert.rejects(() => failing.searchManga("falha"), /503/);

const empty = new JikanService({
  baseURL: "https://jikan.test",
  fetcher: (async () => new Response(JSON.stringify({ data: [] }), { status: 200 })) as typeof fetch,
  minIntervalMs: 0,
});
assert.deepEqual(await empty.searchManga("inexistente"), [], "Resposta vazia válida não pode ser tratada como erro.");

const timedOut = new JikanService({
  baseURL: "https://jikan.test",
  fetcher: ((_: unknown, init?: RequestInit) => new Promise((_, reject) => {
    const keepAlive = setTimeout(() => reject(new Error("O sinal de timeout não foi emitido.")), 100);
    init?.signal?.addEventListener("abort", () => {
      clearTimeout(keepAlive);
      reject(new DOMException("Timeout", "AbortError"));
    }, { once: true });
  })) as typeof fetch,
  minIntervalMs: 0,
  timeoutMs: 10,
  fallbackToMyAnimeList: false,
});
await assert.rejects(() => timedOut.searchManga("timeout"), /Timeout|abort/i);

const malPage = `
  <meta property="og:title" content="Love Hina">
  <meta property="og:image" content="https://cdn.myanimelist.net/love-hina.jpg">
  <meta property="og:description" content="Sinopse oficial para revisão no formulário.">
  <div><span class="dark_text">Japanese:</span> ラブひな</div>
  <div><span class="dark_text">English:</span> Love Hina</div>
  <div><span class="dark_text">Type:</span> Manga</div>
  <div><span class="dark_text">Chapters:</span> 120</div>
  <div><span class="dark_text">Status:</span> Finished</div>
  <div><span class="dark_text">Published:</span> Oct 21, 1998 to Oct 31, 2001</div>
  <div><span class="dark_text">Genres:</span><span itemprop="genre">Comedy</span><span itemprop="genre">Romance</span></div>
  <div><span class="dark_text">Authors:</span><a>Akamatsu, Ken</a> (Story &amp; Art)</div>`;
const fallbackFetcher = (async (input: string | URL | Request) => {
  const url = String(input);
  if (url.startsWith("https://jikan.test")) return new Response("{}", { status: 504 });
  if (url.includes("prefix.json")) return new Response(JSON.stringify({ categories: [{ type: "manga", items: [{ id: 16, name: "Love Hina", url: "https://myanimelist.net/manga/16/Love_Hina", image_url: "https://cdn.myanimelist.net/preview.jpg", payload: { media_type: "Manga", start_year: 1998, status: "Finished" } }] }] }), { status: 200 });
  return new Response(malPage, { status: 200 });
}) as typeof fetch;
const withMalFallback = new JikanService({ baseURL: "https://jikan.test", fetcher: fallbackFetcher, minIntervalMs: 0 });
const fallbackResults = await withMalFallback.searchManga("Love Hina");
assert.equal(fallbackResults[0].malId, 16);
assert.equal(fallbackResults[0].title, "Love Hina");
assert.equal(fallbackResults[0].publicationStatus, "COMPLETED");
const fallbackDetails = await withMalFallback.getManga(16);
assert.equal(fallbackDetails.data?.totalChapters, 120);
assert.deepEqual(fallbackDetails.data?.authors, ["Akamatsu, Ken"]);
assert.deepEqual(fallbackDetails.data?.genres, ["Comedy", "Romance"]);

console.log("Status, normalização Jikan, fallback MAL, cache, rate limit, vazio, timeout e falha validados.");
