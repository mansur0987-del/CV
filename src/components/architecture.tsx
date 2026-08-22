"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Lightbulb,
  GitBranch,
  FileText,
  Layers,
  Code,
  Database,
  Cpu,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Architecture() {
  const { t } = useLanguage();

  const steps = [
    { icon: <Lightbulb className="h-5 w-5" />, label: t("architecture.step1") },
    { icon: <GitBranch className="h-5 w-5" />, label: t("architecture.step2") },
    { icon: <FileText className="h-5 w-5" />, label: t("architecture.step3") },
    { icon: <Layers className="h-5 w-5" />, label: t("architecture.step4") },
    { icon: <Code className="h-5 w-5" />, label: t("architecture.step5") },
    { icon: <Database className="h-5 w-5" />, label: t("architecture.step6") },
    { icon: <Cpu className="h-5 w-5" />, label: t("architecture.step7") },
    { icon: <Cpu className="h-5 w-5" />, label: t("architecture.step8") },
    { icon: <CheckCircle className="h-5 w-5" />, label: t("architecture.step9") },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("architecture.title")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("architecture.subtitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("architecture.description")}
          </p>
        </motion.div>

        {/* Process flow */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-border md:block" />

          <div className="flex flex-col items-center gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  {step.icon}
                </div>
                <span className="mt-2 text-sm font-medium">{step.label}</span>
                {index < steps.length - 1 && (
                  <ArrowDown className="mt-4 h-5 w-5 text-muted-foreground/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
