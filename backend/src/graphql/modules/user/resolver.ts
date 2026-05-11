// Resolver do GraphQL Separado

import UserService from "./service";

const userResolvers = {
  Query: {
    _empty: () => "ok",
  },

  Mutation: {
    signUp: async (_: any, { data }: any) => {
      return await UserService.createUser(data);
    },
  },
};

export { userResolvers };
