import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.jsx</code>
      </p>
      <p>
        My default route is named <code>article</code>, link to me with `
        <Link to={routes.article({ id })}>Article id: {id}</Link>`
      </p>
      <p>My ID is: { id }</p>

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
