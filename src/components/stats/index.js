import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'
import { useCountUp } from 'react-countup'

import Container from '../container';

import './stats.css'

const Stats = () => {

  //Count Up
  const countUpRefExp = React.useRef(null);

  const { start } = useCountUp({
      ref: countUpRefExp,
      duration: 1,
      end: 7,
      suffix: "+"
      // startOnMount: true
  });

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

      start();

    }
  }, [reveal]);
  

  return (
    <section className={cn('bio-section')} data-scroll-section>
      <Container>
        <div className='two-column dark-bg'>
          <div className='stats-container'>
              <>
              <h4 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>EXPERIENCE</h4>
              <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>I've completed a wide range of projects using the following tools:</h5>
              {/* <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>Adobe Illustrator</h5>
              <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>Adobe XD</h5>
              <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>HTML</h5>
              <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>CSS</h5>
              <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>JavaScript</h5>
              <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>Liquid</h5>
              <h5 ref={ref} id="description-text" className={cn({'is-reveal text-margin': reveal})}>Etc...</h5> */}
              </>
          </div>
          <div className='stats-text-container'>
            <h5 ref={ref} id='count-up-text' className={cn({'is-reveal text-margin': reveal})}><span id='count-up' ref={countUpRefExp} /></h5>
            <p id='count-up-text-description'> Years Of Experience</p>
          </div>
        </div>
      </Container>
     </section>
  )
}

export default Stats