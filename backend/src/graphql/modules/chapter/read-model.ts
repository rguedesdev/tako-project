import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";

interface IUserChapterRead {
  user: Types.ObjectId;
  chapter: Types.ObjectId;
  manga: Types.ObjectId;
  createdAt: Date;
}

const userChapterReadSchema = new Schema<IUserChapterRead>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    chapter: { type: Schema.Types.ObjectId, ref: "Chapter", required: true },
    manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

userChapterReadSchema.index({ user: 1, chapter: 1 }, { unique: true });
userChapterReadSchema.index({ user: 1, manga: 1 });

const UserChapterReadModel = TakoProjectDB.model<IUserChapterRead>("UserChapterRead", userChapterReadSchema);

export { UserChapterReadModel };
