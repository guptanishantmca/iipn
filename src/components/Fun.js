import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Fun = ({ target, label, iconClass }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: target },
    config: { duration: 2000 }, // Animation duration in milliseconds
  });

  return (
    <div className="text-center">
      <div className="text-5xl text-indigo-400 mb-4">
        <i className={iconClass}></i> {/* Render icon */}
      </div>
      {/* Animated number */}
      <animated.div className="text-4xl font-bold">
        {props.number.to((n) => n.toFixed(0))}{/* Convert object to string/number */}
      </animated.div>
      <p className="mt-2 text-gray-300">{label}</p>
    </div>
  );
};

export default Fun;
