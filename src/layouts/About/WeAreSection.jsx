import React from "react";
import { MUSIC } from "@/assets"
import { gradparty24 } from "@/assets"
import { welpar3 } from "@/assets"
import { welpar6 } from "@/assets";
import FluidGlass from "../../components/testing/FluidGlass"
import FlowingMenu from "../../components/testing/FlowingMenu";

const WeAreSection = () => {
    const demoItems = [
        {text: 'INNOVATIVE', image: MUSIC },
        {text: 'GLOBAL', image: gradparty24 },
        {text: 'VISIONARY', image: welpar3 },
        {text: 'COLLABORATIVE', image: welpar6 }
    ];
    return (
        <section className="-mt-px bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 py-16 px-6">
                <div 
                    className="w-full md:w-2/3 relative aspect-square md:aspect-auto md:h-[600px]"
                >
                  <FluidGlass 
                    mode="lens"
                    lensProps={{
                      scale: 0.25,
                      ior: 1.15,
                      thickness: 5,
                      chromaticAberration: 0.1,
                      anisotropy: 0.01  
                    }}
                  />
                </div>

                <div className="md:w-1/3 w-full text-left">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
                      WE ARE EECS-GSA.
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed max-w-prose">
                      The EECS Global Student Association represents and connects international and local students across the Department of Electrical Engineering and Computer Science. We foster collaboration, professional growth, and cultural exchange through events, mentorship, and advocacy, ensuring every student thrives academically and personally within our global community.
                    </p>
                </div>
            </div>

            <div className="relative w-full h-[600px]">
                <FlowingMenu items={demoItems} />
            </div>
            <div className="h-30"></div>
        </section>
    );
}

export default WeAreSection