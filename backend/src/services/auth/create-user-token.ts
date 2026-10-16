import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
import mongoose from "mongoose";

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) throw new Error("Variável de ambiente JWT_SECRET não definida");

type ObjectId = mongoose.Types.ObjectId;

interface IUser {
  _id: string | ObjectId;
}

const createUserToken = (user: IUser) => {
  const expiresIn = (process.env.JWT_EXPIRES_IN ?? "7d") as SignOptions["expiresIn"];
  const token = jwt.sign(
    {
      id: user._id.toString(),
    },
    jwtSecret,
    { expiresIn },
  );

  return token;
};

export { createUserToken };
