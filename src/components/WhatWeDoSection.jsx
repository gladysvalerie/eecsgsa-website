import React, { useRef } from "react";
import Card from "./Card";
import ButtonPrimary from "./ButtonPrimary";
import cardImage from "../assets/test.JPG";
import { useScroll, useTransform, motion} from "framer-motion"
import useWindowSize from "./hooks/useWindowSize";
import { ReactLenis } from "lenis/react";

const WhatWeDoSection = () => {
    const targetRef = useRef(null);
    const { size } = useWindowSize();

    const { scrollY } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const title_height = 1000

    const cardTimeline = cardData.map((_, i) => {
        const start = title_height + i *  size.height;
        const end = title_height + (i+1) * size.height;

        return [start, end]
    })

    const timeline = [[0, title_height], ...cardTimeline]

    const animation = timeline.map((data) => {
        const scale = useTransform(scrollY, data, [1, 0.8])
        const opacity = useTransform(scrollY, data, [1, 0])
        return { scale, opacity }
    });

    return (
        <ReactLenis root>
            <div ref={targetRef} className="bg-background relative py-16 md:py-24 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    style={{ scale: animation[0].scale, opacity:animation[0].opacity, height: title_height-800 }}
                    className="sticky top-1/2 text-white text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-center">
                    <h2 className="w-full h-max">
                        WHAT WE DO.
                    </h2>
                </motion.div>

                {cardData.map((card, index) => (
                    <React.Fragment>
                        <motion.div
                            key={card.id}
                            style={{ scale: animation[index+1].scale, opacity: animation[index+1].opacity}}
                            // TODO: atur gapnya dong pls mar thanks
                            className="sticky top-[60px] md:top-[100px] lg:top-[150px] flex items-center justify-center w-full max-w-4xl md:max-w-6xl lg:max-w-7xl"
                            >
                            <Card
                                className="w-full h-[640px] md:h-[560px] lg:h-[640px]"
                                imageSrc={card.imageSrc}
                                imageAlt={card.imageAlt}
                                description={card.description}
                                />
                        </motion.div>
                        <div className="h-80"></div>
                    </React.Fragment>
                ))}    
            </div>
        </ReactLenis>
    );
};

export default WhatWeDoSection;

const cardData = [
  {
    id: 1,
    imageSrc: cardImage,
    imageAlt: "Card 1 image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    imageSrc: cardImage,
    imageAlt: "Card 2 image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    imageSrc: cardImage,
    imageAlt: "Card 3 image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
];