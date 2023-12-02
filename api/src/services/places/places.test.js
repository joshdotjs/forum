import { places, place, createPlace, updatePlace, deletePlace } from './places'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('places', () => {
  scenario('returns all places', async (scenario) => {
    const result = await places()

    expect(result.length).toEqual(Object.keys(scenario.place).length)
  })

  scenario('returns a single place', async (scenario) => {
    const result = await place({ id: scenario.place.one.id })

    expect(result).toEqual(scenario.place.one)
  })

  scenario('creates a place', async () => {
    const result = await createPlace({
      input: { price: 'String', address: 'String' },
    })

    expect(result.price).toEqual('String')
    expect(result.address).toEqual('String')
  })

  scenario('updates a place', async (scenario) => {
    const original = await place({ id: scenario.place.one.id })
    const result = await updatePlace({
      id: original.id,
      input: { price: 'String2' },
    })

    expect(result.price).toEqual('String2')
  })

  scenario('deletes a place', async (scenario) => {
    const original = await deletePlace({ id: scenario.place.one.id })
    const result = await place({ id: original.id })

    expect(result).toEqual(null)
  })
})
