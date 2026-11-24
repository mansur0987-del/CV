import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const output = resolve(process.argv.includes("--public") ? "public" : "out");
assert.ok(existsSync(output), "Build the website before exporting PDFs (or pass --public for local development).");
const dir = mkdtempSync(join(tmpdir(), "cv-export-"));
const resumes = [
  ["resume-print.html", "Mansur_Kakushkin_CV_EN.pdf", "CV_Eng_v1.pdf"],
  ["resume-print-ru.html", "Mansur_Kakushkin_CV_RU.pdf", "CV_Rus_v1.pdf"],
];
try {
  // A system browser is used locally and in GitHub CI.
  // Amplify uses the pinned Amazon Linux-compatible browser distribution.
  const executable = process.env.CV_CHROME;
  let worker;
  if (!executable) {
    const tools = process.env.CV_PDF_TOOLS;
    assert.ok(tools, "Set CV_CHROME or CV_PDF_TOOLS (see README).");
    worker = join(resolve(tools), "export-cv.mjs");
    writeFileSync(worker, `import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";
const jobs = JSON.parse(process.argv[2]);
const browser = await puppeteer.launch({ args: chromium.args, executablePath: await chromium.executablePath(), headless: "shell" });
try {
  for (const [source, pdf] of jobs) {
    const page = await browser.newPage();
    try {
      await page.setContent(readFileSync(source, "utf8"), { waitUntil: "load" });
      await page.addStyleTag({ content: "@media print { body { font-family: Arial, 'Liberation Sans', 'Open Sans', sans-serif; } }" });
      await page.evaluate(() => document.fonts.ready);
      await page.pdf({ path: pdf, format: "A4", preferCSSPageSize: true, displayHeaderFooter: false, printBackground: true, scale: 1 });
    } finally { await page.close(); }
  }
} finally { await browser.close(); }
`);
    execFileSync(process.execPath, [worker, JSON.stringify(resumes.map(([html, name]) => [resolve("public", html), join(dir, name)]))], { stdio: "inherit", timeout: 120000 });
  }
  for (const [html, name] of resumes) {
    const pdf = join(dir, name);
    if (executable) {
      const profile = join(dir, name + "-profile");
      mkdirSync(profile);
      execFileSync(executable, ["--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer", "--user-data-dir=" + profile, "--print-to-pdf=" + pdf, pathToFileURL(resolve("public", html)).href], { stdio: "ignore", timeout: 60000 });
    }
    const raw = readFileSync(pdf).toString("latin1");
    assert.ok(raw.startsWith("%PDF-"), name + " must be an actual PDF");
    assert.equal((raw.match(/\/Type\s*\/Page\b/g) || []).length, 1, name + " must fit on a single page");
    assert.ok(raw.includes("/ToUnicode"), name + " must include searchable text mappings");
  }
  // Publish only after both PDFs pass validation.
  for (const [, name, legacy] of resumes) {
    copyFileSync(join(dir, name), join(output, name));
    copyFileSync(join(dir, name), join(output, legacy));
    console.log("Published one-page PDF: " + join(output, name));
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
