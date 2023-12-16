import Thread from 'src/components/Thread/Thread'

export const QUERY = gql`
  query FindThreadById($id: Int!) {
    thread: thread(id: $id) {
      id
      title
      body
      userId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Thread not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ thread }) => {
  return <Thread thread={thread} />
}
