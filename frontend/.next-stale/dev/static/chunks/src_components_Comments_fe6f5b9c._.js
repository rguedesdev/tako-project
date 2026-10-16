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
    if ($[0] !== "d3634e3cee90b76304f9c1191dea1bea6bc57274a65617cac0b21d887951ae22") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d3634e3cee90b76304f9c1191dea1bea6bc57274a65617cac0b21d887951ae22";
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
                                    comment.author.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "@",
                                            comment.author.username
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                        dateTime: comment.createdAt,
                                        title: new Date(comment.createdAt).toLocaleString("pt-BR"),
                                        children: timeAgo(comment.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    comment.edited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "· editado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 32
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
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 307,
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
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dangerAction,
                                                onClick: remove,
                                                children: "Excluir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Comments/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 306,
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
                        lineNumber: 320,
                        columnNumber: 28
                    }, this) : editing && currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Composer, {
                        user: currentUser,
                        initialValue: comment.content,
                        submitLabel: "Salvar",
                        onCancel: ()=>setEditing(false),
                        onSubmit: edit
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 320,
                        columnNumber: 109
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentText,
                        children: comment.content
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 320,
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
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: comment.likeCount || "Curtir"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setReplying((open_0)=>!open_0),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageCircle"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Responder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 327,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 322,
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
                        lineNumber: 333,
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
                                        lineNumber: 337,
                                        columnNumber: 34
                                    }, this),
                                    repliesOpen ? "Ocultar respostas" : `Ver ${comment.replyCount} ${comment.replyCount === 1 ? "resposta" : "respostas"}`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 336,
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
                                        lineNumber: 340,
                                        columnNumber: 79
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 340,
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
                                            lineNumber: 342,
                                            columnNumber: 41
                                        }, this)),
                                    repliesOffset !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreReplies,
                                        onClick: ()=>loadReplies(repliesOffset),
                                        disabled: repliesLoading,
                                        children: "Carregar mais respostas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 341,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 335,
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
                                lineNumber: 426,
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
                                lineNumber: 427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortControl,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ordenar por"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 430,
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
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "OLDEST",
                                        children: "Mais antigos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MOST_LIKED",
                                        children: "Mais curtidos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 424,
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
                        lineNumber: 440,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Verificando sua sessão…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 439,
                columnNumber: 22
            }, this) : currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Composer, {
                user: currentUser,
                onSubmit: createComment
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 442,
                columnNumber: 32
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signInPrompt,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFallback} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].small}`,
                        children: "?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/signin?next=${encodeURIComponent(pathname)}`,
                                children: "Entre na sua conta"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 444,
                                columnNumber: 14
                            }, this),
                            " para participar da conversa."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 442,
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
                                lineNumber: 448,
                                columnNumber: 78
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {}, void 0, false, {
                                        fileName: "[project]/src/components/Comments/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 96
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Comments/page.tsx",
                                lineNumber: 448,
                                columnNumber: 86
                            }, this)
                        ]
                    }, item, true, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 448,
                        columnNumber: 34
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 447,
                columnNumber: 18
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorState,
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Não foi possível carregar os comentários."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 451,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>loadComments(0),
                        children: "Tentar novamente"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 449,
                columnNumber: 26
            }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Comments$2f$comments$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageCircle"], {
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Ainda não há comentários."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Seja a primeira pessoa a comentar este capítulo."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Comments/page.tsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 453,
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
                        lineNumber: 458,
                        columnNumber: 36
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 457,
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
                        lineNumber: 465,
                        columnNumber: 27
                    }, this),
                    loadingMore ? "Carregando" : "Carregar mais comentários"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Comments/page.tsx",
                lineNumber: 464,
                columnNumber: 53
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Comments/page.tsx",
        lineNumber: 423,
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
]);

//# sourceMappingURL=src_components_Comments_fe6f5b9c._.js.map