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
          delay: 2,
        });

      }
    }, [reveal]);

        //Reveal Second Animation
        const refsecond = useRef();

        const [revealsecond, setSecondReveal] = useState(false);
    
        const onSecondScreen = useOnScreen(refsecond);
    
        useEffect(()=>{
          if(onSecondScreen) setSecondReveal(onSecondScreen);
        }, [onSecondScreen]);
    
        useEffect(() => {
          if(revealsecond){
    
            const split = new SplitText("#second-text", {
              type: "lines",
            });
    
            gsap.to(split.lines, {
              duration: 1,
              y: -50,
              opacity: 1,
              stagger: 0.5,
              ease: "power2",
              delay: 1,
            });
    
          }
        }, [revealsecond]);
  
  return (
    <section ref={ref} className={cn('capabilities-section vh-100')} data-scroll-section>
      <Container>
      <div>
        <div className='line-container'>
            <div className='line-div' data-scroll/>
        </div>
        <div>
          <h4 className='section-title' data-scroll>WHAT ARE MY CAPABILITIES?</h4>
          <h4 className='section-part' data-scroll>PART 03</h4>
        </div>
      </div>
      <div className='section-height section-wrap'>
          <div className='text-explain'>
            <h2 id='capabilities-text' className={cn({'is-reveal': reveal})}>I’ve been known to be a design wizard! I
            have a broad skillset but my bread and
            butter is UX/UI Design. </h2> 
          </div>
            <div ref={refsecond} className='cabailities-container'>
                          <div className='capability-item'>
                              <h3 id='second-text' className={cn({'is-reveal': reveal})}>Brand Identity</h3>
                              <p id='second-text' className={cn({'is-reveal': reveal})}>Logo, Colour Palette, Patterns, Elements</p>
                          </div>
                          <div className='capability-item'>
                              <h3 id='second-text' className={cn({'is-reveal': reveal})}>Brand Strategy</h3>
                              <p id='second-text' className={cn({'is-reveal': reveal})}>Positioning, Competitor Research, Brand Story</p>
                          </div>
                          <div className='capability-item'>
                              <h3 id='second-text' className={cn({'is-reveal': reveal})}>UX Design</h3>
                              <p id='second-text' className={cn({'is-reveal': reveal})}>User Research, Wireframing, Split Testing</p>
                          </div>
                          <div className='capability-item'>
                              <h3 id='second-text' className={cn({'is-reveal': reveal})}>UI Design</h3>
                              <p id='second-text' className={cn({'is-reveal': reveal})}>Interface Mockups, Layout, Graphic Design</p>
                          </div>
                          <div className='capability-item'>
                              <h3 id='second-text' className={cn({'is-reveal': reveal})}>Front End Dev</h3>
                              <p id='second-text' className={cn({'is-reveal': reveal})}>HTML, CSS, JavaScript, Liquid</p>
                          </div>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Capabilities