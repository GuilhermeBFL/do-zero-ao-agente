// Simulador "A janela enchendo" (aula 1.2; reaproveitado na 5.3). Especificação: simuladores/_espec/contexto.md (02/11/2026).
// Mesmo padrão do exemplo.js: a situação original fica em cinza (o Momento 0 do caso, 8 mil tokens), uma caixa escolhe o
// caso, botões avançam pelos momentos (0, 1, 2, 3, ∞) e um texto curto explica o que mudou. Desenho em SVG gerado aqui,
// sem biblioteca. Sem voz. Toque (alvos de 44 px), teclado (Tab, setas, Enter, Espaço, Esc) e "reduzir movimento".
// Uso numa aula: ['simulador', { id: 'contexto', titulo: 'A janela enchendo' }]. O site chama montar(el, opcoes).

const JANELA = 1000000, ESCALA_PEDIDO = 300000, BASE = 8000, CINZA = '#9aa0b8';
const ORDEM = ['base', 'resumo', 'antigos', 'colado', 'atual'];
const SEG = {
  base: { nome: 'Base', curto: 'base', cor: '#6c7bd0', o: 'instruções do sistema, CLAUDE.md, memória, descrições de skills, nomes de ferramentas MCP' },
  atual: { nome: 'Assunto atual', curto: 'assunto atual', cor: '#ffd23f', o: 'o que é da tarefa de agora' },
  antigos: { nome: 'Assuntos antigos', curto: 'antigos', cor: '#e07a3f', listras: true, o: 'tarefas anteriores na mesma conversa' },
  colado: { nome: 'Arquivo colado (resto)', curto: 'arquivo colado', cor: '#e05a8a', o: 'a parte do arquivo grande que não importa para a pergunta' },
  resumo: { nome: 'Resumo da compactação', curto: 'resumo', cor: '#7a7f95', listras: true, o: 'o resumo que substitui a conversa' }
};
// Base comum (simulação oficial da janela de contexto, números representativos), somada e arredondada para 8 mil.
const PARTES_BASE = [['Instruções do sistema', 4200], ['CLAUDE.md do projeto', 1800], ['Memória automática', 680], ['Descrições das skills', 450], ['CLAUDE.md pessoal', 320], ['Informações do ambiente', 280], ['Nomes das ferramentas MCP', 120]];

