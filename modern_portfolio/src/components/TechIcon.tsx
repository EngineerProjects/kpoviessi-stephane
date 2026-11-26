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
  siRedis,
  siRust,
  siScikitlearn,
  siTensorflow,
  siTypescript,
} from "simple-icons";

const paths: Record<string, string> = {
  go: siGo.path,
  python: siPython.path,
  rust: siRust.path,
  typescript: siTypescript.path,
  "postgresql / pgvector": siPostgresql.path,
  docker: siDocker.path,
  pyspark: siApachespark.path,
  pytorch: siPytorch.path,
  "next.js / react": siReact.path,
  "next.js": siNextdotjs.path,
  react: siReact.path,
  fastapi: siFastapi.path,
  electron: siElectron.path,
  ollama: siOllama.path,
  langchain: siLangchain.path,
  airflow: siApacheairflow.path,
  "azure databricks": siDatabricks.path,
  "hugging face": siHuggingface.path,
  "pydantic ai": siPydantic.path,
  redis: siRedis.path,
  tensorflow: siTensorflow.path,
  "scikit-learn": siScikitlearn.path,
};

export default function TechIcon({ name, size = 11 }: { name: string; size?: number }) {
  const path = paths[name.toLowerCase()];
  if (!path) return null;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden className="shrink-0 opacity-75">
      <path d={path} />
    </svg>
  );
}
