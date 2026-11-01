// Mapa de uma tela do módulo: as peças (caixas com nome; toque abre a definição) e as ligações (setas com rótulo).
// Desenhado em SVG no cliente, em camadas de cima para baixo; numa tela estreita cabem 2 caixas por linha.
import { esc } from './base.js';

export function mapaModuloHTML(m) {
  if (!m.mapa?.pecas?.length) return '';
  return `<figure class="mapa-modulo" data-n="${esc(m.n)}"><figcaption>Mapa do módulo. Toque numa peça para ver o que ela é.</figcaption><div class="mm-svg"></div><p class="mm-def" aria-live="polite">${esc(m.mapa.pecas[0][0])}: ${esc(m.mapa.pecas[0][1])}</p></figure>`;
}

function quebra(txt, max) {
  const linhas = [];
  let at = '';
  for (const p of txt.split(' ')) {
    if (at && (at + ' ' + p).length > max) { linhas.push(at); at = p; } else at = at ? at + ' ' + p : p;
  }
  if (at) linhas.push(at);
  return linhas;
}

function desenhar(fig, m) {
  const caixa = fig.querySelector('.mm-svg');
  const W = Math.max(280, Math.floor(caixa.clientWidth || fig.clientWidth || 320));
  const nomes = m.mapa.pecas.map(p => p[0]);
  const def = Object.fromEntries(m.mapa.pecas);
  const arestas = (m.mapa.ligacoes || []).filter(([a, b]) => def[a] !== undefined && def[b] !== undefined && a !== b);
  // Camada de cada peça: o caminho mais longo desde uma peça sem entrada.
  const camada = {};
  const entra = n => arestas.filter(e => e[1] === n).map(e => e[0]);
  const calc = (n, pilha = []) => {
    if (camada[n] !== undefined) return camada[n];
    if (pilha.includes(n)) return 0;
    const ant = entra(n);
    camada[n] = ant.length ? Math.max(...ant.map(a => calc(a, [...pilha, n]) + 1)) : 0;
    return camada[n];
  };
  nomes.forEach(n => calc(n));
  const porLinha = W < 480 ? 2 : W < 760 ? 3 : 4;
  const gx = 14, gy = 60;
  const bw = Math.min(200, Math.floor((W - (porLinha + 1) * gx) / porLinha));
  const maxC = Math.max(8, Math.floor((bw - 16) / 8.6));
  const linhas = [];
  const maxCam = Math.max(...nomes.map(n => camada[n]));
  const pos = {};
  for (let c = 0; c <= maxCam; c++) {
    let nesta = nomes.filter(n => camada[n] === c);
    // ordena pelo centro das peças de cima que apontam para ela (menos cruzamentos)
    nesta = nesta.map(n => { const xs = entra(n).filter(a => pos[a]).map(a => pos[a].x); return [n, xs.length ? xs.reduce((s, x) => s + x, 0) / xs.length : W / 2]; }).sort((a, b) => a[1] - b[1]).map(x => x[0]);
    for (let i = 0; i < nesta.length; i += porLinha) {
      const fatia = nesta.slice(i, i + porLinha);
      linhas.push(fatia);
      const tot = fatia.length * bw + (fatia.length - 1) * gx;
      fatia.forEach((n, k) => { pos[n] = { x: (W - tot) / 2 + k * (bw + gx) + bw / 2, linha: linhas.length - 1, txt: quebra(n, maxC) }; });
    }
  }
  let y = 6;
  linhas.forEach(l => {
    const h = Math.max(...l.map(n => 20 + pos[n].txt.length * 18));
    l.forEach(n => { pos[n].y = y; pos[n].h = h; });
    y += h + gy;
  });
  const H = y - gy + 8;
  const rotulos = [];
  const lugar = (x, yy, w) => {
    let t = 0;
    while (rotulos.some(r => Math.abs(r.x - x) < (r.w + w) / 2 + 4 && Math.abs(r.y - yy) < 17) && t < 6) { yy += (t % 2 ? -1 : 1) * 17 * (t + 1); t++; }
    rotulos.push({ x, y: yy, w });
    return yy;
  };
  const setas = arestas.map(([a, b, rot], i) => {
    const A = pos[a], B = pos[b];
    let d, lx, ly;
    if (B.linha > A.linha) {
      const x1 = A.x, y1 = A.y + A.h, x2 = B.x, y2 = B.y - 3;
      if (B.linha === A.linha + 1) {
        const my = (y1 + y2) / 2;
        d = `M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}`;
        lx = (x1 + x2) / 2; ly = my;
      } else {
        const lado = (x1 + x2) / 2 < W / 2 ? 8 : W - 8;
        d = `M${x1} ${y1} C${x1} ${y1 + 30} ${lado} ${y1 + 30} ${lado} ${(y1 + y2) / 2} S${x2} ${y2 - 30} ${x2} ${y2}`;
        lx = lado * .55 + x2 * .45; ly = y2 - gy / 2 + 4;
      }
    } else {
      const dir = B.x >= A.x ? 1 : -1;
      const x1 = A.x + dir * bw / 2, y1 = A.y + A.h / 2, x2 = B.x - dir * (bw / 2 + 3), y2 = B.y + B.h / 2;
      const cy = Math.min(y1, y2) - 34;
      d = `M${x1} ${y1} C${x1 + dir * 24} ${cy} ${x2 - dir * 24} ${cy} ${x2} ${y2}`;
      lx = (x1 + x2) / 2; ly = cy + 6;
    }
    const w = Math.min(W - 8, rot.length * 7.2 + 14);
    lx = Math.min(Math.max(lx, w / 2 + 2), W - w / 2 - 2);
    ly = lugar(lx, ly, w);
    return { a, b, d, rot, lx, ly, w, i };
  });
  caixa.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="group" aria-label="Mapa do módulo ${esc(m.n)}: ${nomes.length} peças e ${arestas.length} ligações">
    <defs><marker id="mm-ponta-${esc(m.n)}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mm-ponta"/></marker></defs>
    ${setas.map(s => `<path class="mm-seta" data-de="${esc(s.a)}" data-para="${esc(s.b)}" d="${s.d}" marker-end="url(#mm-ponta-${esc(m.n)})"/>`).join('')}
    ${setas.map(s => `<g class="mm-rot" data-de="${esc(s.a)}" data-para="${esc(s.b)}" aria-hidden="true"><rect x="${s.lx - s.w / 2}" y="${s.ly - 10}" width="${s.w}" height="20" rx="2"/><text x="${s.lx}" y="${s.ly + 4.5}">${esc(s.rot)}</text></g>`).join('')}
    ${nomes.map(n => { const p = pos[n]; return `<g class="mm-caixa" data-peca="${esc(n)}" role="button" tabindex="0" aria-label="${esc(n)}: ${esc(def[n])}"><rect x="${p.x - bw / 2}" y="${p.y}" width="${bw}" height="${p.h}"/>${p.txt.map((t, k) => `<text x="${p.x}" y="${p.y + p.h / 2 - (p.txt.length - 1) * 9 + 6 + k * 18}">${esc(t)}</text>`).join('')}</g>`; }).join('')}
  </svg>`;
  caixa.dataset.largura = W;
}

export function ligarMapaModulo(fig, m) {
  if (!fig || !m.mapa?.pecas?.length) return () => {};
  const def = Object.fromEntries(m.mapa.pecas);
  desenhar(fig, m);
  const mostra = g => {
    const n = g.dataset.peca;
    fig.querySelectorAll('.mm-caixa').forEach(x => x.classList.toggle('ativa', x === g));
    fig.querySelectorAll('.mm-seta, .mm-rot').forEach(x => x.classList.toggle('ativa', x.dataset.de === n || x.dataset.para === n));
    const liga = (m.mapa.ligacoes || []).filter(l => l[0] === n || l[1] === n).map(([a, b, r]) => `${a} ${r} ${b}`);
    fig.querySelector('.mm-def').innerHTML = `<strong>${esc(n)}.</strong> ${esc(def[n])}${liga.length ? ` <span class="mm-liga">${esc(liga.join('; '))}.</span>` : ''}`;
  };
  fig.addEventListener('click', e => { const g = e.target.closest('.mm-caixa'); if (g) mostra(g); });
  fig.addEventListener('keydown', e => { const g = e.target.closest('.mm-caixa'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); mostra(g); } });
  let ult = fig.querySelector('.mm-svg').dataset.largura;
  const ro = 'ResizeObserver' in window ? new ResizeObserver(() => {
    const w = String(Math.max(280, Math.floor(fig.querySelector('.mm-svg').clientWidth)));
    if (w !== ult) { ult = w; desenhar(fig, m); ult = fig.querySelector('.mm-svg').dataset.largura; }
  }) : null;
  ro?.observe(fig.querySelector('.mm-svg'));
  return () => ro?.disconnect();
}
