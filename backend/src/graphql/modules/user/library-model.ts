import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";

interface IMangaLibraryEntry {
  user: Types.ObjectId;
  manga: Types.ObjectId;
  createdAt: Date;
}

const mangaLibraryEntrySchema = new Schema<IMangaLibraryEntry>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

mangaLibraryEntrySchema.index({ user: 1, manga: 1 }, { unique: true });
mangaLibraryEntrySchema.index({ user: 1, createdAt: -1 });

const MangaLibraryEntryModel = TakoProjectDB.model<IMangaLibraryEntry>("MangaLibraryEntry", mangaLibraryEntrySchema);

export { MangaLibraryEntryModel };
