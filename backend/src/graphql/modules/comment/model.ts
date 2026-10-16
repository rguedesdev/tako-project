import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";

interface IComment {
  chapter: Types.ObjectId;
  author: Types.ObjectId;
  parentComment?: Types.ObjectId | null;
  content: string;
  editedAt?: Date | null;
  deletedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ICommentLike {
  comment: Types.ObjectId;
  user: Types.ObjectId;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    chapter: {
      type: Schema.Types.ObjectId,
      ref: "Chapter",
      required: true,
      index: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
      index: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 2000,
    },
    editedAt: {
      type: Date,
      default: null,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

// Main list, reply list and chapter isolation all use these indexes.
commentSchema.index({ chapter: 1, parentComment: 1, createdAt: -1 });
commentSchema.index({ parentComment: 1, createdAt: 1 });

const commentLikeSchema = new Schema<ICommentLike>(
  {
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
      index: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

// This is the final safeguard against duplicated likes, including concurrent requests.
commentLikeSchema.index({ user: 1, comment: 1 }, { unique: true });

const CommentModel = TakoProjectDB.model<IComment>("Comment", commentSchema);
const CommentLikeModel = TakoProjectDB.model<ICommentLike>(
  "CommentLike",
  commentLikeSchema,
);

export { CommentLikeModel, CommentModel };
