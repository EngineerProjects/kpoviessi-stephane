import Reveal from "./Reveal";

export default function SectionHead({ index, kicker, title, lead }: { index: string; kicker?: string; title: string; lead?: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-3">
        <span className="text-accent">{index}</span>
        <span className="h-px w-6 bg-line-strong" aria-hidden />
        {kicker && <span>{kicker}</span>}
      </p>
      <h2 className="display mt-4 max-w-3xl text-[clamp(2rem,3.6vw,3.05rem)]">{title}</h2>
      {lead && <p className="mt-4 max-w-2xl text-[16.5px] leading-relaxed text-ink-2">{lead}</p>}
    </Reveal>
  );
}
