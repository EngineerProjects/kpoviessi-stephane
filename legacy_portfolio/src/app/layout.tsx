import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://kpoviessi-stephane.vercel.app/"),
  title: "Stéphane KPOVIESSI | Data Engineer & Data Scientist",
  description:
    "Portfolio de Stéphane KPOVIESSI, Data Engineer / Data Scientist spécialisé en Big Data, PySpark, IA, systèmes multi-agents, RAG et computer vision.",
  keywords: [
    "Stéphane Kpoviessi",
    "Stephane Kpoviessi",
    "KPOVIESSI",
    "Amiche",
    "Olaolouwa",
    "Big Data Engineer",
    "Ingénieur Big Data",
    "Data Engineer PySpark",
    "Data Scientist IA",
    "AI Specialist",
    "Expert IA",
    "Machine Learning Engineer",
    "Data Scientist",
    "Statistics Data Analytics",
    "Data Engineer",
    "Data Science",
    "Portfolio",
    "SK-OS",
    "Lille",
    "Paris",
    "Hauts-de-France",
    "Île-de-France",
    "Cergy",
    "Europe",
    "Junia ISEN",
    "Allianz",
    "Sylvagreg",
    "Python",
    "Go",
    "Golang",
    "SQL",
    "PySpark",
    "RAG",
    "LLM",
    "Generative AI",
    "GANs",
    "Computer Vision",
    "NLP",
    "Multi-agent systems",
    "Azure",
    "AWS",
    "Docker",
    "Databricks",
    "Azure Data Lake",
    "Vector DB",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Medallion Architecture",
    "Data Engineering",
    "MLOps",
    "Freelance IA",
    "Recrutement Big Data",
    "AI Research",
    "Open Source",
    "Community Building",
    "Music & Drumming",
    "Entrepreneurship",
    "CDI",
    "Remote",
    "workflow",
    "Algorithm",
    "Operationnal research",
    "AI/ML",
    "Engineer",
    "Auto-Entrepreneur",
  ],
  authors: [{ name: "Stéphane Kpoviessi" }],
  verification: {
    google: "G4GoMHBsqSjeIC6E4J19MxsS8o-3lTkmcTvbu435CC0",
  },
  openGraph: {
    type: "website",
    url: "https://kpoviessi-stephane.vercel.app/",
    title: "Stéphane KPOVIESSI | Data Engineer & Data Scientist",
    description:
      "Découvrez ses expériences en Data Engineering, PySpark, IA, RAG, systèmes multi-agents et computer vision.",
    images: [{ url: "/images/profile.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stéphane Kpoviessi | Data Engineer & Data Scientist",
    description:
      "Data Engineer / Data Scientist spécialisé en Big Data, IA, PySpark, RAG et systèmes multi-agents.",
    images: ["/images/profile.png"],
  },
};

export const viewport = {
  themeColor: "#0a0a12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body
        className="antialiased transition-colors duration-500"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
