// import Article from 'src/components/Article'
import { Link, routes } from '@redwoodjs/router'
import { truncate } from 'src/lib/formatters'
import { FolderPlusIcon } from '@heroicons/react/24/outline'

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

// const truncate = (text, length) => {
//   return text.substring(0, length) + '...'
// }

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {

  const ROW_STYLES = `grid
    grid-rows-[1fr]
    grid-cols-[50px_1fr_1fr]
    md:grid-cols-[50px_1fr_1fr_1fr_1fr_1fr]
    gap-0 py-4
    border-gray-800
  `
  return (
    <div id="outer-container"
    >

      <div id="title"
        className={`${ROW_STYLES}
          font-semibold text-gray-700
          border-b-2
        `}
      >
        <h5> </h5>
        <h5>Subject</h5>
        <h5>Poster</h5>
        <h5 className='hidden md:block'>Views</h5>
        <h5 className='hidden md:block'>Replies</h5>
        <h5 className='hidden md:block'>Last post</h5>
      </div>

      {articles.map((article) => {
        return (
          // <Article key={article.id} article={article} summary={true} />
          <article id="row"
            key={`article-${article.id}`}
            className={`${ROW_STYLES}
              font-semibold text-gray-700
              border-b-2
          `}
          >
              <p
                style={{
                  // background: 'green'
                }}
                className='flex items-center justify-center cursor-pointer'
                onClick={() => alert('TODO: add functionality')}
              >
                <FolderPlusIcon
                  style={{
                    height: '25px'
                  }}
                />
              </p>
              <p className="text-xl text-blue-700 font-semibold">
                <Link to={routes.article({ id: article.id })}>
                  <span className='inline sm:hidden'>{truncate(article.title, 16)}</span>
                  <span className='hidden sm:inline md:hidden'>{truncate(article.title, 20)}</span>
                  <span className='hidden md:inline lg:hidden'>{truncate(article.title, 10)}</span>
                  <span className='hidden lg:inline xl:'>{truncate(article.title, 20)}</span>
                </Link>
              </p>

              <p className="text-gray-400 font-normal">{article.user.name}</p>
              <p className="text-gray-400 font-normal hidden md:block">0</p>
              <p className="text-gray-400 font-normal hidden md:block">0</p>
              <p className="text-gray-400 font-normal hidden md:block">0</p>
            {/* <div className="mt-2 text-gray-900 font-light">
              {truncate(article.body, 100)}
            </div> */}
          </article>
        )
      })}
    </div>
  )
}