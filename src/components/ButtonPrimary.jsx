import React from "react";

const GradientRingButton = ({
  children,
  className = "",
  onClick,
  rounded = "rounded-full",
}) => {
  return (
    <div
      className={`w-[140px] h-[40px]
                  sm:w-[160px] sm:h-[44px]
                  md:w-[180px] md:h-[50px]
                  lg:w-[200px] lg:h-[56px] 
                  inline-block ${rounded} bg-gradient-ring p-[5px] transition-all duration-300 hover:scale-[1.05] ${className}`}
    >
      <button
        className={`w-full h-full ${rounded} cursor-pointer flex items-center justify-center 
          bg-black backdrop-blur-sm
          px-8 py-4 text-white sm:text-base md:text-xl font-semibold font-inter 
          `}
        onClick={onClick}
      >
        <span className="whitespace-nowrap">{children}</span>
      </button>
    </div>
  );
};

export default GradientRingButton;
