import React, { useState } from "react";
import SquareImageCard from "../../components/SquareImageCard";
import ButtonPrimary from "../../components/ButtonPrimary";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import cardImage from "../../assets/orientation.jpg";
import TextType from '../../components/testing/TextType';
import Accordion from "../../components/testing/Accordion";

const AboutUsSection = () => {

    return (
        <section className="relative bg-black py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px]">
                <TextType 
                  text={["As a student association, we are the EECS-GS students representative.", 
                    "The dev cried when she's coding the animations of this website.", 
                    "EECS-GSA are just a bunch of brain rot students that don't know what the fuck they're doing."]}
                  typingSpeed={50}
                  pauseDuration={500}
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
