import React, { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = ({ frontContent, backContent, className = "" }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-80 h-48 cursor-pointer perspective ${className}`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Local styles for 3D transforms */}
      <style jsx>{`
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
        <div className="absolute inset-0 bg-amber-400 rounded-2xl shadow-xl flex items-center justify-center backface-hidden">
          {frontContent}
        </div>

        {/* Back side */}
        <div className="absolute inset-0 bg-indigo-600 text-white rounded-2xl shadow-xl flex items-center justify-center rotateY-180 backface-hidden">
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
