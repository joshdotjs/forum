export const schema = gql`
  type Reply {
    id: Int!
    body: String!
    thread: Thread!
    threadId: Int!
    createdAt: DateTime!
  }

  type Query {
    replies(threadId: Int!): [Reply!]! @skipAuth
  }

  input CreateReplyInput {
    body: String!
    threadId: Int!
  }

  input UpdateReplyInput {
    body: String
    threadId: Int
  }

  type Mutation {
    createReply(input: CreateReplyInput!): Reply! @skipAuth
    deleteReply(id: Int!): Reply! @requireAuth
  }
`
