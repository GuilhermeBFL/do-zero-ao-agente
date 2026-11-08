// Simulador "Dois caminhos" / "Voltar no tempo" (aulas 3.4 e 3.9). Especificação: simuladores/_espec/branch.md (02/11/2026).
// Mesmo padrão do exemplo.js: o estado do Momento 0 fica desenhado em cinza por trás do estado atual, uma caixa escolhe o
// caso, botões avançam pelos momentos (0, 1, 2… ∞) e um texto curto explica o que mudou. O álbum (commits, post-its das
// branches e HEAD) é SVG gerado aqui; a pasta mostra o index.html daquele momento. Conteúdos e mensagens do Git vêm dos
// testes reais de _testes\3-4 e _testes\3-9 (Git 2.54). Sem voz, sem biblioteca. Toque, teclado e "reduzir movimento".
// Uso: ['simulador', { id: 'branch', titulo: 'Dois caminhos', casos: ['fast-forward', 'sem-conflito', 'conflito'] }].
// O site passa o bloco inteiro em opcoes: só os casos de opcoes.casos aparecem, na ordem dada (começa por opcoes.caso, se vier).

const CINZA = '#9aa0b8';
// O index.html em cada foto (saídas reais de git show nos repositórios de teste)
const PA = ['<h1>Curso de Finanças</h1>', '<p>Preço: R$ 49</p>', '<button>Comprar</button>'];
const PB = ['<h1>Finanças para quem começa do zero</h1>', '<p>Preço: R$ 49</p>', '<button>Comprar</button>'];
const L0 = ['<h1>Curso de Finanças</h1>', '<p>Aprenda juros do zero.</p>', '<p>Preço: R$ 49</p>', '<p>Aulas curtas, no celular.</p>', '<button>Comprar</button>'];
const troca = (base, i, txt) => base.map((l, k) => k === i ? txt : l);
const VERDE = '<button class="verde">Comprar</button>', DESC = '<p>Aprenda juros compostos do zero, com exemplos.</p>';
const L1 = troca(L0, 4, VERDE), L2 = troca(L0, 1, DESC), LM = troca(L2, 4, VERDE);
const Q39 = troca(L0, 2, '<p>Preço: R$ 39</p>'), Q59 = troca(L0, 2, '<p>Preço: R$ 59</p>');
const QC = ['<h1>Curso de Finanças</h1>', '<p>Aprenda juros do zero.</p>', '<<<<<<< HEAD', '<p>Preço: R$ 59</p>', '=======', '<p>Preço: R$ 39</p>', '>>>>>>> preco-promo', '<p>Aulas curtas, no celular.</p>', '<button>Comprar</button>'];
const PD = ['<h1>Curso de Finanças</h1>', '<p>Aprenda juros compostos do zero.</p>', '<p>Preço: R$ 39</p>', VERDE, '<p>Dúvidas: contato pelo site</p>'];
const PX = ['<h1>Curso de Finanças</h1>', '<p>Preço: R$ 0</p>'];
const PDY = troca(PD, 1, DESC);  // reset: a descrição que você reescreveu e não fotografou

// Commits: id, rótulo, coluna, linha (0 = linha da main, 1 = galho de cima), pais, estado (ok, ruim, fora, pendente), etiqueta.
const C = (id, rot, col, l, pais = [], est = 'ok', tag = '') => ({ id, rot, col, l, pais, est, tag });
const ABCD = [C('A', 'Página inicial', 0, 0), C('B', 'Botão verde', 1, 0, ['A']), C('C', 'Preço de lançamento', 2, 0, ['B']), C('D', 'Rodapé com contato', 3, 0, ['C'])];
const P = (nome, em) => ({ nome, em });
const MO = (commits, postits, head, pasta, t, extra = {}) => ({ commits, postits, head, pasta, t, ...extra });

