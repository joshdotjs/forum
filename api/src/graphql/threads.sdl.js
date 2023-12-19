export const schema = gql`
  type Thread {
    id: Int!
    title: String!
    body: String!
    userId: Int!
    createdAt: DateTime!
    user: User!
  }

  type Query {
    threads: [Thread!]! @skipAuth
    thread(id: Int!): Thread @skipAuth
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
