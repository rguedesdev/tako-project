(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Comments/comments.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "comments-module__imSYTa__actions",
  "avatar": "comments-module__imSYTa__avatar",
  "avatarFallback": "comments-module__imSYTa__avatarFallback",
  "characterCount": "comments-module__imSYTa__characterCount",
  "characterWarning": "comments-module__imSYTa__characterWarning",
  "comment": "comments-module__imSYTa__comment",
  "commentBody": "comments-module__imSYTa__commentBody",
  "commentHeader": "comments-module__imSYTa__commentHeader",
  "commentList": "comments-module__imSYTa__commentList",
  "commentText": "comments-module__imSYTa__commentText",
  "commentsSection": "comments-module__imSYTa__commentsSection",
  "composer": "comments-module__imSYTa__composer",
  "composerBody": "comments-module__imSYTa__composerBody",
  "composerFooter": "comments-module__imSYTa__composerFooter",
  "dangerAction": "comments-module__imSYTa__dangerAction",
  "emptyState": "comments-module__imSYTa__emptyState",
  "errorState": "comments-module__imSYTa__errorState",
  "iconButton": "comments-module__imSYTa__iconButton",
  "identity": "comments-module__imSYTa__identity",
  "identityMeta": "comments-module__imSYTa__identityMeta",
  "inlineError": "comments-module__imSYTa__inlineError",
  "liked": "comments-module__imSYTa__liked",
  "loadMore": "comments-module__imSYTa__loadMore",
  "loadMoreReplies": "comments-module__imSYTa__loadMoreReplies",
  "menu": "comments-module__imSYTa__menu",
  "menuWrap": "comments-module__imSYTa__menuWrap",
  "normal": "comments-module__imSYTa__normal",
  "primaryButton": "comments-module__imSYTa__primaryButton",
  "removed": "comments-module__imSYTa__removed",
  "repliesBlock": "comments-module__imSYTa__repliesBlock",
  "repliesList": "comments-module__imSYTa__repliesList",
  "repliesToggle": "comments-module__imSYTa__repliesToggle",
  "reply": "comments-module__imSYTa__reply",
  "sectionHeader": "comments-module__imSYTa__sectionHeader",
  "shimmer": "comments-module__imSYTa__shimmer",
  "signInPrompt": "comments-module__imSYTa__signInPrompt",
  "skeleton": "comments-module__imSYTa__skeleton",
  "skeletonList": "comments-module__imSYTa__skeletonList",
  "small": "comments-module__imSYTa__small",
  "sortControl": "comments-module__imSYTa__sortControl",
  "spin": "comments-module__imSYTa__spin",
  "spinner": "comments-module__imSYTa__spinner",
  "textButton": "comments-module__imSYTa__textButton",
});
}),
"[project]/src/components/Comments/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Comments",
    ()=>Comments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/UserContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/graphql.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Comments/comments.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const COMMENT_FIELDS = `
  id content parentCommentId createdAt updatedAt edited deleted
  likeCount likedByMe replyCount
  author { id name username profilePicture }
`;
function errorMessage(error) {
    return error instanceof Error ? error.message : "Algo deu errado. Tente novamente.";
}
function timeAgo(value) {
    const timestamp = new Date(value).getTime();
    const seconds = Math.round((timestamp - Date.now()) / 1000);
    const formatter = new Intl.RelativeTimeFormat("pt-BR", {
        numeric: "auto"
    });
    const ranges = [
        [
            "year",
            31_536_000
        ],
        [
            "month",
            2_592_000
        ],
        [
            "day",
            86_400
        ],
        [
            "hour",
            3_600
        ],
        [
            "minute",
            60
        ]
    ];
    for (const [unit, size] of ranges){
        if (Math.abs(seconds) >= size) return formatter.format(Math.round(seconds / size), unit);
    }
    return formatter.format(seconds, "second");
}
function initials(user) {
    return (user?.name || user?.username || "?").split(/\s+/).slice(0, 2).map((part)=>part[0]).join("").toUpperCase();
}
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e2aec2c3f6b11896dccad7dd332c43595d48e8286ef706778ac15afb3ea2ca34") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2aec2c3f6b11896dccad7dd332c43595d48e8286ef706778ac15afb3ea2ca34";
    }
    const { user, size: t1 } = t0;
    const size = t1 === undefined ? "normal" : t1;
    let t2;
    if ($[1] !== size || $[2] !== user) {
        t2 = user?.profilePicture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size]}`,
            src: user.profilePicture,
            alt: ""
        }, void 0, false, {
            fileName: "[project]/src/components/Comments/page.tsx",
            lineNumber: 74,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFallback} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size]}`,
            "aria-hidden": "true",
            children: initials(user)
        }, void 0, false, {
            fileName: "[project]/src/components/Comments/page.tsx",
            lineNumber: 74,
            columnNumber: 123
        }, this);
        $[1] = size;
        $[2] = user;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = Avatar;
