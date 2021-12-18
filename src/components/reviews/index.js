import React from 'react'
import Flickity from 'react-flickity-component'

import Container from '../container';

import './flickity.css'
import './reviews.css'

function Carousel () {

    return (
      <Flickity>
          <div className='carousel-cell'>
              <div className='carousel-cell-inner'>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
                <p id='reviewName'>John Doe</p>
              </div>
          </div>
          <div className='carousel-cell'>
            <div className='carousel-cell-inner'>
              <h5>He did a splendid job.</h5>
              <p id='reviewName'>John Doe</p>
            </div>
          </div>
          <div className='carousel-cell'>
            <div className='carousel-cell-inner'>
              <h5>He did a wonderful job!</h5>
              <p id='reviewName'>John Doe</p>
            </div>
          </div>
      </Flickity>
    );
  }

const Reviewbar = () => {
  return (
    <section className='vh-100' data-scroll-section>
      <Container>
      <div>
        <div className='line-container'>
            <div className='line-div' data-scroll/>
        </div>
        <div>
          <h4 className='section-title' data-scroll>WHAT CLIENTS SAY ABOUT ME!</h4>
          <h4 className='section-part' data-scroll>PART 02</h4>
        </div>
      </div>
        <div className='section-height'>
          <div className='testimonials-section'>
              <Carousel />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Reviewbar
