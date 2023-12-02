import { Link, routes } from '@redwoodjs/router'

import Places from 'src/components/Place/Places'

export const QUERY = gql`
  query FindPlaces {
    places {
      id
      price
      address
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No places yet. '}
      <Link to={routes.newPlace()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ places }) => {
  return <Places places={places} />
}