function Composer({ user, autoFocus = false, initialValue = "", placeholder = "Escreva um comentário…", submitLabel = "Comentar", onCancel, onSubmit }) {
    _s();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const normalized = content.trim();
    async function submit(event) {
        event.preventDefault();
        if (!normalized || submitting || normalized.length > 2000) return;
        setSubmitting(true);
        setError("");
        try {
            await onSubmit(normalized);
            setContent("");
        } catch (submitError) {
            setError(errorMessage(submitError));
        } finally{
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composer,
        onSubmit: submit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                user: user,
                size: "small"
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composerBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        autoFocus: autoFocus,
                        maxLength: 2000,
                        rows: initialValue ? 3 : 2,
                        value: content,
                        onChange: (event_0)=>setContent(event_0.target.value),
                        placeholder: placeholder,
                        "aria-label": placeholder
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composerFooter,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: normalized.length > 1850 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].characterWarning : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].characterCount,
                                children: [
                                    content.length,
                                    "/2000"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textButton,
                                onClick: onCancel,
                                disabled: submitting,
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 126,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                disabled: !normalized || submitting,
                                children: [
                                    submitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLoader"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 28
                                    }, this),
                                    submitting ? "Enviando" : submitLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineError,
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 134,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Comments/page.tsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
_s(Composer, "SfrE6DB5pWKm+yqP4opzlUdwTUY=");
_c1 = Composer;
function CommentItem({ comment: initialComment, chapterId, currentUser, token, isReply = false, rootCommentId, onDeleted }) {
    _s1();
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialComment);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replying, setReplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likePending, setLikePending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [repliesOpen, setRepliesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replies, setReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [repliesOffset, setRepliesOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [repliesLoading, setRepliesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [repliesError, setRepliesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isOwner = currentUser?.id === comment.author.id;
    const replyParentId = rootCommentId ?? comment.id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentItem.useEffect": ()=>setComment(initialComment)
    }["CommentItem.useEffect"], [
        initialComment
    ]);
    async function toggleLike() {
        if (!currentUser || likePending || comment.deleted) return;
        const previous = comment;
        setLikePending(true);
        setComment((value)=>({
                ...value,
                likedByMe: !value.likedByMe,
                likeCount: Math.max(0, value.likeCount + (value.likedByMe ? -1 : 1))
            }));
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation ToggleLike($commentId: ID!) {
          toggleCommentLike(commentId: $commentId) { liked likeCount }
        }`, {
                commentId: comment.id
            }, token);
            setComment((value_0)=>({
                    ...value_0,
                    ...data.toggleCommentLike,
                    likedByMe: data.toggleCommentLike.liked
                }));
        } catch  {
            setComment(previous);
        } finally{
            setLikePending(false);
        }
    }
    const loadReplies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommentItem.useCallback[loadReplies]": async (offset = 0)=>{
            setRepliesLoading(true);
            setRepliesError("");
            try {
                const data_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query Replies($commentId: ID!, $offset: Int!) {
          commentReplies(commentId: $commentId, offset: $offset, limit: 5) {
            items { ${COMMENT_FIELDS} } totalCount nextOffset
          }
        }`, {
                    commentId: comment.id,
                    offset
                }, token);
                setReplies({
                    "CommentItem.useCallback[loadReplies]": (current)=>{
                        const combined = offset === 0 ? data_0.commentReplies.items : [
                            ...current,
                            ...data_0.commentReplies.items
                        ];
                        return combined.filter({
                            "CommentItem.useCallback[loadReplies]": (item, index)=>combined.findIndex({
                                    "CommentItem.useCallback[loadReplies]": (candidate)=>candidate.id === item.id
                                }["CommentItem.useCallback[loadReplies]"]) === index
                        }["CommentItem.useCallback[loadReplies]"]);
                    }
                }["CommentItem.useCallback[loadReplies]"]);
                setRepliesOffset(data_0.commentReplies.nextOffset ?? null);
                setComment({
                    "CommentItem.useCallback[loadReplies]": (current_0)=>({
                            ...current_0,
                            replyCount: data_0.commentReplies.totalCount
                        })
                }["CommentItem.useCallback[loadReplies]"]);
                setRepliesOpen(true);
            } catch (loadError) {
                setRepliesError(errorMessage(loadError));
            } finally{
                setRepliesLoading(false);
            }
        }
    }["CommentItem.useCallback[loadReplies]"], [
        comment.id,
        token
    ]);
    async function addReply(content) {
        const data_1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation Reply($chapterId: ID!, $parentId: ID!, $content: String!) {
        createComment(chapterId: $chapterId, parentCommentId: $parentId, content: $content) {
          ${COMMENT_FIELDS}
        }
      }`, {
            chapterId,
            parentId: replyParentId,
            content
        }, token);
        if (isReply) {
            onDeleted?.(data_1.createComment);
        } else if (comment.replyCount > 0 && replies.length === 0) {
            // Preserve immediate feedback while also hydrating replies that were still collapsed.
            await loadReplies(0);
            setReplies((current_1)=>current_1.some((reply)=>reply.id === data_1.createComment.id) ? current_1 : [
                    ...current_1,
                    data_1.createComment
                ]);
        } else {
            setReplies((current_2)=>[
                    ...current_2,
                    data_1.createComment
                ]);
            setComment((current_3)=>({
                    ...current_3,
                    replyCount: current_3.replyCount + 1
                }));
            setRepliesOpen(true);
        }
        setReplying(false);
    }
    async function edit(content_0) {
        const data_2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation EditComment($commentId: ID!, $content: String!) {
        editComment(commentId: $commentId, content: $content) { ${COMMENT_FIELDS} }
      }`, {
            commentId: comment.id,
            content: content_0
        }, token);
        setComment(data_2.editComment);
        setEditing(false);
    }
    async function remove() {
        setMenuOpen(false);
        if (!window.confirm("Excluir este comentário? Esta ação não pode ser desfeita.")) return;
        try {
            const data_3 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation DeleteComment($commentId: ID!) {
          deleteComment(commentId: $commentId) { ${COMMENT_FIELDS} }
        }`, {
                commentId: comment.id
            }, token);
            if (comment.replyCount > 0 && !isReply) setComment(data_3.deleteComment);
            else onDeleted?.(data_3.deleteComment);
        } catch (deleteError) {
            window.alert(errorMessage(deleteError));
        }
    }
    function receiveReplyFromNested(newReply) {
        setReplies((current_4)=>[
                ...current_4,
                newReply
            ]);
        setComment((current_5)=>({
                ...current_5,
                replyCount: current_5.replyCount + 1
            }));
        setRepliesOpen(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comment} ${isReply ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reply : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                user: comment.author,
                size: isReply ? "small" : "normal"
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].identity,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: comment.author.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].identityMeta,
                                        children: [
                                            comment.author.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "@",
                                                    comment.author.username
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Comments/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comments/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                dateTime: comment.createdAt,
                                                title: new Date(comment.createdAt).toLocaleString("pt-BR"),
                                                children: timeAgo(comment.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comments/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this),
                                            comment.edited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "· editado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comments/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            isOwner && !comment.deleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuWrap,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconButton,
                                        "aria-label": "Ações do comentário",
                                        "aria-expanded": menuOpen,
                                        onClick: ()=>setMenuOpen((open)=>!open),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMoreHorizontal"], {}, void 0, false, {
                                            fileName: "[project]/src/components/Comments/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setEditing(true);
                                                    setMenuOpen(false);
                                                },
                                                children: "Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comments/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dangerAction,
                                                onClick: remove,
                                                children: "Excluir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comments/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 308,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    comment.deleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removed,
                        children: "Comentário removido"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 322,
                        columnNumber: 28
                    }, this) : editing && currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Composer, {
                        user: currentUser,
                        initialValue: comment.content,
                        submitLabel: "Salvar",
                        onCancel: ()=>setEditing(false),
                        onSubmit: edit
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 322,
                        columnNumber: 109
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentText,
                        children: comment.content
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 322,
                        columnNumber: 246
                    }, this),
                    !editing && !comment.deleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: comment.likedByMe ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liked : "",
                                onClick: toggleLike,
                                disabled: !currentUser || likePending,
                                title: currentUser ? undefined : "Entre para curtir",
                                "aria-label": comment.likedByMe ? "Remover curtida" : "Curtir",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHeart"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: comment.likeCount || "Curtir"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setReplying((open_0)=>!open_0),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageCircle"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Responder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 329,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 324,
                        columnNumber: 42
                    }, this),
                    replying && currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Composer, {
                        user: currentUser,
                        autoFocus: true,
                        placeholder: `Responder a @${comment.author.username}…`,
                        onCancel: ()=>setReplying(false),
                        onSubmit: (content_1)=>addReply(isReply ? `@${comment.author.username} ${content_1}` : content_1)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 335,
                        columnNumber: 37
                    }, this),
                    !isReply && comment.replyCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].repliesBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].repliesToggle,
                                onClick: ()=>repliesOpen ? setRepliesOpen(false) : replies.length ? setRepliesOpen(true) : loadReplies(0),
                                disabled: repliesLoading,
                                children: [
                                    repliesLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLoader"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 34
                                    }, this),
                                    repliesOpen ? "Ocultar respostas" : `Ver ${comment.replyCount} ${comment.replyCount === 1 ? "resposta" : "respostas"}`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this),
                            repliesError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineError,
                                children: [
                                    repliesError,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>loadReplies(0),
                                        children: "Tentar novamente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 79
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 342,
                                columnNumber: 30
                            }, this),
                            repliesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].repliesList,
                                children: [
                                    replies.map((reply_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentItem, {
                                            comment: reply_0,
                                            chapterId: chapterId,
                                            currentUser: currentUser,
                                            token: token,
                                            isReply: true,
                                            rootCommentId: comment.id,
                                            onDeleted: (result)=>{
                                                if (result.id === reply_0.id) {
                                                    setReplies((current_6)=>current_6.filter((item_0)=>item_0.id !== reply_0.id));
                                                    setComment((current_7)=>({
                                                            ...current_7,
                                                            replyCount: Math.max(0, current_7.replyCount - 1)
                                                        }));
                                                } else receiveReplyFromNested(result);
                                            }
                                        }, reply_0.id, false, {
                                            fileName: "[project]/src/components/Comments/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 41
                                        }, this)),
                                    repliesOffset !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreReplies,
                                        onClick: ()=>loadReplies(repliesOffset),
                                        disabled: repliesLoading,
                                        children: "Carregar mais respostas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 343,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 337,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Comments/page.tsx",
        lineNumber: 293,
        columnNumber: 10
    }, this);
}
_s1(CommentItem, "xfzNkVFTvCsWlJOECapkOqb+KuA=");
_c2 = CommentItem;
function Comments({ chapterId }) {
    _s2();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { authenticatedUser, authLoading, authToken: token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const currentUser = authenticatedUser;
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [nextOffset, setNextOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("NEWEST");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const requestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const loadComments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Comments.useCallback[loadComments]": async (offset = 0, selectedSort = sort)=>{
            const currentRequest = ++requestId.current;
            if (offset === 0) setLoading(true);
            else setLoadingMore(true);
            setError("");
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`query ChapterComments($chapterId: ID!, $sort: CommentSort!, $offset: Int!) {
          chapterComments(chapterId: $chapterId, sort: $sort, offset: $offset, limit: 10) {
            items { ${COMMENT_FIELDS} } totalCount nextOffset
          }
        }`, {
                    chapterId,
                    sort: selectedSort,
                    offset
                }, token);
                if (currentRequest !== requestId.current) return;
                setComments({
                    "Comments.useCallback[loadComments]": (current)=>offset === 0 ? data.chapterComments.items : [
                            ...current,
                            ...data.chapterComments.items
                        ]
                }["Comments.useCallback[loadComments]"]);
                setTotalCount(data.chapterComments.totalCount);
                setNextOffset(data.chapterComments.nextOffset ?? null);
            } catch (loadError) {
                if (currentRequest === requestId.current) setError(errorMessage(loadError));
            } finally{
                if (currentRequest === requestId.current) {
                    setLoading(false);
                    setLoadingMore(false);
                }
            }
        }
    }["Comments.useCallback[loadComments]"], [
        chapterId,
        sort,
        token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Comments.useEffect": ()=>{
            loadComments(0, sort);
        }
    }["Comments.useEffect"], [
        chapterId,
        sort,
        token,
        loadComments
    ]);
    async function createComment(content) {
        const data_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["graphqlRequest"])(`mutation CreateComment($chapterId: ID!, $content: String!) {
        createComment(chapterId: $chapterId, content: $content) { ${COMMENT_FIELDS} }
      }`, {
            chapterId,
            content
        }, token);
        setComments((current_0)=>sort === "OLDEST" ? [
                ...current_0,
                data_0.createComment
            ] : [
                data_0.createComment,
                ...current_0
            ]);
        setTotalCount((count)=>count + 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentsSection,
        "aria-labelledby": "comments-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "comments-title",
                                children: "Comentários"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    totalCount,
                                    " ",
                                    totalCount === 1 ? "comentário" : "comentários"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortControl,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ordenar por"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sort,
                                onChange: (event)=>setSort(event.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "NEWEST",
                                        children: "Mais recentes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "OLDEST",
                                        children: "Mais antigos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MOST_LIKED",
                                        children: "Mais curtidos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            authLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signInPrompt,
                "aria-label": "Verificando sessão",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFallback} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].small}`,
                        children: "…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Verificando sua sessão…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 441,
                columnNumber: 22
            }, this) : currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Composer, {
                user: currentUser,
                onSubmit: createComment
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 444,
                columnNumber: 32
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signInPrompt,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFallback} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].small}`,
                        children: "?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/signin?next=${encodeURIComponent(pathname)}`,
                                children: "Entre na sua conta"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 446,
                                columnNumber: 14
                            }, this),
                            " para participar da conversa."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 444,
                columnNumber: 91
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeletonList,
                "aria-label": "Carregando comentários",
                children: [
                    0,
                    1,
                    2
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeleton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 450,
                                columnNumber: 78
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {}, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 96
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 450,
                                columnNumber: 86
                            }, this)
                        ]
                    }, item, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 450,
                        columnNumber: 34
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 449,
                columnNumber: 18
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorState,
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Não foi possível carregar os comentários."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 453,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>loadComments(0),
                        children: "Tentar novamente"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 451,
                columnNumber: 26
            }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageCircle"], {
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Ainda não há comentários."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Seja a primeira pessoa a comentar este capítulo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 458,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 455,
                columnNumber: 42
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentList,
                children: comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentItem, {
                        comment: comment,
                        chapterId: chapterId,
                        currentUser: currentUser,
                        token: token,
                        onDeleted: ()=>{
                            setComments((current_1)=>current_1.filter((item_0)=>item_0.id !== comment.id));
                            setTotalCount((count_0)=>Math.max(0, count_0 - 1));
                        }
                    }, comment.id, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 460,
                        columnNumber: 36
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 459,
                columnNumber: 18
            }, this),
            !loading && !error && nextOffset !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMore,
                disabled: loadingMore,
                onClick: ()=>loadComments(nextOffset),
                children: [
                    loadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLoader"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 467,
                        columnNumber: 27
                    }, this),
                    loadingMore ? "Carregando" : "Carregar mais comentários"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 466,
                columnNumber: 53
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Comments/page.tsx",
        lineNumber: 425,
        columnNumber: 10
    }, this);
}
_s2(Comments, "Tz2w8KS86Q8PoDGeQy5pdBIxEks=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$UserContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c3 = Comments;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "Composer");
__turbopack_context__.k.register(_c2, "CommentItem");
__turbopack_context__.k.register(_c3, "Comments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MediaImage/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaImage",
    ()=>MediaImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    const configuredGateway = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_IPFS_GATEWAY?.replace(/\/?$/, "/");
    const backendOrigin = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql").replace(/\/graphql\/?$/, "");
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
function MediaImage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "ae25dfb583c1c9caa535cbe6cbc9bbec056f041ecb3c3521e5f0550a7e2854a5") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae25dfb583c1c9caa535cbe6cbc9bbec056f041ecb3c3521e5f0550a7e2854a5";
    }
    let alt;
    let fallback;
    let onError;
    let props;
    let source;
    if ($[1] !== t0) {
        ({ source, fallback, alt, onError, ...props } = t0);
        $[1] = t0;
        $[2] = alt;
        $[3] = fallback;
        $[4] = onError;
        $[5] = props;
        $[6] = source;
    } else {
        alt = $[2];
        fallback = $[3];
        onError = $[4];
        props = $[5];
        source = $[6];
    }
    let t1;
    if ($[7] !== fallback || $[8] !== source) {
        t1 = buildCandidates(source, fallback);
        $[7] = fallback;
        $[8] = source;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const candidates = t1;
    const [candidateIndex, setCandidateIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const t2 = candidates[Math.min(candidateIndex, candidates.length - 1)];
    const t3 = alt ?? "";
    let t4;
    if ($[10] !== candidates.length || $[11] !== onError) {
        t4 = ({
            "MediaImage[<img>.onError]": (event)=>{
                onError?.(event);
                setCandidateIndex({
                    "MediaImage[<img>.onError > setCandidateIndex()]": (index)=>Math.min(index + 1, candidates.length - 1)
                }["MediaImage[<img>.onError > setCandidateIndex()]"]);
            }
        })["MediaImage[<img>.onError]"];
        $[10] = candidates.length;
        $[11] = onError;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== props || $[14] !== t2 || $[15] !== t3 || $[16] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            ...props,
            src: t2,
            alt: t3,
            onError: t4
        }, void 0, false, {
            fileName: "[project]/src/components/MediaImage/page.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = props;
        $[14] = t2;
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
}
_s(MediaImage, "GeDeS7I8aeQihBRehnw6m4EFuCk=");
_c = MediaImage;
;
var _c;
__turbopack_context__.k.register(_c, "MediaImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MangaChapter/mangachapter.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "mangachapter-module__4ps5eq__active",
  "backLink": "mangachapter-module__4ps5eq__backLink",
  "canvas": "mangachapter-module__4ps5eq__canvas",
  "continuousCanvas": "mangachapter-module__4ps5eq__continuousCanvas",
  "directionSelector": "mangachapter-module__4ps5eq__directionSelector",
  "eyebrow": "mangachapter-module__4ps5eq__eyebrow",
  "fullscreenButton": "mangachapter-module__4ps5eq__fullscreenButton",
  "mangaPage": "mangachapter-module__4ps5eq__mangaPage",
  "mangaTitle": "mangachapter-module__4ps5eq__mangaTitle",
  "metadata": "mangachapter-module__4ps5eq__metadata",
  "modeSelector": "mangachapter-module__4ps5eq__modeSelector",
  "pageBadge": "mangachapter-module__4ps5eq__pageBadge",
  "pageNavigation": "mangachapter-module__4ps5eq__pageNavigation",
  "pageSelector": "mangachapter-module__4ps5eq__pageSelector",
  "pageStack": "mangachapter-module__4ps5eq__pageStack",
  "pageStage": "mangachapter-module__4ps5eq__pageStage",
  "progressTrack": "mangachapter-module__4ps5eq__progressTrack",
  "reader": "mangachapter-module__4ps5eq__reader",
  "readerFooter": "mangachapter-module__4ps5eq__readerFooter",
  "readerHeader": "mangachapter-module__4ps5eq__readerHeader",
  "readerPreferences": "mangachapter-module__4ps5eq__readerPreferences",
  "scrollPage": "mangachapter-module__4ps5eq__scrollPage",
  "titleBlock": "mangachapter-module__4ps5eq__titleBlock",
  "toolbar": "mangachapter-module__4ps5eq__toolbar",
  "turnNext": "mangachapter-module__4ps5eq__turnNext",
  "turnPage": "mangachapter-module__4ps5eq__turnPage",
  "turnPrevious": "mangachapter-module__4ps5eq__turnPrevious",
  "wideStage": "mangachapter-module__4ps5eq__wideStage",
});
}),
"[project]/src/components/MangaChapter/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MangaChapter",
    ()=>MangaChapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaImage/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/MangaChapter/mangachapter.module.css [app-client] (css module)");
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
function MangaChapter(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(158);
    if ($[0] !== "1726fd2e354e288df33556edf55593edb2ef6515419b7edbb482a74f124f1656") {
        for(let $i = 0; $i < 158; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1726fd2e354e288df33556edf55593edb2ef6515419b7edbb482a74f124f1656";
    }
    const { chapter } = t0;
    let t1;
    if ($[1] !== chapter.pages) {
        t1 = chapter.pages.filter(Boolean);
        $[1] = chapter.pages;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const pages = t1;
    const readerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isWide, setIsWide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("swap");
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("rtl");
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const titleHref = `/title/${chapter.manga}`;
    const progress = (currentPage + 1) / pages.length * 100;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MangaChapter[useEffect()]": ()=>{
                const saved = localStorage.getItem("readerMode");
                if (saved === "swap" || saved === "scroll") {
                    setMode(saved);
                }
                const savedDirection = localStorage.getItem("readerDirection");
                if (savedDirection === "rtl" || savedDirection === "ltr") {
                    setDirection(savedDirection);
                }
            }
        })["MangaChapter[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "MangaChapter[useEffect()]": ()=>{
                const handleFullscreenChange = function handleFullscreenChange() {
                    setIsFullscreen(document.fullscreenElement === readerRef.current);
                };
                document.addEventListener("fullscreenchange", handleFullscreenChange);
                return ()=>document.removeEventListener("fullscreenchange", handleFullscreenChange);
            }
        })["MangaChapter[useEffect()]"];
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] !== mode) {
        t6 = ({
            "MangaChapter[useEffect()]": ()=>{
                if (mode !== "scroll" || !readerRef.current) {
                    return;
                }
                const pageElements = readerRef.current.querySelectorAll("[data-reader-page]");
                const observer = new IntersectionObserver((entries)=>{
                    const visible = entries.find(_MangaChapterUseEffectAnonymousEntriesFind);
                    if (visible) {
                        setCurrentPage(Number(visible.target.dataset.readerPage));
                    }
                }, {
                    rootMargin: "-45% 0px -45% 0px",
                    threshold: 0
                });
                pageElements.forEach({
                    "MangaChapter[useEffect() > pageElements.forEach()]": (page)=>observer.observe(page)
                }["MangaChapter[useEffect() > pageElements.forEach()]"]);
                return ()=>observer.disconnect();
            }
        })["MangaChapter[useEffect()]"];
        t7 = [
            mode
        ];
        $[7] = mode;
        $[8] = t6;
        $[9] = t7;
    } else {
        t6 = $[8];
        t7 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[10] !== pages.length) {
        t8 = ({
            "MangaChapter[nextPage]": ()=>{
                setIsWide(false);
                setCurrentPage({
                    "MangaChapter[nextPage > setCurrentPage()]": (page_0)=>Math.min(page_0 + 1, pages.length - 1)
                }["MangaChapter[nextPage > setCurrentPage()]"]);
            }
        })["MangaChapter[nextPage]"];
        $[10] = pages.length;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const nextPage = t8;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "MangaChapter[previousPage]": ()=>{
                setIsWide(false);
                setCurrentPage(_MangaChapterPreviousPageSetCurrentPage);
            }
        })["MangaChapter[previousPage]"];
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const previousPage = t9;
    const turnLeft = direction === "rtl" ? nextPage : previousPage;
    const turnRight = direction === "rtl" ? previousPage : nextPage;
    const leftTurnDisabled = direction === "rtl" ? currentPage === pages.length - 1 : currentPage === 0;
    const rightTurnDisabled = direction === "rtl" ? currentPage === 0 : currentPage === pages.length - 1;
    let t10;
    let t11;
    if ($[13] !== mode || $[14] !== turnLeft || $[15] !== turnRight) {
        t10 = ({
            "MangaChapter[useEffect()]": ()=>{
                const handleKeyDown = function handleKeyDown(event) {
                    if (mode === "scroll") {
                        return;
                    }
                    const target = event.target;
                    if (target?.matches("input, textarea, select, [contenteditable='true']")) {
                        return;
                    }
                    if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        turnLeft();
                    }
                    if (event.key === "ArrowRight") {
                        event.preventDefault();
                        turnRight();
                    }
                };
                window.addEventListener("keydown", handleKeyDown);
                return ()=>window.removeEventListener("keydown", handleKeyDown);
            }
        })["MangaChapter[useEffect()]"];
        t11 = [
            mode,
            turnLeft,
            turnRight
        ];
        $[13] = mode;
        $[14] = turnLeft;
        $[15] = turnRight;
        $[16] = t10;
        $[17] = t11;
    } else {
        t10 = $[16];
        t11 = $[17];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = function changeMode(nextMode) {
            setMode(nextMode);
            localStorage.setItem("readerMode", nextMode);
        };
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const changeMode = t12;
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = function changeDirection(nextDirection) {
            setDirection(nextDirection);
            localStorage.setItem("readerDirection", nextDirection);
        };
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    const changeDirection = t13;
    let t14;
    if ($[20] !== mode) {
        t14 = function goToPage(page_2) {
            setCurrentPage(page_2);
            setIsWide(false);
            if (mode === "scroll") {
                readerRef.current?.querySelector(`[data-reader-page="${page_2}"]`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        };
        $[20] = mode;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    const goToPage = t14;
    let t15;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = async function toggleFullscreen() {
            if (!document.fullscreenElement) {
                await readerRef.current?.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        };
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    const toggleFullscreen = t15;
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowLeft"], {
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== titleHref) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backLink,
            href: titleHref,
            children: [
                t16,
                "Voltar para a obra"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[24] = titleHref;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBookOpen"], {}, void 0, false, {
                    fileName: "[project]/src/components/MangaChapter/page.tsx",
                    lineNumber: 258,
                    columnNumber: 44
                }, this),
                " Leitor de capítulo"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== chapter.mangaInfo.title || $[28] !== titleHref) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: titleHref,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mangaTitle,
            children: chapter.mangaInfo.title
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[27] = chapter.mangaInfo.title;
        $[28] = titleHref;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== chapter.chapterTitle) {
        t20 = chapter.chapterTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "— ",
                chapter.chapterTitle
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 274,
            columnNumber: 35
        }, this);
        $[30] = chapter.chapterTitle;
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== chapter.chapterNumber || $[33] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            id: "chapter-heading",
            children: [
                "Capítulo ",
                chapter.chapterNumber,
                " ",
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[32] = chapter.chapterNumber;
        $[33] = t20;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== chapter.groupInfo.country || $[36] !== chapter.groupInfo.countryFlag) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                chapter.groupInfo.countryFlag,
                " ",
                chapter.groupInfo.country
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[35] = chapter.groupInfo.country;
        $[36] = chapter.groupInfo.countryFlag;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            children: "•"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== chapter.groupInfo.name) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: chapter.groupInfo.name
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[39] = chapter.groupInfo.name;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            children: "•"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] !== pages.length) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                pages.length,
                " páginas"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[42] = pages.length;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== t22 || $[45] !== t24 || $[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metadata,
            children: [
                t22,
                t23,
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[44] = t22;
        $[45] = t24;
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== t19 || $[49] !== t21 || $[50] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBlock,
            children: [
                t18,
                t19,
                t21,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[48] = t19;
        $[49] = t21;
        $[50] = t27;
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    let t29;
    if ($[52] !== t17 || $[53] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerHeader,
            children: [
                t17,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[52] = t17;
        $[53] = t28;
        $[54] = t29;
    } else {
        t29 = $[54];
    }
    const t30 = mode === "scroll" || leftTurnDisabled;
    const t31 = direction === "rtl" ? "Avan\xE7ar p\xE1gina" : "P\xE1gina anterior";
    let t32;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] !== t30 || $[57] !== t31 || $[58] !== turnLeft) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: turnLeft,
            disabled: t30,
            "aria-label": t31,
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[56] = t30;
        $[57] = t31;
        $[58] = turnLeft;
        $[59] = t33;
    } else {
        t33 = $[59];
    }
    let t34;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Página"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[60] = t34;
    } else {
        t34 = $[60];
    }
    let t35;
    if ($[61] !== goToPage) {
        t35 = ({
            "MangaChapter[<select>.onChange]": (event_0)=>goToPage(Number(event_0.target.value))
        })["MangaChapter[<select>.onChange]"];
        $[61] = goToPage;
        $[62] = t35;
    } else {
        t35 = $[62];
    }
    let t36;
    if ($[63] !== pages) {
        t36 = pages.map(_MangaChapterPagesMap);
        $[63] = pages;
        $[64] = t36;
    } else {
        t36 = $[64];
    }
    let t37;
    if ($[65] !== currentPage || $[66] !== t35 || $[67] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: currentPage,
            onChange: t35,
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[65] = currentPage;
        $[66] = t35;
        $[67] = t36;
        $[68] = t37;
    } else {
        t37 = $[68];
    }
    let t38;
    if ($[69] !== pages.length) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "de ",
                pages.length
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[69] = pages.length;
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] !== t37 || $[72] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageSelector,
            children: [
                t34,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[71] = t37;
        $[72] = t38;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    const t40 = mode === "scroll" || rightTurnDisabled;
    const t41 = direction === "rtl" ? "P\xE1gina anterior" : "Avan\xE7ar p\xE1gina";
    let t42;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[74] = t42;
    } else {
        t42 = $[74];
    }
    let t43;
    if ($[75] !== t40 || $[76] !== t41 || $[77] !== turnRight) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: turnRight,
            disabled: t40,
            "aria-label": t41,
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[75] = t40;
        $[76] = t41;
        $[77] = turnRight;
        $[78] = t43;
    } else {
        t43 = $[78];
    }
    let t44;
    if ($[79] !== t33 || $[80] !== t39 || $[81] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageNavigation,
            children: [
                t33,
                t39,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[79] = t33;
        $[80] = t39;
        $[81] = t43;
        $[82] = t44;
    } else {
        t44 = $[82];
    }
    const t45 = direction === "rtl" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "";
    let t46;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = ({
            "MangaChapter[<button>.onClick]": ()=>changeDirection("rtl")
        })["MangaChapter[<button>.onClick]"];
        $[83] = t46;
    } else {
        t46 = $[83];
    }
    const t47 = direction === "rtl";
    let t48;
    let t49;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbArrowAutofitLeft"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Mangá"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[84] = t48;
        $[85] = t49;
    } else {
        t48 = $[84];
        t49 = $[85];
    }
    let t50;
    if ($[86] !== t45 || $[87] !== t47) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t45,
            onClick: t46,
            "aria-pressed": t47,
            title: "Mang\xE1: a seta esquerda avan\xE7a",
            children: [
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[86] = t45;
        $[87] = t47;
        $[88] = t50;
    } else {
        t50 = $[88];
    }
    const t51 = direction === "ltr" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "";
    let t52;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = ({
            "MangaChapter[<button>.onClick]": ()=>changeDirection("ltr")
        })["MangaChapter[<button>.onClick]"];
        $[89] = t52;
    } else {
        t52 = $[89];
    }
    const t53 = direction === "ltr";
    let t54;
    let t55;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbArrowAutofitRight"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Ocidental"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[90] = t54;
        $[91] = t55;
    } else {
        t54 = $[90];
        t55 = $[91];
    }
    let t56;
    if ($[92] !== t51 || $[93] !== t53) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t51,
            onClick: t52,
            "aria-pressed": t53,
            title: "Ocidental: a seta direita avan\xE7a",
            children: [
                t54,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[92] = t51;
        $[93] = t53;
        $[94] = t56;
    } else {
        t56 = $[94];
    }
    let t57;
    if ($[95] !== t50 || $[96] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directionSelector,
            "aria-label": "Dire\xE7\xE3o de leitura",
            children: [
                t50,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, this);
        $[95] = t50;
        $[96] = t56;
        $[97] = t57;
    } else {
        t57 = $[97];
    }
    const t58 = mode === "swap" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "";
    let t59;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = ({
            "MangaChapter[<button>.onClick]": ()=>changeMode("swap")
        })["MangaChapter[<button>.onClick]"];
        $[98] = t59;
    } else {
        t59 = $[98];
    }
    const t60 = mode === "swap";
    let t61;
    let t62;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBookOpen"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Página"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[99] = t61;
        $[100] = t62;
    } else {
        t61 = $[99];
        t62 = $[100];
    }
    let t63;
    if ($[101] !== t58 || $[102] !== t60) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t58,
            onClick: t59,
            "aria-pressed": t60,
            children: [
                t61,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[101] = t58;
        $[102] = t60;
        $[103] = t63;
    } else {
        t63 = $[103];
    }
    const t64 = mode === "scroll" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "";
    let t65;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = ({
            "MangaChapter[<button>.onClick]": ()=>changeMode("scroll")
        })["MangaChapter[<button>.onClick]"];
        $[104] = t65;
    } else {
        t65 = $[104];
    }
    const t66 = mode === "scroll";
    let t67;
    let t68;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbArrowAutofitDown"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Contínuo"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[105] = t67;
        $[106] = t68;
    } else {
        t67 = $[105];
        t68 = $[106];
    }
    let t69;
    if ($[107] !== t64 || $[108] !== t66) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t64,
            onClick: t65,
            "aria-pressed": t66,
            children: [
                t67,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[107] = t64;
        $[108] = t66;
        $[109] = t69;
    } else {
        t69 = $[109];
    }
    let t70;
    if ($[110] !== t63 || $[111] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modeSelector,
            "aria-label": "Modo de leitura",
            children: [
                t63,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, this);
        $[110] = t63;
        $[111] = t69;
        $[112] = t70;
    } else {
        t70 = $[112];
    }
    let t71;
    if ($[113] !== t57 || $[114] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerPreferences,
            children: [
                t57,
                t70
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 601,
            columnNumber: 11
        }, this);
        $[113] = t57;
        $[114] = t70;
        $[115] = t71;
    } else {
        t71 = $[115];
    }
    const t72 = isFullscreen ? "Sair da tela cheia" : "Ler em tela cheia";
    let t73;
    if ($[116] !== isFullscreen) {
        t73 = isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMinimize2"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 611,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMaximize2"], {}, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 611,
            columnNumber: 44
        }, this);
        $[116] = isFullscreen;
        $[117] = t73;
    } else {
        t73 = $[117];
    }
    const t74 = isFullscreen ? "Sair" : "Tela cheia";
    let t75;
    if ($[118] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t74
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[118] = t74;
        $[119] = t75;
    } else {
        t75 = $[119];
    }
    let t76;
    if ($[120] !== t72 || $[121] !== t73 || $[122] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullscreenButton,
            onClick: toggleFullscreen,
            "aria-label": t72,
            children: [
                t73,
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 628,
            columnNumber: 11
        }, this);
        $[120] = t72;
        $[121] = t73;
        $[122] = t75;
        $[123] = t76;
    } else {
        t76 = $[123];
    }
    const t77 = `${progress}%`;
    let t78;
    if ($[124] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressTrack,
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: t77
                }
            }, void 0, false, {
                fileName: "[project]/src/components/MangaChapter/page.tsx",
                lineNumber: 639,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[124] = t77;
        $[125] = t78;
    } else {
        t78 = $[125];
    }
    let t79;
    if ($[126] !== t44 || $[127] !== t71 || $[128] !== t76 || $[129] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
            children: [
                t44,
                t71,
                t76,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 649,
            columnNumber: 11
        }, this);
        $[126] = t44;
        $[127] = t71;
        $[128] = t76;
        $[129] = t78;
        $[130] = t79;
    } else {
        t79 = $[130];
    }
    const t80 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas} ${mode === "scroll" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].continuousCanvas : ""}`;
    let t81;
    if ($[131] !== chapter.chapterNumber || $[132] !== currentPage || $[133] !== direction || $[134] !== isWide || $[135] !== leftTurnDisabled || $[136] !== mode || $[137] !== pages || $[138] !== rightTurnDisabled || $[139] !== turnLeft || $[140] !== turnRight) {
        t81 = mode === "swap" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageStage} ${isWide ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wideStage : ""}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaImage"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mangaPage,
                    fallback: "/ipfs-unavailable.svg",
                    onLoad: {
                        "MangaChapter[<MediaImage>.onLoad]": (event_1)=>setIsWide(event_1.currentTarget.naturalWidth / event_1.currentTarget.naturalHeight > 0.8)
                    }["MangaChapter[<MediaImage>.onLoad]"],
                    source: pages[currentPage],
                    alt: `Página ${currentPage + 1} do capítulo ${chapter.chapterNumber}`
                }, pages[currentPage], false, {
                    fileName: "[project]/src/components/MangaChapter/page.tsx",
                    lineNumber: 661,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnPage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnPrevious}`,
                    onClick: turnLeft,
                    disabled: leftTurnDisabled,
                    "aria-label": direction === "rtl" ? "Avan\xE7ar p\xE1gina" : "P\xE1gina anterior",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {}, void 0, false, {
                        fileName: "[project]/src/components/MangaChapter/page.tsx",
                        lineNumber: 663,
                        columnNumber: 340
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MangaChapter/page.tsx",
                    lineNumber: 663,
                    columnNumber: 148
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnPage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnNext}`,
                    onClick: turnRight,
                    disabled: rightTurnDisabled,
                    "aria-label": direction === "rtl" ? "P\xE1gina anterior" : "Avan\xE7ar p\xE1gina",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
                        fileName: "[project]/src/components/MangaChapter/page.tsx",
                        lineNumber: 663,
                        columnNumber: 556
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MangaChapter/page.tsx",
                    lineNumber: 663,
                    columnNumber: 366
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageBadge,
                    children: [
                        currentPage + 1,
                        " / ",
                        pages.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MangaChapter/page.tsx",
                    lineNumber: 663,
                    columnNumber: 583
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 661,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageStack,
            children: pages.map({
                "MangaChapter[pages.map()]": (page_3, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollPage,
                        "data-reader-page": index_0,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Página ",
                                    index_0 + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MangaChapter/page.tsx",
                                lineNumber: 664,
                                columnNumber: 137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaImage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaImage"], {
                                source: page_3,
                                fallback: "/ipfs-unavailable.svg",
                                alt: `Página ${index_0 + 1} do capítulo ${chapter.chapterNumber}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/MangaChapter/page.tsx",
                                lineNumber: 664,
                                columnNumber: 170
                            }, this)
                        ]
                    }, page_3, true, {
                        fileName: "[project]/src/components/MangaChapter/page.tsx",
                        lineNumber: 664,
                        columnNumber: 59
                    }, this)
            }["MangaChapter[pages.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 663,
            columnNumber: 668
        }, this);
        $[131] = chapter.chapterNumber;
        $[132] = currentPage;
        $[133] = direction;
        $[134] = isWide;
        $[135] = leftTurnDisabled;
        $[136] = mode;
        $[137] = pages;
        $[138] = rightTurnDisabled;
        $[139] = turnLeft;
        $[140] = turnRight;
        $[141] = t81;
    } else {
        t81 = $[141];
    }
    let t82;
    if ($[142] !== t80 || $[143] !== t81) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t80,
            children: t81
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 682,
            columnNumber: 11
        }, this);
        $[142] = t80;
        $[143] = t81;
        $[144] = t82;
    } else {
        t82 = $[144];
    }
    let t83;
    if ($[145] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Você chegou ao fim"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        $[145] = t83;
    } else {
        t83 = $[145];
    }
    let t84;
    if ($[146] !== chapter.chapterNumber) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t83,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: [
                        "Capítulo ",
                        chapter.chapterNumber,
                        " concluído"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MangaChapter/page.tsx",
                    lineNumber: 698,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 698,
            columnNumber: 11
        }, this);
        $[146] = chapter.chapterNumber;
        $[147] = t84;
    } else {
        t84 = $[147];
    }
    let t85;
    if ($[148] !== titleHref) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: titleHref,
            children: "Ver todos os capítulos"
        }, void 0, false, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 706,
            columnNumber: 11
        }, this);
        $[148] = titleHref;
        $[149] = t85;
    } else {
        t85 = $[149];
    }
    let t86;
    if ($[150] !== t84 || $[151] !== t85) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readerFooter,
            children: [
                t84,
                t85
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 714,
            columnNumber: 11
        }, this);
        $[150] = t84;
        $[151] = t85;
        $[152] = t86;
    } else {
        t86 = $[152];
    }
    let t87;
    if ($[153] !== t29 || $[154] !== t79 || $[155] !== t82 || $[156] !== t86) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MangaChapter$2f$mangachapter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reader,
            ref: readerRef,
            "aria-labelledby": "chapter-heading",
            children: [
                t29,
                t79,
                t82,
                t86
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MangaChapter/page.tsx",
            lineNumber: 723,
            columnNumber: 11
        }, this);
        $[153] = t29;
        $[154] = t79;
        $[155] = t82;
        $[156] = t86;
        $[157] = t87;
    } else {
        t87 = $[157];
    }
    return t87;
}
_s(MangaChapter, "jHTREVcvndSSRiMhAPlHeTnoocY=");
_c = MangaChapter;
function _MangaChapterPagesMap(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: index,
        children: index + 1
    }, index, false, {
        fileName: "[project]/src/components/MangaChapter/page.tsx",
        lineNumber: 735,
        columnNumber: 10
    }, this);
}
function _MangaChapterPreviousPageSetCurrentPage(page_1) {
    return Math.max(page_1 - 1, 0);
}
function _MangaChapterUseEffectAnonymousEntriesFind(entry) {
    return entry.isIntersecting;
}
;
var _c;
__turbopack_context__.k.register(_c, "MangaChapter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_11c86fe1._.js.map