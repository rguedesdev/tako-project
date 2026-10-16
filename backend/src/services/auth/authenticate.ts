import type { FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

import { getToken } from "./get-token";

type AuthenticatedUser = {
  id: string;
  exp: number;
};

const authenticateRequest = (
  request: FastifyRequest,
): AuthenticatedUser | null => {
  const token = getToken(request);
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    if (
      typeof decoded !== "object" ||
      typeof decoded.id !== "string" ||
      typeof decoded.exp !== "number"
    ) {
      return null;
    }
    return decoded as AuthenticatedUser;
  } catch {
    // Invalid and expired tokens intentionally become anonymous requests.
    return null;
  }
};

export { authenticateRequest };
export type { AuthenticatedUser };
