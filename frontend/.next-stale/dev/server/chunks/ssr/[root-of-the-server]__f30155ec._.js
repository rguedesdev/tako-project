module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(main)/releases/releases.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "page": "releases-module__ECSZ5a__page",
  "releasesContainer": "releases-module__ECSZ5a__releasesContainer",
});
}),
"[project]/src/lib/graphql.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "graphqlRequest",
    ()=>graphqlRequest
]);
const PUBLIC_GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql";
function graphqlUrls() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // No SSR o Next roda dentro do container: localhost seria o próprio
    // frontend. GRAPHQL_URL pode sobrescrever o gateway da bridge em produção.
    return [
        process.env.GRAPHQL_URL ?? "http://172.17.0.1:5000/graphql"
    ];
}
async function graphqlRequest(query, variables = {}, token) {
    let response = null;
    let connectionError;
    for (const url of graphqlUrls()){
        try {
            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...token ? {
                        Authorization: `Bearer ${token}`
                    } : {}
                },
                body: JSON.stringify({
                    query,
                    variables
                }),
                cache: "no-store"
            });
            break;
        } catch (error) {
            connectionError = error;
        }
    }
    if (!response) {
        console.error("Não foi possível alcançar o GraphQL:", connectionError);
        throw new Error("Não foi possível conectar ao servidor de dados.");
    }
    const payload = await response.json().catch(()=>null);
    if (!response.ok || payload?.errors?.length || !payload?.data) {
        throw new Error(payload?.errors?.[0]?.message ?? "Não foi possível se comunicar com o servidor.");
    }
    return payload.data;
}
}),
"[project]/src/lib/catalog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChapter",
    ()=>getChapter,
    "getChaptersByManga",
    ()=>getChaptersByManga,
    "getGroup",
    ()=>getGroup,
    "getGroups",
    ()=>getGroups,
    "getLatestChapters",
    ()=>getLatestChapters,
    "getManga",
    ()=>getManga,
    "getMangas",
    ()=>getMangas,
    "legacyGroupImage",
    ()=>legacyGroupImage,
    "legacyMangaCover",
    ()=>legacyMangaCover,
    "mediaUrl",
    ()=>mediaUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-rsc] (ecmascript)");
