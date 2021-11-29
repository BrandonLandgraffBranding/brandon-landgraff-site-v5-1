import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './blogbanner.css';

const BlogBanner = () => {

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
             data-scroll-id="#121212" />
            <div className='section__width' ref={el => app = el}>
                <div className='blog-banner-items'>
                    <div className='blog-hero-text-container'>
                    <h4 className='blog-banner-title'>READ MY BLOG</h4>
                    <div className='blog-hero-content-inner' ref={el => content = el}>
                        <h1 id="blog-header-text" className='blog-banner-subheader'>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>Welcome</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>To My</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>Ideas 🧠</div>
                            </div>
                            <div className='hero-content-line'>
                                <div className='hero-content-line-inner'>&amp; Thoughts</div>
                            </div>
                        </h1>
                    </div>
                    <h2 className='blog-hero-paragraph'>
                        In my blog I talk about Shopify specific topics such as branding, user experience, user interface, and web design techniques.
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

export default BlogBanner