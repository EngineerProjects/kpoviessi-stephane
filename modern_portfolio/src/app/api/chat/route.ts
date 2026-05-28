import { NextRequest, NextResponse } from "next/server";
import * as EN from "@/data/content";
import * as FR from "@/data/content.fr";

type Language = "en" | "fr";

type PortfolioContent = typeof EN;

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
  language?: Language;
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

function getContent(language: Language): PortfolioContent {
  return language === "fr" ? FR : EN;
}

function buildPortfolioContext(content: PortfolioContent) {
  const { about, education, experiences, personalInfo, projects, resumeLinks, skills } = content;

  const skillSummary = Object.values(skills)
    .map((category) => `${category.label}: ${category.items.map((item) => item.name).join(", ")}`)
    .join("\n");

  const experienceSummary = experiences
    .map((experience) => {
      const highlights = experience.highlights
        .flatMap((highlight) => highlight.points)
        .slice(0, 4)
        .join("; ");

      return `${experience.role} - ${experience.company} (${experience.period}, ${experience.location}): ${experience.summary} Key points: ${highlights}.`;
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
        item.courses ? `Courses: ${item.courses.join("; ")}` : undefined,
        item.keySkills ? `Skills: ${item.keySkills.join(", ")}` : undefined,
        item.distinction ? `Distinction: ${item.distinction}` : undefined,
      ]
        .filter(Boolean)
        .join(" ");

      return `${item.degree} - ${item.school}, ${item.specialization} (${item.period}). ${details}`;
    })
    .join("\n");

  return `
PROFILE
Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}
Resumes: ${resumeLinks.map((resume) => `${resume.label} (${resume.href})`).join(", ")}

Summary
${about.summary}
${about.detail}

Skills
${skillSummary}

Experiences
${experienceSummary}

Projects
${projectSummary}

Education
${educationSummary}
`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatRequestBody;
    const messages = body.messages ?? [];
    const language = body.language === "fr" ? "fr" : "en";
    const content = getContent(language);

    if (!process.env.ZHIPUAI_API_KEY) {
      return NextResponse.json({ content: "Config Error: API key missing." }, { status: 500 });
    }

    const systemPrompt =
      language === "fr"
        ? `
Tu es l'assistant professionnel de ${content.personalInfo.name}.
Réponds en français, avec un ton clair, professionnel et concis.
Base tes réponses uniquement sur le contexte portfolio ci-dessous.
Si un recruteur montre un intérêt professionnel, propose de laisser un nom et un email ou LinkedIn.
Ne promets pas de disponibilité ou d'information qui n'apparaît pas dans le contexte.

CONTEXTE PORTFOLIO
${buildPortfolioContext(content)}
`
        : `
You are the professional assistant for ${content.personalInfo.name}.
Answer in English with a clear, professional, concise tone.
Base your answers only on the portfolio context below.
If a recruiter shows professional interest, suggest leaving a name and email or LinkedIn.
Do not promise availability or information that does not appear in the context.

PORTFOLIO CONTEXT
${buildPortfolioContext(content)}
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
      throw new Error(data.error?.message || "API error");
    }

    const answer = data.choices?.[0]?.message?.content;

    if (!answer) {
      throw new Error("Invalid API response");
    }

    return NextResponse.json({ content: answer });
  } catch (error) {
    console.error("Agent Error:", error);
    return NextResponse.json(
      {
        content:
          "A technical communication issue occurred. Stéphane remains reachable through the contact form or LinkedIn.",
      },
      { status: 200 },
    );
  }
}
