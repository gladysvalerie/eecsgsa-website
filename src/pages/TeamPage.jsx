import { useParams } from "react-router-dom";
import AboutHeroSection from "../layouts/About/AboutHeroSection";
import TeamSection from "../components/TeamSection";
import teamInfo from "../data/teamInfo";

export default function TeamPage() {
  const { team } = useParams();
  const info = teamInfo[team];

  if (!info) return <p className="text-white p-10">Team not found.</p>;

  return (
    <>
      <AboutHeroSection 
        title={info.title} 
        subtitle={info.subtitle || ""} 
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {info.sections
          ? info.sections.map((section, idx) => (
              <TeamSection
                key={idx}
                image={section.image}
                title={section.title}
                subtitle={section.subtitle}
                description={section.description}
                members={section.members}
              />
            ))
          : (
              <TeamSection
                image={info.image}
                title={info.title}
                subtitle={info.subtitle}
                description={info.description}
                members={info.members}
              />
            )}
      </div>
    </>
  );
}
