import React, { useState, useRef, useEffect } from 'react'

import useLocoScroll from '../components/hooks/useLocoScroll'

const ScrollProvider = ({ children, as = 'div' }) => {
  const Tag = as

  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
    {preloader ? ( <div className='loader-wrapper absolute'>
    <h1>Brandon Landgraff</h1>
    <h3>Full Stack Designer</h3>
    </div> 
    ) : (
    <Tag
    className='main-container'
    id='main-container'
    data-scroll-container
    ref={ref}
    >
      {children}
    </Tag>
    )}
    </>
  )
}

export default ScrollProvider