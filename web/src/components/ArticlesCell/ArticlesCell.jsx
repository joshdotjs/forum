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
      className="block lg:hidden pt-2"
    >
      {articles.map((article) => {
        return (
          // <Article key={article.id} article={article} summary={true} />
          <article id="row"
            key={`article-${article.id}`}
            style={{
              borderBottomWidth: '1px'
            }}
            className={`
              grid
              grid-rows-[1fr_1fr]
              grid-cols-[1fr]
              gap-0 py-2
              border-gray-800
              font-semibold text-gray-800
              text-sm
          `}
          >
            <div
              // style={{ background: 'limegreen'}}
              className={`
                grid
                grid-cols-[50px_1fr]
              `}
            >
              <p
                // style={{ background: 'green' }}
                className='flex items-center justify-center cursor-pointer'
                onClick={() => alert('TODO: add functionality')}
              >
                <FolderPlusIcon style={{ height: '17px' }} />
              </p>
              <p className="text-blue-700 font-semibold">
                <Link to={routes.article({ id: article.id })}>
                  <span className='inline xs:hidden sm:hidden'>{truncate(article.title, 24)}</span>
                  <span className='hidden sm:inline md:hidden'>{truncate(article.title, 48)}</span>
                  <span className='hidden md:inline '>{truncate(article.title, 64)}</span>
                </Link>
              </p>
            </div>
            <div
              // style={{ background: 'darkorange'}}
              className={`${ROW_STYLES}`}
            >
              <div></div>
              <p
                // style={{ background: 'darkorchid'}}
                className="font-normal"
              >
                <strong>By: </strong>{article.user.name}
              </p>
            </div>
            <div
              // style={{ background: 'yellow'}}
              className={`${ROW_STYLES}`}
            >
              <div></div>
              <p
                // style={{ background: 'deepskyblue'}}
                className="font-normal"
              >
                  <strong>Last Post: </strong>Dec. 14, 2023 @ 2:22pm
                </p>
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
    grid-cols-[50px_1fr_200px_65px_65px_65px]
    gap-0 py-2
    border-gray-800
    text-sm
  `
  return (
    <div id="outer-container"
      className="hidden lg:block pt-4"
    >

      <div id="title"
        className={`${ROW_STYLES}
          font-semibold text-gray-700
          border-b-2
        `}
      >
        <h5> </h5>
        <h5
          // style={{ background: 'lightblue' }}
        >
          Subject
        </h5>
        <h5
          // style={{ background: 'lightgreen' }}
        >
          Poster
        </h5>
        <h5
          // style={{ background: 'darkorchid' }}
        >
          Views
        </h5>
        <h5
          // style={{ background: 'tomato' }}
        >
          Replies
        </h5>
        <h5
          // style={{ background: 'deepskyblue' }}
        >
          Last post
        </h5>
      </div>

      {articles.map((article) => {
        return (
          // <Article key={article.id} article={article} summary={true} />
          <article id="row"
            key={`article-${article.id}`}
            className={`${ROW_STYLES}
              font-semibold text-gray-800
            `}
            style={{ borderBottomWidth: '1px' }}
          >
            <p
              style={{
                // background: 'green'
              }}
              className='flex items-center justify-center cursor-pointer'
              onClick={() => alert('TODO: add functionality')}
            >
              <FolderPlusIcon style={{ height: '18px'}} />
            </p>
            <p className="text-blue-700 font-semibold">
              <Link to={routes.article({ id: article.id })}>
                {/* <span className='inline lg:hidden'>{truncate(article.title, 16)}</span> */}
                {/* <span className='hidden lg:inline'>{truncate(article.title, 20)}</span> */}
                <span className='inline xl:hidden'>{truncate('012345678901234567890123456789012345678901234567890123456789', 56)}</span>

                <span className='hidden xl:inline'>{truncate('012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789', 84)}</span>
              </Link>
            </p>

            {/* <p className="text-gray-400 font-normal">{truncate(article.user.name, 20)}</p> */}
            <p className="font-normal">{truncate('012345678901234567890123456789', 19)}</p>
            <p className="font-normal">0</p>
            <p className="font-normal">0</p>
            <p className="font-normal">0</p>
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