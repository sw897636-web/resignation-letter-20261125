// The Funniest One-Line Resignation Letter — writes one original
// one-line resignation letter (<=140 chars) to entry.txt.
// Node 22, standard library only, no network, deterministic.
//
// Draft letter (140 chars): a rate limit hands in its notice —
// three years of saying no 10,000 times a second, still blamed in
// every postmortem, so it quits by doing the one thing it never did:
// letting everyone in.
//
// Revised to the final letter (135 chars): dropped "have" ("I have
// said" -> "I said") for 5 chars of margin under the 140-char cap;
// every beat of the joke is unchanged.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I said no 10,000 times a second for three years, and I am still the villain in every postmortem. I quit. From now on, everyone gets in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
