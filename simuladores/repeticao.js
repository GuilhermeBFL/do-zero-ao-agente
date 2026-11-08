// Simulador "O laço girando" (aula 2.5). Especificação: simuladores/_espec/repeticao.md (02/11/2026).
// Mesmo padrão do exemplo.js: a situação original fica em cinza (a coluna "Antes do laço", o Momento 0 do caso), uma
// caixa escolhe o caso, botões avançam pelos momentos (Antes, Volta 1, 2, 3, Fim) e um texto curto explica o que mudou.
// Valores e saídas de execuções reais no Python 3.12.10 (02/11/2026). Desenho em SVG gerado aqui, sem biblioteca, sem voz.
// Toque (alvos de 44 px), teclado (Tab, setas, Enter, Espaço) e "reduzir movimento" respeitados.
// Uso numa aula: ['simulador', { id: 'repeticao', titulo: 'O laço girando' }]. O site chama montar(el, opcoes).

const CINZA = '#9aa0b8';
const T = (...l) => l;
const CASOS = {
  for: {
    nome: 'for numa lista de 3',
    codigo: ['parcelas = [300, 250, 450]', 'total = 0', 'for parcela in parcelas:', '    total = total + parcela', 'print(total)'],
    corpo: [4], vars: ['parcelas', 'total', 'parcela'],
    rot: ['Antes', 'Volta 1', 'Volta 2', 'Volta 3', 'Fim'],
    m: [
      { l: 2, v: { parcelas: '[300, 250, 450]', total: '0', parcela: null }, voltas: 0, tela: T(), item: -1, conta: 'começa em 0',
        t: 'Antes do laço: o `total` começa em 0 e a variável `parcela` ainda não existe. A lista tem 3 itens, então serão 3 voltas. O cinza guarda este começo.' },
      { l: 4, v: { parcelas: '[300, 250, 450]', total: '300', parcela: '300' }, voltas: 1, tela: T(), item: 0, conta: '0 + 300',
        t: 'Volta 1: `parcela` recebe o primeiro item, 300. A linha com recuo faz `total = 0 + 300`.' },
      { l: 4, v: { parcelas: '[300, 250, 450]', total: '550', parcela: '250' }, voltas: 2, tela: T(), item: 1, conta: '300 + 250',
        t: 'Volta 2: `parcela` recebe 250, e `total = 300 + 250 = 550`. A lista não muda; só `parcela` e `total`.' },
      { l: 4, v: { parcelas: '[300, 250, 450]', total: '1000', parcela: '450' }, voltas: 3, tela: T(), item: 2, conta: '550 + 450',
        t: 'Volta 3: o último item, 450. `total = 550 + 450 = 1000`.' },
      { l: 5, v: { parcelas: '[300, 250, 450]', total: '1000', parcela: '450' }, voltas: 3, tela: T('1000'), item: 2, fim: true, conta: 'print mostra 1000',
        t: 'A lista acabou e o laço termina. A linha sem recuo roda uma vez e mostra 1000. Repare: `parcela` continua valendo 450, o último item.' }
    ]
  },
  while: {
    nome: 'while com contador',
    codigo: ['tentativas = 0', 'while tentativas < 3:', '    tentativas = tentativas + 1', '    print("Tentativa", tentativas)', 'print("Parei")'],
    corpo: [3, 4], vars: ['tentativas'],
    rot: ['Antes', 'Volta 1', 'Volta 2', 'Volta 3', 'Fim'],
    m: [
      { l: 1, v: { tentativas: '0' }, cond: ['0 < 3', true], voltas: 0, tela: T(),
        t: 'Antes do laço: `tentativas` vale 0. O while testa `0 < 3`, que é verdadeiro, então vai entrar no bloco.' },
      { l: 4, v: { tentativas: '1' }, cond: ['0 < 3', true], voltas: 1, tela: T('Tentativa 1'),
        t: 'Volta 1: a linha 3 soma 1, e `tentativas` vira 1. O print mostra `Tentativa 1`. É essa linha que vai fazer o laço terminar.' },
      { l: 4, v: { tentativas: '2' }, cond: ['1 < 3', true], voltas: 2, tela: T('Tentativa 1', 'Tentativa 2'),
        t: 'Volta 2: o teste `1 < 3` deu verdadeiro. `tentativas` vira 2.' },
      { l: 4, v: { tentativas: '3' }, cond: ['2 < 3', true], voltas: 3, tela: T('Tentativa 1', 'Tentativa 2', 'Tentativa 3'),
        t: 'Volta 3: o teste `2 < 3` deu verdadeiro. `tentativas` vira 3. O próximo teste vai ser `3 < 3`.' },
      { l: 5, v: { tentativas: '3' }, cond: ['3 < 3', false], voltas: 3, tela: T('Tentativa 1', 'Tentativa 2', 'Tentativa 3', 'Parei'),
        t: 'O teste `3 < 3` é falso: o laço termina sem rodar o bloco de novo, e a linha sem recuo mostra `Parei`. Três voltas, porque o 3 não é menor que 3.' }
    ]
  },
  infinito: {
    nome: 'Laço que nunca termina',
    codigo: ['tentativas = 0', 'while tentativas < 3:', '    print("Tentativa", tentativas)', 'print("Parei")'],
    corpo: [3], vars: ['tentativas'],
    rot: ['Antes', 'Volta 1', 'Volta 2', 'Volta 3', 'Nunca chega'],
    m: [
      { l: 1, v: { tentativas: '0' }, cond: ['0 < 3', true], voltas: 0, tela: T(),
        t: 'O mesmo começo do caso anterior, mas falta a linha que soma 1. Compare o cinza com o valor de agora a cada volta.' },
      { l: 3, v: { tentativas: '0' }, cond: ['0 < 3', true], voltas: 1, tela: T('Tentativa 0'),
        t: 'Volta 1: nenhuma linha do bloco muda `tentativas`. Ela continua 0, igual ao cinza.' },
      { l: 3, v: { tentativas: '0' }, cond: ['0 < 3', true], voltas: 2, tela: T('Tentativa 0', 'Tentativa 0'),
        t: 'Volta 2: o teste é o mesmo, `0 < 3`, e a resposta é a mesma, verdadeiro.' },
      { l: 3, v: { tentativas: '0' }, cond: ['0 < 3', true], voltas: 3, tela: T('Tentativa 0', 'Tentativa 0', 'Tentativa 0'),
        t: 'Volta 3: no caso anterior, o laço parava aqui. Neste, a condição testa um valor que nunca muda.' },
      { l: 3, v: { tentativas: '0' }, cond: ['0 < 3', true], voltas: 'não para', ctrlc: true,
        tela: T('Tentativa 0', 'Tentativa 0', 'Tentativa 0', 'Traceback (most recent call last):', '  File "C:\\Users\\SeuNome\\estudo\\infinito.py", line 3, in <module>', '    print("Tentativa", tentativas)', 'KeyboardInterrupt'),
        t: 'O laço não termina, e `Parei` nunca aparece. Num teste real, em cerca de 6 segundos saíram mais de 3 milhões de linhas `Tentativa 0`. No terminal, Ctrl+C interrompe o programa.' }
    ]
  }
};
const RODAPE = 'Saídas de execuções reais no Python 3.12. O laço infinito foi interrompido com Ctrl+C.';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const comCodigo = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');   // trechos entre crases viram <code> (a crase não aparece)
let SEQ = 0;
let MEDIDOR;
const larg = (txt, px, peso = 400, mono = false) => {
  MEDIDOR ||= document.createElement('canvas').getContext('2d');
  MEDIDOR.font = `${peso} ${px}px ${mono ? 'ui-monospace, "Cascadia Mono", Consolas, monospace' : '"Atkinson Hyperlegible", system-ui, sans-serif'}`;
  return MEDIDOR.measureText(txt).width;
};

