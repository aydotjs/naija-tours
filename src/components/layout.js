import React, {useState}  from "react"
import Footer from "./Footer"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Sidebar from "./Sidebar"


const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <GlobalStyle/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Header toggle={toggle}/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
export default Layout