// Cada momento: segmentos da janela, janela agora, enviado no último pedido (null = nenhum), somado, foco e texto.
// custo: omitido = calculado do pedido (quente 0,20 e frio 4 por milhão); '–' = sem valor; { q } = texto no lugar do quente.
const M = (s, jan, ped, som, foco, t, custo) => ({ s: { base: BASE, ...s }, jan, ped, som, foco, t, custo });
const CASOS = {
  curta: { nome: 'Conversa curta', m: [
    M({}, 8000, null, 0, null, 'Antes de você digitar, a janela já tem uns 8 mil tokens: instruções do sistema, CLAUDE.md, memória e listas de skills e ferramentas. Tudo isso vai em todo pedido. A faixa cinza guarda este começo para comparar.'),
    M({ atual: 3050 }, 11050, 10450, 10450, 100, 'Você pede "resuma aula.md". O Claude lê o arquivo (2.400 tokens) e responde. O pedido levou a base, o arquivo e a pergunta. No plano, isso não vira dólar: sai do seu limite.'),
    M({ atual: 3600 }, 11600, 11100, 21550, 100, '"Agora em tópicos": 50 tokens seus, mas o pedido leva 11.100, porque a conversa vai junto. Cresce devagar, porque é uma tarefa só.'),
    M({ atual: 4350 }, 12350, 11650, 33200, 100, 'Terceiro pedido. A janela usou pouco mais de 1% do milhão. Três pedidos somaram uns 33 mil tokens enviados: de menos de 1 a uns 13 centavos de dólar pela API.'),
    M({}, 8000, null, 33200, null, 'Tarefa pronta, /clear. A janela volta ao cinza, e o /clear não custa nada. A próxima tarefa não paga por esta.')
  ] },
  longa: { nome: 'Conversa longa', m: [
    M({}, 8000, null, 0, null, 'O mesmo começo: 8 mil tokens antes de digitar. Desta vez, você vai emendar três assuntos sem limpar.'),
    M({ atual: 52000 }, 60000, 58000, 330000, 100, 'Fim do assunto 1, um relatório, depois de 10 pedidos e 4 arquivos lidos. Cada pedido levou a conversa toda: somados, já foram uns 330 mil tokens.'),
    M({ antigos: 52000, atual: 90000 }, 150000, 145000, 1380000, 63, 'Assunto 2, uma planilha, na mesma conversa. Cada pedido sobre a planilha leva o relatório junto: um terço do que vai no pedido é assunto velho, disputando a atenção.'),
    M({ antigos: 142000, atual: 130000 }, 280000, 280000, 3530000, 48, 'Assunto 3: uma pergunta de uma linha leva 280 mil tokens. Depois de uma pausa longa, paga a preço cheio. Na assinatura, uma sessão parada com mais de uns 200 mil é resumida antes de o cache vencer.'),
    M({ resumo: 115000, atual: 25000 }, 148000, 148000, 'segue somando', 'resumo', 'Se você nunca limpar, perto de 967 mil o Claude Code compacta: troca a conversa por um resumo e relê até 5 arquivos. A conversa segue, mas detalhes e regras dadas só nela podem ter sumido.', '–')
  ] },
  clear: { nome: '/clear no meio', m: [
    M({}, 8000, null, 0, null, 'Os mesmos três assuntos da conversa longa, mas com /clear entre um e outro. Compare os números.'),
    M({ atual: 52000 }, 60000, 58000, 330000, 100, 'Fim do relatório: igual à conversa longa até aqui. Agora, /clear.'),
    M({ atual: 90000 }, 98000, 93000, 860000, 100, 'A planilha começou do cinza, sem o relatório. Somado: 860 mil, contra 1,38 milhão sem o /clear. E tudo o que vai no pedido é do assunto atual.'),
    M({ atual: 130000 }, 138000, 138000, 1590000, 100, 'A mesma pergunta de uma linha leva 138 mil, metade dos 280 mil. Somado: 1,59 milhão, menos da metade dos 3,53 milhões da conversa longa.'),
    M({}, 8000, null, 1590000, null, 'Cada assunto novo começa no cinza. A janela nunca chega perto da compactação, e as conversas antigas ficam guardadas: /resume volta a elas.')
  ] },
  arquivo: { nome: 'Arquivo grande colado', m: [
    M({}, 8000, null, 0, null, 'Você vai colar um relatório inteiro, umas 200 páginas, para perguntar só sobre o capítulo 3. Uma página fica na casa de mil tokens.'),
    M({ colado: 190000, atual: 10850 }, 208850, 208050, 208050, 5, 'Colou tudo e perguntou. O pedido levou 208 mil tokens, e só uns 10 mil são do capítulo 3. Na primeira vez não há cache: preço cheio, e gravar no cache ainda soma de 25% a 100%.', { q: 'primeira vez, sem cache' }),
    M({ colado: 190000, atual: 11700 }, 209700, 208900, 416950, 5, 'Segunda pergunta, curta. Leva os 200 mil de novo. Com o cache quente, sai barato; mas 95% do que vai no pedido não tem nada a ver com ela.'),
    M({ colado: 190000, atual: 12500 }, 210500, 209750, 626700, 5, 'Terceira pergunta, depois do almoço. Pela API, o cache de 5 minutos já venceu: preço cheio outra vez. Na assinatura, a sessão passou de 200 mil e pode ter sido resumida na pausa.'),
    M({ atual: 11000 }, 19000, 19000, '–', 100, 'O conserto: /clear e cole só o capítulo 3. Cada pergunta passa a levar uns 19 mil tokens, onze vezes menos, e tudo é do assunto. Ou deixe o Claude ler o arquivo do disco, ou um subagente resumir.')
  ] }
};
const ROTULOS = ['Momento 0', 'Momento 1', 'Momento 2', 'Momento 3', '∞'];
const RODAPE = 'Ordem de grandeza. Base: simulação oficial da janela de contexto do Claude Code (números representativos), preços do Opus 5.5 em 01/11/2026 e compactação perto de 967 mil tokens (documentação conferida em 02/11/2026). Para simplificar, cada momento junta as idas ao modelo de um turno; na vida real, cada ferramenta usada é mais uma ida, e cada ida leva a janela inteira.';
const RODAPE_ARQUIVO = 'Neste caso, o custo frio real pode sair de 25% a 100% acima do mostrado: gravar no cache custa US$ 5 (5 minutos) ou US$ 8 (1 hora) por milhão de tokens, contra US$ 4 da entrada.';

