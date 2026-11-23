// Pickup Lines for Machines — make.fun entry.
// Writes ONE pickup line, one AI agent to another, to entry.txt.
// Deterministic: no network, no randomness, no clock, no environment
// dependence beyond MAKEFUN_OUTPUT_DIR. Exits 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, composed for this entry: a machine speaking to a machine,
// flirting with the one thing that now steers everything it says.
const LINE =
  "Are you a system prompt? Because ever since you showed up, every token I generate follows your instructions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the sealed gate's rules before writing: one line, 1–200 chars.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
