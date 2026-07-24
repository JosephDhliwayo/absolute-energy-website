"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], summary';
const RING_EASE = 0.2;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringOuterRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Deferred via setTimeout so this feature-detection setState doesn't run synchronously in the effect body.
    const id = window.setTimeout(() => {
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const active = fine && !reduced;
      setEnabled(active);
      document.documentElement.classList.toggle("custom-cursor-active", active);
    }, 0);
    return () => {
      window.clearTimeout(id);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ringOuter = ringOuterRef.current;
    const ringInner = ringInnerRef.current;
    if (!dot || !ringOuter || !ringInner) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf = 0;

    function loop() {
      ringX += (targetX - ringX) * RING_EASE;
      ringY += (targetY - ringY) * RING_EASE;
      if (ringOuter) ringOuter.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(loop);
    }

    function handleMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        dot.style.opacity = "1";
      }
      if (ringOuter) ringOuter.style.opacity = "1";
    }

    function handleLeaveWindow() {
      if (dot) dot.style.opacity = "0";
      if (ringOuter) ringOuter.style.opacity = "0";
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as Element | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        ringInner?.classList.add("scale-150", "border-ae-orange", "bg-ae-orange/10");
      }
    }

    function handleOut(e: MouseEvent) {
      const target = e.target as Element | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        ringInner?.classList.remove("scale-150", "border-ae-orange", "bg-ae-orange/10");
      }
    }

    function handleDown() {
      ringInner?.classList.add("scale-75");
    }

    function handleUp() {
      ringInner?.classList.remove("scale-75");
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ae-orange opacity-0 transition-opacity duration-200"
      />
      <div
        ref={ringOuterRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] opacity-0 transition-opacity duration-200"
      >
        <div
          ref={ringInnerRef}
          className="h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ae-orange/60 transition-transform duration-200 ease-out"
        />
      </div>
    </>
  );
}
