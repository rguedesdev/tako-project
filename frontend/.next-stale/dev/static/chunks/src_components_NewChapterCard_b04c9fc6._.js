(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/NewChapterCard/newchapter.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/NewChapterCard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewChapterCard",
    ()=>NewChapterCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Imports Principais
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/NewChapterCard/newchapter.module.css [app-client] (css module)");
// Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function IpfsMangaImage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "6a66296df5731d1ac303d0d5e9f9d3da869385906fc47cc2cceac20c98551a10") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a66296df5731d1ac303d0d5e9f9d3da869385906fc47cc2cceac20c98551a10";
    }
    const { cid } = t0;
    const [gatewayIndex, setGatewayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imgSrc, setImgSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const t1 = `https://cloudflare-ipfs.com/ipfs/${cid}`;
    const t2 = `https://ipfs.io/ipfs/${cid}`;
    const t3 = `https://dweb.link/ipfs/${cid}`;
    let t4;
    if ($[1] !== t1 || $[2] !== t2 || $[3] !== t3) {
        t4 = [
            t1,
            t2,
            t3
        ];
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const gateways = t4;
    let t5;
    if ($[5] !== gatewayIndex || $[6] !== gateways) {
        t5 = ({
            "IpfsMangaImage[useEffect()]": ()=>{
                setImgSrc(gateways[gatewayIndex]);
            }
        })["IpfsMangaImage[useEffect()]"];
        $[5] = gatewayIndex;
        $[6] = gateways;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== cid || $[9] !== gatewayIndex) {
        t6 = [
            gatewayIndex,
            cid
        ];
        $[8] = cid;
        $[9] = gatewayIndex;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[11] !== gatewayIndex || $[12] !== gateways.length) {
        t7 = ({
            "IpfsMangaImage[handleError]": ()=>{
                if (gatewayIndex < gateways.length - 1) {
                    setGatewayIndex(_IpfsMangaImageHandleErrorSetGatewayIndex);
                }
            }
        })["IpfsMangaImage[handleError]"];
        $[11] = gatewayIndex;
        $[12] = gateways.length;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const handleError = t7;
    const t8 = imgSrc || gateways[0];
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
        };
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== handleError || $[16] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mangaCover,
            src: t8,
            onError: handleError,
            alt: "Manga Cover",
            style: t9
        }, void 0, false, {
            fileName: "[project]/src/components/NewChapterCard/page.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[15] = handleError;
        $[16] = t8;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
}
_s(IpfsMangaImage, "1fs2nIDkXKpEMCy0P1XLsDusTtU=");
_c = IpfsMangaImage;
// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
function _IpfsMangaImageHandleErrorSetGatewayIndex(prev) {
    return prev + 1;
}
function NewChapterCard() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6a66296df5731d1ac303d0d5e9f9d3da869385906fc47cc2cceac20c98551a10") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a66296df5731d1ac303d0d5e9f9d3da869385906fc47cc2cceac20c98551a10";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const realeases = [
            {
                id: 0,
                cid: "bafkreiewqrm2jkyanjodmgydj5h5pewtro2w4anfzgklyx7jnsaymdekqu",
                title: "One Piece",
                chapters: [
                    {
                        number: 1303,
                        time: "h\xE1 25 min",
                        language: "Brazilian Portuguese"
                    },
                    {
                        number: 12,
                        time: "h\xE1 1 hora",
                        language: "Brazilian Portuguese"
                    },
                    {
                        number: 11,
                        time: "h\xE1 2 hora",
                        language: "Brazilian Portuguese"
                    },
                    {
                        number: 10,
                        time: "h\xE1 1 dia",
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
                cid: "bafkreiewqrm2jkyanjodmgydj5h5pewtro2w4anfzgklyx7jnsaymdekqu",
                title: "Ruri Dragon",
                chapters: [
                    {
                        number: 21,
                        time: "h\xE1 25 min",
                        language: "Japanese"
                    },
                    {
                        number: 20,
                        time: "h\xE1 1 hora",
                        language: "Japanese"
                    },
                    {
                        number: 19,
                        time: "h\xE1 2 hora",
                        language: "Japanese"
                    },
                    {
                        number: 18,
                        time: "h\xE1 1 dia",
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
            "Brazilian Portuguese": "\uD83C\uDDE7\uD83C\uDDF7",
            Japanese: "\uD83C\uDDEF\uD83C\uDDF5",
            English: "\uD83C\uDDFA\uD83C\uDDF8",
            Spanish: "\uD83C\uDDEA\uD83C\uDDF8",
            Polish: "\uD83C\uDDF5\uD83C\uDDF1",
            Chinese: "\uD83C\uDDE8\uD83C\uDDF3"
        };
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsGrid,
            children: realeases && realeases.map({
                "NewChapterCard[realeases.map()]": (realease)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newChapterCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverWrapper,
                                style: {
                                    position: "relative",
                                    minHeight: "250px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpfsMangaImage, {
                                    cid: realease.cid
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 188,
                                columnNumber: 117
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chaptersWrapper,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mangaTitle,
                                                children: realease.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 131
                                            }, this),
                                            realease.chapters.map({
                                                "NewChapterCard[realeases.map() > realease.chapters.map()]": (chapter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capLi,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capInfo,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiHash"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 171
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capLink,
                                                                        href: "/",
                                                                        children: `${languageFlags[chapter.language]} Capítulo ${chapter.number}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 191
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 139
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capTime,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdAccessTime"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 373
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: chapter.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 399
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 341
                                                            }, this)
                                                        ]
                                                    }, chapter.number, true, {
                                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 89
                                                    }, this)
                                            }["NewChapterCard[realeases.map() > realease.chapters.map()]"])
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hrFaded
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 85
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanWrapper,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImMakeGroup"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 158
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewChapterCard$2f$newchapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanName,
                                                    children: realease.scanInfo.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 183
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 123
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 118
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NewChapterCard/page.tsx",
                                lineNumber: 191,
                                columnNumber: 60
                            }, this)
                        ]
                    }, realease.id, true, {
                        fileName: "[project]/src/components/NewChapterCard/page.tsx",
                        lineNumber: 188,
                        columnNumber: 56
                    }, this)
            }["NewChapterCard[realeases.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/NewChapterCard/page.tsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = NewChapterCard;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "IpfsMangaImage");
__turbopack_context__.k.register(_c1, "NewChapterCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_NewChapterCard_b04c9fc6._.js.map