import {
  threads,
  thread,
  createThread,
  updateThread,
  deleteThread,
} from './threads'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('threads', () => {
  scenario('returns all threads', async (scenario) => {
    const result = await threads()

    expect(result.length).toEqual(Object.keys(scenario.thread).length)
  })

  scenario('returns a single thread', async (scenario) => {
    const result = await thread({ id: scenario.thread.one.id })

    expect(result).toEqual(scenario.thread.one)
  })

  scenario('creates a thread', async () => {
    const result = await createThread({
      input: { title: 'String', body: 'String', userId: 1936165 },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.userId).toEqual(1936165)
  })

  scenario('updates a thread', async (scenario) => {
    const original = await thread({ id: scenario.thread.one.id })
    const result = await updateThread({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a thread', async (scenario) => {
    const original = await deleteThread({
      id: scenario.thread.one.id,
    })
    const result = await thread({ id: original.id })

    expect(result).toEqual(null)
  })
})
