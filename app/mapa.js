// Mapa de videogame (tema "mapa pixel" escolhido): canvas em baixa resolução + botões acessíveis por cima.
// Fases = módulos principais do currículo, achadas pelo número (data-n), nunca pela posição. Ilhas bônus guardam as
// aulas opcionais (ou módulos com bonus: true), ligadas à fase por ponte tracejada. Nenhuma fase é trancada.
import { estado, esc, CURSO, principais, aulaPorId, idTexto, INICIO, ICONE, barraTopo, barraCelular, rodape, reduzMovimento, aoSair } from './base.js';
import { carregarModulo } from './dados.js';
import { listaAulasHTML } from './telas.js';
import { mapaModuloHTML, ligarMapaModulo } from './mapa-modulo.js';
import { devidas } from './revisao.js';

const MUNDO_NOMES = ['Floresta', 'Vila', 'Caverna', 'Deserto', 'Vulcão', 'Nuvens', 'Castelo'];
const MUNDO_IDS = ['floresta', 'vila', 'caverna', 'deserto', 'vulcao', 'nuvens', 'castelo'];
const FASES = principais;
const NF = FASES.length;
const BIO = FASES.map(m => Math.max(0, MUNDO_IDS.indexOf(m.mundo)));
// Ilhas bônus: aulas opcionais de um módulo, ou módulo inteiro marcado bonus: true (fica depois da fase anterior).
const ILHAS = [];
FASES.forEach((m, i) => { const opc = m.aulas.filter(a => a.opcional); if (opc.length) ILHAS.push({ pai: i, m, aulas: opc, modulo: null }); });
CURSO.forEach((m, k) => {
  if (!m.bonus) return;
  const ant = CURSO.slice(0, k).filter(x => !x.bonus).pop();
  const pai = Math.max(0, FASES.indexOf(ant));
  if (!ILHAS.some(il => il.pai === pai)) ILHAS.push({ pai, m, aulas: m.aulas, modulo: m });
});
ILHAS.sort((a, b) => a.pai - b.pai);
const ilhaDe = i => ILHAS.find(il => il.pai === i);

let jaAbriu = false;  // a abertura com íris só roda na primeira vez

function situacao() {
  const ultima = estado.ultima && aulaPorId(estado.ultima) ? estado.ultima : INICIO;
  const mu = aulaPorId(ultima).m;
  let atual = FASES.indexOf(mu);
  if (atual < 0) atual = Math.max(0, FASES.indexOf(CURSO.slice(0, CURSO.indexOf(mu)).filter(x => !x.bonus).pop()));
  const est = FASES.map((m, i) => {
    const nucleo = m.aulas.filter(a => !a.opcional);
    if (i === atual) return 'atual';
    if (nucleo.length && nucleo.every(a => estado.feitas[a.id])) return 'feito';
    if (i < atual || nucleo.some(a => estado.feitas[a.id])) return 'aberto';
    return 'futuro';
  });
  const moedas = Object.keys(estado.feitas).filter(id => aulaPorId(id)).length;
  const concluidas = FASES.filter(m => { const nu = m.aulas.filter(a => !a.opcional); return nu.length && nu.every(a => estado.feitas[a.id]); }).length;
  return { ultima, atual, est, moedas, concluidas };
}

export function telaMapa() {
  const s = situacao();
  const u = aulaPorId(s.ultima);
  const rev = devidas().length;
  const cont = `${estado.ultima ? 'Continuar' : 'Começar'}: ${esc(u.t)}`;
  return `${barraTopo('/')}
  <div id="hud" role="group" aria-label="Placar">
    <span class="h so-pc-mapa"><small>Mundo</small><b id="hMundo"></b></span>
    <span id="hPips" class="so-pc-mapa" aria-hidden="true"></span>
    <span class="h so-pc-mapa"><small>Moedas</small><canvas id="hMoeda" width="8" height="8" aria-hidden="true"></canvas><b id="hMoedas" aria-label="${s.moedas} aulas concluídas">000</b></span>
    <span class="h so-pc-mapa"><small>Fases</small><b id="hFases" aria-label="${s.concluidas} de ${NF} fases concluídas">${String(s.concluidas).padStart(2, '0')}/${NF}</b></span>
    <button class="hud-continuar so-cel-mapa" type="button" data-acao="continuar">${ICONE.seta}<span>${cont}</span></button>
    <button class="hud-revisao so-cel-mapa" type="button" data-acao="revisao" aria-label="Revisão de hoje: ${rev} ${rev === 1 ? 'pergunta' : 'perguntas'}">Revisão<b>${rev}</b></button>
  </div>
  <section id="abertura" aria-label="Início">
    <h1 id="logo" aria-label="Do zero ao agente"></h1>
    <p id="frase">${NF} fases até o seu agente. <span id="verbo">Clique</span> em uma<span class="so-pc-mapa"> para abrir</span>.</p>
    <div class="abertura-bts"><button id="continuar" class="so-pc-mapa" type="button" data-acao="continuar">${ICONE.seta}${cont}</button><button class="revisao-pc so-pc-mapa" type="button" data-acao="revisao">Revisão de hoje: ${rev}</button></div>
  </section>
  <main id="conteudo" class="mundo" aria-label="Mapa do curso" tabindex="-1">
    <canvas id="tela" aria-hidden="true"></canvas>
    <ol id="fases"></ol>
  </main>
  <canvas id="iris" aria-hidden="true"></canvas>
  <div class="k-veu"></div>
  <aside class="k-painel" aria-label="Aulas do módulo" aria-hidden="true"></aside>
  ${rodape('rodape-mapa')}
  ${barraCelular('/')}`;
}

