import Mercurius from "mercurius";
import type { FastifyInstance } from "fastify";

// Importando configurações do GraphQL
import { schema, resolvers } from "../graphql/index";
import { authenticateRequest } from "../services/auth/authenticate";

async function registerMercurius(app: FastifyInstance) {
  // Configuração padrão, limpa e tipada do Mercurius
  await app.register(Mercurius, {
    schema,
    resolvers,
    ide: true,
    path: "/graphql",
    context: async (request, reply) => {
      return { request, reply, user: authenticateRequest(request) };
    },
  });
}

export { registerMercurius };
