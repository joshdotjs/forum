import { render } from '@redwoodjs/testing/web'

import Reply from './Reply'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Reply', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Reply />)
    }).not.toThrow()
  })
})