;
const GROUP_FIELDS = `
  id groupImage previewImage name description country
  stats { followers mangas chapters views likes }
  socialMedias { site discord telegram x instagram facebook bluesky orkut email }
`;
const MANGA_FIELDS = `
  id mangaCover previewImage title description mangaka genders
  trackers { myanimelist anilist animeplanet }
`;
async function getGroups() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query Groups {
    groups { ${GROUP_FIELDS} }
  }`);
    return data.groups;
}
async function getGroup(id) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query Group($id: ID!) {
    group(id: $id) { ${GROUP_FIELDS} mangas { ${MANGA_FIELDS} } }
  }`, {
        id
    });
    return data.group;
}
async function getMangas() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query Mangas {
    mangas { ${MANGA_FIELDS} }
  }`);
    return data.mangas;
}
async function getManga(id) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query Manga($id: ID!) {
    manga(id: $id) { ${MANGA_FIELDS} }
  }`, {
        id
    });
    return data.manga;
}
async function getChaptersByManga(mangaId) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query Chapters($mangaId: ID!) {
    chaptersByManga(mangaId: $mangaId) {
      id manga group chapterTitle chapterNumber pages createdAt
      groupInfo { ${GROUP_FIELDS} }
      mangaInfo { ${MANGA_FIELDS} }
    }
  }`, {
        mangaId
    });
    return data.chaptersByManga;
}
async function getChapter(id) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query Chapter($id: ID!) {
    chapter(id: $id) {
      id manga group chapterTitle chapterNumber pages createdAt
      groupInfo { ${GROUP_FIELDS} }
      mangaInfo { ${MANGA_FIELDS} }
    }
  }`, {
        id
    });
    return data.chapter;
}
async function getLatestChapters(limit = 40) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query LatestChapters($limit: Int!) {
    latestChapters(limit: $limit) {
      id manga group chapterTitle chapterNumber pages createdAt
      groupInfo { ${GROUP_FIELDS} }
      mangaInfo { ${MANGA_FIELDS} }
    }
  }`, {
        limit
    });
    return data.latestChapters;
}
function mediaUrl(value) {
    if (!value) return null;
    if (/^(https?:|data:|blob:|\/)/i.test(value)) return value;
    const cid = value.replace(/^ipfs:\/\//i, "").replace(/^ipfs\//i, "");
    const gateway = (process.env.NEXT_PUBLIC_IPFS_GATEWAY ?? "https://dweb.link/ipfs/").replace(/\/?$/, "/");
    return `${gateway}${cid}`;
}
const LEGACY_GROUP_IMAGES = {
    "anima regia": "/scans/anima-regia.jpg"
};
const LEGACY_MANGA_COVERS = {
    "one piece": "/one-piece.jpg",
    "ruri dragon": "/ruri-dragon.jpg"
};
function legacyGroupImage(name) {
    return LEGACY_GROUP_IMAGES[name.trim().toLowerCase()] ?? null;
}
function legacyMangaCover(title) {
    return LEGACY_MANGA_COVERS[title.trim().toLowerCase()] ?? null;
}
}),
"[project]/src/components/MediaImage/page.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaImage",
    ()=>MediaImage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MediaImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MediaImage() from the server but MediaImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/MediaImage/page.tsx <module evaluation>", "MediaImage");
}),
"[project]/src/components/MediaImage/page.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaImage",
    ()=>MediaImage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MediaImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MediaImage() from the server but MediaImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/MediaImage/page.tsx", "MediaImage");
}),
"[project]/src/components/MediaImage/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/MediaImage/page.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/MediaImage/page.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/NewChapterCard/newchapter.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "capInfo": "newchapter-module__GNyuDW__capInfo",
  "capLi": "newchapter-module__GNyuDW__capLi",
  "capLink": "newchapter-module__GNyuDW__capLink",
  "capList": "newchapter-module__GNyuDW__capList",
  "capTime": "newchapter-module__GNyuDW__capTime",
  "cardsGrid": "newchapter-module__GNyuDW__cardsGrid",
  "chaptersWrapper": "newchapter-module__GNyuDW__chaptersWrapper",
  "coverWrapper": "newchapter-module__GNyuDW__coverWrapper",
  "hrFaded": "newchapter-module__GNyuDW__hrFaded",
  "mangaCover": "newchapter-module__GNyuDW__mangaCover",
  "mangaTitle": "newchapter-module__GNyuDW__mangaTitle",
  "newChapterCard": "newchapter-module__GNyuDW__newChapterCard",
  "scanName": "newchapter-module__GNyuDW__scanName",
  "scanWrapper": "newchapter-module__GNyuDW__scanWrapper",
});
}),
"[project]/src/components/NewChapterCard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewChapterCard",
    ()=>NewChapterCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaImage/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/NewChapterCard/newchapter.module.css [app-rsc] (css module)");
;
;
;
;
;
;
;
;
function timeAgo(value) {
    const seconds = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000));
    if (seconds < 60) return "agora";
    if (seconds < 3600) return `há ${Math.floor(seconds / 60)} min`;
    if (seconds < 86400) return `há ${Math.floor(seconds / 3600)} h`;
    return `há ${Math.floor(seconds / 86400)} dias`;
}
function NewChapterCard({ chapters }) {
    const releases = [
        ...chapters.reduce((result, chapter)=>{
            const key = `${chapter.manga}:${chapter.group}`;
            const current = result.get(key) ?? [];
            if (current.length < 4) current.push(chapter);
            result.set(key, current);
            return result;
        }, new Map()).values()
    ];
    if (releases.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Nenhum capítulo publicado até o momento."
    }, void 0, false, {
        fileName: "[project]/src/components/NewChapterCard/page.tsx",
        lineNumber: 28,
        columnNumber: 37
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardsGrid,
        children: releases.map((release)=>{
            const first = release[0];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].newChapterCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].coverWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MediaImage"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaCover,
                            source: first.mangaInfo.mangaCover || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["legacyMangaCover"])(first.mangaInfo.title) || first.mangaInfo.previewImage,
                            alt: `Capa de ${first.mangaInfo.title}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capList,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].chaptersWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaTitle,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/title/${first.manga}`,
                                            children: first.mangaInfo.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 51
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    release.map((chapter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capLi,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BiHash"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capLink,
                                                            href: `/title/${chapter.manga}/${chapter.id}`,
                                                            children: [
                                                                "Capítulo ",
                                                                chapter.chapterNumber
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 73
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capTime,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdAccessTime"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: timeAgo(chapter.createdAt)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 79
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, chapter.id, true, {
                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hrFaded
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImMakeGroup"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 50
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanName,
                                        href: `/scan/${first.group}`,
                                        children: first.groupInfo.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 75
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                ]
            }, `${first.manga}:${first.group}`, true, {
                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                lineNumber: 35,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/NewChapterCard/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/app/(main)/releases/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$releases$2f$releases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(main)/releases/releases.module.css [app-rsc] (css module)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NewChapterCard/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
;
;
;
;
async function ReleasesPage() {
    const chapters = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestChapters"])().catch((error)=>{
        console.error("Falha ao carregar lançamentos:", error);
        return [];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$releases$2f$releases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$releases$2f$releases$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].releasesContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewChapterCard"], {
                chapters: chapters
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/releases/page.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/releases/page.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/releases/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ReleasesPage;
}),
"[project]/src/app/(main)/releases/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/releases/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f30155ec._.js.map