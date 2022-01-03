import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'

import Container from '../container';

import './fullstackdesigner.css'

import FullStackDesignerImage from '../../images/fullstackdesigner.webp'

const FullStackDesigner = () => {

    //Reveal Animation
    const ref = useRef();

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(ref);

    useEffect(()=>{
      if(onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
      if(reveal){

        const split = new SplitText("#fsd-text", {
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
    <section ref={ref} className={cn('fsd-section vh-100')} data-scroll-section>
    <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
      data-scroll-id="#EDEDED" />
      <Container>
        <div>
          <div className='line-container'>
              <div className='line-div' data-scroll/>
          </div>
          <div>
            <h4 className='section-title' data-scroll>WHAT IS A FULL STACK DESIGNER?</h4>
            <h4 className='section-part' data-scroll>PART 02</h4>
          </div>
        </div>

        <div className='section-wrap section-height'>
            <div className='bio-container'>
                <>
                    <div className='img-container'>
                        <img src={FullStackDesignerImage} alt="Full Stack Designer" data-scroll/>
                    </div>
                </>
            </div>
            <div className='text-explain'>
                <h2 id="fsd-text" className={cn({'is-reveal text-margin': reveal})}>I'm a full stack designer is a 

                multidisciplinary
                individual who offers multiple skillsets 

                but
                thinks about projects more holistically and
                comprehensively.</h2>
            </div>
        </div>
      </Container>
     </section>
  )
}

export default FullStackDesigner