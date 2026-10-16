const groupTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  extend type Query {
    groups: [Group!]!
    group(id: ID!): Group
    countries: [Country!]!
  }

  extend type Mutation {
    createGroup(data: CreateGroupInput!): Group!
    updateGroup(id: ID!, data: UpdateGroupInput!): Group!
    toggleGroupFollow(groupID: ID!): GroupFollowResult!
  }

  ### MAIN TYPES ###
  type Group {
    id: ID! # É sempre bom expor o ID do documento criado
    ownerID: ID!
    groupImage: String
    groupImageMedia: Media
    name: String!
    description: String!
    country: String!
    countryCode: String!
    countryFlag: String!
    stats: GroupStats!
    followedByMe: Boolean!
    socialMedias: GroupLinks
    mangas: [Manga!]!
    translations: [MangaTranslation!]!
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
    youtube: String
    tiktok: String
    bluesky: String
    orkut: String
    email: String
  }

  type Country { code: String! name: String! flag: String! }

  type GroupFollowResult {
    followed: Boolean!
    followers: Int!
  }

  ### INPUTS ###
  input CreateGroupInput {
    groupImageID: ID
    name: String!
    description: String!
    countryCode: String!
    socialMedias: SocialMediasInput
  }
  input UpdateGroupInput { name: String description: String countryCode: String groupImageID: ID removeImage: Boolean socialMedias: SocialMediasInput }

  ### AUX INPUTS ###
  input SocialMediasInput {
    site: String
    discord: String
    telegram: String
    x: String
    instagram: String
    facebook: String
    youtube: String
    tiktok: String
    bluesky: String
    orkut: String
    email: String
  }
`;

export { groupTypeDefs };
