import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';
import './diagram.css';

import Container from '../container';

const Diagram = () => {

    const container = useRef(null)

    useEffect (() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./office.json')
        })
    }, [])

  return (
        <div data-scroll-section>
            <Container>
                <h4>CAPABILITIES</h4>
                <div className="container" ref={container}></div>
            </Container>
        </div>
  )
}

export default Diagram