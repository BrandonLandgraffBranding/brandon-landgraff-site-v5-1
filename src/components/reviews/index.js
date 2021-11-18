import React from 'react'
import Flickity from 'react-flickity-component'

import './flickity.css'
import './reviews.css'

function Carousel () {
    return (
      <Flickity>
          <div className='carousel-cell'>
              <div className='carousel-cell-inner'>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
              </div>
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
  // //navbar scroll when active state
  // const [reviewbar, setReviewbar] = useState(false)

  // //navbar scroll changeBackground function
  // const changeBackground = () => {
  //   console.log(window.scrollY)
  //   if (window.scrollY >= 100) {
  //       setReviewbar(true)
  //   } else {
  //       setReviewbar(false)
  //   }
  // }

  // useEffect(() => {
  //   changeBackground()
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeBackground)
  // })

  return (
    <section data-scroll-section>
      <div className='reviewbar vh-100'>
      <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
             data-scroll-id="#1C1C1C" />
        <div className='testimonials__section dark-bg'>
            <h4>TESTIMONIALS</h4>
            <Carousel />
            <p
            role="img"
            aria-label=""
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
          >
            👋
          </p>
        </div>
      </div>
        
    </section>
  )
}

export default Reviewbar
