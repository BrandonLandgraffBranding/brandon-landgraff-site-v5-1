import React, { useEffect, useRef, useState } from 'react'
import { useCountUp } from 'react-countup'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'

import './stats.css';

import Container from '../container';


const Stats = () => {

    //Count Up
    const countUpRefExp = React.useRef(null);

    const { start } = useCountUp({
        ref: countUpRefExp,
        duration: 1,
        end: 22,
        suffix: "+"
        // startOnMount: true
    });

    //Reveal Animation
    const ref = useRef();

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(ref);

    useEffect(()=>{
      if(onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
      if(reveal){
        const split = new SplitText("#count-up-text", {
          type: "lines",
        });

        gsap.to(split.lines, {
          duration: 1,
          y: -20,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        });

        
        start();

      }
    }, [reveal]);
  
  return (
    <section className={cn('stats-section')} data-scroll-section>
        <div className='stats dark-bg'>
            <Container>
                <h4>EXPERIENCE</h4>
                <h5 ref={ref} id='count-up-text' className={cn({'is-reveal': reveal})}><span id='count-up' ref={countUpRefExp} /> Successful Projects Completed Using The Following</h5>
            </Container>
        </div>
    </section>
  )
}

export default Stats