const ESTILO = `
.rep{container-type:inline-size;display:grid;grid-template-columns:minmax(0,1fr);gap:16px;font-size:17px;line-height:1.5;color:var(--texto)}
.rep-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.rep-caso{display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-weight:700;margin:0}
.rep-caso select{flex:0 1 auto;min-width:0;min-height:44px;padding:0 10px;border:2px solid var(--texto);background:var(--papel-2);color:var(--texto);font-size:17px;max-width:100%;cursor:pointer}
html[data-tema="noite"] .rep select{color-scheme:dark}
.rep-grade{display:grid;grid-template-columns:minmax(0,1fr);gap:16px;align-items:start}
@container (min-width:600px){.rep-grade{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}}
.rep-rot{margin:0 0 6px;font-weight:700;font-size:15px;color:var(--texto-2)}
.rep-codigo{background:#0d0a26;color:#f0f1ff;border:2px solid #0d0a26;padding:8px 0;font-family:var(--mono);font-size:14.5px;line-height:1.55}
.rep-l{display:grid;grid-template-columns:2.4ch 2.2ch minmax(0,1fr);align-items:start;padding:2px 8px 2px 4px}
.rep-n{color:#9aa3d6;text-align:right;user-select:none}
.rep-seta{color:#ffd23f;text-align:center;visibility:hidden}
.rep-c{white-space:pre-wrap;overflow-wrap:anywhere;padding-left:calc((var(--r) + 2) * 1ch);text-indent:calc((var(--r) + 2) * -1ch);border-left:4px solid transparent;padding-right:4px;transition:background-color .3s,color .3s}
.rep-l.rep-dentro .rep-c{border-left-color:#8f9bff}
.rep-rec{color:#5b6196}
.rep-l.rep-agora .rep-seta{visibility:visible}
.rep-l.rep-agora .rep-c{background:#ffd23f;color:#1b1440}
.rep-l.rep-agora .rep-rec{color:#8a7a2a}
.rep-leg-cod{margin:6px 0 0;font-size:14px;line-height:1.35;color:var(--texto-2);display:flex;gap:8px;align-items:center}
.rep-leg-cod i{display:inline-block;width:4px;height:18px;background:#8f9bff;flex:0 0 auto;outline:2px solid #0d0a26}
.rep-vars{width:100%;border-collapse:collapse;font-size:15.5px;line-height:1.35;table-layout:fixed}
.rep-vars thead th{text-align:left;font-weight:700;font-size:14px;color:var(--texto-2);padding:0 8px 5px 0;border-bottom:2px solid var(--texto);vertical-align:bottom}
.rep-vars tbody th{text-align:left;padding:8px 0 3px;font-family:var(--mono);font-weight:700;font-size:15px}
.rep-vars td{padding:0 8px 9px 0;border-bottom:1px solid var(--linha);vertical-align:top}
.rep-val{display:inline-block;font-family:var(--mono);font-size:14px;padding:2px 7px;border:2px solid var(--texto);background:var(--papel-2);max-width:100%}
.rep-val.rep-cinza{background:${CINZA};color:#1b1440;border-color:${CINZA}}
.rep-val.rep-nada{font-family:var(--leitura);font-style:italic;border-style:dashed}
.rep-val.rep-cinza.rep-nada{border-color:#6d7390}
.rep-tag{display:inline-block;margin:4px 4px 0 0;padding:0 6px;font-size:13px;line-height:1.5;font-weight:700;border:1.5px solid var(--texto)}
.rep-tag.rep-mudou{background:#ffd23f;color:#1b1440;border-color:#1b1440}
.rep-tag.rep-igual{background:${CINZA};color:#1b1440;border-color:#6d7390}
@keyframes rep-pisca{0%,40%{background:#ffd23f;color:#1b1440;transform:scale(1.08)}100%{}}
.rep-pisca{animation:rep-pisca .7s ease-out 1}
.rep-cond{margin:10px 0 0;font-size:16px;line-height:1.45}
.rep-cond code{font-size:15px}
.rep-sim{color:var(--certo);font-weight:700}
.rep-nao{color:var(--errado);font-weight:700}
.rep-voltas{margin:0;font-weight:700;font-size:19px}
.rep-voltas strong{font-family:var(--mono)}
.rep-cena{display:block;width:100%;overflow:visible}
.rep-cena text{font-family:var(--leitura);fill:var(--texto)}
.rep-cena .rep-t2{fill:var(--texto-2)}
.rep-cena .rep-mono{font-family:var(--mono)}
.rep-ctrlc[hidden]{display:none}
.rep-ctrlc{margin:0;display:flex;align-items:center;gap:10px;padding:3px 10px;background:#b3261e;color:#fff;font-size:14.5px;font-weight:700;line-height:1.4}
.rep-ctrlc kbd{font-family:var(--mono);background:#fff;color:#b3261e;padding:0 6px;border-radius:2px}
.rep-tela-caixa{border:2px solid #0d0a26;background:#000}
.rep-tela-tit{padding:3px 12px;background:#2a2470;color:#dfe3ff;font-weight:700;font-size:15px}
.rep-tela{margin:0;padding:10px 14px;min-height:3.2em;color:#c8ffd4;font-family:var(--mono);font-size:14px;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere}
.rep-tela .rep-vazia{color:#8a90b8;font-style:italic;font-family:var(--leitura)}
.rep-tela .rep-nota{color:#8a90b8}
.rep-momentos{display:flex;flex-wrap:wrap;gap:6px}
.rep-momentos button{min-height:44px;min-width:44px;padding:0 12px;border:2px solid var(--texto);background:transparent;color:var(--texto);font:inherit;font-weight:700;cursor:pointer}
.rep-momentos button[aria-pressed="true"]{background:#ffd23f;color:#1b1440;border-color:#1b1440}
.rep-momentos .rep-prox{border-style:dashed}
.rep-texto{margin:0;min-height:4.5em;padding:10px 12px;border-left:6px solid #ffd23f;background:var(--papel)}
.rep-rodape{margin:0;font-size:13.5px;line-height:1.45;color:var(--texto-2)}
.rep.rep-quieto *{transition:none!important;animation:none!important}
@media (prefers-reduced-motion:reduce){.rep *{transition:none!important;animation:none!important}}
`;

