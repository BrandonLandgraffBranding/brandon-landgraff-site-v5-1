import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-scroll.css';


export default function useLocoScroll(start){
    useEffect(()=>{
        if (!start) return;

        const scrollEl = document.querySelector('#main-container');
        const locoScroll = new LocomotiveScroll({
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
                    break;      
               }
              }
        
            });
          }, 800);


    }, [start]);
}