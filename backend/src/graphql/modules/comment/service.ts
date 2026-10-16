import { Types, type PipelineStage } from "mongoose";

import { ChapterModel } from "../chapter/model";
import { UserModel } from "../user/model";
import { CommentLikeModel, CommentModel } from "./model";
import { CommentValidation } from "./validation";

type CommentSort = "NEWEST" | "OLDEST" | "MOST_LIKED";

const recentCommentsByUser = new Map<string, number[]>();

function requireUser(userId?: string) {
  if (!userId) throw new Error("Faça login para participar dos comentários.");
  CommentValidation.id(userId, "Usuário");
  return userId;
}

function enforceCreateRateLimit(userId: string) {
  const now = Date.now();
  const windowStart = now - 60_000;
  const recent = (recentCommentsByUser.get(userId) ?? []).filter(
    (timestamp) => timestamp > windowStart,
  );

  if (recent.length >= 10) {
    throw new Error("Você publicou muitos comentários. Aguarde um minuto e tente novamente.");
  }

  recent.push(now);
  recentCommentsByUser.set(userId, recent);
}

function normalizeComment(document: any) {
  const createdAt = new Date(document.createdAt);
  const updatedAt = new Date(document.updatedAt);

  return {
    id: document._id.toString(),
    content: document.deletedAt ? "" : document.content,
    author: {
      id: document.author._id.toString(),
      name: document.author.name,
      username: document.author.username,
      profilePicture: document.author.profilePicture || null,
      profilePictureID: document.author.profilePictureID?.toString() ?? null,
    },
    parentCommentId: document.parentComment?.toString() ?? null,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    edited: Boolean(document.editedAt) && !document.deletedAt,
    deleted: Boolean(document.deletedAt),
    likeCount: Number(document.likeCount ?? 0),
    likedByMe: Boolean(document.likedByMe),
    replyCount: Number(document.replyCount ?? 0),
  };
}

function enrichmentStages(currentUserId?: string): PipelineStage[] {
  const userObjectId = currentUserId ? new Types.ObjectId(currentUserId) : null;

  return [
    {
      $lookup: {
        from: CommentLikeModel.collection.name,
        localField: "_id",
        foreignField: "comment",
        as: "likes",
      },
    },
    {
      $lookup: {
        from: CommentModel.collection.name,
        let: { commentId: "$_id" },
        pipeline: [
          { $match: { $expr: { $eq: ["$parentComment", "$$commentId"] } } },
          { $count: "count" },
        ],
        as: "replyStats",
      },
    },
    {
      $lookup: {
        from: UserModel.collection.name,
        localField: "author",
        foreignField: "_id",
        pipeline: [{ $project: { name: 1, username: 1, profilePicture: 1, profilePictureID: 1 } }],
        as: "author",
      },
    },
    { $unwind: "$author" },
    {
      $addFields: {
        likeCount: { $size: "$likes" },
        replyCount: {
          $ifNull: [{ $arrayElemAt: ["$replyStats.count", 0] }, 0],
        },
        likedByMe: userObjectId
          ? { $in: [userObjectId, "$likes.user"] }
          : false,
      },
    },
    { $project: { likes: 0, replyStats: 0 } },
  ];
}

async function getCommentById(commentId: string, currentUserId?: string) {
  const [comment] = await CommentModel.aggregate([
    { $match: { _id: new Types.ObjectId(commentId) } },
    ...enrichmentStages(currentUserId),
  ]);

  if (!comment) throw new Error("Comentário não encontrado.");
  return normalizeComment(comment);
}

class CommentService {
  static async listChapterComments(
    chapterId: string,
    sort: CommentSort,
    offset: number,
    limit: number,
    currentUserId?: string,
  ) {
    CommentValidation.id(chapterId, "Capítulo");
    CommentValidation.pagination(offset, limit);

    const chapterObjectId = new Types.ObjectId(chapterId);
    const match = { chapter: chapterObjectId, parentComment: null };
    const validSort: CommentSort = ["NEWEST", "OLDEST", "MOST_LIKED"].includes(sort)
      ? sort
      : "NEWEST";
    const sortStage: Record<string, 1 | -1> =
      validSort === "OLDEST"
        ? { createdAt: 1 as const, _id: 1 as const }
        : validSort === "MOST_LIKED"
          ? { likeCount: -1 as const, createdAt: -1 as const, _id: -1 as const }
          : { createdAt: -1 as const, _id: -1 as const };

    const [documents, totalCount] = await Promise.all([
      CommentModel.aggregate([
        { $match: match },
        ...enrichmentStages(currentUserId),
        { $sort: sortStage },
        { $skip: offset },
        { $limit: limit + 1 },
      ]),
      CommentModel.countDocuments(match),
    ]);

    const hasMore = documents.length > limit;
    const items = documents.slice(0, limit).map(normalizeComment);
    return {
      items,
      totalCount,
      nextOffset: hasMore ? offset + items.length : null,
    };
  }

