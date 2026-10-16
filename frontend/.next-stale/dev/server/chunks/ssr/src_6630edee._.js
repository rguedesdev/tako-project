module.exports = [
"[project]/src/components/ImageUploadField/upload.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/ImageUploadField/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageUploadField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ImageUploadField/upload.module.css [app-ssr] (css module)");
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
function ImageUploadField({ label, purpose, currentUrl, shape = "square", value, onChange, disabled, showPreview = true }) {
    const inputID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const fallback = purpose === "GROUP_IMAGE" ? "/group-placeholder.svg" : "/image-placeholder.svg";
    const previewUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>value ? URL.createObjectURL(value) : null, [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        }, [
        previewUrl
    ]);
    function select(file) {
        if (!file) return;
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
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].row,
                children: [
                    showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].preview} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][shape]}`,
                        src: previewUrl || currentUrl || fallback,
                        alt: "Prévia da imagem",
                        width: shape === "cover" ? 112 : 96,
                        height: shape === "cover" ? 168 : 96,
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageUploadField/page.tsx",
                        lineNumber: 52,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                                htmlFor: inputID,
                                "aria-disabled": disabled,
                                children: value ? "Trocar seleção" : "Selecionar imagem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: inputID,
                                type: "file",
                                accept: "image/jpeg,image/png,image/webp",
                                disabled: disabled,
                                onChange: (event)=>select(event.target.files?.[0])
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "A seleção gera apenas uma prévia local. O upload ocorre ao salvar."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImageUploadField/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$upload$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ImageUploadField/page.tsx",
                lineNumber: 59,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImageUploadField/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/upload.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "discardImage",
    ()=>discardImage,
    "uploadImage",
    ()=>uploadImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-ssr] (ecmascript)");
;
const API = (process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql").replace(/\/graphql\/?$/, "");
async function uploadImage(file, purpose) {
    const form = new FormData();
    form.append("file", file);
    const response = await fetch(`${API}/uploads/images?purpose=${purpose}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthToken"])()}`
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
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthToken"])()}`
        }
    });
}
}),
"[project]/src/app/(main)/manage/manage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "manage-module__9oFG_a__actions",
  "active": "manage-module__9oFG_a__active",
  "content": "manage-module__9oFG_a__content",
  "empty": "manage-module__9oFG_a__empty",
  "externalCover": "manage-module__9oFG_a__externalCover",
  "externalNotice": "manage-module__9oFG_a__externalNotice",
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
  "secondaryAction": "manage-module__9oFG_a__secondaryAction",
  "sectionTitle": "manage-module__9oFG_a__sectionTitle",
  "side": "manage-module__9oFG_a__side",
  "status": "manage-module__9oFG_a__status",
});
}),
"[project]/src/app/(main)/manage/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageUploadField/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/upload.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(main)/manage/manage.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
const MANGA_ADMIN_FIELDS = "id title aliases description mangaka genders mangaCover trackers { myanimelist anilist animeplanet anidb } isAdult officialPublicationStatus officialTotalChapters externalMetadata { malId lastSyncedAt lastSyncError } translations { groupID language translationStatus calculatedTranslationStatus translationStatusOverride overridden group { id name } }";
const GROUP_FIELDS = `id name description country countryCode countryFlag groupImage socialMedias { site discord x instagram facebook youtube tiktok } mangas { ${MANGA_ADMIN_FIELDS} }`;
const EMPTY_SOCIALS = {
    site: "",
    discord: "",
    x: "",
    instagram: "",
    facebook: "",
    youtube: "",
    tiktok: ""
};
const EMPTY_TRACKERS = {
    myanimelist: "",
    anilist: "",
    animeplanet: "",
    anidb: ""
};
function socialForm(values) {
    return Object.fromEntries(Object.keys(EMPTY_SOCIALS).map((key)=>[
            key,
            values?.[key] ?? ""
        ]));
}
function trackerForm(values) {
    return Object.fromEntries(Object.keys(EMPTY_TRACKERS).map((key)=>[
            key,
            values?.[key] ?? ""
        ]));
}
function ManagePage() {
    const { authToken, authenticatedUser, authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const [area, setArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("group");
    const [groups, setGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groupID, setGroupID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("new");
    const [groupForm, setGroupForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        countryCode: ""
    });
    const [socialMedias, setSocialMedias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY_SOCIALS);
    const [groupImage, setGroupImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jikanMatches, setJikanMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [externalSearchState, setExternalSearchState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [localSearchBypassed, setLocalSearchBypassed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manualMode, setManualMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchNonce, setSearchNonce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searching, setSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMalId, setSelectedMalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [translationLanguage, setTranslationLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Português");
    const [editingMangaID, setEditingMangaID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mangaForm, setMangaForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        description: "",
        mangaka: "",
        genders: "",
        aliases: "",
        isAdult: false
    });
    const [trackers, setTrackers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY_TRACKERS);
    const [mangaCover, setMangaCover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const selectedGroup = groups.find((group)=>group.id === groupID);
    const isAegis = authenticatedUser?.accountType === "AEGIS";
    const editingManga = [
        ...selectedGroup?.mangas ?? [],
        ...matches
    ].find((manga)=>manga.id === editingMangaID);
    async function loadGroups(preferredID) {
        if (!authToken) return;
        const { me, countries: availableCountries } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query { me { id groups { ${GROUP_FIELDS} } } countries { code name flag } }`, {}, authToken);
        setGroups(me.groups);
        setCountries(availableCountries);
        if (preferredID) setGroupID(preferredID);
        else if (groupID === "new" && me.groups.length) setGroupID(me.groups[0].id);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (authToken) void loadGroups().catch((error)=>setMessage(error.message));
    // loadGroups intentionally reacts only to the authenticated session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        authToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const query = title.trim();
        if (query.length < 2 || !authToken) return;
        let cancelled = false;
        const timer = window.setTimeout(async ()=>{
            setSearching(true);
            let externalAttempted = false;
            try {
                const { searchMangas } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query($query:String!){searchMangas(query:$query){${MANGA_ADMIN_FIELDS}}}`, {
                    query
                }, authToken);
                if (cancelled) return;
                setMatches(searchMangas);
                if (searchMangas.length > 0 && !localSearchBypassed) {
                    setJikanMatches([]);
                    setExternalSearchState("idle");
                    if (!editingMangaID) {
                        setSelectedMalId(null);
                        setManualMode(false);
                    }
                } else {
                    externalAttempted = true;
                    setExternalSearchState("loading");
                    const { searchJikanMangas } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query($query:String!){searchJikanMangas(query:$query){malId title titleEnglish titleJapanese aliases synopsis totalChapters publicationStatus rawStatus authors genres imageUrl malUrl type year}}`, {
                        query
                    }, authToken);
                    if (cancelled) return;
                    setJikanMatches(searchJikanMangas);
                    setExternalSearchState(searchJikanMangas.length ? "results" : "empty");
                }
            } catch (error) {
                if (cancelled) return;
                setJikanMatches([]);
                setExternalSearchState(externalAttempted ? "error" : "idle");
                setMessage(error instanceof Error ? `${externalAttempted ? "Consulta externa indisponível" : "Falha ao consultar o catálogo local"}: ${error.message}` : "Falha na busca.");
            } finally{
                if (!cancelled) setSearching(false);
            }
        }, 350);
        return ()=>{
            cancelled = true;
            window.clearTimeout(timer);
        };
    }, [
        title,
        authToken,
        localSearchBypassed,
        searchNonce,
        editingMangaID
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedGroup) {
            setGroupForm({
                name: selectedGroup.name,
                description: selectedGroup.description,
                countryCode: selectedGroup.countryCode
            });
            setSocialMedias(socialForm(selectedGroup.socialMedias));
        } else {
            setGroupForm({
                name: "",
                description: "",
                countryCode: ""
            });
            setSocialMedias(EMPTY_SOCIALS);
        }
        setGroupImage(null);
        setEditingMangaID(null);
    }, [
        groupID
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    const selectedJikanCandidate = jikanMatches.find((candidate)=>candidate.malId === selectedMalId);
    async function saveGroup(event) {
        event.preventDefault();
        if (!authToken) return;
        setBusy(true);
        setMessage("");
        let uploaded = null;
        try {
            if (groupImage) uploaded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadImage"])(groupImage, "GROUP_IMAGE");
            const data = {
                ...groupForm,
                socialMedias,
                ...uploaded ? {
                    groupImageID: uploaded.id
                } : {}
            };
            const operation = groupID === "new" ? `mutation($data:CreateGroupInput!){createGroup(data:$data){${GROUP_FIELDS}}}` : `mutation($id:ID!,$data:UpdateGroupInput!){updateGroup(id:$id,data:$data){${GROUP_FIELDS}}}`;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])(operation, {
                id: groupID,
                data
            }, authToken);
            const saved = result.createGroup ?? result.updateGroup;
            if (saved) await loadGroups(saved.id);
            setGroupImage(null);
            setMessage(groupID === "new" ? "Grupo criado." : "Grupo atualizado.");
        } catch (error) {
            if (uploaded) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["discardImage"])(uploaded.id).catch(()=>undefined);
            setMessage(error instanceof Error ? error.message : "Falha ao salvar o grupo.");
        } finally{
            setBusy(false);
        }
    }
    async function addExisting(mangaID) {
        if (!authToken || !selectedGroup) return;
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($mangaID:ID!,$groupID:ID!,$language:String){addMangaToGroup(mangaID:$mangaID,groupID:$groupID,translationLanguage:$language){id}}", {
                mangaID,
                groupID: selectedGroup.id,
                language: translationLanguage
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
            aliases: manga.aliases.join(", "),
            isAdult: manga.isAdult
        });
        setTrackers(trackerForm(manga.trackers));
        setSelectedMalId(manga.externalMetadata?.malId ?? null);
        setManualMode(false);
        setLocalSearchBypassed(!manga.externalMetadata?.malId);
        setMangaCover(null);
    }
    async function selectJikanManga(candidate) {
        if (!authToken) return;
        setBusy(true);
        try {
            let selected = candidate;
            if (!candidate.synopsis || !candidate.authors.length || !candidate.genres.length) {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query($malId:Int!){jikanManga(malId:$malId){malId title titleEnglish titleJapanese aliases synopsis totalChapters publicationStatus rawStatus authors genres imageUrl malUrl type year}}`, {
                    malId: candidate.malId
                }, authToken);
                selected = result.jikanManga;
            }
            setSelectedMalId(selected.malId);
            setManualMode(false);
            setTitle(selected.title);
            setMangaForm({
                description: selected.synopsis?.slice(0, 600) ?? "",
                mangaka: selected.authors.join(", "),
                genders: selected.genres.join(", "),
                aliases: selected.aliases.join(", "),
                isAdult: false
            });
            setTrackers((current)=>({
                    ...current,
                    myanimelist: selected.malUrl ?? `https://myanimelist.net/manga/${selected.malId}`
                }));
            setJikanMatches([
                selected
            ]);
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Não foi possível carregar os detalhes da obra.");
        } finally{
            setBusy(false);
        }
    }
    function startManualRegistration() {
        setManualMode(true);
        setSelectedMalId(null);
        setMangaForm({
            description: "",
            mangaka: "",
            genders: "",
            aliases: "",
            isAdult: false
        });
        setTrackers(EMPTY_TRACKERS);
        setMangaCover(null);
    }
    async function setOverride(translation, status) {
        if (!authToken || !editingMangaID) return;
        setBusy(true);
        try {
            const { setTranslationStatusOverride } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation($mangaID:ID!,$groupID:ID!,$status:TranslationStatus){setTranslationStatusOverride(mangaID:$mangaID,groupID:$groupID,status:$status){groupID language translationStatus calculatedTranslationStatus translationStatusOverride overridden group{id name}}}`, {
                mangaID: editingMangaID,
                groupID: translation.groupID,
                status
            }, authToken);
            setMatches((items)=>items.map((item)=>item.id === editingMangaID ? {
                        ...item,
                        translations: item.translations?.map((value)=>value.groupID === translation.groupID ? setTranslationStatusOverride : value)
                    } : item));
            await loadGroups(groupID);
            setMessage("Override de tradução atualizado.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Falha ao atualizar o status.");
        } finally{
            setBusy(false);
        }
    }
    async function syncOfficialMetadata() {
        if (!authToken || !editingMangaID) return;
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($mangaID:ID!){syncMangaExternalMetadata(mangaID:$mangaID){id}}", {
                mangaID: editingMangaID
            }, authToken);
            await loadGroups(groupID);
            setMessage("Dados oficiais sincronizados.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Falha ao sincronizar os dados oficiais.");
        } finally{
            setBusy(false);
        }
    }
    async function saveManga(event) {
        event.preventDefault();
        if (!authToken || !editingMangaID && !selectedGroup) return;
        setBusy(true);
        setMessage("");
        let uploaded = null;
        try {
            if (mangaCover) uploaded = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadImage"])(mangaCover, "MANGA_COVER");
            const data = {
                title: title.trim(),
                description: mangaForm.description,
                mangaka: mangaForm.mangaka,
                genders: mangaForm.genders.split(",").map((value)=>value.trim()).filter(Boolean),
                aliases: mangaForm.aliases.split(",").map((value)=>value.trim()).filter(Boolean),
                trackers,
                isAdult: mangaForm.isAdult,
                ...!editingMangaID && selectedMalId ? {
                    malId: selectedMalId
                } : {},
                ...!editingMangaID ? {
                    translationLanguage
                } : {},
                ...uploaded ? {
                    mangaCoverID: uploaded.id
                } : {}
            };
            if (editingMangaID) {
                if (selectedMalId && selectedMalId !== editingManga?.externalMetadata?.malId) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($mangaID:ID!,$malId:Int!){linkMangaExternalMetadata(mangaID:$mangaID,malId:$malId){id}}", {
                        mangaID: editingMangaID,
                        malId: selectedMalId
                    }, authToken);
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($id:ID!,$data:UpdateMangaInput!){updateManga(id:$id,data:$data){id title}}", {
                    id: editingMangaID,
                    data
                }, authToken);
                setMessage("Metadados do mangá atualizados.");
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])("mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id title}}", {
                    groupID: selectedGroup.id,
                    data
                }, authToken);
                setMessage("Mangá criado no catálogo global e relacionado ao grupo.");
            }
            await loadGroups(selectedGroup?.id);
            setEditingMangaID(null);
            setMangaCover(null);
        } catch (error) {
            if (uploaded) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["discardImage"])(uploaded.id).catch(()=>undefined);
            setMessage(error instanceof Error ? error.message : "Falha ao salvar o mangá.");
        } finally{
            setBusy(false);
        }
    }
    if (authLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: "Carregando…"
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/manage/page.tsx",
        lineNumber: 322,
        columnNumber: 27
    }, this);
    if (!authenticatedUser) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: "Entre na sua conta para acessar a área de gestão."
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/manage/page.tsx",
        lineNumber: 323,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Área de gestão"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                            lineNumber: 327,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Administre grupos e o catálogo sem alterar o fluxo de publicação dos capítulos."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                            lineNumber: 327,
                            columnNumber: 70
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                    lineNumber: 327,
                    columnNumber: 42
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/manage/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].side,
                        "aria-label": "Áreas administrativas",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: area === "group" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "",
                                onClick: ()=>setArea("group"),
                                children: "Grupo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: area === "manga" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "",
                                onClick: ()=>setArea("manga"),
                                children: "Mangás"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            area === "group" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                                onSubmit: saveGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: selectedGroup ? "Dados do grupo" : "Criar grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Informações públicas da sua scan."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 116
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 52
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: groupID,
                                                onChange: (event)=>setGroupID(event.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "new",
                                                        children: "Novo grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 239
                                                    }, this),
                                                    groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: group.id,
                                                            children: group.name
                                                        }, group.id, false, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 301
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 162
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Imagem do grupo",
                                        purpose: "GROUP_IMAGE",
                                        shape: "square",
                                        currentUrl: selectedGroup?.groupImage,
                                        value: groupImage,
                                        onChange: setGroupImage,
                                        disabled: busy
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Nome",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                maxLength: 120,
                                                value: groupForm.name,
                                                onChange: (event)=>setGroupForm({
                                                        ...groupForm,
                                                        name: event.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Descrição",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                required: true,
                                                maxLength: 1200,
                                                value: groupForm.description,
                                                onChange: (event)=>setGroupForm({
                                                        ...groupForm,
                                                        description: event.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "País",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                required: true,
                                                value: groupForm.countryCode,
                                                onChange: (event)=>setGroupForm({
                                                        ...groupForm,
                                                        countryCode: event.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: "Selecione um país"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 159
                                                    }, this),
                                                    countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.code,
                                                            children: [
                                                                country.flag,
                                                                " ",
                                                                country.name
                                                            ]
                                                        }, country.code, true, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 239
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        style: {
                                            display: "grid",
                                            gap: 14,
                                            padding: 18,
                                            border: "1px solid #ffffff18",
                                            borderRadius: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                style: {
                                                    padding: "0 7px",
                                                    fontWeight: 700
                                                },
                                                children: "Redes sociais"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 113
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#aeb3c1",
                                                    fontSize: ".84rem"
                                                },
                                                children: "Todos os links são opcionais e devem usar HTTPS."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 184
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Website",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        maxLength: 500,
                                                        placeholder: "https://seusite.com",
                                                        value: socialMedias.site,
                                                        onChange: (event)=>setSocialMedias({
                                                                ...socialMedias,
                                                                site: event.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Discord",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        maxLength: 500,
                                                        placeholder: "https://discord.gg/...",
                                                        value: socialMedias.discord,
                                                        onChange: (event)=>setSocialMedias({
                                                                ...socialMedias,
                                                                discord: event.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "X / Twitter",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        maxLength: 500,
                                                        placeholder: "https://x.com/...",
                                                        value: socialMedias.x,
                                                        onChange: (event)=>setSocialMedias({
                                                                ...socialMedias,
                                                                x: event.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Instagram",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        maxLength: 500,
                                                        placeholder: "https://instagram.com/...",
                                                        value: socialMedias.instagram,
                                                        onChange: (event)=>setSocialMedias({
                                                                ...socialMedias,
                                                                instagram: event.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Facebook",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        maxLength: 500,
                                                        placeholder: "https://facebook.com/...",
                                                        value: socialMedias.facebook,
                                                        onChange: (event)=>setSocialMedias({
                                                                ...socialMedias,
                                                                facebook: event.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "YouTube",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        maxLength: 500,
                                                        placeholder: "https://youtube.com/@...",
                                                        value: socialMedias.youtube,
                                                        onChange: (event)=>setSocialMedias({
                                                                ...socialMedias,
                                                                youtube: event.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "TikTok",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        maxLength: 500,
                                                        placeholder: "https://tiktok.com/@...",
                                                        value: socialMedias.tiktok,
                                                        onChange: (event)=>setSocialMedias({
                                                                ...socialMedias,
                                                                tiktok: event.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primary,
                                        disabled: busy,
                                        children: busy ? "Salvando…" : selectedGroup ? "Salvar grupo" : "Criar grupo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mangaArea,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: "Catálogo global"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Pesquise antes de cadastrar. O grupo apenas se relaciona à obra."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 81
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 52
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: groupID === "new" ? "" : groupID,
                                                onChange: (event)=>setGroupID(event.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        children: "Selecione o grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 260
                                                    }, this),
                                                    groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: group.id,
                                                            children: group.name
                                                        }, group.id, false, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 335
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 158
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this),
                                    !selectedGroup && !isAegis ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                                        children: "Crie ou selecione um grupo para continuar."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 45
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].search,
                                                children: [
                                                    "Pesquisar obra",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: title,
                                                        onChange: (event)=>{
                                                            setTitle(event.target.value);
                                                            setEditingMangaID(null);
                                                            setSelectedMalId(null);
                                                            setManualMode(false);
                                                            setLocalSearchBypassed(false);
                                                            setExternalSearchState("idle");
                                                            setMatches([]);
                                                            setJikanMatches([]);
                                                            setTrackers(EMPTY_TRACKERS);
                                                        },
                                                        placeholder: "Digite ao menos dois caracteres"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 64
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status,
                                                children: externalSearchState === "loading" ? "Nenhuma obra local encontrada. Buscando no MyAnimeList…" : searching ? "Buscando no catálogo…" : matches.length ? "Encontramos obras no catálogo local. Reutilize o registro correto." : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            matches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].results,
                                                children: matches.map((manga)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: manga.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 122
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: [
                                                                            manga.mangaka,
                                                                            manga.isAdult ? " · +18" : ""
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 152
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 116
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                                                                children: [
                                                                    selectedGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        disabled: busy,
                                                                        onClick: ()=>void addExisting(manga.id),
                                                                        children: "Usar existente"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 270
                                                                    }, this),
                                                                    isAegis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>editManga(manga),
                                                                        children: "Editar metadados"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 373
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 220
                                                            }, this)
                                                        ]
                                                    }, manga.id, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 96
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 40
                                            }, this),
                                            matches.length > 0 && !localSearchBypassed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryAction,
                                                onClick: ()=>setLocalSearchBypassed(true),
                                                children: "Nenhuma dessas obras corresponde — buscar no MyAnimeList"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 64
                                            }, this),
                                            jikanMatches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].results,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Resultados da Jikan / MyAnimeList"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 77
                                                    }, this),
                                                    jikanMatches.map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                candidate.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].externalCover,
                                                                    style: {
                                                                        backgroundImage: `url(${candidate.imageUrl})`
                                                                    },
                                                                    role: "img",
                                                                    "aria-label": `Capa de referência de ${candidate.title}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 202
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: candidate.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 372
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                            children: [
                                                                                candidate.titleEnglish !== candidate.title ? candidate.titleEnglish : null,
                                                                                candidate.titleJapanese,
                                                                                candidate.authors.join(", "),
                                                                                candidate.type,
                                                                                candidate.year,
                                                                                candidate.rawStatus
                                                                            ].filter(Boolean).join(" · ")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 406
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 366
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    disabled: busy,
                                                                    onClick: ()=>void selectJikanManga(candidate),
                                                                    children: selectedMalId === candidate.malId ? "Selecionado" : busy ? "Carregando…" : "Selecionar obra"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 642
                                                                }, this)
                                                            ]
                                                        }, candidate.malId, true, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 152
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 45
                                            }, this),
                                            externalSearchState === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].externalNotice,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Não foi possível consultar o MyAnimeList. Isso não significa que a obra não exista."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 92
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setSearchNonce((value)=>value + 1),
                                                        children: "Tentar novamente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 182
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 53
                                            }, this),
                                            externalSearchState === "empty" && !manualMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].externalNotice,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Nenhuma obra foi encontrada no catálogo local nem no MyAnimeList."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 107
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: startManualRegistration,
                                                        children: "Cadastrar manualmente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 179
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 68
                                            }, this),
                                            externalSearchState === "results" && !selectedMalId && !manualMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryAction,
                                                onClick: startManualRegistration,
                                                children: "Não encontrou a obra correta? Cadastrar manualmente"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 88
                                            }, this),
                                            (editingMangaID || manualMode || selectedMalId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                                                onSubmit: saveManga,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: editingManga ? `Editando ${editingManga.title}` : "Novo mangá"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 19
                                                    }, this),
                                                    selectedJikanCandidate && !editingMangaID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].externalNotice,
                                                        children: "Revise todos os dados importados antes de criar. A sinopse abaixo é editável e não será sobrescrita nas sincronizações futuras."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 65
                                                    }, this),
                                                    manualMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].externalNotice,
                                                        children: "Cadastro manual: este registro será criado sem identificador MAL e poderá ser associado posteriormente por um AEGIS."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 34
                                                    }, this),
                                                    !editingMangaID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Idioma da tradução",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                maxLength: 80,
                                                                value: translationLanguage,
                                                                onChange: (event)=>setTranslationLanguage(event.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 64
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 39
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageUploadField$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        label: "Capa",
                                                        purpose: "MANGA_COVER",
                                                        shape: "cover",
                                                        currentUrl: editingManga?.mangaCover,
                                                        value: mangaCover,
                                                        onChange: setMangaCover,
                                                        disabled: busy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Descrição",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                                                lineNumber: 370,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Mangaká",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: mangaForm.mangaka,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        mangaka: event.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Gêneros (separados por vírgula)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                value: mangaForm.genders,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        genders: event.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Títulos alternativos (separados por vírgula)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: mangaForm.aliases,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        aliases: event.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 70
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                        style: {
                                                            display: "grid",
                                                            gap: 14,
                                                            padding: 18,
                                                            border: "1px solid #ffffff18",
                                                            borderRadius: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                                style: {
                                                                    padding: "0 7px",
                                                                    fontWeight: 700
                                                                },
                                                                children: "Trackers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 117
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "#aeb3c1",
                                                                    fontSize: ".84rem"
                                                                },
                                                                children: "O MyAnimeList é preenchido pela obra selecionada. Os demais links são opcionais e inseridos manualmente."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 183
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    "MyAnimeList",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        maxLength: 500,
                                                                        placeholder: "Preenchido automaticamente pela busca",
                                                                        value: trackers.myanimelist,
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    "AniList",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        maxLength: 500,
                                                                        placeholder: "https://anilist.co/manga/...",
                                                                        value: trackers.anilist,
                                                                        onChange: (event)=>setTrackers({
                                                                                ...trackers,
                                                                                anilist: event.target.value
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    "Anime-Planet",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        maxLength: 500,
                                                                        placeholder: "https://www.anime-planet.com/manga/...",
                                                                        value: trackers.animeplanet,
                                                                        onChange: (event)=>setTrackers({
                                                                                ...trackers,
                                                                                animeplanet: event.target.value
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    "AniDB",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        maxLength: 500,
                                                                        placeholder: "https://anidb.net/manga/...",
                                                                        value: trackers.anidb,
                                                                        onChange: (event)=>setTrackers({
                                                                                ...trackers,
                                                                                anidb: event.target.value
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "flex-start",
                                                            gap: 11,
                                                            padding: 14,
                                                            border: "1px solid #ffffff18",
                                                            borderRadius: 9
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                style: {
                                                                    width: 18,
                                                                    height: 18,
                                                                    marginTop: 2
                                                                },
                                                                type: "checkbox",
                                                                checked: mangaForm.isAdult,
                                                                onChange: (event)=>setMangaForm({
                                                                        ...mangaForm,
                                                                        isAdult: event.target.checked
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 137
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: "grid",
                                                                    gap: 4
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Esta obra contém conteúdo adulto (+18)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 380,
                                                                        columnNumber: 352
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: "Classificação separada dos gêneros."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                        lineNumber: 380,
                                                                        columnNumber: 407
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 315
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this),
                                                    editingMangaID && !isAegis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                                                        children: "Somente a autoridade AEGIS pode editar metadados globais."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 50
                                                    }, this),
                                                    editingMangaID && isAegis && !editingManga?.externalMetadata?.malId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                                                        children: "Esta obra antiga ainda não está vinculada ao MyAnimeList. Selecione acima o resultado correto antes de salvar."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 91
                                                    }, this),
                                                    editingMangaID && isAegis && editingManga?.translations?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Status das traduções"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 115
                                                            }, this),
                                                            editingManga.translations.map((translation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: translation.group.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 229
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                    children: [
                                                                                        "Calculado: ",
                                                                                        translation.calculatedTranslationStatus,
                                                                                        " · Exibido: ",
                                                                                        translation.translationStatus,
                                                                                        translation.overridden ? " (manual)" : " (automático)"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 270
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 223
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: translation.translationStatusOverride ?? "AUTO",
                                                                            onChange: (event)=>void setOverride(translation, event.target.value === "AUTO" ? null : event.target.value),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "AUTO",
                                                                                    children: "Automático"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 639
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "ONGOING",
                                                                                    children: "Em andamento"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 679
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "PAUSED",
                                                                                    children: "Pausado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 724
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "COMPLETED",
                                                                                    children: "Concluído"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 763
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 443
                                                                        }, this)
                                                                    ]
                                                                }, translation.groupID, true, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 192
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 86
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primary,
                                                                disabled: busy || !editingMangaID && (!selectedGroup || !selectedMalId && !manualMode) || Boolean(editingMangaID) && (!isAegis || !editingManga?.externalMetadata?.malId && !selectedMalId),
                                                                children: busy ? "Salvando…" : editingMangaID ? "Salvar mangá" : selectedMalId ? "Importar e relacionar" : "Cadastrar manualmente"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 51
                                                            }, this),
                                                            editingMangaID && isAegis && editingManga?.externalMetadata?.malId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                disabled: busy,
                                                                onClick: ()=>void syncOfficialMetadata(),
                                                                children: "Sincronizar dados oficiais"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 485
                                                            }, this),
                                                            editingMangaID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setEditingMangaID(null),
                                                                children: "Cancelar edição"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 622
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 69
                                            }, this),
                                            selectedGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Mangás relacionados ao grupo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 64
                                                    }, this),
                                                    selectedGroup.mangas.length ? selectedGroup.mangas.map((manga)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        manga.title,
                                                                        manga.isAdult ? " · +18" : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 188
                                                                }, this),
                                                                isAegis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>editManga(manga),
                                                                    children: "Editar metadados"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 257
                                                                }, this)
                                                            ]
                                                        }, manga.id, true, {
                                                            fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 168
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                                                        children: "Nenhum mangá relacionado."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 334
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this),
                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$manage$2f$manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message,
                                role: "status",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/manage/page.tsx",
                                lineNumber: 390,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/manage/page.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/manage/page.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/manage/page.tsx",
        lineNumber: 326,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_6630edee._.js.map