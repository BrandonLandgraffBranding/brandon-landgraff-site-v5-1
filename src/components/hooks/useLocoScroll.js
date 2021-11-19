import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    locoScroll.destroy()

    setTimeout(function(){
        locoScroll.init()
        }, 100);

    setTimeout(() => { 

        locoScroll.on('call', (value, way, obj) => {
    
          if (way === 'enter') {
            switch (value) {
              case "pageColor":
                // get color code from data-scroll-id  assigned to body by obj.id
                   document.querySelector('body').style.backgroundColor = obj.id;
                   console.log('page color change')  
                break;  
              default:
                console.log('message')  
           }
          }
    
        });
      }, 800);

    
  }, [start]);
}