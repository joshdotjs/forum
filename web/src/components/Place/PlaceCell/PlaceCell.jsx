import Place from 'src/components/Place/Place'

export const QUERY = gql`
  query FindPlaceById($id: Int!) {
    place: place(id: $id) {
      id
      price
      address
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Place not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ place }) => {
  return <Place place={place} />
}
