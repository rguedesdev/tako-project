// User GraphQL Configurations
import { userTypeDefs } from "./modules/user/schema";
import { userResolvers } from "./modules/user/resolver";

// Group GraphQL Configurations
import { groupTypeDefs } from "./modules/group/schema";
import { groupResolvers } from "./modules/group/resolver";

// Manga GraphQL Configurations
import { mangaTypeDefs } from "./modules/manga/schema";
import { mangaResolvers } from "./modules/manga/resolver";

const schema = [userTypeDefs, groupTypeDefs, mangaTypeDefs];

const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...groupResolvers.Mutation,
    ...mangaResolvers.Mutation,
  },
};

export { schema, resolvers };
