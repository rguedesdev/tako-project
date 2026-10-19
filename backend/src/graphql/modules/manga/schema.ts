const mangaTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###

  extend type Query {
    mangas: [Manga!]!
    manga(id: ID!): Manga
    searchMangas(query: String!, limit: Int = 8): [Manga!]!
    searchJikanMangas(query: String!, limit: Int = 8): [JikanMangaCandidate!]!
    jikanManga(malId: Int!): JikanMangaCandidate!
    chaptersByManga(mangaId: ID!, groupId: ID): [Chapter!]!
    myLibrary: [Manga!]!
  }

  extend type Mutation {
    createManga(groupID: ID!, data: CreateMangaInput!): Manga!
    updateManga(id: ID!, data: UpdateMangaInput!): Manga!
    updateGroupManga(groupID: ID!, mangaID: ID!, data: UpdateGroupMangaInput!): Manga!
    addMangaToGroup(mangaID: ID!, groupID: ID!, translationLanguage: String): Manga!
    linkMangaExternalMetadata(mangaID: ID!, malId: Int!): Manga!
    syncMangaExternalMetadata(mangaID: ID!): Manga!
    setTranslationStatusOverride(mangaID: ID!, groupID: ID!, status: TranslationStatus): MangaTranslation!
    setMangaInLibrary(mangaID: ID!, inLibrary: Boolean!): Boolean!
  }

  ### MAIN TYPES ###
  type Manga {
    id: ID!
    mangaCover: String
    mangaCoverMedia: Media
    title: String!
    aliases: [String!]!
    description: String!
    mangaka: String!
    genders: [String!]!
    demographics: [String!]!
    trackers: MangaTrackers
    stats: MangaStats!
    officialPublicationStatus: OfficialPublicationStatus!
    officialTotalChapters: Int
    externalMetadata: MangaExternalMetadata
    translations: [MangaTranslation!]!
    isAdult: Boolean!
    inMyLibrary: Boolean!
    chapters: [Chapter!]!
  }

  ### AUX TYPES ###
  type MangaTrackers {
    myanimelist: String
    anilist: String
    animeplanet: String
    anidb: String
  }

  type MangaStats {
    chapters: Int!
    views: Int!
    likes: Int!
  }

  enum OfficialPublicationStatus { ONGOING COMPLETED HIATUS UNKNOWN }
  enum TranslationStatus { ONGOING PAUSED COMPLETED }

  type MangaExternalMetadata {
    malId: Int
    lastSyncedAt: String
    lastSyncError: String
  }

  type MangaTranslation {
    mangaID: ID!
    groupID: ID!
    group: Group!
    language: String!
    latestMainChapter: Float
    lastMainChapterPublishedAt: String
    translationStatus: TranslationStatus!
    calculatedTranslationStatus: TranslationStatus!
    translationStatusOverride: TranslationStatus
    overridden: Boolean!
    statusOverrideByUserID: ID
    statusOverrideAt: String
  }

  type JikanMangaCandidate {
    malId: Int!
    title: String!
    titleEnglish: String
    titleJapanese: String
    aliases: [String!]!
    synopsis: String
    totalChapters: Int
    publicationStatus: OfficialPublicationStatus!
    rawStatus: String
    authors: [String!]!
    genres: [String!]!
    demographics: [String!]!
    imageUrl: String
    malUrl: String
    type: String
    year: Int
  }

  ### INPUTS ###
  input CreateMangaInput {
    mangaCoverID: ID
    title: String!
    aliases: [String!]
    description: String!
    mangaka: String!
    genders: [String!]!
    demographics: [String!]
    trackers: TrackersInput
    isAdult: Boolean = false
    malId: Int
    translationLanguage: String
  }
  input UpdateMangaInput { mangaCoverID: ID removeCover: Boolean title: String description: String mangaka: String genders: [String!] demographics: [String!] aliases: [String!] trackers: TrackersInput isAdult: Boolean }
  input UpdateGroupMangaInput { mangaCoverID: ID description: String }

  ### AUX INPUTS ###
  input TrackersInput {
    myanimelist: String
    anilist: String
    animeplanet: String
    anidb: String
  }
`;

export { mangaTypeDefs };
