const userTypeDefs = /* GraphQL */ `
  type Query {
    me: User
    usernameAvailable(username: String!): Boolean!
    emailAvailable(email: String!): Boolean!
    user(username: String!): User
  }

  type Mutation {
    signUp(data: SignUpInput!): AuthPayload!
    signIn(data: SignInInput!): AuthPayload!
    updateMyProfile(data: UpdateProfileInput!): User!
    toggleUserFollow(userID: ID!): UserFollowResult!
  }

  enum UserPlan {
    FREE
    PREMIUM
    VIP
  }

  enum AccountType {
    MEMBER
    AEGIS
  }

  enum SubscriptionStatus {
    NONE
    TRIALING
    ACTIVE
    PAST_DUE
    CANCELED
    EXPIRED
  }

  type UserSubscription {
    plan: UserPlan!
    status: SubscriptionStatus!
    startedAt: String
    expiresAt: String
    renewalAt: String
    autoRenew: Boolean!
    source: String
  }

  type UserPreferences { showAdultContent: Boolean! }
  type UserProfileStats {
    mangasRead: Int!
    chaptersRead: Int!
    comments: Int!
    likes: Int!
    followers: Int!
  }
  type UserFollowResult { followed: Boolean! followers: Int! }
  type UserRecentReadManga { id: ID!, title: String!, mangaCover: String, lastReadAt: String! }
  type UserSocialMedias {
    site: String
    discord: String
    telegram: String
    x: String
    instagram: String
    facebook: String
    youtube: String
    tiktok: String
    bluesky: String
  }
  type UserTrackers {
    myanimelist: String
    anilist: String
    animeplanet: String
    anidb: String
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String
    profilePicture: String
    profilePictureMedia: Media
    accountType: AccountType!
    subscription: UserSubscription!
    preferences: UserPreferences!
    profileStats: UserProfileStats!
    socialMedias: UserSocialMedias!
    trackers: UserTrackers!
    followedByMe: Boolean!
    recentReadMangas(limit: Int = 6): [UserRecentReadManga!]!
    groups: [Group!]!
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  input SignUpInput {
    name: String!
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input SignInInput {
    login: String!
    password: String!
  }
  input UserSocialMediasInput {
    site: String
    discord: String
    telegram: String
    x: String
    instagram: String
    facebook: String
    youtube: String
    tiktok: String
    bluesky: String
  }
  input UserTrackersInput { myanimelist: String anilist: String animeplanet: String anidb: String }
  input UpdateProfileInput {
    name: String
    email: String
    profilePictureID: ID
    removeProfilePicture: Boolean
    showAdultContent: Boolean
    socialMedias: UserSocialMediasInput
    trackers: UserTrackersInput
  }
`;

export { userTypeDefs };
