export interface Experience {
  company: string;
  logo: string;
  contactEmail: string;
  website?: string;
  role: string;
  type: "Internship" | "Freelance" | "Full-time";
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Codes",
    logo: "/companies/logo.png",
    contactEmail: "contact@codes.com",
    website: "https://codes.com",
    role: "Software Developer",
    type: "Freelance",
    duration: "4 months",
    description:
      "Developed modern web applications using React and Next.js, implemented responsive UI systems with Tailwind CSS, and optimized performance for scalability. Collaborated closely with clients to translate business needs into efficient and maintainable technical solutions.",
  },
  {
    company: "Global Asset Cameroun",
    logo: "/companies/logo.png",
    contactEmail: "contact@globalasset.cm",
    website: "https://globalasset.cm",
    role: "IT & Software Intern",
    type: "Internship",
    duration: "6 months",
    description:
      "Contributed to the development and maintenance of internal software tools, improved digital workflows, and assisted in deploying structured data management solutions. Worked in a professional environment requiring organization, reliability, and strong problem-solving skills.",
  },
  {
    company: "AJEL Corporation",
    logo: "/companies/logo.png",
    contactEmail: "contact@ajel.com",
    website: "https://ajel.com",
    role: "Software Engineer",
    type: "Internship",
    duration: "6 months",
    description:
      "Designed and implemented complex software solutions, contributed to scalable architectures, and collaborated with cross-functional teams to deliver production-ready features with high performance and reliability.",
  },
];

export const navItems = [
  { label: "About", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Stack", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Playground", href: "#" },
];

export interface Game {
  name: string;
  image: string;
}

export const games: Game[] = [
  { name: "Chess", image: "/games/chess.jpg" },
  { name: "Crossword Puzzles", image: "/games/crossword.jpg" },
  { name: "Damier", image: "/games/dames.jpg" },
  { name: "Memory Game", image: "/games/memory.jpg" },
  { name: "Quizz Game", image: "/games/quizz.jpg" },
  { name: "Sudoku", image: "/games/sudoku.jpg" },
  { name: "Tic Tac Toe", image: "/games/tic-tac-toe.jpg" },
  { name: "Wordle", image: "/games/wordle.jpg" },
];

export interface InfoCard {
  title: string;
  description: string;
}

export const infoCards: InfoCard[] = [
  {
    title: "Education",
    description: "Bachelor's in Computer Science from XYZ University.",
  },
  {
    title: "Experience",
    description: "3+ years developing web and AI projects.",
  },
  {
    title: "Hobbies",
    description: "Chess, Coding challenges, Reading tech blogs.",
  },
];
