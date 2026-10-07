import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script, createContext, runInContext } from 'node:vm';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const js = readFileSync(resolve(root, 'app.js'), 'utf8');
const css = readFileSync(resolve(root, 'style.css'), 'utf8');
new Script(js, { filename: 'app.js' });
const checkout='https://pay.wiapy.com/mXwAt-yOyxfN';
const destinations=[...html.matchAll(/href="(https:\/\/pay\.[^"]+)"/g)].map(m=>m[1]);
if(destinations.length!==1||destinations[0]!==checkout||!js.includes(`const CHECKOUT_URL = "${checkout}"`)) throw new Error('Checkout diferente do aprovado.');
if(!js.includes('const PRECO = "27,90"')||!html.includes('<span id="preco">27,90</span>')) throw new Error('Preço diferente de R$27,90.');
const trackingScripts=[];
const trackingContext=createContext({window:{},location:{hostname:'mesa-natal.example'},atob:value=>Buffer.from(value,'base64').toString('binary'),document:{createElement:()=>({attributes:{},setAttribute(name,value){this.attributes[name]=value;}}),head:{appendChild:script=>trackingScripts.push(script)}}});
const head=html.split('</head>')[0];
for(const [,script] of head.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) if(script.trim()) runInContext(script,trackingContext,{timeout:1000});
const pixelScripts=trackingScripts.filter(script=>script.src==='https://cdn.utmify.com.br/scripts/pixel/pixel.js');
const utmScripts=trackingScripts.filter(script=>script.src==='https://cdn.utmify.com.br/scripts/utms/latest.js');
const metaScripts=trackingScripts.filter(script=>script.src==='https://connect.facebook.net/en_US/fbevents.js');
if(trackingScripts.length!==3||pixelScripts.length!==1||utmScripts.length!==1||metaScripts.length!==1||typeof trackingContext.window.fbq!=='function'||trackingContext.window.pixelId!=='6abeca713d660345970bf7e3') throw new Error('Pixel incorreto, ausente ou duplicado.');
if(trackingScripts.some(script=>!script.async||!script.defer)||!Object.hasOwn(utmScripts[0].attributes,'data-utmify-prevent-xcod-sck')||!Object.hasOwn(utmScripts[0].attributes,'data-utmify-prevent-subids')) throw new Error('Configuração UTMify incompleta.');
trackingScripts.length=0;trackingContext.location.hostname='127.0.0.1';
for(const [,script] of head.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) if(script.trim()) runInContext(script,trackingContext,{timeout:1000});
if(trackingScripts.length!==1||trackingScripts[0].src!=='https://cdn.utmify.com.br/scripts/utms/latest.js') throw new Error('Pixel deve evitar o endpoint de desenvolvimento no localhost.');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if(new Set(ids).size!==ids.length) throw new Error('IDs duplicados.');
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
console.log(`Teste B aprovado: JavaScript válido, R$27,90 e checkout corretos, pixel exclusivo sem duplicação e ${files.size} arquivos encontrados.`);
