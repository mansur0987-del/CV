"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("experience.x5tech.company") || "X5 Tech",
      roles: [
        {
          role: t("experience.x5tech.senior.role"),
          period: t("experience.x5tech.senior.period"),
          location: t("experience.x5tech.senior.location"),
          highlights: [
            t("experience.x5tech.senior.highlight1"),
            t("experience.x5tech.senior.highlight2"),
            t("experience.x5tech.senior.highlight3"),
            t("experience.x5tech.senior.highlight4"),
            t("experience.x5tech.senior.highlight5"),
            t("experience.x5tech.senior.highlight6"),
            t("experience.x5tech.senior.highlight7"),
          ],
        },
        {
          role: t("experience.x5tech.analyst.role"),
          period: t("experience.x5tech.analyst.period"),
          location: t("experience.x5tech.analyst.location"),
          highlights: [
            t("experience.x5tech.analyst.highlight1"),
            t("experience.x5tech.analyst.highlight2"),
            t("experience.x5tech.analyst.highlight3"),
            t("experience.x5tech.analyst.highlight4"),
            t("experience.x5tech.analyst.highlight5"),
            t("experience.x5tech.analyst.highlight6"),
            t("experience.x5tech.analyst.highlight7"),
            t("experience.x5tech.analyst.highlight8"),
            t("experience.x5tech.analyst.highlight9"),
            t("experience.x5tech.analyst.highlight10"),
          ],
        },
      ],
      technologies: [
        "SAP",
        "PostgreSQL",
        "ClickHouse",
        "REST API",
        "Airflow",
        "Python",
        "SQL",
        "PlantUML",
        "BPMN",
      ],
    },
    {
      company: t("experience.extrum.company") || "Extrum",
      roles: [
        {
          role: t("experience.extrum.role"),
          period: t("experience.extrum.period"),
          location: t("experience.extrum.location"),
          highlights: [
            t("experience.extrum.highlight1"),
            t("experience.extrum.highlight2"),
            t("experience.extrum.highlight3"),
            t("experience.extrum.highlight4"),
            t("experience.extrum.highlight5"),
          ],
        },
      ],
      technologies: [
        "ClickUp",
        "SCRUM",
        "Draw.io",
        "Figma",
        "DBeaver",
        "Postman",
        "Docker",
      ],
    },
    {
      company: t("experience.smartauto.company") || "ООО Умная Автоматизация",
      roles: [
        {
          role: t("experience.smartauto.role"),
          period: t("experience.smartauto.period"),
          location: t("experience.smartauto.location"),
          highlights: [
            t("experience.smartauto.highlight1"),
            t("experience.smartauto.highlight2"),
            t("experience.smartauto.highlight3"),
            t("experience.smartauto.highlight4"),
            t("experience.smartauto.highlight5"),
          ],
        },
      ],
      technologies: [
        "Redmine",
        "SDLC",
        "Archi",
        "DBeaver",
        "PuTTY",
        "Postman",
        "Docker",
      ],
    },
    {
      company: "Sber",
      roles: [
        {
          role: t("experience.sber.role"),
          period: t("experience.sber.period"),
          location: t("experience.sber.location"),
          highlights: [
            t("experience.sber.highlight1"),
            t("experience.sber.highlight2"),
            t("experience.sber.highlight3"),
            t("experience.sber.highlight4"),
            t("experience.sber.highlight5"),
            t("experience.sber.highlight6"),
            t("experience.sber.highlight7"),
            t("experience.sber.highlight8"),
          ],
        },
      ],
      technologies: [
        "Python",
        "DSL",
        "Confluence",
        "Jira",
        "SCRUM",
        "Jenkins",
        "Grafana",
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("experience.title")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("experience.subtitle")}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 ml-4 hidden w-px bg-border md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{exp.company}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {exp.roles.map((roleData, roleIndex) => (
                    <div
                      key={roleIndex}
                      className={roleIndex > 0 ? "mt-6 pt-6 border-t border-border/30" : ""}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {roleData.role}
                          </h3>
                        </div>
                        <div className="flex flex-col gap-1 sm:items-end">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {roleData.period}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {roleData.location}
                          </div>
                        </div>
                      </div>
                      <ul className="mb-4 space-y-2">
                        {roleData.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/30">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
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
