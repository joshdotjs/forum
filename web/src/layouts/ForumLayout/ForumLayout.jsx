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
      <main>
        {children}
      </main>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  )
}

export default ForumLayout