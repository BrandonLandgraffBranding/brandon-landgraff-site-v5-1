import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/BrandonLandgraffLogo.svg'

import * as styles from './navigation.module.css'


const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img id='footer-logo' src={Logo} alt="Brandon Landgraff Logo"/>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
