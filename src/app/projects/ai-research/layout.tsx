import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Code Knowledge Platform | Mansur Kakushkin",
  description: "Knowledge extraction from codebases with AI agents, RAG, knowledge graphs and MCP integrations.",
  alternates: { canonical: "/projects/ai-research" },
  openGraph: {
    title: "AI Code Knowledge Platform | Mansur Kakushkin",
    description: "Knowledge extraction from codebases with AI agents, RAG, knowledge graphs and MCP integrations.",
    url: "/projects/ai-research",
    type: "article",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
