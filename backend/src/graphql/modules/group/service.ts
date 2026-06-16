// Models
import { GroupModel } from "./model";

// Validation
import { GroupValidation } from "./validation";

class GroupService {
  static async createGroup(data: any) {
    // 1. valida entrada
    GroupValidation.createGroup(data);

    // 2. regra de negócio
    // Busca se já existe um grupo com o MESMO nome E no MESMO país
    const groupExist = await GroupModel.findOne({
      name: data.name,
      country: data.country,
    });

    if (groupExist) {
      throw new Error(
        "Já existe uma scan com esse nome cadastrada neste país!",
      );
    }

    // 3. Criar Grupo
    const newGroup = await GroupModel.create({
      ...data,
    });

    return newGroup;
  }
}

export default GroupService;
