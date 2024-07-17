/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));

      if (start >= end * 0.8) {
        clearInterval(timer);
        setTimeout(() => {
          const slowTimer = setInterval(() => {
            start += increment * 0.2;
            setCount(Math.min(Math.floor(start), end));
            if (start >= end) {
              clearInterval(slowTimer);
            }
          }, 100);
        }, 100);
      }

      if (start >= end) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="counter mb-1 text-[80px] lg:text-[120px]  font-medium lg:font-bold leading-[96px] text-[#1b5bf7]">
      {count}+
    </div>
  );
};

export default Counter;
