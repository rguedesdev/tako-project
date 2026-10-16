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
"[project]/src/app/(main)/profile/[username]/profile.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "profile-module__lgakwq__card",
  "form": "profile-module__lgakwq__form",
  "header": "profile-module__lgakwq__header",
  "page": "profile-module__lgakwq__page",
});
}),
"[project]/src/app/(main)/profile/[username]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
const FIELDS = "id name username email profilePicture accountType subscription { plan status autoRenew }";
function ProfilePage() {
    _s();
    const { username } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { authenticatedUser, authToken, authLoading, updateAuthenticatedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [media, setMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const own = authenticatedUser?.username === username;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query($username:String!){user(username:$username){${FIELDS}}}`, {
                username
            }, authToken).then({
                "ProfilePage.useEffect": ({ user })=>{
                    setProfile(user);
                    setName(user?.name ?? "");
                }
            }["ProfilePage.useEffect"]).catch({
                "ProfilePage.useEffect": (e)=>setMessage(e.message)
            }["ProfilePage.useEffect"]);
        }
    }["ProfilePage.useEffect"], [
        username,
        authToken
    ]);
    if (authLoading || !profile) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: message || "Carregando perfil…"
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
            lineNumber: 54,
            columnNumber: 69
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
        lineNumber: 54,
        columnNumber: 39
    }, this);
    async function select(file) {
        if (!file) return;
        setBusy(true);
        setMessage("");
        try {
            setMedia(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadImage"])(file, "USER_AVATAR"));
        } catch (e_0) {
            setMessage(e_0 instanceof Error ? e_0.message : "Falha no upload.");
        } finally{
            setBusy(false);
        }
    }
    async function save() {
        setBusy(true);
        try {
            const { updateMyProfile } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation($data:UpdateProfileInput!){updateMyProfile(data:$data){${FIELDS}}}`, {
                data: {
                    name,
                    profilePictureID: media?.id
                }
            }, authToken);
            setProfile(updateMyProfile);
            updateAuthenticatedUser(updateMyProfile);
            setMedia(null);
            setMessage("Perfil atualizado.");
            router.refresh();
        } catch (e_1) {
            setMessage(e_1 instanceof Error ? e_1.message : "Falha ao salvar.");
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: media?.url || profile.profilePicture || "/image-placeholder.svg",
                            alt: "Foto de perfil"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: profile.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 266
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "@",
                                        profile.username
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 289
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: profile.subscription.plan
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 315
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 261
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                    lineNumber: 91,
                    columnNumber: 73
                }, this),
                own && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$profile$2f5b$username$5d2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Foto de perfil",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/jpeg,image/png,image/webp",
                                    disabled: busy,
                                    onChange: (e_2)=>void select(e_2.target.files?.[0])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 425
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 404
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Nome",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: name,
                                    maxLength: 120,
                                    onChange: (e_3)=>setName(e_3.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 575
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 564
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "E-mail",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: profile.email,
                                    disabled: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 678
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 665
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            disabled: busy || name.trim().length < 2,
                            children: busy ? "Salvando…" : "Salvar alterações"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 726
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 854
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
                    lineNumber: 91,
                    columnNumber: 375
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
            lineNumber: 91,
            columnNumber: 40
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/profile/[username]/page.tsx",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
_s(ProfilePage, "3HE6Uf8krhc7Y5ZCOveVHBj099M=", false, function() {
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

//# sourceMappingURL=src_493201a6._.js.map