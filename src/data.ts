export type Project = {
  index: string;
  name: string;
  category: string;
  short: string;
  description: string;
  stack: string[];
  source?: string;
  proof: string;
  visual: "launchguard" | "pothole" | "research" | "maville";
};

export const projects: Project[] = [
  {
    index: "01",
    name: "LaunchGuard",
    category: "Reliability engineering",
    short: "Know when a deployment breaks production.",
    description:
      "An event-driven monitoring platform that connects service failures to recent deployments. It combines an authenticated React dashboard with a Spring Boot API, Kafka probe pipeline, PostgreSQL history, and full observability.",
    stack: ["Java", "Spring Boot", "Kafka", "React", "PostgreSQL"],
    source: "https://github.com/doctor277/launchguard",
    proof: "187 automated tests · OIDC/RBAC · Docker · GitHub Actions",
    visual: "launchguard",
  },
  {
    index: "02",
    name: "Pothole Montréal",
    category: "Civic technology",
    short: "Turn street reports into structured city data.",
    description:
      "A privacy-conscious mobile reporting platform with GPS-assisted positioning, PostGIS duplicate suggestions, private photo storage, and protected human moderation. AI runs only in a cautious, administrator-triggered shadow mode.",
    stack: ["React Native", "TypeScript", "Supabase", "PostGIS", "Next.js"],
    source: "https://github.com/doctor277/pothole-montreal",
    proof: "Bilingual mobile flow · RLS · Private storage · Human-controlled AI",
    visual: "pothole",
  },
  {
    index: "03",
    name: "Research Lab",
    category: "Research infrastructure",
    short: "Backtesting infrastructure for disciplined investment research.",
    description:
      "A Python platform for testing algorithmic strategies against SPY with virtual capital, walk-forward validation, transaction costs, and explicit risk controls—built to make attractive ideas prove themselves.",
    stack: ["Python", "Pytest", "Backtesting", "AI Agents"],
    proof: "345 automated tests · Walk-forward validation · Bias controls",
    visual: "research",
  },
  {
    index: "04",
    name: "MaVille",
    category: "City operations",
    short: "A city-works management platform built with a team.",
    description:
      "A Java and MongoDB backend for authentication, registration, and municipal service requests, integrated with Montréal roadwork and traffic APIs and delivered through hands-on team collaboration.",
    stack: ["Java", "MongoDB", "Maven", "JUnit"],
    proof: "Public-data integration · Backend testing · Team delivery",
    visual: "maville",
  },
];

export const skills = [
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Spring Boot",
  "React",
  "React Native",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "PostGIS",
  "Kafka",
  "AWS",
  "Docker",
  "Playwright",
  "Testcontainers",
];

export const capabilities = [
  {
    index: "01",
    title: "Backend & distributed systems",
    description: "Design and operate dependable services with clear boundaries, durable data, and observable failure modes.",
    tools: ["Java", "Spring Boot", "REST APIs", "Kafka", "PostgreSQL"],
  },
  {
    index: "02",
    title: "Product engineering",
    description: "Build useful full-stack and mobile products from interface to persistence.",
    tools: ["TypeScript", "React", "React Native", "Next.js", "Supabase", "PostGIS"],
  },
  {
    index: "03",
    title: "Quality & delivery",
    description: "Ship with confidence through automated testing, reproducible environments, and continuous delivery.",
    tools: ["JUnit", "Pytest", "Playwright", "Testcontainers", "Docker", "GitHub Actions"],
  },
];

export const experience = [
  {
    index: "01",
    place: "Université de Montréal",
    role: "B.Sc. Computer Science",
    date: "Expected 2027",
    note: "Deepening a technical foundation in algorithms, systems, and software engineering.",
  },
  {
    index: "02",
    place: "3 Amigos",
    role: "Waiter",
    date: "2022 — Present",
    note: "Communication, prioritization, and composure across ten-plus tables in a high-pressure environment.",
  },
  {
    index: "03",
    place: "Grillades Torino",
    role: "Manager",
    date: "2021 — 2022",
    note: "Led daily operations, coordinated staff, and kept service moving through peak hours.",
  },
];
