import React, { useState } from "react";
import SquareImageCard from "../../components/SquareImageCard";
import ButtonPrimary from "../../components/ButtonPrimary";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import { orientation } from "@/assets"; //unuse?
import TextType from '../../components/testing/TextType';
import Accordion from "../../components/testing/Accordion";
import { Link } from "react-router-dom";

const AboutUsSection = () => {

    return (
        <section className="relative bg-black py-16 md:py-30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[320px]">
                <TextType 
                  text={["Dream boldly and build fearlessly—your ideas have the power to shape the future of technology when shared with others.", 
                    "Connect across borders and discover a global community of EECS students who turn curiosity into collaboration.", 
                    "Grow together and rise together as you learn, create, and innovate in a space where everyone belongs and every idea sparks possibility."]}
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
                    <Link to="about">
                    <ButtonPrimary className=" ">
                        About us
                    </ButtonPrimary>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
