(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/upload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ImageUploadField/upload.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ImageUploadField({ label, purpose, currentUrl, shape = "square", value, onChange, disabled }) {
    _s();
    const inputID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fallback = purpose === "GROUP_IMAGE" ? "/group-placeholder.svg" : "/image-placeholder.svg";
    const preview = value?.url || currentUrl || fallback;
    async function select(file) {
        if (!file) return;
        setUploading(true);
        setError("");
        try {
            onChange(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadImage"])(file, purpose));
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Falha no upload.");
        } finally{
            setUploading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].preview} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][shape]}`,
                        src: preview,
                        alt: "Prévia da imagem",
                        width: shape === "cover" ? 112 : 96,
                        height: shape === "cover" ? 168 : 96,
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageUploadField/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                htmlFor: inputID,
                                "aria-disabled": disabled || uploading,
                                children: uploading ? "Enviando…" : value ? "Trocar seleção" : "Selecionar imagem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: inputID,
                                type: "file",
                                accept: "image/jpeg,image/png,image/webp",
                                disabled: disabled || uploading,
                                onChange: (event)=>void select(event.target.files?.[0])
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "JPG, PNG ou WebP. A imagem é validada e convertida para WebP."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImageUploadField/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImageUploadField/page.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_s(ImageUploadField, "v6s1pExZo82KxTpydXp7al3oSJM=", false, function() {
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
"[project]/src/app/(main)/manage/manage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "manage-module__9oFG_a__actions",
  "active": "manage-module__9oFG_a__active",
  "content": "manage-module__9oFG_a__content",
  "empty": "manage-module__9oFG_a__empty",
  "form": "manage-module__9oFG_a__form",
  "heading": "manage-module__9oFG_a__heading",
  "layout": "manage-module__9oFG_a__layout",
  "list": "manage-module__9oFG_a__list",
  "mangaArea": "manage-module__9oFG_a__mangaArea",
  "message": "manage-module__9oFG_a__message",
  "page": "manage-module__9oFG_a__page",
  "primary": "manage-module__9oFG_a__primary",
  "results": "manage-module__9oFG_a__results",
  "search": "manage-module__9oFG_a__search",
  "sectionTitle": "manage-module__9oFG_a__sectionTitle",
  "side": "manage-module__9oFG_a__side",
  "status": "manage-module__9oFG_a__status",
});
}),
"[project]/src/app/(main)/manage/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageUploadField/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(main)/manage/manage.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const GROUP_FIELDS = "id name description country countryCode countryFlag groupImage mangas { id title aliases description mangaka genders mangaCover }";
function ManagePage() {
    _s();
    const { authToken, authenticatedUser, authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [area, setArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("group");
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groupID, setGroupID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("new");
    const [groupForm, setGroupForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        countryCode: ""
    });
    const [groupImage, setGroupImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searching, setSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingMangaID, setEditingMangaID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mangaForm, setMangaForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        description: "",
        mangaka: "",
        genders: "",
        aliases: ""
    });
    const [mangaCover, setMangaCover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const selectedGroup = groups.find((group)=>group.id === groupID);
    const editingManga = selectedGroup?.mangas.find((manga)=>manga.id === editingMangaID);
    async function loadGroups(preferredID) {
        if (!authToken) return;
        const { me, countries: availableCountries } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query { me { id groups { ${GROUP_FIELDS} } } countries { code name flag } }`, {}, authToken);
        setGroups(me.groups);
        setCountries(availableCountries);
        if (preferredID) setGroupID(preferredID);
        else if (groupID === "new" && me.groups.length) setGroupID(me.groups[0].id);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagePage.useEffect": ()=>{
            if (authToken) void loadGroups().catch({
                "ManagePage.useEffect": (error)=>setMessage(error.message)
            }["ManagePage.useEffect"]);
        // loadGroups intentionally reacts only to the authenticated session.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ManagePage.useEffect"], [
        authToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagePage.useEffect": ()=>{
            const query = title.trim();
            if (query.length < 2 || !authToken) return;
            const timer = window.setTimeout({
                "ManagePage.useEffect.timer": async ()=>{
                    setSearching(true);
                    try {
                        const { searchMangas } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query($query:String!){searchMangas(query:$query){id title aliases description mangaka genders mangaCover}}`, {
                            query
                        }, authToken);
                        setMatches(searchMangas);
                    } catch (error) {
                        setMessage(error instanceof Error ? error.message : "Falha na busca.");
                    } finally{
                        setSearching(false);
                    }
                }
            }["ManagePage.useEffect.timer"], 350);
            return ({
                "ManagePage.useEffect": ()=>window.clearTimeout(timer)
            })["ManagePage.useEffect"];
        }
    }["ManagePage.useEffect"], [
        title,
        authToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagePage.useEffect": ()=>{
            if (selectedGroup) {
                setGroupForm({
                    name: selectedGroup.name,
                    description: selectedGroup.description,
                    countryCode: selectedGroup.countryCode
                });
            } else {
                setGroupForm({
                    name: "",
                    description: "",
                    countryCode: ""
                });
            }
            setGroupImage(null);
            setEditingMangaID(null);
        }
    }["ManagePage.useEffect"], [
        groupID
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    const exactMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ManagePage.useMemo[exactMatch]": ()=>matches.some({
                "ManagePage.useMemo[exactMatch]": (manga)=>manga.title.trim().localeCompare(title.trim(), undefined, {
                        sensitivity: "base"
                    }) === 0
            }["ManagePage.useMemo[exactMatch]"])
    }["ManagePage.useMemo[exactMatch]"], [
        matches,
        title
    ]);
    async function saveGroup(event) {
        event.preventDefault();
        if (!authToken) return;
        setBusy(true);
        setMessage("");
        try {
            const data = {
                ...groupForm,
                ...groupImage ? {
                    groupImageID: groupImage.id
                } : {}
            };
            const operation = groupID === "new" ? `mutation($data:CreateGroupInput!){createGroup(data:$data){${GROUP_FIELDS}}}` : `mutation($id:ID!,$data:UpdateGroupInput!){updateGroup(id:$id,data:$data){${GROUP_FIELDS}}}`;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(operation, {
                id: groupID,
                data
            }, authToken);
            const saved = result.createGroup ?? result.updateGroup;
            if (saved) await loadGroups(saved.id);
            setGroupImage(null);
            setMessage(groupID === "new" ? "Grupo criado." : "Grupo atualizado.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Falha ao salvar o grupo.");
        } finally{
            setBusy(false);
        }
    }
    async function addExisting(mangaID) {
        if (!authToken || !selectedGroup) return;
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($mangaID:ID!,$groupID:ID!){addMangaToGroup(mangaID:$mangaID,groupID:$groupID){id}}", {
                mangaID,
                groupID: selectedGroup.id
            }, authToken);
            await loadGroups(selectedGroup.id);
            setMessage("Mangá relacionado ao grupo sem criar uma cópia.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Falha ao relacionar o mangá.");
        } finally{
            setBusy(false);
        }
    }
    function editManga(manga) {
        setEditingMangaID(manga.id);
        setTitle(manga.title);
        setMangaForm({
            description: manga.description,
            mangaka: manga.mangaka,
            genders: manga.genders.join(", "),
            aliases: manga.aliases.join(", ")
        });
        setMangaCover(null);
    }
    async function saveManga(event) {
        event.preventDefault();
        if (!authToken || !selectedGroup) return;
        setBusy(true);
        setMessage("");
        const data = {
            title: title.trim(),
            description: mangaForm.description,
            mangaka: mangaForm.mangaka,
            genders: mangaForm.genders.split(",").map((value)=>value.trim()).filter(Boolean),
            aliases: mangaForm.aliases.split(",").map((value)=>value.trim()).filter(Boolean),
            ...mangaCover ? {
                mangaCoverID: mangaCover.id
            } : {}
        };
        try {
            if (editingMangaID) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($id:ID!,$data:UpdateMangaInput!){updateManga(id:$id,data:$data){id title}}", {
                    id: editingMangaID,
                    data
                }, authToken);
                setMessage("Metadados do mangá atualizados.");
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id title}}", {
                    groupID: selectedGroup.id,
                    data
                }, authToken);
                setMessage("Mangá criado no catálogo global e relacionado ao grupo.");
            }
            await loadGroups(selectedGroup.id);
            setEditingMangaID(null);
            setMangaCover(null);
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Falha ao salvar o mangá.");
        } finally{
            setBusy(false);
        }
    }
    if (authLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: "Carregando…"
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/manage/page.tsx",
        lineNumber: 226,
        columnNumber: 27
    }, this);
    if (!authenticatedUser) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: "Entre na sua conta para acessar a área de gestão."
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/manage/page.tsx",
        lineNumber: 227,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Área de gestão"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                            lineNumber: 229,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Administre grupos e o catálogo sem alterar o fluxo de publicação dos capítulos."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                            lineNumber: 229,
                            columnNumber: 70
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                    lineNumber: 229,
                    columnNumber: 42
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/manage/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side,
                        "aria-label": "Áreas administrativas",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: area === "group" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                onClick: ()=>setArea("group"),
                                children: "Grupo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: area === "manga" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                onClick: ()=>setArea("manga"),
                                children: "Mangás"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            area === "group" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                onSubmit: saveGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: selectedGroup ? "Dados do grupo" : "Criar grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Informações públicas da sua scan."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 116
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 52
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: groupID,
                                                onChange: (event)=>setGroupID(event.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "new",
                                                        children: "Novo grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 237
                                                    }, this),
                                                    groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: group.id,
                                                            children: group.name
                                                        }, group.id, false, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 297
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 162
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Imagem do grupo",
                                        purpose: "GROUP_IMAGE",
                                        shape: "square",
                                        currentUrl: selectedGroup?.groupImage,
                                        value: groupImage,
                                        onChange: setGroupImage,
                                        disabled: busy
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Nome",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                maxLength: 120,
                                                value: groupForm.name,
                                                onChange: (event)=>setGroupForm({
                                                        ...groupForm,
                                                        name: event.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Descrição",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                required: true,
                                                maxLength: 1200,
                                                value: groupForm.description,
                                                onChange: (event)=>setGroupForm({
                                                        ...groupForm,
                                                        description: event.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "País",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                required: true,
                                                value: groupForm.countryCode,
                                                onChange: (event)=>setGroupForm({
                                                        ...groupForm,
                                                        countryCode: event.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: "Selecione um país"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 17
                                                    }, this),
                                                    countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.code,
                                                            children: [
                                                                country.flag,
                                                                " ",
                                                                country.name
                                                            ]
                                                        }, country.code, true, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 95
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary,
                                        disabled: busy,
                                        children: busy ? "Salvando…" : selectedGroup ? "Salvar grupo" : "Criar grupo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 236,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mangaArea,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: "Catálogo global"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Pesquise antes de cadastrar. O grupo apenas se relaciona à obra."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 81
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 52
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: groupID === "new" ? "" : groupID,
                                                onChange: (event)=>setGroupID(event.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: "Selecione o grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 258
                                                    }, this),
                                                    groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: group.id,
                                                            children: group.name
                                                        }, group.id, false, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 331
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 158
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    !selectedGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                        children: "Crie ou selecione um grupo para continuar."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].search,
                                                children: [
                                                    "Título",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: title,
                                                        onChange: (event)=>{
                                                            setTitle(event.target.value);
                                                            setEditingMangaID(null);
                                                        },
                                                        placeholder: "Digite ao menos dois caracteres"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 56
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
                                                children: searching ? "Pesquisando…" : exactMatch ? "Este título já está no catálogo." : title.trim().length >= 2 ? "Nenhum título idêntico. Confira os semelhantes abaixo." : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            matches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].results,
                                                children: matches.map((manga)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: manga.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 120
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: manga.mangaka
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 150
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 114
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: busy,
                                                                onClick: ()=>void addExisting(manga.id),
                                                                children: "Usar existente"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 187
                                                            }, this)
                                                        ]
                                                    }, manga.id, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 94
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 40
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                                onSubmit: saveManga,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: editingManga ? `Editando ${editingManga.title}` : "Novo mangá"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        label: "Capa",
                                                        purpose: "MANGA_COVER",
                                                        shape: "cover",
                                                        currentUrl: editingManga?.mangaCover,
                                                        value: mangaCover,
                                                        onChange: setMangaCover,
                                                        disabled: busy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Descrição",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                required: true,
                                                                minLength: 120,
                                                                maxLength: 600,
                                                                value: mangaForm.description,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        description: event.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Mangaká",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: mangaForm.mangaka,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        mangaka: event.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Gêneros (separados por vírgula)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: mangaForm.genders,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        genders: event.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Títulos alternativos (separados por vírgula)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: mangaForm.aliases,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        aliases: event.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 70
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary,
                                                                disabled: busy || !editingMangaID && exactMatch,
                                                                children: busy ? "Salvando…" : editingMangaID ? "Salvar mangá" : "Cadastrar no catálogo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 51
                                                            }, this),
                                                            editingMangaID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setEditingMangaID(null),
                                                                children: "Cancelar edição"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 243
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Mangás relacionados ao grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 46
                                                    }, this),
                                                    selectedGroup.mangas.length ? selectedGroup.mangas.map((manga)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: manga.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 168
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>editManga(manga),
                                                                    children: "Editar metadados"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 194
                                                                }, this)
                                                            ]
                                                        }, manga.id, true, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 148
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                                        children: "Nenhum mangá relacionado."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 270
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 252,
                                columnNumber: 23
                            }, this),
                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                role: "status",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 285,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/manage/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/manage/page.tsx",
        lineNumber: 228,
        columnNumber: 10
    }, this);
}
_s(ManagePage, "8bDvTbWWGXduzBUqdoMEQKhOBmc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = ManagePage;
var _c;
__turbopack_context__.k.register(_c, "ManagePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7d8f3965._.js.map