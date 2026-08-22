"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t, language } = useLanguage();
  const roles = t("about.roles").split(",");

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
        </motion.div>

        {/* Roles grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
      </div>
    </section>
  );
}
