// Resolver do GraphQL Separado
import UserService from "./service";

const userResolvers = {
  Query: {
    _empty: () => "ok",
  },

  Mutation: {
    signUp: async (_: any, { data }: any) => {
      return await UserService.signUp(data);
    },

    signIn: async (_: any, { data }: any) => {
      return await UserService.signIn(data);
    },
  },
};

export { userResolvers };
