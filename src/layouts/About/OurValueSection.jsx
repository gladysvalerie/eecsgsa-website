import React from "react";
import { welpar } from "@/assets";
import FlowingTextBackground from "./FlowingTextBackground";

const OurValueSection = () => {
  return (
    <section className="flex flex-col items-start md:items-center gap-8 md:gap-12 py-16 px-6 relative">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
        OUR VALUE.
      </h2>
      
      <div className="relative w-full max-w-3xl h-[400px] md:h-[500px]">
        <img
          src={welpar}
          className="w-full h-full object-cover rounded-xl z-10 relative"
        />
      </div>
        <FlowingTextBackground 
        text="COLLABORATION. INNOVATE. CREATE." 
        speed={70} // smaller = slower
        />

      <p className="text-white/80 text-lg leading-relaxed max-w-prose mt-8">
EECS-GSA values a connected, inclusive, and thriving community built on meaningful engagement and shared growth. We prioritize clear communication, strong collaboration across divisions and levels, and continuous improvement of our internal structures. We support financial sustainability, encourage leadership development, and foster unity through programs that strengthen cultural understanding and interpersonal skills. Above all, we strive to create an environment where every member feels empowered to contribute and supported in shaping a vibrant EECS-GS experience.      </p>
    </section>
  );
};

export default OurValueSection;