import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_THREAD_MUTATION = gql`
  mutation DeleteThreadMutation($id: Int!) {
    deleteThread(id: $id) {
      id
    }
  }
`

const Thread = ({ thread }) => {
  const [deleteThread] = useMutation(DELETE_THREAD_MUTATION, {
    onCompleted: () => {
      toast.success('Thread deleted')
      navigate(routes.threads())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete thread ' + id + '?')) {
      deleteThread({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Thread {thread.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{thread.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{thread.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{thread.body}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{thread.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(thread.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editThread({ id: thread.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(thread.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Thread
