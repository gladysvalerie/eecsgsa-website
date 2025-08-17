import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import AboutUsSection from "../components/AboutUsSection";
import ContactSection from "../components/ContactSection";
import logo from "../assets/logo.svg";

const Home = () => {
    return (
        <div className="min-h-screen bg-black">
            <HeroSection
                title="EECS-GSA"
                eyebrow="Welcome to"
                subtitle="official website"
                logoSrc={logo}
            />
            <WhatWeDoSection />
            <AboutUsSection />
            <ContactSection />
        </div>
    );
};

export default Home;
