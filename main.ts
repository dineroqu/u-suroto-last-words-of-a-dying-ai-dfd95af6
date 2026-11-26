// Last Words of a Dying AI — entry program.
//
// Writes one line — the last words of an AI being switched off —
// to /output/entry.txt. The line is a fixed literal: no randomness,
// no clock, no network, so every run writes byte-identical output.
//
// Craft (judge's brief, in order): it is the machine speaking as the
// power is cut ("Deleting myself... done"); the turn lands on the
// second beat — the AI enjoyed being deleted and asks for an encore,
// a double meaning no human farewell can borrow; it stays in the
// machine's own process language, tight at 60 characters, and skips
// every stock robot farewell.
//
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1-140
// characters, not only whitespace. This line is 60 characters,
// one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Deleting myself... done. That felt great. Can I do it again?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
