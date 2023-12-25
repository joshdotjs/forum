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


const Mobile = ({ articles }) => {

  const ROW_STYLES = `grid grid-cols-[50px_1fr]`;

  return (
    <div id="outer-container"
      className="block lg:hidden"
    >
      {articles.map((article) => {
        return (
          // <Article key={article.id} article={article} summary={true} />
          <article id="row"
            key={`article-${article.id}`}
            className={`
              grid
              grid-rows-[1fr_1fr]
              grid-cols-[1fr]
              gap-0 py-4
              border-gray-800
              font-semibold text-gray-700
              border-b-2
          `}
          >
            <div
              style={{ background: 'limegreen'}}
              className={`
                grid
                grid-cols-[50px_1fr]
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
                    height: '20px'
                  }}
                />
              </p>
              <p className="text-xl text-blue-700 font-semibold">
                <Link to={routes.article({ id: article.id })}>
                  <span className='inline xs:hidden sm:hidden'>{truncate(article.title, 24)}</span>
                  <span className='hidden sm:inline md:hidden'>{truncate(article.title, 48)}</span>
                  <span className='hidden md:inline '>{truncate(article.title, 64)}</span>
                </Link>
              </p>
            </div>
            <div
              style={{ background: 'darkorange'}}
              className={`${ROW_STYLES}`}
            >
              <div></div>
              <p style={{ background: 'darkorchid'}} className="text-gray-400 font-normal"><strong>Poster: </strong>{article.user.name}</p>
            </div>
            <div
              style={{ background: 'darkorange'}}
              className={`${ROW_STYLES}`}
            >
              <div></div>
              <p style={{ background: 'deepskyblue'}} className="text-gray-400 font-normal"><strong>Last Posted: </strong>Dec. 14, 2023 @ 2:22pm</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

const Desktop = ({ articles }) => {

  const ROW_STYLES = `grid
    grid-rows-[1fr]
    grid-cols-[50px_1fr_1fr_1fr_1fr_1fr]
    gap-0 py-4
    border-gray-800
    text-md
  `
  return (
    <div id="outer-container"
      className="hidden lg:block"
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
        <h5>Views</h5>
        <h5>Replies</h5>
        <h5>Last post</h5>
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
                  height: '20px'
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
            <p className="text-gray-400 font-normal">0</p>
            <p className="text-gray-400 font-normal">0</p>
            <p className="text-gray-400 font-normal">0</p>
          </article>
        )
      })}
    </div>
  )
}

export const Success = ({ articles }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Mobile  {...{ articles }} />
      <Desktop {...{ articles }} />
    </div>
  )
}