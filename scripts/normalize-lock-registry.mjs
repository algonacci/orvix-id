// Preserve locked versions/integrities while replacing the inaccessible legacy mirror.
import { readFileSync, writeFileSync } from 'node:fs';
for (const file of ['bun.lock', 'package-lock.json']) {
  const source = readFileSync(file, 'utf8');
  writeFileSync(file, source.replaceAll('https://europe-west1-npm.pkg.dev/lovable-core-prod/sandbox-npm-cache/', 'https://registry.npmjs.org/'));
}
