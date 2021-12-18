import React from 'react'
import { Link } from 'gatsby'
// import { window } from 'browser-monads'

import Logo from '../images/BrandonLandgraffMasterLogo.svg'
import LogoMark from '../images/BrandonLandgraffMarkLogo.svg'

import './navigation.css'

const Navigation = () => (
  <div className='menu'>
    <div className='menu-wrapper'>
      <a href="/" className='nav-logo'>
        <img id='nav-logo-master' src={Logo} alt="Brandon Landgraff Logo"/>
        <img id='nav-logo-mark' src={LogoMark} alt="Brandon Landgraff Logo Mark"/>
      </a>
      <p id='nav-email'><a href="mailto:hello@brandonlandgraff.com">Say Hello 👋</a></p>
    {/* <nav role="navigation" aria-label="Main">
      <ul className='nav-container'>
        <li className='nav-item'>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/blog" className='active'>
            Blog
          </Link>
        </li>
      </ul>
    </nav> */}
    </div>
  </div>
)

export default Navigation