const CASOS = {
  'fast-forward': { nome: 'Só a branch andou (fast-forward)', m: (() => {
    const A = C('A', 'Página inicial', 0, 0), B = C('B', 'Título novo', 1, 0, ['A']);
    return [
      MO([A], [P('main', 'A')], 'main', { l: PA }, 'A versão que funciona, com o post-it main.'),
      MO([A], [P('main', 'A'), P('titulo-novo', 'A')], 'titulo-novo', { l: PA }, '`git switch -c titulo-novo`: um post-it novo na mesma foto. Nada foi copiado.'),
      MO([A, B], [P('main', 'A'), P('titulo-novo', 'B')], 'titulo-novo', { l: PB, d: [1] }, 'O commit vai para a branch. A main continua na foto antiga.'),
      MO([A, B], [P('main', 'A'), P('titulo-novo', 'B')], 'main', { l: PA, d: [1] }, '`git switch main`: a pasta mostra a foto da main. O título novo está guardado em B.'),
      MO([A, B], [P('main', 'B')], 'main', { l: PB, d: [1] }, '`git merge titulo-novo` responde Fast-forward: o post-it main só avançou. O histórico continua reto.', { nota: 'O post-it titulo-novo saiu com git branch -d; a foto B ficou.' })
    ];
  })() },
  'sem-conflito': { nome: 'Os dois andaram, em lugares diferentes', m: (() => {
    const A = C('A', 'Página inicial', 0, 0), B = C('B', 'Botão verde', 1, 1, ['A']), Cc = C('C', 'Descrição mais concreta', 1, 0, ['A']);
    const M = C('M', "Merge branch 'botao-verde'", 2, 0, ['C', 'B']);
    return [
      MO([A], [P('main', 'A')], 'main', { l: L0 }, 'O começo, com uma página de cinco linhas.'),
      MO([A, B], [P('main', 'A'), P('botao-verde', 'B')], 'botao-verde', { l: L1, d: [5] }, 'Na branch, o botão muda de cor.'),
      MO([A, B, Cc], [P('main', 'C'), P('botao-verde', 'B')], 'main', { l: L2, d: [2] }, 'Na main, muda a descrição. Agora são dois galhos.'),
      MO([A, B, Cc, M], [P('main', 'M'), P('botao-verde', 'B')], 'main', { l: LM, d: [2, 5] }, '`git merge --no-edit botao-verde`: "Merge made by the \'ort\' strategy." Uma foto nova, com dois pais, junta as duas mudanças.')
    ];
  })() },
  conflito: { nome: 'Os dois mudaram a mesma linha', m: (() => {
    const A = C('A', 'Página inicial', 0, 0), B = C('B', 'Preço de lançamento: R$ 39', 1, 1, ['A']), Cc = C('C', 'Reajuste: R$ 59', 1, 0, ['A']);
    const Pp = C('', 'esperando você', 2, 0, ['C', 'B'], 'pendente'), M = C('M', 'Junta preco-promo', 2, 0, ['C', 'B']);
    return [
      MO([A], [P('main', 'A')], 'main', { l: L0 }, 'O começo: preço R$ 49.'),
      MO([A, B], [P('main', 'A'), P('preco-promo', 'B')], 'preco-promo', { l: Q39, d: [3] }, 'Na branch, o preço vira R$ 39.'),
      MO([A, B, Cc], [P('main', 'C'), P('preco-promo', 'B')], 'main', { l: Q59, d: [3] }, 'Na main, o mesmo preço vira R$ 59.'),
      MO([A, B, Cc, Pp], [P('main', 'C'), P('preco-promo', 'B')], 'main', { l: QC }, '`CONFLICT (content): Merge conflict in index.html`. O Git não escolhe: mostra os dois lados e espera.', { aria: 'conflito: a junção está esperando você' }),
      MO([A, B, Cc, Pp], [P('main', 'C'), P('preco-promo', 'B')], 'main', { l: Q39, d: [3], tags: ['git add feito'] }, 'Você ficou com R$ 39 e apagou as três marcas. O `git add` avisa: "All conflicts fixed but you are still merging."', { aria: 'a junção ainda espera o commit' }),
      MO([A, B, Cc, M], [P('main', 'M'), P('preco-promo', 'B')], 'main', { l: Q39, d: [3] }, 'O commit fecha a junção. Se tivesse desistido, `git merge --abort` voltaria ao Momento 2.')
    ];
  })() },
  restore: { nome: 'Voltar: jogar fora o que não virou foto', m: [
    MO(ABCD, [P('main', 'D')], 'main', { l: PD }, 'Quatro fotos; a pasta está igual à última.'),
    MO(ABCD, [P('main', 'D')], 'main', { l: PX, ruim: true, tags: ['sem commit'] }, 'O Claude estragou o arquivo, mas não fez commit. O álbum não mudou.', { aria: 'a pasta tem uma mudança sem commit' }),
    MO(ABCD, [P('main', 'D')], 'main', { l: PD, d: [2, 3, 4, 5], perdida: PX }, '`git restore index.html`: o arquivo volta à última foto. O que não tinha foto some, e o Git não guarda cópia.', { aria: 'a versão estragada, sem commit, está perdida de vez' })
  ] },
  revert: { nome: 'Voltar: desfazer um commit com outro commit', m: [
    MO(ABCD, [P('main', 'D')], 'main', { l: PD }, 'Quatro fotos.'),
    MO([...ABCD, C('E', 'Novo layout da página', 4, 0, ['D'], 'ruim')], [P('main', 'E')], 'main', { l: PX, ruim: true }, 'O Claude estragou e fez commit.', { aria: 'E é o commit ruim' }),
    MO([...ABCD, C('E', 'Novo layout da página', 4, 0, ['D'], 'ruim'), C('F', 'Revert "Novo layout da página"', 5, 0, ['E'])], [P('main', 'F')], 'main', { l: PD, d: [2, 3, 4, 5] }, '`git revert HEAD`: uma foto nova, o contrário de E. Nada some do histórico, por isso serve mesmo depois do push.', { aria: 'E continua no álbum' })
  ] },
  reset: { nome: 'Voltar: arrancar a última foto (o perigoso)', m: [
    MO(ABCD, [P('main', 'D')], 'main', { l: PDY, sem: [2], tags: ['sem commit'] }, 'Você tem uma mudança sem foto na pasta.', { aria: 'a pasta tem uma mudança sem commit' }),
    MO([...ABCD, C('E', 'Deixa o visual mais limpo (estilo.css)', 4, 0, ['D'], 'ruim')], [P('main', 'E')], 'main', { l: PDY, sem: [2], tags: ['sem commit'] }, 'O Claude fez um commit ruim em outro arquivo. Sua mudança sem foto segue lá.', { aria: 'E é o commit ruim; a mudança sem commit continua' }),
    MO([...ABCD, C('E', 'Deixa o visual mais limpo', 4, 1, ['D'], 'fora', 'no reflog')], [P('main', 'D')], 'main', { l: PD, d: [2], perdida: [DESC] }, '`git reset --hard HEAD~1` responde "HEAD is now at", seguido da foto D. O commit ruim saiu do log, e a sua mudança sem foto foi junto.', { aria: 'E fora do log, no reflog; mudança sem commit perdida de vez' }),
    MO([...ABCD, C('E', 'Deixa o visual mais limpo', 4, 1, ['D'], 'fora', 'no reflog')], [P('main', 'D')], 'main', { l: PD, perdida: [DESC], reflog: true }, 'O reflog guarda os commits que saíram do log. O que nunca virou commit, nem o reflog tem.', { aria: 'E fora do log, no reflog; mudança sem commit perdida de vez' })
  ] }
};
const REFLOG = ['HEAD@{0}: reset: moving to HEAD~1', 'HEAD@{1}: commit: Deixa o visual mais limpo'];
const RODAPE = 'Conteúdos dos arquivos e mensagens do Git tirados de testes reais (Git 2.54). Commit é a foto; branch é o post-it que aponta para uma foto; HEAD marca o post-it em que você está.';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const comCodigo = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');
let MEDIDOR;
const larg = (txt, px, peso = 400) => {
  MEDIDOR ||= document.createElement('canvas').getContext('2d');
  MEDIDOR.font = `${peso} ${px}px "Atkinson Hyperlegible", system-ui, sans-serif`;
  return MEDIDOR.measureText(txt).width;
};
const quebra = (txt, maxW, px) => {
  const linhas = []; let at = '';
  for (const p of txt.split(' ')) { const t = at ? at + ' ' + p : p; if (!at || larg(t, px) <= maxW) at = t; else { linhas.push(at); at = p; } }
  if (at) linhas.push(at);
  return linhas;
};
let SEQ = 0;

