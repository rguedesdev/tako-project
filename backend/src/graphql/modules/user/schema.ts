// Schema é o TypeDefs do GraphQl, mas separado
const userTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  type Query {
    _empty: String
  }

  type Mutation {
    signUp(data: SignUpInput!): AuthPayload!
    signIn(data: SignInInput!): AuthPayload!
  }

  ### MAIN TYPES ###
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }

  ### AUX TYPES ###
  type AuthPayload {
    user: User!
    token: String!
  }

  ### INPUTS ###
  input SignUpInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input SignInInput {
    login: String!
    password: String!
  }
`;

export { userTypeDefs };
