import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
// import Locomotive from './LocomotiveTest'
import Navigation from './navigation'
import Footer from './footer'

import ScrollProvider from './locomotivescrollprovider'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <ScrollProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ScrollProvider>
      </>
    )
  }
}

export default Template
