import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { Component } from 'react'
import { useState } from 'react'


function Navbar () {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const handleClose = () => {
    setClick(false)
  }

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>
        Trippy
      </h1>

      <div className='menu-icons'onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={click ? 'nav-menu active' : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return(
            <li key={index}>
              <Link className={item.cName} to={item.url} onClick={handleClose}>
                <i className={item.icon}></i>{item.title}
              </Link>
            </li>
          )
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  )
}

export default Navbar