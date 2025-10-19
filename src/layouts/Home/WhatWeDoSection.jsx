import React, { useRef } from "react";
import Card from "../../components/Card";
import ButtonPrimary from "../../components/ButtonPrimary";
import { orientation, welpar, networking242 } from "@/assets";
import { useScroll, useTransform, motion} from "framer-motion"
import useWindowSize from "../../components/hooks/useWindowSize";
import { ReactLenis } from "lenis/react";

const WhatWeDoSection = () => {
    const targetRef = useRef(null);
    const { size } = useWindowSize();

    const { scrollY } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const title_height = 1750

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
        <>
            <ReactLenis root>
                <div ref={targetRef} className="bg-background relative py-16 md:py-24 mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center">
                    <motion.div 
                        style={{ scale: animation[0].scale, opacity:animation[0].opacity, height: title_height-800 }}
                        className="sticky top-1/2 text-white text-7xl lg:text-8xl font-extrabold tracking-tight uppercase text-center">
                        <h2 className="w-full h-max">
                            WHAT WE DO.
                        </h2>
                    </motion.div>
                    <div className="flex flex-col items-center justify-center min-h-[300vh] relative">
                        {cardData.map((card, index) => (
                            <React.Fragment>
                                <motion.div
                                    key={index+1}
                                    style={{ scale: animation[index+1].scale, opacity: animation[index+1].opacity}}
                                    className="sticky top-[35px] md:top-[80px] lg:top-[100px] flex items-center justify-center w-full max-w-4xl md:max-w-6xl lg:max-w-7xl"
                                    >
                                    <Card
                                        className="w-full h-[640px] md:h-[560px] lg:h-[640px]"
                                        title={card.title}
                                        imageSrc={card.imageSrc}
                                        imageAlt={card.imageAlt}
                                        description={card.description}
                                        />
                                </motion.div>
                                <div className="h-80"></div>
                            </React.Fragment>
                        ))}    
                    </div>
                </div>
            </ReactLenis>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex justify-center">
                    <ButtonPrimary>
                        See more
                    </ButtonPrimary>
                </div>
            </div>
        </>
    );
};

export default WhatWeDoSection;

const cardData = [
  {
    id: 1,
    imageSrc: orientation,
    imageAlt: "Global minds. Electric ideas.",
    title: "Global minds. Electric ideas.",
    description:
      "We bring together students from around the world who share a passion for technology, creativity, and collaboration. Our goal is to spark innovation through cultural diversity and shared curiosity."
  },
  {
    id: 2,
    imageSrc: welpar,
    imageAlt: "Connecting EECS Students Worldwide.",
    title: "Connecting EECS Students Worldwide.",
    description:
      "We build bridges across disciplines, programs, and countries—linking students, researchers, and professionals through events, mentorship, and networking opportunities. No matter where you come from, you belong in this community."
  },
  {
    id: 3,
    imageSrc: networking242,
    imageAlt: "Where Innovation Meets Community.",
    title: "Where Innovation Meets Community.",
    description:
      "We believe great ideas grow best in supportive spaces. From workshops and hackathons to social gatherings, we create experiences that connect people, inspire learning, and make EECS feel like home."
  },
];