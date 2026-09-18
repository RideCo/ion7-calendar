#!/usr/bin/env node
/**
 * Post-build step: inject `standalone: false` into the compiled component
 * definitions in `dist/`.
 *
 * Why this is needed:
 * This library is built with Angular 15, whose compiler treats `standalone:
 * false` as the implicit default and therefore omits the field from the
 * emitted `ɵɵdefineComponent(...)` output (only `standalone: true` was ever
 * emitted pre-v19). Consumers on Angular 19+, where `standalone` defaults to
 * `true`, then treat these NgModule-declared components as standalone, which
 * breaks them.
 *
 * Adding `standalone: false` to the component decorators in `src/` documents
 * the intent but is not enough on its own — the Angular 15 compiler strips it.
 * This step writes the field into the compiled output so every consumer gets a
 * correct package without having to patch node_modules themselves.
 *
 * This can be removed once the library is built with Angular 19+, which emits
 * `standalone: false` natively (tracked as a follow-up).
 */

const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'dist', 'components');

if (!fs.existsSync(componentsDir)) {
  console.error(`add-standalone-false: dist components not found at ${componentsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.js'));

let patched = 0;
for (const file of files) {
  const filePath = path.join(componentsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('ɵɵdefineComponent')) {
    continue;
  }

  // Only inject when the runtime component definition itself is missing the
  // flag. The Angular 15 compiler DOES emit `standalone: false` into the
  // `ɵsetClassMetadata` reflection block, but NOT into `ɵɵdefineComponent`,
  // which is what the runtime reads. So we must scope the check to the
  // `ɵɵdefineComponent({ ... })` call and not the whole file (otherwise the
  // metadata occurrence would make us skip the real, required injection).
  const patched_content = content.replace(
    /ɵɵdefineComponent\(\{(?![^})]*standalone:)/g,
    'ɵɵdefineComponent({ standalone: false,'
  );

  if (patched_content !== content) {
    fs.writeFileSync(filePath, patched_content, 'utf8');
    patched++;
    console.log(`add-standalone-false: patched ${file}`);
  }
}

console.log(`add-standalone-false: complete (${patched} file(s) patched)`);
