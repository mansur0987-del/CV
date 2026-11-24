import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

execFileSync(process.execPath, ["scripts/generate-resume.mjs", "--check"], { stdio: "inherit" });
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
const resume = read("resume.txt");
assert.ok(!resume.trimStart().startsWith("<!DOCTYPE html"), "Resume must not be HTML fallback");
assert.ok(llms.includes("https://mansur.club/resume.txt"));
assert.ok(resume.includes("Mansur Kakushkin"));
assert.ok(resume.includes("X5 Tech"));
assert.ok(resume.includes("AI Code Knowledge Platform"));

const printResume = read("resume-print.html");
assert.ok(printResume.includes("Mansur Kakushkin"));
assert.ok(printResume.includes("Professional experience"));
assert.ok(printResume.includes("Print / Save as PDF"));
const printResumeRu = read("resume-print-ru.html");
for (const content of [resume, printResume, printResumeRu, read("resume-ru.md")]) {
  assert.ok(content.includes("B2"), "Missing English B2");
  assert.ok(content.includes("RNCP Level 6"), "Missing RNCP status");
  assert.ok(/13 (?:legal entities|юридических лиц)/.test(content), "Missing current platform scope");
  assert.ok(!/9 (?:legal entities|юридических лиц)|nine legal entities/.test(content), "Stale scope");
}
assert.ok(printResume.includes("qualification in progress"));
assert.ok(printResumeRu.includes("в процессе получения"));
for (const html of [printResume, printResumeRu]) {
  assert.match(html, /@page\{size:A4/);
  assert.ok(!/<(?:table|img|svg|canvas)\b/i.test(html), "Resume must stay text-based and single-column");
  assert.equal((html.match(/<h1>/g) || []).length, 1);
}
const home = read("index.html");
assert.ok(home.includes("Senior Systems Analyst"), "Missing consistent role title");
assert.ok(home.includes("Core expertise"));
assert.ok(home.includes("Mansur_Kakushkin_CV_EN.pdf"), "Missing direct PDF download");
for (const name of ["Mansur_Kakushkin_CV_EN.pdf", "Mansur_Kakushkin_CV_RU.pdf"]) {
  const pdf = readFileSync(join(out, name));
  assert.ok(pdf.subarray(0, 5).toString() === "%PDF-", "Invalid published PDF: " + name);
}
assert.ok(home.includes("13 legal entities"));
assert.ok(home.includes("B2"));
assert.ok(home.includes("Education &amp; credentials") || home.includes("Education & credentials"));
assert.ok(home.includes("https://mansur.club/"), "Missing home canonical");
const match = home.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
assert.ok(match, "Missing server-rendered JSON-LD");
const jsonld = JSON.parse(match[1]);
assert.equal(jsonld["@type"], "ProfilePage");
assert.equal(jsonld.mainEntity["@type"], "Person");
assert.equal(jsonld.mainEntity.name, "Mansur Kakushkin");
assert.ok(jsonld.mainEntity.sameAs.some((url) => url.startsWith("https://github.com/")));
console.log("SEO export validation passed: crawler rules, sitemap, resume, JSON-LD and project metadata.");
