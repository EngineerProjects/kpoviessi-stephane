import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n";
import ChatBot from "@/components/ChatBot";
import { person } from "@/data/site";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

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
    "Rust",
    "Go",
    "PySpark",
    "Seshat",
    "Ingénieur IA",
    "Ingénieur Big Data",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: person.site,
    title,
    description,
    images: [{ url: "/images/portrait-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/portrait-og.jpg"],
  },
  verification: { google: "G4GoMHBsqSjeIC6E4J19MxsS8o-3lTkmcTvbu435CC0" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stéphane Kpoviessi",
  jobTitle: "AI & Data Engineer, Founder of Seshat",
  url: person.site,
  image: `${person.site}/images/portrait-og.jpg`,
  sameAs: [person.linkedin, person.github, person.org, person.seshat],
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "JUNIA ISEN" }],
  worksFor: { "@type": "Organization", name: "Seshat AI", url: person.seshat },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <div className="grid-field" aria-hidden />
            <div className="relative z-10">{children}</div>
            <ChatBot />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
