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
  title: "Stéphane KPOVIESSI — Ingénieur Big Data & IA",
  description:
    "Ingénieur Big Data & Intelligence Artificielle basé en Île-de-France. Je conçois et développe des systèmes data et IA robustes, de la structuration des données jusqu'au déploiement en production.",
  keywords: [
    "Data Engineer",
    "Machine Learning",
    "AI Systems",
    "Computer Vision",
    "Big Data",
    "Stéphane Kpoviessi",
  ],
  authors: [{ name: "Stéphane Kpoviessi" }],
  openGraph: {
    title: "Stéphane KPOVIESSI — Ingénieur Big Data & IA",
    description:
      "Ingénieur Big Data & Intelligence Artificielle. Systèmes data et IA de bout en bout.",
    type: "website",
    locale: "fr_FR",
  },
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
