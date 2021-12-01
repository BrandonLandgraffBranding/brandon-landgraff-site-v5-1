import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'

import Container from '../container';

import './capabilities.css';


const Capabilities = () => {

    //Reveal Animation
    const ref = useRef();

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(ref);

    useEffect(()=>{
      if(onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
      if(reveal){
        const split = new SplitText("#capabilities-text", {
          type: "lines",
        });

        gsap.to(split.lines, {
          duration: 1,
          y: -20,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        });

      }
    }, [reveal]);
  
  return (
    <section className={cn('capabilities-section section-height vh-100 dark-bg')} data-scroll-section>
      <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
      data-scroll-id="#111111" />
      <Container>
        <div className='two-column'>
          <div className='capabilities-explain'>
            <h4 ref={ref} id='capabilities-text' className={cn({'is-reveal text-margin': reveal})}>MY CAPABILITIES</h4>
            <h5 ref={ref} id='capabilities-text' className={cn({'is-reveal text-margin': reveal})}>I can change any design element in a shopify store. I'm a multidisciplinary individual who offers multiple skills sets but thinks about projects more holistically and comprehensively.</h5> 
          </div>
          <div className='capabilities'>
                  <div className='cabailities-container'>
                      <div className='cabailities-column-a'>
                          <div className='rotate'><h6>Start</h6></div>
                          <div className='line-container'>
                              <div className='line-div' data-scroll/>
                          </div>
                          <div className='rotate'><h6>Finish</h6></div>
                      </div>
                      <div className='cabailities-column-b'>
                          <div className='capability-item'>
                              <h2 ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Brand Identity</h2>
                              <p ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Logo, Colour Palette, Patterns, Elements</p>
                          </div>
                          <div className='capability-item'>
                              <h2 ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Brand Identity</h2>
                              <p ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Logo, Colour Palette, Patterns, Elements</p>
                          </div>
                          <div className='capability-item'>
                              <h2 ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Brand Strategy</h2>
                              <p ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Positioning, Competitor Research, Brand Story</p>
                          </div>
                          <div className='capability-item'>
                              <h2 ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>UX Design</h2>
                              <p ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>User Research, Wireframing, Split Testing</p>
                          </div>
                          <div className='capability-item'>
                              <h2 ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>UI Design</h2>
                              <p ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Interface Mockups, Layout, Graphic Design</p>
                          </div>
                          <div className='capability-item'>
                              <h2 ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>Front End Dev</h2>
                              <p ref={ref} id='capabilities-text' className={cn({'is-reveal': reveal})}>HTML, CSS, JavaScript, Liquid</p>
                          </div>
                      </div>
                  </div>
          </div>

        </div>
        </Container>
    </section>
  )
}

export default Capabilities