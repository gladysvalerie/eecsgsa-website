import React from "react";
import LiquidEther from '../../components/testing/LiquidEther';

const HeroSection = ({
    title = "EECS-GSA",
    eyebrow = "Welcome to",
    subtitle = "official website",
    logoSrc,
    className = "",
}) => {
    return (
        <section
            className={`relative min-h-screen w-full overflow-hidden bg-black ${className}`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen relative">
              <div className="w-full h-screen relative z-0">
                <LiquidEther
                    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                  />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                  {logoSrc && (
                    <img
                    src={logoSrc}
                    alt="EECS-GSA Logo"
                    className="absolute z-10 w-48 md:w-72 lg:w-96 h-auto opacity-90"
                    />
                  )}

                  <div className=" absolute text-center z-20">
                      <p className="text-sm md:text-lg text-white/80 tracking-wide mb-4">
                          {eyebrow}
                      </p>
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-md mb-4">
                          {title}
                      </h1>
                      <p className="text-base md:text-lg text-white/80">
                          {subtitle}
                      </p>
                  </div>
              </div>
          </div>

          <div className="absolute inset-x-0 bottom-6 grid place-items-center gap-2">
              <p className="text-[10px] md:text-xs text-white/60 tracking-wide">
                  scroll to know more
              </p>
              <div className="text-white/80">
                  <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L12 14.17l4.59-4.59L18 10l-6 6-6-6z" />
                  </svg>
              </div>
          </div>
        </section>
    );
};

export default HeroSection;
