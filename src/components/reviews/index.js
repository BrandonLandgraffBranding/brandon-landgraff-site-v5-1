import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import useOnScreen from '../../components/hooks/useOnScreen.js'
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

        //Reveal Subheader Animation
        const refSubheader = useRef();

        const [revealSubheader, setSubheaderReveal] = useState(false);
    
        const onSubheaderScreen = useOnScreen(refSubheader);
    
        useEffect(()=>{
          if(onSubheaderScreen) setSubheaderReveal(onSubheaderScreen);
        }, [onSubheaderScreen]);
    
        useEffect(() => {
          if(revealSubheader){
    
            new SplitText("h4", { type: "lines", linesClass: "lineChild" });
            new SplitText("h4", { type: "lines", linesClass: "lineParent" });
            const tl = gsap.timeline();
            tl.from(".lineChild", {y:20, stagger:0.25});
    
          }
        }, [revealSubheader]);

  return (
    <section className='vh-100' data-scroll-section>
      <span ref={refSubheader} />
      <Container>
      <div>
        <div className='line-container'>
            <div className='line-div' data-scroll/>
        </div>
        <div>
          <h4 className='section-title'>WHAT CLIENTS SAY ABOUT ME!</h4>
          <h4 className='section-part'>PART 02</h4>
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
