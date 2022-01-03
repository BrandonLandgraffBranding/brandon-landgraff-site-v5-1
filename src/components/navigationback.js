import React from 'react'
import { Link } from 'gatsby'

import './navigation.css'

// import Layout from '../components/layout'
import Container from './container'
import Chevron from '../components/dropdown/chevron.js'

const NavigationBack = () => (
  <Container>
    <div className='menu__back'>
        <div className='menu__wrapper__back'>
            <Link to="/" >
                <Chevron className='chevron-prev' width={14} fill={"#4A4A4A"} /> Go Back
            </Link>
        </div>
    </div>
  </Container>
)

export default NavigationBack
