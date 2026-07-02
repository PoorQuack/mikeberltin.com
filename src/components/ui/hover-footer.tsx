"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring } from "motion/react";
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
  const measureRef = useRef<SVGTextElement>(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [textWidth, setTextWidth] = useState(300);
  const [drawKey, setDrawKey] = useState(0);

  const targetCx = useMotionValue(150);
  const targetCy = useMotionValue(50);
  const cx = useSpring(targetCx, { stiffness: 300, damping: 30 });
  const cy = useSpring(targetCy, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const measure = () => {
      if (measureRef.current) {
        const width = measureRef.current.getComputedTextLength();
        if (width > 0) setTextWidth(width);
      }
    };

    measure();

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure);
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  useEffect(() => {
    if (!svgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawKey((k) => k + 1);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      setHovered(inside);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const viewBoxX = svg.viewBox.baseVal.x;
    const cursorX = cursorRef.current.x;
    const cursorY = cursorRef.current.y;
    const cursorXPercent = ((cursorX - rect.left) / rect.width) * 100;
    const cursorYPercent = ((cursorY - rect.top) / rect.height) * 100;
    // Convert cursor position to absolute viewBox units and compensate for scroll
    const cxViewBox = (cursorXPercent / 100) * 300 + viewBoxX;
    const cyViewBox = cursorYPercent;
    targetCx.set(cxViewBox);
    targetCy.set(cyViewBox);
  });

  return (
    <motion.svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none uppercase pointer-events-none", className)}
      animate={{
        viewBox: [`0 0 300 100`, `${textWidth} 0 300 100`],
      }}
      transition={{
        duration: textWidth / 15,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#80eeb4" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r={60}
          cx={cx}
          cy={cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask
          id="textMask"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={textWidth * 2}
          height="100"
        >
          <rect
            x="0"
            y="0"
            width={textWidth * 2}
            height="100"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Hidden measurement text to get actual rendered width */}
      <text
        ref={measureRef}
        x="0"
        y="-9999"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        aria-hidden="true"
      >
        {text}
      </text>

      <g>
        {[0, textWidth].map((offset) => (
          <React.Fragment key={offset}>
            <text
              x={offset}
              y="50%"
              textAnchor="start"
              dominantBaseline="middle"
              strokeWidth="0.3"
              className="fill-transparent stroke-[#0F0F11] font-[helvetica] text-7xl font-bold"
            >
              {text}
            </text>
            <motion.text
              key={drawKey}
              x={offset}
              y="50%"
              textAnchor="start"
              dominantBaseline="middle"
              strokeWidth="0.3"
              className="fill-transparent stroke-[#0F0F11] font-[helvetica] text-7xl font-bold"
              initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
              animate={{
                strokeDashoffset: 0,
                strokeDasharray: 1000,
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
            >
              {text}
            </motion.text>
            <motion.text
              x={offset}
              y="50%"
              textAnchor="start"
              dominantBaseline="middle"
              stroke="url(#textGradient)"
              strokeWidth="0.3"
              mask="url(#textMask)"
              className="fill-transparent font-[helvetica] text-7xl font-bold"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {text}
            </motion.text>
          </React.Fragment>
        ))}
      </g>
    </motion.svg>
  );
};


export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #3ca2fa33 100%)",
      }}
    />
  );
};
