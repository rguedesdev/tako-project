import Fastify from "fastify";
import { registerMercurius } from "./plugins/mercurius";

const app = Fastify();

registerMercurius(app);

// Rota GET simples
app.get("/", async (request, reply) => {
  reply.status(200).send("Ola, Otakus!");
  return;
});

export default app;
