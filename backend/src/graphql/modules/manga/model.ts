import { TakoProjectDB } from "../../../plugins/mongoose";
import { Schema, Types } from "mongoose";

interface ITrackers {
  myanimelist?: string | null;
  anilist?: string | null;
  animeplanet?: string | null;
  anidb?: string | null;
}

interface IManga {
  mangaCover: string;
  mangaCoverID?: Types.ObjectId | null;
  title: string;
  normalizedTitle: string;
  aliases: string[];
  normalizedAliases: string[];
  normalizedTitles: string[];
  description: string;
  mangaka: string;
  genders: string[];
  demographics: string[];
  trackers: ITrackers;
  isAdult: boolean;
  officialPublicationStatus: "ONGOING" | "COMPLETED" | "HIATUS" | "UNKNOWN";
  officialTotalChapters?: number | null;
  externalMetadata?: {
    malId?: number | null;
    lastSyncedAt?: Date | null;
    demographicsFetchedAt?: Date | null;
    etag?: string | null;
    lastSyncError?: string | null;
    nextSyncAttemptAt?: Date | null;
  };
  createdBy?: Types.ObjectId;
  createdByUserID?: Types.ObjectId;
}

const mangaSchema = new Schema<IManga>(
  {
    mangaCover: {
      type: String,
      default: "",
    },
    mangaCoverID: { type: Schema.Types.ObjectId, ref: "Media", default: null },
    title: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    normalizedTitle: { type: String, required: true, trim: true },
    aliases: { type: [String], default: [] },
    normalizedAliases: { type: [String], default: [] },
    normalizedTitles: { type: [String], required: true, default: [] },
    description: {
      type: String,
      required: true,
      minLength: 120,
      maxLength: 600,
    },
    mangaka: {
      type: String,
      required: true,
      trim: true,
    },
    genders: {
      type: [String],
      required: true,
      default: [],
    },
    demographics: { type: [String], default: [] },
    trackers: {
      myanimelist: String,
      anilist: String,
      animeplanet: String,
      anidb: String,
    },
    isAdult: { type: Boolean, default: false, index: true },
    officialPublicationStatus: {
      type: String,
      enum: ["ONGOING", "COMPLETED", "HIATUS", "UNKNOWN"],
      default: "UNKNOWN",
      index: true,
    },
    officialTotalChapters: { type: Number, default: null, min: 1 },
    externalMetadata: {
      malId: { type: Number, default: null },
      lastSyncedAt: { type: Date, default: null },
      demographicsFetchedAt: { type: Date, default: null },
      etag: { type: String, default: null },
      lastSyncError: { type: String, default: null, maxlength: 500 },
      nextSyncAttemptAt: { type: Date, default: null },
    },
    // ADICIONADO: Guarda qual grupo cadastrou essa obra originalmente
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: false,
    },
    createdByUserID: { type: Schema.Types.ObjectId, ref: "User", required: false },
  },
  { timestamps: true },
);

mangaSchema.index({ normalizedTitle: 1 }, { unique: true, partialFilterExpression: { normalizedTitle: { $type: "string" } } });
mangaSchema.index({ normalizedAliases: 1 });
mangaSchema.index({ normalizedTitles: 1 }, { unique: true });
mangaSchema.index(
  { "externalMetadata.malId": 1 },
  { unique: true, partialFilterExpression: { "externalMetadata.malId": { $type: "number" } } },
);

const MangaModel = TakoProjectDB.model<IManga>("Manga", mangaSchema);

export { MangaModel };
