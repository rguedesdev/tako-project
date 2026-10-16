import { Schema, Types } from "mongoose";
import { TakoProjectDB } from "../../../plugins/mongoose";
import type { MediaPurpose } from "../../../config/media";

export type MediaResourceType = "USER" | "GROUP" | "MANGA";
interface IMedia { ownerID: Types.ObjectId; storageKey: string; originalName: string; mimeType: string; size: number; width: number; height: number; purpose: MediaPurpose; status: "READY" | "FAILED" | "DELETED"; resourceType?: MediaResourceType | null; resourceID?: Types.ObjectId | null; orphanedAt?: Date | null; createdAt: Date; updatedAt: Date; }
const schema = new Schema<IMedia>({
  ownerID: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  storageKey: { type: String, required: true, unique: true }, originalName: { type: String, required: true },
  mimeType: { type: String, required: true }, size: { type: Number, required: true }, width: Number, height: Number,
  purpose: { type: String, enum: ["USER_AVATAR", "GROUP_IMAGE", "MANGA_COVER"], required: true, index: true },
  status: { type: String, enum: ["READY", "FAILED", "DELETED"], required: true, default: "READY", index: true },
  resourceType: { type: String, enum: ["USER", "GROUP", "MANGA"], default: null },
  resourceID: { type: Schema.Types.ObjectId, default: null, index: true }, orphanedAt: { type: Date, default: null, index: true },
}, { timestamps: true });
schema.index({ resourceType: 1, resourceID: 1 });
const MediaModel = TakoProjectDB.model<IMedia>("Media", schema);
export { MediaModel };
