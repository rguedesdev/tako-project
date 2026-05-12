import mercurius from "mercurius";

// Importando configurações do GraphQL
import { schema, resolvers } from "../graphql/index";
import path from "node:path";

async function registerMercurius(app: any) {
  app.register(mercurius, {
    schema,
    resolvers,

    ide: true,
    path: "/graphql",
  });
}

export default registerMercurius;
