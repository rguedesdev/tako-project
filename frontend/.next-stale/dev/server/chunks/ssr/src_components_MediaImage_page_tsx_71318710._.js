module.exports = [
"[project]/src/components/MediaImage/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaImage",
    ()=>MediaImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const configuredGateway = process.env.NEXT_PUBLIC_IPFS_GATEWAY?.replace(/\/?$/, "/");
    const backendOrigin = (process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql").replace(/\/graphql\/?$/, "");
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
function MediaImage({ source, fallback, alt, onError, ...props }) {
    const candidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildCandidates(source, fallback), [
        source,
        fallback
    ]);
    const [candidateIndex, setCandidateIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        ...props,
        src: candidates[Math.min(candidateIndex, candidates.length - 1)],
        alt: alt ?? "",
        onError: (event)=>{
            onError?.(event);
            setCandidateIndex((index)=>Math.min(index + 1, candidates.length - 1));
        }
    }, void 0, false, {
        fileName: "[project]/src/components/MediaImage/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this));
}
;
}),
];

//# sourceMappingURL=src_components_MediaImage_page_tsx_71318710._.js.map