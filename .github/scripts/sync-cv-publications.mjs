#!/usr/bin/env node
// Regenerates the `publications` array in assets/json/resume.json from
// _bibliography/papers.bib so the CV page stays in sync with the publications page.
//
// Optional per-entry overrides in papers.bib:
//   cv_date={YYYY-MM-DD}  -> overrides the year/month-derived release date
//   cv_summary={text}     -> short blurb shown under the entry on the CV page
//
// Run: node .github/scripts/sync-cv-publications.mjs

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const BIB_PATH = path.join(ROOT, "_bibliography", "papers.bib");
const RESUME_PATH = path.join(ROOT, "assets", "json", "resume.json");

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function parseEntries(bib) {
  // Normalise line endings so entry/field boundaries are easy to match, and append a
  // trailing newline so the last entry has the same terminator as the others.
  const text = bib.replace(/\r\n/g, "\n") + "\n";
  // Entries look like: @article{key,\n  field={value},\n  ...\n}\n, where a field value may
  // span multiple lines (e.g. abstract) as long as no line contains only "}".
  const entries = [];
  for (const match of text.matchAll(/@\w+\s*\{\s*([^,\s]+)\s*,([\s\S]*?)\n\}\n/g)) {
    const fields = {};
    for (const field of match[2].matchAll(/^[ \t]*([A-Za-z_][A-Za-z0-9_]*)[ \t]*=[ \t]*\{([\s\S]*?)\}[ \t]*,?[ \t]*$/gm)) {
      fields[field[1].toLowerCase()] = field[2].replace(/\s+/g, " ").trim();
    }
    entries.push(fields);
  }
  return entries;
}

function monthNumber(value) {
  if (!value) return "";
  const month = value.trim().toLowerCase();
  if (/^\d+$/.test(month)) return month.padStart(2, "0");
  const index = MONTHS.indexOf(month.slice(0, 3));
  return index === -1 ? "" : String(index + 1).padStart(2, "0");
}

function toPublication(fields) {
  if (!fields.title) return null;
  // "To be published: ..." entries keep the status on the publisher line on the CV.
  const name = fields.title.replace(/[{}]/g, "").replace(/\s+/g, " ").trim();
  const unpublished = /^to be published:\s*/i.test(name);
  return {
    name: name.replace(/^to be published:\s*/i, ""),
    publisher: fields.journal || fields.booktitle || (unpublished ? "To be published" : ""),
    releaseDate: fields.cv_date || [fields.year, monthNumber(fields.month)].filter(Boolean).join("-"),
    url: fields.url || (fields.doi ? `https://doi.org/${fields.doi}` : ""),
    summary: fields.cv_summary || "",
  };
}

const publications = parseEntries(fs.readFileSync(BIB_PATH, "utf8")).map(toPublication).filter(Boolean);
if (!publications.length) throw new Error(`No publications parsed from ${BIB_PATH}`);

const resume = fs.readFileSync(RESUME_PATH, "utf8");
const body = publications.map((publication) => "\t\t" + JSON.stringify(publication, null, "\t").replace(/\n/g, "\n\t\t")).join(",\n");
const updated = resume.replace(/("publications": \[)[\s\S]*?(\n\t\])/, (_, open, close) => `${open}\n${body}${close}`);
JSON.parse(updated); // never write a resume.json that no longer parses

if (updated === resume) {
  console.log(`resume.json already up to date (${publications.length} publications)`);
} else {
  fs.writeFileSync(RESUME_PATH, updated);
  console.log(`Updated ${publications.length} publications in assets/json/resume.json`);
}
