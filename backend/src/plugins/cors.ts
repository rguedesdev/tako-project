import type { FastifyInstance } from "fastify";
import Cors from "@fastify/cors";

async function registerCors(app: FastifyInstance) {
  await app.register(Cors, {
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://tauri.localhost",
      "tauri://localhost",
    ],

    methods: ["GET", "POST", "DELETE", "OPTIONS"],

    credentials: true,
  });
}

export { registerCors };
