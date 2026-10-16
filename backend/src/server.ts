import buildApp from "./app.js";

const app = await buildApp();

const port = Number(process.env.PORT);

// O frontend roda em outro container e precisa alcançar o backend pela rede.
await app.listen({ port, host: "0.0.0.0" });
console.log(`Servidor rodando na porta: ${port}`);
