"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Contact CTA */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            {t("footer.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            {t("footer.description")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:Kakushkin.mansur@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Kakushkin.mansur@gmail.com
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("hero.name")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/mansur0987-del"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mansur-kakushkin-00a399235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
