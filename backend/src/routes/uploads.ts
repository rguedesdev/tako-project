import multipart from "@fastify/multipart";
import type { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { Types } from "mongoose";

import { MAX_UPLOAD_BYTES, MEDIA_PURPOSES, type MediaPurpose } from "../config/media";
import { MediaModel } from "../graphql/modules/media/model";
import MediaService, { serializeMedia } from "../graphql/modules/media/service";
import { authenticateRequest } from "../services/auth/authenticate";
import { StorageService } from "../services/storage";
import { processImage, sanitizeOriginalName, validateUploadDeclaration } from "../services/upload";

const isTooLarge = (error: unknown) =>
  typeof error === "object" && error !== null && "code" in error && error.code === "FST_REQ_FILE_TOO_LARGE";

export async function registerUploadRoutes(app: FastifyInstance) {
  await app.register(multipart, { limits: { files: 1, fields: 0, fileSize: MAX_UPLOAD_BYTES } });

  app.post("/uploads/images", async (request, reply) => {
    const user = authenticateRequest(request);
    if (!user) return reply.code(401).send({ error: "Usuário não autenticado." });
    const purpose = (request.query as { purpose?: string }).purpose as MediaPurpose;
    if (!MEDIA_PURPOSES.includes(purpose)) return reply.code(400).send({ error: "Finalidade inválida." });

    let storageKey: string | null = null;
    try {
      const part = await request.file();
      if (!part) return reply.code(400).send({ error: "Envie uma imagem no campo file." });
      const source = await part.toBuffer();
      validateUploadDeclaration(part.filename, part.mimetype, source.length, purpose);
      const image = await processImage(source, part.mimetype, purpose);
      storageKey = `users/${user.id}/${new Date().toISOString().slice(0, 7)}/${randomUUID()}.webp`;
      await StorageService.uploadFile(storageKey, image.body, image.mimeType);
      const media = await MediaModel.create({
        ownerID: user.id,
        storageKey,
        originalName: sanitizeOriginalName(part.filename),
        mimeType: image.mimeType,
        size: image.size,
        width: image.width,
        height: image.height,
        purpose,
        status: "READY",
        orphanedAt: new Date(),
      });
      return reply.code(201).send({ media: serializeMedia(media.toObject()) });
    } catch (error) {
      if (storageKey) await StorageService.deleteFile(storageKey).catch(() => undefined);
      return reply.code(isTooLarge(error) ? 413 : 400).send({
        error: isTooLarge(error)
          ? "Imagem acima do limite permitido."
          : error instanceof Error ? error.message : "Falha no upload.",
      });
    }
  });

  app.get("/uploads/images/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    if (!Types.ObjectId.isValid(id)) return reply.code(404).send();
    const media = await MediaModel.findOne({ _id: id, status: "READY" }).lean();
    if (!media) return reply.code(404).send();
    try {
      const file = await StorageService.getFile(media.storageKey);
      return reply.header("Content-Type", file.contentType).header("Cache-Control", "public, max-age=31536000, immutable").send(file.body);
    } catch {
      return reply.code(404).send();
    }
  });

  app.delete("/uploads/images/:id", async (request, reply) => {
    const user = authenticateRequest(request);
    if (!user) return reply.code(401).send();
    const ok = await MediaService.deleteUnattached((request.params as { id: string }).id, user.id);
    return reply.code(ok ? 204 : 404).send();
  });
}
