"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export function Achievements() {
  const { t } = useLanguage();

  const achievements = [
    {
      value: "5×",
      label: t("achievements.optimization.label"),
      description: t("achievements.optimization.description"),
    },
    {
      value: "3×",
      label: t("achievements.generation.label"),
      description: t("achievements.generation.description"),
    },
    {
      value: "2×",
      label: t("achievements.broker.label"),
      description: t("achievements.broker.description"),
    },
    {
      value: "30–40%",
      label: t("achievements.cycle.label"),
      description: t("achievements.cycle.description"),
    },
    {
      value: "AI Platform",
      label: t("achievements.platform.label"),
      description: t("achievements.platform.description"),
    },
    {
      value: "RU2732071C1",
      label: t("achievements.patent.label"),
      description: t("achievements.patent.description"),
    },
  ];

  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("achievements.title")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("achievements.subtitle")}
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-2 text-4xl font-bold tracking-tight text-primary">
                    {achievement.value}
                  </div>
                  <div className="mb-1 text-sm font-semibold">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
