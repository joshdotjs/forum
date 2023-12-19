import { replies } from './replies'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('replies', () => {
  scenario('returns all replies', async (scenario) => {
    const result = await replies()

    expect(result.length).toEqual(Object.keys(scenario.reply).length)
  })
})
