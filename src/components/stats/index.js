import React, { useState, useEffect } from "react";
import { useCountUp } from 'react-countup';
import './stats.css';

import Container from '../container';


const Stats = () => {

    const countUpRefExp = React.useRef(null);

    const { start } = useCountUp({
        ref: countUpRefExp,
        duration: 1,
        end: 7
        // startOnMount: true
    })



    //navbar scroll when active state
    const [stats, setWhite] = useState(false)

    //navbar scroll changeBackground function
    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 1000) {
          setWhite(true)
          start(true)

      } else {
          setWhite(false)
          start(false)

      }
    }
  
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })
  

  return (
        <div className={stats ? 'stats activeWhite' : 'stats'} data-scroll-section>
            <Container>
            <div id="" ref={countUpRefExp} />
                <h4>PAST PROJECTS, IDEAS, AND MORE</h4>
                <h2 className='blog__stats'>Blog</h2>
            </Container>
        </div>
  )
}

export default Stats