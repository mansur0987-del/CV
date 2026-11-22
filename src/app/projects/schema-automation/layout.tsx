import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schema-driven Automation | Mansur Kakushkin",
  description: "XSD to JSON Schema conversion, schema-driven UI generation and Python automation for enterprise forms.",
  alternates: { canonical: "/projects/schema-automation" },
  openGraph: {
    title: "Schema-driven Automation | Mansur Kakushkin",
    description: "XSD to JSON Schema conversion, schema-driven UI generation and Python automation for enterprise forms.",
    url: "/projects/schema-automation",
    type: "article",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
