import { Link, routes } from '@redwoodjs/router'
import Threads from 'src/components/Thread/Threads'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useAuth } from 'src/auth'

const truncate = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

export const QUERY = gql`
  query FindThreads {
    threads {
      id
      title
      body
      userId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No threads yet. '}
      <Link to={routes.newThread()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)


const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]


export const Success = ({ threads }) => {
  // return <Threads threads={threads} />


  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">Threads</h1>
                <p className="mt-2 text-sm text-gray-300">
                  A list of all the threads in the forum.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">

                 {isAuthenticated &&
                    <Link
                      to={routes.newThread()}
                      type="button"
                      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                      New Thread
                    </Link>
                 }

              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                          Title
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Body
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          User
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Created
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {threads.map((thread) => {
                        const key = `thread-row-${thread.id}`;
                        return (
                        <tr key={key}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {truncate(thread.title, 32)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{truncate(thread.body, 32)}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{thread.userId}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{thread.createdAt}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            {/* <a href="#" className="text-indigo-400 hover:text-indigo-300">
                              Edit<span className="sr-only">, {key}</span>
                            </a> */}
                            <Link
                              to={routes.thread({ id: thread.id })}
                              title={'View thread ' + thread.id}
                              className="text-indigo-400 hover:text-indigo-300"
                            >
                              View<span className="sr-only">, {key}</span>
                            </Link>
                          </td>
                        </tr>
                      )})}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
