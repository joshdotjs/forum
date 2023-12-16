import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ThreadsCell from 'src/components/Thread/ThreadsCell'

const ForumPage = () => {
  return (
    <>
      <MetaTags title="Forum" description="Forum page" />

      <ThreadsCell />
    </>
  )
}

export default ForumPage
