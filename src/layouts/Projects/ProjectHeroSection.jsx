import React from "react";
import { networkingg } from "@/assets";

const ProjectHeroSection = ({
    title = "OUR PROJECTS",
    subtitle = "Ranging from events to professional programs"
}) => {
    return (
        <section
            className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-cover bg-center"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0) 0%,
                  rgba(0, 0, 0, 0.5) 50%,
                  rgba(0, 0, 0, 1) 100%
                ),
                url(${networkingg})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
            <div className="absolute text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-md mb-4">
                    {title}
                </h1>
                <p className="text-base md:text-lg text-white/80">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}

export default ProjectHeroSection