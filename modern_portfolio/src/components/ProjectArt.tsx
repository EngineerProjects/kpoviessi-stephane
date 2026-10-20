"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/*
 * Illustrations drawn in code: one per project, themed through CSS tokens so they follow light/dark.
 * Animations start when the card scrolls into view (see .art in globals.css).
 */

const S = "stroke-ink/25";

function Doc({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={8} className={cn("fill-surface", S)} strokeWidth={1.5} />;
}

function TechWatch() {
  const src = [
    [46, 34],
    [274, 34],
    [46, 126],
    [274, 126],
  ];
  return (
    <>
      {src.map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x},${y} L160,80`} className="art-flow stroke-accent/50" strokeWidth={1.5} fill="none" />
          <circle r={3.5} className="fill-accent">
            <animateMotion dur="2.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={`M${x},${y} L160,80`} />
          </circle>
          <rect x={x - 24} y={y - 14} width={48} height={28} rx={7} className={cn("fill-surface", S)} strokeWidth={1.5} />
          <rect x={x - 14} y={y - 6} width={28} height={3.5} rx={1.7} className="fill-ink/30" />
          <rect x={x - 14} y={y + 2} width={18} height={3.5} rx={1.7} className="fill-ink/20" />
        </g>
      ))}
      <circle cx={160} cy={80} r={34} className="fill-accent/15 art-pulse" />
      <circle cx={160} cy={80} r={24} className="fill-accent" />
      <path d="M150,80 l7,7 l13,-15" className="stroke-accent-ink" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  );
}

function Terminal() {
  const lines = [
    [40, 54, 70],
    [40, 68, 100],
    [52, 82, 64],
    [52, 96, 82],
    [40, 110, 56],
  ];
  return (
    <>
      <Doc x={20} y={22} w={170} h={118} />
      <path d="M20,40 H190" className={S} strokeWidth={1.2} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={34 + i * 12} cy={31} r={2.8} className={i === 0 ? "fill-accent" : "fill-ink/25"} />
      ))}
      <text x={34} y={52} className="fill-leaf" style={{ font: "500 9px var(--font-mono)" }}>$ localingest .</text>
      {lines.map(([x, y, w], i) => (
        <rect key={i} x={x} y={y + 6} width={w} height={4.5} rx={2.2} className="art-type fill-ink/30" style={{ animationDelay: `${0.5 + i * 0.35}s` }} />
      ))}
      <path d="M200,82 H224" className="art-flow stroke-accent" strokeWidth={2} fill="none" />
      <path d="M220,76 l7,6 l-7,6" className="stroke-accent" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Doc x={234} y={34} w={68} h={92} />
      <text x={268} y={60} textAnchor="middle" className="fill-accent" style={{ font: "700 14px var(--font-mono)" }}>.md</text>
      {[76, 88, 100, 112].map((y, i) => (
        <rect key={y} x={246} y={y} width={i % 2 ? 30 : 44} height={4} rx={2} className="fill-ink/25" />
      ))}
    </>
  );
}

function Football() {
  const trail = "M70,112 C110,60 160,120 214,58";
  return (
    <>
      <rect x={20} y={18} width={280} height={124} rx={6} className={S} strokeWidth={1.5} fill="none" />
      <path d="M160,18 V142" className={S} strokeWidth={1.2} />
      <circle cx={160} cy={80} r={20} className={S} strokeWidth={1.2} fill="none" />
      <rect x={20} y={54} width={34} height={52} className={S} strokeWidth={1.2} fill="none" />
      <rect x={266} y={54} width={34} height={52} className={S} strokeWidth={1.2} fill="none" />
      {[
        [90, 56],
        [120, 100],
        [150, 66],
        [206, 92],
      ].map(([x, y], i) => (
        <circle key={`a${i}`} cx={x} cy={y} r={5} className="fill-accent" />
      ))}
      {[
        [186, 50],
        [232, 70],
        [250, 112],
        [130, 124],
      ].map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r={5} className="fill-leaf" />
      ))}
      {/* Detection box on one player */}
      <g className="art-pulse" style={{ transformOrigin: "150px 66px" }}>
        <path d="M138,54 h6 M138,54 v6 M162,54 h-6 M162,54 v6 M138,78 h6 M138,78 v-6 M162,78 h-6 M162,78 v-6" className="stroke-ink" strokeWidth={1.6} fill="none" strokeLinecap="round" />
      </g>
      <rect x={140} y={40} width={32} height={11} rx={3} className="fill-ink" />
      <text x={156} y={48.5} textAnchor="middle" className="fill-bg" style={{ font: "600 7px var(--font-mono)" }}>ID 7</text>
      <path d={trail} className="art-flow stroke-ink/40" strokeWidth={1.2} fill="none" />
      <circle r={4} className="fill-ink">
        <animateMotion dur="3.2s" repeatCount="indefinite" path={trail} />
      </circle>
    </>
  );
}

function Retail() {
  const bars = [34, 52, 44, 70, 62, 88];
  return (
    <>
      <ellipse cx={52} cy={52} rx={24} ry={9} className="fill-surface stroke-ink/25" strokeWidth={1.5} />
      <path d="M28,52 V98 a24,9 0 0 0 48,0 V52" className="fill-surface stroke-ink/25" strokeWidth={1.5} />
      <path d="M28,75 a24,9 0 0 0 48,0" className="stroke-ink/25" strokeWidth={1.2} fill="none" />
      <path d="M86,76 H116" className="art-flow stroke-accent" strokeWidth={2} fill="none" />
      <path d="M112,70 l7,6 l-7,6" className="stroke-accent" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M132,134 H304" className={S} strokeWidth={1.5} />
      {bars.map((h, i) => (
        <rect key={i} x={140 + i * 28} y={134 - h} width={16} height={h} rx={3} className="art-grow fill-accent/80" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
      <path d="M148,92 L176,76 L204,86 L232,56 L260,66 L288,36" pathLength={1} className="art-draw stroke-leaf" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Cube3D() {
  return (
    <>
      <Doc x={26} y={42} w={86} h={76} />
      <circle cx={52} cy={66} r={7} className="fill-sun" />
      <path d="M26,112 L58,84 L78,102 L92,90 L112,110 V112 a8,8 0 0 1 -8,8 H34 a8,8 0 0 1 -8,-8 Z" className="fill-leaf/60" />
      <path d="M122,80 H148" className="art-flow stroke-accent" strokeWidth={2} fill="none" />
      <path d="M144,74 l7,6 l-7,6" className="stroke-accent" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g className="art-bob">
        <path d="M232,38 L268,58 L232,78 L196,58 Z" className="fill-accent/25 stroke-accent" strokeWidth={2} strokeLinejoin="round" />
        <path d="M196,58 V100 L232,120 V78" className="fill-accent/10 stroke-accent" strokeWidth={2} strokeLinejoin="round" />
        <path d="M268,58 V100 L232,120" className="fill-accent/5 stroke-accent" strokeWidth={2} strokeLinejoin="round" />
        <path d="M196,100 L232,80 L268,100" className="stroke-accent/50" strokeWidth={1.2} strokeDasharray="3 4" fill="none" />
        <path d="M232,80 V120" className="stroke-accent/50" strokeWidth={1.2} strokeDasharray="3 4" />
      </g>
    </>
  );
}

function Robot() {
  const path = "M40,124 V84 H112 V44 H196 V100 H272";
  return (
    <>
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={`v${i}`} d={`M${40 + i * 29},20 V140`} className="stroke-ink/10" strokeWidth={1} />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <path key={`h${i}`} d={`M24,${28 + i * 28} H296`} className="stroke-ink/10" strokeWidth={1} />
      ))}
      <rect x={126} y={84} width={26} height={26} rx={4} className="fill-ink/20" />
      <rect x={210} y={44} width={26} height={26} rx={4} className="fill-ink/20" />
      <path d={path} className="art-flow stroke-accent" strokeWidth={2.5} fill="none" strokeLinejoin="round" />
      {[
        [112, 84],
        [196, 44],
        [272, 100],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={9} className="fill-accent/20 art-pulse" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.4}s` }} />
          <path d={`M${x - 4},${y + 3} L${x},${y - 5} L${x + 4},${y + 3} Z`} className="fill-accent" />
        </g>
      ))}
      <rect x={30} y={114} width={20} height={20} rx={5} className="fill-leaf">
        <animateMotion dur="5s" repeatCount="indefinite" path="M0,0 V-40 H72 V-80 H156 V-24 H232" />
      </rect>
    </>
  );
}

