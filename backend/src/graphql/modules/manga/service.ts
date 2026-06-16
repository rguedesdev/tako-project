// Models
import { MangaModel } from "./model";

// Validaton
import { MangaValidation } from "./validation";

class MangaService {
  static async createManga(data: any) {
    // 1. Valida entrada (garanta que o Zod valide name, mangaka, group, etc.)
    MangaValidation.createManga(data);

    // 2. Regra de Negócio Complexa:
    // Busca se já existe ESSA OBRA ESPECÍFICA (Mesmo Nome E Mesmo Autor)
    const mangaExist = await MangaModel.findOne({
      name: data.name,
      mangaka: data.mangaka,
    });

    // CENÁRIO A: A obra já está cadastrada no sistema por outra scan
    if (mangaExist) {
      // Como o mangá já existe, você não cria um novo.
      // Retornamos o mangá existente para que o Resolver/Controller saiba qual ID usar.
      return mangaExist;
    }

    // CENÁRIO B: Obra inédita no sistema. Criamos do zero.
    // O campo 'group' enviado no 'data' vai registrar quem foi o grupo pioneiro que cadastrou.
    const newManga = await MangaModel.create({
      ...data,
    });

    return newManga;
  }
}
export default MangaService;
