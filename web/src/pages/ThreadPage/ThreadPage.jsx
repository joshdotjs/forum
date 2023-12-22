import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import ThreadCell from 'src/components/Thread/ThreadCell'
import RepliesCell from 'src/components/RepliesCell'
import ReplyModal from './ReplyModal'
import Button from 'src/components/Button/Button'

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{ children }</div>
)

const ThreadPage = ({ id }) => {

  const [open, setOpen] = useState(false)

  return (
    <Container>
      <MetaTags title="Thread" description="Thread page" />
      <ReplyModal threadId={id} {...{ open, setOpen }} />
      <ThreadCell id={id} />
      <RepliesCell threadId={id} />
      <Button onClick={() => setOpen(true)}>
        Add Reply
      </Button>
    </Container>
  )
}

export default ThreadPage
