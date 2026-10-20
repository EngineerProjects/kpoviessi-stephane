"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function Typewriter({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  const word = words[i % words.length] ?? "";

  useEffect(() => {
    if (reduce) return;
    const done = n === word.length;
    const id = setTimeout(
      () => {
        if (!del && done) setDel(true);
        else if (del && n === 0) {
          setDel(false);
          setI((x) => x + 1);
        } else setN((x) => x + (del ? -1 : 1));
      },
      !del && done ? 1700 : del ? 22 : 45,
    );
    return () => clearTimeout(id);
  }, [n, del, word, reduce]);

  return (
    <span>
      {reduce ? word : word.slice(0, n)}
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.2em] animate-pulse bg-accent" aria-hidden />
    </span>
  );
}
