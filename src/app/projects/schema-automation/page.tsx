"use client";

import { CaseStudyPage } from "@/components/case-study";
import { useLanguage } from "@/lib/language-context";

export default function SchemaAutomationPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("casestudy.problem"),
      content: t("schema.problem"),
    },
    {
      title: t("casestudy.context"),
      content: t("schema.context"),
    },
    {
      title: t("casestudy.myRole"),
      content: [
        t("schema.role1"),
        t("schema.role2"),
        t("schema.role3"),
        t("schema.role4"),
      ],
    },
    {
      title: t("casestudy.architecture"),
      content: t("schema.arch"),
    },
    {
      title: t("casestudy.solution"),
      content: [
        t("schema.solution1"),
        t("schema.solution2"),
        t("schema.solution3"),
        t("schema.solution4"),
      ],
    },
    {
      title: t("casestudy.challenges"),
      content: [
        t("schema.challenge1"),
        t("schema.challenge2"),
        t("schema.challenge3"),
      ],
    },
    {
      title: t("casestudy.result"),
      content: [
        t("schema.result1"),
        t("schema.result2"),
        t("schema.result3"),
        t("schema.result4"),
        t("schema.result5"),
      ],
    },
  ];

  const technologies = ["XSD", "JSON Schema", "Python", "Automation", "XML", "Code Generation"];

  return (
    <CaseStudyPage
      title={t("projects.schema.title")}
      subtitle="XSD → JSON Schema → Python"
      sections={sections}
      technologies={technologies}
    />
  );
}
