// Service
import GroupService from "./service";

const groupResolvers = {
  Query: {},
  Mutation: {
    createGroup: async (_: any, { data }: any, context: any) => {
      if (!context.user) {
        throw new Error("Usuário não autenticado!");
      }

      return GroupService.createGroup({ ...data, ownerID: context.user.id });
    },
  },
};

export { groupResolvers };
