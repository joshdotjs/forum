import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'

import ThreadForm from 'src/components/Thread/ThreadForm'

const CREATE_THREAD_MUTATION = gql`
  mutation CreateThreadMutation($input: CreateThreadInput!) {
    createThread(input: $input) {
      id
    }
  }
`

const NewThread = () => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  const [createThread, { loading, error }] = useMutation(
    CREATE_THREAD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Thread created')
        navigate(routes.threads())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    // console.log('input: ', input);
    // console.log('current user id: ', currentUser.id);
    // debugger;

    createThread({ variables: { input: { ...input, userId: currentUser.id} } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Thread</h2>
      </header>
      <div className="rw-segment-main">
        <ThreadForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewThread
