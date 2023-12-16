export const schema = gql`
  type Thread {
    id: Int!
    title: String!
    body: String!
    userId: Int!
    createdAt: DateTime!
  }

  type Query {
    threads: [Thread!]! @requireAuth
    thread(id: Int!): Thread @requireAuth
  }

  input CreateThreadInput {
    title: String!
    body: String!
    userId: Int!
  }

  input UpdateThreadInput {
    title: String
    body: String
    userId: Int
  }

  type Mutation {
    createThread(input: CreateThreadInput!): Thread! @requireAuth
    updateThread(id: Int!, input: UpdateThreadInput!): Thread! @requireAuth
    deleteThread(id: Int!): Thread! @requireAuth
  }
`
