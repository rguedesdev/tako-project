const PUBLIC_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:5000/graphql";

function graphqlUrls() {
  if (typeof window !== "undefined") return [PUBLIC_GRAPHQL_URL];

  // No SSR o Next roda dentro do container: localhost seria o próprio
  // frontend. GRAPHQL_URL pode sobrescrever o gateway da bridge em produção.
  return [process.env.GRAPHQL_URL ?? "http://172.17.0.1:5000/graphql"];
}

interface GraphQLErrorResponse {
  message?: string;
}

export async function graphqlRequest<T>(
  query: string,
  variables: Record<string, unknown> = {},
  token?: string | null,
): Promise<T> {
  let requestToken = token;
  if (typeof window === "undefined" && token === undefined) {
    const { cookies } = await import("next/headers");
    requestToken = (await cookies()).get("tako_auth_token")?.value ?? null;
  }
  let response: Response | null = null;
  let connectionError: unknown;

  for (const url of graphqlUrls()) {
    try {
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(requestToken ? { Authorization: `Bearer ${requestToken}` } : {}),
        },
        body: JSON.stringify({ query, variables }),
        cache: "no-store",
      });
      break;
    } catch (error) {
      connectionError = error;
    }
  }

  if (!response) {
    console.error("Não foi possível alcançar o GraphQL:", connectionError);
    throw new Error("Não foi possível conectar ao servidor de dados.");
  }

  const payload = (await response.json().catch(() => null)) as
    | { data?: T; errors?: GraphQLErrorResponse[] }
    | null;

  if (!response.ok || payload?.errors?.length || !payload?.data) {
    throw new Error(
      payload?.errors?.[0]?.message ??
        "Não foi possível se comunicar com o servidor.",
    );
  }

  return payload.data;
}
