import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import { Toaster } from '@redwoodjs/web/toast'

const BlogLayout = ({ children }) => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  console.log('currentUser: ', currentUser);

  return (
    <>
      <Toaster />
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>

        <Link to={routes.home()}>Home</Link>
        <Link to={routes.about()}>About</Link>
        <Link to={routes.contact()}>Contact</Link>
      </header>

      {children}
    </>
  )
}

export default BlogLayout
