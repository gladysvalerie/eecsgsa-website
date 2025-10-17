import React from "react";
import orientationImage from "../../assets/orientation.jpg";
import MagicBento from "../../components/testing/MagicBento";

const OurTeamSection = () => {

    return (
        <section className="relative bg-black flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                OUR TEAM.
            </h2>
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="92, 71, 148"
              
            />
        </section>
    );
}

export default OurTeamSection