import React, { useRef, useState } from 'react'

import './accordion.css';

import Chevron from './chevron.js';

const Accordion = (props) => {

    //Accordion Information
    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState('accordion-icon');

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'faq-active' : '');
        setHeightState(setActive === 'faq-active' ? '0px' : `${content.current.scrollHeight}px`);
        setRotateState(setActive === 'faq-active' ? 'accordion-icon' : 'accordion-icon rotate-icon');
    }
  
  return (
          <div className='accordion-section dark-bg'>
                  <button className={`faq-accordion ${setActive}`} onClick={toggleAccordion}> 
                      <p className='accordion-title'>{props.title}</p>
                      <Chevron className={`${setRotate}`} width={14} fill={"#FCFCFC"} />
                  </button>
                  <div ref={content} style={{maxHeight: `${setHeight}`}} className='accordion-content'>
                  <div
                    className="accordion-text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                  />
                  </div>
            </div>
  )
}

export default Accordion