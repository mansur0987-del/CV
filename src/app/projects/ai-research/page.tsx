"use client";

import { CaseStudyPage } from "@/components/case-study";
import { useLanguage } from "@/lib/language-context";

export default function AIResearchPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("casestudy.problem"),
      content: t("ai.problem"),
    },
    {
      title: t("casestudy.context"),
      content: t("ai.context"),
    },
    {
      title: t("casestudy.myRole"),
      content: [
        t("ai.role1"),
        t("ai.role2"),
        t("ai.role3"),
        t("ai.role4"),
        t("ai.role5"),
      ],
    },
    {
      title: t("casestudy.architecture"),
      content: t("ai.arch"),
    },
    {
      title: t("casestudy.solution"),
      content: [
        t("ai.solution1"),
        t("ai.solution2"),
        t("ai.solution3"),
        t("ai.solution4"),
        t("ai.solution5"),
      ],
    },
    {
      title: t("casestudy.challenges"),
      content: [
        t("ai.challenge1"),
        t("ai.challenge2"),
        t("ai.challenge3"),
        t("ai.challenge4"),
      ],
    },
    {
      title: t("casestudy.result"),
      content: [
        t("ai.result1"),
        t("ai.result2"),
        t("ai.result3"),
        t("ai.result4"),
      ],
    },
  ];

  const technologies = [
    "LLM",
    "AI Agents",
    "RAG",
    "Knowledge Graph",
    "MCP",
    "Semantic Search",
    "Automated Documentation",
    "Docker",
    "GitLab Integration",
  ];

  return (
    <CaseStudyPage
      title={t("projects.ai.title")}
      subtitle="Graph RAG / AI Agents / MCP / Knowledge Graph"
      sections={sections}
      technologies={technologies}
    />
  );
}
