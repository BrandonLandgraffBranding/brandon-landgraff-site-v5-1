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

      }
    }, [reveal]);
  
  return (
    <section className={cn('bio-section vh-100')} data-scroll-section>
      <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
             data-scroll-id="#121212" />
      <Container>
        <div className='two-column dark-bg'>
          <div>
            <h4 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>FREQUENTLY ASKED QUESTIONS</h4>
            <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>Have questions you want to ask me?</h5>
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