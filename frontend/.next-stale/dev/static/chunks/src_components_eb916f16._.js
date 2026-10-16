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
"[project]/src/components/SignUpComponent/signupcomponent.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "authSection": "signupcomponent-module__uv5sAa__authSection",
  "errorMessage": "signupcomponent-module__uv5sAa__errorMessage",
  "eyebrow": "signupcomponent-module__uv5sAa__eyebrow",
  "passwordGrid": "signupcomponent-module__uv5sAa__passwordGrid",
  "signUpBox": "signupcomponent-module__uv5sAa__signUpBox",
  "signUpBtn": "signupcomponent-module__uv5sAa__signUpBtn",
  "signUpTitle": "signupcomponent-module__uv5sAa__signUpTitle",
  "spin": "signupcomponent-module__uv5sAa__spin",
  "spinner": "signupcomponent-module__uv5sAa__spinner",
  "subtitle": "signupcomponent-module__uv5sAa__subtitle",
  "switchAuth": "signupcomponent-module__uv5sAa__switchAuth",
});
}),
"[project]/src/components/SignUpComponent/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignUpComponent",
    ()=>SignUpComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SignUpComponent/signupcomponent.module.css [app-client] (css module)");
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
function validate(data) {
    const errors = {};
    if (data.name.trim().length < 2) errors.name = "Informe seu nome.";
    if (!/^[a-z0-9](?:[a-z0-9._]{1,28}[a-z0-9])?$/.test(data.username.trim().toLowerCase())) {
        errors.username = "Use de 3 a 30 letras minúsculas, números, ponto ou sublinhado.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Informe um e-mail válido.";
    if (data.password.length < 8) errors.password = "A senha precisa ter pelo menos 8 caracteres.";
    if (data.password !== data.confirmPassword) errors.confirmPassword = "As senhas não coincidem.";
    return errors;
}
function SignUpComponent(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "7d6e578f07b95896e645d90aeccf0b77706deb46f215fd05e3f6fc42b81908c8") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d6e578f07b95896e645d90aeccf0b77706deb46f215fd05e3f6fc42b81908c8";
    }
    const { pageTitle } = t0;
    const { signUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    if ($[2] !== signUp || $[3] !== submitting) {
        t2 = async function handleSignUp(event) {
            event.preventDefault();
            if (submitting) {
                return;
            }
            const form = new FormData(event.currentTarget);
            const data = {
                name: String(form.get("name") ?? "").trim(),
                username: String(form.get("username") ?? "").trim().toLowerCase(),
                email: String(form.get("email") ?? "").trim().toLowerCase(),
                password: String(form.get("password") ?? ""),
                confirmPassword: String(form.get("confirmPassword") ?? "")
            };
            const validationErrors = validate(data);
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length) {
                return;
            }
            setSubmitting(true);
            setServerError("");
            ;
            try {
                await signUp(data, "/");
            } catch (t3) {
                const error = t3;
                setServerError(error instanceof Error ? error.message : "N\xE3o foi poss\xEDvel criar sua conta.");
                setSubmitting(false);
            }
        };
        $[2] = signUp;
        $[3] = submitting;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleSignUp = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUserPlus"], {}, void 0, false, {
                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                    lineNumber: 86,
                    columnNumber: 43
                }, this),
                " Faça parte da comunidade"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== pageTitle) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            id: "signup-title",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signUpTitle,
            children: pageTitle
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[6] = pageTitle;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
            children: "Crie sua conta para participar dos comentários."
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== errors.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputComponent"], {
            inputLabel: "Nome",
            inputType: "text",
            inputName: "name",
            inputID: "name",
            autoComplete: "name",
            inputPlaceholder: "Como devemos chamar voc\xEA?",
            maxLength: 120,
            error: errors.name,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[9] = errors.name;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== errors.username) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputComponent"], {
            inputLabel: "Username",
            inputType: "text",
            inputName: "username",
            inputID: "username",
            autoComplete: "username",
            inputPlaceholder: "seu.username",
            minLength: 3,
            maxLength: 30,
            error: errors.username,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[11] = errors.username;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== errors.email) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputComponent"], {
            inputLabel: "E-mail",
            inputType: "email",
            inputName: "email",
            inputID: "email",
            autoComplete: "email",
            inputPlaceholder: "email@exemplo.com",
            maxLength: 254,
            error: errors.email,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[13] = errors.email;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== errors.password) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputComponent"], {
            inputLabel: "Senha",
            inputType: "password",
            inputName: "password",
            inputID: "new-password",
            autoComplete: "new-password",
            inputPlaceholder: "M\xEDnimo de 8 caracteres",
            minLength: 8,
            maxLength: 120,
            error: errors.password,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[15] = errors.password;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== errors.confirmPassword) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputComponent"], {
            inputLabel: "Confirmar senha",
            inputType: "password",
            inputName: "confirmPassword",
            inputID: "confirm-password",
            autoComplete: "new-password",
            inputPlaceholder: "Repita sua senha",
            minLength: 8,
            maxLength: 120,
            error: errors.confirmPassword,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[17] = errors.confirmPassword;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].passwordGrid,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== serverError) {
        t12 = serverError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
            role: "alert",
            children: serverError
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 157,
            columnNumber: 26
        }, this);
        $[22] = serverError;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== submitting) {
        t13 = submitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLoader"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 165,
            columnNumber: 25
        }, this);
        $[24] = submitting;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const t14 = submitting ? "Criando conta\u2026" : "Criar minha conta";
    let t15;
    if ($[26] !== submitting || $[27] !== t13 || $[28] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signUpBtn,
            disabled: submitting,
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[26] = submitting;
        $[27] = t13;
        $[28] = t14;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== handleSignUp || $[31] !== t11 || $[32] !== t12 || $[33] !== t15 || $[34] !== t6 || $[35] !== t7 || $[36] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            autoComplete: "on",
            onSubmit: handleSignUp,
            noValidate: true,
            children: [
                t6,
                t7,
                t8,
                t11,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[30] = handleSignUp;
        $[31] = t11;
        $[32] = t12;
        $[33] = t15;
        $[34] = t6;
        $[35] = t7;
        $[36] = t8;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchAuth,
            children: [
                "Já possui uma conta? ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/signin",
                    children: "Entrar"
                }, void 0, false, {
                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                    lineNumber: 198,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t16 || $[40] !== t4) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authSection,
            "aria-labelledby": "signup-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signUpBox,
                children: [
                    t3,
                    t4,
                    t5,
                    t16,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SignUpComponent/page.tsx",
                lineNumber: 205,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t4;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    return t18;
}
_s(SignUpComponent, "kZd8od6935qGGMp5wCCngkW7SvU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = SignUpComponent;
;
var _c;
__turbopack_context__.k.register(_c, "SignUpComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_eb916f16._.js.map