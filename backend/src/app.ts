import Fastify from "fastify";
import mercurius from "mercurius";

const app = Fastify();

// Importando configurações do GraphQL
import { schema, resolvers } from "./graphql/index";

app.register(mercurius, {
  schema,
  resolvers,
  ide: true,
  path: "/graphql",
});

// Rota GET simples
app.get("/", async (request, reply) => {
  reply.status(200).send("Ola, Otakus!");
  return;
});

export default app;
