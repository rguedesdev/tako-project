import Mercurius from "mercurius";
import type { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";

// Importando configurações do GraphQL
import { schema, resolvers } from "../graphql/index";
import { request } from "node:http";

async function registerMercurius(app: FastifyInstance) {
  await app.register(Mercurius, {
    schema,
    resolvers,

    ide: true,
    path: "/graphql",

    context: async (request, reply) => {
      const authHeader = request.headers.authorization;

      let user = null;

      if (authHeader) {
        const [, token] = authHeader.split(" ");

        try {
          user = jwt.verify(token as string, process.env.JWT_SECRET as string);
        } catch {
          user = null;
        }
      }

      return { request, reply, user };
    },
  });
}

export { registerMercurius };
