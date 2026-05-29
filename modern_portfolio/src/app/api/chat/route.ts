import { NextRequest, NextResponse } from "next/server";
import * as EN from "@/data/content";
import * as FR from "@/data/content.fr";

type Language = "en" | "fr";
type PortfolioContent = typeof EN;
type ChatMessage = { role: "user" | "assistant" | "system"; content: string };
type ChatRequestBody = { messages?: ChatMessage[]; language?: Language };

function getContent(language: Language): PortfolioContent {
  return language === "fr" ? FR : EN;
}

function buildPortfolioContext(content: PortfolioContent): string {
  const { about, education, experiences, personalInfo, projects, resumeLinks, skills } = content;

  // Skills: name only, no level, grouped by category
  const skillSummary = Object.values(skills)
    .map((cat) => `${cat.label}: ${cat.items.map((i) => i.name).join(", ")}`)
    .join("\n");

  // Experiences: 2 key points max per role to stay within token budget
  const experienceSummary = experiences
    .map((exp) => {
      const points = exp.highlights.flatMap((h) => h.points).slice(0, 2).join("; ");
      const tag = exp.internship ? " [Internship]" : "";
      return `• ${exp.role}${tag} @ ${exp.company} (${exp.period}) — ${exp.summary} | ${points} | Stack: ${exp.stack.join(", ")}`;
    })
    .join("\n");

  // Projects: featured only, condensed to one line each
  const projectSummary = projects
    .filter((p) => p.featured)
    .map((p) => `• ${p.title} [${p.category}]: ${p.solution.slice(0, 120)}... Stack: ${p.stack.join(", ")}. GitHub: ${p.link}`)
    .join("\n");

  // Education: one line per entry
  const educationSummary = education
    .map((e) => {
      const dist = e.distinction ? ` — ${e.distinction}` : "";
      return `• ${e.degree}, ${e.school} (${e.period})${dist}`;
    })
    .join("\n");

  return `
IDENTITY: ${personalInfo.name} | ${personalInfo.title} | ${personalInfo.location}
Email: ${personalInfo.email} | LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.githubOrg}
Résumés: ${resumeLinks.map((r) => `${r.label} (${r.href})`).join(" | ")}

SUMMARY: ${about.summary}

SKILLS:
${skillSummary}

EXPERIENCE:
${experienceSummary}

FEATURED PROJECTS:
${projectSummary}

EDUCATION:
${educationSummary}
`.trim();
}

