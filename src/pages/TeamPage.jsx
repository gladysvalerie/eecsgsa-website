import { useParams } from "react-router-dom";
import AboutHeroSection from "../layouts/About/AboutHeroSection";
import DeckOfCards from "../layouts/About/DeckOfCards";
//import DeckOfCards from "../components/ProfileCard";

const teamInfo = {
  "internal-affairs": {
    title: "INTERNAL AFFAIRS",
    subtitle: "Keeping everything running smoothly behind the scenes.",
    members: [
      {
        name: "Sarah Malik",
        title: "Head of Internal Affairs",
        handle: "sarahm",
        status: "Online",
        avatarUrl: "/images/teams/internal/sarah.jpg",
      },
      {
        name: "Kevin Lee",
        title: "Operations Coordinator",
        handle: "kevlee",
        status: "Busy",
        avatarUrl: "/images/teams/internal/kevin.jpg",
      }
    ]
  },

  "finance": {
    title: "FINANCE",
    subtitle: "Managing budgets, money flow, and financial responsibility.",
    members: [
      {
        name: "Nadia Putri",
        title: "Head of Finance",
        handle: "nadia",
        status: "Online",
        avatarUrl: "/images/teams/finance/nadia.jpg",
      },
      {
        name: "Andrew Tan",
        title: "Treasurer",
        handle: "andrewt",
        status: "Offline",
        avatarUrl: "/images/teams/finance/andrew.jpg",
      }
    ]
  },

  "public-relations": {
    title: "PUBLIC RELATIONS",
    subtitle: "Shaping how the world sees us.",
    members: [
      {
        name: "Michelle Wong",
        title: "PR Lead",
        handle: "michelle",
        status: "Online",
        avatarUrl: "/images/teams/pr/michelle.jpg",
      },
      {
        name: "Ryan Park",
        title: "Communications Officer",
        handle: "ryanp",
        status: "Offline",
        avatarUrl: "/images/teams/pr/ryan.jpg",
      }
    ]
  },

  "marketing": {
    title: "MARKETING",
    subtitle: "Turning ideas into attention.",
    members: [
      {
        name: "Aira Halim",
        title: "Design Lead",
        handle: "aira",
        status: "Online",
        avatarUrl: "/images/teams/marketing/aira.jpg",
      },
      {
        name: "DDDDAAARRRREENNNNNN",
        title: "Video Editor",
        handle: "darrendirgo",
        status: "Online",
        avatarUrl: "/images/teams/marketing/darren.jpg",
      }
    ]
  },

  "academic-affairs": {
    title: "ACADEMIC AFFAIRS",
    subtitle: "Elevating knowledge, workshops, and learning experiences.",
    members: [
      {
        name: "Grace Lim",
        title: "Academic Lead",
        handle: "grace",
        status: "Online",
        avatarUrl: "/images/teams/academic/grace.jpg",
      },
      {
        name: "Ethan Chen",
        title: "Workshop Coordinator",
        handle: "ethanc",
        status: "Busy",
        avatarUrl: "/images/teams/academic/ethan.jpg",
      }
    ]
  },

  "student-affairs": {
    title: "STUDENT AFFAIRS",
    subtitle: "Building community and unforgettable student experiences.",
    members: [
      {
        name: "Bella Noor",
        title: "Student Affairs Lead",
        handle: "bella",
        status: "Online",
        avatarUrl: "/images/teams/student/bella.jpg",
      },
      {
        name: "Marco Reyes",
        title: "Event Manager",
        handle: "marcoreyes",
        status: "Offline",
        avatarUrl: "/images/teams/student/marco.jpg",
      }
    ]
  }
};

export default function TeamPage() {
  const { team } = useParams();
  const info = teamInfo[team];

  return (
    <>
      <AboutHeroSection title={info.title} subtitle={info.subtitle} />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <DeckOfCards members={info.members} />
      </div>
    </>
  );
}