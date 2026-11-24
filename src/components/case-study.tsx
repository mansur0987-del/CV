"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

interface CaseStudySection {
  title: string;
  content: string | string[];
}

interface CaseStudyProps {
  title: string;
  subtitle: string;
  sections: CaseStudySection[];
  technologies: string[];
  flow?: string[];
}

export function CaseStudyPage({
  title,
  subtitle,
  sections,
  technologies,
  flow,
}: CaseStudyProps) {
  const { t } = useLanguage();
  return (
    <div className="relative mx-auto max-w-3xl px-6 py-32">
      {/* Fixed back button - left side, near the text */}
      <div className="fixed top-20 left-6 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-background/90 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("casestudy.back")}
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {t("casestudy.label")}
        </p>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mb-12 text-lg text-muted-foreground">{subtitle}</p>
      </motion.div>

      {flow && (
        <figure className="mb-12 rounded-lg border border-border/50 bg-muted/20 p-5">
          <figcaption className="mb-4 font-semibold">{t("case.flow")}</figcaption>
          <ol className="grid gap-2 sm:grid-cols-5">
            {flow.map((step, index) => (
              <li key={step} className="rounded-md border border-border/60 bg-background p-3 text-sm">
                <span className="mb-1 block text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">{t("case.flow.note")}</p>
        </figure>
      )}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="mb-4 text-2xl font-bold">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="space-y-2">
                {section.content.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">{section.content}</p>
            )}
          </motion.div>
        ))}

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: sections.length * 0.1 }}
        >
          <h2 className="mb-4 text-2xl font-bold">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
