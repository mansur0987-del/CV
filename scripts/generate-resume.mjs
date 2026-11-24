import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const inline = (s) => escape(s).replace(/https:\/\/[^\s|]+/g, (url) => '<a href="' + url + '">' + url + '</a>');
const css = `*{box-sizing:border-box}body{font:14px/1.38 Arial,"Liberation Sans",sans-serif;color:#181818;background:#fff;max-width:186mm;margin:24px auto;padding:0 12px}h1{font-size:25px;line-height:1.1;margin:0 0 4px}h2{font-size:15px;border-bottom:1px solid #aaa;padding-bottom:2px;margin:12px 0 4px;break-after:avoid}h3{font-size:14px;margin:7px 0 2px;break-after:avoid}p{margin:2px 0}ul{margin:2px 0;padding-left:16px}li{margin:1px 0;break-inside:avoid}.subtitle{font-weight:bold;font-size:15px}.contacts{font-size:12px;overflow-wrap:anywhere}a{color:inherit;text-decoration:none}.actions{margin-bottom:16px}.actions a{text-decoration:underline}button{padding:7px 10px;cursor:pointer}@page{size:A4;margin:12mm}@media print{body{font:11pt/1.28 Arial,"Liberation Sans",sans-serif;max-width:none;margin:0;padding:0}h1{font-size:20pt;margin-bottom:3pt}h2{font-size:12pt;margin:9pt 0 4pt;padding-bottom:1pt}h3{font-size:11pt;margin:6pt 0 2pt}p{margin:1pt 0}ul{padding-left:13pt;margin:1pt 0}li{margin:1pt 0}.subtitle{font-size:11pt}.contacts{font-size:10pt}.actions{display:none}}`;

function render(md, lang) {
  const ru = lang === "ru";
  const title = ru ? "Мансур Какушкин — резюме" : "Mansur Kakushkin — CV";
  const filename = ru ? "resume-print-ru.html" : "resume-print.html";
  let list = false;
  const lines = [];
  for (const line of md.trim().split("\n")) {
    if (!line.startsWith("- ") && list) { lines.push("</ul>"); list = false; }
    if (line.startsWith("- ")) {
      if (!list) { lines.push("<ul>"); list = true; }
      lines.push("<li>" + inline(line.slice(2)) + "</li>");
    } else if (line.startsWith("### ")) lines.push("<h3>" + inline(line.slice(4)) + "</h3>");
    else if (line.startsWith("## ")) lines.push("<h2>" + inline(line.slice(3)) + "</h2>");
    else if (line.startsWith("# ")) lines.push("<h1>" + inline(line.slice(2)) + "</h1>");
    else if (line.startsWith("**")) lines.push('<p class="subtitle">' + inline(line.replaceAll("**", "")) + "</p>");
    else if (line.trim()) lines.push('<p' + (/^LinkedIn:|@/.test(line) ? ' class="contacts"' : '') + '>' + inline(line) + '</p>');
  }
  if (list) lines.push("</ul>");
  return '<!doctype html>\n<html lang="' + lang + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>' + title + '</title><meta name="description" content="' + title + '"><link rel="canonical" href="https://mansur.club/' + filename + '"><style>' + css + '</style></head><body><nav class="actions"><a href="/">' + (ru ? "Портфолио" : "Portfolio") + '</a> · <button onclick="window.print()">' + (ru ? "Печать / Сохранить в PDF" : "Print / Save as PDF") + '</button></nav><main>\n' + lines.join("\n") + '\n</main></body></html>\n';
}

const en = readFileSync("public/resume.md", "utf8");
const ru = readFileSync("public/resume-ru.md", "utf8");
const outputs = { "public/resume.txt": en, "public/resume-print.html": render(en, "en"), "public/resume-print-ru.html": render(ru, "ru") };
for (const [path, content] of Object.entries(outputs)) {
  if (process.argv.includes("--check")) assert.equal(readFileSync(path, "utf8"), content, path + " is stale; run node scripts/generate-resume.mjs");
  else writeFileSync(path, content);
}
