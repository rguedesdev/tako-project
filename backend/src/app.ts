import Fastify from "fastify";

import { registerCors } from "./plugins/cors.js";
import { registerMercurius } from "./plugins/mercurius";
import { registerIpfsGateway } from "./plugins/ipfs-gateway";
import { registerUploadRoutes } from "./routes/uploads";
import { registerMediaCleanupScheduler } from "./services/media-cleanup-scheduler";
import { registerExternalMetadataScheduler } from "./services/external-metadata-scheduler";

async function buildApp() {
  const app = Fastify();

  await registerCors(app);
  await registerUploadRoutes(app);
  await registerIpfsGateway(app);
  await registerMercurius(app);
  registerMediaCleanupScheduler(app);
  registerExternalMetadataScheduler(app);

  return app;
}

export default buildApp;
