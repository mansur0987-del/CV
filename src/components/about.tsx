"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();
  const roles = t("about.roles").split(",");

  const impact = [
    { label: t("about.impact1Label"), value: t("about.impact1Value"), desc: t("about.impact1Desc") },
    { label: t("about.impact2Label"), value: t("about.impact2Value"), desc: t("about.impact2Desc") },
    { label: t("about.impact3Label"), value: t("about.impact3Value"), desc: t("about.impact3Desc") },
    { label: t("about.impact4Label"), value: t("about.impact4Value"), desc: t("about.impact4Desc") },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.title")}
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("about.subtitle")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 space-y-4 text-muted-foreground"
        >
          <p>{t("about.description1")}</p>
          <p>{t("about.description2")}</p>
          <p>{t("about.description3")}</p>
          <p>{t("about.description4")}</p>
        </motion.div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            {t("about.rolesTitle")}
          </p>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <Badge key={role} variant="secondary" className="text-sm">
                {role}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Selected Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            {t("about.impactTitle")}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {impact.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border/50 bg-muted/30 p-5"
              >
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-2xl font-bold tracking-tight">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