const ESTILO = `
.br{container-type:inline-size;display:grid;grid-template-columns:minmax(0,1fr);gap:16px;font-size:17px;line-height:1.5;color:var(--texto)}
.br-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.br-caso{display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-weight:700;margin:0}
.br-caso select{flex:1 1 200px;min-width:0;min-height:44px;padding:0 10px;border:2px solid var(--texto);background:var(--papel-2);color:var(--texto);font-size:17px;max-width:100%;cursor:pointer}
html[data-tema="noite"] .br select{color-scheme:dark}
.br-grade{display:grid;grid-template-columns:minmax(0,1fr);gap:16px;align-items:start}
@container (min-width:900px){.br-grade{grid-template-columns:minmax(0,1.3fr) minmax(0,1fr)}}
.br-rot{margin:0 0 6px;font-weight:700;font-size:15px;color:var(--texto-2)}
.br-album{display:block;width:100%;overflow:visible}
.br-album text{font-family:var(--leitura);fill:var(--texto)}
.br-album .br-t2{fill:var(--texto-2)}
.br-album .br-pi{transition:none}
.br-pasta{background:#0d0a26;color:#f0f1ff;border:2px solid #0d0a26;font-family:var(--mono);font-size:14px;line-height:1.55}
.br-pasta-tit{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;padding:4px 10px;background:#2a2470;color:#dfe3ff;font-family:var(--leitura);font-weight:700;font-size:15px}
.br-tag{display:inline-block;padding:0 7px;font-family:var(--leitura);font-size:13px;line-height:1.6;font-weight:700;background:#ffd23f;color:#1b1440}
.br-tag.br-perdida{background:#ff8a80;color:#1b1440}
.br-linhas{padding:6px 0}
.br-l{display:grid;grid-template-columns:2.6ch minmax(0,1fr);gap:8px;padding:1px 10px 1px 6px}
.br-n{color:#9aa3d6;text-align:right;user-select:none}
.br-c{white-space:pre-wrap;overflow-wrap:anywhere;padding-left:2ch;text-indent:-2ch}
.br-l.br-d .br-c{background:#ffd23f;color:#1b1440}
.br-l.br-sem .br-c{outline:2px dashed #ffd23f;outline-offset:-1px;color:#ffe680}
.br-l.br-marca .br-c{color:#ff8a80;font-weight:700}
.br-pasta.br-ruim .br-c{color:#ff8a80}
.br-perdidas{margin:0 10px 8px;padding:6px 8px;border:2px dashed #ff8a80}
.br-perdidas p{margin:0 0 2px;font-family:var(--leitura);font-size:14px;font-weight:700;color:#ff8a80}
.br-perdidas s{display:block;color:#c9a0a8;white-space:pre-wrap;overflow-wrap:anywhere}
.br-reflog{margin:0 10px 8px;padding:6px 8px;border:2px solid #8f9bff}
.br-reflog p{margin:0;font-family:var(--leitura);font-size:14px;font-weight:700;color:#c9d3ff}
.br-reflog div{white-space:pre-wrap;overflow-wrap:anywhere;color:#c8ffd4}
.br-momentos{display:flex;flex-wrap:wrap;gap:6px}
.br-momentos button{min-height:44px;min-width:44px;padding:0 12px;border:2px solid var(--texto);background:transparent;color:var(--texto);font:inherit;font-weight:700;cursor:pointer}
.br-momentos button[aria-pressed="true"]{background:#ffd23f;color:#1b1440;border-color:#1b1440}
.br-momentos .br-prox{border-style:dashed}
.br-texto{margin:0;min-height:4.5em;padding:10px 12px;border-left:6px solid #ffd23f;background:var(--papel)}
.br-rodape{margin:0;font-size:13.5px;line-height:1.45;color:var(--texto-2)}
.br-leg{display:flex;flex-wrap:wrap;gap:2px 14px;margin:6px 0 0;padding:0;list-style:none;font-size:14px;line-height:1.35;color:var(--texto-2)}
.br-leg li{display:flex;align-items:center;gap:6px}
.br-leg i{display:inline-block;width:16px;height:12px;border:1.5px solid #1b1440;flex:0 0 auto}
`;

