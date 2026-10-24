const groupTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  extend type Query {
    groups: [Group!]!
    group(id: ID!): Group
    groupTeamCandidates(groupID: ID!, search: String!): [GroupTeamCandidate!]!
    groupClaims: [GroupClaim!]!
    countries: [Country!]!
  }

  extend type Mutation {
    createGroup(data: CreateGroupInput!): Group!
    updateGroup(id: ID!, data: UpdateGroupInput!): Group!
    toggleGroupFollow(groupID: ID!): GroupFollowResult!
    setGroupTeamMember(groupID: ID!, memberID: ID!, role: GroupTeamRole!): GroupTeamMember!
    removeGroupTeamMember(groupID: ID!, memberID: ID!): Boolean!
    createGroupClaim(data: CreateGroupClaimInput!): GroupClaim!
    reviewGroupClaim(id: ID!, approve: Boolean!, note: String): GroupClaim!
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
    claimableByMe: Boolean!
    claimPendingByMe: Boolean!
    supportButtonVisible: Boolean!
    owner: GroupOwner
    teamMembers: [GroupTeamMember!]!
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

  enum GroupClaimStatus { PENDING APPROVED REJECTED }
  enum GroupTeamRole { TRANSLATOR REVIEWER EDITOR UPLOADER REDRAWER CLEANER RAW_PROVIDER }
  type GroupOwner {
    userID: ID!
    username: String!
    name: String!
    profilePicture: String
  }
  type GroupTeamMember {
    id: ID!
    userID: ID!
    username: String!
    name: String!
    profilePicture: String
    role: GroupTeamRole!
    addedAt: String!
  }
  type GroupTeamCandidate {
    id: ID!
    username: String!
    name: String!
    profilePicture: String
  }
  type GroupClaim {
    id: ID!
    groupID: ID!
    groupName: String!
    groupImage: String
    claimantName: String!
    claimantUsername: String!
    contactEmail: String!
    socialMedias: GroupLinks
    proof: String!
    status: GroupClaimStatus!
    createdAt: String!
    reviewNote: String
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
  input CreateGroupClaimInput {
    groupID: ID!
    contactEmail: String!
    socialMedias: SocialMediasInput
    proof: String!
  }

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
