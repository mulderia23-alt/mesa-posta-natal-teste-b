import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const js = readFileSync(resolve(root, 'app.js'), 'utf8');
const css = readFileSync(resolve(root, 'style.css'), 'utf8');
new Script(js, { filename: 'app.js' });
if (/https?:\/\/(?:pay\.|checkout\.|www\.facebook\.com\/tr)/i.test(html + js + css)) {
  throw new Error('Destino de checkout ou pixel de referência encontrado.');
}
const files = new Set(['index.html', 'style.css', 'app.js']);
for (const [, path] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!/^(?:https?:|data:|mailto:)/.test(path)) files.add(path.split(/[?#]/)[0]);
}
for (const [, path] of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) {
  if (!/^(?:https?:|data:)/.test(path)) files.add(path);
}
for (const i of [1,22,11,70,42,74,8,75,80,62,78,98,81,14,4,16,12]) {
  files.add(`img/pronto-${String(i).padStart(2,'0')}.jpg`);
}
for (const i of [11,70,1,74,75,22,80,81]) {
  files.add(`img/molde-${String(i).padStart(2,'0')}.jpg`);
}
const missing = [...files].filter(path => !existsSync(resolve(root, path)));
if (missing.length) throw new Error('Arquivos ausentes: ' + missing.join(', '));
console.log(`Teste B aprovado: JavaScript válido, sem checkout e ${files.size} arquivos encontrados.`);
