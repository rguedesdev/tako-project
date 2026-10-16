import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";
import { TRANSLATION_STATUSES, type TranslationStatus } from "./translation-status";

interface IGroupManga {
  group: Types.ObjectId;
  manga: Types.ObjectId;
  descriptionOverride?: string | null;
  mangaCoverIDOverride?: Types.ObjectId | null;
  addedByUserID: Types.ObjectId;
  translationLanguage?: string | null;
  translationStatusOverride?: TranslationStatus | null;
  statusOverrideByUserID?: Types.ObjectId | null;
  statusOverrideAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const groupMangaSchema = new Schema<IGroupManga>(
  {
    group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
    descriptionOverride: { type: String, default: null, trim: true, minlength: 120, maxlength: 600 },
    mangaCoverIDOverride: { type: Schema.Types.ObjectId, ref: "Media", default: null },
    addedByUserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    translationLanguage: { type: String, default: null, trim: true, maxlength: 80 },
    translationStatusOverride: { type: String, enum: TRANSLATION_STATUSES, default: null },
    statusOverrideByUserID: { type: Schema.Types.ObjectId, ref: "User", default: null },
    statusOverrideAt: { type: Date, default: null },
  },
  { timestamps: true },
);

groupMangaSchema.index({ group: 1, manga: 1 }, { unique: true });
groupMangaSchema.index({ manga: 1, group: 1 });

const GroupMangaModel = TakoProjectDB.model<IGroupManga>("GroupManga", groupMangaSchema);

export { GroupMangaModel };
export type { IGroupManga };
