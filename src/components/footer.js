import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <section data-scroll-section>
    <Container as="footer">
      <div className={styles.container}>
        Built with <a href="https://contentful.com/">Contentful</a> and{' '}
        <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
        <a href="https://github.com/contentful/starter-gatsby-blog">Source</a>
      </div>
    </Container>
  </section>
)

export default Footer
