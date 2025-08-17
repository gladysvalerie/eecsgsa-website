import React from "react";

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
            {/* Main content stack */}
            <div className="flex flex-col items-center justify-center min-h-screen pt-8 md:pt-0 relative z-10">
                {/* Logo positioned behind text */}
                <div className="absolute inset-0 flex items-center justify-center -z-0">
                    {logoSrc && (
                        <img
                            src={logoSrc}
                            alt="EECS-GSA Logo"
                            className="w-48 md:w-72 lg:w-96 h-auto opacity-90"
                        />
                    )}
                </div>

                {/* Text content */}
                <div className="text-center z-10">
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

            {/* Scroll cue */}
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
