// Schema é o TypeDefs do GraphQl, mas separado
const userTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  type Query {
    _empty: String
  }

  type Mutation {
    signUp(data: SignUpInput!): User!
  }

  ### MAIN TYPES ###
  type User {
    id: ID!
    name: String!
    nickname: String!
    email: String!
  }

  ### AUX TYPES ###

  ### INPUTS ###
  input SignUpInput {
    name: String!
    nickname: String!
    email: String!
    password: String!
  }
`;

export { userTypeDefs };
