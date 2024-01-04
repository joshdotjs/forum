import Entry from 'src/components/Entry/Entry'

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      body
      postId
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div className="text-center text-gray-500 mt-10">No replies yet</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        // <Comment key={comment.id} comment={comment} />
        <Entry key={comment.id} entry={comment} />
      ))}
    </>
  )
}
