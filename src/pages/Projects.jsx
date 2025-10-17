import ProjectHeroSection from "../layouts/Projects/ProjectHeroSection";
import ProjectContent from "../layouts/Projects/ProjectContent"

const Projects = () => {
    return (
        <div className="min-h-screen bg-black">
            <ProjectHeroSection />
            <ProjectContent />
        </div>
    );
};

export default Projects;
