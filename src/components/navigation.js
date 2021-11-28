import React from 'react'
// import { Link } from 'gatsby'

import Logo from '../images/BrandonLandgraffMasterLogo.svg'
import LogoMark from '../images/BrandonLandgraffMarkLogo.svg'

import './navigation.css'

import Container from './container'

const Navigation = () => (
  <Container data-scroll-section>
  <div className='menu'>
    <div className='menu-wrapper'>
      <a href="/" className='nav-logo'>
        <img id='nav-logo-master' src={Logo} alt="Brandon Landgraff Logo"/>
        <img id='nav-logo-mark' src={LogoMark} alt="Brandon Landgraff Logo Mark"/>
      </a>
    <nav role="navigation" aria-label="Main">
      <ul className='nav-container'>
        <li className='nav-item'>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href="/blog/" className='active'>
            Blog
          </a>
        </li>
      </ul>
    </nav>
    </div>
  </div>
  </Container>
)

export default Navigation