export function montar(el, opcoes = {}) {
  const uid = 'br' + (++SEQ);
  const reduz = () => opcoes.reduz === true || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ids = (Array.isArray(opcoes.casos) ? opcoes.casos : Object.keys(CASOS)).filter(k => CASOS[k]);
  const lista = ids.length ? ids : Object.keys(CASOS);
  let caso = lista.includes(opcoes.caso) ? opcoes.caso : lista[0], m = 0, posAntes = {};

  el.innerHTML = `<div class="br">
    <label class="br-caso">Caso: <select>${lista.map(k => `<option value="${k}">${CASOS[k].nome}</option>`).join('')}</select></label>
    <div class="br-grade">
      <div>
        <p class="br-rot">O álbum: cada círculo é uma foto (commit); os post-its são as branches</p>
        <svg class="br-album" role="img"></svg>
        <ul class="br-leg" aria-hidden="true"><li><i style="background:#ffd23f"></i>main</li><li><i style="background:#8fbcff"></i>outra branch</li><li><i style="background:${CINZA};border-color:${CINZA}"></i>cinza: o Momento 0</li></ul>
      </div>
      <div>
        <div class="br-pasta"><div class="br-pasta-tit"><span>A pasta agora: index.html</span><span class="br-tags"></span></div><div class="br-linhas"></div><div class="br-extra"></div></div>
      </div>
    </div>
    <div class="br-momentos" role="group" aria-label="Momentos"></div>
    <p class="br-texto" aria-live="polite"></p>
    <p class="br-rodape">${RODAPE}</p>
  </div>`;
  const st = document.createElement('style');
  st.textContent = ESTILO;
  el.prepend(st);
  const $ = s => el.querySelector(s);
  const svg = $('.br-album'), grupo = $('.br-momentos');
  $('select').value = caso;

  const montaBotoes = () => {
    const n = CASOS[caso].m.length;
    grupo.innerHTML = CASOS[caso].m.map((_, i) => `<button type="button" data-m="${i}" aria-pressed="${i === m}">${i === n - 1 ? '<span class="br-sr">Momento </span>∞' : 'Momento ' + i}</button>`).join('') + '<button type="button" class="br-prox">Próximo passo</button>';
  };

  // Medidas fixas do caso inteiro, para o desenho não pular entre os momentos.
  const medidas = W => {
    const ms = CASOS[caso].m;
    const todos = ms.flatMap(x => x.commits);
    const n = Math.max(...todos.map(c => c.col)) + 1;
    const colW = Math.min(150, (W - 12) / n), x0 = (W - n * colW) / 2;
    const temCima = todos.some(c => c.l === 1);
    const px = colW < 70 ? 12 : 13, LH = px + 3;
    const escalonar = colW < 80;              // rótulos de baixo em duas fileiras quando as colunas são estreitas
    const largRot = c => c.l === 1 ? Math.min(150, colW * 2) - 8 : (escalonar ? colW * 2 : colW) - 8;
    const linhas = c => quebra(c.rot, largRot(c), px).length + (c.tag ? 1 : 0);
    let pilhaBaixo = 1, pilhaCima = 0, rotBaixo = 1, rotCima = 1;
    for (const mo of ms) {
      for (const c of mo.commits) { if (c.l === 0) rotBaixo = Math.max(rotBaixo, linhas(c)); else rotCima = Math.max(rotCima, linhas(c)); }
      const conta = {};
      for (const p of mo.postits) { const c = mo.commits.find(k => k.id === p.em); const k = c.l + ':' + c.col; conta[k] = (conta[k] || 0) + 1 + (p.nome === mo.head ? 1 : 0); }
      for (const [k, v] of Object.entries(conta)) { if (k.startsWith('0:')) pilhaBaixo = Math.max(pilhaBaixo, v); else pilhaCima = Math.max(pilhaCima, v); }
    }
    const r = Math.min(15, colW * 0.3), PI = 24;
    let y = 6, cyC = null;
    if (temCima) { y += rotCima * LH + 4 + pilhaCima * PI; cyC = y + r + 2; y = cyC + r; }
    const cyB = temCima ? cyC + 2 * r + 34 : 6 + r;
    const yPilha = cyB + r + 6, yRot = yPilha + pilhaBaixo * PI + 4;
    const fileiras = escalonar ? 2 : 1;
    const notaL = Math.max(0, ...ms.map(x => x.nota ? quebra(x.nota, W - 12, 13).length : 0));
    const yNota = yRot + rotBaixo * LH * fileiras + (escalonar ? 6 : 0) + 8;
    const H = yNota + (notaL ? notaL * 17 + 4 : -4);
    return { n, colW, x0, temCima, px, LH, escalonar, largRot, r, PI, cyC, cyB, yPilha, yRot, rotBaixo, rotCima, H, yNota };
  };

  const desenhaAlbum = (animar) => {
    const W = Math.max(280, Math.round(svg.getBoundingClientRect().width || el.clientWidth || 320));
    const k = medidas(W), ms = CASOS[caso].m, mo = ms[m], orig = ms[0];
    const cx = c => k.x0 + k.colW * (c.col + 0.5), cy = c => c.l === 1 ? k.cyC : k.cyB;
    const ligacoes = (mo, cinza) => mo.commits.flatMap(c => c.pais.map(pid => {
      const p = mo.commits.find(q => q.id === pid); if (!p) return '';
      const x1 = cx(p), y1 = cy(p), x2 = cx(c), y2 = cy(c), d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d;
      const tr = !cinza && (c.est === 'pendente' || c.est === 'fora');
      return `<line x1="${(x1 + ux * k.r).toFixed(1)}" y1="${(y1 + uy * k.r).toFixed(1)}" x2="${(x2 - ux * k.r).toFixed(1)}" y2="${(y2 - uy * k.r).toFixed(1)}" stroke="${cinza ? CINZA : c.est === 'pendente' ? 'var(--errado)' : c.est === 'fora' ? 'var(--texto-2)' : 'var(--texto)'}" stroke-width="3"${tr ? ' stroke-dasharray="6 5"' : ''}/>`;
    })).join('');
    // Post-its: empilhados embaixo do círculo na linha da main e em cima dele no galho; o de HEAD vai por último, com a seta.
    const postits = (mo, cinza) => {
      let s = ''; const pilhas = {};
      const ordem = [...mo.postits].sort((a, b) => (a.nome === mo.head) - (b.nome === mo.head));
      for (const p of ordem) {
        const c = mo.commits.find(q => q.id === p.em), chave = c.l + ':' + c.col;
        const i = pilhas[chave] || 0; pilhas[chave] = i + 1 + (p.nome === mo.head ? 1 : 0);
        const tw = larg(p.nome, 13, 700) + 14, x = cx(c) - tw / 2;
        const y = c.l === 0 ? k.yPilha + i * k.PI : k.cyC - k.r - 6 - (i + 1) * k.PI + 4;
        const cor = cinza ? CINZA : p.nome === 'main' ? '#ffd23f' : '#8fbcff';
        s += `<g class="br-pi" data-pi="${cinza ? '' : esc(p.nome)}" data-xy="${x.toFixed(1)},${y.toFixed(1)}"><rect x="${x.toFixed(1)}" y="${y}" width="${tw.toFixed(1)}" height="20" fill="${cor}" stroke="${cinza ? CINZA : '#1b1440'}" stroke-width="1.5"/><text${cinza ? ' class="br-cinza"' : ''} x="${cx(c).toFixed(1)}" y="${y + 14.5}" font-size="13" font-weight="700" text-anchor="middle" style="fill:#1b1440">${esc(p.nome)}</text></g>`;
        if (p.nome === mo.head) {
          const hy = c.l === 0 ? y + k.PI : y - k.PI, hx = cx(c);
          const seta = c.l === 0 ? `M${hx} ${hy - 2} l-5 6 h10 z` : `M${hx} ${hy + 22} l-5 -6 h10 z`;
          s += `<g class="br-pi" data-pi="${cinza ? '' : 'HEAD'}" data-xy="${hx.toFixed(1)},${hy.toFixed(1)}"><path d="${seta}" fill="${cinza ? CINZA : 'var(--texto)'}"/><rect x="${hx - 22}" y="${c.l === 0 ? hy + 4 : hy}" width="44" height="16" rx="3" fill="${cinza ? CINZA : 'var(--texto)'}"/><text${cinza ? ' class="br-cinza"' : ''} x="${hx}" y="${(c.l === 0 ? hy + 4 : hy) + 12}" font-size="11.5" font-weight="700" text-anchor="middle" style="fill:${cinza ? '#1b1440' : 'var(--papel)'}">HEAD</text></g>`;
        }
      }
      return s;
    };
    const circulos = (mo, cinza) => mo.commits.map(c => {
      const x = cx(c), y = cy(c);
      if (cinza) return `<circle cx="${x}" cy="${y}" r="${k.r}" fill="${CINZA}" stroke="${CINZA}" stroke-width="2.5"/>`;
      const est = c.est;
      const fill = est === 'ruim' ? 'var(--errado)' : est === 'ok' ? 'var(--papel-2)' : 'var(--papel)';
      const stroke = est === 'pendente' ? 'var(--errado)' : est === 'fora' ? 'var(--texto-2)' : 'var(--texto)';
      return `<circle cx="${x}" cy="${y}" r="${k.r}" fill="${fill}" stroke="${stroke}" stroke-width="${est === 'pendente' ? 3 : 2.5}"${est === 'pendente' || est === 'fora' ? ' stroke-dasharray="5 4"' : ''}/>`
        + (c.id ? `<text x="${x}" y="${y + 5}" font-size="14" font-weight="700" text-anchor="middle" style="fill:${est === 'ruim' ? 'var(--papel)' : est === 'fora' ? 'var(--texto-2)' : 'var(--texto)'}">${c.id}</text>` : '');
    }).join('');
    const rotulos = mo.commits.map(c => {
      const ls = quebra(c.rot, k.largRot(c), k.px), x = cx(c);
      const cor = c.est === 'pendente' || c.est === 'ruim' ? 'var(--errado)' : c.est === 'fora' ? 'var(--texto-2)' : 'var(--texto)';
      const peso = c.est === 'pendente' ? 700 : 400;
      const todas = [...ls.map(t => [t, cor, peso, '']), ...(c.tag ? [[c.tag, 'var(--texto-2)', 700, 'italic']] : [])];
      let y0;
      if (c.l === 1) y0 = 6 + (k.rotCima - todas.length) * k.LH + k.px;      // galho: rótulo em cima, colado nos post-its
      else y0 = k.yRot + k.px + (k.escalonar && c.col % 2 ? k.rotBaixo * k.LH + 6 : 0);
      let s = todas.map(([t, cr, p, it], i) => { const w = larg(t, k.px, p) / 2 + 2, xx = Math.min(W - w, Math.max(w, x)); return `<text x="${xx.toFixed(1)}" y="${(y0 + i * k.LH).toFixed(1)}" font-size="${k.px}" font-weight="${p}"${it ? ' font-style="italic"' : ''} text-anchor="middle" style="fill:${cr}">${esc(t)}</text>`; }).join('');
      if (c.l === 0 && k.escalonar && c.col % 2) s = `<line x1="${x}" x2="${x}" y1="${k.yRot - 2}" y2="${y0 - k.px - 2}" stroke="var(--texto-2)" stroke-width="1" stroke-dasharray="2 3"/>` + s;
      return s;
    }).join('');
    const nota = mo.nota ? quebra(mo.nota, W - 12, 13).map((t, i) => `<text x="${W / 2}" y="${k.yNota + 13 + i * 17}" font-size="13" text-anchor="middle" class="br-t2">${esc(t)}</text>`).join('') : '';
    svg.setAttribute('viewBox', `0 0 ${W} ${k.H}`); svg.setAttribute('height', k.H);
    svg.innerHTML = ligacoes(orig, true) + circulos(orig, true) + postits(orig, true)
      + ligacoes(mo, false) + circulos(mo, false) + postits(mo, false) + rotulos + nota;
    // O post-it que mudou de foto desliza (sem deslizar com "reduzir movimento").
    const novas = {};
    svg.querySelectorAll('[data-pi]:not([data-pi=""])').forEach(g => {
      const [x, y] = g.dataset.xy.split(',').map(Number), a = posAntes[g.dataset.pi];
      novas[g.dataset.pi] = { x, y };
      if (animar && a && !reduz() && (Math.abs(a.x - x) > 0.5 || Math.abs(a.y - y) > 0.5)) {
        g.style.transform = `translate(${a.x - x}px,${a.y - y}px)`;
        g.getBoundingClientRect();
        requestAnimationFrame(() => { g.style.transition = 'transform .45s ease'; g.style.transform = 'none'; });
      }
    });
    posAntes = novas;
    // resumo em palavras para leitor de tela
    const c = CASOS[caso];
    const nomeM = m === ms.length - 1 ? 'Momento ∞' : 'Momento ' + m;
    const fotos = mo.commits.filter(q => q.id).map(q => `${q.id} (${q.rot})`).join(', ');
    const pis = mo.postits.map(p => `${p.nome} em ${p.em}`).join('; ');
    svg.setAttribute('aria-label', `${c.nome}, ${nomeM}: fotos ${fotos}; ${pis}; HEAD em ${mo.head}${mo.aria ? '; ' + mo.aria : ''}. Em cinza, o Momento 0.`);
  };

  const desenhaPasta = () => {
    const mo = CASOS[caso].m[m], p = mo.pasta;
    $('.br-pasta').classList.toggle('br-ruim', !!p.ruim);
    $('.br-tags').innerHTML = (p.tags || []).map(t => `<span class="br-tag">${t}</span>`).join('');
    $('.br-linhas').innerHTML = p.l.map((t, i) => {
      const n = i + 1, marca = /^(<{7}|={7}|>{7})/.test(t);
      const cls = (p.d || []).includes(n) ? ' br-d' : (p.sem || []).includes(n) ? ' br-sem' : marca ? ' br-marca' : '';
      const sr = (p.d || []).includes(n) ? 'mudou: ' : (p.sem || []).includes(n) ? 'sem commit: ' : marca ? 'marca de conflito: ' : '';
      return `<div class="br-l${cls}"><span class="br-n" aria-hidden="true">${n}</span><span class="br-c">${sr ? `<span class="br-sr">${sr}</span>` : ''}${esc(t)}${(p.sem || []).includes(n) ? ' <span class="br-tag">sem commit</span>' : ''}</span></div>`;
    }).join('');
    let extra = '';
    if (p.perdida) extra += `<div class="br-perdidas"><p>Perdida de vez (nunca virou commit):</p>${p.perdida.map(t => `<s>${esc(t)}</s>`).join('')}</div>`;
    if (p.reflog) extra += `<div class="br-reflog"><p>git reflog (os dois primeiros registros)</p>${REFLOG.map(t => `<div>${esc(t)}</div>`).join('')}<p>E volta com: git reset --hard 'HEAD@{1}'</p></div>`;
    $('.br-extra').innerHTML = extra;
  };

  const desenha = (animar = true) => {
    const mo = CASOS[caso].m[m];
    desenhaAlbum(animar);
    desenhaPasta();
    grupo.querySelectorAll('[data-m]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.m === m)));
    $('.br-texto').innerHTML = comCodigo(mo.t);
  };

  $('select').addEventListener('change', e => { caso = e.target.value; m = 0; posAntes = {}; montaBotoes(); desenha(false); });
  const aoClicar = e => {
    const n = CASOS[caso].m.length;
    const b = e.target.closest('[data-m]');
    if (b) { m = +b.dataset.m; desenha(); return; }
    if (e.target.closest('.br-prox')) { m = (m + 1) % n; desenha(); }
  };
  const aoTeclar = e => {
    const b = e.target.closest('[data-m]');
    if (!b) return;
    const n = CASOS[caso].m.length;
    const ir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    let alvo = null;
    if (ir) alvo = (+b.dataset.m + ir + n) % n;
    else if (e.key === 'Home') alvo = 0;
    else if (e.key === 'End') alvo = n - 1;
    if (alvo === null) return;
    e.preventDefault();
    m = alvo; desenha();
    grupo.querySelector(`[data-m="${alvo}"]`).focus();
  };
  el.addEventListener('click', aoClicar);
  el.addEventListener('keydown', aoTeclar);

  let ultimaW = 0;
  const ro = new ResizeObserver(() => { const w = Math.round(svg.getBoundingClientRect().width); if (w && w !== ultimaW) { ultimaW = w; posAntes = {}; desenhaAlbum(false); } });
  ro.observe(svg);
  document.fonts?.ready.then(() => { if (el.isConnected) desenhaAlbum(false); });

  montaBotoes();
  desenha(false);
  return () => { ro.disconnect(); el.removeEventListener('click', aoClicar); el.removeEventListener('keydown', aoTeclar); el.innerHTML = ''; };
}
