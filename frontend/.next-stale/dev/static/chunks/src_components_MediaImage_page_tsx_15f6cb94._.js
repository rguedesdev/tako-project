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
]);

//# sourceMappingURL=src_components_MediaImage_page_tsx_15f6cb94._.js.map