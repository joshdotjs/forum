import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlaceForm from 'src/components/Place/PlaceForm'

export const QUERY = gql`
  query EditPlaceById($id: Int!) {
    place: place(id: $id) {
      id
      price
      address
      createdAt
    }
  }
`
const UPDATE_PLACE_MUTATION = gql`
  mutation UpdatePlaceMutation($id: Int!, $input: UpdatePlaceInput!) {
    updatePlace(id: $id, input: $input) {
      id
      price
      address
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ place }) => {
  const [updatePlace, { loading, error }] = useMutation(UPDATE_PLACE_MUTATION, {
    onCompleted: () => {
      toast.success('Place updated')
      navigate(routes.places())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePlace({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Place {place?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlaceForm
          place={place}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
