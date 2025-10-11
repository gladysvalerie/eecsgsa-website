import React, { useState } from "react";
import SquareImageCard from "./SquareImageCard";
import ButtonPrimary from "./ButtonPrimary";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import cardImage from "../assets/test.JPG";
import TextType from './testing/TextType';
import Accordion from "./testing/Accordion";

const AboutUsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Sample data for the carousel - you can replace with actual content
    const carouselData = [
        {
            imageSrc: cardImage,
            imageAlt: "EECS-GSA Activity 1",
            caption: "Student collaboration and innovation",
        },
        {
            imageSrc: cardImage,
            imageAlt: "EECS-GSA Activity 2",
            caption: "Academic excellence and research",
        },
        {
            imageSrc: cardImage,
            imageAlt: "EECS-GSA Activity 3",
            caption: "Community building and networking",
        },
        {
            imageSrc: cardImage,
            imageAlt: "EECS-GSA Activity 4",
            caption: "Professional development",
        },
        {
            imageSrc: cardImage,
            imageAlt: "EECS-GSA Activity 5",
            caption: "Leadership and mentorship",
        },
    ];

    const goToPrevious = () => {
        setActiveIndex((prev) =>
            prev === 0 ? carouselData.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setActiveIndex((prev) =>
            prev === carouselData.length - 1 ? 0 : prev + 1
        );
    };

    const getCardIndex = (offset) => {
        const index =
            (activeIndex + offset + carouselData.length) % carouselData.length;
        return index;
    };

    return (
        <section className="relative bg-black py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px]">
                <TextType 
                  text={["As a student association, we are the EECS-GS students representative.", 
                    "The dev cried when she's coding the animations of this website.", 
                    "EECS-GSA are just a bunch of brain rot students that don't know what the fuck they're doing."]}
                  typingSpeed={100}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorClassName="text-white text-3xl md:text-5xl font-bold"
                />
            </div>

            <Accordion></Accordion>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex justify-center">
                    <ButtonPrimary width="160px" height="44px">
                        About us
                    </ButtonPrimary>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
