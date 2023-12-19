import Entry from 'src/components/Entry/Entry'

export const QUERY = gql`
  query RepliesQuery {
    replies {
      id
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ replies }) => {
  return (
    replies.map((reply) => {
      return <Entry key={reply.id} entry={reply} />
    })
  )
}
