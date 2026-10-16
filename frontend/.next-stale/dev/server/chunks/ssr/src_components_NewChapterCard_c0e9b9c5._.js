module.exports = [
"[project]/src/components/NewChapterCard/newchapter.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/NewChapterCard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewChapterCard",
    ()=>NewChapterCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Imports Principais
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/NewChapterCard/newchapter.module.css [app-ssr] (css module)");
// Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// ==========================================
// 1. COMPONENTE DE IMAGEM COM RETRY AUTOMÁTICO
// ==========================================
function IpfsMangaImage({ cid }) {
    const [gatewayIndex, setGatewayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imgSrc, setImgSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const gateways = [
        `https://cloudflare-ipfs.com/ipfs/${cid}`,
        `https://ipfs.io/ipfs/${cid}`,
        `https://dweb.link/ipfs/${cid}`
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setImgSrc(gateways[gatewayIndex]);
    }, [
        gatewayIndex,
        cid
    ]);
    const handleError = ()=>{
        if (gatewayIndex < gateways.length - 1) {
            setGatewayIndex((prev)=>prev + 1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mangaCover,
        src: imgSrc || gateways[0],
        onError: handleError,
        alt: "Manga Cover",
        style: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
        }
    }, void 0, false, {
        fileName: "[project]/src/components/NewChapterCard/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
function NewChapterCard() {
    const realeases = [
        {
            id: 0,
            // Passando o CID explicitamente no lugar do import estático
            cid: "bafkreiewqrm2jkyanjodmgydj5h5pewtro2w4anfzgklyx7jnsaymdekqu",
            title: "One Piece",
            chapters: [
                {
                    number: 1303,
                    time: "há 25 min",
                    language: "Brazilian Portuguese"
                },
                {
                    number: 12,
                    time: "há 1 hora",
                    language: "Brazilian Portuguese"
                },
                {
                    number: 11,
                    time: "há 2 hora",
                    language: "Brazilian Portuguese"
                },
                {
                    number: 10,
                    time: "há 1 dia",
                    language: "Brazilian Portuguese"
                }
            ],
            scanInfo: {
                name: "Piece Project",
                country: "Brazil"
            }
        },
        {
            id: 1,
            // Em produção, cada mangá terá seu próprio CID do banco
            cid: "bafkreiewqrm2jkyanjodmgydj5h5pewtro2w4anfzgklyx7jnsaymdekqu",
            title: "Ruri Dragon",
            chapters: [
                {
                    number: 21,
                    time: "há 25 min",
                    language: "Japanese"
                },
                {
                    number: 20,
                    time: "há 1 hora",
                    language: "Japanese"
                },
                {
                    number: 19,
                    time: "há 2 hora",
                    language: "Japanese"
                },
                {
                    number: 18,
                    time: "há 1 dia",
                    language: "Japanese"
                }
            ],
            scanInfo: {
                name: "Morro dos Scans",
                country: "Japan"
            }
        }
    ];
    const languageFlags = {
        "Brazilian Portuguese": "🇧🇷",
        Japanese: "🇯🇵",
        English: "🇺🇸",
        Spanish: "🇪🇸",
        Polish: "🇵🇱",
        Chinese: "🇨🇳"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
        children: realeases && realeases.map((realease)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newChapterCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverWrapper,
                        style: {
                            position: "relative",
                            minHeight: "250px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IpfsMangaImage, {
                            cid: realease.cid
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].capList,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chaptersWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mangaTitle,
                                        children: realease.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    realease.chapters.map((chapter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].capLi,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].capInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiHash"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].capLink,
                                                            href: `/`,
                                                            children: `${languageFlags[chapter.language]} Capítulo ${chapter.number}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].capTime,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdAccessTime"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: chapter.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, chapter.number, true, {
                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hrFaded
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scanWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImMakeGroup"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scanName,
                                            children: realease.scanInfo.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)
                ]
            }, realease.id, true, {
                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                lineNumber: 103,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/NewChapterCard/page.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
;
}),
];

//# sourceMappingURL=src_components_NewChapterCard_c0e9b9c5._.js.map