// Service
import MangaService from "./service";

const mangaResolvers = {
  Query: {},

  Mutation: {
    createManga: async (_: any, { data }: any, context: any) => {
      if (!context.user) {
        throw new Error("Usuário não autenticado!");
      }

      return MangaService.createManga({ ...data });
    },
  },
};

export { mangaResolvers };
