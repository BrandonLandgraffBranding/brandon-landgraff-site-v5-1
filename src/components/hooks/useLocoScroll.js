import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector("#main-container");

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

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

    locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, [start]);
}