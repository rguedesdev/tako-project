"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BiChat } from "react-icons/bi";
import { FiHeart, FiLoader, FiMessageCircle, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";

import { useUser } from "@/context/UserContext";
import { useToast } from "@/context/ToastContext";
import { useShopInventory } from "@/hooks/useShopInventory";
import { graphqlRequest } from "@/lib/graphql";
import { SHOP_ITEMS } from "@/lib/otamart";
import styles from "./comments.module.css";

const COMMENT_FIELDS = `
  id content parentCommentId createdAt updatedAt edited deleted
  likeCount likedByMe replyCount
  author { id name username profilePicture }
`;
const commentSchema = z.object({ content: z.string().trim().min(1, "Escreva algo antes de publicar.").max(2000, "O comentário pode ter no máximo 2000 caracteres.") }).strict();

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

function Avatar({ user, size = "normal", frame }: { user?: User | null; size?: "normal" | "small"; frame?: string }) {
  return user?.profilePicture ? (
    // User-uploaded URLs are runtime data, so a regular img avoids coupling to Next image hosts.
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`${styles.avatar} ${styles[size]}`} data-frame={frame} src={user.profilePicture} alt="" />
  ) : (
    <span className={`${styles.avatar} ${styles.avatarFallback} ${styles[size]}`} data-frame={frame} aria-hidden="true">
      {initials(user)}
    </span>
  );
}

function Composer({
  user,
  frame,
  autoFocus = false,
  initialValue = "",
  placeholder = "Escreva um comentário…",
  submitLabel = "Comentar",
  animated = false,
  onCancel,
  onSubmit,
}: {
  user: User;
  frame?: string;
  autoFocus?: boolean;
  initialValue?: string;
  placeholder?: string;
  submitLabel?: string;
  animated?: boolean;
  onCancel?: () => void;
  onSubmit: (content: string) => Promise<void>;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema), mode: "onTouched", defaultValues: { content: initialValue },
  });
  const content = watch("content");
  const normalized = content.trim();

  async function submit({ content: normalizedContent }: z.infer<typeof commentSchema>) {
    if (submitting) return;
    setSubmitting(true);
    setError("");
    try {
      await onSubmit(normalizedContent);
      reset({ content: "" });
    } catch (submitError) {
      setError(errorMessage(submitError));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={`${styles.composer} ${animated ? styles.composerEnter : ""}`} autoComplete="off" noValidate onSubmit={handleSubmit(submit)}>
      <Avatar user={user} size="small" frame={frame} />
      <div className={styles.composerBody}>
        <div className={styles.textareaWrap}>
          <textarea
            autoFocus={autoFocus}
            maxLength={2000}
            rows={initialValue ? 3 : 2}
            autoComplete="off"
            aria-invalid={Boolean(errors.content)}
            {...register("content")}
            placeholder={placeholder}
            aria-label={placeholder}
          />
        </div>
        {(errors.content?.message || error) && <p className={styles.inlineError} role="alert">{errors.content?.message ?? error}</p>}
        <div className={styles.composerFooter}>
          <div className={styles.composerStatus}>
            <span className={normalized.length > 1850 ? styles.characterWarning : styles.characterCount} aria-live="polite">
              {content.length}/2000
            </span>
          </div>
          <div className={styles.composerActions}>
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
        </div>
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
  equippedFrame,
  equippedFont,
}: {
  comment: Comment;
  chapterId: string;
  currentUser: User | null;
  token: string | null;
  isReply?: boolean;
  rootCommentId?: string;
  onDeleted?: (comment: Comment) => void;
  equippedFrame?: string;
  equippedFont?: string;
}) {
  const [comment, setComment] = useState(initialComment);
  const [menuOpen, setMenuOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deletePending, setDeletePending] = useState(false);
  const [editing, setEditing] = useState(false);
  const [replying, setReplying] = useState(false);
  const [likePending, setLikePending] = useState(false);
  const [repliesOpen, setRepliesOpen] = useState(false);
  const [replies, setReplies] = useState<Comment[]>([]);
  const [repliesOffset, setRepliesOffset] = useState<number | null>(0);
  const [repliesLoading, setRepliesLoading] = useState(false);
  const [repliesError, setRepliesError] = useState("");
  const { showError } = useToast();
  const isOwner = currentUser?.id === comment.author.id;
  const isCurrentAuthor = currentUser?.id === comment.author.id;
  const authorFrame = isCurrentAuthor ? equippedFrame : undefined;
  const authorFont = isCurrentAuthor ? equippedFont : undefined;
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

  function remove() {
    setMenuOpen(false);
    setDeleteConfirmOpen(true);
  }

  async function confirmRemove() {
    if (deletePending) return;
    setDeletePending(true);
    try {
      const data = await graphqlRequest<{ deleteComment: Comment }>(
        `mutation DeleteComment($commentId: ID!) {
          deleteComment(commentId: $commentId) { ${COMMENT_FIELDS} }
        }`,
        { commentId: comment.id },
        token,
      );
      setDeleteConfirmOpen(false);
      if (comment.replyCount > 0 && !isReply) setComment(data.deleteComment);
      else onDeleted?.(data.deleteComment);
    } catch (deleteError) {
      setDeleteConfirmOpen(false);
      showError(deleteError, "Não foi possível excluir este comentário. Tente novamente.");
    } finally {
      setDeletePending(false);
    }
  }

  function receiveReplyFromNested(newReply: Comment) {
    setReplies((current) => [...current, newReply]);
    setComment((current) => ({ ...current, replyCount: current.replyCount + 1 }));
    setRepliesOpen(true);
  }

  return (
    <article className={`${styles.comment} ${isReply ? styles.reply : ""}`}>
      <Avatar user={comment.author} size={isReply ? "small" : "normal"} frame={authorFrame} />
      <div className={styles.commentBody}>
        <header className={styles.commentHeader}>
          <div className={styles.identity}>
            <strong><Link className={styles.identityName} data-font={authorFont} href={`/reader/${encodeURIComponent(comment.author.username)}`} aria-label={`Ver perfil de ${comment.author.name}`}>
              {comment.author.name}
            </Link></strong>
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
              <button className={styles.replyAction} onClick={() => setReplying((open) => !open)}>
                <BiChat aria-hidden="true" />
                <span>Responder</span>
              </button>
            )}
          </div>
        )}

        {replying && currentUser && (
          <Composer
            user={currentUser}
            autoFocus
            animated
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
                    equippedFrame={equippedFrame}
                    equippedFont={equippedFont}
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
      {deleteConfirmOpen && (
        <div className={styles.deleteBackdrop}>
          <section className={styles.deleteDialog} role="alertdialog" aria-modal="true" aria-labelledby={`delete-comment-title-${comment.id}`} aria-describedby={`delete-comment-description-${comment.id}`} onKeyDown={(event) => { if (event.key === "Escape" && !deletePending) setDeleteConfirmOpen(false); }}>
            <span className={styles.deleteIcon} aria-hidden="true"><FiTrash2 /></span>
            <h2 id={`delete-comment-title-${comment.id}`}>Excluir comentário?</h2>
            <p id={`delete-comment-description-${comment.id}`}>O comentário será removido. Essa ação não pode ser desfeita.</p>
            <div className={styles.deleteActions}>
              <button type="button" className={styles.deleteCancel} onClick={() => setDeleteConfirmOpen(false)} disabled={deletePending} autoFocus>Cancelar</button>
              <button type="button" className={styles.deleteConfirm} onClick={() => void confirmRemove()} disabled={deletePending}>
                {deletePending ? <><FiLoader className={styles.spinner} aria-hidden="true" /> Excluindo…</> : "Excluir comentário"}
              </button>
            </div>
          </section>
        </div>
      )}
    </article>
  );
}

