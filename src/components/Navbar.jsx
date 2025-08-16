import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:justify-center h-16">
                        <img
                            src={logo}
                            alt="EECS GSA Logo"
                            className="w-10 h-10 md:hidden"
                        />

                        {/* Desktop navigation, hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="about"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                to="projects"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                to="resources"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Resources
                            </Link>
                            <Link
                                to="contact"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile hamburger menu, only visible on mobile */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-white hover:text-gray-300 transition-colors"
                        >
                            <RxHamburgerMenu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-screen overlay menu - Mobile only */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black md:hidden">
                    <div className="flex flex-col items-center h-full">
                        <div className="flex flex-col items-center">
                            <button
                                onClick={closeMenu}
                                className="text-white hover:text-gray-300 transition-colors my-16"
                            >
                                <FaRegWindowClose className="w-8 h-8" />
                            </button>

                            <div className="flex flex-col items-center space-y-8">
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className="text-white hover:text-gray-300 transition-colors text-xl"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="about"
                                    onClick={closeMenu}
                                    className="text-white hover:text-gray-300 transition-colors text-xl"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="projects"
                                    onClick={closeMenu}
                                    className="text-white hover:text-gray-300 transition-colors text-xl"
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="resources"
                                    onClick={closeMenu}
                                    className="text-white hover:text-gray-300 transition-colors text-xl"
                                >
                                    Resources
                                </Link>
                                <Link
                                    to="contact"
                                    onClick={closeMenu}
                                    className="text-white hover:text-gray-300 transition-colors text-xl"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="absolute bottom-8">
                            <img
                                src={logo}
                                alt="EECS GSA Logo"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
