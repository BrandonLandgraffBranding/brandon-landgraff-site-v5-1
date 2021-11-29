import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'

import Container from '../container';

import './bio.css'

import Brandon from '../../images/brandon.webp'

const Bio = () => {

  const ref = useRef();
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref);

  useEffect(()=>{
    if(onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if(reveal){
      const split = new SplitText("#description-text", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 2,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });

    }
  }, [reveal]);
  

  return (
    <section className={cn('bio-section')} data-scroll-section>
      <Container>
        <div className='two-column vh-100 dark-bg'>
          <div className='bio__container'>
              <>
                <div className='img__container'>
                <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
             data-scroll-id="#121212" />
                    <img src={Brandon} alt="Brandon Landgraff" data-scroll/>
                </div>
              </>
          </div>
          <div className='bio__text_container'>
            <h4 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>INTRODUCTION</h4>
            <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>My name is Brandon Landgraff. 👋 I’m a solopreneur who builds brands and custom Shopify stores. It’s my job to use my creative capabilities to improve your store and drive sales.</h5>
          </div>
        </div>
      </Container>
     </section>
  )
}

export default Bio