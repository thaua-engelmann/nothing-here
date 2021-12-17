import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./titleAnimation.scss";

const TitleAnimation = ({ cName, children }) => {
  const [hover, setHover] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const toggleHover = () => {
    setHover(!hover);
  };

  // If inView returns true, run "jackIn" animation. Now, if hover returns true, add "rubberBand" animation. I couldn't do that. It seems that these two states can't work together...

  return (
    <span
      className={`${inView && `jackIn ${cName}`} ${
        hover ? "rubberBand" : cName
      }`} // My rubberBand animation does not work?!?! very sad :(
      ref={ref}
      onMouseEnter={toggleHover}
    >
      {children}
    </span>
  );
};

export default TitleAnimation;
