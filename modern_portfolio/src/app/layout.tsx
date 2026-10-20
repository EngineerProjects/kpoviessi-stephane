import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n";
import ChatBot from "@/components/ChatBot";
import { person } from "@/data/site";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

const title = "Stéphane KPOVIESSI | Founder of Seshat, AI & Data Engineer";
const description =
  "Founder of Seshat, an open-source Go agent runtime. AI and Data Engineer: agents, hybrid RAG, PySpark pipelines, computer vision. Based in Île-de-France.";

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title,
  description,
  applicationName: "Stéphane KPOVIESSI",
  authors: [{ name: "Stéphane Kpoviessi", url: person.site }],
  keywords: [
    "Stéphane Kpoviessi",
    "AI engineer",
    "GenAI engineer",
    "Data engineer",
    "AI agents",
    "RAG",
    "MCP",
    "Go",
    "PySpark",
    "Seshat",
    "Ingénieur IA",
    "Ingénieur Big Data",
  ],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: person.site, title, description, images: [{ url: "/images/stephane.jpg" }] },
  twitter: { card: "summary", title, description, images: ["/images/stephane.jpg"] },
  verification: { google: "G4GoMHBsqSjeIC6E4J19MxsS8o-3lTkmcTvbu435CC0" },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ee",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stéphane Kpoviessi",
  jobTitle: "AI & Data Engineer, Founder of Seshat",
  url: person.site,
  image: `${person.site}/images/stephane.jpg`,
  sameAs: [person.linkedin, person.github, person.org, person.seshat],
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "JUNIA ISEN" }],
  worksFor: { "@type": "Organization", name: "Seshat AI", url: person.seshat },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <ChatBot />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
