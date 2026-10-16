module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthToken",
    ()=>clearAuthToken,
    "getAuthToken",
    ()=>getAuthToken,
    "saveAuthToken",
    ()=>saveAuthToken
]);
const TOKEN_KEY = "token";
const LEGACY_TOKEN_KEY = "tako_auth_token";
function getAuthToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const legacyToken = undefined;
}
function saveAuthToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
    window.dispatchEvent(new Event("tako-auth-changed"));
}
function clearAuthToken() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(LEGACY_TOKEN_KEY);
    window.localStorage.removeItem("userID");
    window.dispatchEvent(new Event("tako-auth-changed"));
}
}),
"[project]/src/lib/graphql.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "graphqlRequest",
    ()=>graphqlRequest
]);
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql";
async function graphqlRequest(query, variables = {}, token) {
    const response = await fetch(GRAPHQL_URL, {
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
        })
    });
    const payload = await response.json().catch(()=>null);
    if (!response.ok || payload?.errors?.length || !payload?.data) {
        throw new Error(payload?.errors?.[0]?.message ?? "Não foi possível se comunicar com o servidor.");
    }
    return payload.data;
}
}),
"[project]/src/components/Input/input.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "errorMessage": "input-module__aX0dDG__errorMessage",
  "fieldset": "input-module__aX0dDG__fieldset",
  "fieldsetError": "input-module__aX0dDG__fieldsetError",
  "input": "input-module__aX0dDG__input",
  "inputContainer": "input-module__aX0dDG__inputContainer",
  "legend": "input-module__aX0dDG__legend",
});
}),
"[project]/src/components/Input/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputComponent",
    ()=>InputComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Input/input.module.css [app-ssr] (css module)");
;
;
function InputComponent({ inputLabel, inputType, inputPlaceholder, inputName, required = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldset,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legend,
                    children: inputLabel
                }, void 0, false, {
                    fileName: "[project]/src/components/Input/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                    type: inputType,
                    name: inputName,
                    required: required,
                    placeholder: inputPlaceholder
                }, void 0, false, {
                    fileName: "[project]/src/components/Input/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Input/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Input/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/SignInComponent/signincomponent.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "errorMessage": "signincomponent-module__5OvHba__errorMessage",
  "signInBox": "signincomponent-module__5OvHba__signInBox",
  "signInBtn": "signincomponent-module__5OvHba__signInBtn",
  "signInTitle": "signincomponent-module__5OvHba__signInTitle",
  "spin": "signincomponent-module__5OvHba__spin",
  "spinner": "signincomponent-module__5OvHba__spinner",
});
}),
"[project]/src/components/SignInComponent/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInComponent",
    ()=>SignInComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SignInComponent/signincomponent.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
function SignInComponent({ pageTitle }) {
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function signIn(event) {
        event.preventDefault();
        if (submitting) return;
        const data = new FormData(event.currentTarget);
        const login = String(data.get("login") ?? "").trim();
        const password = String(data.get("password") ?? "");
        if (!login || !password) return;
        setSubmitting(true);
        setError("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation SignIn($data: SignInInput!) {
          signIn(data: $data) { token }
        }`, {
                data: {
                    login,
                    password
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAuthToken"])(result.signIn.token);
            const next = new URLSearchParams(window.location.search).get("next");
            window.location.assign(next?.startsWith("/") ? next : "/");
        } catch (signInError) {
            setError(signInError instanceof Error ? signInError.message : "Não foi possível entrar.");
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signInBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signInTitle,
                    children: pageTitle
                }, void 0, false, {
                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    autoComplete: "on",
                    onSubmit: signIn,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputComponent"], {
                            inputLabel: "Username ou email",
                            inputType: "text",
                            inputName: "login",
                            inputPlaceholder: "Digite seu username ou email…",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputComponent"], {
                            inputLabel: "Senha",
                            inputType: "password",
                            inputName: "password",
                            inputPlaceholder: "Digite sua senha…",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                            role: "alert",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signInBtn,
                            disabled: submitting,
                            children: [
                                submitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiLoader"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 28
                                }, this),
                                submitting ? "Entrando…" : "Entrar"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignInComponent/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SignInComponent/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a2970aa7._.js.map