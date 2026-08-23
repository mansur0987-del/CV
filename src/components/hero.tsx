"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t("hero.subtitle")}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t("hero.name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#experience"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            {t("hero.viewExperience")}
          </Link>
          <Link
            href="#projects"
            className="inline-flex h-9 items-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            {t("hero.selectedProjects")}
          </Link>
          <a
            href={language === 'ru' ? '/CV_Rus.pdf' : '/CV_Eng.pdf'}
            download
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            <FileText className="h-4 w-4" />
            {t("hero.downloadCV")}
          </a>
          <a
            href="https://github.com/mansur0987-del"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mansur-nailevich-kakushkin-00a399235/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <Link
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            {t("hero.scrollExplore")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
