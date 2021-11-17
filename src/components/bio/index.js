import React, { useState, useEffect } from "react";
import './bio.css';
import Brandon from '../../images/brandon.jpg';

const Bio = () => {

    //navbar scroll when active state
    const [main, setReviewbar] = useState(false)

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
        <div className={main ? 'main activeReview' : 'main'} data-scroll-section>
          <div className='bio__container'>
              <>
                <div className='img__container'>
                    <img src={Brandon} alt="Brandon Landgraff" />
                </div>
              </>
          </div>
          <div className='bio__text_container'>
            <h4>INTRODUCTION</h4>
            <h2>My name is Brandon 👋</h2>
            <p>My name is Brandon Landgraff. I’m a solopreneur who builds brands and custom Shopify stores. It’s my job to use my creative capabilities to improve your store and drive sales.</p>
          </div>
        </div>
  )
}

export default Bio