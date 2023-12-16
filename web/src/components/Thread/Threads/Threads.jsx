import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Thread/ThreadsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_THREAD_MUTATION = gql`
  mutation DeleteThreadMutation($id: Int!) {
    deleteThread(id: $id) {
      id
    }
  }
`

const ThreadsList = ({ threads }) => {
  const [deleteThread] = useMutation(DELETE_THREAD_MUTATION, {
    onCompleted: () => {
      toast.success('Thread deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete thread ' + id + '?')) {
      deleteThread({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>User id</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {threads.map((thread) => (
            <tr key={thread.id}>
              <td>{truncate(thread.id)}</td>
              <td>{truncate(thread.title)}</td>
              <td>{truncate(thread.body)}</td>
              <td>{truncate(thread.userId)}</td>
              <td>{timeTag(thread.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.thread({ id: thread.id })}
                    title={'Show thread ' + thread.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editThread({ id: thread.id })}
                    title={'Edit thread ' + thread.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete thread ' + thread.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(thread.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ThreadsList
