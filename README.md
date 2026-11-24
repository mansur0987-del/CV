# Mansur Kakushkin — CV and portfolio

Source code for [mansur.club](https://mansur.club/), a public professional portfolio for a Senior Systems Analyst working in enterprise architecture, integrations and AI engineering.

## Technology

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS. The site uses **static export** (`output: "export"`), deployed with AWS Amplify; it does not require a runtime Next.js server.

## Development and checks

```bash
npm ci
npm run dev
npm run lint
npm run build
node scripts/check-seo.mjs
```

The SEO check reads the generated `out/` directory, so run it after building. CI runs lint, build, SEO and one-page PDF extraction checks for `dev` pushes and pull requests to `master`.

## Content and search visibility

- Site content and translations: `src/lib/language-context.tsx`
- Home page and page metadata: `src/app/page.tsx`, `src/app/layout.tsx`
- Case studies: `src/app/projects/*/page.tsx`
- Case-study SEO metadata: `src/app/projects/*/layout.tsx`
- Crawler rules: `public/robots.txt`
- Sitemap: `public/sitemap.xml`
- AI-readable site map: `public/llms.txt`
- Text resumes: `public/resume.txt`, `public/resume.md` (EN), `public/resume-ru.md` (RU)
- Current printable CVs: `public/resume-print.html` (EN), `public/resume-print-ru.html` (RU); use browser Print / Save as PDF. Older binary PDFs are retained at legacy URLs for compatibility and are not the current CV.
- Structured data: JSON-LD `ProfilePage` and `Person` in the root layout

The English and Russian Markdown CVs are the one-page resume source files. After editing them, run `node scripts/generate-resume.mjs` to regenerate both print pages and the English text version. SEO validation checks that generated files are current. For PDF export use A4, scale 100%, and disable browser headers and footers. To validate actual PDF pagination and text extraction, install Chromium/Chrome and Poppler (pdfinfo, pdftotext), then run `CV_CHROME=chromium node scripts/check-resume-pdf.mjs` (defaults to google-chrome). Detailed project case studies remain on the portfolio. When updating career facts, keep the visible page, structured data and Markdown resume consistent. Search crawler access does **not** guarantee search-engine indexing or recommendations.

## Agent guidance

Coding agents should read [AGENTS.md](./AGENTS.md). [CLAUDE.md](./CLAUDE.md) imports the same instructions.

## Deployment

The build exports to `out/`; `amplify.yml` contains the Amplify build settings. Production changes are merged from `dev` into `master` after validation.
