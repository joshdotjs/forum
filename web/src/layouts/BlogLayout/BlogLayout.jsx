import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return <>
    <header>
      <Link to={routes.home()}>Home</Link>`
      <Link to={routes.about()}>About</Link>`
    </header>

    {children}
  </>
}

export default BlogLayout
