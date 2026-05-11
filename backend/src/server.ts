import app from "./app";
// import process from "node:process";

const port = Number(process.env.PORT);

await app.listen({ port });
console.log(`Servidor rodando na porta: ${port}`);
