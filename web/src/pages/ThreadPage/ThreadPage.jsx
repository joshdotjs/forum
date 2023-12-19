import { MetaTags } from '@redwoodjs/web'
import ThreadCell from 'src/components/Thread/ThreadCell'

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{ children }</div>
)

const ThreadPage = ({ id }) => {

  return (
    <Container>
      <MetaTags title="Thread" description="Thread page" />
      <ThreadCell id={id} />
    </Container>
  )
}

export default ThreadPage
