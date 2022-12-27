import React from 'react'
import './navbar.css'
import logo from '../../../assets/images/logo.svg'
import mainLogo from '../../../assets/images/navLogo.svg'

const NavBar = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav-bar'>
          <div className='nav-icon'>
            <img src={logo} alt='' />
          </div>
          <div className='nav-logo'>
            <img src={mainLogo} alt='' />
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <a href='/'>home</a>
              </li>
              <li>
                <a href='/'>about</a>
              </li>
              <li>
                <a href='/'>contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
