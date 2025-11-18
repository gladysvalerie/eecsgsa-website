import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function FlowingTextBackground({ text = "VALUE", speed = 50 }) { // speed in pixels/sec
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const contentWidth = contentRef.current.scrollWidth / 2; // width of repeated text
    gsap.set(contentRef.current, { x: 0 });

    // duration = distance / speed (pixels per second)
    const duration = contentWidth / speed;

    const animation = gsap.to(contentRef.current, {
      x: -contentWidth,
      duration,
      repeat: -1,
      ease: "linear",
    });

    return () => animation.kill();
  }, [speed]);

  // Repeat text enough times for seamless flow
  const repeatedText = Array.from({ length: 10 }).map((_, i) => (
    <span
      key={i}
      className="text-white uppercase font-bold text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] mx-6 whitespace-nowrap"
    >
      {text}
    </span>
  ));

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        ref={contentRef}
        className="flex items-center h-full whitespace-nowrap"
      >
        {repeatedText}
        {repeatedText} {/* duplicate for continuous scroll */}
      </div>
    </div>
  );
}

export default FlowingTextBackground;
