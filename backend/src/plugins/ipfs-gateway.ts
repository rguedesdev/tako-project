import type { FastifyInstance } from "fastify";

const CID_PATTERN = /^[a-zA-Z0-9]{40,120}$/;

function imageContentType(bytes: Buffer, fallback: string) {
  if (bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "image/jpeg";
  if (bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "image/png";
  if (bytes.subarray(0, 4).toString() === "RIFF" && bytes.subarray(8, 12).toString() === "WEBP") return "image/webp";
  if (bytes.subarray(0, 3).toString() === "GIF") return "image/gif";
  return fallback;
}

async function registerIpfsGateway(app: FastifyInstance) {
  app.get<{ Params: { cid: string } }>("/ipfs/:cid", async (request, reply) => {
    const { cid } = request.params;
    if (!CID_PATTERN.test(cid)) {
      return reply.code(400).send({ error: "CID inválido" });
    }

    try {
      // A API `cat` devolve os bytes diretamente e não faz o redirecionamento
      // para *.ipfs.localhost que falha em alguns navegadores/sistemas.
      const response = await fetch(
        `http://127.0.0.1:5001/api/v0/cat?arg=${encodeURIComponent(cid)}`,
        { method: "POST", signal: AbortSignal.timeout(3_000) },
      );

      if (!response.ok) {
        return reply.code(502).send({ error: "Conteúdo indisponível no nó IPFS local" });
      }

      const bytes = Buffer.from(await response.arrayBuffer());
      const contentType = imageContentType(
        bytes,
        response.headers.get("content-type") ?? "application/octet-stream",
      );
      return reply
        .header("Content-Type", contentType)
        .header("Cache-Control", "public, max-age=31536000, immutable")
        .send(bytes);
    } catch {
      return reply.code(502).send({ error: "Nó IPFS local indisponível" });
    }
  });
}

export { registerIpfsGateway };
