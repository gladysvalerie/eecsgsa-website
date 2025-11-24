import React from "react";
import { CLIU } from "@/assets";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin, FaGoogle, FaDiscord } from "react-icons/fa";

const ContactHeroSection = ({
    title = "CONTACT US",
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
                    url(${CLIU})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-md mb-6">
                    {title}
                </h1>

                {/* Social Icons Row */}
                <div className="flex justify-center space-x-5 mt-4">
                    <a
                        href="https://www.instagram.com/nthu_eecsgsa?igsh=czY4bDN0bHU2cXNx"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        <IoLogoInstagram className="h-7 w-7 md:h-9 md:w-9" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/nthu-eecs-gsa/"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        <FaLinkedin className="h-7 w-7 md:h-9 md:w-9" />
                    </a>
                    <a
                        href="nthu.eecsgsa@gmail.com"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        <FaGoogle className="h-7 w-7 md:h-9 md:w-9" />
                    </a>
                    <a
                        href="https://discord.com/invite/sDkWXFcCXP"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        <FaDiscord className="h-7 w-7 md:h-9 md:w-9" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactHeroSection;
