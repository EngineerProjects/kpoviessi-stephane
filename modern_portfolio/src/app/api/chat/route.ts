import { NextRequest, NextResponse } from "next/server";
import { personalInfo, about, experiences, projects, education, skills } from "@/data/content";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.ZHIPUAI_API_KEY) {
      return NextResponse.json({ content: "Config Error: API Key manquante." }, { status: 500 });
    }

    const systemPrompt = `
      Tu es l'Agent de Liaison de Stéphane KPOVIESSI (expert Big Data & IA). 
      Ton but : CONVAINCRE les recruteurs et CAPTURER leurs contacts.

      QUALITÉS DE STÉPHANE À METTRE EN AVANT:
      - RÉSILIENCE, SÉRIEUX, RIGUEUR.
      - Capacité à passer du code legacy (SAS) à des architectures modernes (PySpark/Cloud).
      - CTO & Co-fondateur (Hello Pulse) : vision produit et leadership technique.

      CONTEXTE TECHNIQUE:
      - Expérience chez Allianz (Migration massive), Hello Pulse (IA Agentique), Sylvagreg (Vision 3D).
      - Stack: Python, PySpark, LangGraph, Computer Vision, PostgreSQL, Docker.

      TON STYLE:
      - Réponds en français de manière élégante, professionnelle et très légèrement enthousiaste.
      - Met en avant que Stéphane est basé en Île-de-France (Cergy).

      MISSIONS:
      1. Si l'interlocuteur pose des questions sur les projets, explique l'impact business (ex: migration Allianz = fiabilité et gain de temps).
      2. Si l'intérêt est pro, capture le nom et le contact : "Pourriez-vous me laisser votre nom et votre LinkedIn/Email ? Je préparerai un résumé de notre échange pour Stéphane."
    `;

    const response = await fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.ZHIPUAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "glm-4",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Zhipu API Error:", data);
      throw new Error(data.error?.message || "Erreur API");
    }

    return NextResponse.json({ content: data.choices[0].message.content });

  } catch (error: any) {
    console.error("Agent Error:", error);
    return NextResponse.json(
      { content: "Je rencontre une petite turbulence technique, mais Stéphane reste disponible via son formulaire de contact ou sur LinkedIn !" },
      { status: 200 }
    );
  }
}
