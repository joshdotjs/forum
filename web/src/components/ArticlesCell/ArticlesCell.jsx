import { Link, routes } from "@redwoodjs/router"

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
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

export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => {
        return (
          <article key={article.id}>
            <header><h2>{article.title}</h2></header>
            <p>{article.body}</p>
            <div>Posted at: {article.createdAt}</div>
            <p><Link to={routes.article({ id: article.id })}>View Article (id: {article.id})</Link></p>
          </article>
        );
      })}
    </ul>
  )
}