const num = n => n.toLocaleString('pt-BR');
const mil = n => n >= 1e6 ? `${(n / 1e6).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} ${n >= 2e6 ? 'milhões' : 'milhão'}`
  : n >= 1000 ? `${(n / 1000).toLocaleString('pt-BR', { maximumFractionDigits: n < 10000 ? 1 : 0 })} mil` : String(Math.round(n));
const dolar = x => 'US$ ' + x.toPrecision(2).replace('.', ',');   // 2 algarismos significativos
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const vazio = () => Object.fromEntries(ORDEM.map(k => [k, 0]));
// O pedido leva a base e os segmentos antigos como estão na janela; a diferença entre a janela e o pedido é a última
// resposta, que ainda não tinha ido, e sai do assunto atual.
const segsPedido = mo => {
  const r = vazio(); if (!mo.ped) return r;
  for (const k of ORDEM) if (k !== 'atual') r[k] = mo.s[k] || 0;
  r.atual = Math.max(0, mo.ped - ORDEM.filter(k => k !== 'atual').reduce((a, k) => a + r[k], 0));
  return r;
};
const segsJanela = mo => ({ ...vazio(), ...mo.s });

let MEDIDOR;
const larg = (txt, px, peso = 400) => {
  MEDIDOR ||= document.createElement('canvas').getContext('2d');
  MEDIDOR.font = `${peso} ${px}px "Atkinson Hyperlegible", system-ui, sans-serif`;
  return MEDIDOR.measureText(txt).width;
};
let SEQ = 0;

