"use client";

import { motion } from "framer-motion";
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

export default function TechCloud() {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {chips.map((c) => (
        <li key={c.label}>
          <motion.span
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            onDragStart={() => unlock("juggle")}
            whileHover={{ y: -1 }}
            whileDrag={{ scale: 1.06, zIndex: 20 }}
            className="flex cursor-grab touch-none select-none items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 font-mono text-[11.5px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink active:cursor-grabbing"
          >
            {c.path && (
              <svg viewBox="0 0 24 24" width={11} height={11} fill="currentColor" className="text-accent" aria-hidden>
                <path d={c.path} />
              </svg>
            )}
            {c.label}
          </motion.span>
        </li>
      ))}
    </ul>
  );
}
