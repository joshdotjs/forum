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

  const row_styles = {
    display: 'grid',
    gridTemplateColumns: '50px 1fr 150px 100px 100px 100px',
    padding: '0.5rem 0',
  };

  return (
    <div id="outer-container"
    >

      <div id="title"
        style={{
          ...row_styles,
          borderBottom: 'solid black 2px',
        }}
      >
        <h5></h5>
        <h5>Subject</h5>
        <h5>Poster</h5>
        <h5>Views</h5>
        <h5>Replies</h5>
        <h5>Last post</h5>
      </div>

      {articles.map((article) => {
        return (
          // <Article key={article.id} article={article} summary={true} />
          <article id="row"
            key={`article-${article.id}`}
            style={{
              ...row_styles,
              borderBottom: 'solid black 1px',
            }}
          >

              <p> </p>
              <p className="text-xl text-blue-700 font-semibold">
                <Link to={routes.article({ id: article.id })}>{article.title}</Link>
              </p>

              <p className="text-gray-400 font-normal">{article.user.name}</p>
              <p className="text-gray-400 font-normal">0</p>
              <p className="text-gray-400 font-normal">0</p>
              <p className="text-gray-400 font-normal">0</p>
            {/* <div className="mt-2 text-gray-900 font-light">
              {truncate(article.body, 100)}
            </div> */}
          </article>
        )
      })}
    </div>
  )
}