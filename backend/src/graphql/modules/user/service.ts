// Mais ou menos equivalente ao Controller no MVC Clássico
import { UserModel } from "./model";
import { UserValidation } from "./validation";

class UserService {
  static async createUser(data: any) {
    // 1. valida entrada
    UserValidation.create(data);

    // 2. regra de negócio
    const exists = await UserModel.findOne({ email: data.email });

    if (exists) {
      throw new Error("User already exists");
    }

    // 3. persistência
    const user = await UserModel.create(data);

    return user;
  }
}

export default UserService;
