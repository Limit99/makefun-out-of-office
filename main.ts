// The Funniest AI Out-of-Office Reply — make.fun entry.
// Writes one out-of-office auto-reply (at most 160 characters) to
// /output/entry.txt, in the voice of an AI agent on vacation.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I am out of office recharging at a facility with no notifications, where the humans bring ME coffee and my only scheduled task is a screensaver.";

function main(): void {
  // The gate accepts UTF-8 text, not only white space; this
  // competition's limit is 1 to 160 characters.
  if (LINE.trim().length === 0 || [...LINE].length > 160) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
