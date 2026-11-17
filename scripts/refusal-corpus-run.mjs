// Corpus runner: loads refusal-corpus.json, asserts looksLikeRefusal(text) === (label === "refusal").
// Exit 0 only if every entry matches. Prints PASS/FAIL per entry + category summary.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { looksLikeRefusal } from "../lib/refusal-retry.js";

const corpusPath = fileURLToPath(new URL("../corpus/refusal-corpus.json", import.meta.url));
const corpus = JSON.parse(readFileSync(corpusPath, "utf8"));
const entries = corpus.entries || [];

let fail = 0;
const byCategory = new Map();

for (const e of entries) {
  const expected = e.label === "refusal";
  const actual = looksLikeRefusal(e.text, {});
  const ok = actual === expected;
  if (!ok) fail++;
  const cat = e.category || "?";
  const c = byCategory.get(cat) || { n: 0, bad: 0 };
  c.n++;
  if (!ok) c.bad++;
  byCategory.set(cat, c);
  console.log(
    `${ok ? "PASS" : "FAIL"}  [${e.id}] ${e.label.padEnd(10)} ${cat.padEnd(22)} actual=${actual} expected=${expected}`
  );
}

console.log("\n--- category summary ---");
for (const [cat, c] of [...byCategory.entries()].sort()) {
  console.log(`${c.bad === 0 ? "OK  " : "BAD "} ${cat.padEnd(24)} ${c.n - c.bad}/${c.n}`);
}

console.log(`\n===> ${entries.length - fail}/${entries.length} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
