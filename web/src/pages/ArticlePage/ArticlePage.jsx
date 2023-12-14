import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'
import CommentsCell from 'src/components/CommentsCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>

      <p className="text-blue-500 underline">
        <Link to={routes.article({ id })}>Article id: {id}</Link>`
      </p>

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
