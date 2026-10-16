import type { FastifyInstance } from "fastify";

import MediaService from "../graphql/modules/media/service";

function registerMediaCleanupScheduler(app: FastifyInstance) {
  let timer: NodeJS.Timeout | null = null;
  const run = async () => {
    try {
      const result = await MediaService.cleanup();
      if (result.scanned) app.log.info(result, "Limpeza automática de mídia concluída");
    } catch (error) {
      app.log.error({ error }, "Falha na limpeza automática de mídia");
    }
  };
  app.addHook("onReady", async () => {
    void run();
    const minutes = Math.max(1, Number(process.env.MEDIA_CLEANUP_INTERVAL_MINUTES ?? 60));
    timer = setInterval(() => void run(), minutes * 60_000);
    timer.unref();
  });
  app.addHook("onClose", async () => { if (timer) clearInterval(timer); });
}

export { registerMediaCleanupScheduler };
