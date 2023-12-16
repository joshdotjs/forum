import { render } from '@redwoodjs/testing/web'

import ForumPage from './ForumPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ForumPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForumPage />)
    }).not.toThrow()
  })
})
