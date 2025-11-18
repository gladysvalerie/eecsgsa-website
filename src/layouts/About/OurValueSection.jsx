import React from "react";
import { orientation } from "@/assets";
import FlowingTextBackground from "./FlowingTextBackground";

const OurValueSection = () => {
  return (
    <section className="flex flex-col items-start md:items-center gap-8 md:gap-12 py-16 px-6 relative">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
        OUR VALUE.
      </h2>
      
      <div className="relative w-full max-w-3xl h-[400px] md:h-[500px]">
        <img
          src={orientation}
          className="w-full h-full object-cover rounded-xl z-10 relative"
        />
      </div>
        <FlowingTextBackground 
        text="COLLABORATION. INNOVA. KIJANG. FORTUNER" 
        speed={70} // smaller = slower
        />

      <p className="text-white/80 text-lg leading-relaxed max-w-prose mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus purus sit amet nulla congue faucibus. Pellentesque nec orci scelerisque, malesuada diam sit amet, iaculis mi. Nullam facilisis tellus elit, eget vestibulum lacus ultrices tempor. Sed varius feugiat neque, at finibus magna dapibus eu. Maecenas posuere congue justo, quis volutpat metus lobortis quis. Duis pharetra condimentum euismod.
      </p>
    </section>
  );
};

export default OurValueSection;
