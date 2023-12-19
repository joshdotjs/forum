export const schema = gql`
  type Reply {
    id: Int!
    body: String!
    thread: Thread!
    threadId: Int!
    createdAt: DateTime!
  }

  type Query {
    replies: [Reply!]! @skipAuth
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
    createReply(input: CreateReplyInput!): Comment! @skipAuth
    deleteReply(id: Int!): Reply! @requireAuth
  }
`
