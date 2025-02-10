import React, { useState, useEffect } from "react";

function ScrollAnimationComponent ({ children, className = "" }) {
  const [hasEntered, setHasEntered] = useState(false);
  const ref = React.createRef();

  const handleScroll = () => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setHasEntered(true);
      } else {
        setHasEntered(false);
      }
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll to check if the element is in the viewport initially
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-500 ease-out`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationComponent;
