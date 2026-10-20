"use client";

import { footer, person } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-dim md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {person.name}</p>
        <p>{t(footer.built)}</p>
      </div>
    </footer>
  );
}
