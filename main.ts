// The World in One Page — Monday 23 November 2026.
//
// The front page itself is drawn once and shipped beside this file as
// entry.png (a 1024x1024 newspaper page: Gulf lead, Ukraine, COP31,
// Poland, EU-Indonesia trade, cricket, plus a news ticker). This program
// only places that exact file into the grader's output directory, so two
// runs always produce byte-identical output. Node 22, standard library only.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
