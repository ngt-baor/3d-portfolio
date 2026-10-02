"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Download } from "lucide-react";

const RESUME_PATH = "/BaoCV.pdf";
const RESUME_PAGES = ["/assets/resume/bao-cv-page-1.png"];

const PDF_PAGE_WIDTH = 595;
const PDF_PAGE_HEIGHT = 842;

type ResumeLink = {
  page: number;
  label: string;
  href: string;
  rect: [number, number, number, number];
};

const RESUME_LINKS: ResumeLink[] = [
  {
    page: 0,
    label: "Phone 0349554353",
    href: "tel:+84349554353",
    rect: [80.8316, 756.249, 130.4661, 765.7406],
  },
  {
    page: 0,
    label: "baontph51745@gmail.com",
    href: "mailto:baontph51745@gmail.com",
    rect: [80.8316, 744.7234, 184.4041, 754.215],
  },
  {
    page: 0,
    label: "github.com/ngt-baor",
    href: "https://github.com/ngt-baor",
    rect: [80.8316, 721.6722, 159.8725, 731.1639],
  },
  {
    page: 0,
    label: "thebao.vercel.app",
    href: "https://thebao.vercel.app/",
    rect: [80.8316, 710.1467, 150.7904, 719.6383],
  },
  {
    page: 0,
    label: "github.com/ngt-baor/EzBook",
    href: "https://github.com/ngt-baor/EzBook",
    rect: [223.983, 474.0081, 324.5597, 482.9235],
  },
  {
    page: 0,
    label: "ezbook-dz8b.onrender.com",
    href: "https://ezbook-dz8b.onrender.com",
    rect: [358.7152, 474.0081, 455.3963, 482.9235],
  },
  {
    page: 0,
    label: "github.com/ngt-baor/Certain-Shop",
    href: "https://github.com/ngt-baor/Certain-Shop",
    rect: [224.7483, 337.43, 345.1618, 346.3453],
  },
];
function getLinkPosition([x1, y1, x2, y2]: ResumeLink["rect"]) {
  return {
    left: `${(x1 / PDF_PAGE_WIDTH) * 100}%`,
    top: `${((PDF_PAGE_HEIGHT - y2) / PDF_PAGE_HEIGHT) * 100}%`,
    width: `${((x2 - x1) / PDF_PAGE_WIDTH) * 100}%`,
    height: `${((y2 - y1) / PDF_PAGE_HEIGHT) * 100}%`,
  };
}

export default function ResumeView() {
  return (
    <main className="min-h-screen font-sans">
      <div className="mx-auto w-full max-w-5xl px-4 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <a
            href={RESUME_PATH}
            download="Nguyen-The-Bao-CV-EN.pdf"
            type="application/pdf"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto flex w-full max-w-[794px] flex-col gap-8 pb-24"
        >
          {RESUME_PAGES.map((src, index) => (
            <figure
              key={src}
              className="relative overflow-hidden rounded-sm bg-white shadow-2xl ring-1 ring-black/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Nguyen The Bao resume page ${index + 1}`}
                className="block h-auto w-full"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {RESUME_LINKS.filter((link) => link.page === index).map(
                (link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    style={getLinkPosition(link.rect)}
                    className="absolute z-10 block cursor-pointer rounded-sm outline-none transition-colors hover:bg-sky-400/10 focus-visible:bg-sky-400/15 focus-visible:ring-2 focus-visible:ring-sky-500"
                  />
                ),
              )}
            </figure>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
