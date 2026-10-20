"use client";

import { cn } from "@/lib/utils";
import type { Role } from "@/data/site";

function Agent() {
  const nodes = [
    [20, 22],
    [76, 22],
    [20, 74],
    [76, 74],
  ];
  return (
    <>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x},${y} L48,48`} className="art-flow stroke-accent/60" strokeWidth={1.5} />
          <circle cx={x} cy={y} r={7} className="fill-surface stroke-ink/30" strokeWidth={1.5} />
        </g>
      ))}
      <circle cx={48} cy={48} r={17} className="fill-accent/20 art-pulse" />
      <circle cx={48} cy={48} r={11} className="fill-accent" />
    </>
  );
}

// Bronze, silver and gold layers: the medallion architecture.
function Medallion() {
  const layers = [
    { y: 62, c: "#b9793a", l: "B" },
    { y: 40, c: "#aab1bf", l: "S" },
    { y: 18, c: "#e2b440", l: "G" },
  ];
  return (
    <>
      {layers.map((l, i) => (
        <g key={l.l} className="art-bob" style={{ animationDelay: `${i * 0.5}s` }}>
          <rect x={14} y={l.y} width={68} height={16} rx={5} fill={l.c} />
          <text x={48} y={l.y + 11.5} textAnchor="middle" fill="#fff" style={{ font: "700 9px var(--font-mono)" }}>
            {l.l}
          </text>
        </g>
      ))}
    </>
  );
}

function Chart() {
  return (
    <>
      <path d="M14,78 H84" className="stroke-ink/25" strokeWidth={1.5} />
      {[26, 40, 34, 54, 46].map((h, i) => (
        <rect key={i} x={18 + i * 13} y={78 - h} width={8} height={h} rx={2} className="art-grow fill-accent/80" style={{ animationDelay: `${i * 0.1}s` }} />
      ))}
      <path d="M22,48 L35,38 L48,43 L61,26 L74,30" pathLength={1} className="art-draw stroke-leaf" strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Cube() {
  return (
    <g className="art-bob">
      <path d="M48,14 L78,31 L48,48 L18,31 Z" className="fill-accent/25 stroke-accent" strokeWidth={2} strokeLinejoin="round" />
      <path d="M18,31 V65 L48,82 V48" className="fill-accent/10 stroke-accent" strokeWidth={2} strokeLinejoin="round" />
      <path d="M78,31 V65 L48,82" className="fill-accent/5 stroke-accent" strokeWidth={2} strokeLinejoin="round" />
    </g>
  );
}

const arts = { agent: Agent, medallion: Medallion, chart: Chart, cube: Cube } as const;

export default function RoleArt({ name, play, className }: { name: Role["art"]; play: boolean; className?: string }) {
  const Art = arts[name];
  return (
    <div className={cn("art grid shrink-0 place-items-center overflow-hidden rounded-2xl bg-accent-soft", play && "in", className)} aria-hidden>
      <svg viewBox="0 0 96 96" className="h-full w-full" fill="none">
        <Art />
      </svg>
    </div>
  );
}
