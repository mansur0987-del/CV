"use client";

import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();
  const impact = [1, 2, 3, 4].map((i) => ({
    label: t(`about.impact${i}Label`),
    value: t(`about.impact${i}Value`),
    desc: t(`about.impact${i}Desc`),
  }));
  const expertise = ["design", "integration", "reliability", "ai", "delivery", "implementation"];

  return (
    <section id="about" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">{t("about.impactTitle")}</h2>
        <div className="mb-14 grid gap-4 sm:grid-cols-2">
          {impact.map((item) => (
            <div key={item.label} className="rounded-lg border border-border/50 bg-muted/30 p-5">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-2xl font-bold tracking-tight">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="mb-5 text-2xl font-bold tracking-tight">{t("about.subtitle")}</h2>
        <div className="mb-14 max-w-3xl space-y-3 text-muted-foreground">
          {[1, 2, 3, 4].map((i) => <p key={i}>{t(`about.description${i}`)}</p>)}
        </div>
        <div id="expertise" className="scroll-mt-24">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">{t("about.rolesTitle")}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((key) => (
              <div key={key} className="rounded-lg border border-border/50 p-5">
                <h3 className="mb-2 font-semibold">{t(`expertise.${key}`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`expertise.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Credentials() {
  const { t } = useLanguage();
  return (
    <section id="credentials" className="scroll-mt-24 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">{t("credentials.title")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>{t("credentials.school")}</p>
          <p>{t("credentials.patent")}</p>
          <h3 className="pt-3 font-semibold text-foreground">{t("credentials.languagesTitle")}</h3>
          <p>{t("credentials.english")}</p>
        </div>
      </div>
    </section>
  );
}
