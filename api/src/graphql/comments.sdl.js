export const schema = gql`
  type Comment {
    id: Int!
    body: String!
    post: Post!
    postId: Int!
    createdAt: DateTime!
    user: User!
  }

  type Query {
    comments(postId: Int!): [Comment!]! @skipAuth #@requireAuth
  }

  input CreateCommentInput {
    body: String!
    postId: Int!
  }

  input UpdateCommentInput {
    body: String
    postId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth(roles: "user")
    deleteComment(id: Int!): Comment! @requireAuth(roles: "moderator")
  }
`
