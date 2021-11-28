import React from "react";

function Chevron(props) {

 return (
    <svg 
        className={props.className} 
        width={props.height} 
        height={props.width} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        datareactroot=""
    >
    <path fill={props.fill}  d="M8 4V20L16 12L8 4Z" undefined="1"></path>
    </svg>
 );
}

export default Chevron