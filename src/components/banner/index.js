import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitText from '../../components/utils/Split3.min.js'
import cn from 'classnames';

import './banner.css';

import Container from '../container';

const Banner = () => {

    useEffect(() => {
        new SplitText("h1", { type: "lines", linesClass: "lineChild" });
        new SplitText("h1", { type: "lines", linesClass: "lineParent" });
        const tl = gsap.timeline(); 
        tl.from(".lineChild", {y:250, delay:1, stagger:0.5});
    }, []);

        

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
                {/* <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
                data-scroll-id="#1C1C1C" /> */}
                    <div className='banner-text-wrapper'>
                        <h1  id="banner-text">FULL STACK SHOPIFY DESIGNER</h1>
                    </div>
                    {/* <div className='two-column-banner'>
                      <div className='line-container-banner'>
                          <div className='line-div-banner' data-scroll/>
                      </div>
                        <div className='banner-container-description'>
                          <h2>My name is Brandon, and I'm a design wizard. 🧙</h2>
                        </div>
                    </div> */}
                </Container>
        </section>
        )
}

export default Banner