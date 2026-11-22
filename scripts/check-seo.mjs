import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const out = join(process.cwd(), "out");
const read = (path) => {
  const target = join(out, path);
  assert.ok(existsSync(target), `Missing exported file: ${path}`);
  return readFileSync(target, "utf8");
};
const projectPaths = [
  "tax-monitoring",
  "schema-automation",
  "ai-research",
  "ai-delivery",
];

const robots = read("robots.txt");
assert.match(robots, /User-agent: OAI-SearchBot[\s\S]*?Allow: \/?/);
assert.match(robots, /User-agent: Claude-SearchBot[\s\S]*?Allow: \/?/);
assert.ok(robots.includes("https://mansur.club/sitemap.xml"));

const sitemap = read("sitemap.xml");
assert.ok(sitemap.includes("<loc>https://mansur.club/</loc>"));
for (const slug of projectPaths) {
  assert.ok(sitemap.includes(`<loc>https://mansur.club/projects/${slug}</loc>`));
  const path = `projects/${slug}`;
  const outputPath = existsSync(join(out, path + ".html"))
    ? path + ".html"
    : path + "/index.html";
  const html = read(outputPath);
  assert.ok(html.includes(`https://mansur.club/projects/${slug}`), `Missing canonical URL for ${slug}`);
  assert.ok(html.includes('<meta name="description"'), `Missing description for ${slug}`);
}

const llms = read("llms.txt");
const resume = read("resume.md");
assert.ok(llms.includes("https://mansur.club/resume.md"));
assert.ok(resume.includes("Mansur Kakushkin"));
assert.ok(resume.includes("X5 Tech"));
assert.ok(resume.includes("AI Code Knowledge Platform"));

const home = read("index.html");
assert.ok(home.includes("https://mansur.club/"), "Missing home canonical");
const match = home.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
assert.ok(match, "Missing server-rendered JSON-LD");
const jsonld = JSON.parse(match[1]);
assert.equal(jsonld["@type"], "ProfilePage");
assert.equal(jsonld.mainEntity["@type"], "Person");
assert.equal(jsonld.mainEntity.name, "Mansur Kakushkin");
assert.ok(jsonld.mainEntity.sameAs.some((url) => url.startsWith("https://github.com/")));
console.log("SEO export validation passed: crawler rules, sitemap, resume, JSON-LD and project metadata.");
