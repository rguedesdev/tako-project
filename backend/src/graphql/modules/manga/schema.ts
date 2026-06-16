const mangaTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###

  extend type Mutation {
    createManga(data: CreateMangaInput!): Manga!
  }

  ### MAIN TYPES ###
  type Manga {
    id: ID!
    mangaCover: String
    title: String!
    description: String!
    mangaka: String!
    genders: [String!]!
    trackers: MangaTrackers
  }

  ### AUX TYPES ###
  type MangaTrackers {
    myanimelist: String
    anilist: String
    animeplanet: String
  }

  ### INPUTS ###
  input CreateMangaInput {
    mangaCover: String
    title: String!
    description: String!
    mangaka: String!
    genders: [String!]!
    trackers: TrackersInput
  }

  ### AUX INPUTS ###
  input TrackersInput {
    myanimelist: String
    anilist: String
    animeplanet: String
  }
`;

export { mangaTypeDefs };
