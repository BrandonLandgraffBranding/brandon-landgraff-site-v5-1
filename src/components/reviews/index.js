import React, { useState, useEffect } from "react";
import Flickity from "react-flickity-component";

import './flickity.css';
import './reviews.css';

function Carousel () {
    return (
      <Flickity>
        <div className='carousel-cell'>
            <h5>He did a good job.</h5>
            <p id='reviewName'>John Doe</p>
        </div>
        <div className='carousel-cell'>
            <h5>He did a splendid job.</h5>
            <p id='reviewName'>John Doe</p>
        </div>
        <div className='carousel-cell'>
            <h5>He did a wonderful job!</h5>
            <p id='reviewName'>John Doe</p>
        </div>
      </Flickity>
    );
  }

const Reviewbar = () => {
  //navbar scroll when active state
  const [reviewbar, setReviewbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
        setReviewbar(true)
    } else {
        setReviewbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
      <div className={reviewbar ? 'reviewbar activeReview' : 'reviewbar'} data-scroll-section>
        <div className='testimonials__section'>
            <h4>TESTIMONIALS</h4>
            <Carousel />
        </div>
      </div>
  )
}

export default Reviewbar
