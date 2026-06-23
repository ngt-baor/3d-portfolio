import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const icon = (src: string, alt: string) => (
  <img src={src} alt={alt} className="size-full object-contain" />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  if (!live && !repo) return null;

  return (
    <div className="my-3 mb-8 flex flex-col items-center justify-start gap-3 md:flex-row">
      {live && (
        <Link
          className="flex gap-2 font-mono underline"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant="default" size="sm">
            Visit
            <ArrowUpRight className="ml-3 size-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="flex gap-2 font-mono underline"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant="default" size="sm">
            GitHub
            <ArrowUpRight className="ml-3 size-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "Java"),
  },
  servlet: {
    title: "Jakarta Servlet",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "Jakarta Servlet"),
  },
  jsp: {
    title: "JSP",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "JSP"),
  },
  sqlserver: {
    title: "SQL Server",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", "SQL Server"),
  },
  tomcat: {
    title: "Tomcat",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg", "Tomcat"),
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", "Maven"),
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", "TypeScript"),
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "React"),
  },
  nextjs: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", "Next.js"),
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", "Tailwind CSS"),
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript"),
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", "Node.js"),
  },
  electron: {
    title: "Electron",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", "Electron"),
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "HTML"),
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: icon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "CSS"),
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "ezbook",
    category: "Booking Management",
    title: "EzBook",
    src: `${BASE_PATH}/ezbook/1.png`,
    screenshots: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
    ],
    github: "https://github.com/ngt-baor/EzBook",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.jsp],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.servlet,
        PROJECT_SKILLS.sqlserver,
        PROJECT_SKILLS.tomcat,
        PROJECT_SKILLS.maven,
      ],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          EzBook is a Java Servlet/JSP booking system for salon and spa
          operations. It supports online booking for customers, staff booking
          handling, and admin management for accounts, services, vouchers,
          invoices, and statistics.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/ngt-baor/EzBook" />

        <TypographyH3 className="my-4 mt-8">User, Staff, and Admin Flows</TypographyH3>
        <p className="mb-2 font-mono">
          The system separates responsibilities by role: users can register,
          book services, manage profiles, and recover accounts with Gmail OTP;
          staff can process bookings and invoices; admins manage master data
          and operational reports.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/ezbook/1.png`,
            `${BASE_PATH}/ezbook/2.png`,
            `${BASE_PATH}/ezbook/3.png`,
            `${BASE_PATH}/ezbook/4.png`,
            `${BASE_PATH}/ezbook/5.png`,
            `${BASE_PATH}/ezbook/6.png`,
            `${BASE_PATH}/ezbook/7.png`,
            `${BASE_PATH}/ezbook/8.png`,
            `${BASE_PATH}/ezbook/9.png`,
            `${BASE_PATH}/ezbook/10.png`,
            `${BASE_PATH}/ezbook/11.png`,
            `${BASE_PATH}/ezbook/12.png`,
          ]}
        />

        <TypographyH3 className="my-4 mt-8">Backend and Database</TypographyH3>
        <p className="mb-2 font-mono">
          Built with Java 17, Jakarta Servlet, JSP/JSTL, SQL Server, Tomcat, and
          Jakarta Mail. The application focuses on real booking workflows,
          database-backed CRUD modules, authentication, OTP verification, and
          role-based access control.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/ezbook/13.png`,
            `${BASE_PATH}/ezbook/14.png`,
            `${BASE_PATH}/ezbook/15.png`,
            `${BASE_PATH}/ezbook/16.png`,
            `${BASE_PATH}/ezbook/17.png`,
            `${BASE_PATH}/ezbook/18.png`,
            `${BASE_PATH}/ezbook/19.png`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "discord-lyrics",
    category: "Desktop Utility",
    title: "DiscordLyrics",
    src: `${BASE_PATH}/discord-lyrics/1.png`,
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    github: "https://github.com/ngt-baor/Discord_Lyrics",
    live: "https://github.com/ngt-baor/Discord_Lyrics/releases",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.node, PROJECT_SKILLS.electron],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          DiscordLyrics is a Windows desktop app that reads the currently
          playing song from Spotify, SpotX, or YouTube Music, fetches synced
          lyrics, and publishes the current lyric line to Discord Custom Status.
        </TypographyP>
        <ProjectsLinks
          live="https://github.com/ngt-baor/Discord_Lyrics/releases"
          repo="https://github.com/ngt-baor/Discord_Lyrics"
        />

        <TypographyH3 className="my-4 mt-8">Music Detection and Lyrics Sync</TypographyH3>
        <p className="mb-2 font-mono">
          The app supports multiple music sources, lyric caching, status update
          rate limiting, a tray workflow, update checks through GitHub Releases,
          and a Vietnamese desktop UI with a floating mini popup.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/discord-lyrics/1.png`,
            `${BASE_PATH}/discord-lyrics/2.png`,
            `${BASE_PATH}/discord-lyrics/3.png`,
            `${BASE_PATH}/discord-lyrics/4.png`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "messenger-desktop",
    category: "Desktop App",
    title: "Messenger Desktop",
    src: `${BASE_PATH}/messenger/1.png`,
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
    github: "https://github.com/ngt-baor/Messenger-reup",
    live: "https://github.com/ngt-baor/Messenger-reup/releases",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.electron],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          Messenger Desktop is a Windows Electron app for Messenger Web. It
          supports separate sessions for multiple accounts, PIN lock, unread
          badges, light/dark mode, window pinning, tray minimization, and
          Messenger call support through Chromium.
        </TypographyP>
        <ProjectsLinks
          live="https://github.com/ngt-baor/Messenger-reup/releases"
          repo="https://github.com/ngt-baor/Messenger-reup"
        />

        <TypographyH3 className="my-4 mt-8">Multi-account Desktop Workflow</TypographyH3>
        <p className="mb-2 font-mono">
          The app packages Messenger into a desktop experience with local
          profiles, session persistence, installer packaging, and native
          Windows app behavior.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/messenger/1.png`,
            `${BASE_PATH}/messenger/2.png`,
            `${BASE_PATH}/messenger/3.png`,
            `${BASE_PATH}/messenger/4.png`,
            `${BASE_PATH}/messenger/5.png`,
            `${BASE_PATH}/messenger/6.png`,
            `${BASE_PATH}/messenger/7.png`,
          ]}
        />
      </div>
    ),
  },
  {
    id: "portfolio",
    category: "Personal Portfolio",
    title: "3D Portfolio",
    src: `${BASE_PATH}/portfolio-bao/1.png`,
    screenshots: ["1.png", "2.png", "3.png"],
    github: "https://github.com/ngt-baor/3d-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          This 3D Portfolio is my personal developer portfolio customized from
          the open-source 3D portfolio idea by Naresh Khatri. It presents my
          profile, resume, tech stack, selected projects, and contact section
          with an interactive Spline keyboard scene.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/ngt-baor/3d-portfolio" />

        <TypographyH3 className="my-4 mt-8">Interactive Portfolio Experience</TypographyH3>
        <p className="mb-2 font-mono">
          The site focuses on a dark space-themed visual style, smooth section
          transitions, a 3D keyboard for skills, project screenshots, and direct
          personal links for GitHub, LinkedIn, Facebook, Instagram, and email.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/portfolio-bao/1.png`,
            `${BASE_PATH}/portfolio-bao/2.png`,
            `${BASE_PATH}/portfolio-bao/3.png`,
          ]}
        />
      </div>
    ),
  },
];

export default projects;
