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
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Playground", href: "#playground" },
];

export interface Game {
  name: string;
  image: string;
  slug: string;
  status: "playable" | "in-development";
}

export const games: Game[] = [
  {
    name: "Tic Tac Toe",
    image: "/games/tic-tac-toe.jpg",
    slug: "tic-tac-toe",
    status: "playable",
  },
  {
    name: "Wordle",
    image: "/games/wordle.jpg",
    slug: "wordle",
    status: "playable",
  },
  {
    name: "Chess",
    image: "/games/chess.jpg",
    slug: "chess",
    status: "in-development",
  },
  {
    name: "Crossword Puzzles",
    image: "/games/crossword.jpg",
    slug: "crossword",
    status: "in-development",
  },
  {
    name: "Damier",
    image: "/games/dames.jpg",
    slug: "damier",
    status: "in-development",
  },
  {
    name: "Memory Game",
    image: "/games/memory.jpg",
    slug: "memory",
    status: "in-development",
  },
  {
    name: "Quizz Game",
    image: "/games/quizz.jpg",
    slug: "quizz",
    status: "in-development",
  },
  {
    name: "Sudoku",
    image: "/games/sudoku.jpg",
    slug: "sudoku",
    status: "in-development",
  },
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

export interface Project {
  id: string; // ← add this
  title: string;
  image: string;
  description: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "ai-weather-1",
    title: "AI Weather Platform",
    image: "/projects/projects.jpg",
    description:
      "An intelligent weather application powered by OpenWeatherMap API with predictive visualization.",
    github: "https://github.com/yourrepo",
    demo: "https://demo-link.com",
  },
  {
    id: "social-media-1",
    title: "Social Media App",
    image: "/projects/projects.jpg",
    description:
      "A full-stack social platform with authentication, real-time updates, and scalable architecture.",
    github: "https://github.com/yourrepo",
    demo: "https://demo-link.com",
  },
  {
    id: "ai-weather-2",
    title: "AI Weather Platform",
    image: "/projects/projects.jpg",
    description:
      "An intelligent weather application powered by OpenWeatherMap API with predictive visualization.",
    github: "https://github.com/yourrepo",
    demo: "https://demo-link.com",
  },
];

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Frontend Architectures",
    description:
      "Exploring modular design systems, performance optimization, and long-term maintainability strategies in modern web applications.",
    date: "January 12, 2026",
    author: "Yann Deukam",
    image: "/blogs/blogs.jpg",
  },
  {
    id: 2,
    title: "Designing with Performance in Mind",
    description:
      "Why performance is not an afterthought but a design decision. From bundle size control to rendering optimization.",
    date: "December 28, 2025",
    author: "Yann Deukam",
    image: "/blogs/blogs.jpg",
  },
  {
    id: 3,
    title: "From Concept to Production",
    description:
      "A breakdown of transforming an idea into a scalable product-ready solution using clean architecture principles.",
    date: "November 3, 2025",
    author: "Yann Deukam",
    image: "/blogs/blogs.jpg",
  },
  {
    id: 4,
    title: "Microinteractions That Matter",
    description:
      "How subtle animations and interaction feedback elevate user experience and strengthen product identity.",
    date: "October 14, 2025",
    author: "Yann Deukam",
    image: "/blogs/blogs.jpg",
  },
];

// constants/index.ts

export const WORDS: string[] = [
  "REACT",
  "STACK",
  "GAMES",
  "BUILD",
  "CLEAN",
  "LOGIC",
  "CODES",
  "VITES",
  "ROUTE",
  "STATE",
  "STORE",
  "FETCH",
  "ARRAY",
  "DEBUG",
  "CLASS",
  "FRAME",
  "STYLE",
  "INPUT",
  "TOKEN",
  "MODEL",
];
