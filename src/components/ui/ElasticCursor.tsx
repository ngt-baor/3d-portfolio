/**
 * Disclaimer: This component is not entirely my own
 */

"use client";

import { usePathname } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { usePreloader } from "../preloader";
import { useMediaQuery } from "@/hooks/use-media-query";

type MutablePoint = {
  x: number;
  y: number;
};

type HoverState = {
  rect: DOMRect;
} | null;

type QuickSetter = Function;

type Setters = {
  x?: QuickSetter;
  y?: QuickSetter;
  rotate?: QuickSetter;
  width?: QuickSetter;
  height?: QuickSetter;
  scaleX?: QuickSetter;
  scaleY?: QuickSetter;
  radius?: QuickSetter;
  opacity?: QuickSetter;
  dotX?: QuickSetter;
  dotY?: QuickSetter;
  dotOpacity?: QuickSetter;
};

function useTicker(callback: gsap.TickerCallback, paused: boolean) {
  useEffect(() => {
    if (!paused) {
      gsap.ticker.add(callback);
    }

    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

function useInstance<T>(factory: () => T) {
  const ref = useRef<T | null>(null);

  if (ref.current === null) {
    ref.current = factory();
  }

  return ref.current;
}

function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function getHoverTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest<HTMLElement>(".cursor-can-hover");
}

const CURSOR_DIAMETER = 50;

function ElasticCursor() {
  const pathname = usePathname();
  const { loadingPercent, isLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isBlogPost = pathname.startsWith("/blogs/") && pathname !== "/blogs";

  const jellyRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorMoved, setCursorMoved] = useState(false);

  const pointer = useInstance<MutablePoint>(() => ({ x: 0, y: 0 }));
  const pos = useInstance<MutablePoint>(() => ({ x: 0, y: 0 }));
  const vel = useInstance<MutablePoint>(() => ({ x: 0, y: 0 }));
  const hover = useInstance<{ current: HoverState }>(() => ({ current: null }));
  const hidden = useInstance<{ current: boolean }>(() => ({ current: false }));
  const setters = useInstance<Setters>(() => ({}));

  useLayoutEffect(() => {
    if (!jellyRef.current || !dotRef.current) return;

    setters.x = gsap.quickSetter(jellyRef.current, "x", "px");
    setters.y = gsap.quickSetter(jellyRef.current, "y", "px");
    setters.rotate = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    setters.width = gsap.quickSetter(jellyRef.current, "width", "px");
    setters.height = gsap.quickSetter(jellyRef.current, "height", "px");
    setters.scaleX = gsap.quickSetter(jellyRef.current, "scaleX");
    setters.scaleY = gsap.quickSetter(jellyRef.current, "scaleY");
    setters.radius = gsap.quickSetter(jellyRef.current, "borderRadius", "px");
    setters.opacity = gsap.quickSetter(jellyRef.current, "opacity");
    setters.dotX = gsap.quickSetter(dotRef.current, "x", "px");
    setters.dotY = gsap.quickSetter(dotRef.current, "y", "px");
    setters.dotOpacity = gsap.quickSetter(dotRef.current, "opacity");
  }, [setters]);

  const render = useCallback(() => {
    if (
      !setters.x ||
      !setters.y ||
      !setters.rotate ||
      !setters.width ||
      !setters.height ||
      !setters.scaleX ||
      !setters.scaleY ||
      !setters.radius ||
      !setters.opacity ||
      !setters.dotX ||
      !setters.dotY ||
      !setters.dotOpacity
    ) {
      return;
    }

    setters.dotX(pointer.x);
    setters.dotY(pointer.y);

    if (hidden.current) {
      setters.opacity(0);
      setters.dotOpacity(0);
      return;
    }

    setters.opacity(1);
    setters.dotOpacity(1);

    if (hover.current) {
      const rect = hover.current.rect;
      setters.x(rect.left + rect.width / 2);
      setters.y(rect.top + rect.height / 2);
      setters.width(rect.width + 20);
      setters.height(rect.height + 20);
      setters.rotate(0);
      setters.scaleX(1);
      setters.scaleY(1);
      setters.radius(10);
      return;
    }

    const rotation = getAngle(vel.x, vel.y);
    const scale = getScale(vel.x, vel.y);

    setters.x(pos.x);
    setters.y(pos.y);
    setters.width(CURSOR_DIAMETER + scale * 300);
    setters.height(CURSOR_DIAMETER);
    setters.rotate(rotation);
    setters.scaleX(1 + scale);
    setters.scaleY(1 - scale * 2);
    setters.radius(CURSOR_DIAMETER / 2);
  }, [hidden, hover, pointer, pos, setters, vel]);

  useLayoutEffect(() => {
    if (isMobile || isBlogPost) return;

    const updateHoverTarget = (target: EventTarget | null) => {
      const hoverTarget = getHoverTarget(target);
      hover.current = hoverTarget
        ? { rect: hoverTarget.getBoundingClientRect() }
        : null;
    };

    const onMove = (event: MouseEvent) => {
      if (!cursorMoved) {
        setCursorMoved(true);
      }

      pointer.x = event.clientX;
      pointer.y = event.clientY;
      updateHoverTarget(event.target);

      const target = event.target instanceof Element ? event.target : null;
      hidden.current = !!target?.closest('[data-no-custom-cursor="true"]');
      document.body.style.cursor = hidden.current ? "auto" : "";

      gsap.to(pos, {
        x: event.clientX,
        y: event.clientY,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        onUpdate: () => {
          vel.x = (event.clientX - pos.x) * 1.2;
          vel.y = (event.clientY - pos.y) * 1.2;
        },
      });

      render();
    };

    const onOver = (event: MouseEvent) => {
      updateHoverTarget(event.target);
    };

    const onLeave = () => {
      hover.current = null;
      hidden.current = true;
      render();
    };

    const onEnter = () => {
      hidden.current = false;
    };

    const onScroll = () => {
      hover.current = null;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("scroll", onScroll);
      document.body.style.cursor = "";
    };
  }, [cursorMoved, hidden, hover, isBlogPost, isMobile, pointer, pos, render, vel]);

  useEffect(() => {
    if (!jellyRef.current || !isLoading) return;

    gsap.set(jellyRef.current, {
      height: "2rem",
      borderRadius: "1rem",
      width: `${loadingPercent * 2}vw`,
    });
  }, [isLoading, loadingPercent]);

  useTicker(render, isLoading || !cursorMoved || isMobile || isBlogPost);

  if (isMobile || isBlogPost) return null;

  return (
    <>
      <div
        ref={jellyRef}
        id="jelly-id"
        className={cn(
          "jelly-blob fixed left-0 top-0 z-[999] pointer-events-none will-change-transform",
          "translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-black dark:border-white"
        )}
        style={{
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          zIndex: 100,
          backdropFilter: "invert(100%)",
        }}
      />
      <div
        ref={dotRef}
        className="fixed h-3 w-3 translate-x-[-50%] translate-y-[-50%] rounded-full pointer-events-none transition-none duration-300"
        style={{
          backdropFilter: "invert(100%)",
          zIndex: 101,
        }}
      />
    </>
  );
}

export default ElasticCursor;
