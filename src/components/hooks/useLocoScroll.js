import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  
    //UseEffect Wasn't Working
    useEffect(() => {
      if (!start) return;

      const scrollEl = document.querySelector("#main-container");

      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
      });
      

      locoScroll.destroy();

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

                    // // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
                    // locoScroll.on("scroll", ScrollTrigger.update);

                    // // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
                    // ScrollTrigger.scrollerProxy("#main-container", {
                    //   scrollTop(value) {
                    //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : 		locoScroll.scroll.instance.scroll.y;
                    // }, // we don't have to define a scrollLeft because we're only scrolling vertically.
                    
                    // getBoundingClientRect() {
                    //   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                    // },
            
                    // // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
                    // pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"});
            
                    // // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
                    // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
            
                    // // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
                    // ScrollTrigger.refresh();

    }, [start]);
  }
