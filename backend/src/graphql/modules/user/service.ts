// Mais ou menos equivalente ao Controller no MVC Clássico
import bcrypt from "bcrypt";

import { UserModel } from "./model";
import { UserValidation } from "./validation";

// JWT token
import { createUserToken } from "../../../services/auth/create-user-token";

class UserService {
  static async signUp(data: any) {
    // 1. valida entrada
    UserValidation.signUp(data);

    // 2. regra de negócio
    const exists = await UserModel.findOne({ email: data.email });

    if (exists) {
      throw new Error("User already exists");
    }

    const passwordHash = await bcrypt.hash(data.password, 12);

    // 3. persistência
    const newUser = await UserModel.create({
      ...data,
      password: passwordHash,
    });

    const token = createUserToken(newUser);

    return {
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
      },
      token,
    };
  }

  static async signIn(data: any) {
    // 1. valida entrada
    UserValidation.signIn(data);

    // 2. regra de negócio
    // const user = await UserModel.findOne({ email: data.email });
    const user = await UserModel.findOne({
      $or: [{ email: data.login }, { username: data.login }],
    });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const passwordHash = user.password;

    const verifyPassword = await bcrypt.compare(data.password, passwordHash);

    if (!verifyPassword) {
      throw new Error("Senha incorreta!");
    }

    // 3. persistência
    const token = createUserToken(user);

    return {
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
      token,
    };
  }
}

export default UserService;
