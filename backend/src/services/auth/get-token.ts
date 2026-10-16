import type { FastifyRequest } from "fastify";

const getToken = (request: FastifyRequest) => {
  const [scheme, token, ...extraParts] =
    request.headers.authorization?.trim().split(/\s+/) ?? [];

  if (scheme?.toLowerCase() !== "bearer" || !token || extraParts.length) {
    return undefined;
  }
  return token;
};

export { getToken };
