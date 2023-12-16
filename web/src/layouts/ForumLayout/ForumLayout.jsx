import Navbar from "./ForumNavbar"

const ForumLayout = ({ children }) => {
  return <>
    <Navbar />
    {children}
  </>
}

export default ForumLayout
