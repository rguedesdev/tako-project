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
  input UpdateProfileInput { name: String email: String profilePictureID: ID removeProfilePicture: Boolean showAdultContent: Boolean }
`;

export { userTypeDefs };
