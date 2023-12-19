import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import ThreadCell from 'src/components/Thread/ThreadCell'
import RepliesCell from 'src/components/RepliesCell'
import Modal from './Modal'

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{ children }</div>
)

const ThreadPage = ({ id }) => {

  const [open, setOpen] = useState(true)

  return (
    <Container>
      <MetaTags title="Thread" description="Thread page" />
      <button
        type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setOpen(true)}
      >
        Button text
      </button>
      <ThreadCell id={id} />
      <RepliesCell />
      <Modal {...{ open, setOpen }} />
    </Container>
  )
}

export default ThreadPage
