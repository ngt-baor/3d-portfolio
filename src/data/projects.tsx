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
    <div className="my-6 flex flex-col items-start justify-start gap-3 md:flex-row">
      {live && (
        <Link
          className="flex gap-2 font-mono underline"
          rel="noopener"
          target="_blank"
          href={live}
        >
          <Button variant="default" size="sm">
            Visit Website
            <ArrowUpRight className="ml-3 size-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="flex gap-2 font-mono underline"
          rel="noopener"
          target="_blank"
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

const ProjectLead = ({ children }: { children: ReactNode }) => (
  <TypographyP className="mx-auto max-w-4xl text-center font-mono text-2xl font-semibold leading-snug text-foreground md:text-3xl">
    {children}
  </TypographyP>
);

const ProjectBody = ({ children }: { children: ReactNode }) => (
  <p className="font-mono text-base font-semibold leading-8 text-foreground/90 md:text-lg md:leading-9">
    {children}
  </p>
);

const ProjectFeature = ({
  title,
  children,
  images,
}: {
  title: string;
  children: ReactNode;
  images?: string[];
}) => (
  <section className="space-y-5">
    <TypographyH3 className="font-display text-3xl font-black tracking-tight md:text-4xl">
      {title}
    </TypographyH3>
    <ProjectBody>{children}</ProjectBody>
    {images && <SlideShow images={images} />}
  </section>
);

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
      <div className="space-y-12">
        <ProjectLead>
          A role-based service booking management system for salon and spa
          operations.
        </ProjectLead>
        <ProjectBody>
          EzBook supports customer booking, staff processing, and admin
          management for accounts, services, vouchers, invoices, statistics, and
          Gmail OTP account recovery. My role focused on the Java web flow,
          database-backed CRUD modules, and practical booking workflows.
        </ProjectBody>
        <ProjectsLinks repo="https://github.com/ngt-baor/EzBook" />

        <ProjectFeature
          title="User, staff, and admin booking flows"
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
        >
          The system separates responsibilities by role: customers can register,
          book services, manage profiles, and recover accounts with Gmail OTP;
          staff can process bookings and invoices; admins manage master data and
          operational reports.
        </ProjectFeature>

        <ProjectFeature
          title="Backend, database, and OTP workflow"
          images={[
            `${BASE_PATH}/ezbook/13.png`,
            `${BASE_PATH}/ezbook/14.png`,
            `${BASE_PATH}/ezbook/15.png`,
            `${BASE_PATH}/ezbook/16.png`,
            `${BASE_PATH}/ezbook/17.png`,
            `${BASE_PATH}/ezbook/18.png`,
            `${BASE_PATH}/ezbook/19.png`,
          ]}
        >
          Built with Java 17, Jakarta Servlet, JSP/JSTL, SQL Server, Tomcat, and
          Jakarta Mail. The application focuses on real booking workflows,
          database-backed CRUD modules, authentication, OTP verification, and
          role-based access control.
        </ProjectFeature>
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
      <div className="space-y-12">
        <ProjectLead>
          A Windows desktop utility that turns synced lyrics into Discord Custom
          Status.
        </ProjectLead>
        <ProjectBody>
          DiscordLyrics reads the current song from Spotify, SpotX, or YouTube
          Music, fetches synced lyrics, and updates Discord Custom Status with
          the current lyric line. It is packaged as a desktop workflow with tray
          behavior, settings, and release updates.
        </ProjectBody>
        <ProjectsLinks
          live="https://github.com/ngt-baor/Discord_Lyrics/releases"
          repo="https://github.com/ngt-baor/Discord_Lyrics"
        />

        <ProjectFeature
          title="Music detection and lyrics sync"
          images={[
            `${BASE_PATH}/discord-lyrics/1.png`,
            `${BASE_PATH}/discord-lyrics/2.png`,
            `${BASE_PATH}/discord-lyrics/3.png`,
            `${BASE_PATH}/discord-lyrics/4.png`,
          ]}
        >
          The app supports multiple music sources, lyric caching, status update
          rate limiting, a tray workflow, update checks through GitHub Releases,
          and a Vietnamese desktop UI with a floating mini popup.
        </ProjectFeature>
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
      <div className="space-y-12">
        <ProjectLead>
          A Windows desktop wrapper for Messenger Web with multi-account local
          sessions.
        </ProjectLead>
        <ProjectBody>
          Messenger Desktop packages Messenger Web into an Electron app with
          separate account sessions, PIN lock, unread badges, light/dark mode,
          window pinning, tray minimization, and Chromium-based call support.
          The project is still in active development.
        </ProjectBody>
        <ProjectsLinks
          live="https://github.com/ngt-baor/Messenger-reup/releases"
          repo="https://github.com/ngt-baor/Messenger-reup"
        />

        <ProjectFeature
          title="Multi-account desktop workflow"
          images={[
            `${BASE_PATH}/messenger/1.png`,
            `${BASE_PATH}/messenger/2.png`,
            `${BASE_PATH}/messenger/3.png`,
            `${BASE_PATH}/messenger/4.png`,
            `${BASE_PATH}/messenger/5.png`,
            `${BASE_PATH}/messenger/6.png`,
            `${BASE_PATH}/messenger/7.png`,
          ]}
        >
          The app packages Messenger into a desktop experience with local
          profiles, session persistence, installer packaging, and native
          Windows app behavior.
        </ProjectFeature>
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
      <div className="space-y-12">
        <ProjectLead>
          An interactive personal developer portfolio built around a 3D skills
          keyboard.
        </ProjectLead>
        <ProjectBody>
          This 3D Portfolio is customized from the open-source portfolio idea by
          Naresh Khatri. It presents my profile, resume, tech stack, selected
          projects, and contact section through a dark space-themed interface.
        </ProjectBody>
        <ProjectsLinks repo="https://github.com/ngt-baor/3d-portfolio" />

        <ProjectFeature
          title="Interactive portfolio experience"
          images={[
            `${BASE_PATH}/portfolio-bao/1.png`,
            `${BASE_PATH}/portfolio-bao/2.png`,
            `${BASE_PATH}/portfolio-bao/3.png`,
          ]}
        >
          The site focuses on a dark space-themed visual style, smooth section
          transitions, a 3D keyboard for skills, project screenshots, and direct
          personal links for GitHub, LinkedIn, Facebook, Instagram, and email.
        </ProjectFeature>
      </div>
    ),
  },
];

export default projects;
