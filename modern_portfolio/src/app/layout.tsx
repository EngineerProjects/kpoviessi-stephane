import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Stéphane KPOVIESSI - Big Data Engineer',
    default: 'Stéphane KPOVIESSI | Big Data Engineer & AI Enthusiast',
  },
  description: "Personal portfolio of Stéphane KPOVIESSI, a Big Data Engineer and AI enthusiast specializing in machine learning, deep learning, computer vision, and multi-agent AI systems. Currently seeking 6-month final-year internship.",
  keywords: ["Big Data", "Machine Learning", "Deep Learning", "Computer Vision", "AI", "Data Engineer", "Portfolio", "Stéphane KPOVIESSI", "Multi-Agent Systems", "NLP"],
  authors: [{ name: "Stéphane KPOVIESSI" }],
  creator: "Stéphane KPOVIESSI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}