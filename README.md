# Stéphane KPOVIESSI — Portfolio

Personal portfolio of Stéphane Kpoviessi, founder of Seshat and AI & Data Engineer.
Bilingual (EN/FR), light and dark themes, with a small AI assistant (Lys).

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion.

## Run

```bash
cd modern_portfolio
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Content

All text lives in [`modern_portfolio/src/data/site.ts`](modern_portfolio/src/data/site.ts), each string with an `en` and `fr` version.
The chat assistant builds its context from the same file, so the page and the assistant stay in sync.

Résumés are in `modern_portfolio/public/cv/` (generated from the LaTeX sources kept outside this repo).

## Chat assistant

`/api/chat` tries Groq, then ZhipuAI. Copy `.env.example` to `.env.local` and set at least one key.

## Deploy

Vercel, root directory `modern_portfolio`.
