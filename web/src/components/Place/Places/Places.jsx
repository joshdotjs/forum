import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Place/PlacesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_PLACE_MUTATION = gql`
  mutation DeletePlaceMutation($id: Int!) {
    deletePlace(id: $id) {
      id
    }
  }
`

const PlacesList = ({ places }) => {
  const [deletePlace] = useMutation(DELETE_PLACE_MUTATION, {
    onCompleted: () => {
      toast.success('Place deleted')
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
    if (confirm('Are you sure you want to delete place ' + id + '?')) {
      deletePlace({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Price</th>
            <th>Address</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place) => (
            <tr key={place.id}>
              <td>{truncate(place.id)}</td>
              <td>{truncate(place.price)}</td>
              <td>{truncate(place.address)}</td>
              <td>{timeTag(place.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.place({ id: place.id })}
                    title={'Show place ' + place.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlace({ id: place.id })}
                    title={'Edit place ' + place.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete place ' + place.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(place.id)}
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

export default PlacesList
