import orientation from "../assets/orientation/orientation.jpg";

const teamInfo = {
  "internal-affairs": {
    title: "INTERNAL AFFAIRS",
    sections: [
      {
        title: "PRESIDENT & VICE PRESIDENT",
        subtitle: "President and Vice President",
        image: orientation,
        description:
          "The President and Vice President lead the Internal Affairs division and ensure seamless coordination.",
        members: [
          { name: "Pleng", title: "President" },
          { name: "Kla", title: "Vice President" },
        ]
      },
      {
        title: "SECRETARY & ASSISTANT",
        subtitle: "Secretary and Assistant",
        image: orientation,
        description:
          "The Secretary and Secretary Assistant manage administration and internal communication.",
        members: [
          { name: "Gladys", title: "Secretary of Association" },
          { name: "Christopher", title: "Secretary Assistant" },
        ]
      }
    ]
  },

  finance: {
    title: "FINANCE",
    subtitle: "Managing budgets, money flow, and responsibility.",
    image: orientation,
    description:
      "The Finance team oversees the association’s financial health, budgeting, and resource allocation. We ensure transparency and efficiency in every project we support.",
    members: [
      { name: "Prim", title: "Director of Finance" },
      { name: "Edbert", title: "Finance Officer" }
    ]
  },

  "public-relations": {
    title: "PUBLIC RELATIONS",
    subtitle: "Shaping how the world sees us.",
    image: orientation,
    description:
      "The Public Relations division manages communication and outreach, ensuring that the association is well represented and connected with the broader community.",
    members: [
      { name: "Jason", title: "Co-director of Public Relations Affairs" },
      { name: "Marvin", title: "Co-director of Public Relations Affairs" },
      { name: "James", title: "Public Relations Affairs Officer" },
      { name: "Patrick", title: "Public Relations Affairs Officer" }
    ]
  },

  marketing: {
    title: "MARKETING",
    subtitle: "Turning ideas into attention.",
    image: orientation,
    description:
      "Marketing promotes the association’s initiatives, events, and programs through creative campaigns, branding, and storytelling.",
    members: [
      { name: "Sikka", title: "Director of Marketing" },
      { name: "Josephine", title: "Marketing Officer" },
      { name: "Bradley", title: "Marketing Officer" },
      { name: "Darren", title: "Marketing Officer" }
    ]
  },

  "academic-affairs": {
    title: "ACADEMIC AFFAIRS",
    subtitle: "Elevating knowledge, workshops, and learning experiences.",
    image: orientation,
    description:
      "Academic Affairs focuses on organizing workshops, lectures, and initiatives that promote learning, academic growth, and research collaboration.",
    members: [
      { name: "Rowan", title: "Director of Academic Affairs" },
      { name: "Elaine", title: "Academic Officer" },
      { name: "Irma", title: "Academic Officer" },
      { name: "Pattadon", title: "Academic Officer" },
    ]
  },

  "student-affairs": {
    title: "STUDENT AFFAIRS",
    subtitle: "Building community and unforgettable student experiences.",
    image: orientation,
    description:
      "Student Affairs focuses on fostering student engagement, organizing events, and creating a welcoming environment for all students.",
    members: [
      { name: "Melvin", title: "Director of Student Affairs" },
      { name: "Angel", title: "Student Affairs Officer" },
      { name: "Pat", title: "Student Affairs Officer" },
      { name: "Farrel", title: "Student Affairs Officer" },
    ]
  }
};

export default teamInfo;
