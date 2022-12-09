import { Outlet, Route } from "react-router-dom"
import Navbar from "./Navbar"
import '../../src/App.css';

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout