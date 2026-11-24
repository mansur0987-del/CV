import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Monitoring System | Mansur Kakushkin",
  description: "Enterprise tax monitoring across 13 legal entities: SAP and FNS integrations, microservices, PostgreSQL, ClickHouse and Airflow.",
  alternates: { canonical: "/projects/tax-monitoring" },
  openGraph: {
    title: "Tax Monitoring System | Mansur Kakushkin",
    description: "Enterprise tax monitoring across 13 legal entities: SAP and FNS integrations, microservices, PostgreSQL, ClickHouse and Airflow.",
    url: "/projects/tax-monitoring",
    type: "article",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