  static async listReplies(
    commentId: string,
    offset: number,
    limit: number,
    currentUserId?: string,
  ) {
    CommentValidation.id(commentId, "Comentário");
    CommentValidation.pagination(offset, limit);
    const parentComment = new Types.ObjectId(commentId);
    const match = { parentComment };

    const [documents, totalCount] = await Promise.all([
      CommentModel.aggregate([
        { $match: match },
        ...enrichmentStages(currentUserId),
        { $sort: { createdAt: 1, _id: 1 } },
        { $skip: offset },
        { $limit: limit + 1 },
      ]),
      CommentModel.countDocuments(match),
    ]);

    const hasMore = documents.length > limit;
    const items = documents.slice(0, limit).map(normalizeComment);
    return {
      items,
      totalCount,
      nextOffset: hasMore ? offset + items.length : null,
    };
  }

  static async create(
    chapterId: string,
    contentValue: unknown,
    parentCommentId: string | undefined,
    currentUserId?: string,
  ) {
    const userId = requireUser(currentUserId);
    CommentValidation.id(chapterId, "Capítulo");
    const content = CommentValidation.content(contentValue);

    const chapter = await ChapterModel.exists({ _id: chapterId });
    if (!chapter) throw new Error("O capítulo informado não existe.");

    let normalizedParentId: Types.ObjectId | null = null;
    if (parentCommentId) {
      CommentValidation.id(parentCommentId, "Comentário pai");
      const parent = await CommentModel.findById(parentCommentId)
        .select("chapter parentComment")
        .lean();

      if (!parent || parent.chapter.toString() !== chapterId) {
        throw new Error("O comentário respondido não pertence a este capítulo.");
      }

      // Replies to replies remain in the same visual group instead of nesting again.
      normalizedParentId = parent.parentComment ?? parent._id;
    }

    enforceCreateRateLimit(userId);
    const comment = await CommentModel.create({
      chapter: chapterId,
      author: userId,
      parentComment: normalizedParentId,
      content,
    });

    return getCommentById(comment._id.toString(), userId);
  }

  static async edit(commentId: string, contentValue: unknown, currentUserId?: string) {
    const userId = requireUser(currentUserId);
    CommentValidation.id(commentId, "Comentário");
    const content = CommentValidation.content(contentValue);

    const comment = await CommentModel.findOneAndUpdate(
      { _id: commentId, author: userId, deletedAt: null },
      { $set: { content, editedAt: new Date() } },
      { returnDocument: "after" },
    );

    if (!comment) {
      throw new Error("Comentário não encontrado ou você não pode editá-lo.");
    }
    return getCommentById(commentId, userId);
  }

  static async delete(commentId: string, currentUserId?: string) {
    const userId = requireUser(currentUserId);
    CommentValidation.id(commentId, "Comentário");

    const [comment, user] = await Promise.all([
      CommentModel.findById(commentId),
      UserModel.findById(userId).select("accountType").lean(),
    ]);
    if (!comment) throw new Error("Comentário não encontrado.");

    const isAuthor = comment.author.toString() === userId;
    const isModerator = user?.accountType === "AEGIS";
    if (!isAuthor && !isModerator) {
      throw new Error("Você não pode excluir este comentário.");
    }

    const replyCount = await CommentModel.countDocuments({ parentComment: comment._id });
    if (!comment.parentComment && replyCount > 0) {
      comment.deletedAt = new Date();
      await comment.save();
    } else {
      await Promise.all([
        CommentModel.deleteOne({ _id: comment._id }),
        CommentLikeModel.deleteMany({ comment: comment._id }),
      ]);
      // Return a stable tombstone so the client can update without a full refetch.
      return {
        id: commentId,
        content: "",
        author: { id: userId, name: "Usuário", username: "", profilePicture: null },
        parentCommentId: comment.parentComment?.toString() ?? null,
        createdAt: comment.createdAt.toISOString(),
        updatedAt: new Date().toISOString(),
        edited: false,
        deleted: true,
        likeCount: 0,
        likedByMe: false,
        replyCount: 0,
      };
    }

    await CommentLikeModel.deleteMany({ comment: comment._id });
    return getCommentById(commentId, userId);
  }

  static async toggleLike(commentId: string, currentUserId?: string) {
    const userId = requireUser(currentUserId);
    CommentValidation.id(commentId, "Comentário");

    const comment = await CommentModel.findOne({ _id: commentId, deletedAt: null })
      .select("_id")
      .lean();
    if (!comment) throw new Error("Comentário não encontrado.");

    const removed = await CommentLikeModel.findOneAndDelete({
      comment: commentId,
      user: userId,
    });
    let liked = false;

    if (!removed) {
      try {
        await CommentLikeModel.create({ comment: commentId, user: userId });
        liked = true;
      } catch (error: any) {
        if (error?.code !== 11000) throw error;
        liked = true;
      }
    }

    const likeCount = await CommentLikeModel.countDocuments({ comment: commentId });
    return { commentId, liked, likeCount };
  }
}

export default CommentService;