export function Comments({ chapterId }: { chapterId: string }) {
  const pathname = usePathname();
  const { authenticatedUser, authLoading, authToken: token } = useUser();
  const currentUser: User | null = authenticatedUser;
  const { inventory } = useShopInventory(authenticatedUser?.id ?? "demo", authenticatedUser?.username);
  const equippedFrame = SHOP_ITEMS.find((item) => item.id === inventory.equipped.frame)?.className;
  const equippedFont = SHOP_ITEMS.find((item) => item.id === inventory.equipped.font)?.className;
  const [comments, setComments] = useState<Comment[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [nextOffset, setNextOffset] = useState<number | null>(null);
  const [sort, setSort] = useState<Sort>("NEWEST");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const requestId = useRef(0);
  const hasLoadedComments = useRef(false);

  const loadComments = useCallback(async (offset = 0, selectedSort = sort) => {
    const currentRequest = ++requestId.current;
    if (offset === 0 && !hasLoadedComments.current) setLoading(true);
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
      if (currentRequest === requestId.current) {
        hasLoadedComments.current = true;
        setLoading(false);
        setLoadingMore(false);
      }
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
        <Composer user={currentUser} frame={equippedFrame} onSubmit={createComment} />
      ) : (
        <div className={styles.signInPrompt}>
          <span className={`${styles.avatar} ${styles.avatarFallback} ${styles.small} ${styles.signInIcon}`} aria-hidden="true"><BiChat /></span>
          <p><Link href={`/signin?next=${encodeURIComponent(pathname)}`}>Acesse sua conta</Link> para participar da conversa.</p>
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
              equippedFrame={equippedFrame}
              equippedFont={equippedFont}
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
