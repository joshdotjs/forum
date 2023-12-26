import { Toaster } from '@redwoodjs/web/toast'
import Navbar from "./ForumNavbar"
import Footer from "./ForumFooter"

const ForumLayout = ({ children }) => {
  return (
    <div
      className="bg-gray-900 text-white"
      style={{ // sticky footer
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Toaster />
      <Navbar />
      <main className="bg-gray-900 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-gray-300" style={{ width: '100%'}}>
        {children}
      </main>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  )
}

export default ForumLayout