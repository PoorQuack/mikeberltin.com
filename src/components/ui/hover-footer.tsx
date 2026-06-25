"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

// ViewBox is wide & tall — preserveAspectRatio="none" makes the SVG
// stretch to fill whatever container it sits in at any screen size.
const VW = 1600;
const VH = 320;
const PADDING = 40; // px each side in viewBox units
const TEXT_W = VW - PADDING * 2;

const textStyle: React.CSSProperties = {
  fontFamily: "helvetica, Arial, sans-serif",
  fontSize: 220,
  fontWeight: 900,
};

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [charBounds, setCharBounds] = useState<{ x: number; w: number }[]>([]);
  const controls = useAnimation();
  const chars = Array.from(text);

  // Measure per-character widths from the textLength-stretched measurement element
  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const bounds: { x: number; w: number }[] = [];
    let cursor = 0;
    for (let i = 0; i < chars.length; i++) {
      const w = el.getSubStringLength(i, 1);
      bounds.push({ x: PADDING + cursor, w });
      cursor += w;
    }
    setCharBounds(bounds);
  }, [text]);

  // Replay draw-on animation on scroll into view
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.set({ strokeDashoffset: 4000, strokeDasharray: 4000 });
          controls.start({
            strokeDashoffset: 0,
            strokeDasharray: 4000,
            transition: { duration: 4, ease: "easeInOut" },
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (charBounds.length === 0) return;
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    // Map cursor to viewBox X accounting for textLength stretch
    const svgX = ((e.clientX - rect.left) / rect.width) * VW;
    const idx = charBounds.findIndex((b) => svgX >= b.x && svgX <= b.x + b.w);
    setHoveredIndex(idx === -1 ? null : idx);
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn("select-none cursor-pointer", className)}
    >
      <defs>
        <linearGradient id="charGold" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={VH}>
          <stop offset="0%" stopColor="#e2c07d" />
          <stop offset="100%" stopColor="#c8a95a" />
        </linearGradient>
      </defs>

      {/* Off-screen measurement element — same textLength as visible text */}
      <text
        ref={measureRef}
        x={PADDING}
        y="-9999"
        textLength={TEXT_W}
        lengthAdjust="spacingAndGlyphs"
        style={textStyle}
        aria-hidden="true"
      >
        {text}
      </text>

      {/* White draw-on stroke — stretched to fill width with padding */}
      <motion.text
        x={PADDING}
        y="50%"
        dominantBaseline="middle"
        fill="transparent"
        stroke="white"
        strokeWidth="4"
        textLength={TEXT_W}
        lengthAdjust="spacingAndGlyphs"
        style={textStyle}
        initial={{ strokeDashoffset: 4000, strokeDasharray: 4000 }}
        animate={controls}
      >
        {text}
      </motion.text>

      {/* Per-character gold fill — fades in on hover */}
      {charBounds.length > 0 &&
        chars.map((char, i) => (
          <text
            key={i}
            x={charBounds[i].x}
            y="50%"
            dominantBaseline="middle"
            fill="url(#charGold)"
            stroke="none"
            textLength={charBounds[i].w}
            lengthAdjust="spacingAndGlyphs"
            style={{
              ...textStyle,
              opacity: hoveredIndex === i ? 1 : 0,
              transition: hoveredIndex === i ? "opacity 0.05s ease" : "opacity 0.3s ease",
            }}
          >
            {char}
          </text>
        ))}
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
