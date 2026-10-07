
/* ===== CONFIGURE AQUI ===== */
const CHECKOUT_URL = ""; // Teste B: todos os botões permanecem dentro da página, sem checkout.
const PRECO = "39,90";        // preço do kit
const PRECO_DE = "";          // preço anterior REAL, ex: "47,00". Vazio = não mostra "de/por"
const OFERTA_ATE = "";        // data final REAL da promoção, ex: "2026-10-31". Vazio = faixa do topo sem data
const CNPJ = "";              // CNPJ ou nome do responsável, para o rodapé
/* Depoimentos: só textos REAIS de clientes, com autorização. Vazio = a seção não aparece */
/* Itens do kit e o preço de cada um VENDIDO SEPARADO. Use só valores pelos quais o item está realmente à venda avulso.
   "incluso" = sem preço avulso (não entra na soma). */
const ITENS = [["40 moldes de sousplat (34 cm)","R$ 47,00"],["35 moldes de jogo americano","R$ 47,00"],["20 moldes de porta-guardanapo e porta-copo","R$ 27,00"],["5 moldes de trilho de mesa","R$ 19,90"],["Guia de impressão e de montagem","incluso"],["Bônus 1: Guia de precificação","R$ 19,90"],["Bônus 2: Lista de materiais","R$ 14,90"],["Bônus 3: Mensagens para encomendas","R$ 19,90"],["Bônus 4: Etiquetas e tags de Natal","R$ 14,90"]];
const REVIEWS = [];
const RASCUNHO = false;      // true = mostra o aviso de rascunho no topo. Mude para false só quando os 100 moldes existirem