function Solar() {
  const curve = "M30,128 C80,128 100,34 160,34 C220,34 240,128 290,128";
  return (
    <>
      <path d="M24,128 H302" className={S} strokeWidth={1.5} />
      <g className="art-spin" style={{ transformOrigin: "64px 52px" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i} d="M64,24 V32" className="stroke-sun" strokeWidth={3} strokeLinecap="round" transform={`rotate(${i * 45} 64 52)`} />
        ))}
      </g>
      <circle cx={64} cy={52} r={13} className="fill-sun" />
      <path d={curve} pathLength={1} className="art-draw stroke-accent" strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d="M30,128 C85,128 112,44 170,44 C226,44 244,128 290,128" className="art-flow stroke-leaf" strokeWidth={2} fill="none" />
      <circle r={4.5} className="fill-accent">
        <animateMotion dur="4s" repeatCount="indefinite" path={curve} />
      </circle>
      <text x={228} y={30} className="fill-dim" style={{ font: "500 8px var(--font-mono)" }}>forecast</text>
      <path d="M200,27 H222" className="stroke-leaf" strokeWidth={2} strokeDasharray="4 3" />
    </>
  );
}

function Skills() {
  return (
    <>
      <Doc x={34} y={20} w={252} h={122} />
      <path d="M34,42 H286" className={S} strokeWidth={1.2} />
      <rect x={46} y={26} width={140} height={10} rx={5} className="fill-ink/10" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(52 ${58 + i * 26})`}>
          <rect width={16} height={16} rx={4} className="fill-surface stroke-ink/30" strokeWidth={1.5} />
          <path d="M3.5,8.5 l3,3 l6,-7" className="art-check stroke-leaf" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ animationDelay: `${0.6 + i * 0.7}s` }} />
          <rect x={28} y={4} width={[130, 100, 150][i]} height={7} rx={3.5} className="fill-ink/20" />
        </g>
      ))}
      <g className="art-bob">
        <rect x={214} y={116} width={62} height={20} rx={10} className="fill-accent" />
        <text x={245} y={129.5} textAnchor="middle" className="fill-accent-ink" style={{ font: "600 8px var(--font-mono)" }}>approve?</text>
      </g>
    </>
  );
}

const arts = { watch: TechWatch, terminal: Terminal, football: Football, retail: Retail, cube: Cube3D, robot: Robot, solar: Solar, skills: Skills } as const;
export type ArtName = keyof typeof arts;

export default function ProjectArt({ name, className }: { name: ArtName; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-40px" });
  const Art = arts[name];
  return (
    <div ref={ref} className={cn("art relative overflow-hidden bg-accent-soft", seen && "in", className)} aria-hidden>
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:16px_16px]" />
      <svg viewBox="0 0 320 160" className="relative h-full w-full" preserveAspectRatio="xMidYMid meet" fill="none">
        <Art />
      </svg>
    </div>
  );
}
