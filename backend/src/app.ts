import Fastify from "fastify";

import { registerCors } from "./plugins/cors.js";
import { registerMercurius } from "./plugins/mercurius";
import { registerIpfsGateway } from "./plugins/ipfs-gateway";
import { registerUploadRoutes } from "./routes/uploads";
import { registerMediaCleanupScheduler } from "./services/media-cleanup-scheduler";
import { registerExternalMetadataScheduler } from "./services/external-metadata-scheduler";
import { TakoProjectDB } from "./plugins/mongoose";

async function buildApp() {
  const app = Fastify();

  await registerCors(app);
  app.get("/health", async (_request, reply) => {
    const databaseOperational = TakoProjectDB.readyState === 1;
    const status = databaseOperational ? "operational" : "degraded";
    return reply.code(databaseOperational ? 200 : 503).send({
      status,
      checkedAt: new Date().toISOString(),
      components: [
        { id: "api", name: "API", status: "operational" },
        { id: "database", name: "Banco de dados", status: databaseOperational ? "operational" : "outage" },
      ],
    });
  });
  await registerUploadRoutes(app);
  await registerIpfsGateway(app);
  await registerMercurius(app);
  registerMediaCleanupScheduler(app);
  registerExternalMetadataScheduler(app);

  return app;
}

export default buildApp;
