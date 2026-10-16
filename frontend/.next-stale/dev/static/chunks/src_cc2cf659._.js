(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthToken",
    ()=>clearAuthToken,
    "getAuthToken",
    ()=>getAuthToken,
    "isAuthStorageKey",
    ()=>isAuthStorageKey,
    "saveAuthToken",
    ()=>saveAuthToken
]);
const TOKEN_KEY = "tako_auth_token";
const LEGACY_TOKEN_KEY = "token";
function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) return token;
    const legacyToken = window.localStorage.getItem(LEGACY_TOKEN_KEY);
    if (legacyToken) {
        window.localStorage.setItem(TOKEN_KEY, legacyToken);
        window.localStorage.removeItem(LEGACY_TOKEN_KEY);
    }
    return legacyToken;
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
function isAuthStorageKey(key) {
    return key === null || key === TOKEN_KEY || key === LEGACY_TOKEN_KEY;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/graphql.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "graphqlRequest",
    ()=>graphqlRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const PUBLIC_GRAPHQL_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql";
function graphqlUrls() {
    if ("TURBOPACK compile-time truthy", 1) return [
        PUBLIC_GRAPHQL_URL
    ];
    //TURBOPACK unreachable
    ;
}
async function graphqlRequest(query, variables = {}, token) {
    let response = null;
    let connectionError;
    for (const url of graphqlUrls()){
        try {
            response = await fetch(url, {
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
                }),
                cache: "no-store"
            });
            break;
        } catch (error) {
            connectionError = error;
        }
    }
    if (!response) {
        console.error("Não foi possível alcançar o GraphQL:", connectionError);
        throw new Error("Não foi possível conectar ao servidor de dados.");
    }
    const payload = await response.json().catch(()=>null);
    if (!response.ok || payload?.errors?.length || !payload?.data) {
        throw new Error(payload?.errors?.[0]?.message ?? "Não foi possível se comunicar com o servidor.");
    }
    return payload.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAuth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AUTH_USER_FIELDS = `
  id name username email profilePicture accountType
  subscription { plan status startedAt expiresAt renewalAt autoRenew source }
`;
function useAuth() {
    _s();
    const [authenticatedUser, setAuthenticatedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authToken, setAuthToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authLoading, setAuthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[logout]": (redirect = true)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthToken"])();
            setAuthToken(null);
            setAuthenticatedUser(null);
            setAuthLoading(false);
            if (redirect) router.replace("/");
        }
    }["useAuth.useCallback[logout]"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            let active = true;
            let restoreID = 0;
            async function restoreSession() {
                const currentRestoreID = ++restoreID;
                const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])();
                if (!token) {
                    if (active) {
                        setAuthToken(null);
                        setAuthenticatedUser(null);
                        setAuthLoading(false);
                    }
                    return;
                }
                if (active) setAuthLoading(true);
                try {
                    const { me } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query RestoreSession { me { ${AUTH_USER_FIELDS} } }`, {}, token);
                    if (active && currentRestoreID === restoreID) {
                        setAuthToken(token);
                        setAuthenticatedUser(me);
                    }
                } catch  {
                    if (active && currentRestoreID === restoreID) logout(false);
                } finally{
                    if (active && currentRestoreID === restoreID) setAuthLoading(false);
                }
            }
            function handleStorage(event) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthStorageKey"])(event.key)) void restoreSession();
            }
            void restoreSession();
            window.addEventListener("storage", handleStorage);
            return ({
                "useAuth.useEffect": ()=>{
                    active = false;
                    window.removeEventListener("storage", handleStorage);
                }
            })["useAuth.useEffect"];
        }
    }["useAuth.useEffect"], [
        logout
    ]);
    function authenticate(payload, redirectTo) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAuthToken"])(payload.token);
        setAuthToken(payload.token);
        setAuthenticatedUser(payload.user);
        setAuthLoading(false);
        router.replace(redirectTo);
    }
    const updateAuthenticatedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[updateAuthenticatedUser]": (user)=>setAuthenticatedUser(user)
    }["useAuth.useCallback[updateAuthenticatedUser]"], []);
    async function signIn(login, password, redirectTo_0 = "/") {
        const { signIn: payload_0 } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation SignIn($data: SignInInput!) {
        signIn(data: $data) { user { ${AUTH_USER_FIELDS} } token }
      }`, {
            data: {
                login,
                password
            }
        }, null);
        authenticate(payload_0, redirectTo_0);
        return payload_0;
    }
    async function signUp(data, redirectTo_1 = "/") {
        const { signUp: payload_1 } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation SignUp($data: SignUpInput!) {
        signUp(data: $data) { user { ${AUTH_USER_FIELDS} } token }
      }`, {
            data
        }, null);
        authenticate(payload_1, redirectTo_1);
        return payload_1;
    }
    return {
        authLoading,
        authToken,
        authenticatedUser,
        userAuthenticated: Boolean(authenticatedUser),
        signIn,
        signUp,
        logout,
        updateAuthenticatedUser
    };
}
_s(useAuth, "mkD2PHomTusTLalTeqncdvz8+Jw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/UserContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserContext",
    ()=>UserContext,
    "UserProvider",
    ()=>UserProvider,
    "useUser",
    ()=>useUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const UserContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function UserProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "bff63d9f8041b2fbe84b808c316003a2a6ffeda11feb51b450851bb569a4807b") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bff63d9f8041b2fbe84b808c316003a2a6ffeda11feb51b450851bb569a4807b";
    }
    const { children } = t0;
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    let t1;
    if ($[1] !== auth || $[2] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserContext.Provider, {
            value: auth,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/UserContext.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = auth;
        $[2] = children;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(UserProvider, "YuJWYXaKIY31b1y7U6yy3IXSxQA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = UserProvider;
function useUser() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "bff63d9f8041b2fbe84b808c316003a2a6ffeda11feb51b450851bb569a4807b") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bff63d9f8041b2fbe84b808c316003a2a6ffeda11feb51b450851bb569a4807b";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserContext);
    if (!context) {
        throw new Error("useUser precisa estar dentro de UserProvider.");
    }
    return context;
}
_s1(useUser, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
var _c;
__turbopack_context__.k.register(_c, "UserProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cc2cf659._.js.map