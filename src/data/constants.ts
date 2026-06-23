export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  JAVA = "Java",
  SPRING = "SpringBooot",
  MYSQL = "MySQL",
  SQLSERVER = "SQLServer",
  TOMCAT = "Tomcat",
  POSTMAN = "Postman",
  INTELLIJ = "Intellij",
  VSCODE = "VSCode",
  NETBEANS = "NetBean",
  ELECTRON = "Electron",
  NODEJS = "nodejs",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  NEXTJS = "nextjs",
  VUE = "vue",
  BOOTSTRAP = "BootStrap",
  SUPABASE = "Supabase",
  NPM = "npm",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Client-side behavior and Electron renderer logic.",
    color: "#f0db4f",
    icon: devicon("javascript/javascript-original.svg"),
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed JavaScript for maintainable desktop app code.",
    color: "#007acc",
    icon: devicon("typescript/typescript-original.svg"),
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic structure for web interfaces and JSP views.",
    color: "#e34c26",
    icon: devicon("html5/html5-original.svg"),
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Responsive styling for admin and customer screens.",
    color: "#264de4",
    icon: devicon("css3/css3-original.svg"),
  },
  [SkillNames.JAVA]: {
    id: 5,
    name: "Java",
    label: "Java",
    shortDescription: "Main language for backend and coursework projects.",
    color: "#f89820",
    icon: devicon("java/java-original.svg"),
  },
  [SkillNames.SPRING]: {
    id: 6,
    name: "SpringBooot",
    label: "Spring Boot",
    shortDescription: "Framework knowledge for structured Java web apps.",
    color: "#6db33f",
    icon: devicon("spring/spring-original.svg"),
  },
  [SkillNames.MYSQL]: {
    id: 7,
    name: "MySQL",
    label: "MySQL",
    shortDescription: "Relational database fundamentals and SQL practice.",
    color: "#00758f",
    icon: devicon("mysql/mysql-original.svg"),
  },
  [SkillNames.SQLSERVER]: {
    id: 8,
    name: "SQLServer",
    label: "SQL Server",
    shortDescription: "Database design for booking, accounts, invoices, and reports.",
    color: "#a91d22",
    icon: devicon("microsoftsqlserver/microsoftsqlserver-plain.svg"),
  },
  [SkillNames.TOMCAT]: {
    id: 9,
    name: "Tomcat",
    label: "Tomcat",
    shortDescription: "Local deployment target for Servlet/JSP applications.",
    color: "#f8dc75",
    icon: devicon("tomcat/tomcat-original.svg"),
  },
  [SkillNames.POSTMAN]: {
    id: 10,
    name: "Postman",
    label: "Postman",
    shortDescription: "Manual API testing and validation during backend work.",
    color: "#ff6c37",
    icon: devicon("postman/postman-original.svg"),
  },
  [SkillNames.INTELLIJ]: {
    id: 11,
    name: "Intellij",
    label: "IntelliJ IDEA",
    shortDescription: "Primary IDE for Java development and debugging.",
    color: "#f43f5e",
    icon: devicon("intellij/intellij-original.svg"),
  },
  [SkillNames.VSCODE]: {
    id: 12,
    name: "VSCode",
    label: "VS Code",
    shortDescription: "Editor for web, JavaScript, TypeScript, and quick project work.",
    color: "#007acc",
    icon: devicon("vscode/vscode-original.svg"),
  },
  [SkillNames.NETBEANS]: {
    id: 13,
    name: "NetBean",
    label: "NetBeans",
    shortDescription: "Java IDE used for coursework and desktop-style projects.",
    color: "#1b6ac6",
    icon: devicon("netbeans/netbeans-original.svg"),
  },
  [SkillNames.ELECTRON]: {
    id: 14,
    name: "Electron",
    label: "Electron",
    shortDescription: "Windows desktop app shell for Messenger and DiscordLyrics.",
    color: "#9feaf9",
    icon: devicon("electron/electron-original.svg"),
  },
  [SkillNames.NODEJS]: {
    id: 15,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Runtime for Electron tooling, local servers, and packaging.",
    color: "#6cc24a",
    icon: devicon("nodejs/nodejs-original.svg"),
  },
  [SkillNames.GIT]: {
    id: 16,
    name: "git",
    label: "Git",
    shortDescription: "Version control for coursework and personal projects.",
    color: "#f1502f",
    icon: devicon("git/git-original.svg"),
  },
  [SkillNames.GITHUB]: {
    id: 17,
    name: "github",
    label: "GitHub",
    shortDescription: "Repository hosting, releases, and project sharing.",
    color: "#ffffff",
    icon: devicon("github/github-original.svg"),
  },
  [SkillNames.DOCKER]: {
    id: 18,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization basics for application environments.",
    color: "#2496ed",
    icon: devicon("docker/docker-original.svg"),
  },
  [SkillNames.NEXTJS]: {
    id: 19,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "React framework used by this portfolio.",
    color: "#ffffff",
    icon: devicon("nextjs/nextjs-original.svg"),
  },
  [SkillNames.VUE]: {
    id: 20,
    name: "vue",
    label: "Vue",
    shortDescription: "Frontend framework exposure from web projects.",
    color: "#41b883",
    icon: devicon("vuejs/vuejs-original.svg"),
  },
  [SkillNames.BOOTSTRAP]: {
    id: 21,
    name: "BootStrap",
    label: "Bootstrap",
    shortDescription: "Fast UI layout and component styling.",
    color: "#7952b3",
    icon: devicon("bootstrap/bootstrap-original.svg"),
  },
  [SkillNames.SUPABASE]: {
    id: 22,
    name: "Supabase",
    label: "Supabase",
    shortDescription: "Backend-as-a-service knowledge from JavaScript apps.",
    color: "#3ecf8e",
    icon: devicon("supabase/supabase-original.svg"),
  },
  [SkillNames.NPM]: {
    id: 23,
    name: "npm",
    label: "npm",
    shortDescription: "Package management for JavaScript and Electron apps.",
    color: "#cb3837",
    icon: devicon("npm/npm-original-wordmark.svg"),
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Deployment platform for frontend applications.",
    color: "#ffffff",
    icon: devicon("vercel/vercel-original.svg"),
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2023",
    endDate: "2026",
    title: "Software Development Student",
    company: "FPT Polytechnic College, Hanoi",
    description: [
      "Final-year student focused on Java programming, database management, web development, software testing, and agile project work.",
      "Built practical projects around real business requirements, database design, authentication, booking workflows, and application architecture.",
    ],
    skills: [
      SkillNames.JAVA,
      SkillNames.SQLSERVER,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "Jun 2026",
    endDate: "Present",
    title: "Java Web Project Developer",
    company: "EzBook",
    description: [
      "Developed a Servlet/JSP booking management system with customer, staff, and admin workflows.",
      "Implemented account management, service and voucher CRUD, invoice workflows, booking status handling, statistics, and Gmail OTP flows.",
    ],
    skills: [
      SkillNames.JAVA,
      SkillNames.TOMCAT,
      SkillNames.SQLSERVER,
      SkillNames.MYSQL,
      SkillNames.POSTMAN,
      SkillNames.INTELLIJ,
    ],
  },
  {
    id: 3,
    startDate: "2026",
    endDate: "Present",
    title: "Desktop App Developer",
    company: "DiscordLyrics and Messenger Desktop",
    description: [
      "Built Windows desktop utilities with Electron, TypeScript, JavaScript, local settings, tray behavior, update flows, and packaged installers.",
      "Focused on practical user workflows such as lyrics-to-Discord status, multi-account Messenger sessions, PIN lock, and desktop packaging.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.JS,
      SkillNames.NODEJS,
      SkillNames.ELECTRON,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.GITHUB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Light mode is active.",
    "Switching to a brighter workspace.",
    "Light mode enabled for clearer reading.",
    "Brightness increased.",
    "Clean light theme enabled.",
  ],
  dark: [
    "Dark mode is active.",
    "Back to the dark workspace.",
    "Dark mode enabled for late-night focus.",
    "Brightness reduced.",
    "Clean dark theme enabled.",
  ],
};
