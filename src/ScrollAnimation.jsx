import {React, useRef} from 'react';
import useIsVisible from './useIsVisible';

function ScrollAnimation({children, className = "" }){
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  
  return(

    <div ref={ref} className={` ${className} transition-all 
    ease-in duration-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} >
        {children}
    </div>

  )
}
export default ScrollAnimation;
