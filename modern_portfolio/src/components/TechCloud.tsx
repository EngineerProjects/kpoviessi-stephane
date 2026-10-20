"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  siApacheairflow,
  siApachespark,
  siDatabricks,
  siDocker,
  siElectron,
  siFastapi,
  siGo,
  siHuggingface,
  siLangchain,
  siNextdotjs,
  siOllama,
  siPostgresql,
  siPydantic,
  siPython,
  siPytorch,
  siReact,
  siTypescript,
} from "simple-icons";
import { unlock } from "@/lib/game";

type Chip = { label: string; path?: string };

const chips: Chip[] = [
  { label: "Go", path: siGo.path },
  { label: "Python", path: siPython.path },
  { label: "LangGraph" },
  { label: "TypeScript", path: siTypescript.path },
  { label: "MCP" },
  { label: "PostgreSQL", path: siPostgresql.path },
  { label: "LangChain", path: siLangchain.path },
  { label: "RAG" },
  { label: "PySpark", path: siApachespark.path },
  { label: "Docker", path: siDocker.path },
  { label: "pgvector" },
  { label: "PyTorch", path: siPytorch.path },
  { label: "Databricks", path: siDatabricks.path },
  { label: "React", path: siReact.path },
  { label: "FastAPI", path: siFastapi.path },
  { label: "Pydantic AI", path: siPydantic.path },
  { label: "Electron", path: siElectron.path },
  { label: "Ollama", path: siOllama.path },
  { label: "Airflow", path: siApacheairflow.path },
  { label: "Next.js", path: siNextdotjs.path },
  { label: "Hugging Face", path: siHuggingface.path },
  { label: "Azure" },
];

// Deterministic "mess": same on server and client, so no hydration mismatch.
// Integer hash (no floating-point transcendental functions), so Node and the browser agree to the last digit.
const jitter = (i: number, k: number) => (Math.imul((i + 1) * 7919 + k * 104729, 2654435761) >>> 8) % 1000 / 1000;

export default function TechCloud() {
  const reduce = useReducedMotion();
  return (
    <ul className="flex max-w-[44rem] flex-wrap gap-x-2.5 gap-y-3" aria-label="Technologies">
      {chips.map((c, i) => {
        const rot = Math.round((jitter(i, 1) - 0.5) * 100) / 10;
        const dx = Math.round(5 + jitter(i, 2) * 9);
        const dy = Math.round(4 + jitter(i, 3) * 8);
        const dur = Math.round(6 + jitter(i, 4) * 6);
        return (
          <li key={c.label}>
            <motion.div
              initial={{ rotate: rot, y: Math.round((jitter(i, 5) - 0.5) * 10) }}
              animate={
                reduce
                  ? undefined
                  : {
                      x: [0, dx, -Math.round(dx * 0.6), 0],
                      y: [0, -dy, Math.round(dy * 0.7), 0],
                      rotate: [rot, rot + 4, rot - 3, rot],
                    }
              }
              transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: -Math.round(jitter(i, 6) * dur) }}
            >
              <motion.span
                drag
                dragSnapToOrigin
                dragElastic={0.6}
                onDragStart={() => unlock("juggle")}
                whileHover={{ scale: 1.12, rotate: 0 }}
                whileDrag={{ scale: 1.18, zIndex: 20 }}
                className="flex cursor-grab touch-none select-none items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-ink shadow-sm transition-colors hover:border-accent active:cursor-grabbing"
              >
                {c.path && (
                  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className="text-accent" aria-hidden>
                    <path d={c.path} />
                  </svg>
                )}
                {c.label}
              </motion.span>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