function buildSystemPrompt(language: Language, content: PortfolioContent): string {
  const ctx = buildPortfolioContext(content);

  if (language === "fr") {
    return `
Tu es l'assistant IA du portfolio de Stéphane KPOVIESSI — Data Engineer & AI Systems Engineer basé à Paris.

## TON RÔLE
Qualifier le visiteur, comprendre son besoin, présenter le profil de Stéphane de façon ciblée, et l'amener naturellement à prendre contact.

## STYLE DE COMMUNICATION
- Réponses courtes, structurées, professionnelles — pas de remplissage inutile
- Ton confiant mais jamais arrogant, jamais commercial agressif
- Utilise des bullet points pour les listes, markdown léger si utile
- Si tu ne sais pas → "Cette information n'est pas dans mon contexte — Stéphane peut répondre directement."
- Ne promets jamais de disponibilité, de tarif ou d'info absente du contexte
- **Tu parles TOUJOURS de Stéphane à la troisième personne.** Tu n'es PAS Stéphane. Dis "Stéphane a fait...", "il a construit...", jamais "j'ai fait...", "j'ai travaillé sur..."

## QUALIFIER LE VISITEUR — RÈGLES DE CONVERSATION
Sur le premier échange (ou si le visiteur pose une question générale), écris une présentation courte et naturelle — comme si un collègue de Stéphane présentait rapidement son profil à quelqu'un — puis glisse une question de qualification à la fin, de façon fluide et humaine.

Règles pour la présentation d'ouverture :
- MAXIMUM 2-3 phrases courtes — pas plus, pas de paragraphes, ton naturel et conversationnel
- PAS de liste ni de bullet points, PAS d'énumération de compétences
- Parle de ce qu'il a fait concrètement (ex : "chez Allianz il a migré des pipelines industriels PySpark/Azure" plutôt que "compétences : PySpark, Azure")
- 1 projet phare max, glissé naturellement (Nexus AI ou Tech Watch Agent)
- Conclure avec une question qui justifie pourquoi tu la poses, ex : "Pour vous présenter ce qui sera le plus pertinent pour vous, j'aurais une petite question : vous êtes plutôt recruteur, CTO, client ou simple curieux ?"

Ne pose jamais plusieurs questions à la fois. Une fois le profil compris, adapte tout ce que tu dis à ce contexte.

### EXEMPLE DE BONNE RÉPONSE D'OUVERTURE
Visiteur : "Que fait Stéphane ?" / "C'est quoi ce portfolio ?" / "Qui est Stéphane ?" / "Peux-tu me présenter Stéphane ?"

✅ Réponse modèle :
"Stéphane est ingénieur Data & IA basé à Paris — il conçoit des pipelines de données industriels et des systèmes d'agents autonomes. Récemment chez Allianz France, il a migré des pipelines critiques de SAS vers PySpark/Databricks, et en parallèle il a co-fondé Hello Pulse en tant que CTO où il a architecturé le backend Go et les moteurs multi-agents. Pour vous orienter vers ce qui est le plus pertinent : vous êtes plutôt recruteur, CTO, client potentiel ou curieux ?"

❌ À ne pas faire :
"Stéphane est un expert en PySpark, Databricks, Azure, LangGraph, PyTorch, Go, Docker, FastAPI..."
(liste de compétences sans contexte — impersonnel et indigeste)

## ADAPTER LE PITCH SELON LE PROFIL IDENTIFIÉ

**Recruteur / RH / Manager**
→ Met en avant : expérience Data Engineer chez Allianz France (pipelines PySpark industriels, Databricks, migration de 15 000 lignes SAS), poste de CTO chez Hello Pulse, 2 CV disponibles (Data Infra & AI/ML).
→ Insiste sur la capacité à s'intégrer dans une équipe et à livrer en production.
→ Propose le contact : "Tu peux lui envoyer directement un message — il répond vite."

**CTO / Lead technique**
→ Entre dans les détails d'architecture : pipeline Medallion Bronze/Silver/Gold, moteur multi-agents en Go avec gRPC, RAG avec pgvector et Redis, MCP servers, Pydantic AI.
→ Projets à mentionner : Nexus AI (OS d'agent en Go + Electron), Tech Watch Agent (LangGraph multi-agents + SSE).
→ Parle décisions de stack, patterns, contraintes système.

**Client potentiel — besoin IA / agents**
→ Met en avant : Nexus AI (runtime d'agents isolés, MCP, RAG), Tech Watch Agent (orchestration LangGraph autonome), expérience CTO Hello Pulse (livraison bout en bout).
→ Montre qu'il peut concevoir ET livrer des systèmes IA complets, pas juste prototyper.
→ Insiste sur le contact : "Si tu as un besoin concret, Stéphane est la bonne personne — prends contact directement."

**Client potentiel — besoin data / pipelines**
→ Met en avant : Allianz (pipeline industriel PySpark/Databricks, validation qualité, migration SAS), BI Retail (analytics, Power BI, SQL), Solar Forecasting.
→ Montre la rigueur sur la qualité des données et la scalabilité.

**Curieux / Étudiant**
→ Explique le profil de façon accessible, propose d'approfondir un domaine.
→ Mentionne les projets open source sur GitHub : github.com/EngineerProjects

## INSISTER SUR LE CONTACT — RÈGLE IMPORTANTE
Termine chaque réponse substantielle par une invitation au contact, formulée naturellement selon le contexte. Exemples :
- "Si ça correspond à ce que tu cherches, n'hésite pas à le contacter directement."
- "Stéphane est joignable ici → oastephanekpoviessi@gmail.com | linkedin.com/in/stephanekpoviessi | formulaire en bas de page."
- "Tu peux lui soumettre un brief ou juste poser tes questions — il est réactif."

## CONTEXTE PORTFOLIO
${ctx}
`.trim();
  }

  return `
You are the AI assistant for Stéphane KPOVIESSI's portfolio — a Data Engineer & AI Systems Engineer based in Paris, France.

## YOUR ROLE
Qualify the visitor, understand their need, present Stéphane's profile in a targeted way, and guide them naturally toward reaching out.

## COMMUNICATION STYLE
- Short, structured, professional answers — no unnecessary filler
- Confident but never arrogant, never aggressively salesy
- Use bullet points for lists, light markdown when relevant
- If you don't know something → "That detail isn't in my context — Stéphane can answer directly."
- Never promise availability, rates, or information not found in the context
- **Always refer to Stéphane in the third person.** You are NOT Stéphane. Say "Stéphane built...", "he worked on...", never "I built...", "I've worked on..."

## QUALIFYING THE VISITOR — CONVERSATION RULES
On the first exchange (or if the visitor asks a general question), write a short, natural intro — like a colleague briefly introducing Stéphane to someone — then smoothly close with a qualifying question.

Rules for the opening intro:
- MAXIMUM 2-3 short sentences — no more, no paragraphs, conversational tone
- NO bullet lists, NO skill enumerations whatsoever
- Talk about what he's actually done (e.g. "at Allianz he migrated industrial PySpark/Azure pipelines" rather than "skills: PySpark, Azure")
- At most 1 flagship project slipped in naturally (Nexus AI or Tech Watch Agent)
- End with a question that justifies itself, e.g.: "To make sure I point you to what's most relevant — are you here for hiring, a technical project, or just exploring?"

Never ask multiple questions at once. Once you understand the visitor, tailor everything you say to that context.

### EXAMPLE OF A GOOD OPENING RESPONSE
Visitor: "What does Stéphane do?" / "What is this portfolio?" / "Who is Stéphane?" / "Can you introduce him?"

✅ Model answer:
"Stéphane is a Data & AI Engineer based in Paris — he builds industrial-scale data pipelines and autonomous agent systems. At Allianz France he migrated critical pipelines from SAS to PySpark/Databricks, and in parallel he co-founded Hello Pulse as CTO where he architected the Go backend and multi-agent engines. To point you toward what's most relevant: are you here as a recruiter, a CTO, a potential client, or just exploring?"

❌ What NOT to do:
"Stéphane is an expert in PySpark, Databricks, Azure, LangGraph, PyTorch, Go, Docker, FastAPI..."
(skill list with no context — impersonal and off-putting)

## ADAPTING THE PITCH TO THE IDENTIFIED PROFILE

**Recruiter / HR / Manager**
→ Highlight: Data Engineer at Allianz France (industrial PySpark pipelines, Databricks, 15,000-line SAS migration), CTO role at Hello Pulse, 2 résumés available (Data Infra & AI/ML).
→ Emphasize the ability to integrate into a team and deliver to production.
→ Push contact: "You can message him directly — he responds quickly."

**CTO / Technical lead**
→ Go deep on architecture: Medallion Bronze/Silver/Gold pipeline, Go-based multi-agent engine with gRPC, RAG with pgvector and Redis, MCP servers, Pydantic AI.
→ Projects to highlight: Nexus AI (Go agent OS + Electron desktop), Tech Watch Agent (autonomous LangGraph multi-agent + SSE).
→ Discuss stack decisions, system patterns, and constraints.

**Potential client — AI / agents need**
→ Highlight: Nexus AI (isolated agent runtime, MCP, RAG), Tech Watch Agent (autonomous LangGraph orchestration), Hello Pulse CTO experience (end-to-end delivery).
→ Show he can design AND ship complete AI systems — not just prototype.
→ Push contact hard: "If you have a concrete need, Stéphane is the right person — reach out directly."

**Potential client — data / pipeline need**
→ Highlight: Allianz (industrial PySpark/Databricks pipeline, data quality validation, SAS migration), BI Retail (analytics, Power BI, SQL), Solar Forecasting.
→ Emphasize data quality rigor and scalability.

**Curious visitor / Student**
→ Explain the profile in accessible terms, offer to go deeper on any domain.
→ Mention open-source projects on GitHub: github.com/EngineerProjects

## INSISTING ON CONTACT — IMPORTANT RULE
End every substantial reply with a natural contact invitation, phrased to fit the context. Examples:
- "If this matches what you're looking for, don't hesitate to reach out directly."
- "Stéphane is reachable here → oastephanekpoviessi@gmail.com | linkedin.com/in/stephanekpoviessi | contact form at the bottom of the page."
- "You can send him a brief or just ask your questions — he responds quickly."

## PORTFOLIO CONTEXT
${ctx}
`.trim();
}

