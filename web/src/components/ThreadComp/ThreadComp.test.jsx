import { render } from '@redwoodjs/testing/web'

import ThreadComp from './ThreadComp'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThreadComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThreadComp />)
    }).not.toThrow()
  })
})
