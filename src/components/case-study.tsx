"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CaseStudySection {
  title: string;
  content: string | string[];
}

interface CaseStudyProps {
  title: string;
  subtitle: string;
  sections: CaseStudySection[];
  technologies: string[];
}

export function CaseStudyPage({
  title,
  subtitle,
  sections,
  technologies,
}: CaseStudyProps) {
  return (
    <div className="relative mx-auto max-w-3xl px-6 py-32">
      {/* Fixed back button - right side, closer to content */}
      <div className="fixed top-20 right-6 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-background/90 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Case Study
        </p>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mb-12 text-lg text-muted-foreground">{subtitle}</p>
      </motion.div>

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
