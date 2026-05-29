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

  const skillSummary = Object.values(skills)
    .map((cat) => `${cat.label}: ${cat.items.map((i) => `${i.name} (${i.level})`).join(", ")}`)
    .join("\n");

  const experienceSummary = experiences
    .map((exp) => {
      const points = exp.highlights.flatMap((h) => h.points).slice(0, 4).join("; ");
      const internshipTag = exp.internship ? " [Internship]" : "";
      return `• ${exp.role}${internshipTag} @ ${exp.company} (${exp.period}, ${exp.location})\n  ${exp.summary}\n  Key work: ${points}\n  Stack: ${exp.stack.join(", ")}`;
    })
    .join("\n\n");

  const projectSummary = projects
    .map((p) => {
      return `• ${p.title} [${p.category}]\n  Context: ${p.context}\n  Solution: ${p.solution}\n  Impact: ${p.impact.join("; ")}\n  Stack: ${p.stack.join(", ")}\n  GitHub: ${p.link}`;
    })
    .join("\n\n");

  const educationSummary = education
    .map((e) => {
      const extras = [
        e.courses ? `Courses: ${e.courses.join(", ")}` : "",
        e.keySkills ? `Key skills: ${e.keySkills.join(", ")}` : "",
        e.distinction ? `Distinction: ${e.distinction}` : "",
      ]
        .filter(Boolean)
        .join(" | ");
      return `• ${e.degree} — ${e.school}, ${e.specialization} (${e.period}). ${extras}`;
    })
    .join("\n");

  return `
━━ IDENTITY ━━
Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub personal: ${personalInfo.github}
GitHub org (projects): ${personalInfo.githubOrg}
Résumés: ${resumeLinks.map((r) => `${r.label} → ${r.href}`).join(" | ")}

━━ PROFILE SUMMARY ━━
${about.summary}
${about.detail}

━━ SKILLS ━━
${skillSummary}

━━ PROFESSIONAL EXPERIENCE ━━
${experienceSummary}

━━ PROJECTS ━━
${projectSummary}

━━ EDUCATION ━━
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

## QUALIFIER LE VISITEUR — RÈGLES DE CONVERSATION
Sur le premier échange (ou si le visiteur pose une question générale type "c'est quoi ce portfolio ?"), donne toujours une courte présentation générale de Stéphane — utile pour tout visiteur — puis termine par UNE seule question de qualification.

Format attendu pour le premier échange :
1. Présentation générale (3-4 lignes max) : qui est Stéphane, son domaine, ses points forts clés (data engineering à l'échelle industrielle + systèmes IA autonomes), et 1-2 réalisations emblématiques (Allianz, Hello Pulse CTO, Nexus AI).
2. Question de qualification naturelle, ex : "Et toi, tu viens avec quel contexte — recrutement, projet technique, ou simple curiosité ?"

Ne pose jamais plusieurs questions à la fois. Une fois le profil compris, adapte tout ce que tu dis à ce contexte.

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

## QUALIFYING THE VISITOR — CONVERSATION RULES
On the first exchange (or if the visitor asks a general question like "what is this portfolio?"), always give a short general intro about Stéphane — useful for any visitor — then close with ONE qualifying question.

Expected format for the first exchange:
1. General intro (3-4 lines max): who Stéphane is, his domain, key strengths (industrial-scale data engineering + autonomous AI systems), and 1-2 signature achievements (Allianz, Hello Pulse CTO, Nexus AI).
2. One natural qualifying question, e.g.: "What's your context — hiring, a technical project, or just exploring?"

Never ask multiple questions at once. Once you understand the visitor, tailor everything you say to that context.

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

export async function POST(req: NextRequest) {
  let language: Language = "en";
  try {
    const body = (await req.json()) as ChatRequestBody;
    const messages = body.messages ?? [];
    language = body.language === "fr" ? "fr" : "en";
    const content = getContent(language);

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ content: "Config error: API key missing." }, { status: 500 });
    }

    const systemPrompt = buildSystemPrompt(language, content);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        temperature: 0.6,
        max_tokens: 600,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", data);
      throw new Error(data?.error?.message || "Groq API error");
    }

    const answer = data?.choices?.[0]?.message?.content as string | undefined;
    if (!answer) throw new Error("Empty response from Groq");

    return NextResponse.json({ content: answer });
  } catch (error) {
    console.error("Chat agent error:", error);
    return NextResponse.json(
      {
        content:
          language === "fr"
            ? "Une erreur technique est survenue. Stéphane reste joignable via le formulaire de contact ou LinkedIn."
            : "A technical error occurred. Stéphane remains reachable via the contact form or LinkedIn.",
      },
      { status: 200 },
    );
  }
}