/* ================= Desenho (sprites e peças, do tema escolhido) ================= */
const tela = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
const cl = (v, a, b) => (v < a ? a : v > b ? b : v);
const rnd = Math.round, flo = Math.floor, sq = Math.sqrt, abs = Math.abs, sin = Math.sin, cos = Math.cos, PI = Math.PI;
const hash = (x, y) => { let h = (x * 374761393 + y * 668265263) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
function ruido(x, y) {
  const a = flo(x), b = flo(y), f = x - a, g = y - b, u = f * f * (3 - 2 * f), v = g * g * (3 - 2 * g);
  const p = hash(a, b), q = hash(a + 1, b), r = hash(a, b + 1), s = hash(a + 1, b + 1);
  return p + (q - p) * u + (r - p) * v + (p - q - r + s) * u * v;
}
const hex = h => { const n = parseInt(h.slice(1), 16); return (0xff000000 | ((n & 255) << 16) | (n & 0xff00) | (n >> 16)) >>> 0; };
const TINTA = '#1b1440';
const BI = [
  { t: '#46b450', t2: '#3aa24c', u: '#74d862', b: '#a6ee78', c: '#a06a42', c2: '#7a4d32', d: '#2c7a3e', tr: '#d4d873', fx: '#2f8f47', h: 7 },
  { t: '#a3d44c', t2: '#90c445', u: '#c9e96a', b: '#e2f78f', c: '#b5804e', c2: '#8c5c3a', d: '#5e9a34', tr: '#f2e6aa', fx: '#7ab03c', h: 6 },
  { t: '#7472a4', t2: '#676594', u: '#9593c0', b: '#b4b2da', c: '#4a4672', c2: '#37335a', d: '#37335a', tr: '#a8a6cc', fx: '#54527e', h: 8 },
  { t: '#f6d67e', t2: '#efc86a', u: '#ffeab0', b: '#fff4c8', c: '#cf9450', c2: '#a9713c', d: '#c8964c', tr: '#fff2cc', fx: '#ddae58', h: 6 },
  { t: '#553c50', t2: '#463244', u: '#745468', b: '#8c6a7e', c: '#30212f', c2: '#221624', d: '#1e1420', tr: '#856479', fx: '#b8361e', h: 7 },
  { t: '#ffffff', t2: '#eef6ff', u: '#dcebff', b: '#ffffff', c: '#c8dcfa', c2: '#a5beec', d: '#a5beec', tr: '#d4e4fb', fx: '#dcebff', h: 3 },
  { t: '#7058c8', t2: '#6049b6', u: '#9178e2', b: '#b09cf4', c: '#3e2e80', c2: '#2c2062', d: '#2c2062', tr: '#c9bcff', fx: '#5a44a8', h: 9 }
];
const BI32 = BI.map(b => { const o = {}; for (const k in b) o[k] = k === 'h' ? b[k] : hex(b[k]); return o; });
const AR = b => b >= 5;
const PAL = { k: TINTA, w: '#fffaf0', g: '#c3c4de', d: '#1c2a55', c: '#7ff6ff', y: '#ffd23f', Y: '#e89a12', o: '#ff7a45', O: '#c9481c', G: '#8b90b0', s: '#dfe3f0', t: '#8a5a34', T: '#5e3820' };
function spr(txt, pal) {
  const L = txt.trim().split(/\s+/), c = tela(L[0].length, L.length), g = c.getContext('2d');
  L.forEach((l, j) => { for (let i = 0; i < l.length; i++) { const col = l[i] !== '.' && ((pal && pal[l[i]]) || PAL[l[i]]); if (col) { g.fillStyle = col; g.fillRect(i, j, 1, 1); } } });
  return c;
}
const espelho = c => { const o = tela(c.width, c.height), g = o.getContext('2d'); g.translate(c.width, 0); g.scale(-1, 1); g.drawImage(c, 0, 0); return o; };
function contorna(c, cor) {
  const m = tela(c.width, c.height), g0 = m.getContext('2d');
  g0.drawImage(c, 0, 0); g0.globalCompositeOperation = 'source-in'; g0.fillStyle = cor; g0.fillRect(0, 0, c.width, c.height);
  const o = tela(c.width + 2, c.height + 2), g = o.getContext('2d');
  for (const [a, b] of [[0, 1], [2, 1], [1, 0], [1, 2]]) g.drawImage(m, a, b);
  g.drawImage(c, 1, 1);
  return o;
}
function balanca(s, amp) {
  const fr = [];
  for (let f = 0; f < 3; f++) {
    const c = tela(s.width + 4, s.height), g = c.getContext('2d');
    for (let j = 0; j < s.height; j++) { const k = 1 - j / s.height; g.drawImage(s, 0, j, s.width, 1, 2 + rnd((f - 1) * amp * k * k), j, s.width, 1); }
    fr.push(c);
  }
  return fr;
}
const disco = (r, cx, cy, ra, col) => { for (let d = -ra; d <= ra; d++) { const m = flo(sq(ra * ra - d * d) + .3); r(cx - m, cy + d, 2 * m + 1, 1, col); } };
const tri = (r, cx, y, h, k, c1, c2) => { for (let i = 0; i < h; i++) { const m = rnd(i * k); r(cx - m, y + i, m + 1, 1, c1); if (m) r(cx + 1, y + i, m, 1, c2 || c1); } };
function peca(w, h, fn, cor) {
  const c = tela(w, h), g = c.getContext('2d'), din = [];
  const r = (x, y, a, b, col) => { g.fillStyle = col; g.fillRect(x, y, a, b); };
  const f = new Proxy({}, { get: (_, k) => (...a) => din.push([k, ...a]) });
  fn(r, f, g);
  const o = contorna(c, cor || TINTA);
  o.din = din;
  return o;
}
function casa(r, f, x, b, w, h, c1, c2, pa, pe) {
  pa = pa || '#fff4d6'; pe = pe || '#e2c48f';
  const cx = x + (w >> 1), t = b - h, rh = (w >> 1) + 2;
  r(x, t, w, h, pa); r(x + w - 2, t, 2, h, pe);
  for (let i = 0; i < rh; i++) { r(cx - i, t - rh + 1 + i, i + 1, 1, c1); if (i) r(cx + 1, t - rh + 1 + i, i, 1, c2); }
  r(x - 1, t, w + 2, 1, c2);
  r(cx - 1, b - 6, 3, 6, '#7a4a2a'); r(cx - 1, b - 6, 1, 6, '#a86b3c');
  for (const a of [x + 2, x + w - 5]) { r(a, t + 3, 3, 3, '#6fbce8'); r(a, t + 3, 3, 1, '#c8ecff'); f.luz(a, t + 3, 3, 3); }
}
const cristal = (r, x, b, w, h, c1, c2, c3) => {
  const m = w >> 1, cx = x + m;
  for (let i = 0; i < h; i++) { const a = Math.min(m, rnd(i * .8)), y = b - h + i; r(cx - a, y, a + 1, 1, c1); if (a) r(cx + 1, y, a, 1, c2); if (a > 1) r(cx - a, y, 1, 1, c3); }
};
function torre(r, x, b, w, h, c1, c2, c3) {
  r(x, b - h, w, h, c1); r(x + w - 2, b - h, 2, h, c2); r(x, b - h, 1, h, c3);
  for (let i = 0; i < w; i += 3) r(x + i, b - h - 2, 2, 2, c1);
}

let SPR = null;  // sprites e peças: criados uma vez, na primeira montagem
function criarSprites() {
  const CAB_F = `.......yy....... .......yy....... .......kk....... ...kkkkkkkkkk... ..kwwwwwwwwwwk.. .kwwwwwwwwwwwgk. .kwddddddddddgk. .kwddddddddddgk. .kwddddddddddgk. .kwddddddddddgk. .kwwwwwwwwwwggk. ..kkkkkkkkkkkk.. ....kwwwwwwk.... ..kkkwoooowkkk.. .koookwoowkoook. .kookwwwwwwkook. ..kkkggggggkkk.. ....kggkkggk.... ....kggkkggk.... ....kkk..kkk....`;
  const CAB_L = `......yy........ ......yy........ ......kk........ ...kkkkkkkkkk... ..kwwwwwwwwwwk.. .kwwwwwwwwwwwgk. .kwwwwddddddddk. .kwwwwdccddccdk. .kwwwwdccddccdk. .kwwwwddddddddk. .kwwwwwwwwwwggk. ..kkkkkkkkkkkk.. .....kwwwwwk.... ....koowwwwk.... ....koowoowk.... ....koowwwwk.... .....kkggggk....`;
  const PERNAS = [`.....kgk.kgk.... .....kgk.kgk.... .....kkk.kkk....`, `....kgk...kgk... ...kgk.....kgk.. ...kkk.....kkk..`, `.....kgk.kgk.... .....kgk.kgk.... .....kkk.kkk....`, `......kgkgk..... ......kgkgk..... ......kkkkk.....`];
  const ROBO = { frente: spr(CAB_F), lado: PERNAS.map(p => spr(CAB_L + ' ' + p)) };
  ROBO.ladoE = ROBO.lado.map(espelho);
  const VERDE = { k: '#17452f', a: '#8fe36b', b: '#46b450', e: '#2c8644', t: '#8a5a34', T: '#5e3820' };
  const PINHO = { k: '#123a2e', a: '#62c47a', b: '#2f9a5a', e: '#1f7448', t: '#7a4d32' };
  const MACIEIRA = { k: '#3a5a1e', a: '#d4f07a', b: '#8fc93f', e: '#5e9a34', t: '#a06a42', T: '#7a4d32', r: '#e8483b' };
  const S_ARV = `.....kkkk..... ...kkaabbkk... ..kaaabbbbbk.. .kaabbbbbbbek. .kabbbbabbbek. kaabbbbbbbbeek kabbabbbbbbeek kabbbbbbbabeek .kbbbbbbbbeek. .kebbbbbbeeek. ..kkeeeeeekk.. ....kkttkk.... .....ktTk..... .....ktTk..... .....ktTk..... ....kkkkkk....`;
  const S_MAC = `.....kkkk..... ...kkaabbkk... ..kaaabbrbbk.. .kaabrbbbbbek. .kabbbbabbbek. kaabbbbbbbreek kabrabbbbbbeek kabbbbbrbabeek .kbbbbbbbbeek. .kebbrbbbeeek. ..kkeeeeeekk.. ....kkttkk.... .....ktTk..... .....ktTk..... ....kkkkkk....`;
  const S_PIN = `.....k..... ....kak.... ...kabek... ...kabek... ..kabbbek.. ..kkabekk.. ..kabbbek.. .kabbbbbek. .kkkabekkk. .kabbbbbek. kabbbbbbbek kkkkbbekkkk ....ktk.... ....ktk.... ....kkk....`;
  const S_PALMA = `...kkk...kkk... ..kaabk.kaabk.. .kabbbbkbbbbak. kabk.kabak.kbak .kk.kabbbak.kk. ...kabkTkbak... ...kk.kTk.kk... ......kTk...... .....kTk....... .....kTk....... .....kTk....... ....kTTk....... ....kTTk....... ....kTTk....... ...kTTTTk...... ...kkkkkk......`;
  const S_CACTO = `....k.... ...kak... .k.kbk... kakkbk.k. kbkkbkkak kbbbbkkbk .kkkbbbbk ...kbkkk. ...kbk... ...kbk... ...kbk... ...kkk...`;
  const S_PEDRA = `...kkk... ..kaabk.. .kaabbbk. kaabbbbek kabbbbeek .kkkkkkk.`;
  const S_MORTA = `...k...k... ...kk.kk... k...ktk...k kk..ktk..kk .kk.ktk.kk. ..kkttkkk.. ....ktk.... ....ktk.... ....ktTk... ....ktTk... ....ktTk... ...kktTkk.. ...kkkkkk..`;
  const S_CRIST = `...k... ..kak.. .kaabk. .kabbk. .kabbk. .kabek. .kabek. ..kek.. ...k...`;
  const S_AGULHA = `...k... ..kak.. ..kbk.. .kabk.. .kabek. .kabek. kaabbek kabbbek kkkkkkk`;
  const S_COG = `..kkk.. .koowk. kowoook kkkkkkk ..kwk.. ..kwk.. ..kkk..`;
  const S_CERCA = `.k...k...k... kmk.kmk.kmk.. kmkkkmkkkmkkk kmmmmmmmmmmmk kmkkkmkkkmkkk kmk.kmk.kmk..`;
  const MOEDA = [`..kkkk.. .kyyyyk. kywwyyYk kywyyyYk kyyyyyYk kyyyyYYk .kYYYYk. ..kkkk..`, `..kkkk.. ..kyyk.. .kwyyYk. .kwyyYk. .kyyyYk. .kyyYYk. ..kYYk.. ..kkkk..`, `...kk... ...kk... ...yk... ...yk... ...yk... ...Yk... ...kk... ...kk...`, `..kkkk.. ..kyyk.. .kyywyk. .kyywyk. .kyyyyk. .kYyyyk. ..kYYk.. ..kkkk..`].map(s => spr(s));
  const CADEADO = spr(`..kkkkk.. .kGGGGGk. .kGk.kGk. .kGk.kGk. kkkkkkkkk kyyyyyyYk kyyykyyYk kyyykyyYk kyyyyyYYk kYYYYYYYk kkkkkkkkk`);
  const SETA = spr(`..kkkkk.. ..kyyyk.. ..kyyyk.. kkkyyykkk kyyyyyyyk .kyyyyyk. ..kyyyk.. ...kyk... ....k....`);
  const SEMENTE = [`..... ..w.. .www. ..w.. .....`, `..w.. ..w.. wwwww ..w.. ..w..`].map(s => spr(s, { w: '#fff' }));
  const ARV = {
    folha: balanca(spr(S_ARV, VERDE), 1.8), pinho: balanca(spr(S_PIN, PINHO), 1.6), maca: balanca(spr(S_MAC, MACIEIRA), 1.8),
    palma: balanca(spr(S_PALMA, { k: '#1d5a3a', a: '#9fe86a', b: '#46b450', T: '#a06a42' }), 2.4)
  };
  const EST = {
    moita: spr(S_PEDRA, { k: '#17452f', a: '#8fe36b', b: '#46b450', e: '#2c8644' }),
    moitaV: spr(S_PEDRA, { k: '#3a5a1e', a: '#d4f07a', b: '#8fc93f', e: '#5e9a34' }),
    cog: spr(S_COG, { o: '#e8483b' }), cerca: spr(S_CERCA, { k: '#5e3820', m: '#c98f58' }),
    pedra: spr(S_PEDRA, { a: '#b4b2da', b: '#8a88b8', e: '#5e5c8c', k: '#2c2850' }),
    crist: spr(S_CRIST, { k: '#14406a', a: '#c4fbff', b: '#55d6f0', e: '#2a8fc4' }), cristR: spr(S_CRIST, { k: '#4c1a70', a: '#f4c4ff', b: '#c070f0', e: '#8a3cc0' }),
    agulha: spr(S_AGULHA, { a: '#b4b2da', b: '#8a88b8', e: '#5e5c8c', k: '#2c2850' }),
    cacto: spr(S_CACTO, { k: '#1d5a3a', a: '#9fe86a', b: '#46b450' }),
    pedraD: spr(S_PEDRA, { a: '#ffe3a0', b: '#d9a95c', e: '#a9713c', k: '#6e4a2a' }),
    morta: spr(S_MORTA, { k: '#140c18', t: '#3b2a2e', T: '#2a1c22' }), pedraV: spr(S_PEDRA, { a: '#8c6a7e', b: '#553c50', e: '#30212f', k: '#140c18' }),
    fada: spr(`..k.. .kak. kaaak .kak. ..k..`, { k: '#e8a820', a: '#ffe27a' })
  };
  // Uma peça de cenário por módulo, pelo número do módulo.
  const PECA = {
    '0': peca(38, 26, (r, f) => {
      tri(r, 13, 2, 22, .68, '#ff9d4d', '#e0642a');
      for (let i = 7; i < 22; i += 5) { const m = rnd(i * .68); r(13 - m, 2 + i, 2 * m + 1, 2, '#fff4d6'); }
      tri(r, 13, 12, 12, .42, '#4a2418', '#351a14');
      r(13, 0, 1, 3, '#7a4a2a');
      r(26, 22, 11, 3, '#8b86a8'); r(27, 21, 9, 1, '#dcd8ee'); r(28, 20, 7, 1, '#7a4a2a');
      f.chama(31, 19);
    }),
    '1': peca(34, 34, (r) => {
      r(15, 1, 4, 33, '#7a4a2a'); r(15, 1, 2, 33, '#a86b3c');
      const tab = (x, y, w, dir) => {
        r(x, y, w, 7, '#d49a5e'); r(x, y, w, 1, '#f0c48a'); r(x, y + 6, w, 1, '#a86b3c');
        r(x + 2, y + 2, w - 6, 1, '#5e3820'); r(x + 2, y + 4, w - 9, 1, '#5e3820');
        const a = dir > 0 ? x + w : x - 1, b = dir > 0 ? x + w + 1 : x - 2;
        r(a, y + 1, 1, 5, '#d49a5e'); r(b, y + 2, 1, 3, '#d49a5e');
      };
      tab(6, 3, 24, 1); tab(4, 12, 24, -1); tab(9, 21, 20, 1);
    }),
    '2': peca(40, 40, (r, f) => {
      r(16, 20, 8, 20, '#7a4a2a'); r(16, 20, 3, 20, '#a86b3c'); r(22, 20, 2, 20, '#5e3820'); r(13, 38, 14, 2, '#7a4a2a');
      disco(r, 20, 12, 12, '#2c8644'); disco(r, 9, 16, 8, '#2c8644'); disco(r, 31, 16, 8, '#2c8644');
      disco(r, 19, 10, 10, '#46b450'); disco(r, 9, 14, 6, '#46b450'); disco(r, 30, 14, 6, '#46b450');
      disco(r, 15, 7, 4, '#8fe36b'); disco(r, 7, 12, 2, '#8fe36b'); disco(r, 27, 11, 2, '#8fe36b');
      r(9, 21, 22, 11, '#d49a5e'); for (let y = 23; y < 32; y += 3) r(9, y, 22, 1, '#a86b3c');
      tri(r, 20, 13, 9, 1.5, '#e8483b', '#b8321f');
      r(12, 24, 4, 4, '#6fbce8'); f.luz(12, 24, 4, 4); r(23, 25, 5, 7, '#5e3820');
      r(7, 32, 26, 2, '#7a4a2a');
      for (let y = 34; y < 40; y += 2) r(28, y, 4, 1, '#d49a5e');
    }),
    '3': peca(48, 34, (r, f) => {
      casa(r, f, 24, 33, 21, 14, '#3f7fe0', '#2c5cb0');
      r(38, 8, 3, 7, '#8c5c3a'); f.fumaca(39, 6, .6);
      casa(r, f, 2, 33, 19, 12, '#e8483b', '#b8321f');
    }),
    '4': peca(42, 34, (r, f) => {
      r(2, 12, 38, 19, '#7a5a42');
      const cor = ['#e8483b', '#3f7fe0', '#ffd23f', '#46b450', '#ff7a45', '#c070f0'];
      for (const y of [14, 21]) for (let x = 3; x < 39; x++) if (hash(x, y) > .12) r(x, y + (hash(y, x) > .7 ? 1 : 0), 1, 6 - (hash(y, x) > .7 ? 1 : 0), cor[flo(hash(x, y + 3) * 6)]);
      for (const y of [20, 27]) r(2, y, 38, 1, '#4c3626');
      for (const x of [2, 12, 26, 36]) { r(x, 12, 4, 19, '#fff4d6'); r(x + 3, 12, 1, 19, '#e2c48f'); }
      r(18, 22, 6, 9, '#3a2410'); r(0, 10, 42, 3, '#fff4d6'); r(0, 12, 42, 1, '#e2c48f');
      tri(r, 21, 0, 10, 2, '#3f7fe0', '#2c5cb0');
      r(0, 31, 42, 1, '#fff4d6'); r(0, 32, 42, 2, '#c8ac7c');
      f.luz(18, 22, 6, 9, '#ffcf60');
    }),
    '5': peca(30, 42, (r, f) => {
      for (let i = 0; i < 26; i++) { const m = 5 + rnd(i * .22), y = 16 + i; r(15 - m, y, 2 * m + 1, 1, '#fff4d6'); r(15 + m - 2, y, 3, 1, '#e2c48f'); }
      tri(r, 15, 7, 10, .9, '#e8483b', '#b8321f');
      r(13, 34, 5, 8, '#7a4a2a'); r(14, 24, 3, 4, '#6fbce8'); f.luz(14, 24, 3, 4);
      f.helice(15, 15);
    }),
    '6': peca(52, 32, (r, f) => {
      const cx = 26;
      for (let i = 0; i < 31; i++) {
        const m = rnd(sq(1 - Math.pow(1 - (i + 1) / 31, 2)) * 25), j = i % 5 === 2 ? 1 : 0, y = i + 1;
        r(cx - m - j, y, 2 * m + 1 + j, 1, '#7c79a8'); r(cx - m - j, y, Math.max(2, m >> 1), 1, '#a09dc8'); r(cx + (m >> 1), y, m - (m >> 1) + 1, 1, '#55527f');
      }
      for (const [x, y] of [[12, 12], [34, 10], [24, 5], [40, 20], [8, 22]]) { r(x, y, 4, 1, '#55527f'); r(x + 1, y + 1, 2, 1, '#55527f'); }
      disco(r, cx, 21, 9, '#120c26'); r(cx - 9, 21, 19, 11, '#120c26');
      for (const k of [-6, -2, 3, 7]) { r(cx + k, 13 + (abs(k) >> 1), 2, 3, '#7c79a8'); r(cx + k, 16 + (abs(k) >> 1), 1, 1, '#7c79a8'); }
      r(9, 20, 2, 12, '#7a4a2a'); r(41, 20, 2, 12, '#7a4a2a');
      f.chama(10, 19); f.chama(42, 19);
    }),
    // 6B: cogumelos que brilham, o canto da caverna onde o Claude mora no dia a dia
    '6B': peca(40, 28, (r, f) => {
      const cog = (cx, b, ra, h, c1, c2) => {
        r(cx - 1, b - h, 3, h, '#fff4d6'); r(cx + 1, b - h, 1, h, '#e2c48f');
        for (let d = 0; d <= ra; d++) { const m = flo(sq(ra * ra - d * d) + .3); r(cx - m, b - h - d, 2 * m + 1, 1, d < 2 ? c2 : c1); }
        r(cx - (ra >> 1), b - h - (ra >> 1) - 1, 2, 2, '#ffffff'); r(cx + (ra >> 1), b - h - ra + 2, 1, 1, '#ffffff');
        f.luz(cx - 1, b - h - ra + 1, 3, 2, '#c8fbff');
      };
      cog(10, 27, 7, 8, '#55d6f0', '#2a8fc4'); cog(26, 27, 9, 11, '#c070f0', '#8a3cc0'); cog(36, 27, 3, 4, '#9ff0c8', '#3cc090');
      r(0, 26, 40, 2, '#55527f');
      f.brilho(26, 4); f.brilho(9, 10);
    }),
    '7': peca(38, 34, (r, f) => {
      cristal(r, 13, 30, 11, 30, '#a4f8ff', '#2fb8e0', '#ecffff');
      cristal(r, 3, 31, 9, 20, '#d4a4ff', '#9a5cf0', '#f4e4ff');
      cristal(r, 25, 31, 9, 22, '#ff9fe8', '#e05cc0', '#ffe4f8');
      cristal(r, 9, 33, 7, 12, '#9ff0c8', '#3cc090', '#e8fff4');
      cristal(r, 21, 33, 7, 14, '#ffe27a', '#e8a820', '#fffbe0');
      r(2, 32, 34, 2, '#55527f');
      f.luz(17, 10, 3, 18, '#c8fbff'); f.luz(6, 18, 2, 11, '#e8ccff'); f.luz(28, 16, 2, 13, '#ffd0f4');
      f.brilho(18, 4); f.brilho(6, 13); f.brilho(29, 10);
    }),
    '8': peca(56, 30, (r, f) => {
      for (let i = 0; i < 24; i++) { const m = rnd(sq(1 - Math.pow(1 - (i + 1) / 24, 2)) * 22), y = 3 + i; r(16 - m, y, 2 * m + 1, 1, '#7c79a8'); r(16 - m, y, m >> 1, 1, '#a09dc8'); r(16 + (m >> 1), y, m - (m >> 1) + 1, 1, '#55527f'); }
      r(8, 10, 16, 17, '#120c26'); r(6, 8, 3, 19, '#a86b3c'); r(23, 8, 3, 19, '#7a4a2a'); r(5, 6, 22, 3, '#d49a5e'); r(5, 8, 22, 1, '#a86b3c');
      r(0, 26, 56, 1, '#b4b2da'); for (let x = 1; x < 56; x += 4) r(x, 27, 2, 3, '#7a4a2a');
      disco(r, 41, 15, 6, '#ffcf33'); disco(r, 39, 13, 3, '#fff2a8');
      r(33, 16, 17, 7, '#8b90b0'); r(33, 16, 17, 1, '#c3c8e0'); r(33, 21, 17, 2, '#5f6488');
      r(36, 23, 3, 3, TINTA); r(44, 23, 3, 3, TINTA);
      f.brilho(42, 9);
    }),
    '9': peca(58, 28, (r, f) => {
      for (const x of [8, 47]) { r(x, 3, 3, 25, '#8c5c3a'); r(x, 3, 1, 25, '#b5804e'); r(x - 5, 5, 13, 2, '#b5804e'); for (const k of [-5, 7]) r(x + k, 3, 1, 2, '#6fbce8'); }
      f.cabo(3, 4, 54, 11); f.cabo(15, 4, 54, 7);
    }),
    '10': peca(54, 38, (r, f) => {
      const cx = 27;
      for (let i = 0; i < 30; i++) { const m = rnd(i * .88), y = 8 + i, z = i % 4 === 3; r(cx - m, y, m + 1, 1, z ? '#e8c06a' : '#ffe6a4'); if (m) r(cx + 1, y, m, 1, z ? '#b98a3e' : '#dcad58'); }
      disco(r, cx, 27, 3, '#3a2410'); for (let i = 0; i < 8; i++) { const m = 1 + (i >> 2); r(cx - m, 30 + i, 2 * m + 1, 1, '#3a2410'); }
      f.chave(cx - 5, 0); f.brilho(cx + 3, 2);
    }),
    '11': peca(46, 28, (r, f) => {
      r(1, 13, 44, 15, '#e0b86e'); r(1, 13, 44, 1, '#ffe6a4'); for (let x = 1; x < 45; x += 4) r(x, 10, 2, 3, '#e0b86e');
      for (let i = 0; i < 14; i++) r(flo(hash(i, 2) * 40) + 2, flo(hash(i, 5) * 12) + 15, 3, 1, '#c09450');
      r(14, 3, 18, 25, '#f2d08a'); r(30, 3, 2, 25, '#d0a862'); r(14, 3, 1, 25, '#fff0c0'); for (let x = 14; x < 32; x += 4) r(x, 0, 2, 3, '#f2d08a');
      r(18, 7, 10, 10, '#3f7fe0'); r(18, 7, 10, 2, '#7fb0f8'); r(22, 7, 2, 10, '#fff'); r(18, 11, 10, 2, '#fff');
      r(20, 17, 6, 1, '#3f7fe0'); r(21, 18, 4, 1, '#3f7fe0'); r(22, 19, 2, 1, '#3f7fe0');
      r(19, 22, 8, 6, '#3a2410');
      f.luz(4, 19, 3, 3); f.luz(39, 19, 3, 3); r(4, 19, 3, 3, '#3a2410'); r(39, 19, 3, 3, '#3a2410');
    }),
    '12': peca(60, 44, (r, f) => {
      const cx = 30;
      for (let i = 0; i < 38; i++) {
        const m = 7 + rnd(i * .6), y = 6 + i, j = hash(i, 3) > .7 ? 1 : 0;
        r(cx - m - j, y, 2 * m + 1 + j, 1, '#553c50'); r(cx - m - j, y, Math.max(2, m >> 1), 1, '#745468'); r(cx + (m >> 1), y, m - (m >> 1) + 1, 1, '#30212f');
      }
      r(cx - 7, 4, 15, 3, '#8c6a7e'); r(cx - 5, 5, 11, 2, '#30212f');
      let x = cx - 1;
      for (let y = 7; y < 42; y += 5) { f.lava(x, y, 3, 6); x += hash(y, 8) > .5 ? 2 : -2; }
      x = cx + 3; for (let y = 8; y < 26; y += 5) { f.lava(x, y, 2, 6); x += 2; }
      f.lava(cx - 5, 5, 11, 2);
      f.fumaca(cx, 2, 1.3); f.fumaca(cx - 3, 2, 1);
    }),
    '13': peca(56, 30, (r, f) => {
      const cone = (cx, h, w) => {
        for (let i = 0; i < h; i++) { const m = 3 + rnd(i * w), y = 30 - h + i; r(cx - m, y, 2 * m + 1, 1, '#553c50'); r(cx - m, y, Math.max(1, m >> 1), 1, '#745468'); r(cx + (m >> 1), y, m - (m >> 1) + 1, 1, '#30212f'); }
        f.lava(cx - 2, 30 - h, 5, 2); f.lava(cx, 30 - h + 2, 2, h - 3);
      };
      cone(12, 19, .55); cone(44, 22, .55); cone(28, 28, .55);
      f.fumaca(28, 0, 1); f.fumaca(44, 6, .8); f.fumaca(12, 9, .7);
    }),
    '14': peca(44, 34, (r, f) => {
      for (const x of [2, 32]) { r(x, 8, 10, 26, '#553c50'); r(x, 8, 3, 26, '#745468'); r(x + 7, 8, 3, 26, '#30212f'); for (let y = 12; y < 34; y += 6) r(x, y, 10, 1, '#30212f'); r(x - 1, 5, 12, 3, '#8c6a7e'); }
      r(10, 9, 24, 5, '#553c50'); r(10, 9, 24, 1, '#745468'); r(10, 13, 24, 1, '#30212f');
      r(5, 2, 4, 3, '#30212f'); r(35, 2, 4, 3, '#30212f');
      f.chama(7, 1); f.chama(37, 1);
      f.lava(13, 30, 18, 4);
    }),
    '15': peca(30, 8, (r) => { disco(r, 8, 8, 5, '#fff'); disco(r, 16, 8, 7, '#fff'); disco(r, 24, 9, 4, '#fff'); r(0, 8, 30, 1, '#c8dcfa'); r(2, 7, 26, 1, '#fff'); }, '#a5beec'),
    '16': peca(54, 44, (r, f, g) => {
      ['#e8483b', '#ff9d1f', '#ffe066', '#57d162', '#4aa8f0', '#8a6cf0'].forEach((c, i) => disco(r, 27, 34, 27 - i * 2, c));
      g.globalCompositeOperation = 'destination-out'; disco(r, 27, 34, 15, '#000'); r(0, 35, 54, 9, '#000'); g.globalCompositeOperation = 'source-over';
      for (const [x, h, w] of [[13, 22, 8], [33, 22, 8], [22, 30, 10]]) { r(x - 1, 41 - h, w + 2, h, '#6f8fd0'); tri(r, x + (w >> 1), 41 - h - 9, 9, .66, '#6f8fd0'); r(x, 41 - h, w, h, '#fff'); r(x + w - 2, 41 - h, 2, h, '#d7e4fa'); tri(r, x + (w >> 1), 41 - h - 8, 9, .58, '#ffd23f', '#e89a12'); r(x + (w >> 1) - 1, 41 - h + 4, 2, 3, '#6fbce8'); f.luz(x + (w >> 1) - 1, 41 - h + 4, 2, 3); }
      r(13, 30, 28, 11, '#fff'); r(13, 30, 28, 1, '#d7e4fa'); r(24, 34, 6, 7, '#6fa0e0');
      for (const [x, ra] of [[8, 5], [17, 6], [27, 7], [37, 6], [46, 5]]) disco(r, x, 39, ra, '#fff');
      f.bandeira(27, 0, 7, 4, '#e8483b', 6);
    }, '#6f8fd0'),
    '17': peca(76, 60, (r, f) => {
      const A = '#5f4bc0', E = '#3e2e80', C = '#8a74e8', O = '#ffd23f', P = '#e89a12';
      r(6, 30, 64, 30, A); r(6, 30, 64, 1, C); for (let x = 6; x < 70; x += 4) r(x, 27, 2, 3, A);
      for (let i = 0; i < 26; i++) r(8 + flo(hash(i, 9) * 58), 33 + flo(hash(i, 1) * 24), 3, 1, E);
      torre(r, 2, 60, 12, 40, A, E, C); torre(r, 62, 60, 12, 40, A, E, C);
      tri(r, 8, 8, 14, .5, O, P); tri(r, 68, 8, 14, .5, O, P);
      torre(r, 26, 60, 24, 44, A, E, C); tri(r, 38, 0, 16, .82, O, P);
      torre(r, 17, 60, 8, 30, A, E, C); torre(r, 51, 60, 8, 30, A, E, C); tri(r, 21, 19, 10, .36, O, P); tri(r, 55, 19, 10, .36, O, P);
      disco(r, 38, 44, 7, '#120c26'); r(31, 44, 15, 16, '#120c26'); for (let x = 33; x < 45; x += 3) r(x, 38, 1, 22, '#8b90b0'); for (let y = 46; y < 60; y += 4) r(31, y, 15, 1, '#8b90b0');
      for (const [x, y] of [[6, 27], [66, 27], [29, 30], [45, 30], [20, 36], [54, 36]]) { r(x, y, 3, 5, '#ffd23f'); f.luz(x, y, 3, 5); }
      disco(r, 38, 24, 5, E); disco(r, 38, 24, 4, O); disco(r, 38, 24, 2, '#e8483b'); f.luz(36, 22, 5, 5, '#ffb52e');
      f.bandeira(8, 2, 9, 5, '#e8483b', 6); f.bandeira(68, 2, 9, 5, '#e8483b', 6); f.brilho(38, -2); f.brilho(52, 14);
    })
  };
  // Placa genérica, para um módulo novo que ainda não tem peça própria.
  const PLACA = peca(20, 22, (r) => { r(9, 6, 2, 16, '#7a4a2a'); r(2, 2, 16, 9, '#d49a5e'); r(2, 2, 16, 1, '#f0c48a'); r(4, 5, 11, 1, '#5e3820'); r(4, 7, 8, 1, '#5e3820'); });
  const BAU = peca(16, 12, (r) => { r(1, 4, 14, 8, '#a86b3c'); r(1, 1, 14, 4, '#c98f58'); r(1, 4, 14, 1, '#5e3820'); r(7, 3, 2, 4, '#ffd23f'); r(1, 1, 14, 1, '#e8b47a'); });
  const BALAO = peca(24, 36, (r) => {
    disco(r, 12, 11, 11, '#ff5a4d');
    for (let d = -11; d <= 11; d++) { const m = flo(sq(121 - d * d) + .3), a = rnd(m * .36), b = rnd(m * .78); r(12 - a, 11 + d, 2 * a + 1, 1, '#ffd23f'); r(12 - b, 11 + d, b - a, 1, '#fff'); r(13 + a, 11 + d, b - a, 1, '#fff'); r(12 + b, 11 + d, m - b + 1, 1, '#c9361f'); }
    r(5, 21, 1, 8, '#7a4a2a'); r(18, 21, 1, 8, '#7a4a2a'); r(11, 21, 2, 8, '#7a4a2a');
    r(6, 28, 12, 7, '#a86b3c'); r(6, 28, 12, 2, '#d49a5e'); r(9, 31, 1, 4, '#7a4a2a'); r(14, 31, 1, 4, '#7a4a2a');
  });
  const BARCO = spr(`......k....... ......kWk..... ......kWWk.... ......kWWWk... ......kWWWWk.. ......kWWWWWk. ......kkkkkkk. ..kkkkkkkkkkkk .kbbbbbbbbbbk. ..kBBBBBBBBk.. ...kkkkkkkk...`, { W: '#fffaf0', b: '#e8483b', B: '#b8321f' });
  const CHAVE = peca(11, 6, (r) => { disco(r, 2, 2, 2, '#ffd23f'); r(2, 2, 1, 1, '#7a4a2a'); r(4, 1, 7, 2, '#ffd23f'); r(4, 1, 7, 1, '#fff2a8'); r(7, 3, 1, 2, '#e89a12'); r(10, 3, 1, 2, '#e89a12'); }, '#7a4a2a');
  const CAVERNA_M = (w, h, topo) => peca(w, h, (r) => {
    const cx = w >> 1;
    for (let i = 0; i < h; i++) { const m = rnd((i + 1) / h * (cx - 1)), j = i % 4 === 2 ? 1 : 0; r(cx - m - j, i, 2 * m + 1 + 2 * j, 1, '#7c79a8'); r(cx - m - j, i, Math.max(1, m >> 1), 1, '#a8a6d2'); r(cx + (m >> 1), i, m - (m >> 1) + 1 + j, 1, '#55527f'); }
    if (topo) for (let i = 0; i < h * .24; i++) { const m = rnd((i + 1) / h * (cx - 1)); r(cx - m, i, 2 * m + 1, 1, topo); }
  }, '#2c2850');
  const MONTES = [CAVERNA_M(26, 22, '#d4f6ff'), CAVERNA_M(20, 15), CAVERNA_M(32, 28, '#d4f6ff')];
  const DUNA = peca(24, 7, (r) => { for (let x = 0; x < 24; x++) { const h = rnd(sin(x / 23 * PI) * 7); r(x, 7 - h, 1, h, x < 13 ? '#ffe6a4' : '#e0b86e'); } }, '#c8964c');
  const CASINHA = peca(15, 14, (r, f) => casa(r, f, 1, 14, 13, 7, '#ff8a4d', '#d9531f'), TINTA);
  const CAMPO = peca(20, 11, (r) => { r(0, 0, 20, 11, '#9c6a3a'); for (let y = 1; y < 11; y += 2) for (let x = 1; x < 20; x += 2) r(x, y, 1, 1, hash(x, y) > .4 ? '#d8e85a' : '#8fc93f'); }, '#6e4a2a');
  const PUFE = peca(14, 6, (r) => { disco(r, 4, 4, 3, '#fff'); disco(r, 9, 3, 3, '#fff'); r(1, 5, 12, 1, '#c8dcfa'); }, '#c8dcfa');
  const COLUNA = peca(5, 16, (r) => { r(0, 1, 5, 15, '#b09cf4'); r(3, 1, 2, 15, '#6049b6'); r(0, 0, 5, 2, '#ffd23f'); });
  const nuvem = (w, h, cs) => { const c = tela(w, h), g = c.getContext('2d'), r = (x, y, a, b, col) => { g.fillStyle = col; g.fillRect(x, y, a, b); }; cs.forEach(q => disco(r, q[0], q[1] + 1, q[2], '#c9dcf8')); cs.forEach(q => disco(r, q[0], q[1], q[2], '#fff')); cs.slice(0, 1).forEach(q => disco(r, q[0] - 1, q[1] - 1, q[2] - 3, '#fff')); return c; };
  const NUVS = [nuvem(46, 18, [[16, 9, 7], [26, 8, 8], [8, 12, 5], [36, 11, 6]]), nuvem(30, 13, [[11, 6, 5], [19, 7, 5], [5, 9, 3], [25, 9, 3]]), nuvem(62, 20, [[20, 10, 8], [32, 9, 9], [44, 11, 7], [9, 14, 5], [54, 14, 5]])];
  const sombraDe = c => { const o = tela(c.width, c.height), g = o.getContext('2d'); g.drawImage(c, 0, 0); g.globalCompositeOperation = 'source-in'; g.fillStyle = '#0d1c55'; g.fillRect(0, 0, c.width, c.height); return o; };
  const LUA = peca(26, 26, (r) => { disco(r, 12, 12, 12, '#fdf6d8'); disco(r, 9, 8, 3, '#dfd6b0'); disco(r, 16, 15, 2, '#dfd6b0'); disco(r, 6, 16, 2, '#dfd6b0'); }, '#b4c4ff');
  const HELICE = [0, 1, 2, 3, 4, 5].map(q => {
    const c = tela(35, 35), g = c.getContext('2d'), a = q / 6 * PI / 2, P = (x, y, col) => { g.fillStyle = col; g.fillRect(rnd(x), rnd(y), 1, 1); };
    for (let k = 0; k < 4; k++) {
      const cs = cos(a + k * PI / 2), sn = sin(a + k * PI / 2);
      for (let d = 3; d <= 15; d += .5) for (let e = .5; e <= 4; e += .5) P(17 + cs * d - sn * e, 17 + sn * d + cs * e, e > 3.4 || d > 14.6 ? '#b9975f' : '#fffaf0');
      for (let d = 1; d <= 15; d += .5) { P(17 + cs * d, 17 + sn * d, '#7a4a2a'); P(17 + cs * d + sn, 17 + sn * d - cs, '#5e3820'); }
    }
    g.fillStyle = TINTA; g.fillRect(15, 15, 5, 5); g.fillStyle = '#ffd23f'; g.fillRect(16, 16, 3, 3);
    return c;
  });
  SPR = { ROBO, MOEDA, CADEADO, SETA, SEMENTE, ARV, EST, PECA, PLACA, BAU, BALAO, BARCO, BARCO_E: espelho(BARCO), CHAVE, MONTES, DUNA, CASINHA, CAMPO, PUFE, COLUNA, NUVS, NUVS_S: NUVS.map(sombraDe), LUA, HELICE };
}
// Algarismos 5x7 dos blocos (e B para o 6B, ? para as ilhas bônus).
const DIG = Object.fromEntries(Object.entries({
  0: '.###. ##.## ##.## ##.## ##.## ##.## .###.', 1: '.##.. ###.. .##.. .##.. .##.. .##.. ####.', 2: '.###. ##.## ...## ..##. .##.. ##... #####',
  3: '####. ...## ...## .###. ...## ...## ####.', 4: '...## ..### .#.## #..## ##### ...## ...##', 5: '##### ##... ####. ...## ...## ##.## .###.',
  6: '.###. ##... ##... ####. ##.## ##.## .###.', 7: '##### ...## ..##. ..##. .##.. .##.. .##..', 8: '.###. ##.## ##.## .###. ##.## ##.## .###.',
  9: '.###. ##.## ##.## .#### ...## ...## .###.', B: '####. ##.## ##.## ####. ##.## ##.## ####.', '?': '.###. ##.## ...## ..##. .##.. ..... .##..'
}).map(([k, v]) => [k, v.replace(/ /g, '')]));
const COR_BLOCO = { feito: ['#fff2a8', '#ffcf33', '#c47a0c', '#5a2c00', '#ffe680'], atual: ['#ffc9b0', '#ff5f33', '#a8320f', '#ffffff', '#ff9a70'], aberto: ['#e8f3ff', '#9cc4f0', '#4a6fa8', '#10204a', '#c4dcf8'], futuro: ['#ccd2e6', '#8f98b8', '#5c6486', '#ffffff', '#a8b0cc'], bonus: ['#ffd6f4', '#e86ad0', '#8a2a78', '#ffffff', '#f4a2e4'] };
function criaBloco(txt, e) {
  const p = COR_BLOCO[e];
  const c = tela(20, 20), g = c.getContext('2d'), r = (x, y, a, b, col) => { g.fillStyle = col; g.fillRect(x, y, a, b); };
  r(1, 0, 18, 20, TINTA); r(0, 1, 20, 18, TINTA);
  r(1, 1, 18, 18, p[2]); r(1, 1, 18, 15, p[1]); r(1, 1, 18, 3, p[0]); r(1, 4, 18, 1, p[4]);
  r(2, 6, 1, 1, p[2]); r(17, 6, 1, 1, p[2]); r(2, 14, 1, 1, p[2]); r(17, 14, 1, 1, p[2]);
  const s = String(txt), wd = s.length * 6 - 1, x0 = (20 - wd) >> 1, y0 = 7;
  [...s].forEach((d, k) => { const m = DIG[d]; if (!m) return; for (let j = 0; j < 7; j++) for (let i = 0; i < 5; i++) if (m[j * 5 + i] === '#') { if (e !== 'feito') r(x0 + k * 6 + i, y0 + j + 1, 1, 1, p[2]); r(x0 + k * 6 + i, y0 + j, 1, 1, p[3]); } });
  return c;
}

// Posições no PC (fração da largura e da altura útil), pelo número do módulo.
const LAY_N = { '0': [.068, .845], '1': [.205, .905], '2': [.345, .80], '3': [.485, .885], '4': [.625, .79], '5': [.765, .89], '6': [.915, .81], '6B': [.94, .60], '7': [.80, .47], '8': [.665, .555], '9': [.54, .45], '10': [.42, .55], '11': [.30, .465], '12': [.175, .57], '13': [.06, .38], '14': [.43, .25], '15': [.55, .125], '16': [.705, .24], '17': [.84, .25] };
const OFF_N = { '0': [2, -25], '1': [0, -24], '2': [0, -22], '3': [31, -16], '4': [9, -24], '5': [-28, -17], '6': [-34, -10], '6B': [-32, -14], '7': [8, -14], '8': [8, -18], '9': [-11, -14], '10': [0, -24], '11': [-4, -18], '12': [8, -12], '13': [0, 56], '14': [-2, -14], '15': [0, -2], '16': [0, -12], '17': [38, 8] };

/* ================= Montagem ================= */
export function ligarMapa() {
  if (!SPR) criarSprites();
  const S0 = situacao();
  const ATUAL = S0.atual, EST = S0.est, ultima = S0.ultima;
  const reduz = reduzMovimento();
  const html = document.documentElement;
  html.classList.add('rota-mapa');
  const $ = s => document.querySelector(s);
  const CV = $('#tela'), MUNDO = $('.mundo'), LISTA = $('#fases'), HM = $('#hMoeda').getContext('2d');
  const RES = { feito: 'fase concluída', atual: 'fase atual', aberto: 'fase em andamento', futuro: 'fase ainda não começada' };
  FASES.forEach((m, i) => {
    const li = document.createElement('li'), b = document.createElement('button'), e = EST[i];
    b.type = 'button'; b.className = 'fase ' + e; b.dataset.n = m.n; b.dataset.i = i;
    b.setAttribute('aria-label', `Fase ${m.n}: ${m.t}, ${RES[e]}. Abre a lista de aulas.`);
    if (e === 'atual') b.setAttribute('aria-current', 'step');
    b.innerHTML = `<span class="alvo"></span><span class="placa">${e === 'atual' ? '<em>Fase atual</em>' : ''}${esc(m.t)}</span>`;
    li.append(b); LISTA.append(li);
  });
  ILHAS.forEach((il, k) => {
    const li = document.createElement('li'), b = document.createElement('button');
    b.type = 'button'; b.className = 'fase bonus'; b.dataset.bonus = il.m.n; b.dataset.k = k;
    const n = il.aulas.length;
    const txt = il.modulo ? il.m.t : n === 1 ? il.aulas[0].t : `${n} aulas opcionais`;
    b.setAttribute('aria-label', `Fase bônus do módulo ${FASES[il.pai].n}: ${txt}. Opcional.`);
    b.innerHTML = `<span class="alvo"></span><span class="placa"><em>Bônus</em>${esc(txt)}</span>`;
    li.append(b); LISTA.append(li);
  });
  const BOTOES = [...LISTA.querySelectorAll('.fase:not(.bonus)')];
  const BBOT = [...LISTA.querySelectorAll('.fase.bonus')];
  let li = 0;
  $('#logo').innerHTML = ['Do zero', 'ao agente'].map(t => `<span class="lin" aria-hidden="true">${[...t].map(ch => `<span class="l" style="--i:${li++}">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('')}</span>`).join('');
  if (matchMedia('(pointer: coarse)').matches) $('#verbo').textContent = 'Toque';
  $('#hPips').innerHTML = FASES.map((_, i) => `<i class="${EST[i]}"></i>`).join('');
  const MOEDAS_TOT = S0.moedas;
  const BLOCOS = FASES.map((m, i) => criaBloco(m.n, EST[i] === 'aberto' ? 'aberto' : EST[i]));
  const BLOCO_BONUS = criaBloco('?', 'bonus');
  const PEC = FASES.map(m => SPR.PECA[m.n] || SPR.PLACA);
  const I15 = FASES.findIndex(m => m.n === '15');
  const ILAST = NF - 1;
  const iUltimo = b => { let k = -1; BIO.forEach((x, i) => { if (x <= b) k = i; }); return k; };
  const I_VULC = Math.max(0, iUltimo(4)), I_NUV = Math.min(ILAST, I_VULC + 1);

  let W, H, S, VW, VH, vert, topoPx, topoV, hz, NO = [], BN = [], fontes = '';
  let pts, acum, sNo, L, BX, DL, ocup, TERRA, bg = [], animA, animB, LAVAS, LUZES, TREES, CLOUDS, STARS, SOL, G, DOTS;
  const PX = () => PEC.map((p, n) => {
    if (vert) {
      if (n === ILAST) return { x: VW >> 1, y: NO[n].y - 15 };
      if (n === I15) return { x: VW - NO[n].x, y: NO[n].y + 10 };
      return { x: VW - NO[n].x, y: NO[n].y + (n - 1 === ATUAL ? 6 : 18) };
    }
    const o = OFF_N[FASES[n].n] || [0, -22];
    return { x: NO[n].x + o[0], y: NO[n].y + o[1] };
  });

  function medir() {
    W = document.documentElement.clientWidth; H = innerHeight;
    const dpr = devicePixelRatio || 1;
    vert = W < 960 || H < 560 || W / H < 1.1;
    html.classList.toggle('vert', vert);
    const base = vert ? cl(rnd(W / 130), 2, 4) : Math.max(2, flo(Math.min(W / 480, (H - 100) / 270) + .36));
    S = Math.max(1, rnd(base * dpr)) / dpr;
    const est = html.style;
    const fp = vert ? (W >= 600 ? 30 : 20) : 10 * cl(Math.min(flo(W / 640), flo(H / 360)), 2, 5);
    est.setProperty('--s', S); est.setProperty('--fp', fp + 'px');
    est.setProperty('--hud', vert ? '44px' : Math.max(36, rnd(S * 12)) + 'px');
    topoPx = $('.topo').offsetHeight + $('#hud').offsetHeight;
    est.setProperty('--topo', topoPx + 'px');
    topoV = topoPx / S;
    VW = Math.ceil(W / S);
    const pad = Math.max(44, 22 * S);
    est.setProperty('--alvo', pad + 'px');
    est.setProperty('--larg', flo(vert ? Math.min(W * .47, 300) : W * .148) + 'px');
    BN = [];
    if (!vert) {
      VH = Math.ceil(H / S);
      const y0 = topoV, y1 = (H - 70) / S;
      NO = FASES.map((m, i) => { const [u, v] = LAY_N[m.n] || [.08 + .84 * (i / Math.max(1, NF - 1)), .5]; return { x: rnd(u * VW), y: rnd(y0 + v * (y1 - y0)) }; });
      hz = rnd(y0 + .33 * (y1 - y0));
    } else {
      const pitch = 47, t = rnd(topoV + 76), gapB = 50;
      NO = FASES.map((_, i) => ({ x: i === ILAST ? VW >> 1 : rnd((i % 2 ? .75 : .25) * VW + (hash(i, 7) - .5) * VW * .05), y: 0 }));
      let y = t;
      for (let i = ILAST; i >= 0; i--) {
        NO[i].y = y;
        y += pitch + (ilhaDe(i - 1) ? gapB : 0) + (i === ILAST && ilhaDe(ILAST) ? gapB : 0);
      }
      VH = NO[0].y + 34 + Math.ceil(56 / S);
      hz = NO[I_VULC].y - 18;
    }
    NO.forEach((o, n) => { o.b = BIO[n]; });
    // Ilhas bônus
    const pp = PX();
    ILHAS.forEach(il => {
      const P = NO[il.pai];
      if (vert) {
        if (il.pai === ILAST) BN.push({ x: rnd(VW - NO[ILAST - 1].x), y: P.y + 44, b: P.b });
        else BN.push({ x: rnd(VW - P.x), y: P.y - 50, b: P.b });
        return;
      }
      const lw = (W * .148) / S, y0 = topoV + 26, y1 = (H - 70) / S - 14;
      const cand = [[0, -62], [50, -62], [-50, -62], [0, 44], [52, 44], [-52, 44], [76, 0], [-76, 0], [0, -78], [76, -36], [-76, -36], [76, 36], [-76, 36]];
      const ab = $('#abertura').getBoundingClientRect();
      let melhor = null, nota = -1;
      for (const [dx, dy] of cand) {
        const x = P.x + dx, y = P.y + dy;
        if (x < lw / 2 + 6 || x > VW - lw / 2 - 6 || y < y0 || y > y1) continue;
        if (x + lw / 2 > ab.left / S - 4 && x - lw / 2 < ab.right / S + 4 && y - 12 < ab.bottom / S + 8) continue;
        let dmin = 999;
        // a ilha não pode cobrir a placa de outra fase nem o robô parado em cima do bloco (até 32 px acima)
        for (const o of [...NO, ...BN]) { const dy = y - o.y; dmin = Math.min(dmin, Math.max(abs(o.x - x) / lw, dy > 0 ? dy / 40 : -dy / 58)); }
        for (const [k, p] of pp.entries()) { const w = PEC[k].width / 2 + 10, h = PEC[k].height; if (abs(p.x - x) < w && y > p.y - h - 14 && y < p.y + 14) dmin = Math.min(dmin, .5); }
        if (dmin >= 1) { melhor = [x, y]; break; }
        if (dmin > nota) { nota = dmin; melhor = [x, y]; }
      }
      BN.push({ x: rnd(melhor ? melhor[0] : P.x), y: rnd(melhor ? melhor[1] : P.y - 46), b: P.b });
    });
  }

  function posicionaBotoes() {
    const a = Math.max(44, 22 * S), cx = [];
    MUNDO.style.height = vert ? (VH * S) + 'px' : '';
    const TODOS = [...NO, ...BN], BTS = [...BOTOES, ...BBOT];
    BTS.forEach((b, n) => {
      const q = b.querySelector('.placa');
      q.style.width = '';
      const rg = document.createRange(); rg.selectNodeContents(q);
      const lw = rg.getBoundingClientRect().width;
      if (lw && lw + 15 < q.offsetWidth) q.style.width = Math.ceil(lw + 14) + 'px';
      const h = b.offsetHeight, w = b.offsetWidth, x = TODOS[n].x * S, m = 8;
      if (!vert) TODOS[n].y = Math.min(TODOS[n].y, flo((H - 74 - h + a / 2) / S));
      let d = 0;
      if (x - w / 2 < m) d = m - (x - w / 2);
      if (x + w / 2 > W - m) d = W - m - (x + w / 2);
      cx.push({ x: x + d, w, h });
    });
    if (!vert) {
      const ab = $('#abertura').getBoundingClientRect();
      cx.forEach((q, n) => { if (q.x - q.w / 2 < ab.right + 6 && q.x + q.w / 2 > ab.left - 6) TODOS[n].y = Math.max(TODOS[n].y, Math.ceil((ab.bottom + 14) / S + 16)); });
      for (let p = 0; p < 4; p++) for (let i = 0; i < TODOS.length; i++) for (let k = i + 1; k < TODOS.length; k++) {
        const A = cx[i], B = cx[k], ta = TODOS[i].y * S - a / 2, tb = TODOS[k].y * S - a / 2;
        if (abs(A.x - B.x) >= (A.w + B.w) / 2 + 4) continue;
        const ol = Math.min(ta + A.h, tb + B.h) - Math.max(ta, tb) + 4;
        if (ol <= 0) continue;
        if (ta < tb) TODOS[i].y -= Math.ceil(ol / S); else TODOS[k].y -= Math.ceil(ol / S);
      }
    }
    BTS.forEach((b, n) => { b.style.left = cx[n].x + 'px'; b.style.top = (TODOS[n].y * S - a / 2) + 'px'; });
  }

  function criaCaminho() {
    const P = NO, n = 40;
    const tan = i => { const a = P[Math.max(0, i - 1)], b = P[Math.min(NF - 1, i + 1)]; return { x: (b.x - a.x) * .2, y: (b.y - a.y) * .2 }; };
    pts = [];
    for (let i = 0; i < NF - 1; i++) {
      const a = P[i], b = P[i + 1], ta = tan(i), tb = tan(i + 1);
      for (let k = 0; k < n; k++) {
        const u = k / n, v = 1 - u, c1 = 3 * v * v * u, c2 = 3 * v * u * u;
        pts.push({ x: v * v * v * a.x + c1 * (a.x + ta.x) + c2 * (b.x - tb.x) + u * u * u * b.x, y: v * v * v * a.y + c1 * (a.y + ta.y) + c2 * (b.y - tb.y) + u * u * u * b.y });
      }
    }
    pts.push({ x: P[NF - 1].x, y: P[NF - 1].y });
    acum = [0];
    for (let i = 1; i < pts.length; i++) acum.push(acum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
    sNo = NO.map((_, i) => acum[i * n]);
  }
  function ponto(s) {
    let a = 0, b = acum.length - 1;
    while (b - a > 1) { const m = (a + b) >> 1; if (acum[m] <= s) a = m; else b = m; }
    const d = acum[b] - acum[a] || 1, u = cl((s - acum[a]) / d, 0, 1);
    return { x: pts[a].x + (pts[b].x - pts[a].x) * u, y: pts[a].y + (pts[b].y - pts[a].y) * u };
  }

  function criaTerreno() {
    const pp = PX(), blobs = [];
    const rxB = vert ? .25 * VW : Math.min(.1 * VW, 56), ryB = vert ? 25 : Math.min(.165 * (VH - topoV - 70 / S), 46);
    const KB = [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [.72, .62], [1, .85]];
    NO.forEach((o, n) => {
      const k = KB[o.b];
      blobs.push({ x: o.x, y: o.y - (vert ? 2 : 8), rx: rxB * k[0], ry: ryB * k[1], b: o.b, r: o.b });
      const pc = PEC[n];
      if (n !== I15) blobs.push({ x: pp[n].x, y: pp[n].y - (pc.height >> 1) + 3, rx: pc.width * .66 + 4, ry: pc.height * .62 + 5, b: o.b, r: o.b });
    });
    // Cada ilha bônus é uma região própria: o mar separa ela da fase, e a ponte atravessa.
    BN.forEach((o, k) => blobs.push({ x: o.x, y: o.y - 3, rx: vert ? 17 : 22, ry: vert ? 14 : 17, b: o.b, r: 100 + k }));
    const gap = vert ? .34 : .22, ab = $('#abertura').getBoundingClientRect();
    const tcx = (ab.left + ab.width / 2) / S, tcy = (ab.top + ab.height / 2) / S, thw = ab.width / 2 / S + 5, thh = ab.height / 2 / S + 5;
    L = new Uint8Array(VW * VH);
    for (let gy = 0; gy < VH; gy += 2) for (let gx = 0; gx < VW; gx += 2) {
      const x = gx + 1, y = gy + 1;
      let d1 = 99, d2 = 99, r1 = -1, b1 = -1;
      for (let i = 0; i < blobs.length; i++) {
        const o = blobs[i], dx = (x - o.x) / o.rx, dy = (y - o.y) / o.ry, d = dx * dx + dy * dy;
        if (d < d1) { if (o.r !== r1) d2 = d1; r1 = o.r; b1 = o.b; d1 = d; } else if (o.r !== r1 && d < d2) d2 = d;
      }
      const e = sq(d1), ar = AR(b1);
      const nz = (ruido(x * .045 + 3, y * .045) - .5) * (ar ? .3 : .55) + (ruido(x * .16, y * .16 + 9) - .5) * (ar ? .34 : .18);
      if (!vert && Math.max(abs(x - tcx) / thw, abs(y - tcy) / thh) + (ruido(x * .07 + 40, y * .07) - .5) * .34 + nz * .1 < 1) continue;
      if (e + nz < 1 && (sq(d2) - e) > gap + nz * .2) {
        const v = b1 + 1, i = gy * VW + gx;
        L[i] = v; if (gx + 1 < VW) L[i + 1] = v;
        if (gy + 1 < VH) { L[i + VW] = v; if (gx + 1 < VW) L[i + VW + 1] = v; }
      }
    }
    limpaIlhotas();
    BX = new Uint16Array(VW * VH);
    for (let x = 0; x < VW; x++) { let c = 0; for (let y = VH - 1; y >= 0; y--) { const i = y * VW + x; c = L[i] ? (L[i + VW] === L[i] || y === VH - 1 ? c + 1 : 1) : 0; BX[i] = c; } }
    DL = new Uint8Array(VW * VH).fill(60);
    const costa = i => L[i] && !AR(L[i] - 1);
    for (let y = 0; y < VH; y++) for (let x = 0; x < VW; x++) { const i = y * VW + x; if (costa(i)) { DL[i] = 0; continue; } let m = DL[i]; if (x) m = Math.min(m, DL[i - 1] + 2); if (y) m = Math.min(m, DL[i - VW] + 2); if (x && y) m = Math.min(m, DL[i - VW - 1] + 3); if (y && x < VW - 1) m = Math.min(m, DL[i - VW + 1] + 3); DL[i] = m; }
    for (let y = VH - 1; y >= 0; y--) for (let x = VW - 1; x >= 0; x--) { const i = y * VW + x; let m = DL[i]; if (x < VW - 1) m = Math.min(m, DL[i + 1] + 2); if (y < VH - 1) m = Math.min(m, DL[i + VW] + 2); if (x < VW - 1 && y < VH - 1) m = Math.min(m, DL[i + VW + 1] + 3); if (y < VH - 1 && x) m = Math.min(m, DL[i + VW - 1] + 3); DL[i] = m; }
  }
  function limpaIlhotas() {
    const gw = Math.ceil(VW / 2), gh = Math.ceil(VH / 2), vis = new Uint8Array(gw * gh), val = (a, b) => L[b * 2 * VW + a * 2];
    const poe = (a, b, v) => { const i = b * 2 * VW + a * 2, l = a * 2 + 1 < VW, d = b * 2 + 1 < VH; L[i] = v; if (l) L[i + 1] = v; if (d) { L[i + VW] = v; if (l) L[i + VW + 1] = v; } };
    for (let b = 0; b < gh; b++) for (let a = 0; a < gw; a++) {
      if (vis[b * gw + a]) continue;
      const v = val(a, b), comp = [], st = [a, b]; let viz = 0;
      vis[b * gw + a] = 1;
      while (st.length) {
        const y = st.pop(), x = st.pop(); comp.push(x, y);
        for (let k = 0; k < 4; k++) {
          const p = x + [1, -1, 0, 0][k], q = y + [0, 0, 1, -1][k];
          if (p < 0 || q < 0 || p >= gw || q >= gh) continue;
          const w = val(p, q);
          if (w !== v) { if (w) viz = w; continue; }
          if (!vis[q * gw + p]) { vis[q * gw + p] = 1; st.push(p, q); }
        }
      }
      if (comp.length / 2 < (v ? 40 : 12) && (v || viz)) for (let i = 0; i < comp.length; i += 2) poe(comp[i], comp[i + 1], viz);
    }
  }
  const hCliff = (b, x) => (b === 5 ? 2 + flo(abs(sin(x * .42)) * 4) : BI[b].h);
  function pintaTerreno() {
    const T = tela(VW, VH), g = T.getContext('2d'), im = g.createImageData(VW, VH), px = new Uint32Array(im.data.buffer);
    const flor = [hex('#ffffff'), hex('#ffe066'), hex('#ff8ab0')];
    for (let y = 0; y < VH; y++) for (let x = 0; x < VW; x++) {
      const i = y * VW + x; if (!L[i]) continue;
      const b = L[i] - 1, p = BI32[b], d = BX[i], hc = hCliff(b, x);
      let c;
      if (d <= hc) {
        const k = hc - d;
        c = k === 0 && (x % 3) ? p.d : ((x + (k >> 1) * 2) % 5 === 0 ? p.c2 : p.c);
        if (d === 1) c = p.c2;
      } else {
        const borda = (x && !L[i - 1]) || (x < VW - 1 && !L[i + 1]) || (y && !L[i - VW]);
        const borda2 = (x > 1 && !L[i - 2]) || (x < VW - 2 && !L[i + 2]) || (y > 1 && !L[i - 2 * VW]) || d <= hc + 2;
        if (borda) c = p.d;
        else if (borda2) c = p.b;
        else {
          const n = ruido(x * .075 + b * 5, y * .075), h = hash(x, y);
          c = n > .57 || (n > .5 && (x + y) % 2) ? p.t2 : p.t;
          if (h < .018) c = p.u;
          if (b === 0 || b === 1) { if (h > .9965) c = flor[flo(hash(y, x) * 3)]; if (ruido(x * .3, y * .5) > .78 && (x + y) % 3 === 0) c = p.fx; }
          else if (b === 2) { if (abs(ruido(x * .14, y * .14) - .5) < .012) c = p.fx; }
          else if (b === 3) { if (((y + rnd(ruido(x * .05, y * .08) * 14)) % 7 === 0) && (x + y * 3) % 5) c = p.fx; }
          else if (b === 4) { if (abs(ruido(x * .1, y * .1) - .52) < .011) c = p.fx; if (h > .994) c = hex('#ff8a2a'); }
          else if (b === 6) { const a = (x >> 2) + (y >> 2); c = a % 2 ? p.t : p.t2; if ((x & 3) === 0 || (y & 3) === 0) c = p.fx; }
        }
      }
      px[i] = c;
    }
    g.putImageData(im, 0, 0);
    for (let x = 0; x < VW; x += 2) for (let y = 1; y < VH - 1; y++) { const i = y * VW + x; if (L[i] === 7 && !L[i + VW]) { const h = flo(hash(x, 11) * 9) + 2; g.fillStyle = '#2c2062'; g.fillRect(x, y + 1, 2, h); g.fillStyle = '#3e2e80'; g.fillRect(x, y + 1, 1, h - 1); } }
    return T;
  }
  const marca = (x, y, w, h) => { const a = Math.max(0, x | 0), b = Math.min(VW, (x + w) | 0), c = Math.max(0, y | 0), d = Math.min(VH, (y + h) | 0); for (let j = c; j < d; j++) ocup.fill(1, j * VW + a, j * VW + b); };
  const livre = (x, y, w, h) => { if (x < 0 || y < 0 || x + w >= VW || y + h >= VH) return false; for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (ocup[j * VW + i]) return false; return true; };
  function reservas() {
    ocup = new Uint8Array(VW * VH);
    marca(0, 0, VW, Math.ceil(topoV));
    if (!vert) { const ab = $('#abertura').getBoundingClientRect(); marca(ab.left / S - 4, ab.top / S - 4, ab.width / S + 8, ab.height / S + 12); }
    const base = MUNDO.getBoundingClientRect();
    [...BOTOES, ...BBOT].forEach(b => { const q = b.querySelector('.placa').getBoundingClientRect(); marca((q.left - base.left) / S - 3, (q.top - base.top) / S - 3, q.width / S + 6, q.height / S + 6); });
    [...NO, ...BN].forEach(o => marca(o.x - 14, o.y - 22, 28, 34));
    marca(NO[ATUAL].x - 10, NO[ATUAL].y - 46, 20, 26);
    for (let s = 0; s < acum[acum.length - 1]; s += 3) { const p = ponto(s); marca(p.x - 5, p.y - 4, 10, 8); }
    ILHAS.forEach((il, k) => { const A = NO[il.pai], B = BN[k], n = Math.ceil(Math.hypot(B.x - A.x, B.y - A.y) / 3); for (let j = 0; j <= n; j++) marca(A.x + (B.x - A.x) * j / n - 4, A.y + (B.y - A.y) * j / n - 4, 8, 8); });
  }
  function pintaCaminho(g) {
    const fim = acum[acum.length - 1], R = (x, y, w, h, c) => { g.fillStyle = c; g.fillRect(x, y, w, h); };
    const noAr = (x, y) => y < hz;
    const noMar = [];
    for (let s = 0; s < fim; s += 1) {
      const p = ponto(s), x = rnd(p.x), y = rnd(p.y), i = cl(y, 0, VH - 1) * VW + cl(x, 0, VW - 1), b = L[i] - 1;
      if (b >= 0) { if (BX[i] > hCliff(b, x)) R(x - 1, y - 1, 3, 3, BI[b].tr); else noMar.push([x, y, s]); }
      else noMar.push([x, y, s]);
    }
    for (const [x, y] of noMar) if (!noAr(x, y)) R(x - 3, y - 3, 7, 7, '#3d2414');
    for (const [x, y, s] of noMar) if (!noAr(x, y)) R(x - 2, y - 2, 5, 5, flo(s / 3) % 2 ? '#c98f58' : '#a8743f');
    for (let s = 6; s < fim; s += 18) { const p = ponto(s), x = rnd(p.x), y = rnd(p.y); if (noAr(x, y) && !L[y * VW + x]) { const r = (a, b, w, h, c) => R(a, b, w, h, c); disco(r, x, y + 1, 5, '#c8dcfa'); disco(r, x, y, 5, '#fff'); } }
    // Pontes tracejadas até as ilhas bônus
    ILHAS.forEach((il, k) => {
      const A = NO[il.pai], B = BN[k], d = Math.hypot(B.x - A.x, B.y - A.y), n = Math.max(1, flo(d / 7));
      for (let j = 1; j < n; j++) {
        const x = rnd(A.x + (B.x - A.x) * j / n), y = rnd(A.y + (B.y - A.y) * j / n);
        R(x - 3, y - 2, 6, 5, TINTA); R(x - 2, y - 1, 4, 3, j % 2 ? '#c98f58' : '#e0b070');
      }
    });
    [...NO, ...BN].forEach(o => { if (L[o.y * VW + o.x]) { const r = (a, b, w, h, c) => R(a, b, w, h, c); for (let d = -7; d <= 7; d++) { const m = flo(sq(1 - d * d / 49) * 15); r(o.x - m, o.y + 6 + d, 2 * m + 1, 1, BI[o.b].tr); } } });
    DOTS = [];
    for (let s = 0; s < fim; s += 7) {
      let perto = false; for (const q of sNo) if (abs(q - s) < 13) perto = true;
      if (perto) continue;
      const p = ponto(s), x = rnd(p.x), y = rnd(p.y), feito = s < sNo[ATUAL];
      R(x - 2, y - 1, 4, 2, TINTA); R(x - 1, y - 2, 2, 4, TINTA);
      R(x - 1, y - 1, 2, 2, feito ? '#ffd23f' : '#fff');
      if (ATUAL < NF - 1 && s > sNo[ATUAL] && s < sNo[ATUAL + 1]) DOTS.push([x, y]);
    }
  }
  const LAVA_C = ['#ffd23f', '#ff9d1f', '#ff5a1f', '#e8381c'];
  function regDin(k, ox, oy, a) {
    const [x, y] = a, X = ox + x, Y = oy + y;
    if (k === 'luz') LUZES.push([X, Y, a[2], a[3], a[4] || '#ffe27a']);
    else if (k === 'lava') LAVAS.push([X, Y, a[2], a[3]]);
    else if (k === 'chama') animB.push({ y: Y, f: t => chama(X, Y, t) });
    else if (k === 'brilho') animB.push({ y: Y, f: t => brilho(X, Y, t, x * .31 + y * .17) });
    else if (k === 'bandeira') animA.push({ y: Y, f: t => bandeira(X, Y, a[2], a[3], a[4], a[5], t) });
    else if (k === 'fumaca') animA.push({ y: Y, f: t => fumaca(X, Y, a[2], t) });
    else if (k === 'helice') animA.push({ y: Y, f: t => helice(X, Y, t) });
    else if (k === 'cabo') {
      const [x0, y0, x1, sag] = a, cy = (x1 - x0) / 2, m = x0 + cy, ca = tela(x1 - x0 + 1, sag + 2), gc = ca.getContext('2d'); gc.fillStyle = TINTA; for (let q = x0; q <= x1; q++) { const u = (q - m) / cy; gc.fillRect(q - x0, rnd((1 - u * u) * sag), 1, 1); }
      animB.push({ y: oy + y0, f: t => { G.drawImage(ca, ox + x0, oy + y0); const e = (t * .55 + x0 * .13) % 1, q = x0 + e * (x1 - x0), u = (q - m) / cy; R(rnd(ox + q) - 1, oy + y0 + rnd((1 - u * u) * sag) - 1, 3, 3, '#ffd23f'); R(rnd(ox + q), oy + y0 + rnd((1 - u * u) * sag), 1, 1, '#fff'); } });
    } else if (k === 'chave') animB.push({ y: Y, f: t => { G.drawImage(SPR.CHAVE, X, Y + rnd(sin(t * 2.2) * 1)); } });
  }
  function colocaPecas(g) {
    const pp = PX();
    PEC.forEach((p, n) => {
      const x0 = pp[n].x - (p.width >> 1), y0 = pp[n].y - p.height;
      g.drawImage(p, x0, y0);
      marca(x0 - 1, y0 - 1, p.width + 2, p.height + 2);
      for (const [k, ...a] of p.din) regDin(k, x0 + 1, y0 + 1, a);
    });
    // baú em cada ilha bônus
    BN.forEach(o => { const x0 = o.x + 12, y0 = o.y - 9; if (livre(x0, y0, SPR.BAU.width, SPR.BAU.height)) { g.drawImage(SPR.BAU, x0, y0); marca(x0, y0, SPR.BAU.width, SPR.BAU.height); } });
    if (I15 >= 0) {
      const a = pp[I15], bx = vert ? a.x - 12 : NO[I15].x + 20, by = vert ? a.y - 42 : NO[I15].y - 26;
      marca(bx, by, 26, 40);
      animA.push({ y: by, f: t => G.drawImage(SPR.BALAO, bx, by + rnd(sin(t * .9) * 3)) });
    }
  }
  function criaBarco() {
    if (vert) return;
    const y = rnd((H - 34) / S), ini = rnd((W / 2 + 210) / S);
    let a = -1, ba = 0, ta = 0;
    for (let x = ini; x <= VW; x++) {
      const ok = x < VW && DL[y * VW + x] > 10 && DL[(y - 10) * VW + x] > 6;
      if (ok && a < 0) a = x;
      if (!ok && a >= 0) { if (x - a > ta) { ta = x - a; ba = a; } a = -1; }
    }
    if (ta < 44) return;
    const x0 = ba + 4, cur = ta - 24;
    animA.push({ y: y - 10, f: t => {
      const u = (t * 2.2) % (2 * cur), vai = u < cur, X = rnd(x0 + (vai ? u : 2 * cur - u));
      G.drawImage(vai ? SPR.BARCO : SPR.BARCO_E, X, y - 10 + rnd(sin(t * 1.6) * 1));
      R(X + (vai ? -2 : 16), y + 1, 2, 1, '#e8fcff');
    } });
  }
  function espalha(g) {
    let sem = 20261031;
    const sorte = () => (sem = sem * 16807 % 2147483647) / 2147483647;
    const { ARV, EST: E } = SPR;
    const CONF = [
      { d: 85, l: [[ARV.folha, 10], [ARV.pinho, 10], [E.moita, 2], [E.cog, 1]] },
      { d: 300, l: [[ARV.maca, 5], [E.moitaV, 3], [E.cerca, 2], [SPR.CASINHA, 3], [SPR.CAMPO, 2]] },
      { d: 330, l: [[SPR.MONTES[0], 4], [SPR.MONTES[1], 4], [SPR.MONTES[2], 2], [E.pedra, 3], [E.agulha, 3], [E.crist, 2], [E.cristR, 1]] },
      { d: 360, l: [[ARV.palma, 3], [E.cacto, 4], [SPR.DUNA, 5], [E.pedraD, 2]] },
      { d: 420, l: [[E.morta, 4], [E.pedraV, 4]] },
      { d: 600, l: [[SPR.PUFE, 3], [E.fada, 1]] },
      { d: 900, l: [[SPR.COLUNA, 2]] }
    ];
    const estat = [];
    CONF.forEach((cf, b) => {
      const idx = []; for (let i = 0; i < L.length; i++) if (L[i] === b + 1) idx.push(i);
      const alvo = rnd(idx.length / cf.d), tot = cf.l.reduce((a, q) => a + q[1], 0), usados = [];
      let t = alvo * 12, ok = 0;
      while (t-- > 0 && ok < alvo) {
        const i = idx[flo(sorte() * idx.length)], y = flo(i / VW), x = i - y * VW;
        if (BX[i] < hCliff(b, x) + 3) continue;
        if (b === 1 && ruido(x * .06 + 7, y * .06) < .36) continue;
        let q = sorte() * tot, it = cf.l[0];
        for (const c of cf.l) { it = c; if ((q -= c[1]) <= 0) break; }
        const fr = Array.isArray(it[0]), im = fr ? it[0][0] : it[0], ax = x - (im.width >> 1), ay = y - im.height + 1;
        if (!livre(ax, ay, im.width, im.height)) continue;
        if (!L[y * VW + ax + 1] || !L[y * VW + ax + im.width - 2]) continue;
        if (usados.some(u => abs(u[0] - x) < (u[2] + im.width) * .32 && abs(u[1] - y) < 5)) continue;
        usados.push([x, y, im.width]); ok++;
        if (fr) { TREES.push({ f: it[0], x: ax, y: ay, b: y, s: sorte() * 4 }); marca(x - 3, y - 3, 6, 4); }
        else { estat.push([im, ax, ay, y]); marca(ax, ay, im.width, im.height); for (const [k, ...a] of im.din || []) regDin(k, ax + 1, ay + 1, a); }
      }
    });
    estat.sort((a, b) => a[3] - b[3]).forEach(e => g.drawImage(e[0], e[1], e[2]));
    TREES.sort((a, b) => a.b - b.b);
  }
  function assa(terra) {
    const CEU = ['#3584ea', '#4b9bf1', '#66b2f6', '#86c9fa', '#a8defc', '#ccf0fe'].map(hex);
    const MAR = ['#7fd4f0', '#4cb6ea', '#2f9ce2', '#2a86d6', '#2672c6', '#2260b4'].map(hex);
    const RASA = hex('#62d3e8'), RASA2 = hex('#4cc1e6'), ESP = hex('#e8fcff'), ONDA = hex('#8fdcf6'), ONDA2 = hex('#1d549f');
    const y0 = vert ? Math.max(0, hz - 110) : flo(topoV);
    const fundo = tela(VW, VH), gf = fundo.getContext('2d');
    const iCast = FASES.findIndex(m => m.n === '16');
    const c16 = PX()[iCast >= 0 ? iCast : ILAST], cx16 = c16.x, cy16 = c16.y - 24;
    SOL = vert ? { x: rnd(VW * .42), y: NO[I_NUV].y - 8 } : { x: rnd(VW * .5), y: rnd(topoV + 26) };
    const rr = (x, y, w, h, c) => { gf.fillStyle = c; gf.fillRect(x, y, w, h); };
    disco((x, y, w) => { for (let i = x; i < x + w; i++) if ((i + y) % 2) rr(i, y, 1, 1, '#d8f4ff'); }, cx16, cy16, 42);
    disco(rr, cx16, cy16, 36, '#d8f4ff');
    for (let x = 0; x < VW; x++) {
      const a = rnd(5 + ruido(x * .03, 3) * 15), c = rnd(3 + ruido(x * .05, 8) * 8);
      rr(x, hz - a, 1, a, '#94cdee'); rr(x, hz - c, 1, c, '#7dbfe6');
    }
    const LUT = new Uint8Array(30); for (let i = 0; i < 30; i++) LUT[i] = sin(i / 30 * 2 * PI) > .78 ? 1 : 0;
    bg = []; TERRA = terra;
    for (let fase = 0; fase < 6; fase++) {
      const c = tela(VW, VH), g = c.getContext('2d'), im = g.createImageData(VW, VH), px = new Uint32Array(im.data.buffer);
      for (let y = 0; y < VH; y++) {
        const noCeu = y < hz;
        const t = noCeu ? cl((y - y0) / (hz - y0), 0, .999) * (CEU.length - 1) : cl((y - hz) / (Math.min(VH - hz, 220)), 0, .999) * (MAR.length - 1);
        const a = flo(t), fr = t - a, pal = noCeu ? CEU : MAR, c0 = pal[a], c1 = pal[Math.min(a + 1, pal.length - 1)];
        const lin = (y - hz + 600) % 6, ln = flo((y - hz + 600) / 6);
        for (let x = 0; x < VW; x++) {
          const i = y * VW + x;
          if (L[i]) continue;
          let col = fr > .75 ? c1 : fr > .5 && (x + y) % 2 ? c1 : c0;
          if (!noCeu) {
            const d = DL[i] >> 1;
            if (d <= 7) {
              const w = (x * 2 + y * 3 + fase * 2) % 12;
              if (d <= 1) col = w < 10 ? ESP : RASA;
              else if (d === 2) col = w < 5 ? ESP : RASA;
              else if (d === 3) col = w === 7 ? ESP : RASA;
              else if (d <= 5) col = RASA;
              else col = (x + y) % 2 ? RASA2 : col;
            } else if (lin === 0) { const o = (x + ln * 13 + (ln % 2 ? 1 : -1) * fase * 5 + 3000) % 30; if (LUT[o]) col = ONDA; }
            else if (lin === 3) { const o = (x + ln * 7 - (ln % 2 ? 1 : -1) * fase * 5 + 3000) % 30; if (LUT[o]) col = ONDA2; }
          }
          px[i] = col;
        }
      }
      g.putImageData(im, 0, 0);
      g.drawImage(fundo, 0, 0);
      bg.push(c);
    }
  }
  function criaNuvens() {
    CLOUDS = [];
    const ceu = vert ? 3 : 4, perto = vert ? Math.ceil(VH / 300) : 2, altoCeu = Math.max(30, hz - (vert ? 40 : topoV) - 14);
    for (let i = 0; i < ceu; i++) CLOUDS.push({ ar: 1, k: i % 2 ? 0 : 2, x: hash(i, 21) * (VW + 80) - 40, y: (vert ? 40 : topoV) + (i / ceu) * altoCeu + hash(i, 4) * 6, v: 2 + hash(i, 5) * 2.5 });
    for (let i = 0; i < perto; i++) CLOUDS.push({ ar: 0, k: 1, x: hash(i, 25) * VW, y: vert ? hz + 60 + (i + .5) * (VH - hz) / perto : hz + 40 + i * 74, v: 3.5 + hash(i, 6) * 2.5 });
    STARS = [];
    for (let i = 0; i < (vert ? 50 : 90); i++) { const x = flo(hash(i, 31) * VW), y = flo(hash(i, 37) * Math.max(10, hz - 2)); if (!L[y * VW + x]) STARS.push({ x, y, s: hash(i, 41) * 6 }); }
  }

  /* ---------- Partes animadas ---------- */
  const R = (x, y, w, h, c) => { G.fillStyle = c; G.fillRect(x, y, w, h); };
  function chama(x, y, t) {
    const f = flo(t * 9 + x) % 3, h = [6, 7, 5][f], d = [0, 1, -1][f];
    R(x - 1, y - h + 2, 3, h - 2, '#ff6a1f'); R(x + d, y - h, 1, 2, '#ff6a1f'); R(x - 2, y - 2, 5, 2, '#ff6a1f');
    R(x, y - h + 3, 1, h - 3, '#ffd23f'); R(x - 1, y - 2, 3, 2, '#ffd23f');
  }
  function brilho(x, y, t, s) { const k = (t * .45 + s) % 1; if (k > .24) return; G.drawImage(SPR.SEMENTE[k < .08 || k > .16 ? 0 : 1], x - 2, y - 2); }
  function bandeira(x, y, w, h, c, m, t) {
    R(x, y, 1, m + h, TINTA);
    for (let i = 1; i <= w; i++) { const dy = rnd(sin(t * 5 - i * .9) * 1.2); R(x + i, y + dy, 1, h, c); R(x + i, y + dy + h - 1, 1, 1, '#a8220f'); }
  }
  function fumaca(x, y, k, t) {
    for (let i = 0; i < 5; i++) {
      const a = (t * .28 + i / 5) % 1, px = x + rnd(sin(a * 7 + i * 2) * (1 + a * 5 * k)), py = y - rnd(a * 24 * k), ra = rnd((1 + a * 2.6) * k);
      if (ra < 1) continue;
      R(px - ra, py - ra + 1, ra * 2, ra * 2 - 1, a > .6 ? '#d7d4e4' : '#a8a4bc'); R(px - ra + 1, py - ra, ra * 2 - 2, 1, a > .6 ? '#ece9f4' : '#c8c4d8');
    }
  }
  const helice = (x, y, t) => G.drawImage(SPR.HELICE[flo(t * 7) % 6], x - 17, y - 17);
  function passaros(t, y0, y1) {
    if (vert) return;
    const X = rnd((t * 7) % (VW + 90)) - 45, Y = rnd(topoV + 14 + sin(t * .3) * 3);
    if (Y < y0 || Y > y1) return;
    const a = flo(t * 4) % 2, c = '#1f2f78';
    for (const [dx, dy] of [[0, 0], [-8, 4], [-16, 8], [-8, -4], [-16, -8]]) {
      const x = X + dx, y = Y + dy;
      R(x, y, 1, 1, c);
      if (a) { R(x - 2, y - 1, 2, 1, c); R(x + 1, y - 1, 2, 1, c); } else { R(x - 1, y, 1, 1, c); R(x + 1, y, 1, 1, c); R(x - 2, y + 1, 1, 1, c); R(x + 2, y + 1, 1, 1, c); }
    }
  }

  /* ---------- Robô ---------- */
  let roboS = 0, alvoS = null, velo = 0, andou = 0, dir = 1, aoChegar = null, faseRobo = ATUAL, pulo = 0, hover = -1, poeira = [], fagulhas = [], noite = estado.tema === 'noite' ? 1 : 0, noiteAlvo = noite, ultMundo = -1;
  function atualizaMundo() {
    const b = BIO[faseRobo];
    if (b === ultMundo) return;
    ultMundo = b;
    $('#hMundo').textContent = (b + 1) + ': ' + MUNDO_NOMES[b];
  }
  function andarAte(n, cb) {
    const d = sNo[n] - roboS;
    if (reduz) { roboS = sNo[n]; faseRobo = n; atualizaMundo(); desenha(0); cb(); return; }
    if (abs(d) < 1) { pulo = 1; alvoS = null; aoChegar = null; setTimeout(cb, 300); return; }
    alvoS = sNo[n]; velo = Math.max(72, abs(d) / 1.3); aoChegar = () => { faseRobo = n; atualizaMundo(); cb(); };
  }
  function atualiza(dt) {
    if (alvoS !== null) {
      const d = alvoS - roboS, p = velo * dt;
      if (abs(d) <= p) {
        roboS = alvoS; alvoS = null; pulo = 1;
        const q = ponto(roboS);
        for (let i = 0; i < 8; i++) fagulhas.push({ x: q.x, y: q.y - 20, vx: cos(i * PI / 4) * 28, vy: sin(i * PI / 4) * 28 - 8, v: .45 });
        const cb = aoChegar; aoChegar = null;
        if (cb) setTimeout(cb, 230);
      } else {
        const a = ponto(roboS), b = ponto(roboS + Math.sign(d) * p);
        roboS += Math.sign(d) * p; andou += p;
        if (abs(b.x - a.x) > .01) dir = b.x > a.x ? 1 : -1;
        if (flo(andou / 8) !== flo((andou - p) / 8)) poeira.push({ x: a.x - dir * 4, y: a.y + 1, v: .3 });
        if (vert) {  // a página acompanha o robô no mapa vertical
          const yy = b.y * S - (innerHeight + topoPx) / 2;
          if (abs(scrollY - yy) > innerHeight * .28) scrollTo(0, scrollY + (yy - scrollY) * .08);
        }
      }
    }
    if (pulo > 0) pulo = Math.max(0, pulo - dt * 3.4);
    for (const q of poeira) q.v -= dt;
    poeira = poeira.filter(q => q.v > 0);
    for (const q of fagulhas) { q.x += q.vx * dt; q.y += q.vy * dt; q.vy += 90 * dt; q.v -= dt; }
    fagulhas = fagulhas.filter(q => q.v > 0);
    for (const c of CLOUDS) { c.x += c.v * dt; if (c.x > VW + 50) c.x = -SPR.NUVS[c.k].width - 40; }
    if (noite !== noiteAlvo) { const p = dt * 1.8; noite = abs(noiteAlvo - noite) <= p ? noiteAlvo : noite + Math.sign(noiteAlvo - noite) * p; }
  }
  function alturaRobo() { let a = 0; for (const q of sNo) { const d = abs(roboS - q); if (d < 12) a = Math.max(a, 1 - d / 12); } return Math.min(1, a * 1.5); }
  function desenhaRobo(t) {
    const p = ponto(roboS), x = rnd(p.x), a = alturaRobo();
    const salto = rnd(sin(pulo * PI) * 7), y = rnd(p.y) - rnd(a * 8) - salto;
    if (a < .3) R(x - 6, rnd(p.y), 12, 2, '#0d0a2655');
    if (alvoS !== null) {
      const q = flo(t * 13) % 4, im = (dir > 0 ? SPR.ROBO.lado : SPR.ROBO.ladoE)[q];
      G.drawImage(im, x - 8, y - 20 - (q % 2 ? 1 : 0));
    } else {
      const resp = reduz ? 0 : (t % 2.4 < 1.2 ? 0 : 1), X = x - 8, Y = y - 20 + resp;
      G.drawImage(SPR.ROBO.frente, X, Y);
      const alvoH = hover >= 0 && hover !== faseRobo ? NO[hover] : null, ol = alvoH ? Math.sign(alvoH.x - x) : 0, oy = alvoH && abs(alvoH.y - y) > 30 ? Math.sign(alvoH.y - y) : 0, piscar = (t + 1) % 4.3 < .13;
      for (const c of [5, 9]) R(X + c + ol, Y + 7 + oy + (piscar ? 1 : 0), 2, piscar ? 1 : 2, '#7ff6ff');
      if (t % 1.6 < .8) R(X + 7, Y, 2, 2, '#ff7a45');
    }
  }
  const misturaNoite = k => { const a = [255, 255, 255], b = [58, 72, 150]; return `rgb(${a.map((v, i) => rnd(v + (b[i] - v) * k)).join(',')})`; };
  function desenha(t, tudo) {
    const y0 = vert && !tudo ? cl(flo(scrollY / S) - 8, 0, VH - 1) : 0, hv = vert && !tudo ? Math.min(VH - y0, Math.ceil(H / S) + 16) : VH, y1 = y0 + hv;
    G.drawImage(bg[flo(t * 5) % 6], 0, y0, VW, hv, 0, y0, VW, hv);
    for (const c of CLOUDS) if (c.ar && c.y + 24 > y0 && c.y < y1) G.drawImage(SPR.NUVS[c.k], rnd(c.x), rnd(c.y));
    G.drawImage(TERRA, 0, y0, VW, hv, 0, y0, VW, hv);
    G.globalAlpha = .17;
    for (const c of CLOUDS) if (!c.ar && c.y + 40 > y0 && c.y < y1) G.drawImage(SPR.NUVS_S[c.k], rnd(c.x) + 7, rnd(c.y) + 16);
    G.globalAlpha = 1;
    for (const a of TREES) { if (a.b < y0 - 2 || a.y > y1) continue; const p = flo(t * 2.2 + a.s) % 4; G.drawImage(a.f[p === 3 ? 1 : p], a.x - 2, a.y); }
    for (const a of animA) { if (a.y > y0 - 50 && a.y < y1 + 40) a.f(t); }
    passaros(t, y0, y1);
    for (const c of CLOUDS) if (!c.ar && c.y + 20 > y0 && c.y < y1) G.drawImage(SPR.NUVS[c.k], rnd(c.x), rnd(c.y));
    if (noite > 0) {
      G.globalCompositeOperation = 'multiply'; G.fillStyle = misturaNoite(noite); G.fillRect(0, y0, VW, hv); G.globalCompositeOperation = 'source-over';
      if (noite > .5) {
        for (const e of STARS) if (e.y > y0 && e.y < y1 && flo(t * 1.5 + e.s) % 4) R(e.x, e.y, 1, 1, e.s > 4 ? '#ffe9a8' : '#fff');
        if (SOL.y > y0 - 20 && SOL.y < y1 + 20) G.drawImage(SPR.LUA, SOL.x - 13, SOL.y - 13);
        for (const l of LUZES) if (l[1] > y0 && l[1] < y1) R(l[0], l[1], l[2], l[3], l[4]);
      }
    }
    const qf = flo(t * 5);
    for (let i = 0; i < LAVAS.length; i++) { const l = LAVAS[i]; if (l[1] > y0 - 4 && l[1] < y1) for (let j = 0; j < l[3]; j += 2) R(l[0], l[1] + j, l[2], 2, LAVA_C[(qf + i + (j >> 1) * 99 + 400 - (j >> 1)) % 4]); }
    for (const a of animB) { if (a.y > y0 - 12 && a.y < y1 + 12) a.f(t); }
    const ch = flo(t * 7);
    for (let i = 0; i < DOTS.length; i++) if ((ch - i + 800) % 8 < 2) R(DOTS[i][0] - 1, DOTS[i][1] - 1, 2, 2, '#ffd23f');
    for (let n = 0; n < NF; n++) {
      const o = NO[n];
      if (o.y < y0 - 40 || o.y > y1 + 30) continue;
      const e = EST[n], dy = hover === n ? -1 : 0;
      G.drawImage(BLOCOS[n], o.x - 10, o.y - 10 + dy);
      if (e === 'feito') {
        const f = flo(t * 7 + n * 1.7);
        G.drawImage(SPR.MOEDA[f % 4], o.x - 19, o.y - 19 + (reduz ? 0 : rnd(sin(t * 3 + n) * 1)));
        G.drawImage(SPR.MOEDA[(f + 2) % 4], o.x + 11, o.y - 19 + (reduz ? 0 : rnd(sin(t * 3 + n + 2) * 1)));
      } else if (e === 'futuro') G.drawImage(SPR.CADEADO, o.x + 6, o.y - 15 + dy);
    }
    for (const o of BN) if (o.y > y0 - 40 && o.y < y1 + 30) G.drawImage(BLOCO_BONUS, o.x - 10, o.y - 10);
    for (const q of poeira) R(rnd(q.x), rnd(q.y) - (q.v < .15 ? 1 : 0), q.v > .15 ? 2 : 1, q.v > .15 ? 2 : 1, '#fffaf0');
    const rs = ponto(roboS);
    if (rs.y > y0 - 30 && rs.y < y1 + 30) desenhaRobo(t);
    const oa = NO[ATUAL];
    if (oa.y > y0 - 10 && oa.y < y1 + 60) { const sobre = abs(roboS - sNo[ATUAL]) < 12; G.drawImage(SPR.SETA, oa.x - 4, oa.y - (sobre ? 29 : 13) - 9 + (reduz ? 0 : rnd(abs(sin(t * 3.4)) * -3))); }
    for (const q of fagulhas) R(rnd(q.x), rnd(q.y), 2, 2, q.v > .2 ? '#ffd23f' : '#fff');
  }
  const moedaHud = t => { HM.clearRect(0, 0, 8, 8); HM.drawImage(SPR.MOEDA[reduz ? 0 : flo(t * 7) % 4], 0, 0); };

  function construir(primeira) {
    medir(); posicionaBotoes(); criaCaminho();
    if (primeira) roboS = sNo[ATUAL];
    else { roboS = sNo[faseRobo]; alvoS = null; if (aoChegar) { const cb = aoChegar; aoChegar = null; cb(); } }
    criaTerreno();
    animA = []; animB = []; LAVAS = []; LUZES = []; TREES = [];
    const terra = pintaTerreno(), g = terra.getContext('2d');
    reservas(); pintaCaminho(g); colocaPecas(g); espalha(g); criaBarco(); assa(terra); criaNuvens();
    CV.width = VW; CV.height = VH;
    CV.style.width = (VW * S) + 'px'; CV.style.height = (VH * S) + 'px';
    G = CV.getContext('2d'); G.imageSmoothingEnabled = false;
    fontes = BOTOES.map(b => b.offsetWidth).join();
    desenha(0, true); moedaHud(0);
  }
  function centraAtual() {
    if (!vert) return;
    scrollTo(0, Math.max(0, NO[faseRobo].y * S - (topoPx + (innerHeight - topoPx) / 2) + 40));
  }

  /* ---------- Painel do módulo ---------- */
  const painel = $('.k-painel'), veu = $('.k-veu');
  let focoAntes = null, fimMapaM = null;
  async function abrirPainel(i, ilha) {
    const m = ilha ? ilha.m : FASES[i];
    focoAntes = document.activeElement;
    const b = BIO[i];
    painel.style.setProperty('--faixa', BI[b].t);
    const lista = ilha && !ilha.modulo ? { ...m, aulas: ilha.aulas } : m;
    const nucleo = m.aulas.filter(a => !a.opcional);
    const feitas = nucleo.filter(a => estado.feitas[a.id]).length;
    const titulo = ilha ? (ilha.modulo ? `Bônus: ${esc(m.t)}` : `Bônus do módulo ${esc(m.n)}`) : `${esc(m.n)}. ${esc(m.t)}`;
    painel.innerHTML = `<header><h2 id="painel-t">${titulo}</h2><button class="k-fecha" type="button" aria-label="Fechar o painel">×</button></header>
      <div class="painel-corpo">
        <p class="painel-mundo">Mundo ${b + 1}: ${MUNDO_NOMES[b]}${ilha ? ' · fase bônus' : ` · ${feitas} de ${nucleo.length} aulas feitas`}</p>
        <p>${ilha && !ilha.modulo ? 'Aulas opcionais: nenhuma aula do caminho principal depende delas, e nenhum exercício do caminho principal cobra o que só elas ensinam.' : esc(m.d)}</p>
        ${ilha ? '' : mapaModuloHTML(m)}
        <h3>Aulas</h3>
        <div class="painel-lista">${listaAulasHTML(lista, {}, false)}</div>
        <p class="painel-mais"><a class="botao" href="#/modulo/${esc(m.n)}">Abrir o módulo em tela cheia</a></p>
      </div>`;
    painel.setAttribute('aria-labelledby', 'painel-t');
    painel.setAttribute('aria-hidden', 'false');
    painel.setAttribute('role', 'dialog');
    painel.classList.add('on');
    veu.classList.add('on');
    painel.querySelector('.k-fecha').focus();
    fimMapaM?.();
    fimMapaM = ligarMapaModulo(painel.querySelector('.mapa-modulo'), m);
    const AULAS = await carregarModulo(m.n);
    if (!painel.classList.contains('on')) return;
    painel.querySelector('.painel-lista').innerHTML = listaAulasHTML(lista, AULAS, true);
  }
  function fecharPainel() {
    if (!painel.classList.contains('on')) return;
    painel.classList.remove('on');
    veu.classList.remove('on');
    painel.setAttribute('aria-hidden', 'true');
    fimMapaM?.(); fimMapaM = null;
    focoAntes?.focus?.();
  }
  window.__mapa = { abrirPainel: n => { const i = FASES.findIndex(m => m.n === String(n)); if (i >= 0) abrirPainel(i); }, fecharPainel, robo: () => ({ faseRobo, roboS, alvoS, fase: FASES[faseRobo].n }) };

  /* ---------- Interação ---------- */
  LISTA.addEventListener('click', e => {
    const b = e.target.closest('.fase'); if (!b) return;
    if (b.classList.contains('bonus')) { const il = ILHAS[+b.dataset.k]; andarAte(il.pai, () => abrirPainel(il.pai, il)); return; }
    const i = +b.dataset.i;
    andarAte(i, () => abrirPainel(i));
  });
  LISTA.addEventListener('pointerover', e => { const b = e.target.closest('.fase:not(.bonus)'); if (b) hover = +b.dataset.i; });
  LISTA.addEventListener('pointerout', e => { if (e.target.closest('.fase')) hover = -1; });
  LISTA.addEventListener('focusin', e => { const b = e.target.closest('.fase:not(.bonus)'); if (b && b.matches(':focus-visible')) hover = +b.dataset.i; });
  LISTA.addEventListener('focusout', () => { hover = -1; });
  veu.addEventListener('click', fecharPainel);
  painel.addEventListener('click', e => { if (e.target.closest('.k-fecha')) fecharPainel(); });
  const tecla = e => { if (e.key === 'Escape' && painel.classList.contains('on') && !document.querySelector('.veu')) fecharPainel(); };
  addEventListener('keydown', tecla);
  const continuar = e => {
    if (!e.target.closest('[data-acao="continuar"]')) return;
    andarAte(ATUAL, () => { location.hash = '#/aula/' + ultima; });
  };
  document.addEventListener('click', continuar);
  const aoTema = () => { noiteAlvo = estado.tema === 'noite' ? 1 : 0; if (reduz) { noite = noiteAlvo; desenha(0, vert); } };
  document.addEventListener('tema', aoTema);

  let tRes = 0, larg = 0;
  const aoRedimensionar = () => {
    const w = document.documentElement.clientWidth;
    H = innerHeight;
    if (vert && w === larg && W < 960) return;  // no celular a barra do navegador muda só a altura
    clearTimeout(tRes);
    tRes = setTimeout(() => { larg = w; construir(); centraAtual(); }, 160);
  };
  addEventListener('resize', aoRedimensionar);
  let ult = 0, raf = 0, vivo = true;
  function laco(ag) {
    if (!vivo) return;
    raf = requestAnimationFrame(laco);
    if (document.hidden) { ult = ag; return; }
    const passo = alvoS !== null || pulo > 0 ? 15 : 62;
    if (ag - ult < passo) return;
    const dt = Math.min(.1, (ag - ult) / 1000); ult = ag;
    const t = ag / 1000;
    atualiza(dt); desenha(t); moedaHud(t);
  }
  const aoRolar = () => { if (reduz && vert) desenha(0); };
  addEventListener('scroll', aoRolar, { passive: true });
  function abertura() {
    const fim = () => { $('#hMoedas').textContent = String(MOEDAS_TOT).padStart(3, '0'); };
    const I = $('#iris');
    if (reduz || jaAbriu) { I.remove(); fim(); return; }
    jaAbriu = true;
    html.classList.add('entra');
    const cw = Math.ceil(W / S), ch = Math.ceil(H / S); I.width = cw; I.height = ch;
    I.style.width = (cw * S) + 'px'; I.style.height = (ch * S) + 'px'; I.style.background = 'none';
    const g = I.getContext('2d'), p = ponto(roboS), x = rnd(p.x), y = rnd(p.y - (vert ? scrollY / S : 0)) - 14;
    const raio = Math.hypot(Math.max(x, cw - x), Math.max(y, ch - y)) + 6, rr = (a, b, w, h, c) => { g.fillStyle = c; g.fillRect(a, b, w, h); };
    let t0 = 0;
    (function q(ag) {
      if (!vivo) return;
      t0 = t0 || ag;
      const u = (ag - t0) / 1000, k = cl((u - .25) / .85, 0, 1), r = rnd((u < .25 ? cl(u / .25, 0, 1) * 16 : 16 + k * k * (raio - 16)));
      g.globalCompositeOperation = 'source-over'; rr(0, 0, cw, ch, '#0d0a26');
      g.globalCompositeOperation = 'destination-out'; disco(rr, x, y, r, '#000');
      if (k < 1) requestAnimationFrame(q); else I.remove();
    })(performance.now());
    setTimeout(() => {
      if (!vivo) return;
      const t1 = performance.now();
      (function c() { if (!vivo) return; const k = cl((performance.now() - t1) / 800, 0, 1); $('#hMoedas').textContent = String(rnd(k * MOEDAS_TOT)).padStart(3, '0'); if (k < 1) setTimeout(c, 40); })();
      pulo = 1;
    }, 1000);
  }
  history.scrollRestoration = 'manual';
  function iniciar() {
    if (!vivo) return;
    construir(true); larg = W; atualizaMundo(); centraAtual();
    abertura();
    document.fonts?.ready.then(() => { if (!vivo || BOTOES.map(b => b.offsetWidth).join() === fontes) return; if (vert) posicionaBotoes(); else construir(); });
    if (!reduz) raf = requestAnimationFrame(laco);
  }
  const espera = document.fonts?.load ? Promise.race([Promise.all([document.fonts.load('20px "Jersey 10"', 'Programação'), document.fonts.load('16px "Press Start 2P"', 'Do zero')]), new Promise(r => setTimeout(r, 800))]) : Promise.resolve();
  espera.catch(() => {}).then(iniciar);

  aoSair(() => {
    vivo = false;
    cancelAnimationFrame(raf);
    clearTimeout(tRes);
    removeEventListener('resize', aoRedimensionar);
    removeEventListener('keydown', tecla);
    removeEventListener('scroll', aoRolar);
    document.removeEventListener('click', continuar);
    document.removeEventListener('tema', aoTema);
    fimMapaM?.();
    html.classList.remove('rota-mapa', 'vert', 'entra');
    delete window.__mapa;
  });
}
