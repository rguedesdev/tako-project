import type { FastifyInstance } from "fastify";

import MangaService from "../graphql/modules/manga/service";

function registerExternalMetadataScheduler(app: FastifyInstance) {
  let timer: NodeJS.Timeout | null = null;
  let initialTimer: NodeJS.Timeout | null = null;
  const run = async () => {
    try {
      const synced = await MangaService.syncStaleExternalMetadata();
      if (synced) app.log.info({ synced }, "Sincronização periódica da Jikan concluída");
    } catch (error) {
      app.log.error({ error }, "Falha na sincronização periódica da Jikan");
    }
  };
  app.addHook("onReady", async () => {
    const hours = Math.max(1, Number(process.env.JIKAN_SYNC_INTERVAL_HOURS ?? 6));
    initialTimer = setTimeout(() => void run(), 30_000);
    initialTimer.unref();
    timer = setInterval(() => void run(), hours * 3_600_000);
    timer.unref();
  });
  app.addHook("onClose", async () => {
    if (initialTimer) clearTimeout(initialTimer);
    if (timer) clearInterval(timer);
  });
}

export { registerExternalMetadataScheduler };
