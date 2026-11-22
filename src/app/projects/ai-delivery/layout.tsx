import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Delivery Transformation | Mansur Kakushkin",
  description: "AI-assisted systems analysis, technical specifications, skill-packs, context engineering and faster delivery workflows.",
  alternates: { canonical: "/projects/ai-delivery" },
  openGraph: {
    title: "AI Delivery Transformation | Mansur Kakushkin",
    description: "AI-assisted systems analysis, technical specifications, skill-packs, context engineering and faster delivery workflows.",
    url: "/projects/ai-delivery",
    type: "article",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
