import React, { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = ({ 
    imageSrc,
    title = "",
    backText = "",
    className = "" 
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative cursor-pointer perspective ${className} w-full h-[640px] md:h-[560px] lg:h-[640px]]`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Local styles for 3D transforms */}
      <style jsx='true'>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      <motion.div
          className="relative w-full h-full transition-transform duration-[40ms] preserve-3d"
          animate={{ rotateY: flipped ? 180 : 0 }}
        >
          {/* Front side */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl border-4 overflow-hidden flex items-center justify-center backface-hidden"
            style={{
              borderColor: "#5A3A92",
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Title */}
            <h2
              className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-extrabold 
                         text-white text-center px-2 md:px-4 
                         tracking-tight leading-[1.05]"
            >
              {title}
            </h2>
          </div>

          {/* Back side */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center rotateY-180 backface-hidden px-6 text-center"
            style={{
              borderColor: "#5A3A92",
              borderWidth: "4px",
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-[#000000]/80" />

            {/* Text */}
            <p className="relative z-10 text-base md:text-lg leading-relaxed text-white font-medium">
              {backText}
            </p>
          </div>
        </motion.div>

    </div>
  );
};

export default FlipCard;
