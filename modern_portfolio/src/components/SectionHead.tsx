import Reveal from "./Reveal";

export default function SectionHead({ index, kicker, title, lead }: { index: string; kicker?: string; title: string; lead?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        {kicker && <span>{kicker}</span>}
      </p>
      <h2 className="display text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-dim">{lead}</p>}
    </Reveal>
  );
}
