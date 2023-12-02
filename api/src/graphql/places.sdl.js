export const schema = gql`
  type Place {
    id: Int!
    price: String!
    address: String!
    createdAt: DateTime!
  }

  type Query {
    places: [Place!]! @requireAuth
    place(id: Int!): Place @requireAuth
  }

  input CreatePlaceInput {
    price: String!
    address: String!
  }

  input UpdatePlaceInput {
    price: String
    address: String
  }

  type Mutation {
    createPlace(input: CreatePlaceInput!): Place! @requireAuth
    updatePlace(id: Int!, input: UpdatePlaceInput!): Place! @requireAuth
    deletePlace(id: Int!): Place! @requireAuth
  }
`
