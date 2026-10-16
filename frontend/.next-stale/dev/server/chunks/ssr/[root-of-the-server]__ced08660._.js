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
"[project]/src/app/(main)/mangas/mangas.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "mangasContainer": "mangas-module__3X0bxq__mangasContainer",
  "page": "mangas-module__3X0bxq__page",
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
    // GRAPHQL_URL é a URL privada recomendada para SSR. O último endereço é o
    // gateway da bridge padrão do Docker, usado pelo ambiente local atual.
    return [
        process.env.GRAPHQL_URL,
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        "http://localhost:5000/graphql",
        "http://172.17.0.1:5000/graphql"
    ].filter((url, index, urls)=>Boolean(url) && urls.indexOf(url) === index);
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
"[project]/src/components/MangaCard/mangacard.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "hrFaded": "mangacard-module__xHjI3G__hrFaded",
  "mangaCard": "mangacard-module__xHjI3G__mangaCard",
  "mangaCover": "mangacard-module__xHjI3G__mangaCover",
  "mangaInfo": "mangacard-module__xHjI3G__mangaInfo",
  "mangaInfoLine": "mangacard-module__xHjI3G__mangaInfoLine",
  "mangaWraper": "mangacard-module__xHjI3G__mangaWraper",
  "mangasGrid": "mangacard-module__xHjI3G__mangasGrid",
  "sectionTitle": "mangacard-module__xHjI3G__sectionTitle",
  "sectionTitleWrapper": "mangacard-module__xHjI3G__sectionTitleWrapper",
});
}),
"[project]/src/components/MangaCard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MangaCard",
    ()=>MangaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaImage/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/MangaCard/mangacard.module.css [app-rsc] (css module)");
;
;
;
;
;
;
;
;
function MangaCard({ pageTitle, mangas }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitleWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HiOutlineBookOpen"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionIcon,
                        size: 25
                    }, void 0, false, {
                        fileName: "[project]/src/components/MangaCard/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/MangaCard/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MangaCard/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            mangas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Nenhuma obra com capítulos publicados até o momento."
            }, void 0, false, {
                fileName: "[project]/src/components/MangaCard/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangasGrid,
                children: mangas.map((manga)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/title/${manga.id}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaCard,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaWraper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MediaImage"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaCover,
                                            source: manga.mangaCover || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["legacyMangaCover"])(manga.title) || manga.previewImage,
                                            alt: `Capa de ${manga.title}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MangaCard/page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MangaCard/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaInfoLine,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GiEvilBook"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MangaCard/page.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 61
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: manga.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MangaCard/page.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 85
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MangaCard/page.tsx",
                                                lineNumber: 31,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hrFaded
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MangaCard/page.tsx",
                                                lineNumber: 32,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$mangacard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaInfoLine,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RiQuillPenLine"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MangaCard/page.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 61
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: manga.mangaka
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MangaCard/page.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 89
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MangaCard/page.tsx",
                                                lineNumber: 33,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MangaCard/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MangaCard/page.tsx",
                                lineNumber: 26,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MangaCard/page.tsx",
                            lineNumber: 25,
                            columnNumber: 17
                        }, this)
                    }, manga.id, false, {
                        fileName: "[project]/src/components/MangaCard/page.tsx",
                        lineNumber: 24,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/MangaCard/page.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MangaCard/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/app/(main)/mangas/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$mangas$2f$mangas$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(main)/mangas/mangas.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MangaCard/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
;
;
;
;
async function MangasPage() {
    const mangas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMangas"])().catch((error)=>{
        console.error("Falha ao carregar mangás:", error);
        return [];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$mangas$2f$mangas$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$mangas$2f$mangas$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangasContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaCard$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MangaCard"], {
                pageTitle: "Mangás cadastrados",
                mangas: mangas
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/mangas/page.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/mangas/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/mangas/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MangasPage;
}),
"[project]/src/app/(main)/mangas/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/mangas/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ced08660._.js.map