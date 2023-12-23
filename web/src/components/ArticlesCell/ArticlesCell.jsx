// import Article from 'src/components/Article'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
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

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((article) => {
        return (
          // <Article key={article.id} article={article} summary={true} />
          <article key={`article-${article.id}`}>
            <header>
              <h2 className="text-xl text-blue-700 font-semibold">
                <Link to={routes.article({ id: article.id })}>{article.title}</Link>
                <span className="ml-2 text-gray-400 font-normal">
                  by {article.user.name}
                </span>
              </h2>
            </header>
            <div className="mt-2 text-gray-900 font-light">
              {truncate(article.body, 100)}
            </div>
          </article>
        )
      })}
    </>
  )
}