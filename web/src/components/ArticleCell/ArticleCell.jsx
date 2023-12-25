// import Article from 'src/components/Article'
import { Link, routes } from '@redwoodjs/router'
import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'
import { useAuth } from 'src/auth'

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
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          <span className="ml-2 text-gray-400 font-normal">
            by {article.user.name}
          </span>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {article.body}
      </div>

      <div className="mt-12">
        <CommentsCell postId={article.id} />
      </div>

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