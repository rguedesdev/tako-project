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

const TELEGRAM_PAGE_MAX_BYTES = 50_000_000;
const S3_MEDIA_MAX_UPLOAD_BYTES = MAX_UPLOAD_BYTES;
const usesS3Storage = () => (process.env.STORAGE_DRIVER ?? "local").toLowerCase() === "s3";

const isTooLarge = (error: unknown) =>
  typeof error === "object" && error !== null && "code" in error && error.code === "FST_REQ_FILE_TOO_LARGE";

export async function registerUploadRoutes(app: FastifyInstance) {
  await app.register(multipart, { limits: { files: 1, fields: 0, fileSize: TELEGRAM_PAGE_MAX_BYTES } });

  app.post("/uploads/chapter-pages/telegram", async (request, reply) => {
    const user = authenticateRequest(request);
    if (!user) return reply.code(401).send({ error: "Usuário não autenticado." });
    const baseUrl = process.env.TG_FILESTREAM_URL?.replace(/\/$/, "");
    const uploadToken = process.env.TG_FILESTREAM_UPLOAD_TOKEN;
    if (!baseUrl || !uploadToken) {
      return reply.code(503).send({ error: "Upload de reserva do Telegram não está configurado." });
    }

    try {
      const part = await request.file();
      if (!part) return reply.code(400).send({ error: "Envie a página no campo file." });
      if (!/^image\/(jpeg|png|webp)$/i.test(part.mimetype)) {
        return reply.code(400).send({ error: "Formato de página inválido." });
      }
      const bytes = await part.toBuffer();
      const body = new FormData();
      const uploadBytes = Uint8Array.from(bytes);
      body.append("file", new Blob([uploadBytes.buffer], { type: part.mimetype }), sanitizeOriginalName(part.filename));
      const response = await fetch(`${baseUrl}/api/upload`, {
        method: "POST",
        headers: { "X-Upload-Token": uploadToken },
        body,
        signal: AbortSignal.timeout(Number(process.env.TG_FILESTREAM_UPLOAD_TIMEOUT_MS ?? 120000)),
      });
      const payload = await response.json().catch(() => null) as { url?: string; error?: string } | null;
      if (!response.ok || !payload?.url || !/^https?:\/\//i.test(payload.url)) {
        request.log.error({ statusCode: response.status, error: payload?.error }, "TG-FileStream upload failed");
        return reply.code(502).send({
          error: payload?.error
            ? `TG-FileStream: ${payload.error}`
            : `TG-FileStream não conseguiu armazenar a página (HTTP ${response.status}).`,
        });
      }
      return reply.code(201).send({ url: payload.url });
    } catch (error) {
      request.log.error({ err: error }, "Chapter page upload failed");
      return reply.code(isTooLarge(error) ? 413 : 502).send({
        error: isTooLarge(error)
          ? "Página acima do limite permitido para o Telegram."
          : error instanceof Error ? error.message : "Falha no upload de reserva.",
      });
    }
  });

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
      if (usesS3Storage() && source.length > S3_MEDIA_MAX_UPLOAD_BYTES) {
        return reply.code(413).send({ error: "Imagens enviadas ao S3 devem ter no máximo 2 MB." });
      }
      validateUploadDeclaration(part.filename, part.mimetype, source.length, purpose);
      const image = await processImage(source, part.mimetype, purpose);
      if (usesS3Storage() && image.size > S3_MEDIA_MAX_UPLOAD_BYTES) {
        return reply.code(413).send({ error: "A imagem processada excede o limite de 2 MB para armazenamento no S3." });
      }
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
