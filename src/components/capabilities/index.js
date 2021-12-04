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
    <section ref={ref} className={cn('capabilities-section vh-100')} data-scroll-section>
      <span ref={refSubheader} data-scroll data-scroll-repeat data-scroll-call="pageColor" 
      data-scroll-id="#EDEDED" />
      <Container>
      <div>
        <div className='line-container'>
            <div className='line-div' data-scroll/>
        </div>
        <div>
          <h4 className='section-title'>WHAT IS A FULL STACK DESIGNER?</h4>
          <h4 className='section-part'>PART 01</h4>
        </div>
      </div>

      <div className='section-height'>
          <div className='text-explain'>
            <h2 id='capabilities-text' className={cn({'is-reveal': reveal})}>A full stack designer is multidisciplinary individual who offers 
            multiple skill sets but thinks about projects more holistically 
            and comprehensively.</h2> 
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