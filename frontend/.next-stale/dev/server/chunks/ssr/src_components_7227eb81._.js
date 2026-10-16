module.exports = [
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
function InputComponent({ inputLabel, inputType, inputPlaceholder, inputName, required = false, inputID, autoComplete, minLength, maxLength, error }) {
    const resolvedID = inputID ?? inputName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldset} ${error ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldsetError : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legend,
                        children: inputLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/Input/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                        type: inputType,
                        id: resolvedID,
                        name: inputName,
                        required: required,
                        autoComplete: autoComplete,
                        minLength: minLength,
                        maxLength: maxLength,
                        "aria-invalid": Boolean(error),
                        "aria-describedby": error && resolvedID ? `${resolvedID}-error` : undefined,
                        placeholder: inputPlaceholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/Input/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Input/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: resolvedID ? `${resolvedID}-error` : undefined,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/Input/page.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Input/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/SignUpComponent/signupcomponent.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/SignUpComponent/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignUpComponent",
    ()=>SignUpComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SignUpComponent/signupcomponent.module.css [app-ssr] (css module)");
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
function SignUpComponent({ pageTitle }) {
    const { signUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleSignUp(event) {
        event.preventDefault();
        if (submitting) return;
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
        if (Object.keys(validationErrors).length) return;
        setSubmitting(true);
        setServerError("");
        try {
            await signUp(data, "/");
        } catch (error) {
            setServerError(error instanceof Error ? error.message : "Não foi possível criar sua conta.");
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authSection,
        "aria-labelledby": "signup-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signUpBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiUserPlus"], {}, void 0, false, {
                            fileName: "[project]/src/components/SignUpComponent/page.tsx",
                            lineNumber: 59,
                            columnNumber: 42
                        }, this),
                        " Faça parte da comunidade"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    id: "signup-title",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signUpTitle,
                    children: pageTitle
                }, void 0, false, {
                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                    children: "Crie sua conta para participar dos comentários."
                }, void 0, false, {
                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    autoComplete: "on",
                    onSubmit: handleSignUp,
                    noValidate: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputComponent"], {
                            inputLabel: "Nome",
                            inputType: "text",
                            inputName: "name",
                            inputID: "name",
                            autoComplete: "name",
                            inputPlaceholder: "Como devemos chamar você?",
                            maxLength: 120,
                            error: errors.name,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignUpComponent/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputComponent"], {
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
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputComponent"], {
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
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].passwordGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputComponent"], {
                                    inputLabel: "Senha",
                                    inputType: "password",
                                    inputName: "password",
                                    inputID: "new-password",
                                    autoComplete: "new-password",
                                    inputPlaceholder: "Mínimo de 8 caracteres",
                                    minLength: 8,
                                    maxLength: 120,
                                    error: errors.password,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputComponent"], {
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
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SignUpComponent/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        serverError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                            role: "alert",
                            children: serverError
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignUpComponent/page.tsx",
                            lineNumber: 72,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signUpBtn,
                            disabled: submitting,
                            children: [
                                submitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiLoader"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 28
                                }, this),
                                submitting ? "Criando conta…" : "Criar minha conta"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SignUpComponent/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignUpComponent$2f$signupcomponent$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].switchAuth,
                    children: [
                        "Já possui uma conta? ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/signin",
                            children: "Entrar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SignUpComponent/page.tsx",
                            lineNumber: 78,
                            columnNumber: 63
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SignUpComponent/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SignUpComponent/page.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SignUpComponent/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
;
}),
];

//# sourceMappingURL=src_components_7227eb81._.js.map