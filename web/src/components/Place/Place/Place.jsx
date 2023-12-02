import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PLACE_MUTATION = gql`
  mutation DeletePlaceMutation($id: Int!) {
    deletePlace(id: $id) {
      id
    }
  }
`

const Place = ({ place }) => {
  const [deletePlace] = useMutation(DELETE_PLACE_MUTATION, {
    onCompleted: () => {
      toast.success('Place deleted')
      navigate(routes.places())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete place ' + id + '?')) {
      deletePlace({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Place {place.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{place.id}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{place.price}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{place.address}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(place.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlace({ id: place.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(place.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Place
