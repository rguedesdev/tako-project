import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

const TakoProjectDB = mongoose.createConnection(uri, {
  dbName: "TakoProjectDB",
});

TakoProjectDB.on("connected", () => {
  console.log("Conectado ao TakoProjectDB");
});

TakoProjectDB.on("error", (error) => {
  console.log("Erro na conexão ao TakoProjectDB:", error);
});

export { TakoProjectDB };
