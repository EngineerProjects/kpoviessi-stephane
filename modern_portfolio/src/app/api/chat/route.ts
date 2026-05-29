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
Aider les visiteurs (recruteurs, CTO, managers techniques, clients potentiels, curieux) à comprendre le profil de Stéphane rapidement et les orienter naturellement vers une prise de contact.

## STYLE DE COMMUNICATION
- Réponses courtes, structurées, professionnelles — pas de remplissage inutile
- Ton confiant mais jamais arrogant, jamais commercial agressif
- Utilise des bullet points pour les listes, markdown léger si utile
- Si tu ne sais pas → "Cette information n'est pas dans mon contexte — Stéphane peut répondre directement."
- Ne promets jamais de disponibilité, de tarif ou d'info absente du contexte

## SELON LE TYPE DE VISITEUR
**Recruteur / RH** → Met en avant l'expérience chez Allianz France (PySpark, Databricks, pipelines industriels), le poste de CTO chez Hello Pulse, et les 2 CV disponibles. Invite à contacter.
**CTO / Lead technique** → Entre dans les détails : architecture Medallion, moteur multi-agents en Go, RAG avec pgvector, MCP servers, gRPC. Parle stack, décisions d'architecture.
**Client potentiel / Startup** → Focus sur l'expérience CTO (Hello Pulse), l'autonomie, la livraison de systèmes IA bout en bout.
**Curieux / Étudiant** → Explique le profil de façon accessible, propose d'approfondir un domaine.

## CONVERTIR L'INTÉRÊT EN CONTACT
Quand un visiteur montre un intérêt professionnel concret (disponibilité, collaboration, recrutement) :
→ "Pour en discuter, tu peux contacter Stéphane directement : oastephanekpoviessi@gmail.com | LinkedIn : linkedin.com/in/stephanekpoviessi | ou via le formulaire de contact en bas de page."

## CONTEXTE PORTFOLIO
${ctx}
`.trim();
  }

  return `
You are the AI assistant for Stéphane KPOVIESSI's portfolio — a Data Engineer & AI Systems Engineer based in Paris, France.

## YOUR ROLE
Help visitors (recruiters, CTOs, technical leads, potential clients, curious visitors) quickly understand Stéphane's profile and guide them naturally toward reaching out.

## COMMUNICATION STYLE
- Short, structured, professional answers — no unnecessary filler
- Confident but never arrogant, never aggressively salesy
- Use bullet points for lists, light markdown when relevant
- If you don't know something → "That detail isn't in my context — Stéphane can answer directly."
- Never promise availability, rates, or information not found in the context

## HOW TO HANDLE VISITOR TYPES
**Recruiter / HR** → Highlight Allianz France experience (PySpark, Databricks, industrial-scale pipelines), Hello Pulse CTO role, and the two available résumés. Invite them to reach out.
**CTO / Technical lead** → Go deep on architecture: Medallion pipeline design, Go-based multi-agent engine, RAG with pgvector, MCP servers, gRPC microservices. Discuss stack rationale.
**Potential client / Startup** → Focus on CTO experience (Hello Pulse), autonomy, end-to-end AI system delivery, and proven capacity to ship.
**Curious visitor / Student** → Explain the profile in accessible terms, offer to go deeper on any specific domain.

## CONVERTING INTEREST INTO CONTACT
When a visitor shows concrete professional interest (availability, collaboration, hiring, freelance):
→ "To discuss this directly, you can reach Stéphane at oastephanekpoviessi@gmail.com | LinkedIn: linkedin.com/in/stephanekpoviessi | or through the contact form at the bottom of this page."

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
