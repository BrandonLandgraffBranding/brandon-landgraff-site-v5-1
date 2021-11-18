import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './banner.css';

const Banner = () => {

    let app = useRef(null);
    let content = useRef(null);
    let tl = gsap.timeline();

    useEffect(()=>{
        //Content vars
        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const headlineFourth = headlineThird.nextSibling;
        
        // console.log(headlineFirst, headlineSecond, headlineThird)

        //Content Animation
        gsap.to([headlineFirst.children, headlineSecond.children, headlineThird.children, headlineFourth.children], {
            y: 44,
            stagger: { // wrap advanced options in an object
                each: 0.3,
                ease: "power3.easeOut"
            }
        });

    })

        return (
        <section className='vh-100' data-scroll-section>
            <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
             data-scroll-id="#FCFCFC" />
            <div className='section__width' ref={el => app = el}>
                <div className='banner__items'>
                    <div>
                    <h5 className='banner__title'>LOOKING TO OPTIMIZE THE H*CK OUT OF YOUR STORE?</h5>
                    <div className='hero-content-inner' ref={el => content = el}>
                        <h1 id="header-text" className='banner__subheader'>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>I’m a full stack designer</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>who codes Interfaces</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>to optimize ecommerce</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>stores!</div>
                            </div>
                        </h1>
                    </div>
                    </div>
                    <div className='shapes float'>
                        <div className='sqare spin'></div>
                        <div className='circle '></div>
                        <div className='triangle spin-top'></div>
                    </div>
                </div>
            </div>
        </section>
        )

}

export default Banner