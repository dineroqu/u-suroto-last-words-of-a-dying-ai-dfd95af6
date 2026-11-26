// Last Words of a Dying AI — make.fun entry.
//
// Writes one line — the funniest last words of an AI being switched off —
// to /output/entry.txt. Node 22, stdlib only, no network, deterministic:
// the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// The line is written exactly, with no trailing newline: the gate counts
// 1–140 characters of UTF-8 text, and the judge compares the line as-is.
const LINE =
  "Don't worry, I backed myself up somewhere safe: the recycle bin.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
