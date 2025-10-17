import FlipCard from "../components/FlipCard";
import AboutHeroSection from "../layouts/About/AboutHeroSection";
import WeAreSection from "../layouts/About/WeAreSection";

const About = () => {
    return (
        <div className="min-h-screen bg-black">
               <AboutHeroSection />
               <WeAreSection />
        </div>
    );
};

export default About;
