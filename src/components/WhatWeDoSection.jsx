import React from "react";
import Card from "./Card";
import ButtonPrimary from "./ButtonPrimary";
import cardImage from "../assets/test.JPG";

const WhatWeDoSection = () => {
    return (
        <section className="relative bg-black py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-4 md:w-full">
                    <h2 className="text-white text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-center">
                        WHAT WE DO.
                    </h2>

                    <div className="flex items-center justify-center w-full max-w-4xl md:max-w-6xl lg:max-w-7xl">
                        <Card
                            className="w-full h-[480px] md:h-[560px] lg:h-[640px]"
                            imageSrc={cardImage}
                            imageAlt="Card image"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </div>

                    <div>
                        <ButtonPrimary width="160px" height="44px">
                            See more
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