const M = [{"n": "Estrela de Natal", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Floco de Neve", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Guirlanda", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Ciranda de Pinheiros", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Flor do Natal", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Estrelas de Belém", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Corações Nórdicos", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Mandala Dourada", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Oval Clássico", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Nórdico Retangular", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Árvore de Natal", "t": "Jogo americano em formato", "d": "34 x 42 cm", "f": "4 folhas"}, {"n": "Estrela Grande", "t": "Jogo americano em formato", "d": "41 x 39 cm", "f": "6 folhas"}, {"n": "Sino de Natal", "t": "Jogo americano em formato", "d": "33 x 36 cm", "f": "4 folhas"}, {"n": "Guirlanda Redonda", "t": "Jogo americano", "d": "38 cm", "f": "4 folhas"}, {"n": "Porta-guardanapo Estrela", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Pinheiro", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Floco", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-copo Estrela", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Porta-copo Floco", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Trilho Estrela", "t": "Trilho de mesa", "d": "30 x 90 cm", "f": "8 folhas"}, {"n": "Pinheiros da Serra", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Noite Estrelada", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Corações de Natal", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Sinos de Belém", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Azevinho", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Bengalas Doces", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Presentes de Natal", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Bolas de Natal", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Luz de Velas", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Laços de Fita", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Cristal de Gelo", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Flocos Dançantes", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Coroa de Folhas", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Folhas ao Vento", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Rosácea", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Losangos Nórdicos", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Festão", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Raios de Luz", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Ondas de Inverno", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Luvas de Inverno", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Botas na Lareira", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Vila Natalina", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Bonecos de Neve", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Gorros do Noel", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Bandeirinhas", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Árvore e Estrela", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Sino e Azevinho", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Estrelas de Seis Pontas", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Constelação", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Coro de Anjos", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Presente e Laço", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Céu de Dezembro", "t": "Sousplat", "d": "34 cm", "f": "4 folhas"}, {"n": "Oval dos Pinheiros", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Oval dos Corações", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Oval Azevinho", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Oval dos Sinos", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Oval dos Flocos", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Retangular dos Pinheiros", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Retangular dos Presentes", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Retangular das Estrelas", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Retangular das Bengalas", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Vila de Natal", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Hexagonal Floco", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Hexagonal Estrela", "t": "Jogo americano", "d": "44 x 32 cm", "f": "6 folhas"}, {"n": "Redondo Poinsétia", "t": "Jogo americano", "d": "38 cm", "f": "4 folhas"}, {"n": "Ciranda de Sinos", "t": "Jogo americano", "d": "38 cm", "f": "4 folhas"}, {"n": "Redondo dos Laços", "t": "Jogo americano", "d": "38 cm", "f": "4 folhas"}, {"n": "Quadrado Laço de Presente", "t": "Jogo americano", "d": "36 x 36 cm", "f": "4 folhas"}, {"n": "Quadrado Nórdico", "t": "Jogo americano", "d": "36 x 36 cm", "f": "4 folhas"}, {"n": "Bota de Natal", "t": "Jogo americano em formato", "d": "31 x 41 cm", "f": "4 folhas"}, {"n": "Presente", "t": "Jogo americano em formato", "d": "34 x 34 cm", "f": "4 folhas"}, {"n": "Coração", "t": "Jogo americano em formato", "d": "34 x 28 cm", "f": "4 folhas"}, {"n": "Bola de Natal", "t": "Jogo americano em formato", "d": "30 x 34 cm", "f": "4 folhas"}, {"n": "Boneco de Neve", "t": "Jogo americano em formato", "d": "27 x 40 cm", "f": "4 folhas"}, {"n": "Casinha de Natal", "t": "Jogo americano em formato", "d": "30 x 38 cm", "f": "4 folhas"}, {"n": "Floco Hexagonal", "t": "Jogo americano em formato", "d": "34 x 39 cm", "f": "4 folhas"}, {"n": "Estrela de Oito Pontas", "t": "Jogo americano em formato", "d": "40 x 40 cm", "f": "6 folhas"}, {"n": "Gorro do Noel", "t": "Jogo americano em formato", "d": "34 x 38 cm", "f": "4 folhas"}, {"n": "Luva de Inverno", "t": "Jogo americano em formato", "d": "32 x 40 cm", "f": "4 folhas"}, {"n": "Biscoito de Gengibre", "t": "Jogo americano em formato", "d": "33 x 40 cm", "f": "4 folhas"}, {"n": "Anjo de Natal", "t": "Jogo americano em formato", "d": "40 x 38 cm", "f": "6 folhas"}, {"n": "Porta-guardanapo Coração", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Sino", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Bola", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Bota", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Casinha", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Boneco de Neve", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Luva", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-guardanapo Gorro", "t": "Porta-guardanapo", "d": "9 cm + tira", "f": "1 folha"}, {"n": "Porta-copo Pinheiro", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Porta-copo Coração", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Porta-copo Sino", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Porta-copo Azevinho", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Porta-copo Flor de Natal", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Porta-copo Presente", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Porta-copo Vela", "t": "Porta-copo", "d": "11 cm", "f": "1 folha"}, {"n": "Trilho dos Pinheiros", "t": "Trilho de mesa", "d": "30 x 90 cm", "f": "8 folhas"}, {"n": "Trilho dos Flocos", "t": "Trilho de mesa", "d": "30 x 90 cm", "f": "8 folhas"}, {"n": "Trilho das Guirlandas", "t": "Trilho de mesa", "d": "30 x 90 cm", "f": "8 folhas"}, {"n": "Trilho Nórdico", "t": "Trilho de mesa", "d": "30 x 90 cm", "f": "8 folhas"}];
const n2 = i => String(i + 1).padStart(2, "0");
const foto = i => `img/pronto-${n2(i)}.jpg`;

/* Dispara fn uma vez quando el entra na tela. Usa IntersectionObserver e, como garantia, rolagem e um temporizador,
   para nada ficar escondido em navegadores onde o observador não dispara. */
function aoVer(el, fn){ let feito = false, io = null, iv = 0;
  const run = () => { if (feito) return; const r = el.getBoundingClientRect(); if (r.top < innerHeight * 0.85 && r.bottom > 0) { feito = true;
    removeEventListener("scroll", run); removeEventListener("resize", run); clearInterval(iv); if (io) io.disconnect(); fn(); } };
  addEventListener("scroll", run, {passive:true}); addEventListener("resize", run); iv = setInterval(run, 600);
  if ("IntersectionObserver" in window) { io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) run(); }, {threshold:0}); io.observe(el); }
  run(); }

if (RASCUNHO) document.body.insertAdjacentHTML("afterbegin", '<div class="rascunho">RASCUNHO · os preços avulsos da oferta ainda não estão à venda · não publicar antes de resolver</div>');
/* Faixa do topo, preço e rodapé */
if (OFERTA_ATE) { const d = new Date(OFERTA_ATE + "T12:00:00");
  document.getElementById("topbar-txt").textContent = `OFERTA SOMENTE ATÉ ${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()} NESSA PÁGINA`; }
ITENS.filter(([n]) => /^Bônus \d/.test(n)).forEach(([n,v]) => { const el = document.getElementById("bn-val-" + n.match(/\d/)[0]);
  if (el) el.innerHTML = /\d/.test(v) ? `<small>vendido separado por</small><span class="bn-linha"><s>${v}</s><i aria-hidden="true">→</i><b>GRÁTIS no kit</b></span>` : `<span class="bn-linha"><b>INCLUSO no kit</b></span>`; });
