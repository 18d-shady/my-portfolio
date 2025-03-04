import React, { useRef, useEffect, useState, useCallback } from 'react';
import useIsVisible from './useIsVisible';

function ScrollAnimation({
    children,
    className = "",
    smallScreenDelay = 0,
    mediumScreenDelay = 0,
    largeScreenDelay = 0,
}) {
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const [isAnimating, setIsAnimating] = useState(false);
    const [delay, setDelay] = useState(0);

    const setDelayBasedOnScreenSize = useCallback(() => {
        const width = window.innerWidth;
        if (width < 600) {
            setDelay(smallScreenDelay); // Small screens
        } else if (width < 1200) {
            setDelay(mediumScreenDelay); // Medium screens
        } else {
            setDelay(largeScreenDelay); // Large screens
        }
    }, [smallScreenDelay, mediumScreenDelay, largeScreenDelay]);

    useEffect(() => {
        setDelayBasedOnScreenSize();
        window.addEventListener('resize', setDelayBasedOnScreenSize);
        
        return () => {
            window.removeEventListener('resize', setDelayBasedOnScreenSize);
        };
    }, [setDelayBasedOnScreenSize]);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsAnimating(true);
            }, delay);

            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
        }
    }, [isVisible, delay]);

    return (
        <div
            ref={ref}
            className={`${className} transition-all ease-in duration-900 ${
                isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
        >
            {children}
        </div>
    );
}

export default ScrollAnimation;