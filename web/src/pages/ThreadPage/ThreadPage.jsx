import { MetaTags } from '@redwoodjs/web'
import ThreadCell from 'src/components/Thread/ThreadCell'

const ThreadPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Thread" description="Thread page" />
      <ThreadCell id={id} />
    </>
  )
}

export default ThreadPage
