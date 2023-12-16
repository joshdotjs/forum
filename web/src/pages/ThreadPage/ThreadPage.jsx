import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ThreadPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Thread" description="Thread page" />

      <h1>ThreadPage</h1>
      <p>
        Thread ID: {id}
      </p>

    </>
  )
}

export default ThreadPage
