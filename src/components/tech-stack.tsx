"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  Zap,
  Monitor,
  Server,
  Brain,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function TechStack() {
  const { t } = useLanguage();

  const categories = [
    {
      name: t("techStack.backend"),
      icon: <Database className="h-5 w-5" />,
      technologies: ["Python", "FastAPI", "PostgreSQL", "ClickHouse", "Redis", "Tarantool"],
    },
    {
      name: t("techStack.integration"),
      icon: <Zap className="h-5 w-5" />,
      technologies: ["REST API", "Kafka", "Airflow"],
    },
    {
      name: t("techStack.frontend"),
      icon: <Monitor className="h-5 w-5" />,
      technologies: ["React", "JavaScript", "Node.js", "Flutter"],
    },
    {
      name: t("techStack.infrastructure"),
      icon: <Server className="h-5 w-5" />,
      technologies: ["Docker", "Kubernetes", "Grafana"],
    },
    {
      name: t("techStack.ai"),
      icon: <Brain className="h-5 w-5" />,
      technologies: [
        "LLM",
        "RAG",
        "Graph RAG",
        "Vector Search",
        "Knowledge Graph",
        "MCP",
        "AI Agents",
        "Cognee",
        "Memgraph",
        "Graph MCP",
      ],
    },
    {
      name: t("techStack.tools"),
      icon: <Wrench className="h-5 w-5" />,
      technologies: ["PlantUML", "Confluence", "Postman", "DBeaver", "SQL"],
    },
  ];

  return (
    <section id="tech" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("techStack.title")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("techStack.subtitle")}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <CardTitle className="text-base">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
