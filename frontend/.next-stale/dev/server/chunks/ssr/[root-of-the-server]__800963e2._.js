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
"[project]/src/components/ScanCard/scancard.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "scanCard": "scancard-module__plQ1OG__scanCard",
  "scanContent": "scancard-module__plQ1OG__scanContent",
  "scanDescription": "scancard-module__plQ1OG__scanDescription",
  "scanInfo": "scancard-module__plQ1OG__scanInfo",
  "scanManga": "scancard-module__plQ1OG__scanManga",
  "scanMangaIcon": "scancard-module__plQ1OG__scanMangaIcon",
  "scanMoreInfo": "scancard-module__plQ1OG__scanMoreInfo",
  "scanName": "scancard-module__plQ1OG__scanName",
  "scanNameWrapper": "scancard-module__plQ1OG__scanNameWrapper",
  "scanPicture": "scancard-module__plQ1OG__scanPicture",
  "scansGrid": "scancard-module__plQ1OG__scansGrid",
  "scansSectionTitle": "scancard-module__plQ1OG__scansSectionTitle",
  "verifiedBadge": "scancard-module__plQ1OG__verifiedBadge",
});
}),
"[project]/src/components/ScanCard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScansCard",
    ()=>ScansCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaImage/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ScanCard/scancard.module.css [app-rsc] (css module)");
;
;
;
;
;
;
;
;
function ScansCard({ scans, loadError = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scansSectionTitle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImMakeGroup"], {
                        size: 19
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScanCard/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Scans Parceiras"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScanCard/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScanCard/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Não foi possível conectar ao servidor de dados. Verifique se o backend está em execução."
            }, void 0, false, {
                fileName: "[project]/src/components/ScanCard/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this) : scans.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Nenhuma scan cadastrada até o momento."
            }, void 0, false, {
                fileName: "[project]/src/components/ScanCard/page.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scansGrid,
                children: scans.map((scan)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/scan/${scan.id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanCard,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MediaImage"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanPicture,
                                        source: scan.groupImage || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["legacyGroupImage"])(scan.name) || scan.previewImage,
                                        alt: `Imagem da ${scan.name}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScanCard/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanNameWrapper,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanName,
                                                            children: scan.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ScanCard/page.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ScanCard/page.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanDescription,
                                                        children: scan.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ScanCard/page.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ScanCard/page.tsx",
                                                lineNumber: 31,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanMoreInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanManga,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HiOutlineBookOpen"], {
                                                                size: 17
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ScanCard/page.tsx",
                                                                lineNumber: 39,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    scan.stats.mangas,
                                                                    " Mangás"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ScanCard/page.tsx",
                                                                lineNumber: 40,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ScanCard/page.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$scancard$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanManga,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BiHash"], {
                                                                size: 17
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ScanCard/page.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    scan.stats.chapters,
                                                                    " Caps"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ScanCard/page.tsx",
                                                                lineNumber: 44,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ScanCard/page.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ScanCard/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScanCard/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScanCard/page.tsx",
                                lineNumber: 28,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScanCard/page.tsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, this)
                    }, scan.id, false, {
                        fileName: "[project]/src/components/ScanCard/page.tsx",
                        lineNumber: 26,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ScanCard/page.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScanCard/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/app/(main)/scans/scans.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "page": "scans-module__-D4t-q__page",
  "scansContainers": "scans-module__-D4t-q__scansContainers",
});
}),
"[project]/src/app/(main)/scans/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// Componentes
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScanCard/page.tsx [app-rsc] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$scans$2f$scans$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(main)/scans/scans.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
;
;
;
;
async function ScansPage() {
    const { scans, loadError } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGroups"])().then((loadedScans)=>({
            scans: loadedScans,
            loadError: false
        })).catch((error)=>{
        console.error("Falha ao carregar scans:", error);
        return {
            scans: [],
            loadError: true
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$scans$2f$scans$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$scans$2f$scans$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scansContainers,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanCard$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScansCard"], {
                scans: scans,
                loadError: loadError
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/scans/page.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/scans/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/scans/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ScansPage;
}),
"[project]/src/app/(main)/scans/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/scans/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__800963e2._.js.map