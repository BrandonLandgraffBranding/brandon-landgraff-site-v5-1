import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './banner.css';

const Banner = () => {

    // Title Text Animation
    let app = useRef(null);
    let content = useRef(null);

    useEffect(()=>{
        //Content vars
        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const headlineFourth = headlineThird.nextSibling;

        //Content Animation
        gsap.to([headlineFirst.children, headlineSecond.children, headlineThird.children, headlineFourth.children], {
            y: 62,
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
                <div className='banner-items'>
                    <div className='hero-text-container'>
                    <h4 className='banner-title'>WHY HELLO THERE!</h4>
                    <div className='hero-content-inner' ref={el => content = el}>
                        <h1 id="header-text" className='banner-subheader'>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>I’m a Shopify</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>Focused</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>Full Stack</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>Designer</div>
                            </div>
                        </h1>
                    </div>
                    <h2 className='hero-paragraph'>
                        My specialty is optimizing Shopify stores by designing and coding intuitive interfaces.
                    </h2>
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