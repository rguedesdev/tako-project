"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { FiHeart, FiLoader, FiMessageCircle, FiMoreHorizontal } from "react-icons/fi";

import { useUser } from "@/context/UserContext";
import { graphqlRequest } from "@/lib/graphql";
import styles from "./comments.module.css";

const COMMENT_FIELDS = `
  id content parentCommentId createdAt updatedAt edited deleted
  likeCount likedByMe replyCount
  author { id name username profilePicture }
`;

type Sort = "NEWEST" | "OLDEST" | "MOST_LIKED";

interface User {
  id: string;
  name: string;
  username: string;
  profilePicture?: string | null;
}

interface Comment {
  id: string;
  content: string;
  parentCommentId?: string | null;
  createdAt: string;
  updatedAt: string;
  edited: boolean;
  deleted: boolean;
  likeCount: number;
  likedByMe: boolean;
  replyCount: number;
  author: User;
}

interface Connection {
  items: Comment[];
  totalCount: number;
  nextOffset?: number | null;
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Algo deu errado. Tente novamente.";
}

function timeAgo(value: string) {
  const timestamp = new Date(value).getTime();
  const seconds = Math.round((timestamp - Date.now()) / 1000);
  const formatter = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
  const ranges: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 31_536_000],
    ["month", 2_592_000],
    ["day", 86_400],
    ["hour", 3_600],
    ["minute", 60],
  ];
  for (const [unit, size] of ranges) {
    if (Math.abs(seconds) >= size) return formatter.format(Math.round(seconds / size), unit);
  }
  return formatter.format(seconds, "second");
}

function initials(user?: User | null) {
  return (user?.name || user?.username || "?")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Avatar({ user, size = "normal" }: { user?: User | null; size?: "normal" | "small" }) {
  return user?.profilePicture ? (
    // User-uploaded URLs are runtime data, so a regular img avoids coupling to Next image hosts.
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`${styles.avatar} ${styles[size]}`} src={user.profilePicture} alt="" />
  ) : (
    <span className={`${styles.avatar} ${styles.avatarFallback} ${styles[size]}`} aria-hidden="true">
      {initials(user)}
    </span>
  );
}

function Composer({
  user,
  autoFocus = false,
  initialValue = "",
  placeholder = "Escreva um comentário…",
  submitLabel = "Comentar",
  onCancel,
  onSubmit,
}: {
  user: User;
  autoFocus?: boolean;
  initialValue?: string;
  placeholder?: string;
  submitLabel?: string;
  onCancel?: () => void;
  onSubmit: (content: string) => Promise<void>;
}) {
  const [content, setContent] = useState(initialValue);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const normalized = content.trim();

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!normalized || submitting || normalized.length > 2000) return;
    setSubmitting(true);
    setError("");
    try {
      await onSubmit(normalized);
      setContent("");
    } catch (submitError) {
      setError(errorMessage(submitError));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.composer} onSubmit={submit}>
      <Avatar user={user} size="small" />
      <div className={styles.composerBody}>
        <textarea
          autoFocus={autoFocus}
          maxLength={2000}
          rows={initialValue ? 3 : 2}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        <div className={styles.composerFooter}>
          <span className={normalized.length > 1850 ? styles.characterWarning : styles.characterCount}>
            {content.length}/2000
          </span>
          {onCancel && (
            <button type="button" className={styles.textButton} onClick={onCancel} disabled={submitting}>
              Cancelar
            </button>
          )}
          <button className={styles.primaryButton} disabled={!normalized || submitting}>
            {submitting && <FiLoader className={styles.spinner} aria-hidden="true" />}
            {submitting ? "Enviando" : submitLabel}
          </button>
        </div>
        {error && <p className={styles.inlineError} role="alert">{error}</p>}
      </div>
    </form>
  );
}

