const groupTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  extend type Mutation {
    createGroup(data: CreateGroupInput!): Group!
  }

  ### MAIN TYPES ###
  type Group {
    id: ID! # É sempre bom expor o ID do documento criado
    ownerID: ID!
    groupImage: String
    name: String!
    description: String!
    country: String!
    stats: GroupStats!
    socialMedias: GroupLinks
  }

  ### AUX TYPES ###
  type GroupStats {
    followers: Int!
    mangas: Int!
    chapters: Int!
    views: Int!
    likes: Int!
  }

  type GroupLinks {
    site: String
    discord: String
    telegram: String
    x: String
    instagram: String
    facebook: String
    bluesky: String
    orkut: String
    email: String
  }

  ### INPUTS ###
  input CreateGroupInput {
    groupImage: String
    name: String!
    description: String!
    country: String!
    socialMedias: SocialMediasInput
  }

  ### AUX INPUTS ###
  input SocialMediasInput {
    site: String
    discord: String
    telegram: String
    x: String
    instagram: String
    facebook: String
    bluesky: String
    orkut: String
    email: String
  }
`;

export { groupTypeDefs };
