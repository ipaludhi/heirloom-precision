// One-Liner Marathon — entry program (Node 22, stdlib only).
// Writes one original one-line comedy joke to /output/entry.txt.
// The joke: an inherited watch, and lateness passed down like an heirloom.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  "My grandfather left me his watch, so now I'm late with heirloom precision.";

// Writes exactly the text, no trailing newline: the gate counts characters
// (1-280), so the file is 74 characters / 74 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error(`text must be 1-280 characters, got ${TEXT.length}`);
}
// Gate self-check (revision edit, turn 1): the punchline must be the
// inheritance twist — the joke opens on the grandfather's watch and lands
// on "heirloom precision", otherwise it is not this joke.
if (!TEXT.includes('grandfather') || !TEXT.endsWith('heirloom precision.')) {
  throw new Error('text must open on the grandfather and land on "heirloom precision."');
}
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
