import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import './hero.css'

import Container from './container'

const Hero = ({ image, title, content, author, rawdate, publishdate, time }) => (
  <section data-scroll-section>
    <Container>
      <div className='blog-post-hero'>
        <div>
        {image && (
          <GatsbyImage className='blog-post-image' alt={title} image={image} />
        )}
        </div>
        <div className='blog-post-details'>
          <h1 className='blog-post-title'>{title}</h1>
          {content && <p className='blog-post-content'>{content}</p>}
          <div className='blog-post-meta'>
                  {author} &middot;{' '}
                  <time dateTime={rawdate}>{publishdate}</time> –{' '}
                  {time} minute read
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default Hero
