import { Types, type ClientSession } from "mongoose";
import { graphQLError } from "../../errors";
import { MediaModel, type MediaResourceType } from "./model";
import { orphanMediaMaxAgeMs, type MediaPurpose } from "../../../config/media";
import { StorageService } from "../../../services/storage";

const mediaUrl = (media: any) => `${(process.env.API_PUBLIC_URL ?? `http://localhost:${process.env.PORT ?? 5000}`).replace(/\/$/, "")}/uploads/images/${media._id ?? media.id}`;
const serializeMedia = (media: any) => ({ ...media, id: String(media._id ?? media.id), url: mediaUrl(media), createdAt: new Date(media.createdAt).toISOString() });
class MediaService {
  static async getReady(id: unknown) { if (!Types.ObjectId.isValid(String(id))) return null; const row = await MediaModel.findOne({ _id: id, status: "READY" }).lean(); return row ? serializeMedia(row) : null; }
  static async requireAttachable(id: unknown, ownerID: string, purpose: MediaPurpose, session?: ClientSession) { const q = MediaModel.findById(id); if (session) q.session(session); const row = await q.lean(); if (!row || row.status !== "READY") throw graphQLError("Mídia não encontrada.", "NOT_FOUND"); if (String(row.ownerID) !== ownerID || row.purpose !== purpose) throw graphQLError("Mídia inválida para esta operação.", "FORBIDDEN"); if (row.resourceID) throw graphQLError("Mídia já associada.", "CONFLICT"); return row; }
  static async attach(id: unknown, ownerID: string, purpose: MediaPurpose, resourceType: MediaResourceType, resourceID: unknown, session?: ClientSession) { await this.requireAttachable(id, ownerID, purpose, session); const row = await MediaModel.findOneAndUpdate({ _id: id, ownerID, purpose, resourceID: null, status: "READY" }, { $set: { resourceType, resourceID, orphanedAt: null } }, { new: true, ...(session ? { session } : {}) }); if (!row) throw graphQLError("Mídia já associada.", "CONFLICT"); return row; }
  static async orphan(id: unknown, resourceType: MediaResourceType, resourceID: string | Types.ObjectId) { if (id) await MediaModel.updateOne({ _id: id, resourceType, resourceID }, { $set: { resourceType: null, resourceID: null, orphanedAt: new Date() } }); }
  static async deleteUnattached(id: unknown, ownerID: string) { const row = await MediaModel.findOneAndUpdate({ _id: id, ownerID, resourceID: null, status: "READY" }, { $set: { status: "DELETED" } }, { new: true }); if (!row) return false; await StorageService.deleteFile(row.storageKey); return true; }
  static async cleanup(now = new Date()) {
    const cutoff = new Date(now.getTime() - orphanMediaMaxAgeMs());
    const candidates = await MediaModel.find({ status: "READY", resourceID: null, orphanedAt: { $ne: null, $lte: cutoff } }).lean();
    let deleted = 0;
    let failed = 0;
    for (const media of candidates) {
      try {
        await StorageService.deleteFile(media.storageKey);
        await MediaModel.updateOne({ _id: media._id, status: "READY", resourceID: null }, { $set: { status: "DELETED" } });
        deleted += 1;
      } catch (error) {
        failed += 1;
        console.error("Falha ao limpar mídia", media._id.toString(), error);
      }
    }
    return { scanned: candidates.length, deleted, failed };
  }
}
export { mediaUrl, serializeMedia }; export default MediaService;
