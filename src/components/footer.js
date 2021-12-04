import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from '../components/utils/Split3.min.js'
import cn from 'classnames';
import useOnScreen from '../components/hooks/useOnScreen.js'

import Logo from '../images/BrandonLandgraffLogo.svg'

import Container from './container'

import './footer.css'

const Footer = () => {

  //Reveal Animation
  const ref = useRef();

  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref);

  useEffect(()=>{
    if(onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if(reveal){
      const split = new SplitText("#footer-text", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });

    }
  }, [reveal]);

  return (
  <section className={cn('footer-section section-height vh-100')} data-scroll-section>
    <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
    data-scroll-id="#FFFFFF" />
    <Container>
        <h5 id='ask-for-availability'><a href="mailto:hello@brandonlandgraff.com">Say Hello 👋</a></h5>
      <div className='two-column'>
        <div className='footer-information'>
        <img id='footer-logo' src={Logo} alt="Brandon Landgraff Logo"/>
          <div className='text-explain'>
            <h2 ref={ref} id="footer-text" className={cn({'is-reveal text-margin': reveal})}>Send me a quick message to set up a meeting or follow me on social media.</h2>
          </div>
        </div>
        <div className='sm-container'>
          <p id='stay-updated'><strong>Stay Updated</strong></p>
          <div className='sm-item'>
            <a href="https://www.instagram.com/brandonlandgraff/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className='sm-item'>
            <a href="https://www.linkedin.com/in/brandon-landgraff/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className='sm-item'>
            <a href="https://dribbble.com/brandonlandgraffbranding" target="_blank" rel="noopener noreferrer">Dribbble</a>
          </div>
        </div>
      </div>
      <p id='credit'><strong>©Brandon Landgraff</strong></p>
    </Container>
    <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
    data-scroll-id="#F9F9F9" />
  </section>
  )
}

export default Footer
