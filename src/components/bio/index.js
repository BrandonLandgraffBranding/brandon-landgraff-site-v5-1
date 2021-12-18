import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'

import Container from '../container';

import './bio.css'

import Brandon from '../../images/brandon.webp'

const Bio = () => {

    //Reveal Animation
    const ref = useRef();

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(ref);

    useEffect(()=>{
      if(onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
      if(reveal){

        const split = new SplitText("#bio-text", {
          type: "lines",
        });

        gsap.to(split.lines, {
          duration: 1,
          y: -20,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
          delay: 2,
        });

      }
    }, [reveal]);
  

  return (
    <section ref={ref} className={cn('bio-section vh-100')} data-scroll-section>
      <Container>
        <div>
          <div className='line-container'>
              <div className='line-div' data-scroll/>
          </div>
          <div>
            <h4 className='section-title' data-scroll>WHAT IS A FULL STACK DESIGNER?</h4>
            <h4 className='section-part' data-scroll>PART 03</h4>
          </div>
        </div>

        <div>
        <div className='section-height section-wrap'>
          <div className='bio-container'>
              <>
                <div className='img-container'>
                    <img src={Brandon} alt="Brandon Landgraff" data-scroll/>
                </div>
              </>
          </div>
          <div className='text-explain'>
            <h2 id="bio-text" className={cn({'is-reveal text-margin': reveal})}>My name is Brandon Landgraff. 👋 I’m a solopreneur who builds brands and custom Shopify stores. It’s my job to use my creative capabilities to improve your store and drive sales.</h2>
          </div>
        </div>
        </div>
      </Container>
     </section>
  )
}

export default Bio