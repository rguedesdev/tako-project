import { TakoProjectDB } from "../../../plugins/mongoose";
import { Schema, Types } from "mongoose";

interface IChapter {
  manga: Types.ObjectId;
  group: Types.ObjectId;
  chapterTitle?: string;
  chapterNumber: number;
  pages: string[];
  views: number;
  chapterType?: "MAIN" | "EXTRA" | "SPECIAL" | "ONESHOT" | null;
}

const chapterSchema = new Schema<IChapter>(
  {
    manga: {
      type: Schema.Types.ObjectId,
      ref: "Manga",
      required: true,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    chapterTitle: {
      type: String,
    },
    chapterNumber: {
      type: Number,
      required: true,
    },
    pages: {
      type: [String],
      required: true,
    },
    views: { type: Number, default: 0, min: 0 },
    chapterType: {
      type: String,
      enum: ["MAIN", "EXTRA", "SPECIAL", "ONESHOT"],
      default: null,
      index: true,
    },
  },
  { timestamps: true },
);

// ADICIONADO: Índice composto único para evitar que a mesma scan
// poste duas vezes o mesmo capítulo no mesmo mangá
chapterSchema.index({ manga: 1, group: 1, chapterNumber: 1 }, { unique: true });
chapterSchema.index({ group: 1, manga: 1 });
chapterSchema.index({ manga: 1, chapterNumber: -1, createdAt: -1 });
chapterSchema.index({ createdAt: -1 });

const ChapterModel = TakoProjectDB.model<IChapter>("Chapter", chapterSchema);

export { ChapterModel };
