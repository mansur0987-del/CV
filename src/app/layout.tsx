import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mansur.club"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  title: "Mansur Kakushkin — Senior Systems Analyst | Solution Design & AI Engineering",
  description:
    "Enterprise system design, technical delivery and AI-powered engineering workflows.",
  keywords: [
    "Senior System Analyst",
    "Systems Analyst",
    "Solution Architecture",
    "System Design",
    "AI",
    "RAG",
    "Integration Architecture",
    "API",
    "Automation",
    "MCP",
    "Graph RAG",
    "AI Agents",
  ],
  authors: [{ name: "Mansur Kakushkin", url: "https://mansur.club" }],
  twitter: {
    card: "summary",
    title: "Mansur Kakushkin — Senior Systems Analyst | Solution Design & AI Engineering",
    description: "Enterprise integration architecture, system design, and AI-assisted engineering.",
  },
  openGraph: {
    title: "Mansur Kakushkin — Senior Systems Analyst | Solution Design & AI Engineering",
    description:
      "Enterprise system design, technical delivery and AI-powered engineering workflows.",
    type: "profile",
    url: "https://mansur.club/",
    images: [{ url: "/avatar.png", alt: "Mansur Kakushkin" }],
    locale: "en_US",
  },
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://mansur.club/#profile",
  url: "https://mansur.club/",
  name: "Mansur Kakushkin — Senior Systems Analyst",
  description: "Professional profile of Mansur Kakushkin: enterprise systems analysis, integration architecture and AI engineering.",
  mainEntity: {
    "@type": "Person",
    "@id": "https://mansur.club/#person",
    name: "Mansur Kakushkin",
    alternateName: "Mansur Nailevich Kakushkin",
    url: "https://mansur.club/",
    image: "https://mansur.club/avatar.png",
    jobTitle: "Senior Systems Analyst",
    description: "Senior Systems Analyst working on enterprise system design, APIs, SAP integrations, data platforms, AI agents, RAG and MCP.",
    knowsAbout: [
      "Systems Analysis",
      "Solution Architecture",
      "API Design",
      "Integration Architecture",
      "SAP Integration",
      "PostgreSQL",
      "ClickHouse",
      "Python",
      "Microservices",
      "LLM",
      "Retrieval-Augmented Generation",
      "Knowledge Graphs",
      "Model Context Protocol (MCP)",
      "AI Agents"
    ],
    sameAs: [
      "https://github.com/mansur0987-del",
      "https://www.linkedin.com/in/mansur-nailevich-kakushkin-00a399235/"
    ]
  }
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TooltipProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <ScrollToTop />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