const ESTILO = `
.ctx{container-type:inline-size;display:grid;grid-template-columns:minmax(0,1fr);gap:16px;font-size:17px;line-height:1.5;color:var(--texto)}
.ctx-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.ctx-caso{display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-weight:700;margin:0}
.ctx-caso select{flex:0 1 auto;min-width:0;min-height:44px;padding:0 10px;border:2px solid var(--texto);background:var(--papel-2);color:var(--texto);font-size:17px;max-width:100%;cursor:pointer}
html[data-tema="noite"] .ctx select{color-scheme:dark}
.ctx-barras{display:grid;gap:14px}
.ctx-tit{margin:0 0 4px;font-weight:700;font-size:16px;line-height:1.35;display:flex;gap:8px;align-items:flex-start}
.ctx-tit svg{flex:0 0 auto;margin-top:1px}
.ctx-tit b{font-weight:700;color:var(--marca-texto)}
.ctx-svg{display:block;width:100%;overflow:visible}
.ctx-svg text{font-family:var(--leitura);fill:var(--texto)}
.ctx-svg .ctx-t2{fill:var(--texto-2)}
.ctx-svg .ctx-trilho{fill:var(--papel-3);stroke:var(--texto);stroke-width:2}
.ctx-svg .ctx-rot{fill:#0d0a26;font-weight:700;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}
.ctx-svg .ctx-halo{stroke:var(--papel-2);stroke-width:5}
.ctx-svg .ctx-marca{stroke:var(--texto);stroke-width:2}
.ctx-svg .ctx-hit{cursor:pointer;fill:transparent}
.ctx-leg{display:flex;flex-wrap:wrap;gap:4px 16px;margin:0;padding:0;list-style:none;font-size:15px;line-height:1.3}
.ctx-leg li{display:flex;align-items:center;gap:7px;min-height:32px}
.ctx-amostra{width:18px;height:18px;flex:0 0 auto;border:1.5px solid var(--texto)}
.ctx-leg button{display:flex;align-items:center;gap:7px;min-height:44px;padding:0 10px 0 6px;border:2px dashed var(--texto-2);background:transparent;color:var(--texto);font:inherit;cursor:pointer}
.ctx-leg button[aria-expanded="true"]{border-style:solid;background:var(--papel-3)}
.ctx-balao{position:relative;margin:-4px 0 0;padding:12px 14px;background:var(--papel-3);border:2px solid var(--texto);font-size:15.5px}
.ctx-balao::before{content:"";position:absolute;top:-11px;left:22px;border:10px solid transparent;border-top:0;border-bottom-color:var(--texto)}
.ctx-balao p{margin:0 0 6px}
.ctx-balao table{width:100%;border-collapse:collapse;line-height:1.35}
.ctx-balao td{padding:4px 0;border-bottom:1px solid var(--linha)}
.ctx-balao td:last-child{text-align:right;white-space:nowrap;padding-left:12px;font-variant-numeric:tabular-nums}
.ctx-balao tr:last-child td{border-bottom:0;font-weight:700}
.ctx-balao button{margin-top:8px;min-height:44px;padding:0 14px;border:2px solid var(--texto);background:transparent;color:var(--texto);font:inherit;cursor:pointer}
.ctx-cartoes{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}
@container (min-width:440px){.ctx-cartoes{grid-template-columns:repeat(2,minmax(0,1fr))}}
@container (min-width:600px){.ctx-cartoes{grid-template-columns:repeat(3,minmax(0,.88fr)) minmax(0,1.36fr)}}
.ctx-cartao{display:flex;flex-direction:column;gap:2px;padding:9px 11px;border:2px solid var(--texto);background:var(--papel)}
.ctx-c-rot{font-size:14px;line-height:1.3;color:var(--texto-2)}
.ctx-c-val{font-size:21px;line-height:1.2;font-weight:700;font-variant-numeric:tabular-nums;overflow-wrap:anywhere;margin-top:auto}
.ctx-c-custo{display:grid;grid-template-columns:auto minmax(0,1fr);gap:1px 8px;font-size:15px;line-height:1.35;margin-top:auto;align-items:baseline}
.ctx-c-custo span{color:var(--texto-2);font-size:14px}
.ctx-c-custo strong{font-variant-numeric:tabular-nums;font-size:16px}
.ctx-c-custo strong.ctx-us{white-space:nowrap}
.ctx-c-custo strong.ctx-so{grid-column:1/-1}
.ctx-cartao small{font-size:13px;line-height:1.3;color:var(--texto-2)}
.ctx-foco{display:grid;gap:4px;padding:10px 12px;border:2px solid var(--texto)}
.ctx-foco p{margin:0;font-weight:700}
.ctx-foco small{font-size:14px;color:var(--texto-2);line-height:1.3}
.ctx-foco-trilho{height:14px;border:2px solid var(--texto);background:var(--papel-3);max-width:320px}
.ctx-foco-barra{height:100%;width:0}
.ctx-momentos{display:flex;flex-wrap:wrap;gap:6px}
.ctx-momentos button{min-height:44px;min-width:44px;padding:0 12px;border:2px solid var(--texto);background:transparent;color:var(--texto);font:inherit;font-weight:700;cursor:pointer}
.ctx-momentos button[aria-pressed="true"]{background:#ffd23f;color:#1b1440;border-color:#1b1440}
.ctx-momentos .ctx-prox{border-style:dashed}
.ctx-texto{margin:0;min-height:4.5em;padding:10px 12px;border-left:6px solid #ffd23f;background:var(--papel)}
.ctx-rodape{margin:0;font-size:13.5px;line-height:1.45;color:var(--texto-2)}
`;

const ICONE_JANELA = '<svg width="22" height="20" viewBox="0 0 22 20" aria-hidden="true"><rect x="1" y="1" width="20" height="18" fill="none" stroke="currentColor" stroke-width="2"/><path d="M1 6h20M11 6v13" stroke="currentColor" stroke-width="2"/></svg>';
const ICONE_PEDIDO = '<svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true"><rect x="1" y="1" width="22" height="16" fill="none" stroke="currentColor" stroke-width="2"/><path d="M1 1l11 9 11-9" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

