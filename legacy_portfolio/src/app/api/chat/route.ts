import { NextRequest, NextResponse } from "next/server";
import {
  about,
  education,
  experiences,
  personalInfo,
  projects,
  resumeLinks,
  skills,
} from "@/data/content";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
};

type ZhipuResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
};

function buildPortfolioContext() {
  const skillSummary = Object.values(skills)
    .map((category) => `${category.label}: ${category.items.map((item) => item.name).join(", ")}`)
    .join("\n");

  const experienceSummary = experiences
    .map((experience) => {
      const highlights = experience.highlights
        .flatMap((highlight) => highlight.points)
        .slice(0, 4)
        .join("; ");

      return `${experience.role} - ${experience.company} (${experience.period}, ${experience.location}): ${experience.summary} Points clés: ${highlights}.`;
    })
    .join("\n");

  const projectSummary = projects
    .map((project) => {
      const impact = project.impact.join("; ");
      return `${project.title} [${project.category}]: ${project.context} Solution: ${project.solution} Impact: ${impact}. Stack: ${project.stack.join(", ")}.`;
    })
    .join("\n");

  const educationSummary = education
    .map((item) => {
      const details = [
        item.description,
        item.courses ? `Enseignements: ${item.courses.join("; ")}` : undefined,
        item.keySkills ? `Compétences: ${item.keySkills.join(", ")}` : undefined,
        item.distinction ? `Distinction: ${item.distinction}` : undefined,
      ]
        .filter(Boolean)
        .join(" ");

      return `${item.degree} - ${item.school}, ${item.specialization} (${item.period}). ${details}`;
    })
    .join("\n");

  return `
PROFIL
Nom: ${personalInfo.name}
Titre: ${personalInfo.title}
Localisation: ${personalInfo.location}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}
CV: ${resumeLinks.map((resume) => `${resume.label} (${resume.href})`).join(", ")}

Résumé
${about.summary}
${about.detail}

Compétences
${skillSummary}

Expériences
${experienceSummary}

Projets
${projectSummary}

Formation
${educationSummary}
`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatRequestBody;
    const messages = body.messages ?? [];

    if (!process.env.ZHIPUAI_API_KEY) {
      return NextResponse.json({ content: "Config Error: API Key manquante." }, { status: 500 });
    }

    const systemPrompt = `
Tu es l'assistant professionnel de ${personalInfo.name}.
Ton objectif est d'aider les visiteurs à comprendre son profil, ses expériences, ses projets et ses compétences.

Règles:
- Réponds en français, avec un ton clair, professionnel et concis.
- Base tes réponses sur le contexte portfolio ci-dessous.
- Si un recruteur montre un intérêt professionnel, propose de laisser un nom et un email ou LinkedIn.
- Ne promets pas de disponibilité ou d'information qui n'apparaît pas dans le contexte.
- Pour les projets et expériences, explique l'impact technique et métier.

CONTEXTE PORTFOLIO
${buildPortfolioContext()}
`;

    const response = await fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ZHIPUAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "glm-4",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        temperature: 0.7,
      }),
    });

    const data = (await response.json()) as ZhipuResponse;

    if (!response.ok) {
      console.error("Zhipu API Error:", data);
      throw new Error(data.error?.message || "Erreur API");
    }

    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Réponse API invalide");
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Agent Error:", error);
    return NextResponse.json(
      {
        content:
          "Je rencontre une turbulence technique, mais Stéphane reste disponible via son formulaire de contact ou sur LinkedIn.",
      },
      { status: 200 },
    );
  }
}
