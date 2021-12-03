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

      new SplitText("h4", { type: "lines", linesClass: "lineChild" });
      new SplitText("h4", { type: "lines", linesClass: "lineParent" });
      const tl = gsap.timeline();
      tl.from(".lineChild", {y:20, stagger:0.25});

      start();

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
            <h4 className='section-title'>WHAT IS MY EXPERIENCE?</h4>
            <h4 className='section-part'>PART 05</h4>
          </div>
        </div>
        <div className='two-column section-height'>
          <div className='stats-container'>
            <div className='text-explain'>
              <h2 id="stats-text" className={cn({'is-reveal text-margin stats-title': reveal})}>I've completed a wide range of projects using CSS, HTML, JavaScript, Liquid, Adobe Illustrator, Adobe XD to improve Shopify stores.</h2>
            </div>
          </div>
          <div className='stats-text-container'>
            <h5 id='count-up-text' className={cn({'is-reveal text-margin': reveal})}><span id='count-up' ref={countUpRefExp} /></h5>
            <p id='count-up-text-description'> Years Of Experience</p>
          </div>
        </div>
      </Container>
     </section>
  )
}

export default Stats