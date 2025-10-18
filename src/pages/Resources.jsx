import ResourcesHeroSection from "../layouts/Resources/ResourcesHeroSection";
import ResourcesLink from "../layouts/Resources/ResourcesLink";

const Resources = () => {
    return (
        <div className="min-h-screen bg-black">
            <ResourcesHeroSection />
            <ResourcesLink />
            <div className="py-8"></div>
        </div>
    );
};

export default Resources;
