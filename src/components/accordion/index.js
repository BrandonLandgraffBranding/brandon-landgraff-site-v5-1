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
        {/* <div>
          <div className='line-container'>
              <div className='line-div' data-scroll/>
          </div>
          <div>
            <h4 className='section-title' data-scroll>WHAT IS A FULL STACK DESIGNER?</h4>
            <h4 className='section-part' data-scroll>PART 05</h4>
          </div>
        </div> */}
        <div className='section-height section-wrap'>
            <h2 id="description-text" className={cn({'is-reveal': reveal})}>Have questions you want to ask me?</h2>
          <div>
            <Accordion
                title="How do you quote projects?"
                content="I first learn about your project requirments during an initial meeting. Then I'll provide you a estimate based on the project requirements we discussed."
              />
              <Accordion
                title="How much do you charge?"
                content="I charge between CAD$40-$80/hour depending on the project. If you are looking to get a project quote, I can provide you a brief project estimate. Then I invoice quarterly (e.g. 25% upfront, 25% when the project is half done, and etc...)."
              />
              <Accordion
                title="How do we start a project?"
                content="We should have a brief into call to get to know eachother. I'd love to learn about you, and your business (:"
              /> 
              <Accordion
                title="Can I see some of your past work?"
                content="Absolutely. If you send me an email, I'll show you a few different designs."
              /> 
            </div>
          </div>
      </Container>
    </section>
  )
}

export default FAQ