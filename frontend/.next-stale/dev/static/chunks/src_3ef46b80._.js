(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ImageUploadField/upload.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "upload-module__0cd8oa__button",
  "circle": "upload-module__0cd8oa__circle",
  "cover": "upload-module__0cd8oa__cover",
  "error": "upload-module__0cd8oa__error",
  "field": "upload-module__0cd8oa__field",
  "preview": "upload-module__0cd8oa__preview",
  "row": "upload-module__0cd8oa__row",
  "square": "upload-module__0cd8oa__square",
});
}),
"[project]/src/components/ImageUploadField/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageUploadField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ImageUploadField/upload.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const limits = {
    USER_AVATAR: 5 * 1024 * 1024,
    GROUP_IMAGE: 5 * 1024 * 1024,
    MANGA_COVER: 8 * 1024 * 1024
};
function ImageUploadField(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "4201b685ecce3c86878e67fcc21a85e406593674121f49e61d30a0e89cb5a1be") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4201b685ecce3c86878e67fcc21a85e406593674121f49e61d30a0e89cb5a1be";
    }
    const { label, purpose, currentUrl, shape: t1, value, onChange, disabled, showPreview: t2 } = t0;
    const shape = t1 === undefined ? "square" : t1;
    const showPreview = t2 === undefined ? true : t2;
    const inputID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fallback = purpose === "GROUP_IMAGE" ? "/group-placeholder.svg" : "/image-placeholder.svg";
    let t3;
    if ($[1] !== value) {
        t3 = value ? URL.createObjectURL(value) : null;
        $[1] = value;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const previewUrl = t3;
    let t4;
    let t5;
    if ($[3] !== previewUrl) {
        t4 = ({
            "ImageUploadField[useEffect()]": ()=>()=>{
                    if (previewUrl) {
                        URL.revokeObjectURL(previewUrl);
                    }
                }
        })["ImageUploadField[useEffect()]"];
        t5 = [
            previewUrl
        ];
        $[3] = previewUrl;
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[6] !== onChange || $[7] !== purpose) {
        t6 = function select(file) {
            if (!file) {
                return;
            }
            setError("");
            if (![
                "image/jpeg",
                "image/png",
                "image/webp"
            ].includes(file.type)) {
                setError("Use uma imagem JPG, PNG ou WebP.");
                return;
            }
            if (file.size > limits[purpose]) {
                setError(`A imagem deve ter no máximo ${limits[purpose] / 1024 / 1024} MB.`);
                return;
            }
            onChange(file);
        };
        $[6] = onChange;
        $[7] = purpose;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const select = t6;
    let t7;
    if ($[9] !== label) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[9] = label;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== currentUrl || $[12] !== fallback || $[13] !== previewUrl || $[14] !== shape || $[15] !== showPreview) {
        t8 = showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].preview} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][shape]}`,
            src: previewUrl || currentUrl || fallback,
            alt: "Pr\xE9via da imagem",
            width: shape === "cover" ? 112 : 96,
            height: shape === "cover" ? 168 : 96,
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 108,
            columnNumber: 25
        }, this);
        $[11] = currentUrl;
        $[12] = fallback;
        $[13] = previewUrl;
        $[14] = shape;
        $[15] = showPreview;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    const t9 = value ? "Trocar sele\xE7\xE3o" : "Selecionar imagem";
    let t10;
    if ($[17] !== disabled || $[18] !== inputID || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            htmlFor: inputID,
            "aria-disabled": disabled,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[17] = disabled;
        $[18] = inputID;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== select) {
        t11 = ({
            "ImageUploadField[<input>.onChange]": (event)=>select(event.target.files?.[0])
        })["ImageUploadField[<input>.onChange]"];
        $[21] = select;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== disabled || $[24] !== inputID || $[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: inputID,
            type: "file",
            accept: "image/jpeg,image/png,image/webp",
            disabled: disabled,
            onChange: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[23] = disabled;
        $[24] = inputID;
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: "A seleção gera apenas uma prévia local. O upload ocorre ao salvar."
        }, void 0, false, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t10 || $[29] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t12;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t14 || $[32] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
            children: [
                t8,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t8;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== error) {
        t16 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 176,
            columnNumber: 20
        }, this);
        $[34] = error;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t15 || $[37] !== t16 || $[38] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
            children: [
                t7,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageUploadField/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[36] = t15;
        $[37] = t16;
        $[38] = t7;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_s(ImageUploadField, "nv1e8p1xbZPOQSMxNnxIP3qeFCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = ImageUploadField;
var _c;
__turbopack_context__.k.register(_c, "ImageUploadField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/upload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "discardImage",
    ()=>discardImage,
    "uploadImage",
    ()=>uploadImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
;
const API = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql").replace(/\/graphql\/?$/, "");
async function uploadImage(file, purpose) {
    const form = new FormData();
    form.append("file", file);
    const response = await fetch(`${API}/uploads/images?purpose=${purpose}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])()}`
        },
        body: form
    });
    const body = await response.json().catch(()=>null);
    if (!response.ok) throw new Error(body?.error ?? "Não foi possível enviar a imagem.");
    return body.media;
}
async function discardImage(id) {
    await fetch(`${API}/uploads/images/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])()}`
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(main)/profile/[username]/profile.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "profile-module__lgakwq__card",
  "form": "profile-module__lgakwq__form",
  "header": "profile-module__lgakwq__header",
  "page": "profile-module__lgakwq__page",
  "toggle": "profile-module__lgakwq__toggle",
});
}),
"[project]/src/app/(main)/profile/[username]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageUploadField/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/upload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(main)/profile/[username]/profile.module.css [app-client] (css module)");
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
const FIELDS = "id name username email profilePicture accountType subscription { plan status autoRenew } preferences { showAdultContent }";
function ProfilePage() {
    _s();
    const { username } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { authenticatedUser, authToken, authLoading, updateAuthenticatedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [media, setMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAdultContent, setShowAdultContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const ownProfile = authenticatedUser?.username === username;
    const selectedImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfilePage.useMemo[selectedImageUrl]": ()=>media ? URL.createObjectURL(media) : null
    }["ProfilePage.useMemo[selectedImageUrl]"], [
        media
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>({
                "ProfilePage.useEffect": ()=>{
                    if (selectedImageUrl) URL.revokeObjectURL(selectedImageUrl);
                }
            })["ProfilePage.useEffect"]
    }["ProfilePage.useEffect"], [
        selectedImageUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            let active = true;
            const request = ownProfile && authToken ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query{me{${FIELDS}}}`, {}, authToken).then({
                "ProfilePage.useEffect": ({ me })=>me
            }["ProfilePage.useEffect"]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query($username:String!){user(username:$username){${FIELDS}}}`, {
                username
            }, authToken).then({
                "ProfilePage.useEffect": ({ user })=>user
            }["ProfilePage.useEffect"]);
            request.then({
                "ProfilePage.useEffect": (user_0)=>{
                    if (!active) return;
                    setProfile(user_0);
                    setName(user_0?.name ?? "");
                    setEmail(user_0?.email ?? "");
                    setShowAdultContent(user_0?.preferences.showAdultContent === true);
                }
            }["ProfilePage.useEffect"]).catch({
                "ProfilePage.useEffect": (error)=>{
                    if (active) setMessage(error.message);
                }
            }["ProfilePage.useEffect"]);
            return ({
                "ProfilePage.useEffect": ()=>{
                    active = false;
                }
            })["ProfilePage.useEffect"];
        }
    }["ProfilePage.useEffect"], [
        username,
        authToken,
        ownProfile
    ]);
    if (authLoading || !profile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: message || "Carregando perfil…"
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                lineNumber: 68,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
            lineNumber: 68,
            columnNumber: 12
        }, this);
    }
    async function save() {
        if (!profile) return;
        setBusy(true);
        setMessage("");
        let uploaded = null;
        try {
            if (media) uploaded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadImage"])(media, "USER_AVATAR");
            const { updateMyProfile } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation($data:UpdateProfileInput!){updateMyProfile(data:$data){${FIELDS}}}`, {
                data: {
                    name,
                    email,
                    showAdultContent,
                    ...uploaded ? {
                        profilePictureID: uploaded.id
                    } : {}
                }
            }, authToken);
            setProfile(updateMyProfile);
            updateAuthenticatedUser(updateMyProfile);
            setName(updateMyProfile.name);
            setEmail(updateMyProfile.email);
            setShowAdultContent(updateMyProfile.preferences.showAdultContent);
            setMedia(null);
            setMessage("Perfil atualizado.");
            router.refresh();
        } catch (error_0) {
            if (uploaded) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["discardImage"])(uploaded.id).catch(()=>undefined);
            setMessage(error_0 instanceof Error ? error_0.message : "Falha ao salvar.");
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: selectedImageUrl || profile.profilePicture || "/image-placeholder.svg",
                            alt: "Foto de perfil",
                            width: 112,
                            height: 112,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: profile.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "@",
                                        profile.username
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 39
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: profile.subscription.plan
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 65
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                ownProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: (event)=>{
                        event.preventDefault();
                        void save();
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Foto de perfil",
                            purpose: "USER_AVATAR",
                            shape: "circle",
                            currentUrl: profile.profilePicture,
                            value: media,
                            onChange: setMedia,
                            disabled: busy,
                            showPreview: false
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Nome",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: name,
                                    maxLength: 120,
                                    onChange: (event_0)=>setName(event_0.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "E-mail",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: email,
                                    maxLength: 254,
                                    autoComplete: "email",
                                    required: true,
                                    disabled: busy,
                                    onChange: (event_1)=>setEmail(event_1.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: showAdultContent,
                                    onChange: (event_2)=>setShowAdultContent(event_2.target.checked)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Exibir conteúdo adulto (+18)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 170
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Oculto por padrão. Esta preferência fica salva na sua conta."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 215
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 164
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: busy || name.trim().length < 2,
                            children: busy ? "Salvando…" : "Salvar alterações"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 121,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                    lineNumber: 112,
                    columnNumber: 24
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
_s(ProfilePage, "GvKBySfCBJjSQYHrq7Nr5kL/gmE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = ProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3ef46b80._.js.map