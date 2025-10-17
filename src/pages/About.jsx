import FlipCard from "../components/FlipCard";
import AboutHeroSection from "../layouts/About/AboutHeroSection";
import OurTeamSection from "../layouts/About/OurTeam";
import OurValueSection from "../layouts/About/OurValueSection";
import WeAreSection from "../layouts/About/WeAreSection";

const About = () => {
    return (
        <div className="min-h-screen bg-black">
               <AboutHeroSection />
               <WeAreSection />
               <OurValueSection />
               <OurTeamSection />
        </div>
    );
};

export default About;
