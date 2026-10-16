(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MediaImage/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaImage",
    ()=>MediaImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function normalizeCid(value) {
    return value.replace(/^ipfs:\/\//i, "").replace(/^\/?ipfs\//i, "");
}
function buildCandidates(source, fallback = "/image-placeholder.svg") {
    if (!source) return [
        fallback
    ];
    if (/^(https?:|data:|blob:|\/)/i.test(source)) return [
        ...new Set([
            source,
            fallback
        ])
    ];
    const cid = normalizeCid(source);
    const configuredGateway = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_IPFS_GATEWAY?.replace(/\/?$/, "/");
    const backendOrigin = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql").replace(/\/graphql\/?$/, "");
    return [
        ...new Set([
            `${backendOrigin}/ipfs/${cid}`,
            configuredGateway ? `${configuredGateway}${cid}` : null,
            `https://dweb.link/ipfs/${cid}`,
            `https://ipfs.io/ipfs/${cid}`,
            fallback
        ].filter((candidate)=>Boolean(candidate)))
    ];
}
function MediaImage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "ae25dfb583c1c9caa535cbe6cbc9bbec056f041ecb3c3521e5f0550a7e2854a5") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae25dfb583c1c9caa535cbe6cbc9bbec056f041ecb3c3521e5f0550a7e2854a5";
    }
    let alt;
    let fallback;
    let onError;
    let props;
    let source;
    if ($[1] !== t0) {
        ({ source, fallback, alt, onError, ...props } = t0);
        $[1] = t0;
        $[2] = alt;
        $[3] = fallback;
        $[4] = onError;
        $[5] = props;
        $[6] = source;
    } else {
        alt = $[2];
        fallback = $[3];
        onError = $[4];
        props = $[5];
        source = $[6];
    }
    let t1;
    if ($[7] !== fallback || $[8] !== source) {
        t1 = buildCandidates(source, fallback);
        $[7] = fallback;
        $[8] = source;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const candidates = t1;
    const [candidateIndex, setCandidateIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const t2 = candidates[Math.min(candidateIndex, candidates.length - 1)];
    const t3 = alt ?? "";
    let t4;
    if ($[10] !== candidates.length || $[11] !== onError) {
        t4 = ({
            "MediaImage[<img>.onError]": (event)=>{
                onError?.(event);
                setCandidateIndex({
                    "MediaImage[<img>.onError > setCandidateIndex()]": (index)=>Math.min(index + 1, candidates.length - 1)
                }["MediaImage[<img>.onError > setCandidateIndex()]"]);
            }
        })["MediaImage[<img>.onError]"];
        $[10] = candidates.length;
        $[11] = onError;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== props || $[14] !== t2 || $[15] !== t3 || $[16] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            ...props,
            src: t2,
            alt: t3,
            onError: t4
        }, void 0, false, {
            fileName: "[project]/src/components/MediaImage/page.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = props;
        $[14] = t2;
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
}
_s(MediaImage, "GeDeS7I8aeQihBRehnw6m4EFuCk=");
_c = MediaImage;
;
var _c;
__turbopack_context__.k.register(_c, "MediaImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScanInfo/scaninfo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnDonate": "scaninfo-module__71XJ4W__btnDonate",
  "btnFollow": "scaninfo-module__71XJ4W__btnFollow",
  "btnWrapper": "scaninfo-module__71XJ4W__btnWrapper",
  "followError": "scaninfo-module__71XJ4W__followError",
  "following": "scaninfo-module__71XJ4W__following",
  "followingLabel": "scaninfo-module__71XJ4W__followingLabel",
  "mangaTags": "scaninfo-module__71XJ4W__mangaTags",
  "media": "scaninfo-module__71XJ4W__media",
  "medias": "scaninfo-module__71XJ4W__medias",
  "mediasContainer": "scaninfo-module__71XJ4W__mediasContainer",
  "mediasTitle": "scaninfo-module__71XJ4W__mediasTitle",
  "scanInfo": "scaninfo-module__71XJ4W__scanInfo",
  "scanInfoContainer": "scaninfo-module__71XJ4W__scanInfoContainer",
  "scanName": "scaninfo-module__71XJ4W__scanName",
  "scanNameWrapper": "scaninfo-module__71XJ4W__scanNameWrapper",
  "scanPicture": "scaninfo-module__71XJ4W__scanPicture",
  "scanWrapper": "scaninfo-module__71XJ4W__scanWrapper",
  "sinopse": "scaninfo-module__71XJ4W__sinopse",
  "stat": "scaninfo-module__71XJ4W__stat",
  "stats": "scaninfo-module__71XJ4W__stats",
  "statsContainer": "scaninfo-module__71XJ4W__statsContainer",
  "statsTitle": "scaninfo-module__71XJ4W__statsTitle",
  "tag": "scaninfo-module__71XJ4W__tag",
  "unfollowLabel": "scaninfo-module__71XJ4W__unfollowLabel",
  "verifiedBadge": "scaninfo-module__71XJ4W__verifiedBadge",
});
}),
"[project]/src/components/ScanInfo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScanInfo",
    ()=>ScanInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi2/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaImage/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ScanInfo/scaninfo.module.css [app-client] (css module)");
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
;
;
;
;
;
;
;
const socialLabels = {
    site: "Site",
    discord: "Discord",
    telegram: "Telegram",
    x: "Twitter/X",
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "YouTube",
    tiktok: "TikTok",
    bluesky: "Bluesky",
    orkut: "Orkkut",
    email: "Email"
};
function SocialIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "bf5e103c743ebe7f627ba376cf70379e978eb6c8d5d2906dc7929fa681734a96") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bf5e103c743ebe7f627ba376cf70379e978eb6c8d5d2906dc7929fa681734a96";
    }
    const { name } = t0;
    if (name === "discord") {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiDiscordLine"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    if (name === "telegram") {
        let t1;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiTelegram2Line"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 55,
                columnNumber: 12
            }, this);
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        return t1;
    }
    if (name === "x") {
        let t1;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 65,
                columnNumber: 12
            }, this);
            $[3] = t1;
        } else {
            t1 = $[3];
        }
        return t1;
    }
    if (name === "instagram") {
        let t1;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 75,
                columnNumber: 12
            }, this);
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        return t1;
    }
    if (name === "facebook") {
        let t1;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 85,
                columnNumber: 12
            }, this);
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        return t1;
    }
    if (name === "youtube") {
        let t1;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 95,
                columnNumber: 12
            }, this);
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        return t1;
    }
    if (name === "tiktok") {
        let t1;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTiktok"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 105,
                columnNumber: 12
            }, this);
            $[7] = t1;
        } else {
            t1 = $[7];
        }
        return t1;
    }
    if (name === "bluesky") {
        let t1;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiBlueskyLine"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 115,
                columnNumber: 12
            }, this);
            $[8] = t1;
        } else {
            t1 = $[8];
        }
        return t1;
    }
    if (name === "email") {
        let t1;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineMail"], {}, void 0, false, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 125,
                columnNumber: 12
            }, this);
            $[9] = t1;
        } else {
            t1 = $[9];
        }
        return t1;
    }
    let t1;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosGlobe"], {}, void 0, false, {
            fileName: "[project]/src/components/ScanInfo/page.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[10] = t1;
    } else {
        t1 = $[10];
    }
    return t1;
}
_c = SocialIcon;
function statLabel(value, singular, plural) {
    return `${value.toLocaleString("pt-BR")} ${value === 1 ? singular : plural}`;
}
function isSafeLink(entry) {
    const [key, value] = entry;
    if (!value?.trim()) return false;
    if (key === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    try {
        const url = new URL(value);
        return url.protocol === "https:" && !url.username && !url.password;
    } catch  {
        return false;
    }
}
function ScanInfo({ scan }) {
    _s();
    const { authenticatedUser, authToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [followed, setFollowed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(scan.followedByMe === true);
    const [followers, setFollowers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(scan.stats.followers);
    const [followBusy, setFollowBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [followError, setFollowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const links = Object.entries(scan.socialMedias ?? {}).filter(isSafeLink);
    async function toggleFollow() {
        if (!authToken || followBusy) return;
        setFollowBusy(true);
        setFollowError("");
        try {
            const { toggleGroupFollow } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation ToggleGroupFollow($groupID: ID!) {
          toggleGroupFollow(groupID: $groupID) { followed followers }
        }`, {
                groupID: scan.id
            }, authToken);
            setFollowed(toggleGroupFollow.followed);
            setFollowers(toggleGroupFollow.followers);
        } catch (error) {
            setFollowError(error instanceof Error ? error.message : "Não foi possível atualizar o acompanhamento.");
        } finally{
            setFollowBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanInfoContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaImage"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanPicture,
                            source: scan.groupImage,
                            fallback: "/group-placeholder.svg",
                            alt: `Imagem da ${scan.name}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScanInfo/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnFollow} ${followed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].following : ""}`,
                                disabled: !authenticatedUser || followBusy,
                                onClick: ()=>void toggleFollow(),
                                "aria-pressed": followed,
                                "aria-label": followed ? "Deixar de seguir a scan" : authenticatedUser ? "Seguir scan" : "Entre para seguir",
                                children: followBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Atualizando…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScanInfo/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 27
                                }, this) : followed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].followingLabel,
                                            children: "Seguindo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScanInfo/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 68
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unfollowLabel,
                                            children: "Deixar de seguir"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScanInfo/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 123
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: authenticatedUser ? "Seguir scan" : "Entre para seguir"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScanInfo/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 191
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            followError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].followError,
                                role: "status",
                                children: followError
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 203,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanNameWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanName,
                                children: scan.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 207,
                                columnNumber: 48
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                title: scan.country,
                                children: scan.countryFlag
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 207,
                                columnNumber: 100
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sinopse,
                        children: scan.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsTitle,
                                children: "Estatísticas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlinePeopleOutline"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: statLabel(followers, "Seguidor", "Seguidores")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 79
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineBookOpen"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: statLabel(scan.stats.mangas, "Mangá", "Mangás")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 74
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiHash"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: statLabel(scan.stats.chapters, "Cap", "Caps")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 63
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowTrendUp"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: statLabel(scan.stats.views, "View", "Views")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 71
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiLike"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: statLabel(scan.stats.likes, "Like", "Likes")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 63
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediasContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediasTitle,
                                children: "Links"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].medias,
                                children: links.map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScanInfo$2f$scaninfo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media,
                                        href: key === "email" ? `mailto:${value}` : value,
                                        target: key === "email" ? undefined : "_blank",
                                        rel: key === "email" ? undefined : "noopener noreferrer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                                name: key
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: socialLabels[key] ?? key
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 44
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 44
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScanInfo/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScanInfo/page.tsx",
                        lineNumber: 219,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScanInfo/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScanInfo/page.tsx",
        lineNumber: 194,
        columnNumber: 10
    }, this);
}
_s(ScanInfo, "mJAEmIbARSsRCBercxDLLvhzIvQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c1 = ScanInfo;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "SocialIcon");
__turbopack_context__.k.register(_c1, "ScanInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_4f9513b8._.js.map