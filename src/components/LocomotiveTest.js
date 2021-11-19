import React, { useEffect, useRef } from 'react';
// import './locomotive-scroll.css';

const LocomotiveScroll = () => {

    const scrollRef = useRef(null)

    useEffect(() => {
        import("locomotive-scroll").then(locomotiveModule => {
          const scroll = new locomotiveModule.default({
            el: scrollRef.current,
            smooth: true,
            smoothMobile: false,
          })
        })
      }, [])
    }
  
  export default LocomotiveScroll
  