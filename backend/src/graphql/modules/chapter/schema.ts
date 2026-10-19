const chapterTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  extend type Query {
    chapter(id: ID!): Chapter
    latestChapters(limit: Int = 40): [Chapter!]!
    weeklyMostReadMangas(limit: Int = 10): [MangaReadRanking!]!
    topReaders(period: RankingPeriod = ALL_TIME, limit: Int = 10): [ReaderRanking!]!
    existingChapterNumbers(mangaID: ID!, groupID: ID!): [Float!]!
    readerPinRequests(limit: Int = 20): [ReaderPinRequest!]!
  }

  extend type Mutation {
    createChapter(mangaID: ID!, groupID: ID!, data: CreateChapterInput!): Chapter!
    recordChapterView(chapterID: ID!): ChapterViewResult!
    recordChapterRead(chapterID: ID!): Boolean!
    setReaderNodeOnline(online: Boolean!): Boolean!
    reportChapterPagesToReaderNode(chapterID: ID!, pageIndexes: [Int!]!): Int!
    acknowledgeReaderPinRequests(cids: [String!]!): Int!
  }

  ### MAIN TYPES ###
  type Chapter {
    id: ID!
    manga: ID!
    group: ID!
    chapterTitle: String
    chapterNumber: Float!
    pages: [String!]!
    telegramPages: [String!]!
    views: Int!
    chapterType: ChapterType!
    firstChapterID: ID
    mangaInfo: Manga!
    groupInfo: Group!
    createdAt: String!
  }

  ### INPUTS ###
  input CreateChapterInput {
    chapterTitle: String
    chapterNumber: Float!
    pages: [String!]! # Recebe os CIDs que já foram gerados no IPFS
    telegramPages: [String!] # URL de reserva do TG-FileStream, na mesma ordem de pages
    chapterType: ChapterType
  }

  enum ChapterType { MAIN EXTRA SPECIAL ONESHOT }

  type ChapterViewResult {
    chapterID: ID!
    views: Int!
  }

  type ReaderPinRequest {
    cid: String!
    telegramUrl: String
  }

  enum RankingPeriod { WEEK ALL_TIME }
  type MangaReadRanking { manga: Manga!, reads: Int! }
  type ReaderRanking { user: User!, chaptersRead: Int! }
`;

export { chapterTypeDefs };
