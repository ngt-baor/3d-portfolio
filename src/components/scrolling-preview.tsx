"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const PAN_SPEED = 70;
const PAUSE_SECONDS = 1.2;
const MIN_SCROLL_OVERFLOW = 0.2;

type ScrollingPreviewProps = {
  src: string;
  alt: string;
};

export default function ScrollingPreview({
  src,
  alt,
}: ScrollingPreviewProps) {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scrollPx, setScrollPx] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const image = new window.Image();

    const measure = () => {
      const viewport = viewportRef.current;
      if (cancelled || !viewport || !image.naturalWidth) return;

      const imageRatio = image.naturalHeight / image.naturalWidth;
      const displayedHeight = viewport.clientWidth * imageRatio;
      const overflow = displayedHeight - viewport.clientHeight;

      setScrollPx(
        overflow > viewport.clientHeight * MIN_SCROLL_OVERFLOW ? overflow : 0
      );
    };

    image.onload = measure;
    image.src = src;
    if (image.complete) measure();

    window.addEventListener("resize", measure);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", measure);
    };
  }, [src]);

  const scrolls = scrollPx > 0;
  const shouldAnimate = !reduceMotion && scrolls;
  const panDuration = scrollPx / PAN_SPEED;
  const totalDuration = panDuration * 2 + PAUSE_SECONDS * 2;
  const times = [
    0,
    panDuration / totalDuration,
    (panDuration + PAUSE_SECONDS) / totalDuration,
    (panDuration * 2 + PAUSE_SECONDS) / totalDuration,
    1,
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 bg-muted"
      role="img"
      aria-label={alt}
    >
      <div
        ref={viewportRef}
        className="project-preview-shot absolute inset-x-[18px] bottom-0 top-[18px] overflow-hidden rounded-t-md border border-white/15 bg-background shadow-2xl"
      >
        <motion.div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url("${src}")`,
            backgroundPosition: scrolls ? "50% 0%" : "center",
            backgroundSize: scrolls ? "100% auto" : "cover",
          }}
          animate={
            shouldAnimate
              ? {
                  backgroundPosition: [
                    "50% 0%",
                    "50% 100%",
                    "50% 100%",
                    "50% 0%",
                    "50% 0%",
                  ],
                }
              : undefined
          }
          transition={
            shouldAnimate
              ? {
                  duration: totalDuration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  times,
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}
