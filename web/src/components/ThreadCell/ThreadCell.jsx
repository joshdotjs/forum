export const QUERY = gql`
  query FindThreadQuery($id: Int!) {
    thread: thread(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ thread }) => {
  return <div>{JSON.stringify(thread)}</div>
}
