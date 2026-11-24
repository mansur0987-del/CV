import type { Metadata } from "next";

const title = "SBP Payment Routing & Bank Redundancy | Mansur Kakushkin";
const description = "Conceptual integration architecture for SBP payments at X5 Tech: agent bank switching, UML sequence diagrams, system responsibilities and QR code data exchange.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/payment-routing" },
  openGraph: { title, description, url: "/projects/payment-routing", type: "article" },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