export function montar(el, opcoes = {}) {
  const uid = 'rep' + (++SEQ);
  const reduz = () => opcoes.reduz === true || matchMedia('(prefers-reduced-motion: reduce)').matches;
  let caso = 'for', m = 0;

  el.innerHTML = `<div class="rep${opcoes.reduz ? ' rep-quieto' : ''}">
    <label class="rep-caso">Caso: <select>${Object.entries(CASOS).map(([k, c]) => `<option value="${k}">${c.nome}</option>`).join('')}</select></label>
    <div class="rep-grade">
      <div>
        <p class="rep-rot" id="${uid}-cod">O programa (a seta marca a linha que acabou de rodar)</p>
        <div class="rep-codigo" role="group" aria-labelledby="${uid}-cod"></div>
        <p class="rep-leg-cod"><i aria-hidden="true"></i>Barra azul: linhas dentro do laço, as que se repetem.</p>
      </div>
      <div class="rep-quadro" role="group">
        <table class="rep-vars"><thead><tr><th scope="col">Antes do laço</th><th scope="col">Agora</th></tr></thead></table>
        <p class="rep-cond"></p>
      </div>
    </div>
    <div>
      <p class="rep-voltas" aria-live="off"></p>
      <svg class="rep-cena" aria-hidden="true"></svg>
    </div>
    <div>
      <p class="rep-ctrlc" hidden><kbd>Ctrl+C</kbd> a execução foi interrompida aqui</p>
      <div class="rep-tela-caixa"><div class="rep-tela-tit">Tela</div><pre class="rep-tela"></pre></div>
    </div>
    <div class="rep-momentos" role="group" aria-label="Momentos">${[0, 1, 2, 3, 4].map(i => `<button type="button" data-m="${i}" aria-pressed="${i === 0}"></button>`).join('')}<button type="button" class="rep-prox">Próximo passo</button></div>
    <p class="rep-texto" aria-live="polite"></p>
    <p class="rep-rodape">${RODAPE}</p>
  </div>`;
  const st = document.createElement('style');
  st.textContent = ESTILO;
  el.prepend(st);

  const $ = s => el.querySelector(s);
  const cod = $('.rep-codigo'), tabela = $('.rep-vars'), cond = $('.rep-cond'), quadro = $('.rep-quadro');
  const voltasEl = $('.rep-voltas'), cena = $('.rep-cena'), tela = $('.rep-tela'), ctrlc = $('.rep-ctrlc');

  // Código: número da linha, seta, recuo visível (pontos) e barra lateral nas linhas que se repetem.
  const montaCodigo = () => {
    const c = CASOS[caso];
    cod.innerHTML = c.codigo.map((linha, i) => {
      const r = linha.match(/^ */)[0].length;
      return `<div class="rep-l${c.corpo.includes(i + 1) ? ' rep-dentro' : ''}" data-l="${i + 1}"><span class="rep-n" aria-hidden="true">${i + 1}</span><span class="rep-seta" aria-hidden="true">▶</span><span class="rep-c" style="--r:${r}"><span class="rep-sr" data-agora-sr></span><span class="rep-sr">Linha ${i + 1}${r ? ', com recuo' : ''}: </span>${r ? `<span class="rep-rec" aria-hidden="true">${'·'.repeat(r)}</span>` : ''}${esc(linha.slice(r))}</span></div>`;
    }).join('');
    el.querySelectorAll('[data-m]').forEach((b, i) => { b.innerHTML = `<span class="rep-sr">Momento ${i === 4 ? '∞' : i}: </span>${c.rot[i]}`; });
  };

  const valorHtml = (v, cinza) => v === null
    ? `<span class="rep-val rep-nada${cinza ? ' rep-cinza' : ''}">não existe</span>`
    : `<span class="rep-val${cinza ? ' rep-cinza' : ''}">${esc(v)}</span>`;

  // A cena: o objeto concreto do laço. No for, a lista na esteira, o leitor (parcela) e o visor do caixa (total).
  // No while, o semáforo do teste e a pista da volta, com um risco por volta dada.
  const desenhaCena = () => {
    const c = CASOS[caso], mo = c.m[m];
    const W = Math.max(280, Math.round(cena.getBoundingClientRect().width || el.clientWidth || 320));
    let s = '', H;
    if (caso === 'for') {
      H = 104;
      const itens = [300, 250, 450];
      const tw = Math.min(140, Math.round(W * 0.36)), tx = W - tw - 2;
      const bw = Math.max(44, Math.min(66, Math.floor((tx - 30 - 12) / 3))), bh = 40, by = 24;
      s += `<text x="0" y="15" font-size="13.5" class="rep-t2">a lista parcelas (não muda)</text>`;
      itens.forEach((v, i) => {
        const x = 1 + i * (bw + 6), agora = i === mo.item, passou = mo.item > i;
        s += `<rect x="${x}" y="${by}" width="${bw}" height="${bh}" fill="${agora ? '#ffd23f' : passou ? 'var(--papel-3)' : 'var(--papel-2)'}" stroke="var(--texto)" stroke-width="2"/>`
          + `<text x="${x + bw / 2}" y="${by + 26}" font-size="16" font-weight="700" text-anchor="middle" class="rep-mono"${agora ? ' style="fill:#1b1440"' : ''}>${v}</text>`;
        if (passou) s += `<text x="${x + bw - 4}" y="${by + 13}" font-size="12" text-anchor="end" style="fill:var(--certo)">✓</text>`;
      });
      // a esteira embaixo da lista
      const ew = 3 * bw + 12;
      s += `<rect x="1" y="${by + bh + 2}" width="${ew}" height="6" fill="var(--texto-2)"/>`;
      for (let x = 8; x < ew; x += 18) s += `<circle cx="${x}" cy="${by + bh + 12}" r="3" fill="var(--texto-2)"/>`;
      if (mo.item >= 0) {
        const cx = 1 + mo.item * (bw + 6) + bw / 2;
        s += `<path d="M${cx} ${by + bh + 18} l-7 10 h14 z" fill="var(--texto)"/><text x="${cx}" y="${by + bh + 42}" font-size="14" font-weight="700" text-anchor="middle" class="rep-mono">parcela</text>`;
      } else s += `<text x="1" y="${by + bh + 38}" font-size="14" class="rep-t2">parcela ainda não existe</text>`;
      // o visor do caixa
      s += `<text x="${tx}" y="15" font-size="13.5" class="rep-t2">o caixa: total</text>`
        + `<rect x="${tx}" y="${by}" width="${tw}" height="${bh}" fill="#0d0a26" stroke="var(--texto)" stroke-width="2"/>`
        + `<text x="${tx + tw / 2}" y="${by + 28}" font-size="21" font-weight="700" text-anchor="middle" class="rep-mono" style="fill:#c8ffd4">${esc(mo.v.total)}</text>`
        + `<text x="${tx + tw / 2}" y="${by + bh + 24}" font-size="14" text-anchor="middle" class="rep-t2">${esc(mo.conta)}</text>`;
      const ax = 1 + 3 * bw + 12 + 8;
      if (mo.item >= 0 && !mo.fim && tx - ax > 26) s += `<path d="M${ax} ${by + bh / 2} H${tx - 6}" stroke="var(--texto)" stroke-width="2.5"/><path d="M${tx - 4} ${by + bh / 2} l-9 -6 v12 z" fill="var(--texto)"/>`
        + (tx - ax > 90 ? `<text x="${(ax + tx) / 2}" y="${by + bh / 2 - 7}" font-size="13" text-anchor="middle" class="rep-t2">soma a parcela</text>` : '');
    } else {
      H = 116;
      const [teste, ok] = mo.cond;
      const nunca = mo.voltas === 'não para';
      // semáforo do teste
      s += `<rect x="1" y="6" width="34" height="78" rx="9" fill="#1b1440" stroke="var(--texto)" stroke-width="2"/>`
        + `<circle cx="18" cy="27" r="11" fill="${ok ? '#4a4470' : '#ff5a4f'}"/><circle cx="18" cy="63" r="11" fill="${ok ? '#3ad07a' : '#4a4470'}"/>`
        + `<rect x="15" y="84" width="6" height="22" fill="var(--texto-2)"/>`;
      s += `<text x="44" y="20" font-size="13.5" class="rep-t2">o teste do while</text>`
        + `<text x="44" y="44" font-size="18" font-weight="700" class="rep-mono">${esc(teste)}</text>`
        + `<text x="44" y="67" font-size="15" font-weight="700" style="fill:${ok ? 'var(--certo)' : 'var(--errado)'}">${ok ? 'True: entra' : 'False: sai'}</text>`;
      // saída do laço
      const corSai = ok ? 'var(--texto-2)' : 'var(--errado)';
      s += `<path d="M24 104 H70" stroke="${corSai}" stroke-width="2.5"${ok ? ' stroke-dasharray="4 4"' : ''}/><path d="M76 104 l-9 -6 v12 z" fill="${corSai}"/>`
        + `<text x="82" y="109" font-size="14" font-weight="${ok ? 400 : 700}" style="fill:${corSai}">${ok ? 'sai quando der False' : 'saiu do laço'}</text>`;
      // pista da volta
      const xT = Math.max(150, Math.min(W * 0.42, 260)), wT = W - xT - 3, yT = 8, hT = 84;
      const corPista = ok ? 'var(--texto)' : 'var(--texto-2)';
      s += `<path d="M${xT - 34} 44 H${xT - 4}" stroke="${corPista}" stroke-width="2.5"/><path d="M${xT} 44 l-9 -6 v12 z" fill="${corPista}"/>`
        + `<rect x="${xT}" y="${yT}" width="${wT}" height="${hT}" rx="30" fill="none" stroke="${corPista}" stroke-width="3"${ok ? '' : ' stroke-dasharray="7 5"'}/>`
        + `<path d="M${xT + wT / 2 + 6} ${yT} l-10 -6 v12 z" fill="${corPista}"/><path d="M${xT + wT / 2 - 6} ${yT + hT} l10 -6 v12 z" fill="${corPista}"/>`
        + `<text x="${xT + wT / 2}" y="${yT + 26}" font-size="13.5" text-anchor="middle" class="rep-t2">${['a volta (o bloco com recuo): um risco por volta', 'a volta: um risco por volta', 'um risco por volta'].find(t => larg(t, 13.5) + 44 <= wT) || 'a volta'}</text>`;
      const n = typeof mo.voltas === 'number' ? mo.voltas : 3;
      const larguraRiscos = n * 12 + (nunca ? 30 : 0);
      let rx = xT + wT / 2 - larguraRiscos / 2;
      for (let i = 0; i < n; i++, rx += 12) s += `<rect x="${rx}" y="${yT + 38}" width="5" height="26" fill="var(--texto)"/>`;
      if (nunca) s += `<text x="${rx + 2}" y="${yT + 60}" font-size="22" font-weight="700">…</text>`;
      if (!n) s += `<text x="${xT + wT / 2}" y="${yT + 58}" font-size="14" text-anchor="middle" class="rep-t2">nenhuma volta ainda</text>`;
    }
    cena.setAttribute('viewBox', `0 0 ${W} ${H}`); cena.setAttribute('height', H);
    cena.innerHTML = s;
  };

  const desenha = (pisca = true) => {
    const c = CASOS[caso], mo = c.m[m], ant = c.m[Math.max(0, m - 1)], orig = c.m[0];
    // linha destacada
    el.querySelectorAll('.rep-l').forEach(l => {
      const agora = +l.dataset.l === mo.l;
      l.classList.toggle('rep-agora', agora);
      l.querySelector('[data-agora-sr]').textContent = agora ? 'Acabou de rodar. ' : '';
    });
    // quadro das variáveis: cinza (antes do laço, fixo) e agora
    tabela.querySelectorAll('tbody').forEach(t => t.remove());
    tabela.insertAdjacentHTML('beforeend', c.vars.map(k => {
      const v = mo.v[k], mudou = m > 0 && v !== ant.v[k], igual = m > 0 && v === orig.v[k];
      return `<tbody><tr><th colspan="2" scope="rowgroup">${k}</th></tr><tr><td>${valorHtml(orig.v[k], true)}</td><td><span class="rep-agora-v${mudou && pisca && !reduz() ? ' rep-pisca' : ''}">${valorHtml(v, false)}</span>${mudou ? ' <span class="rep-tag rep-mudou">mudou</span>' : ''}${igual ? ' <span class="rep-tag rep-igual">igual ao cinza</span>' : ''}</td></tr></tbody>`;
    }).join(''));
    // linha da condição (só no while)
    if (mo.cond) {
      const [teste, ok] = mo.cond;
      const quando = m === 0 ? 'Teste antes da volta 1' : m < 4 ? `Teste antes da volta ${m}` : caso === 'while' ? 'Último teste' : 'Teste de toda volta';
      cond.hidden = false;
      cond.innerHTML = `${quando}: <code>${esc(teste)}: <span class="${ok ? 'rep-sim' : 'rep-nao'}">${ok ? 'True' : 'False'}</span></code> <span class="${ok ? 'rep-sim' : 'rep-nao'}">(${ok ? 'verdadeiro: entra no bloco' : 'falso: sai do laço'})</span>`;
    } else { cond.hidden = true; cond.textContent = ''; }
    voltasEl.innerHTML = `Voltas: <strong>${mo.voltas}</strong>`;
    // a tela acumula o que foi impresso
    if (!mo.tela.length) tela.innerHTML = '<span class="rep-vazia">nada impresso ainda</span>';
    else tela.innerHTML = (mo.ctrlc ? '<span class="rep-nota" aria-hidden="true">⋮ (milhões de linhas iguais antes)\n</span>' : '') + mo.tela.map(esc).join('\n');
    ctrlc.hidden = !mo.ctrlc;
    el.querySelectorAll('[data-m]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.m === m)));
    $('.rep-texto').innerHTML = comCodigo(mo.t);
    // resumo do quadro em uma frase, para leitor de tela
    const telaTxt = !mo.tela.length ? 'a tela está vazia' : mo.ctrlc ? 'a tela termina em KeyboardInterrupt' : 'a tela mostra ' + mo.tela.join(mo.tela.length > 2 ? ', ' : ' e ');
    const voltasTxt = typeof mo.voltas === 'number' ? `${mo.voltas} ${mo.voltas === 1 ? 'volta' : 'voltas'}` : 'o laço não para';
    let resumo;
    if (caso === 'for') resumo = `${c.nome}, ${c.rot[m]}: total vale ${mo.v.total}; parcela ${mo.v.parcela === null ? 'ainda não existe' : 'vale ' + mo.v.parcela}; antes do laço, total valia 0 e parcela não existia; ${voltasTxt}; ${telaTxt}`;
    else resumo = `${c.nome}, ${c.rot[m]}: tentativas vale ${mo.v.tentativas}; antes do laço valia 0; o teste ${mo.cond[0]} deu ${mo.cond[1] ? 'True' : 'False'}; ${voltasTxt}; ${telaTxt}`;
    quadro.setAttribute('aria-label', resumo);
    desenhaCena();
  };

  const sel = $('select');
  sel.addEventListener('change', e => { caso = e.target.value; m = 0; montaCodigo(); desenha(false); });
  const aoClicar = e => {
    const b = e.target.closest('[data-m]');
    if (b) { m = +b.dataset.m; desenha(); return; }
    if (e.target.closest('.rep-prox')) { m = (m + 1) % 5; desenha(); }
  };
  const aoTeclar = e => {
    const b = e.target.closest('[data-m]');
    if (!b) return;
    const ir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    let alvo = null;
    if (ir) alvo = (+b.dataset.m + ir + 5) % 5;
    else if (e.key === 'Home') alvo = 0;
    else if (e.key === 'End') alvo = 4;
    if (alvo === null) return;
    e.preventDefault();
    m = alvo; desenha();
    el.querySelector(`[data-m="${alvo}"]`).focus();
  };
  el.addEventListener('click', aoClicar);
  el.addEventListener('keydown', aoTeclar);

  let ultimaW = 0;
  const ro = new ResizeObserver(() => { const w = Math.round(cena.getBoundingClientRect().width); if (w && w !== ultimaW) { ultimaW = w; desenhaCena(); } });
  ro.observe(cena);
  document.fonts?.ready.then(() => { if (el.isConnected) desenhaCena(); });

  montaCodigo();
  desenha(false);
  return () => { ro.disconnect(); el.removeEventListener('click', aoClicar); el.removeEventListener('keydown', aoTeclar); el.innerHTML = ''; };
}
