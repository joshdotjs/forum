import { Link, routes } from '@redwoodjs/router'
import { truncate } from 'src/lib/formatters'
import { FolderPlusIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useAuth } from 'src/auth'
import { formatDate, formatTime } from "src/lib/formatters"

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
      comments {
        id
      }
    }
  }
`

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
              text-gray-300
              font-semibold
              border-gray-800
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
              <p className="font-semibold">
                <Link to={routes.article({ id: article.id })} className="text-indigo-400 hover:text-indigo-300">
                  <span className='inline xs:hidden sm:hidden'>{truncate(article.title, 24)}</span>
                  <span className='hidden sm:inline md:hidden'>{truncate(article.title, 48)}</span>
                  <span className='hidden md:inline '>{truncate(article.title, 64)}</span>
                  <span className="sr-only">, {article.title}</span>
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
                <strong>Last Post: </strong>{formatDate(article.createdAt)}<span></span><span className="mx-2">|</span><span>{formatTime(article.createdAt)}</span>
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
          font-semibold text-white
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
              font-semibold text-gray-300
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
            <p className="font-semibold ">
              <Link to={routes.article({ id: article.id })} className="text-indigo-400 hover:text-indigo-300">
                {/* <span className='inline lg:hidden'>{truncate(article.title, 16)}</span> */}
                {/* <span className='hidden lg:inline'>{truncate(article.title, 20)}</span> */}
                <span className='inline xl:hidden'>{truncate('012345678901234567890123456789012345678901234567890123456789', 56)}</span>
                <span className='hidden xl:inline'>{truncate('012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789', 84)}</span>
                <span className="sr-only">, {article.title}</span>
              </Link>
            </p>

            {/* <p className="text-gray-400 font-normal">{truncate(article.user.name, 20)}</p> */}
            <p className="font-normal">{truncate('012345678901234567890123456789', 19)}</p>
            <p className="font-normal">0</p>
            <p className="font-normal">{ article.comments.length }</p>
            <p className="font-normal">0</p>
          </article>
        )
      })}
    </div>
  )
}

export const Success = ({ articles }) => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>

      <div className="flex sm:items-center">
        <div className="flex-auto">
          <h1 className="text-base font-semibold leading-6 text-white">Threads</h1>
          <p className="mt-2 text-sm text-gray-300 hidden sm:inline-block">
            A list of all the threads in the forum.
          </p>
        </div>
        <div className="sm:mt-4 ml-16 flex-none">

          {isAuthenticated &&
            <Link
              to={routes.newPost()}
              type="button"
              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              New Thread
            </Link>
          }

        </div>
      </div>

      <Mobile  {...{ articles }} />
      <Desktop {...{ articles }} />
    </>
  )
}