"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Database, Cpu, Brain } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.ai.title"),
      subtitle: t("projects.ai.subtitle"),
      description: t("projects.ai.description"),
      icon: <Brain className="h-6 w-6" />,
      technologies: [
        "LLM",
        "AI Agents",
        "RAG",
        "Knowledge Graph",
        "MCP",
        "Semantic Search",
        "Docker",
        "GitLab Integration",
      ],
      metrics: [
        t("projects.ai.metric1"),
        t("projects.ai.metric2"),
        t("projects.ai.metric3"),
      ],
      slug: "ai-research",
    },
    {
      title: t("projects.aiDelivery.title"),
      subtitle: t("projects.aiDelivery.subtitle"),
      description: t("projects.aiDelivery.description"),
      icon: <Brain className="h-6 w-6" />,
      technologies: [
        "LLM",
        "AI Harness",
        "Skill-packs",
        "MCP",
        "Context Engineering",
        "Python",
      ],
      metrics: [
        t("projects.aiDelivery.metric1"),
        t("projects.aiDelivery.metric2"),
        t("projects.aiDelivery.metric3"),
      ],
      slug: "ai-delivery",
    },
    {
      title: t("projects.tax.title"),
      subtitle: t("projects.tax.subtitle"),
      description: t("projects.tax.description"),
      icon: <Database className="h-6 w-6" />,
      technologies: [
        "SAP",
        "PostgreSQL",
        "ClickHouse",
        "REST API",
        "Airflow",
        "Python",
        "Microservices",
      ],
      metrics: [
        t("projects.tax.metric1"),
        t("projects.tax.metric2"),
        t("projects.tax.metric3"),
      ],
      slug: "tax-monitoring",
    },
    {
      title: t("projects.schema.title"),
      subtitle: t("projects.schema.subtitle"),
      description: t("projects.schema.description"),
      icon: <Cpu className="h-6 w-6" />,
      technologies: ["XSD", "JSON Schema", "Python", "Automation"],
      metrics: [
        t("projects.schema.metric1"),
        t("projects.schema.metric2"),
      ],
      slug: "schema-automation",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("projects.title")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("projects.subtitle")}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group flex h-full flex-col border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  {project.metrics && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <Badge
                          key={metric}
                          variant="secondary"
                          className="text-xs"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs font-normal">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex w-full items-center justify-center rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                  >
                    {t("projects.viewCaseStudy")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
