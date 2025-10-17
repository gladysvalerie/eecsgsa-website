import HeroSection from "../layouts/Home/HeroSection";
import WhatWeDoSection from "../layouts/Home/WhatWeDoSection";
import AboutUsSection from "../layouts/Home/AboutUsSection";
import ContactSection from "../layouts/Home/ContactSection";
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
