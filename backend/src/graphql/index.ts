import { userTypeDefs } from "./modules/user/schema";
import { userResolvers } from "./modules/user/resolver";

const schema = `
  ${userTypeDefs}
`;

const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};

export { schema, resolvers };
