import { Toaster } from '@redwoodjs/web/toast'
import Navbar from "./ForumNavbar"

const ForumLayout = ({ children }) => {
  return <>
    <Toaster />
    <Navbar />
    {children}
  </>
}

export default ForumLayout