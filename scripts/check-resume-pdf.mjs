import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const browser = process.env.CV_CHROME || "google-chrome";
const dir = mkdtempSync(join(tmpdir(), "cv-print-"));
try {
  for (const [html, sections, scope] of [
    ["resume-print.html", ["Professional summary", "Core skills", "Professional experience", "Education and credentials", "Languages"], "13 legal entities"],
    ["resume-print-ru.html", ["Профессиональный профиль", "Ключевые навыки", "Опыт работы", "Образование и достижения", "Языки"], "13 юридических лиц"],
  ]) {
    const published = process.argv.includes("--published");
    const pdf = published
      ? resolve("out", html === "resume-print.html" ? "Mansur_Kakushkin_CV_EN.pdf" : "Mansur_Kakushkin_CV_RU.pdf")
      : join(dir, html.replace(".html", ".pdf"));
    if (!published) execFileSync(browser, ["--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer", "--user-data-dir=" + join(dir, html), "--print-to-pdf=" + pdf, pathToFileURL(resolve("public", html)).href], { stdio: "ignore" });
    const info = execFileSync("pdfinfo", [pdf], { encoding: "utf8" });
    assert.match(info, /^Pages:\s+1\s*$/m, html + " must fit on one page");
    assert.match(info, /^Page size:.*A4/m, html + " must use A4");
    const text = execFileSync("pdftotext", [pdf, "-"], { encoding: "utf8" }).replace(/\s+/g, " ");
    for (const token of ["Kakushkin.mansur@gmail.com", "X5 Tech", "AICKP", "PostgreSQL", "RNCP Level 6", "RU2732071C1", "B2", "UML", scope]) assert.ok(text.includes(token), html + " missing extractable " + token);
    let previous = -1;
    for (const section of sections) {
      const position = text.indexOf(section);
      assert.ok(position > previous, html + " section order: " + section);
      previous = position;
    }
    console.log(html + ": one A4 page, searchable text and section order validated");
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
