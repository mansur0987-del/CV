"use client";

import { CaseStudyPage } from "@/components/case-study";
import { useLanguage } from "@/lib/language-context";

export default function PaymentRoutingPage() {
  const { t } = useLanguage();
  return (
    <CaseStudyPage
      title={t("projects.payment.title")}
      subtitle={t("projects.payment.subtitle")}
      sections={[
        { title: t("casestudy.problem"), content: t("payment.problem") },
        { title: t("casestudy.myRole"), content: [t("payment.role1"), t("payment.role2"), t("payment.role3")] },
        { title: t("casestudy.architecture"), content: t("payment.arch") },
        { title: t("casestudy.result"), content: t("payment.result") },
      ]}
      technologies={["Faster Payments System (SBP)", "Payment Routing", "UML Sequence Diagrams", "QR Codes", "Integration Architecture"]}
      flow={t("payment.flow").split("|")}
    />
  );
}
