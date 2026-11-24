import { mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday — one-line commit message from a cheerful AI agent
// about to break production on a Friday afternoon.
// The joke: total confidence, zero rollback plan, shipped at 4:59pm.
const LINE =
  "feat: ship to prod on Friday, all tests green on my machine and the rollback plan is just vibes";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
