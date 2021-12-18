import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../../components/hooks/useOnScreen.js'

import './banner.css';

import Container from '../container';

const Banner = () => {

    //Reveal Animation
    const ref = useRef();

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(ref);

    useEffect(()=>{
      if(onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
      if(reveal){

        new SplitText("h1", { type: "lines", linesClass: "lineChild" });
        new SplitText("h1", { type: "lines", linesClass: "lineParent" });
        const tl = gsap.timeline(); 
        tl.from(".lineChild", {y:250, delay:1, stagger:0.5});


      }
    }, [reveal]);

        return (
        <section className={cn('banner-section vh-100 dark-bg')} data-scroll-section>
                    <div className='shapes-wrapper'>
                        <div className='shapes float'>
                            <div className='sqare spin'></div>
                            <div className='circle '></div>
                            <div className='triangle spin-top'></div>
                        </div>
                    </div>
                <Container>
                <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
                data-scroll-id="#1C1C1C" />
                    <div className='banner-text-wrapper'>
                        <h1 ref={ref} id="banner-text" className={cn({'is-reveal': reveal})}>Full Stack Shopify Designer</h1>
                    </div>
                </Container>
        </section>
        )
}

export default Banner