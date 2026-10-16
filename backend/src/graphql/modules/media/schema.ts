const mediaTypeDefs = /* GraphQL */ `
  enum MediaPurpose { USER_AVATAR GROUP_IMAGE MANGA_COVER }
  type Media { id: ID! url: String! originalName: String! mimeType: String! size: Int! width: Int height: Int purpose: MediaPurpose! createdAt: String! }
  extend type Query { media(id: ID!): Media }
`;
export { mediaTypeDefs };
