<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Portfolio-specific guidance

- This repository builds the public professional website at https://mansur.club/.
- Stack: Next.js 16 App Router / React 19 / TypeScript / static HTML export. No server endpoints or dynamic rendering are required.
- Run `npm ci`, `npm run lint`, `npm run build`, then `node scripts/check-seo.mjs` after changes.
- Treat `src/lib/language-context.tsx` and the rendered case-study pages as sources of truth for publicly claimed career facts. Do not invent employment, qualifications, outcomes or availability.
- Keep `public/resume.txt` and `public/resume.md`, `public/llms.txt`, the homepage JSON-LD, and page metadata synchronized with visible CV content.
- Preserve canonical URLs under https://mansur.club/ and include new public case-study routes in `public/sitemap.xml`.
- The site has an existing `dev` branch for validation. Changes should pass CI before merging into `master`.