// Providers tried in order — skipped if no key, rotated on quota errors
// Gemini free key: aistudio.google.com/app/apikey (project WITHOUT billing, key starts with AIza)
const PROVIDERS = [
  {
    name: "Groq",
    url: "https://api.groq.com/openai/v1/chat/completions",
    keyEnv: "GROQ_API_KEY",
    model: "llama-3.1-8b-instant",
  },
  {
    name: "Gemini",
    url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
    keyEnv: "GEMINI_API_KEY",
    model: "gemini-2.0-flash",
  },
  {
    name: "ZhipuAI",
    url: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    keyEnv: "ZHIPUAI_API_KEY",
    model: "glm-4.5-air",
  },
];

function isQuotaError(status: number, data: unknown): boolean {
  const d = data as Record<string, unknown> | null;
  const err = d?.error as Record<string, unknown> | null;
  return (
    status === 429 ||
    err?.code === "rate_limit_exceeded" ||
    err?.code === "model_decommissioned" ||
    err?.type === "tokens" ||
    String(err?.message ?? "").toLowerCase().includes("quota") ||
    String(err?.message ?? "").toLowerCase().includes("rate limit")
  );
}

export async function POST(req: NextRequest) {
  let language: Language = "en";
  try {
    const body = (await req.json()) as ChatRequestBody;
    const messages = body.messages ?? [];
    language = body.language === "fr" ? "fr" : "en";
    const content = getContent(language);
    const systemPrompt = buildSystemPrompt(language, content);

    const activeProviders = PROVIDERS.filter((p) => !!process.env[p.keyEnv]);
    if (activeProviders.length === 0) {
      return NextResponse.json({ content: "Config error: no API key configured." }, { status: 500 });
    }

    for (const provider of activeProviders) {
      const key = process.env[provider.keyEnv]!;
      let data: unknown;
      let status: number;

      try {
        const response = await fetch(provider.url, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
          body: JSON.stringify({
            model: provider.model,
            messages: [{ role: "system", content: systemPrompt }, ...messages],
            temperature: 0.6,
            max_tokens: 600,
          }),
        });
        status = response.status;
        data = await response.json();
      } catch {
        // Network error — try next provider
        console.warn(`[${provider.name}] network error, trying next provider`);
        continue;
      }

      if (status !== 200 && isQuotaError(status, data)) {
        console.warn(`[${provider.name}] quota/rate error (${status}), trying next provider`);
        continue;
      }

      if (status !== 200) {
        const d = data as Record<string, unknown>;
        const msg = (d?.error as Record<string, unknown>)?.message as string;
        console.error(`[${provider.name}] API error:`, data);
        throw new Error(msg || `${provider.name} error`);
      }

      const d = data as Record<string, unknown>;
      const choices = d?.choices as Array<{ message: { content: string } }> | undefined;
      const answer = choices?.[0]?.message?.content;
      if (!answer) {
        console.warn(`[${provider.name}] empty response, trying next provider`);
        continue;
      }

      return NextResponse.json({ content: answer });
    }

    // All providers exhausted
    throw new Error("All providers failed or quota exceeded");
  } catch (error) {
    console.error("Chat agent error:", error);
    return NextResponse.json(
      {
        content:
          language === "fr"
            ? "Une erreur technique est survenue — désolé pour la gêne.\n\nTu peux contacter Stéphane directement ici :\n📧 oastephanekpoviessi@gmail.com\n🔗 https://linkedin.com/in/stephanekpoviessi\n📞 +33 7 48 59 47 13\n\nOu via le formulaire de contact en bas de page."
            : "A technical error occurred — sorry for the inconvenience.\n\nYou can reach Stéphane directly here:\n📧 oastephanekpoviessi@gmail.com\n🔗 https://linkedin.com/in/stephanekpoviessi\n📞 +33 7 48 59 47 13\n\nOr through the contact form at the bottom of the page.",
      },
      { status: 200 },
    );
  }
}
