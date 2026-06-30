"use client";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  return (
    <SectionWrapper
      id="projects"
      className="mx-auto max-w-7xl px-4 md:min-h-[130vh]"
    >
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="flex w-full justify-center bg-transparent">
          <div
            className="group relative h-auto w-full max-w-[400px] overflow-hidden rounded-lg ring-1 ring-white/5"
            style={{ aspectRatio: "3/2" }}
          >
            <ScrollingPreview
              src={project.src}
              alt={project.title}
              bg={`/assets/backgrounds/${project.id}.jpg`}
            />
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-background via-background/80 to-transparent">
              <div className="flex h-full flex-col items-start justify-end p-4">
                <div className="text-left text-lg [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {project.title}
                </div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-5xl md:h-[88vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0 border-border/70 bg-[#020817]/95 text-foreground shadow-2xl">
          <div className="shrink-0 border-b border-border/70 bg-[#020817]/90 px-5 py-5 backdrop-blur-sm sm:px-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 flex-wrap items-center gap-3 sm:flex-nowrap">
                <ResponsiveDialogTitle className="min-w-0 font-display text-2xl font-black tracking-tight text-foreground sm:truncate md:text-3xl">
                  {project.title}
                </ResponsiveDialogTitle>
                <ResponsiveDialogDescription className="sr-only">
                  {project.title} project details, screenshots, technology stack,
                  and links.
                </ResponsiveDialogDescription>
                <span className="shrink-0 rounded-full border border-border/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <div className="flex w-full shrink-0 items-center justify-start gap-4 sm:w-auto sm:justify-end">
                {project.github && project.github !== "#" && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-sm font-semibold text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                  >
                    Source
                  </Link>
                )}
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <button className="group flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
                      Visit
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="border-b border-border/70 px-5 py-8 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="grid gap-6 md:grid-cols-2"
              >
                <ProjectSkillGroup label="Frontend" items={project.skills.frontend} />
                <ProjectSkillGroup label="Backend" items={project.skills.backend} />
              </motion.div>
            </div>

            <div className="px-5 py-10 sm:px-8 md:px-10 md:py-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="project-detail-content space-y-10"
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>

        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

const ProjectSkillGroup = ({
  label,
  items,
}: {
  label: string;
  items: Project["skills"]["frontend"];
}) => {
  if (!items?.length) return null;

  return (
    <div className="space-y-3">
      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </div>
      <div className="flex min-h-20 flex-wrap items-center gap-3 rounded-3xl bg-black/35 px-5 py-4 ring-1 ring-white/5">
        {items.map((item) => (
          <div
            key={item.title}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary/40 ring-1 ring-white/5 transition-transform hover:-translate-y-1"
            title={item.title}
          >
            <div className="h-6 w-6">{item.icon}</div>
            <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-sm group-hover:block">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
