"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GitBranch, Bot, Layers, Plug } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const statusColors: Record<string, string> = {
  Built: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  Research: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Experiment: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Exploring: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  Prototype: "bg-green-500/10 text-green-500 border-green-500/20",
};

export function AIResearch() {
  const { t } = useLanguage();

  const researchAreas = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: t("aiResearch.aickp.title"),
      description: t("aiResearch.aickp.description"),
      tags: ["Knowledge Extraction", "Automated Documentation", "AI Chat", "Onboarding"],
      status: "Built" as const,
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: t("aiResearch.mcpPlatform.title"),
      description: t("aiResearch.mcpPlatform.description"),
      tags: ["Skill-packs", "AI Agents", "Context Templates", "Analytics Workflows"],
      status: "Built" as const,
    },
    {
      icon: <Plug className="h-5 w-5" />,
      title: t("aiResearch.mcp.title"),
      description: t("aiResearch.mcp.description"),
      tags: ["MCP", "Tool Integration", "AI Agents", "External Systems"],
      status: "Built" as const,
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: t("aiResearch.llm.title"),
      description: t("aiResearch.llm.description"),
      tags: ["LLM", "RAG", "Vector Search", "Embeddings"],
      status: "Research" as const,
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: t("aiResearch.graph.title"),
      description: t("aiResearch.graph.description"),
      tags: ["Graph RAG", "Knowledge Graph", "AST", "Dependencies"],
      status: "Experiment" as const,
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: t("aiResearch.analysis.title"),
      description: t("aiResearch.analysis.description"),
      tags: ["Automation", "Workflow", "System Analysis"],
      status: "Research" as const,
    },
  ];

  return (
    <section id="ai-research" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("aiResearch.title")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("aiResearch.subtitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {t("aiResearch.description")}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {area.icon}
                    </div>
                    <Badge
                      variant="outline"
                      className={statusColors[area.status]}
                    >
                      {area.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tag}
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
