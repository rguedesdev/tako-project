(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Input/input.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "errorMessage": "input-module__aX0dDG__errorMessage",
  "fieldset": "input-module__aX0dDG__fieldset",
  "fieldsetError": "input-module__aX0dDG__fieldsetError",
  "input": "input-module__aX0dDG__input",
  "inputContainer": "input-module__aX0dDG__inputContainer",
  "legend": "input-module__aX0dDG__legend",
});
}),
"[project]/src/components/Input/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputComponent",
    ()=>InputComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// Style Sheet CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Input/input.module.css [app-client] (css module)");
;
;
;
function InputComponent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "353ef72030b005fcc16d97e1a57211938e3a22bcb4ed141edad99ff7b6b81a32") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "353ef72030b005fcc16d97e1a57211938e3a22bcb4ed141edad99ff7b6b81a32";
    }
    const { inputLabel, inputType, inputPlaceholder, inputName, required: t1, inputID, autoComplete, minLength, maxLength, error } = t0;
    const required = t1 === undefined ? false : t1;
    const resolvedID = inputID ?? inputName;
    const t2 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldset} ${error ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldsetError : ""}`;
    let t3;
    if ($[1] !== inputLabel) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legend,
            children: inputLabel
        }, void 0, false, {
            fileName: "[project]/src/components/Input/page.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[1] = inputLabel;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = Boolean(error);
    const t5 = error && resolvedID ? `${resolvedID}-error` : undefined;
    let t6;
    if ($[3] !== autoComplete || $[4] !== inputName || $[5] !== inputPlaceholder || $[6] !== inputType || $[7] !== maxLength || $[8] !== minLength || $[9] !== required || $[10] !== resolvedID || $[11] !== t4 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
            type: inputType,
            id: resolvedID,
            name: inputName,
            required: required,
            autoComplete: autoComplete,
            minLength: minLength,
            maxLength: maxLength,
            "aria-invalid": t4,
            "aria-describedby": t5,
            placeholder: inputPlaceholder
        }, void 0, false, {
            fileName: "[project]/src/components/Input/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[3] = autoComplete;
        $[4] = inputName;
        $[5] = inputPlaceholder;
        $[6] = inputType;
        $[7] = maxLength;
        $[8] = minLength;
        $[9] = required;
        $[10] = resolvedID;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t2 || $[15] !== t3 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
            className: t2,
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Input/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[14] = t2;
        $[15] = t3;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== error || $[19] !== resolvedID) {
        t8 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: resolvedID ? `${resolvedID}-error` : undefined,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/Input/page.tsx",
            lineNumber: 78,
            columnNumber: 19
        }, this);
        $[18] = error;
        $[19] = resolvedID;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== t7 || $[22] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Input/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[21] = t7;
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    return t9;
}
_c = InputComponent;
;
var _c;
__turbopack_context__.k.register(_c, "InputComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SignInComponent/signincomponent.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "authSection": "signincomponent-module__5OvHba__authSection",
  "errorMessage": "signincomponent-module__5OvHba__errorMessage",
  "eyebrow": "signincomponent-module__5OvHba__eyebrow",
  "signInBox": "signincomponent-module__5OvHba__signInBox",
  "signInBtn": "signincomponent-module__5OvHba__signInBtn",
  "signInTitle": "signincomponent-module__5OvHba__signInTitle",
  "spin": "signincomponent-module__5OvHba__spin",
  "spinner": "signincomponent-module__5OvHba__spinner",
  "subtitle": "signincomponent-module__5OvHba__subtitle",
  "switchAuth": "signincomponent-module__5OvHba__switchAuth",
});
}),
"[project]/src/components/SignInComponent/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInComponent",
    ()=>SignInComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SignInComponent/signincomponent.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SignInComponent({ pageTitle }) {
    _s();
    const { signIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleSignIn(event) {
        event.preventDefault();
        if (submitting) return;
        const data = new FormData(event.currentTarget);
        const login = String(data.get("login") ?? "").trim();
        const password = String(data.get("password") ?? "");
        if (!login || !password) {
            setError("Informe seu username ou e-mail e sua senha.");
            return;
        }
        setSubmitting(true);
        setError("");
        try {
            const requestedNext = new URLSearchParams(window.location.search).get("next");
            const next = requestedNext?.startsWith("/") && !requestedNext.startsWith("//") ? requestedNext : "/";
            await signIn(login, password, next);
        } catch (signInError) {
            setError(signInError instanceof Error ? signInError.message : "Não foi possível entrar.");
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authSection,
        "aria-labelledby": "signin-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signInBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLogIn"], {}, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 42,
                            columnNumber: 42
                        }, this),
                        " Bem-vindo de volta"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    id: "signin-title",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signInTitle,
                    children: pageTitle
                }, void 0, false, {
                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                    children: "Entre para comentar e acompanhar suas leituras."
                }, void 0, false, {
                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    autoComplete: "on",
                    onSubmit: handleSignIn,
                    noValidate: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputComponent"], {
                            inputLabel: "Username ou e-mail",
                            inputType: "text",
                            inputName: "login",
                            inputID: "login",
                            autoComplete: "username",
                            inputPlaceholder: "seu.username ou email@exemplo.com",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputComponent"], {
                            inputLabel: "Senha",
                            inputType: "password",
                            inputName: "password",
                            inputID: "password",
                            autoComplete: "current-password",
                            inputPlaceholder: "Digite sua senha",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                            role: "alert",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signInBtn,
                            disabled: submitting,
                            children: [
                                submitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLoader"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 28
                                }, this),
                                submitting ? "Entrando…" : "Entrar"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInComponent$2f$signincomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchAuth,
                    children: [
                        "Ainda não tem uma conta? ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/signup",
                            children: "Cadastre-se"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignInComponent/page.tsx",
                            lineNumber: 56,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignInComponent/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignInComponent/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SignInComponent/page.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_s(SignInComponent, "qf9mu9/NEFJZ5Q8ORkEdRkZUw6k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = SignInComponent;
;
var _c;
__turbopack_context__.k.register(_c, "SignInComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_15d124e1._.js.map