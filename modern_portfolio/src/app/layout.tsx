import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kpoviessi-stephane.vercel.app/"),
  title: "Stéphane KPOVIESSI | Ingénieur Big Data & Expert IA",
  description:
    "Big Data Engineer and AI Specialist. I transform data complexity into concrete growth levers using Python, Go, SQL, and cutting-edge AI.",
  keywords: [
    "Stéphane Kpoviessi",
    "Stephane Kpoviessi",
    "KPOVIESSI",
    "Amiche",
    "Olaolouwa",
    "Big Data Engineer",
    "Ingénieur Big Data",
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
    "Airflow",
    "Databricks",
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
    title: "Stéphane KPOVIESSI | Ingénieur Big Data & Expert IA",
    description:
      "Explore the portfolio of a Big Data Engineer & AI Specialist transforming data complexity into growth.",
    images: [{ url: "/images/profile.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SK-OS | Stéphane Kpoviessi",
    description:
      "Big Data Engineer & AI Specialist. Building secure, scalable, and future-ready production infrastructures.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500`}
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
