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
      <div className='footer-center'>
      <h5 id='cap-deck'><a href="https://drive.google.com/file/d/1brfEGCS4jixtK5ykU4DYMcMet4-TMANE/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Capabilities Deck 🤌</a></h5>
      </div>
        <div className='line-container'>
              <div className='line-div' data-scroll/>
          </div>
      {/* <div className='two-column'>
        <div className='footer-information'>
        <img id='footer-logo' src={Logo} alt="Brandon Landgraff Logo"/>
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
      </div> */}

      <div className='footer-center'>
        <h5 id='social-media-link'><a href="mailto:hello@brandonlandgraff.com">hello@brandonlandgraff.com</a></h5>
        <h5 id='social-media-link'><a href="https://www.instagram.com/brandonlandgraff/" target="_blank" rel="noopener noreferrer">Instagram</a></h5>
        <h5 id='social-media-link'><a href="https://www.linkedin.com/in/brandon-landgraff/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
        <h5 id='social-media-link'><a href="https://dribbble.com/brandonlandgraffbranding" target="_blank" rel="noopener noreferrer">Dribbble</a></h5>
      </div>
      <p id='credit'><strong>©Brandon Landgraff</strong></p>
    </Container>
    <span data-scroll data-scroll-repeat data-scroll-call="pageColor" 
    data-scroll-id="#F9F9F9" />
  </section>
  )
}

export default Footer
