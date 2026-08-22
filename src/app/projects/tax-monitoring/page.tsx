"use client";

import { CaseStudyPage } from "@/components/case-study";
import { useLanguage } from "@/lib/language-context";

export default function TaxMonitoringPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("casestudy.problem"),
      content: t("tax.problem"),
    },
    {
      title: t("casestudy.context"),
      content: t("tax.context"),
    },
    {
      title: t("casestudy.myRole"),
      content: [
        t("tax.role1"),
        t("tax.role2"),
        t("tax.role3"),
        t("tax.role4"),
        t("tax.role5"),
      ],
    },
    {
      title: t("casestudy.architecture"),
      content: t("tax.arch"),
    },
    {
      title: t("casestudy.solution"),
      content: [
        t("tax.solution1"),
        t("tax.solution2"),
        t("tax.solution3"),
        t("tax.solution4"),
        t("tax.solution5"),
      ],
    },
    {
      title: t("casestudy.challenges"),
      content: [
        t("tax.challenge1"),
        t("tax.challenge2"),
        t("tax.challenge3"),
        t("tax.challenge4"),
      ],
    },
    {
      title: t("casestudy.result"),
      content: [
        t("tax.result1"),
        t("tax.result2"),
        t("tax.result3"),
        t("tax.result4"),
      ],
    },
  ];

  const technologies = [
    "SAP",
    "PostgreSQL",
    "ClickHouse",
    "REST API",
    "Airflow",
    "Python",
    "SQL",
    "Microservices",
    "Docker",
  ];

  return (
    <CaseStudyPage
      title={t("projects.tax.title")}
      subtitle="SAP / FNS / Microservices / PostgreSQL / ClickHouse / Airflow"
      sections={sections}
      technologies={technologies}
    />
  );
}
