export type Project = {
  index: string;
  name: string;
  category: string;
  short: string;
  description: string;
  stack: string[];
  source?: string;
  proof: string;
  visual: "launchguard" | "ghostwatch" | "pothole";
  image?: { src: string; alt: string; caption?: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    index: "01",
    name: "LaunchGuard",
    category: "Monitoring platform",
    short: "Links service failures to the deployment that caused them.",
    description:
      "A Spring Boot API sends health-check jobs through Kafka to a probe worker. Results are stored in PostgreSQL, and when a service fails the backend opens an incident and records which deployment was live at the time. The React dashboard signs in with OIDC and shows controls based on role: viewer, operator or admin. Prometheus, Grafana and OpenTelemetry tracing run in the local Docker lab.",
    stack: ["Java", "Spring Boot", "Kafka", "React", "PostgreSQL", "Docker"],
    source: "https://github.com/doctor277/launchguard",
    proof: "Testcontainers integration tests · Playwright end-to-end flow · OIDC + RBAC · CI with CodeQL",
    visual: "launchguard",
    image: { src: "./projects/launchguard.png", alt: "LaunchGuard dashboard", width: 1440, height: 1000 },
  },
  {
    index: "02",
    name: "GhostWatch",
    category: "Local monitoring tool",
    short: "See what your Windows machine is doing without sending data anywhere.",
    description:
      "A FastAPI backend collects system, process, network and Windows Event Log data, keeps history in SQLite, and streams it to a browser dashboard over WebSockets. Detections are threshold and baseline rules that explain why they fired. It only listens on localhost, redacts private data in exported reports, and has a Demo Mode with synthetic data so you can try it without scanning your own machine.",
    stack: ["Python", "FastAPI", "SQLite", "JavaScript", "WebSockets"],
    source: "https://github.com/doctor277/ghostwatch",
    proof: "MIT licensed · Pytest and Playwright suites · CI on Python 3.11 and 3.13 · Localhost only",
    visual: "ghostwatch",
    image: {
      src: "./projects/ghostwatch.png",
      alt: "GhostWatch dashboard in Demo Mode",
      caption: "Demo Mode, synthetic data",
      width: 1440,
      height: 900,
    },
  },
  {
    index: "03",
    name: "Pothole Montréal",
    category: "Civic mobile app",
    short: "Report a pothole from your phone and see it on a shared map.",
    description:
      "An Expo app takes a photo, your GPS position and an adjustable map pin, then checks PostGIS for nearby reports so you can add to an existing pothole instead of creating a duplicate. Photos stay in private storage, and admins review reports in a Next.js dashboard. An OpenAI visual check only runs when an admin requests it, and it never changes a report's status on its own.",
    stack: ["React Native", "TypeScript", "Supabase", "PostGIS", "Next.js"],
    source: "https://github.com/doctor277/pothole-montreal",
    proof: "English and French · Row-level security · pgTAP database tests · Admin-triggered AI only",
    visual: "pothole",
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Backend",
    description: "REST APIs in Spring Boot and FastAPI, event pipelines with Kafka, and PostgreSQL schemas with migrations.",
    tools: ["Java", "Spring Boot", "Python / FastAPI", "Kafka", "PostgreSQL"],
  },
  {
    index: "02",
    title: "Full-stack and mobile",
    description: "React and Next.js dashboards, a React Native app, and Supabase with PostGIS for location data.",
    tools: ["TypeScript", "React", "React Native", "Next.js", "Supabase", "PostGIS"],
  },
  {
    index: "03",
    title: "Testing and delivery",
    description: "Unit, integration and browser tests, Docker Compose setups anyone can run, and CI on GitHub Actions.",
    tools: ["JUnit", "Pytest", "Playwright", "Testcontainers", "Docker", "GitHub Actions"],
  },
];

export const experience = [
  {
    index: "01",
    place: "Université de Montréal",
    role: "B.Sc. Computer Science",
    date: "Expected April 2027",
    note: "Coursework in algorithms, systems and software engineering.",
  },
  {
    index: "02",
    place: "3 Amigos",
    role: "Waiter",
    date: "2022 to present",
    note: "Handling a full section during busy service.",
  },
  {
    index: "03",
    place: "Grillades Torino",
    role: "Manager",
    date: "2021 to 2022",
    note: "Led daily operations, coordinated staff, and kept service moving through peak hours.",
  },
];