function CommentItem({
  comment: initialComment,
  chapterId,
  currentUser,
  token,
  isReply = false,
  rootCommentId,
  onDeleted,
}: {
  comment: Comment;
  chapterId: string;
  currentUser: User | null;
  token: string | null;
  isReply?: boolean;
  rootCommentId?: string;
  onDeleted?: (comment: Comment) => void;
}) {
  const [comment, setComment] = useState(initialComment);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [replying, setReplying] = useState(false);
  const [likePending, setLikePending] = useState(false);
  const [repliesOpen, setRepliesOpen] = useState(false);
  const [replies, setReplies] = useState<Comment[]>([]);
  const [repliesOffset, setRepliesOffset] = useState<number | null>(0);
  const [repliesLoading, setRepliesLoading] = useState(false);
  const [repliesError, setRepliesError] = useState("");
  const isOwner = currentUser?.id === comment.author.id;
  const replyParentId = rootCommentId ?? comment.id;

  useEffect(() => setComment(initialComment), [initialComment]);

  async function toggleLike() {
    if (!currentUser || likePending || comment.deleted) return;
    const previous = comment;
    setLikePending(true);
    setComment((value) => ({
      ...value,
      likedByMe: !value.likedByMe,
      likeCount: Math.max(0, value.likeCount + (value.likedByMe ? -1 : 1)),
    }));
    try {
      const data = await graphqlRequest<{
        toggleCommentLike: { liked: boolean; likeCount: number };
      }>(
        `mutation ToggleLike($commentId: ID!) {
          toggleCommentLike(commentId: $commentId) { liked likeCount }
        }`,
        { commentId: comment.id },
        token,
      );
      setComment((value) => ({ ...value, ...data.toggleCommentLike, likedByMe: data.toggleCommentLike.liked }));
    } catch {
      setComment(previous);
    } finally {
      setLikePending(false);
    }
  }

  const loadReplies = useCallback(async (offset = 0) => {
    setRepliesLoading(true);
    setRepliesError("");
    try {
      const data = await graphqlRequest<{ commentReplies: Connection }>(
        `query Replies($commentId: ID!, $offset: Int!) {
          commentReplies(commentId: $commentId, offset: $offset, limit: 5) {
            items { ${COMMENT_FIELDS} } totalCount nextOffset
          }
        }`,
        { commentId: comment.id, offset },
        token,
      );
      setReplies((current) => {
        const combined = offset === 0 ? data.commentReplies.items : [...current, ...data.commentReplies.items];
        return combined.filter((item, index) => combined.findIndex((candidate) => candidate.id === item.id) === index);
      });
      setRepliesOffset(data.commentReplies.nextOffset ?? null);
      setComment((current) => ({ ...current, replyCount: data.commentReplies.totalCount }));
      setRepliesOpen(true);
    } catch (loadError) {
      setRepliesError(errorMessage(loadError));
    } finally {
      setRepliesLoading(false);
    }
  }, [comment.id, token]);

  async function addReply(content: string) {
    const data = await graphqlRequest<{ createComment: Comment }>(
      `mutation Reply($chapterId: ID!, $parentId: ID!, $content: String!) {
        createComment(chapterId: $chapterId, parentCommentId: $parentId, content: $content) {
          ${COMMENT_FIELDS}
        }
      }`,
      { chapterId, parentId: replyParentId, content },
      token,
    );
    if (isReply) {
      onDeleted?.(data.createComment);
    } else if (comment.replyCount > 0 && replies.length === 0) {
      // Preserve immediate feedback while also hydrating replies that were still collapsed.
      await loadReplies(0);
      setReplies((current) =>
        current.some((reply) => reply.id === data.createComment.id)
          ? current
          : [...current, data.createComment],
      );
    } else {
      setReplies((current) => [...current, data.createComment]);
      setComment((current) => ({ ...current, replyCount: current.replyCount + 1 }));
      setRepliesOpen(true);
    }
    setReplying(false);
  }

  async function edit(content: string) {
    const data = await graphqlRequest<{ editComment: Comment }>(
      `mutation EditComment($commentId: ID!, $content: String!) {
        editComment(commentId: $commentId, content: $content) { ${COMMENT_FIELDS} }
      }`,
      { commentId: comment.id, content },
      token,
    );
    setComment(data.editComment);
    setEditing(false);
  }

  async function remove() {
    setMenuOpen(false);
    if (!window.confirm("Excluir este comentário? Esta ação não pode ser desfeita.")) return;
    try {
      const data = await graphqlRequest<{ deleteComment: Comment }>(
        `mutation DeleteComment($commentId: ID!) {
          deleteComment(commentId: $commentId) { ${COMMENT_FIELDS} }
        }`,
        { commentId: comment.id },
        token,
      );
      if (comment.replyCount > 0 && !isReply) setComment(data.deleteComment);
      else onDeleted?.(data.deleteComment);
    } catch (deleteError) {
      window.alert(errorMessage(deleteError));
    }
  }

  function receiveReplyFromNested(newReply: Comment) {
    setReplies((current) => [...current, newReply]);
    setComment((current) => ({ ...current, replyCount: current.replyCount + 1 }));
    setRepliesOpen(true);
  }

  return (
    <article className={`${styles.comment} ${isReply ? styles.reply : ""}`}>
      <Avatar user={comment.author} size={isReply ? "small" : "normal"} />
      <div className={styles.commentBody}>
        <header className={styles.commentHeader}>
          <div className={styles.identity}>
            <strong>{comment.author.name}</strong>
            <div className={styles.identityMeta}>
              {comment.author.username && <span>@{comment.author.username}</span>}
              <span aria-hidden="true">·</span>
              <time dateTime={comment.createdAt} title={new Date(comment.createdAt).toLocaleString("pt-BR")}>
                {timeAgo(comment.createdAt)}
              </time>
              {comment.edited && <span>· editado</span>}
            </div>
          </div>
          {isOwner && !comment.deleted && (
            <div className={styles.menuWrap}>
              <button className={styles.iconButton} aria-label="Ações do comentário" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
                <FiMoreHorizontal />
              </button>
              {menuOpen && (
                <div className={styles.menu}>
                  <button onClick={() => { setEditing(true); setMenuOpen(false); }}>Editar</button>
                  <button className={styles.dangerAction} onClick={remove}>Excluir</button>
                </div>
              )}
            </div>
          )}
        </header>

        {comment.deleted ? (
          <p className={styles.removed}>Comentário removido</p>
        ) : editing && currentUser ? (
          <Composer user={currentUser} initialValue={comment.content} submitLabel="Salvar" onCancel={() => setEditing(false)} onSubmit={edit} />
        ) : (
          <p className={styles.commentText}>{comment.content}</p>
        )}

        {!editing && !comment.deleted && (
          <div className={styles.actions}>
            <button className={comment.likedByMe ? styles.liked : ""} onClick={toggleLike} disabled={!currentUser || likePending} title={currentUser ? undefined : "Entre para curtir"} aria-label={comment.likedByMe ? "Remover curtida" : "Curtir"}>
              <FiHeart aria-hidden="true" />
              <span>{comment.likeCount || "Curtir"}</span>
            </button>
            {currentUser && (
              <button onClick={() => setReplying((open) => !open)}>
                <FiMessageCircle aria-hidden="true" />
                <span>Responder</span>
              </button>
            )}
          </div>
        )}

        {replying && currentUser && (
          <Composer
            user={currentUser}
            autoFocus
            placeholder={`Responder a @${comment.author.username}…`}
            onCancel={() => setReplying(false)}
            onSubmit={(content) => addReply(isReply ? `@${comment.author.username} ${content}` : content)}
          />
        )}

        {!isReply && comment.replyCount > 0 && (
          <div className={styles.repliesBlock}>
            <button
              className={styles.repliesToggle}
              onClick={() => (repliesOpen ? setRepliesOpen(false) : replies.length ? setRepliesOpen(true) : loadReplies(0))}
              disabled={repliesLoading}
            >
              {repliesLoading && <FiLoader className={styles.spinner} />}
              {repliesOpen ? "Ocultar respostas" : `Ver ${comment.replyCount} ${comment.replyCount === 1 ? "resposta" : "respostas"}`}
            </button>
            {repliesError && (
              <p className={styles.inlineError}>{repliesError} <button onClick={() => loadReplies(0)}>Tentar novamente</button></p>
            )}
            {repliesOpen && (
              <div className={styles.repliesList}>
                {replies.map((reply) => (
                  <CommentItem
                    key={reply.id}
                    comment={reply}
                    chapterId={chapterId}
                    currentUser={currentUser}
                    token={token}
                    isReply
                    rootCommentId={comment.id}
                    onDeleted={(result) => {
                      if (result.id === reply.id) {
                        setReplies((current) => current.filter((item) => item.id !== reply.id));
                        setComment((current) => ({ ...current, replyCount: Math.max(0, current.replyCount - 1) }));
                      } else receiveReplyFromNested(result);
                    }}
                  />
                ))}
                {repliesOffset !== null && (
                  <button className={styles.loadMoreReplies} onClick={() => loadReplies(repliesOffset)} disabled={repliesLoading}>
                    Carregar mais respostas
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Comments({ chapterId }: { chapterId: string }) {
  const pathname = usePathname();
  const { authenticatedUser, authLoading, authToken: token } = useUser();
  const currentUser: User | null = authenticatedUser;
  const [comments, setComments] = useState<Comment[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [nextOffset, setNextOffset] = useState<number | null>(null);
  const [sort, setSort] = useState<Sort>("NEWEST");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const requestId = useRef(0);

  const loadComments = useCallback(async (offset = 0, selectedSort = sort) => {
    const currentRequest = ++requestId.current;
    if (offset === 0) setLoading(true);
    else setLoadingMore(true);
    setError("");
    try {
      const data = await graphqlRequest<{ chapterComments: Connection }>(
        `query ChapterComments($chapterId: ID!, $sort: CommentSort!, $offset: Int!) {
          chapterComments(chapterId: $chapterId, sort: $sort, offset: $offset, limit: 10) {
            items { ${COMMENT_FIELDS} } totalCount nextOffset
          }
        }`,
        { chapterId, sort: selectedSort, offset },
        token,
      );
      if (currentRequest !== requestId.current) return;
      setComments((current) => (offset === 0 ? data.chapterComments.items : [...current, ...data.chapterComments.items]));
      setTotalCount(data.chapterComments.totalCount);
      setNextOffset(data.chapterComments.nextOffset ?? null);
    } catch (loadError) {
      if (currentRequest === requestId.current) setError(errorMessage(loadError));
    } finally {
      if (currentRequest === requestId.current) { setLoading(false); setLoadingMore(false); }
    }
  }, [chapterId, sort, token]);

  useEffect(() => { loadComments(0, sort); }, [chapterId, sort, token, loadComments]);

  async function createComment(content: string) {
    const data = await graphqlRequest<{ createComment: Comment }>(
      `mutation CreateComment($chapterId: ID!, $content: String!) {
        createComment(chapterId: $chapterId, content: $content) { ${COMMENT_FIELDS} }
      }`,
      { chapterId, content },
      token,
    );
    setComments((current) =>
      sort === "OLDEST" ? [...current, data.createComment] : [data.createComment, ...current],
    );
    setTotalCount((count) => count + 1);
  }

  return (
    <section className={styles.commentsSection} aria-labelledby="comments-title">
      <div className={styles.sectionHeader}>
        <div>
          <h2 id="comments-title">Comentários</h2>
          <p>{totalCount} {totalCount === 1 ? "comentário" : "comentários"}</p>
        </div>
        <label className={styles.sortControl}>
          <span>Ordenar por</span>
          <select value={sort} onChange={(event) => setSort(event.target.value as Sort)}>
            <option value="NEWEST">Mais recentes</option>
            <option value="OLDEST">Mais antigos</option>
            <option value="MOST_LIKED">Mais curtidos</option>
          </select>
        </label>
      </div>

      {authLoading ? (
        <div className={styles.signInPrompt} aria-label="Verificando sessão">
          <span className={`${styles.avatar} ${styles.avatarFallback} ${styles.small}`}>…</span>
          <p>Verificando sua sessão…</p>
        </div>
      ) : currentUser ? (
        <Composer user={currentUser} onSubmit={createComment} />
      ) : (
        <div className={styles.signInPrompt}>
          <span className={`${styles.avatar} ${styles.avatarFallback} ${styles.small}`}>?</span>
          <p><Link href={`/signin?next=${encodeURIComponent(pathname)}`}>Entre na sua conta</Link> para participar da conversa.</p>
        </div>
      )}

      {loading ? (
        <div className={styles.skeletonList} aria-label="Carregando comentários">
          {[0, 1, 2].map((item) => <div className={styles.skeleton} key={item}><span /><div><i /><b /></div></div>)}
        </div>
      ) : error ? (
        <div className={styles.errorState} role="alert">
          <p>Não foi possível carregar os comentários.</p>
          <span>{error}</span>
          <button onClick={() => loadComments(0)}>Tentar novamente</button>
        </div>
      ) : comments.length === 0 ? (
        <div className={styles.emptyState}>
          <FiMessageCircle aria-hidden="true" />
          <p>Ainda não há comentários.</p>
          <span>Seja a primeira pessoa a comentar este capítulo.</span>
        </div>
      ) : (
        <div className={styles.commentList}>
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              chapterId={chapterId}
              currentUser={currentUser}
              token={token}
              onDeleted={() => {
                setComments((current) => current.filter((item) => item.id !== comment.id));
                setTotalCount((count) => Math.max(0, count - 1));
              }}
            />
          ))}
        </div>
      )}

      {!loading && !error && nextOffset !== null && (
        <button className={styles.loadMore} disabled={loadingMore} onClick={() => loadComments(nextOffset)}>
          {loadingMore && <FiLoader className={styles.spinner} />}
          {loadingMore ? "Carregando" : "Carregar mais comentários"}
        </button>
      )}
    </section>
  );
}
