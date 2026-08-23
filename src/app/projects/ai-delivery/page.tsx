"use client";

import { CaseStudyPage } from "@/components/case-study";
import { useLanguage } from "@/lib/language-context";

export default function AIDeliveryPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("casestudy.problem"),
      content: t("aiDelivery.problem"),
    },
    {
      title: t("casestudy.context"),
      content: t("aiDelivery.context"),
    },
    {
      title: t("casestudy.myRole"),
      content: [
        t("aiDelivery.role1"),
        t("aiDelivery.role2"),
        t("aiDelivery.role3"),
        t("aiDelivery.role4"),
        t("aiDelivery.role5"),
      ],
    },
    {
      title: t("casestudy.architecture"),
      content: t("aiDelivery.arch"),
    },
    {
      title: t("casestudy.solution"),
      content: [
        t("aiDelivery.solution1"),
        t("aiDelivery.solution2"),
        t("aiDelivery.solution3"),
        t("aiDelivery.solution4"),
        t("aiDelivery.solution5"),
      ],
    },
    {
      title: t("casestudy.challenges"),
      content: [
        t("aiDelivery.challenge1"),
        t("aiDelivery.challenge2"),
        t("aiDelivery.challenge3"),
        t("aiDelivery.challenge4"),
      ],
    },
    {
      title: t("casestudy.result"),
      content: [
        t("aiDelivery.result1"),
        t("aiDelivery.result2"),
        t("aiDelivery.result3"),
        t("aiDelivery.result4"),
        t("aiDelivery.result5"),
      ],
    },
  ];

  const technologies = [
    "LLM",
    "AI Harness",
    "MCP",
    "Skill-packs",
    "Context Engineering",
    "Python",
    "TypeScript",
    "Tool Orchestration",
  ];

  return (
    <CaseStudyPage
      title={t("projects.aiDelivery.title")}
      subtitle="Skill-packs / Context Structuring / AI Harness"
      sections={sections}
      technologies={technologies}
    />
  );
}
