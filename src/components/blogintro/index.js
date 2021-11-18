import React, { useState, useEffect } from "react";
import './blogintro.css';

import Container from '../container';

const Blogintro = () => {

    // //navbar scroll when active state
    // const [blogintro, setWhite] = useState(false)

    // //navbar scroll changeBackground function
    // const changeBackground = () => {
    //   console.log(window.scrollY)
    //   if (window.scrollY >= 1000) {
    //       setWhite(true)
    //   } else {
    //       setWhite(false)
    //   }
    // }
  
    // useEffect(() => {
    //   changeBackground()
    //   // adding the event when scroll change background
    //   window.addEventListener("scroll", changeBackground)
    // })
  

  return (
    <section data-scroll-section>
        <div className='blogintro'>
            <Container>
                <h4>PAST PROJECTS, IDEAS, AND MORE</h4>
                <h2 className='blog__title'>Blog</h2>
            </Container>
        </div>
    </section>
  )
}

export default Blogintro