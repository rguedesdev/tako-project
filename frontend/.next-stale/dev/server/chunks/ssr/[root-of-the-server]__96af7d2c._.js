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
"[project]/src/app/(main)/title/[slug]/title.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "page": "title-module__MUEsOG__page",
  "titleContainer": "title-module__MUEsOG__titleContainer",
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
    "mediaUrl",
    ()=>mediaUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-rsc] (ecmascript)");
;
const GROUP_FIELDS = `
  id groupImage name description country
  stats { followers mangas chapters views likes }
  socialMedias { site discord telegram x instagram facebook bluesky orkut email }
`;
const MANGA_FIELDS = `
  id mangaCover title description mangaka genders
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
}),
"[project]/src/components/MangaInfo/mangainfo.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amazon": "mangainfo-module__6FJemW__amazon",
  "anilist": "mangainfo-module__6FJemW__anilist",
  "aniplanet": "mangainfo-module__6FJemW__aniplanet",
  "btnAdd": "mangainfo-module__6FJemW__btnAdd",
  "btnRead": "mangainfo-module__6FJemW__btnRead",
  "btnWrapper": "mangainfo-module__6FJemW__btnWrapper",
  "cdjapan": "mangainfo-module__6FJemW__cdjapan",
  "demographic": "mangainfo-module__6FJemW__demographic",
  "demographicContainer": "mangainfo-module__6FJemW__demographicContainer",
  "demographicTitle": "mangainfo-module__6FJemW__demographicTitle",
  "demographics": "mangainfo-module__6FJemW__demographics",
  "gender": "mangainfo-module__6FJemW__gender",
  "genderContainer": "mangainfo-module__6FJemW__genderContainer",
  "genderDemographicContainer": "mangainfo-module__6FJemW__genderDemographicContainer",
  "genderTitle": "mangainfo-module__6FJemW__genderTitle",
  "genders": "mangainfo-module__6FJemW__genders",
  "mangaCover": "mangainfo-module__6FJemW__mangaCover",
  "mangaInfo": "mangainfo-module__6FJemW__mangaInfo",
  "mangaInfoContainer": "mangainfo-module__6FJemW__mangaInfoContainer",
  "mangaTags": "mangainfo-module__6FJemW__mangaTags",
  "mangaTitle": "mangainfo-module__6FJemW__mangaTitle",
  "mangaWrapper": "mangainfo-module__6FJemW__mangaWrapper",
  "mangaka": "mangainfo-module__6FJemW__mangaka",
  "mangakaContainer": "mangainfo-module__6FJemW__mangakaContainer",
  "mangakaTitle": "mangainfo-module__6FJemW__mangakaTitle",
  "mangakas": "mangainfo-module__6FJemW__mangakas",
  "myanimelist": "mangainfo-module__6FJemW__myanimelist",
  "otakulist": "mangainfo-module__6FJemW__otakulist",
  "otakuyasan": "mangainfo-module__6FJemW__otakuyasan",
  "rakuten": "mangainfo-module__6FJemW__rakuten",
  "sinopse": "mangainfo-module__6FJemW__sinopse",
  "stores": "mangainfo-module__6FJemW__stores",
  "storesContainer": "mangainfo-module__6FJemW__storesContainer",
  "storesTitle": "mangainfo-module__6FJemW__storesTitle",
  "tag": "mangainfo-module__6FJemW__tag",
  "trackers": "mangainfo-module__6FJemW__trackers",
  "trackersContainer": "mangainfo-module__6FJemW__trackersContainer",
  "trackersTitle": "mangainfo-module__6FJemW__trackersTitle",
});
}),
"[project]/src/components/MangaInfo/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MangaInfo",
    ()=>MangaInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/MangaInfo/mangainfo.module.css [app-rsc] (css module)");
;
;
;
;
;
function MangaInfo({ manga, firstChapterId }) {
    const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mediaUrl"])(manga.mangaCover);
    const trackers = Object.entries(manga.trackers ?? {}).filter(([, url])=>url);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaInfoContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaWrapper,
                        children: cover && // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaCover,
                            src: cover,
                            alt: `Capa de ${manga.title}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/MangaInfo/page.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].btnWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].btnAdd,
                                disabled: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LuSquareLibrary"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 54
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Adicionar à Biblioteca"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 83
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MangaInfo/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            firstChapterId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].btnRead,
                                href: `/title/${manga.id}/${firstChapterId}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CiPlay1"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 106
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Iniciar leitura"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 127
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MangaInfo/page.tsx",
                                lineNumber: 23,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MangaInfo/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaTitle,
                        children: manga.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sinopse,
                        children: manga.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].genderDemographicContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].genderContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].genderTitle,
                                    children: "Gêneros"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MangaInfo/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].genders,
                                    children: manga.genders.map((gender)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].gender,
                                            children: gender
                                        }, gender, false, {
                                            fileName: "[project]/src/components/MangaInfo/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 76
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MangaInfo/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MangaInfo/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangakaContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangakaTitle,
                                children: "Mangaka"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MangaInfo/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangakas,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mangaka,
                                    children: manga.mangaka
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MangaInfo/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MangaInfo/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    trackers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].trackersContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].trackersTitle,
                                children: "Trackers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MangaInfo/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$mangainfo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].trackers,
                                children: trackers.map(([name, url])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: String(url),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: name
                                    }, name, false, {
                                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 77
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MangaInfo/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MangaInfo/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MangaInfo/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MangaInfo/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/Chapters/chapter.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "capContent": "chapter-module__84vojW__capContent",
  "capLine": "chapter-module__84vojW__capLine",
  "capLink": "chapter-module__84vojW__capLink",
  "capNumber": "chapter-module__84vojW__capNumber",
  "capTitle": "chapter-module__84vojW__capTitle",
  "hrFadded": "chapter-module__84vojW__hrFadded",
  "releaseWrapper": "chapter-module__84vojW__releaseWrapper",
  "releasesGroup": "chapter-module__84vojW__releasesGroup",
  "scanlator": "chapter-module__84vojW__scanlator",
  "volNumber": "chapter-module__84vojW__volNumber",
  "volTitle": "chapter-module__84vojW__volTitle",
});
}),
"[project]/src/components/Chapters/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chapters",
    ()=>Chapters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Chapters/chapter.module.css [app-rsc] (css module)");
;
;
;
;
;
;
function countryFlag(country) {
    const normalized = country.toLowerCase();
    if (normalized.includes("brasil") || normalized.includes("brazil")) return "🇧🇷";
    if (normalized.includes("jap")) return "🇯🇵";
    if (normalized.includes("portugal")) return "🇵🇹";
    if (normalized.includes("espan") || normalized.includes("spain")) return "🇪🇸";
    if (normalized.includes("eua") || normalized.includes("united states")) return "🇺🇸";
    return "🌍";
}
function Chapters({ mangaId, chapters }) {
    const grouped = chapters.reduce((result, chapter)=>{
        const releases = result.get(chapter.chapterNumber) ?? [];
        releases.push(chapter);
        result.set(chapter.chapterNumber, releases);
        return result;
    }, new Map());
    const entries = [
        ...grouped.entries()
    ].sort(([a], [b])=>b - a);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].volNumber,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GiEvilBook"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chapters/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].volTitle,
                        children: "Capítulos disponíveis"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Chapters/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Chapters/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            entries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Nenhum capítulo publicado para esta obra."
            }, void 0, false, {
                fileName: "[project]/src/components/Chapters/page.tsx",
                lineNumber: 35,
                columnNumber: 32
            }, this),
            entries.map(([number, releases])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capNumber,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BiHash"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chapters/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 45
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        "Capítulo ",
                                        number
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chapters/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 65
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chapters/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].releasesGroup,
                            children: releases.map((release, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].releaseWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capLine,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capLink,
                                                href: `/title/${mangaId}/${release.id}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].capTitle,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: countryFlag(release.groupInfo.country)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Chapters/page.tsx",
                                                                lineNumber: 45,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: release.chapterTitle || `Capítulo ${release.chapterNumber}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Chapters/page.tsx",
                                                                lineNumber: 46,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Chapters/page.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].scanlator,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImMakeGroup"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Chapters/page.tsx",
                                                                lineNumber: 48,
                                                                columnNumber: 55
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: release.groupInfo.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Chapters/page.tsx",
                                                                lineNumber: 48,
                                                                columnNumber: 80
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Chapters/page.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Chapters/page.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chapters/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        index < releases.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$chapter$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hrFadded
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chapters/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, release.id, true, {
                                    fileName: "[project]/src/components/Chapters/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chapters/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, number, true, {
                    fileName: "[project]/src/components/Chapters/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Chapters/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/app/(main)/title/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$title$2f5b$slug$5d2f$title$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(main)/title/[slug]/title.module.css [app-rsc] (css module)");
// Componentes
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MangaInfo/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Chapters/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function TitlePage({ params }) {
    const { slug } = await params;
    const [manga, chapters] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getManga"])(slug),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChaptersByManga"])(slug)
    ]);
    if (!manga) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const firstChapter = [
        ...chapters
    ].sort((a, b)=>a.chapterNumber - b.chapterNumber)[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$title$2f5b$slug$5d2f$title$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$title$2f5b$slug$5d2f$title$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].titleContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaInfo$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MangaInfo"], {
                    manga: manga,
                    firstChapterId: firstChapter?.id
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/title/[slug]/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Chapters$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chapters"], {
                    mangaId: manga.id,
                    chapters: chapters
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/title/[slug]/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/title/[slug]/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/title/[slug]/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = TitlePage;
}),
"[project]/src/app/(main)/title/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/title/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96af7d2c._.js.map