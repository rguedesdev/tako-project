const chapterTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  extend type Query {
    chapter(id: ID!): Chapter
    latestChapters(limit: Int = 40): [Chapter!]!
    existingChapterNumbers(mangaID: ID!, groupID: ID!): [Float!]!
  }

  extend type Mutation {
    createChapter(mangaID: ID!, groupID: ID!, data: CreateChapterInput!): Chapter!
    recordChapterView(chapterID: ID!): ChapterViewResult!
  }

  ### MAIN TYPES ###
  type Chapter {
    id: ID!
    manga: ID!
    group: ID!
    chapterTitle: String
    chapterNumber: Float!
    pages: [String!]!
    views: Int!
    chapterType: ChapterType!
    mangaInfo: Manga!
    groupInfo: Group!
    createdAt: String!
  }

  ### INPUTS ###
  input CreateChapterInput {
    chapterTitle: String
    chapterNumber: Float!
    pages: [String!]! # Recebe os CIDs que já foram gerados no IPFS
    chapterType: ChapterType
  }

  enum ChapterType { MAIN EXTRA SPECIAL ONESHOT }

  type ChapterViewResult {
    chapterID: ID!
    views: Int!
  }
`;

export { chapterTypeDefs };
