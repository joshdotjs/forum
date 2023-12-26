// import Article from 'src/components/Article'
import { Link, routes } from '@redwoodjs/router'
import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import { useAuth } from 'src/auth'
import Entry from 'src/components/Entry/Entry'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }) => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    // <Article key={article.id} article={article} summary={false} />
    <article>

      <Entry entry={article} />

        <CommentsCell postId={article.id} />

      {
        isAuthenticated
        ?
        <div className="mt-12">
          <CommentForm postId={article.id} />
        </div>
        :
        <div className="mt-12">
          Please <Link to={routes.login()}>log in</Link> to leave a comment!
        </div>
      }

    </article>
  )
}