/* Bônus: cartões entram em sequência */
(function(){ const g = document.querySelector(".bn-grid"); if (!g || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  g.classList.add("arm"); aoVer(g, () => g.classList.add("go")); })();
document.getElementById("preco").textContent = PRECO;
const num = t => { const m = String(t).match(/[\d.]+,\d+/); return m ? parseFloat(m[0].replace(".","").replace(",",".")) : 0; };
const brl = v => "R$ " + v.toFixed(2).replace(".",",");
const SOMA = ITENS.reduce((a,[,v]) => a + num(v), 0), VALOR = num(PRECO);
document.getElementById("tally-n").textContent = brl(SOMA);
document.getElementById("from").innerHTML = `No kit completo você não paga <s>${brl(SOMA)}</s>`;
document.getElementById("save").textContent = "-" + Math.round((1 - VALOR / SOMA) * 100) + "%";
document.getElementById("so-paga").innerHTML = `Você paga <b>apenas R$ ${PRECO}</b> e economiza ${brl(SOMA - VALOR)}`;
document.getElementById("rodape-cnpj").textContent = CNPJ ? `© 2026 Mesa Posta de Natal · ${CNPJ}` : "© 2026 Mesa Posta de Natal";

/* Amostras */
const grid = document.getElementById("rec-grid");
[0,21,10,69,41,73,7,74,79,61,77,97].forEach(i => { const m = M[i];
  grid.insertAdjacentHTML("beforeend", `<article class="rec"><img class="photo" src="${foto(i)}" alt="Simulação do modelo ${m.n}" width="760" height="760" loading="lazy"><h3>${m.n}</h3><p class="sauce">${m.t}</p><div class="meta"><span class="chip kcal">&nbsp;&nbsp;${m.d}</span><span class="chip days">&nbsp;&nbsp;${m.f}</span></div></article>`); });

/* Depoimentos */
if (REVIEWS.length) { const rt = document.getElementById("reviews-track"); document.getElementById("sec-reviews").hidden = false;
  REVIEWS.forEach(v => rt.insertAdjacentHTML("beforeend", `<article class="review"><div class="stars">★★★★★</div><p>“${v.texto}”</p><div class="who"><span class="av">${v.nome.trim()[0]}</span><div><b>${v.nome}</b><small>${v.info}</small></div></div></article>`));
  const inner = document.createElement("div"); inner.className = "rv-in"; [...rt.children].forEach(c => inner.appendChild(c));
  [...inner.children].forEach(c => { const d = c.cloneNode(true); d.setAttribute("aria-hidden","true"); inner.appendChild(d); }); rt.appendChild(inner); rt.classList.add("auto"); }

/* Resumo da oferta */
const check = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="currentColor" opacity=".15"/><path d="m6 10.2 2.7 2.7L14.2 7.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
ITENS
 .forEach(([a,b]) => document.getElementById("recap").insertAdjacentHTML("beforeend", `<li>${check}<span>${a}</span><span>${b}</span></li>`));

/* Para quem: cartões marcáveis */
(function(){
  const cards = [...document.querySelectorAll(".pq")], meter = [...document.querySelectorAll(".pq-meter i")], msg = document.getElementById("pq-msg"), cta = document.getElementById("pq-cta"), box = document.getElementById("pq-result");
  cards.forEach(c => { c.querySelector(".pq-img").style.backgroundImage = `url(img/pronto-${c.dataset.photo}.jpg)`;
    c.addEventListener("click", () => { c.setAttribute("aria-pressed", c.getAttribute("aria-pressed") === "true" ? "false" : "true"); update(); }); });
  const TXT = ["Toque nos cartões acima","1 de 4<small>Já vale a pena conhecer os moldes.</small>","2 de 4<small>A coleção foi pensada para você.</small>","3 de 4<small>Você vai aproveitar bastante os modelos.</small>","4 de 4!<small>Você é exatamente quem esses moldes vão ajudar.</small>"];
  function update(){ const n = cards.filter(c => c.getAttribute("aria-pressed") === "true").length;
    meter.forEach((m,i) => m.classList.toggle("on", i < n)); msg.innerHTML = TXT[n]; cta.hidden = n === 0; box.classList.toggle("full", n === 4); }
})();

/* Carrosséis automáticos: amostras, páginas do PDF e faixa final */
function marquee(track, cls){ const inner = document.createElement("div"); inner.className = cls; [...track.children].forEach(c => inner.appendChild(c));
  [...inner.children].forEach(c => { const d = c.cloneNode(true); d.setAttribute("aria-hidden","true"); inner.appendChild(d); }); track.appendChild(inner); track.classList.add("auto");
  track.addEventListener("touchstart", () => track.classList.add("paused"), {passive:true}); track.addEventListener("touchend", () => setTimeout(() => track.classList.remove("paused"), 1500), {passive:true}); }
(function(){ const g = document.getElementById("rec-grid"), m = document.getElementById("rec-marquee");
  [...g.children].forEach(c => { const d = c.cloneNode(true); d.setAttribute("aria-hidden","true"); g.appendChild(d); }); g.classList.add("marquee");
  m.addEventListener("touchstart", () => m.classList.add("paused"), {passive:true}); m.addEventListener("touchend", () => setTimeout(() => m.classList.remove("paused"), 1500), {passive:true}); })();
(function(){ const t = document.getElementById("pages-track");
  [10,69,0,73,74,21,79,80].forEach(i => { const m = M[i];
    t.insertAdjacentHTML("beforeend", `<figure class="slide" style="margin:0"><div class="page-frame real ad2"><div class="ad2-h"><b>${n2(i)}</b><span>${m.n}<small>${m.t} · ${m.d}</small></span></div><div class="ad2-g"><div><em>O molde</em><img src="img/molde-${n2(i)}.jpg" alt="Molde do modelo ${m.n}" width="760" height="760" loading="lazy"></div><div><em>Como fica</em><img src="${foto(i)}" alt="Simulação da peça pronta: ${m.n}" width="760" height="760" loading="lazy"></div></div></div></figure>`); }); })();
marquee(document.getElementById("pages-track"), "pm-in");
(function(){ const f = document.getElementById("fr-in"); const pecas = [[0,"Sousplat"],[69,"Bota"],[73,"Boneco"],[13,"Jogo"],[77,"Gorro"],[21,"Sousplat"],[97,"Trilho"]];
  const html = pecas.map(([i,l]) => `<figure class="fj"><img src="${foto(i)}" alt="Simulação: ${M[i].n}" width="300" height="300" loading="lazy"><figcaption>${l}</figcaption></figure>`).join("");
  f.innerHTML = html + html.replaceAll('<figure class="fj">', '<figure class="fj" aria-hidden="true">'); })();

/* Oferta: itens entram um a um, a soma sobe e o preço do kit aparece */
(function(){ const card = document.querySelector(".price-card"); if (!card) return;
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches; if (reduce) return;
  const lis = [...card.querySelectorAll(".recap li")], n = document.getElementById("tally-n"); card.classList.add("arm"); n.textContent = brl(0);
  aoVer(card.querySelector(".recap"), () => { let tot = 0;
    lis.forEach((li,i) => setTimeout(() => { li.classList.add("in"); const from = tot; tot += num(li.lastElementChild.textContent); const to = tot, t0 = performance.now();
      (function tick(t){ const k = Math.min(1, (t - t0) / 150); n.textContent = brl(from + (to - from) * k); if (k < 1) requestAnimationFrame(tick); })(t0);
      if (i === lis.length - 1) setTimeout(() => { card.classList.add("cut"); n.textContent = brl(SOMA); }, 220); }, 100 + i * 130)); }); })();

/* Final e garantia: entradas animadas */
["section.final","#garantia"].forEach(sel => { const el = document.querySelector(sel); if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  el.classList.add("arm"); aoVer(el, () => el.classList.add("go")); });

/* Teste B sem checkout: os botões exibem a oferta nesta página. */
document.querySelectorAll(".js-checkout").forEach(b => b.classList.add("js-go"));
document.querySelectorAll(".js-go").forEach(a => { a.addEventListener("click", e => { e.preventDefault();
  const t = document.querySelector(".price-card") || document.getElementById("oferta");
  const go = () => { const r = t.getBoundingClientRect(); const y = window.scrollY + r.top - Math.max(16, (window.innerHeight - r.height) / 2); window.scrollTo({top: Math.max(0, y), behavior: "smooth"}); };
  go(); setTimeout(() => { const r = t.getBoundingClientRect(); if (Math.abs(r.top - Math.max(16, (window.innerHeight - r.height) / 2)) > 8) go(); }, 900);
  t.classList.remove("flash"); void t.offsetWidth; t.classList.add("flash"); }); });
