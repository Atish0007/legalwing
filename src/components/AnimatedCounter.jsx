import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  end = 2000,
  duration = 1500,
  suffix = "",
  decimals = 0,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  const animateCount = () => {
    const startTime = performance.now();

    // ⭐ premium easing (fast → slow finish)
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const update = (currentTime) => {
      const rawProgress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOutCubic(rawProgress);

      const value = easedProgress * end;
      setCount(value);

      if (rawProgress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  // ⭐ premium display logic
  const displayValue =
    decimals > 0
      ? count >= end
        ? end.toFixed(decimals) // show 4.9 at end
        : Math.max(1, Math.floor(count)) // show 1,2,3,4 during animation
      : Math.floor(count);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;