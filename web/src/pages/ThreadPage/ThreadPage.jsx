import { MetaTags } from '@redwoodjs/web'
import ThreadCell from 'src/components/Thread/ThreadCell'
import RepliesCell from 'src/components/RepliesCell'

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{ children }</div>
)

const ThreadPage = ({ id }) => {

  return (
    <Container>
      <MetaTags title="Thread" description="Thread page" />
      <ThreadCell id={id} />
      <RepliesCell />
    </Container>
  )
}

export default ThreadPage
