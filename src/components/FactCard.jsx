import React, { useEffect, useState, useRef } from "react";

const FactCard = ({ icon, number, text }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const extractNumberAndSuffix = (numStr) => {
    const match = numStr.match(/^(\d+)([KM+]*)$/);
    return match
      ? { value: parseInt(match[1], 10), suffix: match[2] }
      : { value: 0, suffix: "" };
  };

  const { value, suffix } = extractNumberAndSuffix(number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 3000;
    const increment = Math.ceil(value / (duration / 16));

    const updateCount = () => {
      start += increment;

      if (start > value) start = value;
      setCount(start);

      if (start < value) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasAnimated, value]);

  return (
    <div
      ref={ref}
      className="flex items-center gap-6 bg-white text-black p-4 max-w-[240px] text-left rounded-2xl"
    >
      <div>
        <img src={icon} alt={text} className="bg-[#FF9E0C] p-4 rounded-xl" />
      </div>
      <div>
        <h1 className="font-bold text-xl">
          {count.toLocaleString()}
          {suffix}
        </h1>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default FactCard;
