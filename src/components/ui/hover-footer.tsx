"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);
  const [maskCX, setMaskCX] = useState("50%");
  const [maskCY, setMaskCY] = useState("50%");
  const controls = useAnimation();

  // Replay draw-on animation every time the text scrolls into view
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.set({ strokeDashoffset: 1000, strokeDasharray: 1000 });
          controls.start({
            strokeDashoffset: 0,
            strokeDasharray: 1000,
            transition: { duration: 4, ease: "easeInOut" },
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls]);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    setMaskCX(`${((e.clientX - rect.left) / rect.width) * 100}%`);
    setMaskCY(`${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setMaskCX("50%");
    setMaskCY("50%");
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" x1="0" y1="50" x2="400" y2="50">
          <stop offset="0%" stopColor="#FFE566" stopOpacity={hovered ? 1 : 0} />
          <stop offset="50%" stopColor="#F0A800" stopOpacity={hovered ? 1 : 0} />
          <stop offset="100%" stopColor="#C87000" stopOpacity={hovered ? 1 : 0} />
        </linearGradient>

        <radialGradient id="revealMask" gradientUnits="objectBoundingBox" cx={maskCX} cy={maskCY} r="25%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Faint outline on hover */}
      <text
        x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-6xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.5 : 0 }}
      >
        {text}
      </text>

      {/* White draw-on stroke — replays on scroll-into-view */}
      <motion.text
        x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.6"
        className="fill-transparent stroke-white font-[helvetica] text-6xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={controls}
      >
        {text}
      </motion.text>

      {/* Gold hover layer — stroke only, revealed through cursor mask */}
      <text
        x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
        stroke="url(#textGradient)" strokeWidth="1.2"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-6xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export function FooterBackgroundGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, #C8A95A33 0%, transparent 70%)",
      }}
    />
  );
}
