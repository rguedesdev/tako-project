import { ChapterModel } from "../graphql/modules/chapter/model";
import { z } from "zod";
import { graphQLError } from "../graphql/errors";

interface ReaderPinRequest {
  cid: string;
  telegramUrl: string | null;
  createdAt: number;
}

const ONLINE_TTL_MS = 60_000;
const QUEUE_TTL_MS = 48 * 60 * 60 * 1_000;
const MAX_QUEUE_PER_USER = 2_000;
const CID_PATTERN = /^[a-zA-Z0-9]{40,120}$/;
const userIDSchema = z.string().regex(/^[a-f\d]{24}$/i);
const chapterIDSchema = z.string().regex(/^[a-f\d]{24}$/i);
const pageIndexesSchema = z.array(z.number().int().min(0)).min(1).max(100);
const cidsSchema = z.array(z.string().regex(CID_PATTERN)).max(100);

function requireValid<T>(schema: z.ZodType<T>, value: unknown, message: string): T {
  const parsed = schema.safeParse(value);
  if (!parsed.success) throw graphQLError(message, "BAD_USER_INPUT");
  return parsed.data;
}

const onlineReaders = new Map<string, number>();
const pendingPins = new Map<string, Map<string, ReaderPinRequest>>();
const pendingOffsets = new Map<string, number>();

function isReaderOnline(userID: string) {
  const lastSeen = onlineReaders.get(userID);
  if (!lastSeen || Date.now() - lastSeen > ONLINE_TTL_MS) {
    onlineReaders.delete(userID);
    return false;
  }
  return true;
}

const ReaderNodeQueue = {
  setOnline(userID: string, online: boolean) {
    requireValid(userIDSchema, userID, "Usuário inválido.");
    requireValid(z.boolean(), online, "Estado do leitor inválido.");
    if (online) onlineReaders.set(userID, Date.now());
    else onlineReaders.delete(userID);
    return online;
  },

  async reportChapterPages(userID: string, chapterID: string, pageIndexes: number[]) {
    requireValid(userIDSchema, userID, "Usuário inválido.");
    chapterID = requireValid(chapterIDSchema, chapterID, "Capítulo inválido.");
    pageIndexes = requireValid(pageIndexesSchema, pageIndexes, "A lista de páginas é inválida.");
    if (!isReaderOnline(userID)) return 0;

    const chapter = await ChapterModel.findById(chapterID).select("pages telegramPages").lean();
    if (!chapter) return 0;

    let userQueue = pendingPins.get(userID);
    if (!userQueue) {
      userQueue = new Map();
      pendingPins.set(userID, userQueue);
    }

    let accepted = 0;
    for (const index of new Set(pageIndexes)) {
      if (!Number.isInteger(index) || index < 0 || index >= chapter.pages.length) continue;
      const cid = chapter.pages[index]?.trim();
      if (!cid || !CID_PATTERN.test(cid)) continue;
      if (userQueue.has(cid)) {
        accepted += 1;
        continue;
      }
      if (userQueue.size >= MAX_QUEUE_PER_USER) break;
      userQueue.set(cid, {
        cid,
        telegramUrl: chapter.telegramPages?.[index] ?? null,
        createdAt: Date.now(),
      });
      accepted += 1;
    }
    return accepted;
  },

  listPending(userID: string, limit: number) {
    requireValid(userIDSchema, userID, "Usuário inválido.");
    limit = requireValid(z.number().int().min(1).max(100), limit, "O limite deve estar entre 1 e 100.");
    const queue = pendingPins.get(userID);
    if (!queue) return [];
    const now = Date.now();
    for (const [cid, request] of queue) {
      if (now - request.createdAt > QUEUE_TTL_MS) queue.delete(cid);
    }
    if (queue.size === 0) {
      pendingPins.delete(userID);
      pendingOffsets.delete(userID);
      return [];
    }
    const ordered = [...queue.values()].sort((a, b) => a.createdAt - b.createdAt);
    const safeLimit = Math.min(Math.max(limit, 1), 100);
    const offset = (pendingOffsets.get(userID) ?? 0) % ordered.length;
    const batch = [...ordered.slice(offset), ...ordered.slice(0, offset)].slice(0, safeLimit);
    pendingOffsets.set(userID, (offset + batch.length) % ordered.length);
    return batch.map(({ cid, telegramUrl }) => ({ cid, telegramUrl }));
  },

  acknowledge(userID: string, cids: string[]) {
    requireValid(userIDSchema, userID, "Usuário inválido.");
    cids = requireValid(cidsSchema, cids, "A lista de identificadores é inválida.");
    const queue = pendingPins.get(userID);
    if (!queue) return 0;
    let removed = 0;
    for (const cid of cids) {
      if (queue.delete(cid)) removed += 1;
    }
    if (queue.size === 0) {
      pendingPins.delete(userID);
      pendingOffsets.delete(userID);
    }
    return removed;
  },
};

export { ReaderNodeQueue };
