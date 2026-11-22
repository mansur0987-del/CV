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

The SEO check reads the generated `out/` directory, so run it after building. CI runs lint, build and SEO checks for `dev` pushes and pull requests to `master`.

## Content and search visibility

- Site content and translations: `src/lib/language-context.tsx`
- Home page and page metadata: `src/app/page.tsx`, `src/app/layout.tsx`
- Case studies: `src/app/projects/*/page.tsx`
- Case-study SEO metadata: `src/app/projects/*/layout.tsx`
- Crawler rules: `public/robots.txt`
- Sitemap: `public/sitemap.xml`
- AI-readable site map: `public/llms.txt`
- Text resume: `public/resume.md`
- Structured data: JSON-LD `ProfilePage` and `Person` in the root layout

When updating career facts, keep the visible page, structured data and Markdown resume consistent. Search crawler access does **not** guarantee search-engine indexing or recommendations.

## Agent guidance

Coding agents should read [AGENTS.md](./AGENTS.md). [CLAUDE.md](./CLAUDE.md) imports the same instructions.

## Deployment

The build exports to `out/`; `amplify.yml` contains the Amplify build settings. Production changes are merged from `dev` into `master` after validation.
