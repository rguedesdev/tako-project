import CommentService from "./service";
import { requireAuthenticated } from "../../../services/auth/authorization";
import MediaService from "../media/service";

const commentResolvers = {
  Query: {
    chapterComments: async (_: unknown, args: any, context: any) =>
      CommentService.listChapterComments(
        args.chapterId,
        args.sort,
        args.offset,
        args.limit,
        context.user?.id,
      ),
    commentReplies: async (_: unknown, args: any, context: any) =>
      CommentService.listReplies(
        args.commentId,
        args.offset,
        args.limit,
        context.user?.id,
      ),
  },
  Mutation: {
    createComment: async (_: unknown, args: any, context: any) => {
      const userID = requireAuthenticated(context);
      return CommentService.create(
        args.chapterId,
        args.content,
        args.parentCommentId,
        userID,
      );
    },
    editComment: async (_: unknown, args: any, context: any) => {
      const userID = requireAuthenticated(context);
      return CommentService.edit(args.commentId, args.content, userID);
    },
    deleteComment: async (_: unknown, args: any, context: any) => {
      const userID = requireAuthenticated(context);
      return CommentService.delete(args.commentId, userID);
    },
    toggleCommentLike: async (_: unknown, args: any, context: any) => {
      const userID = requireAuthenticated(context);
      return CommentService.toggleLike(args.commentId, userID);
    },
  },
  CommentAuthor: {
    profilePicture: async (author: any) => author.profilePictureID
      ? (await MediaService.getReady(author.profilePictureID))?.url ?? null
      : author.profilePicture ?? null,
  },
};

export { commentResolvers };
