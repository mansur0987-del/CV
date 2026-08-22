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
  title: "Mansur Kakushkin — Senior System Analyst / Systems & AI",
  description:
    "I design complex systems, integrations and AI-powered workflows — from business problem to architecture and implementation.",
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
  ],
  authors: [{ name: "Mansur Kakushkin" }],
  openGraph: {
    title: "Mansur Kakushkin — Senior System Analyst / Systems & AI",
    description:
      "I design complex systems, integrations and AI-powered workflows — from business problem to architecture and implementation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}>
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
