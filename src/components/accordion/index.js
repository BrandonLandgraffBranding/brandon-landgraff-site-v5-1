import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'

import Accordion from '../dropdown/accordion';

import Container from '../container';

// import './accordion.css';
// import Chevron from './chevron.js';


const FAQ = () => {

  //Reveal Animation
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
          duration: 1,
          y: -20,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        });

        new SplitText("h4", { type: "lines", linesClass: "lineChild" });
        new SplitText("h4", { type: "lines", linesClass: "lineParent" });
        const tl = gsap.timeline();
        tl.from(".lineChild", {y:20, stagger:0.25});

      }
    }, [reveal]);
  
  return (
    <section ref={ref} className={cn('acc-section vh-100')} data-scroll-section>
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
        <div className='two-column section-height'>
          <div className='text-explain'>
            <h2 id="description-text" className={cn({'is-reveal text-margin': reveal})}>Have questions you want to ask me?</h2>
          </div>
          <div>
            <Accordion
                title="What is your return policy?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Accordion
                title="Which languages does you support?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Accordion
                title="Can I use a custom domain?"
                content="
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </br>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </br>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
              /> 
            </div>
          </div>
      </Container>
    </section>
  )
}

export default FAQ