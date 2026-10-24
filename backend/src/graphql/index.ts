// User GraphQL Configurations
import { userTypeDefs } from "./modules/user/schema";
import { userResolvers } from "./modules/user/resolver";

// Group GraphQL Configurations
import { groupTypeDefs } from "./modules/group/schema";
import { groupResolvers } from "./modules/group/resolver";

// Manga GraphQL Configurations
import { mangaTypeDefs } from "./modules/manga/schema";
import { mangaResolvers } from "./modules/manga/resolver";

// Chapter GraphQL Configurations
import { chapterTypeDefs } from "./modules/chapter/schema";
import { chapterResolvers } from "./modules/chapter/resolver";

// Comment GraphQL Configurations
import { commentTypeDefs } from "./modules/comment/schema";
import { commentResolvers } from "./modules/comment/resolver";
import { mediaTypeDefs } from "./modules/media/schema";
import { mediaResolvers } from "./modules/media/resolver";

const schema = [
  userTypeDefs,
  groupTypeDefs,
  mangaTypeDefs,
  chapterTypeDefs,
  commentTypeDefs,
  mediaTypeDefs,
];

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...groupResolvers.Query,
    ...mangaResolvers.Query,
    ...chapterResolvers.Query,
    ...commentResolvers.Query,
    ...mediaResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...groupResolvers.Mutation,
    ...mangaResolvers.Mutation,
    ...chapterResolvers.Mutation,
    ...commentResolvers.Mutation,
  },
  User: {
    ...userResolvers.User,
  },
  Group: {
    ...groupResolvers.Group,
  },
  GroupOwner: {
    ...groupResolvers.GroupOwner,
  },
  GroupClaim: {
    ...groupResolvers.GroupClaim,
  },
  GroupTeamMember: {
    ...groupResolvers.GroupTeamMember,
  },
  GroupTeamCandidate: {
    ...groupResolvers.GroupTeamCandidate,
  },
  Manga: {
    ...mangaResolvers.Manga,
  },
  Chapter: {
    ...chapterResolvers.Chapter,
  },
  CommentAuthor: {
    ...commentResolvers.CommentAuthor,
  },
  Media: { ...mediaResolvers.Media },
};

export { schema, resolvers };