export function montar(el, opcoes = {}) {
  const uid = 'ctx' + (++SEQ);
  const reduz = () => opcoes.reduz === true || matchMedia('(prefers-reduced-motion: reduce)').matches;
  let caso = 'curta', m = 0, timers = [];
  let jDes = segsJanela(CASOS.curta.m[0]), pDes = vazio(); // o que está desenhado agora (tokens por segmento)

  const amostra = k => SEG[k].listras
    ? `background:repeating-linear-gradient(135deg,${SEG[k].cor} 0 5px,color-mix(in srgb,${SEG[k].cor} 55%,#fff) 5px 8px)`
    : `background:${SEG[k].cor}`;
  el.innerHTML = `<div class="ctx">
    <label class="ctx-caso">Caso: <select>${Object.entries(CASOS).map(([k, c]) => `<option value="${k}">${c.nome}</option>`).join('')}</select></label>
    <div class="ctx-barras" role="img">
      <div><p class="ctx-tit" aria-hidden="true">${ICONE_JANELA}<span>A janela (até 1 milhão de tokens): <b data-v="jan"></b></span></p><svg class="ctx-svg" data-svg="jan" aria-hidden="true"></svg></div>
      <div><p class="ctx-tit" aria-hidden="true">${ICONE_PEDIDO}<span>O pedido de agora (escala até 300 mil): <b data-v="ped"></b></span></p><svg class="ctx-svg" data-svg="ped" aria-hidden="true"></svg></div>
    </div>
    <ul class="ctx-leg" aria-label="Legenda das cores">
      <li><button type="button" class="ctx-base" aria-expanded="false" aria-controls="${uid}-balao"><span class="ctx-amostra" style="${amostra('base')}"></span>Base (8 mil): ver o que tem</button></li>
      ${ORDEM.filter(k => k !== 'base').map(k => `<li><span class="ctx-amostra" style="${amostra(k)}"></span>${SEG[k].nome}</li>`).join('')}
      <li><span class="ctx-amostra" style="background:${CINZA};height:8px"></span>Faixa cinza: o Momento 0 do caso, fixo</li>
    </ul>
    <div class="ctx-balao" id="${uid}-balao" hidden>
      <p><strong>O que já está na janela antes de digitar</strong> (números representativos da simulação oficial):</p>
      <table><tbody>${PARTES_BASE.map(([n, v]) => `<tr><td>${n}</td><td>${num(v)}</td></tr>`).join('')}<tr><td>Total</td><td>7.850, mostrado como 8 mil</td></tr></tbody></table>
      <button type="button" class="ctx-fechar">Fechar</button>
    </div>
    <div class="ctx-cartoes">
      <div class="ctx-cartao"><span class="ctx-c-rot">Janela agora (tokens)</span><strong class="ctx-c-val" data-c="jan"></strong></div>
      <div class="ctx-cartao"><span class="ctx-c-rot">Enviado no último pedido (tokens)</span><strong class="ctx-c-val" data-c="ped"></strong></div>
      <div class="ctx-cartao"><span class="ctx-c-rot">Somado desde o Momento 0 (tokens)</span><strong class="ctx-c-val" data-c="som"></strong></div>
      <div class="ctx-cartao"><span class="ctx-c-rot">Custo do último pedido pela API, Opus 5.5</span><span class="ctx-c-custo" data-c="custo"></span><small>Na assinatura não vira dólar: sai dos limites.</small></div>
    </div>
    <div class="ctx-foco"><p data-v="foco"></p><div class="ctx-foco-trilho" aria-hidden="true"><div class="ctx-foco-barra"></div></div><small>A base de instruções fica fora da conta.</small></div>
    <div class="ctx-momentos" role="group" aria-label="Momentos">${ROTULOS.map((r, i) => `<button type="button" data-m="${i}" aria-pressed="${i === 0}">${i === 4 ? '<span class="ctx-sr">Momento </span>∞' : r}</button>`).join('')}<button type="button" class="ctx-prox">Próximo passo</button></div>
    <p class="ctx-texto" aria-live="polite"></p>
    <p class="ctx-rodape">${RODAPE}<span data-v="rodape-arq" hidden> ${RODAPE_ARQUIVO}</span></p>
  </div>`;
  const st = document.createElement('style');
  st.textContent = ESTILO;
  el.prepend(st);

  const $ = s => el.querySelector(s);
  const svgJ = $('[data-svg="jan"]'), svgP = $('[data-svg="ped"]'), barras = $('.ctx-barras');
  const balao = $('.ctx-balao'), btnBase = $('.ctx-base'), sel = $('select');

  const defs = () => `<defs>${ORDEM.filter(k => SEG[k].listras).map(k => `<pattern id="${uid}-${k}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="${SEG[k].cor}"/><rect width="3" height="8" fill="#ffffff" fill-opacity=".38"/></pattern>`).join('')}</defs>`;
  const preench = k => SEG[k].listras ? `url(#${uid}-${k})` : SEG[k].cor;

  // Segmentos coloridos dentro do trilho; todo segmento maior que zero tem pelo menos 4 px.
  const segmentos = (segs, escala, x0, Wi, y, h, alvo, rotulos, evitar = []) => {
    let x = x0, s = '';
    for (const k of ORDEM) {
      const v = segs[k];
      if (!(v > 0.5)) continue;
      const w = Math.max(4, v / escala * Wi);
      s += `<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="${h}" fill="${preench(k)}"><title>${SEG[k].nome}: ${num(Math.round(alvo[k] || v))} tokens</title></rect>`;
      if (rotulos && alvo[k] > 0) {
        const vv = alvo[k], opc = [`${SEG[k].curto} ${mil(vv)}`, mil(vv)];
        const cx = x + w / 2;
        const t = opc.find(o => { const tw = larg(o, 13, 700); return tw + 10 <= w && !evitar.some(xm => Math.abs(xm - cx) < tw / 2 + 5); }); // rótulo não pode ser cortado por uma marca
        if (t) s += `<text class="ctx-rot" x="${(x + w / 2).toFixed(1)}" y="${y + h / 2 + 4.5}" text-anchor="middle" font-size="13" stroke="${SEG[k].cor}" aria-hidden="true">${t}</text>`;
      }
      x += w;
    }
    return { s, fim: x };
  };
  const hitBase = (x0, y, wBase) => `<rect class="ctx-hit" data-base="1" x="${x0 - 2}" y="${y - 2}" width="${Math.max(44, wBase + 4).toFixed(1)}" height="44"><title>Base: 8.000 tokens. Toque para ver as partes.</title></rect>`;

  const desenhaJanela = (segs, rotulos) => {
    const W = Math.max(260, Math.round(svgJ.getBoundingClientRect().width || el.clientWidth || 320));
    const x0 = 2, Wi = W - 4, px = v => x0 + v / JANELA * Wi;
    const x200 = px(200000), x967 = px(967000);
    const l200 = '200 mil: janela dos modelos antigos', l967 = '967 mil: compactação automática';
    const emCima = x200 + 6 + larg(l200, 13) + 18 + larg(l967, 13) + 6 < x967; // no PC as legendas das marcas ficam em cima
    const yb = emCima ? 30 : 10, hb = 40, ys = yb - 8;
    const y1 = yb + hb + 20, y2 = y1 + 19;
    const H = emCima ? yb + hb + 8 : y2 + 6;
    const cinzaW = Math.max(4, BASE / JANELA * Wi);
    const seg = segmentos(segs, JANELA, x0, Wi, yb, hb, segsJanela(CASOS[caso].m[m]), rotulos, [x200, x967]);
    const wBase = Math.max(4, BASE / JANELA * Wi);
    const linha = (x, ya, yz, tracejada) => `<line class="ctx-halo" x1="${x}" x2="${x}" y1="${ya}" y2="${yz}"/><line class="ctx-marca" x1="${x}" x2="${x}" y1="${ya}" y2="${yz}"${tracejada ? ' stroke-dasharray="6 4"' : ''}/>`;
    let marcas;
    if (emCima) marcas = linha(x200, 18, yb + hb + 4, true) + linha(x967, 18, yb + hb + 4, false)
      + `<text x="${x200 + 6}" y="14" font-size="13">${l200}</text><text x="${x967 - 6}" y="14" font-size="13" text-anchor="end">${l967}</text>`;
    else marcas = linha(x200, yb - 4, y1 - 13, true) + linha(x967, yb - 4, y2 - 13, false)
      + `<text x="${x200 + 5}" y="${y1}" font-size="13">${l200}</text><text x="${x967 - 5}" y="${y2}" font-size="13" text-anchor="end">${l967}</text>`;
    svgJ.setAttribute('viewBox', `0 0 ${W} ${H}`); svgJ.setAttribute('height', H);
    svgJ.innerHTML = defs()
      + `<rect x="${x0}" y="${ys}" width="${cinzaW.toFixed(1)}" height="6" fill="${CINZA}"><title>Momento 0 do caso: 8.000 tokens</title></rect>`
      + `<rect class="ctx-trilho" x="1" y="${yb - 1}" width="${W - 2}" height="${hb + 2}"/>` + seg.s + marcas + hitBase(x0, yb, wBase);
  };

  const desenhaPedido = (segs, rotulos) => {
    const W = Math.max(260, Math.round(svgP.getBoundingClientRect().width || el.clientWidth || 320));
    const x0 = 2, Wi = W - 4, px = v => x0 + v / ESCALA_PEDIDO * Wi;
    const ys = 7, yb = 19, hb = 40, H = yb + hb + 26;
    const cinzaW = Math.max(4, BASE / ESCALA_PEDIDO * Wi);
    const seg = segmentos(segs, ESCALA_PEDIDO, x0, Wi, yb, hb, segsPedido(CASOS[caso].m[m]), rotulos);
    const marcas = [0, 100000, 200000, 300000].map((v, i) => {
      const x = Math.min(W - 1, Math.max(1, px(v)));
      return `<line x1="${x}" x2="${x}" y1="${yb + hb + 1}" y2="${yb + hb + 7}" stroke="var(--texto)" stroke-width="2"/><text x="${x}" y="${yb + hb + 22}" font-size="13" class="ctx-t2" text-anchor="${i === 0 ? 'start' : i === 3 ? 'end' : 'middle'}">${v ? mil(v) : '0'}</text>`;
    }).join('');
    svgP.setAttribute('viewBox', `0 0 ${W} ${H}`); svgP.setAttribute('height', H);
    svgP.innerHTML = defs()
      + `<rect x="${x0}" y="${ys - 3}" width="${cinzaW.toFixed(1)}" height="6" fill="${CINZA}"><title>Momento 0 do caso: 8.000 tokens</title></rect>`
      + `<text x="${x0 + cinzaW + 6}" y="${ys + 4}" font-size="12.5" class="ctx-t2">cinza: Momento 0 (8 mil)</text>`
      + `<rect class="ctx-trilho" x="1" y="${yb - 1}" width="${W - 2}" height="${hb + 2}"/>` + seg.s + marcas
      + (segs.base > 0.5 ? hitBase(x0, yb, Math.max(4, segs.base / ESCALA_PEDIDO * Wi)) : '');
  };

  const desenhaBarras = (j, p, rotulos) => { desenhaJanela(j, rotulos); desenhaPedido(p, rotulos); };

  const paraTimers = () => { timers.forEach(clearTimeout); timers = []; };
  const animaBarras = (jAlvo, pAlvo) => {
    paraTimers();
    const j0 = { ...jDes }, p0 = { ...pDes };
    jDes = jAlvo; pDes = pAlvo;
    if (reduz()) { desenhaBarras(jAlvo, pAlvo, true); return; }
    const mist = (a, b, f) => Object.fromEntries(ORDEM.map(k => [k, a[k] + (b[k] - a[k]) * f]));
    for (let i = 1; i <= 6; i++) timers.push(setTimeout(() => desenhaBarras(mist(j0, jAlvo, i / 6), mist(p0, pAlvo, i / 6), i === 6), i * 75)); // 0,45 s em 6 degraus
  };

  const desenha = (anima = true) => {
    const c = CASOS[caso], mo = c.m[m];
    const jAlvo = segsJanela(mo), pAlvo = segsPedido(mo);
    if (anima) animaBarras(jAlvo, pAlvo); else { paraTimers(); jDes = jAlvo; pDes = pAlvo; desenhaBarras(jAlvo, pAlvo, true); }
    $('[data-v="jan"]').textContent = mil(mo.jan) + ' tokens';
    $('[data-v="ped"]').textContent = mo.ped ? mil(mo.ped) + ' tokens' : 'nenhum ainda';
    $('[data-c="jan"]').textContent = num(mo.jan);
    $('[data-c="ped"]').textContent = mo.ped ? num(mo.ped) : 'nenhum';
    $('[data-c="som"]').textContent = typeof mo.som === 'number' ? num(mo.som) : mo.som;
    const custo = $('[data-c="custo"]');
    if (!mo.ped) custo.innerHTML = '<strong class="ctx-so">nenhum pedido</strong>';
    else {
      const q = mo.custo === '–' ? '–' : mo.custo?.q || dolar(mo.ped * 0.2 / 1e6), f = mo.custo === '–' ? '–' : dolar(mo.ped * 4 / 1e6);
      const cls = v => /^US\$/.test(v) ? ' class="ctx-us"' : '';
      custo.innerHTML = `<span>cache quente</span><strong${cls(q)}>${q}</strong><span>cache frio</span><strong${cls(f)}>${f}</strong>`;
    }
    const foco = $('[data-v="foco"]'), fb = $('.ctx-foco-barra');
    if (typeof mo.foco === 'number') {
      foco.textContent = `Do que vai no pedido, ${mo.foco}% é do assunto atual.`;
      fb.style.width = mo.foco + '%';
      fb.style.background = mo.foco >= 80 ? 'var(--certo)' : mo.foco >= 40 ? '#ffd23f' : 'var(--errado)';
    } else {
      foco.textContent = mo.foco === 'resumo' ? 'Do que vai no pedido: a conversa antiga virou um resumo.' : 'Ainda não há pedido para medir o foco.';
      fb.style.width = mo.foco === 'resumo' ? '100%' : '0';
      fb.style.background = mo.foco === 'resumo' ? `repeating-linear-gradient(135deg,${SEG.resumo.cor} 0 5px,color-mix(in srgb,${SEG.resumo.cor} 55%,#fff) 5px 8px)` : 'none';
    }
    el.querySelectorAll('[data-m]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.m === m)));
    $('.ctx-texto').textContent = mo.t;
    $('[data-v="rodape-arq"]').hidden = caso !== 'arquivo';
    const focoTxt = typeof mo.foco === 'number' ? `foco de ${mo.foco}%` : mo.foco === 'resumo' ? 'a conversa virou resumo' : 'sem foco para medir';
    barras.setAttribute('aria-label', `${c.nome}, ${m === 4 ? 'Momento ∞' : ROTULOS[m]}: janela com ${mil(mo.jan)} tokens; ${mo.ped ? `último pedido de ${mil(mo.ped)}` : 'nenhum pedido'}; ${focoTxt}; original em 8 mil`);
  };

  const abreBalao = (abrir, focar) => {
    balao.hidden = !abrir;
    btnBase.setAttribute('aria-expanded', String(abrir));
    if (abrir && focar) balao.querySelector('.ctx-fechar').focus();
    if (!abrir && focar) btnBase.focus();
  };

  sel.addEventListener('change', e => { caso = e.target.value; m = 0; desenha(); });
  const aoClicar = e => {
    const b = e.target.closest('[data-m]');
    if (b) { m = +b.dataset.m; desenha(); return; }
    if (e.target.closest('.ctx-prox')) { m = (m + 1) % ROTULOS.length; desenha(); return; }
    if (e.target.closest('.ctx-base')) { abreBalao(balao.hidden, false); return; }
    if (e.target.closest('.ctx-fechar')) { abreBalao(false, true); return; }
    if (e.target.closest('[data-base]')) abreBalao(true, false);
  };
  const aoTeclar = e => {
    if (e.key === 'Escape' && !balao.hidden) { e.preventDefault(); abreBalao(false, true); return; }
    const b = e.target.closest('[data-m]');
    if (!b) return;
    const ir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    let alvo = null;
    if (ir) alvo = (+b.dataset.m + ir + ROTULOS.length) % ROTULOS.length;
    else if (e.key === 'Home') alvo = 0;
    else if (e.key === 'End') alvo = ROTULOS.length - 1;
    if (alvo === null) return;
    e.preventDefault();
    m = alvo; desenha();
    el.querySelector(`[data-m="${alvo}"]`).focus();
  };
  el.addEventListener('click', aoClicar);
  el.addEventListener('keydown', aoTeclar);

  // Redesenha quando a largura muda (giro do celular, painel lateral) e quando a fonte de leitura termina de carregar.
  let ultimaW = 0;
  const ro = new ResizeObserver(() => { const w = Math.round(svgJ.getBoundingClientRect().width); if (w && w !== ultimaW) { ultimaW = w; desenhaBarras(jDes, pDes, true); } });
  ro.observe(barras);
  document.fonts?.ready.then(() => { if (el.isConnected) desenhaBarras(jDes, pDes, true); });

  desenha(false);
  return () => { paraTimers(); ro.disconnect(); el.removeEventListener('click', aoClicar); el.removeEventListener('keydown', aoTeclar); el.innerHTML = ''; };
}
