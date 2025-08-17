import HeroSection from "../components/HeroSection";
import logo from "../assets/logo.svg";

const Home = () => {
    return (
        <HeroSection
            title="EECS-GSA"
            eyebrow="Welcome to"
            subtitle="official website"
            logoSrc={logo}
        />
    );
};

export default Home;
