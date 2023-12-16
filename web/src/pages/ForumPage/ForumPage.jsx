import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ForumPage = () => {
  return (
    <>
      <MetaTags title="Forum" description="Forum page" />

      <h1>ForumPage</h1>
      <p>
        Find me in <code>./web/src/pages/ForumPage/ForumPage.jsx</code>
      </p>
      <p>
        My default route is named <code>forum</code>, link to me with `
        <Link to={routes.forum()}>Forum</Link>`
      </p>
    </>
  )
}

export default ForumPage
