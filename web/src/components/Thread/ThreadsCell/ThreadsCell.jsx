import { Link, routes } from '@redwoodjs/router'

import Threads from 'src/components/Thread/Threads'

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

export const Success = ({ threads }) => {
  return <Threads threads={threads} />
}
