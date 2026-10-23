"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useLang } from "@/lib/i18n";

export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { lang } = useLang();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {(reduce ? to : inView ? v : 0).toLocaleString(lang === "fr" ? "fr-FR" : "en-US")}
      {suffix}
    </span>
  );
}
