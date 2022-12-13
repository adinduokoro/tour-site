import { Outlet, Route } from "react-router-dom"
import Navbar from "./Navbar"
import '../../src/App.css';
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout