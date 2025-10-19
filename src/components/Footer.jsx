import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fullLogo } from "@/assets";

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--color-primary)] mt-auto">
            <div className="max-w-2xl mx-auto px-6 py-8">
                <div className="flex justify-between items-center gap-8">
                    {/* Left column - Navigation + Social Icons */}
                    <div className="flex flex-col space-y-6">
                        {/* Navigation Links */}
                        <div className="flex flex-col space-y-3 text-sm">
                            <Link
                                to="/"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="projects"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                Projects
                            </Link>
                            <Link
                                to="about"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <Link
                                to="resources"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                Resources
                            </Link>
                            <Link
                                to="contact"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                <IoLogoInstagram className="h-5 w-5 md:h-7 md:w-7" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                <FaLinkedin className="h-5 w-5 md:h-7 md:w-7" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                <FaGoogle className="h-5 w-5 md:h-7 md:w-7" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-200 transition-colors duration-200"
                            >
                                <FaDiscord className="h-5 w-5 md:h-7 md:w-7" />
                            </a>
                        </div>
                    </div>

                    {/* Right column - Logo */}
                    <div className="flex justify-center">
                        <img
                            src={fullLogo}
                            alt="EECS-GSA Logo"
                            className="h-48 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Footer bottom - Copyright */}
            <div className="">
                <div className="container mx-auto px-6 py-4">
                    <p className="text-center text-xs md:text-sm text-white/80">
                        © NTHU EECS-GSA 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
