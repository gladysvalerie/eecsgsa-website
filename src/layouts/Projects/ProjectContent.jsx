import { useState } from "react";
import GooeyNav from "../../components/testing/GooeyNav";
import FlipCard from "../../components/FlipCard";
import { orientation } from "@/assets";

const ProjectContent = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    
    const items = [
        { label: "Recent", href: "#" },
        { label: "Events", href: "#" },
        { label: "Programs", href: "#" },
    ];

    return (
        <section className="-mt-px bg-black flex flex-col items-center justify-center">
            <div 
                className="flex items-center justify-center h-32"
            >
              <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={activeIndex}
                onChange={setActiveIndex}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
            </div>

            <div className="w-full max-w-3xl md:max-w-5xl lg:max-w-6xl text-center px-6 transition-opacity">
                {activeIndex === 0 && (
                  <div className="flex flex-col justify-center items-center gap-y-8 py-8">
                    <FlipCard
                        imageSrc={orientation}
                        title="ORIENTATION"
                        backText="lalalalallalalallalalalala"
                    />
                    <FlipCard
                        imageSrc={orientation}
                        title="ORIENTATION"
                        backText="lalalalallalalallalalalala"
                    />
                    <FlipCard
                        imageSrc={orientation}
                        title="ORIENTATION"
                        backText="lalalalallalalallalalalala"
                    />
                  </div>
                )}

                {activeIndex === 1 && (
                  <div>
                    <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
                  </div>
                )}

                {activeIndex === 2 && (
                  <div>
                    <h2 className="text-3xl font-semibold mb-4">Programs</h2>
                  </div>
                )}
            </div>
        </section>
    );
}

export default ProjectContent