const commentTypeDefs = /* GraphQL */ `
  enum CommentSort {
    NEWEST
    OLDEST
    MOST_LIKED
  }

  type CommentAuthor {
    id: ID!
    name: String!
    username: String!
    profilePicture: String
  }

  type Comment {
    id: ID!
    content: String!
    author: CommentAuthor!
    parentCommentId: ID
    createdAt: String!
    updatedAt: String!
    edited: Boolean!
    deleted: Boolean!
    likeCount: Int!
    likedByMe: Boolean!
    replyCount: Int!
  }

  type CommentConnection {
    items: [Comment!]!
    totalCount: Int!
    nextOffset: Int
  }

  type CommentLikeResult {
    commentId: ID!
    liked: Boolean!
    likeCount: Int!
  }

  extend type Query {
    chapterComments(
      chapterId: ID!
      sort: CommentSort = NEWEST
      offset: Int = 0
      limit: Int = 10
    ): CommentConnection!

    commentReplies(
      commentId: ID!
      offset: Int = 0
      limit: Int = 5
    ): CommentConnection!
  }

  extend type Mutation {
    createComment(chapterId: ID!, content: String!, parentCommentId: ID): Comment!
    editComment(commentId: ID!, content: String!): Comment!
    deleteComment(commentId: ID!): Comment!
    toggleCommentLike(commentId: ID!): CommentLikeResult!
  }
`;

export { commentTypeDefs };
