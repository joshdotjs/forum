import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ThreadForm from 'src/components/Thread/ThreadForm'

export const QUERY = gql`
  query EditThreadById($id: Int!) {
    thread: thread(id: $id) {
      id
      title
      body
      userId
      createdAt
    }
  }
`
const UPDATE_THREAD_MUTATION = gql`
  mutation UpdateThreadMutation($id: Int!, $input: UpdateThreadInput!) {
    updateThread(id: $id, input: $input) {
      id
      title
      body
      userId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ thread }) => {
  const [updateThread, { loading, error }] = useMutation(
    UPDATE_THREAD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Thread updated')
        navigate(routes.threads())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateThread({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Thread {thread?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ThreadForm
          thread={thread}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
