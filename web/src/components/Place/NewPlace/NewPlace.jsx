import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlaceForm from 'src/components/Place/PlaceForm'

const CREATE_PLACE_MUTATION = gql`
  mutation CreatePlaceMutation($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
    }
  }
`

const NewPlace = () => {
  const [createPlace, { loading, error }] = useMutation(CREATE_PLACE_MUTATION, {
    onCompleted: () => {
      toast.success('Place created')
      navigate(routes.places())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createPlace({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Place</h2>
      </header>
      <div className="rw-segment-main">
        <PlaceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlace
