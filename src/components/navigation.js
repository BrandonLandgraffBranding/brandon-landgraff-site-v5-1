import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/BrandonLandgraffMasterLogo.svg'
import LogoMark from '../images/BrandonLandgraffMarkLogo.svg'

// import * as styles from './navigation.module.css'

import './navigation.css'

import Container from './container'

const Navigation = () => (
  <Container>
  <div className='menu'>
    <Link to="/" className='nav-logo'>
      <img id='nav-logo-master' src={Logo} alt="Brandon Landgraff Logo"/>
      <img id='nav-logo-mark' src={LogoMark} alt="Brandon Landgraff Logo Mark"/>
    </Link>
  <nav role="navigation" aria-label="Main">
    <ul className='nav-container'>
      <li className='nav-item'>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
  </div>
  </Container>
)

export default Navigation
