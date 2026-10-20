import { z } from "zod";

import { graphQLError } from "./errors";

const objectIDSchema = z.string().regex(/^[a-f\d]{24}$/i);

function parseObjectID(value: unknown, label = "ID") {
  const parsed = objectIDSchema.safeParse(value);
  if (!parsed.success) throw graphQLError(`${label} inválido.`, "BAD_USER_INPUT");
  return parsed.data;
}

export { objectIDSchema, parseObjectID };
