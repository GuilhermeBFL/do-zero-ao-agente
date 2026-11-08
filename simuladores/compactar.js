// Simulador "O que sobra depois" (aula 5.3). Complementa o contexto.js da aula 1.2: lá, a janela enche; aqui, a janela
// já encheu e a pergunta é o que cada saída (seguir, /compact, /compact com foco, /clear com bilhete) faz com cada peça.
// Mesmo padrão dos outros: a situação original fica em cinza (a mesa ao meio-dia, 420 mil tokens), uma caixa escolhe o
// caso, botões avançam pelos momentos (0, 1, 2, 3, ∞) e um texto curto explica o que mudou. SVG gerado aqui, sem
// biblioteca, sem voz. Toque (alvos de 44 px), teclado (Tab, setas, Home, End, Enter, Espaço) e "reduzir movimento".
// Uso numa aula: ['simulador', { id: 'compactar', titulo: 'O que sobra depois' }]; opcional: casos: ['seguir', 'foco'] e caso: 'foco'.
// Números: base de 8 mil e resumo de 12% do que foi resumido (proporções da simulação oficial da janela de contexto);
// o que sobrevive vem da tabela oficial "O que sobrevive à compactação"; preços do Opus 5.5 em 08/11/2026 (entrada 4,
// leitura do cache 0,20, saída 20 dólares por milhão). As próximas 20 mensagens somam mil tokens cada uma, como no
// programa do "Preveja" da aula (somar: 20 × início + 190 mil).

const ESCALA = 450000, CINZA = '#9aa0b8', MSGS = 20;
const ORDEM = ['base', 'resumo', 'notas', 'regra', 'decisoes', 'arquivos', 'conversa', 'tentativas', 'saidas'];
const SEG = {
  base: { nome: 'Base', cor: '#6c7bd0' },
  regra: { nome: 'Regra dita só na conversa', cor: '#ffd23f' },
  decisoes: { nome: 'Decisões da manhã', cor: '#f0a640' },
  arquivos: { nome: 'Arquivos lidos', cor: '#4fb386' },
  conversa: { nome: 'Conversa útil', cor: '#8fb3e8' },
  tentativas: { nome: 'Tentativas que deram errado', cor: '#e05a8a', listras: true },
  saidas: { nome: 'Saídas longas de testes', cor: '#e07a3f', listras: true },
  resumo: { nome: 'Resumo da compactação', cor: '#8a8fa6', listras: true },
  notas: { nome: 'NOTAS.md, o bilhete', cor: '#b98be0' }
};
const ORIGINAL = { base: 8000, regra: 30, decisoes: 400, arquivos: 40000, conversa: 121570, tentativas: 70000, saidas: 180000 };
const TOTAL0 = 420000;
const RUIDO0 = ORIGINAL.tentativas + ORIGINAL.saidas;

// As linhas da mesa. Cada estado: [ícone, texto]. O ícone repete a ideia do texto, para não depender da cor.
const LINHAS = [
  ['base', 'Base: instruções do sistema, CLAUDE.md da raiz, memória automática'],
  ['regra', 'Regra dita só na conversa: "responda em tópicos"'],
  ['decisoes', 'Decisões da manhã: taxa, prazo, arredondamento'],
  ['arquivos', 'Arquivos lidos: 4 pequenos e 2 grandes'],
  ['conversa', 'Conversa útil sobre a tarefa'],
  ['tentativas', 'Duas tentativas que deram errado'],
  ['saidas', 'Saídas longas de testes e comandos'],
  ['novo', 'Novo na mesa']
];
const E = {
  mesa: ['●', 'na mesa'],
  meio: ['●', 'na mesa, no meio de tudo'],
  lendo: ['⟳', 'sendo lida para o resumo'],
  lendoB: ['⟳', 'sendo lida para o bilhete'],
  disco: ['↻', 'volta inteira: CLAUDE.md e memória relidos do disco'],
  talvez: ['◐', 'no resumo, se ele guardar'],
  pediu: ['◉', 'no resumo: você pediu'],
  parcial: ['↻', '4 relidos; os 2 grandes voltam só pelo nome'],
  linha: ['◐', 'vira uma linha do resumo'],
  vira: ['◐', 'vira o resumo'],
  some: ['✕', 'some'],
  fora: ['○', 'fora da mesa, guardada no PC'],
  bilhete: ['✎', 'no bilhete'],
  precisa: ['↻', 'só o que precisa, relido do disco'],
  nada: ['–', 'nada'],
  resumo: ['◐', 'resumo de uns 49 mil tokens'],
  notas: ['✎', 'NOTAS.md, uns 1,5 mil tokens']
};

// Mesa depois de cada saída (tokens por segmento) e o estado de cada linha.
const DEPOIS = {
  seguir: { segs: { ...ORIGINAL }, est: { base: 'mesa', regra: 'meio', decisoes: 'mesa', arquivos: 'mesa', conversa: 'mesa', tentativas: 'mesa', saidas: 'mesa', novo: 'nada' },
    tam: { base: 8000, regra: 30, decisoes: 400, arquivos: 40000, conversa: 121570, tentativas: 70000, saidas: 180000, novo: 0 } },
  compactar: { segs: { base: 8000, resumo: 49440, arquivos: 9100 }, est: { base: 'disco', regra: 'talvez', decisoes: 'talvez', arquivos: 'parcial', conversa: 'vira', tentativas: 'linha', saidas: 'some', novo: 'resumo' },
    tam: { base: 8000, regra: 'dentro do resumo', decisoes: 'dentro do resumo', arquivos: 9100, conversa: 'dentro do resumo', tentativas: 'dentro do resumo', saidas: 0, novo: 49440 } },
  foco: { segs: { base: 8000, resumo: 49440, arquivos: 9100 }, est: { base: 'disco', regra: 'pediu', decisoes: 'pediu', arquivos: 'parcial', conversa: 'vira', tentativas: 'linha', saidas: 'some', novo: 'resumo' },
    tam: { base: 8000, regra: 'dentro do resumo', decisoes: 'dentro do resumo', arquivos: 9100, conversa: 'dentro do resumo', tentativas: 'dentro do resumo', saidas: 0, novo: 49440 } },
  bilhete: { segs: { base: 8000, notas: 1500, arquivos: 4000 }, est: { base: 'disco', regra: 'bilhete', decisoes: 'bilhete', arquivos: 'precisa', conversa: 'fora', tentativas: 'fora', saidas: 'fora', novo: 'notas' },
    tam: { base: 8000, regra: 'no bilhete', decisoes: 'no bilhete', arquivos: 4000, conversa: 'fora', tentativas: 'fora', saidas: 'fora', novo: 1500 } }
};
const ANTES = { est: { base: 'mesa', regra: 'mesa', decisoes: 'mesa', arquivos: 'mesa', conversa: 'mesa', tentativas: 'mesa', saidas: 'mesa', novo: 'nada' },
  tam: { ...ORIGINAL, novo: 0 } };
const soma20 = inicio => MSGS * inicio + 1000 * (MSGS * (MSGS - 1) / 2);   // igual ao somar() do "Preveja"

// Cada momento: mesa ('antes' | 'depois' | 'lendo'), cartões e texto.
// ped: pedido desta etapa; som: entrada somada; custo: [quente, frio] em texto; ruido: barulho na janela.
const M = (mesa, ped, custo, ruido, t) => ({ mesa, ped, custo, ruido, t });
const US = x => 'US$ ' + x.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const CASOS = {
  seguir: { nome: 'Seguir na mesma conversa', m: [
    null,
    M('antes', 'nenhum pedido a mais', null, null, 'Você não faz nada e manda a próxima mensagem. Seguir não custa nada a mais agora: o custo vem em cada mensagem seguinte, que leva os 420 mil tokens junto.'),
    M('depois', 'nenhum', null, null, 'A mesa continua igual. As duas tentativas erradas e os 180 mil tokens de saídas antigas vão junto em todo pedido: são 61% do que está na janela, fora a base.'),
    M('depois', [soma20(420000), `${MSGS} mensagens, somadas`], [US(soma20(420000) * 0.2 / 1e6), US(soma20(420000) * 4 / 1e6)], null, 'As próximas 20 mensagens levam, somadas, 8,59 milhões de tokens. A regra de tópicos continua na mesa, mas no meio de 420 mil tokens, disputando atenção com o barulho.'),
    M('depois', [soma20(420000), '20 mensagens; seguir não tem ação'], [US(soma20(420000) * 0.2 / 1e6), US(soma20(420000) * 4 / 1e6)], null, 'Se você seguir sempre, a compactação acontece sozinha: perto de 967 mil, no meio do que estiver fazendo, ou numa pausa longa, quando a sessão passa de uns 200 mil. Nos dois casos, sem o seu foco. Seguir é bom enquanto tudo na mesa ainda serve.')
  ] },
  compactar: { nome: '/compact', m: [
    null,
    M('lendo', [TOTAL0, 'lidos, e o resumo é escrito'], ['US$ 0,084', 'US$ 1,68'], null, 'Você digita /compact. O Claude Code manda um pedido à parte com a conversa inteira, e o modelo escreve um resumo. Com o cache quente, a leitura sai por uma fração; depois de uma pausa longa, a preço cheio. O resumo é texto de saída, que não entra no cartão.'),
    M('depois', 'nenhum', null, null, 'A base volta do disco, o resumo ocupa uns 49 mil tokens e o Claude Code relê os 4 arquivos pequenos; os 2 grandes, com mais de 5 mil tokens, voltam só pelo nome. As saídas sumiram. A regra dita só na conversa está no resumo se o resumo a guardou: você não sabe.'),
    M('depois', [soma20(66540), `${MSGS} mensagens, somadas`], [US(soma20(66540) * 0.2 / 1e6), US(soma20(66540) * 4 / 1e6)], null, 'As próximas 20 mensagens somam 1,52 milhão de tokens, menos de um quinto de seguir. Se o resumo deixou a regra de fora, as respostas podem voltar em parágrafos longos, e você vai ter de repetir a regra.'),
    M('depois', [TOTAL0 + soma20(66540), 'ação + 20 mensagens'], [US((TOTAL0 + soma20(66540)) * 0.2 / 1e6), US((TOTAL0 + soma20(66540)) * 4 / 1e6)], null, 'Saldo: um pedido grande agora, mensagens bem mais leves depois, mais a escrita do resumo, que não está nos cartões. O risco é o que o resumo escolheu sozinho. Para uma regra nunca depender dele, o lugar é o CLAUDE.md, que volta do disco depois de toda compactação.')
  ] },
  foco: { nome: '/compact com foco', m: [
    null,
    M('lendo', [TOTAL0, 'lidos, e o resumo é escrito'], ['US$ 0,084', 'US$ 1,68'], null, 'Você digita /compact mantenha a regra de responder em tópicos, as decisões da manhã e o que falta testar. É o mesmo pedido grande do /compact, mas agora o resumo sabe o que não pode faltar.'),
    M('depois', 'nenhum', null, null, 'O mesmo tamanho do /compact, uns 66 mil tokens na janela. A diferença está nas linhas da regra e das decisões: elas estão no resumo porque você pediu. O que você não citou, o modelo escolheu sozinho.'),
    M('depois', [soma20(66540), `${MSGS} mensagens, somadas`], [US(soma20(66540) * 0.2 / 1e6), US(soma20(66540) * 4 / 1e6)], null, 'As próximas 20 mensagens somam 1,52 milhão de tokens, como no /compact. E a regra de tópicos continua valendo, porque estava na sua lista.'),
    M('depois', [TOTAL0 + soma20(66540), 'ação + 20 mensagens'], [US((TOTAL0 + soma20(66540)) * 0.2 / 1e6), US((TOTAL0 + soma20(66540)) * 4 / 1e6)], null, 'Saldo: o custo do /compact, com o que importa garantido no resumo. É a saída para a mesma tarefa, com o histórico ainda útil. Regra que vale sempre continua indo para o CLAUDE.md.')
  ] },
  bilhete: { nome: '/clear com bilhete', m: [
    null,
    M('lendoB', [TOTAL0, 'lidos, e o bilhete é escrito'], ['US$ 0,084', 'US$ 1,68'], null, 'Antes de limpar, você pede: escreva em NOTAS.md as decisões, a regra de formato e o próximo passo. É um pedido normal, que lê a conversa e escreve uns 1,5 mil tokens. Depois, /clear, que não custa nada.'),
    M('depois', 'nenhum', null, null, 'Depois do /clear e de "leia NOTAS.md e continue": a base volta do disco, o bilhete entra com 1,5 mil tokens e o Claude lê só o arquivo de que precisa agora. A conversa antiga saiu da mesa, mas está guardada: o /resume volta a ela.'),
    M('depois', [soma20(13500), `${MSGS} mensagens, somadas`], [US(soma20(13500) * 0.2 / 1e6), US(soma20(13500) * 4 / 1e6)], null, 'As próximas 20 mensagens somam 460 mil tokens, menos de um décimo de seguir. Tudo o que vai no pedido é da tarefa de agora, e a regra está no bilhete.'),
    M('depois', [TOTAL0 + soma20(13500), 'ação + 20 mensagens'], [US((TOTAL0 + soma20(13500)) * 0.2 / 1e6), US((TOTAL0 + soma20(13500)) * 4 / 1e6)], null, 'Saldo: o caminho mais barato e mais focado, mais uns 3 centavos para escrever o bilhete. Serve quando o assunto mudou, ou quando a tarefa pode recomeçar de um resumo seu. Sem o bilhete, você explicaria tudo de novo.')
  ] }
};
const M0 = M('antes', null, null, null, 'Meio-dia. A conversa da manhã tem 420 mil tokens: 8 mil de base, os arquivos lidos, a conversa útil e muito barulho, com duas tentativas que deram errado e 180 mil tokens de saídas de testes. A faixa cinza guarda este retrato para comparar.');
const ROTULOS = ['Momento 0', 'Momento 1', 'Momento 2', 'Momento 3', '∞'];
const NOMES_M = ['A mesa ao meio-dia', 'A ação', 'A mesa depois', 'As próximas 20 mensagens', 'O saldo'];
const RODAPE = 'Ordem de grandeza, num caso montado para comparar. Base de 8 mil e resumo de 12% do que foi resumido: proporções da simulação oficial da janela de contexto do Claude Code. O que sobrevive: tabela oficial "O que sobrevive à compactação" (até 5 arquivos relidos; acima de 5 mil tokens, só o nome). Custo pela API, Opus 5.5, em 08/11/2026: cache quente a US$ 0,20 e cache frio a US$ 4 por milhão de tokens de entrada; a escrita do resumo e do bilhete é saída e não entra nos cartões. Cada mensagem nova soma uns mil tokens. Na assinatura, nada disso vira dólar: sai dos limites.';

const num = n => n.toLocaleString('pt-BR');
const mil = n => n >= 1e6 ? `${(n / 1e6).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} ${n >= 2e6 ? 'milhões' : 'milhão'}`
  : n >= 1000 ? `${(n / 1000).toLocaleString('pt-BR', { maximumFractionDigits: n < 10000 ? 1 : 0 })} mil` : String(Math.round(n));
const vazio = () => Object.fromEntries(ORDEM.map(k => [k, 0]));
let MEDIDOR;
const larg = (txt, px, peso = 700) => {
  MEDIDOR ||= document.createElement('canvas').getContext('2d');
  MEDIDOR.font = `${peso} ${px}px "Atkinson Hyperlegible", system-ui, sans-serif`;
  return MEDIDOR.measureText(txt).width;
};
let SEQ = 0;

const ESTILO = `
.cpt{container-type:inline-size;display:grid;grid-template-columns:minmax(0,1fr);gap:16px;font-size:17px;line-height:1.5;color:var(--texto)}
.cpt-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.cpt-caso{display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-weight:700;margin:0}
.cpt-caso select{flex:0 1 auto;min-width:0;max-width:100%;min-height:44px;padding:0 10px;border:2px solid var(--texto);background:var(--papel-2);color:var(--texto);font-size:17px;cursor:pointer}
html[data-tema="noite"] .cpt select{color-scheme:dark}
.cpt-tit{margin:0 0 4px;font-weight:700;font-size:16px;line-height:1.35}
.cpt-tit b{color:var(--marca-texto)}
.cpt-svg{display:block;width:100%;overflow:visible}
.cpt-svg text{font-family:var(--leitura);fill:var(--texto)}
.cpt-svg .cpt-t2{fill:var(--texto-2)}
.cpt-svg .cpt-trilho{fill:var(--papel-3);stroke:var(--texto);stroke-width:2}
.cpt-svg .cpt-rot{fill:#0d0a26;font-weight:700;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}
.cpt-mesa{margin:0;padding:0;list-style:none;border:2px solid var(--texto);background:var(--papel)}
.cpt-mesa li{display:grid;grid-template-columns:18px minmax(0,1fr);gap:4px 10px;align-items:start;padding:8px 10px;border-bottom:1px solid var(--linha)}
.cpt-mesa li:last-child{border-bottom:0}
.cpt-mesa li[data-muda="1"]{background:var(--papel-3)}
.cpt-amostra{width:18px;height:18px;margin-top:3px;border:1.5px solid var(--texto)}
.cpt-nome{font-weight:700;font-size:15.5px;line-height:1.35;overflow-wrap:anywhere}
.cpt-info{grid-column:2;display:flex;flex-wrap:wrap;gap:2px 12px;font-size:14.5px;line-height:1.35;align-items:baseline}
.cpt-antes{color:var(--texto-2);font-variant-numeric:tabular-nums}
.cpt-agora{font-weight:700;font-variant-numeric:tabular-nums}
.cpt-est{display:inline-flex;gap:5px;align-items:baseline}
.cpt-est i{font-style:normal;font-weight:700;width:1.1em;text-align:center}
.cpt-cartoes{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}
@container (min-width:440px){.cpt-cartoes{grid-template-columns:repeat(2,minmax(0,1fr))}}
@container (min-width:660px){.cpt-cartoes{grid-template-columns:repeat(4,minmax(0,1fr))}}
@container (min-width:600px){.cpt-mesa li{grid-template-columns:18px minmax(0,1.25fr) minmax(0,1fr)}.cpt-info{grid-column:3}}
.cpt-cartao{display:flex;flex-direction:column;gap:2px;padding:9px 11px;border:2px solid var(--texto);background:var(--papel)}
.cpt-c-rot{font-size:14px;line-height:1.3;color:var(--texto-2)}
.cpt-c-val{font-size:20px;line-height:1.2;font-weight:700;font-variant-numeric:tabular-nums;overflow-wrap:anywhere;margin-top:auto}
.cpt-c-sub{font-size:13.5px;line-height:1.3;color:var(--texto-2)}
.cpt-c-custo{display:grid;grid-template-columns:auto minmax(0,1fr);gap:1px 8px;font-size:15px;line-height:1.35;margin-top:auto;align-items:baseline}
.cpt-c-custo span{color:var(--texto-2);font-size:14px}
.cpt-c-custo strong{font-variant-numeric:tabular-nums;font-size:16px;white-space:nowrap}
.cpt-c-custo strong.cpt-so{grid-column:1/-1;white-space:normal}
.cpt-momentos{display:flex;flex-wrap:wrap;gap:6px}
.cpt-momentos button{min-height:44px;min-width:44px;padding:0 12px;border:2px solid var(--texto);background:transparent;color:var(--texto);font:inherit;font-weight:700;cursor:pointer}
.cpt-momentos button[aria-pressed="true"]{background:#ffd23f;color:#1b1440;border-color:#1b1440}
.cpt-momentos .cpt-prox{border-style:dashed}
.cpt-texto{margin:0;min-height:4.5em;padding:10px 12px;border-left:6px solid #ffd23f;background:var(--papel)}
.cpt-texto b{display:block;font-size:15px;color:var(--texto-2)}
.cpt-rodape{margin:0;font-size:13.5px;line-height:1.45;color:var(--texto-2)}
`;

export function montar(el, opcoes = {}) {
  const uid = 'cpt' + (++SEQ);
  const reduz = () => opcoes.reduz === true || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ids = (Array.isArray(opcoes.casos) ? opcoes.casos : Object.keys(CASOS)).filter(k => CASOS[k]);
  if (!ids.length) ids.push(...Object.keys(CASOS));
  let caso = ids.includes(opcoes.caso) ? opcoes.caso : ids[0], m = 0, timers = [];
  let desenhado = { ...vazio(), ...ORIGINAL };

  const amostra = k => SEG[k].listras
    ? `background:repeating-linear-gradient(135deg,${SEG[k].cor} 0 5px,color-mix(in srgb,${SEG[k].cor} 55%,#fff) 5px 8px)`
    : `background:${SEG[k].cor}`;
  const corLinha = k => k === 'novo' ? null : k;

  el.innerHTML = `<div class="cpt">
    <label class="cpt-caso">O que você faz agora: <select>${ids.map(k => `<option value="${k}">${CASOS[k].nome}</option>`).join('')}</select></label>
    <div><p class="cpt-tit" aria-hidden="true">A janela (escala até 450 mil tokens): <b data-v="jan"></b></p>
      <svg class="cpt-svg" data-svg="jan" role="img"></svg></div>
    <ul class="cpt-mesa" aria-label="A mesa, peça por peça">${LINHAS.map(([k, n]) => `<li data-linha="${k}">
      <span class="cpt-amostra" data-amostra="${k}" style="${corLinha(k) ? amostra(k) : 'background:transparent;border-style:dashed'}" aria-hidden="true"></span>
      <span class="cpt-nome">${n}</span>
      <span class="cpt-info"><span class="cpt-antes" data-antes></span><span class="cpt-agora" data-agora></span><span class="cpt-est" data-est></span></span>
    </li>`).join('')}</ul>
    <div class="cpt-cartoes">
      <div class="cpt-cartao"><span class="cpt-c-rot">Janela agora (tokens)</span><strong class="cpt-c-val" data-c="jan"></strong></div>
      <div class="cpt-cartao"><span class="cpt-c-rot">Barulho na janela (tentativas erradas e saídas antigas)</span><strong class="cpt-c-val" data-c="ruido"></strong></div>
      <div class="cpt-cartao"><span class="cpt-c-rot">Tokens de entrada desta etapa</span><strong class="cpt-c-val" data-c="ped"></strong><span class="cpt-c-sub" data-c="pedsub"></span></div>
      <div class="cpt-cartao"><span class="cpt-c-rot">Custo desta etapa pela API, Opus 5.5</span><span class="cpt-c-custo" data-c="custo"></span></div>
    </div>
    <div class="cpt-momentos" role="group" aria-label="Momentos">${ROTULOS.map((r, i) => `<button type="button" data-m="${i}" aria-pressed="${i === 0}">${i === 4 ? '<span class="cpt-sr">Momento </span>∞' : r}</button>`).join('')}<button type="button" class="cpt-prox">Próximo passo</button></div>
    <p class="cpt-texto" aria-live="polite"></p>
    <p class="cpt-rodape">${RODAPE}</p>
  </div>`;
  const st = document.createElement('style');
  st.textContent = ESTILO;
  el.prepend(st);

  const $ = s => el.querySelector(s);
  const svg = $('[data-svg="jan"]'), sel = $('select');
  sel.value = caso;

  const momento = () => m === 0 ? M0 : CASOS[caso].m[m];
  const segsAgora = () => momento().mesa === 'depois' ? { ...vazio(), ...DEPOIS[caso].segs } : { ...vazio(), ...ORIGINAL };

  const defs = () => `<defs>${ORDEM.filter(k => SEG[k].listras).map(k => `<pattern id="${uid}-${k}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="${SEG[k].cor}"/><rect width="3" height="8" fill="#ffffff" fill-opacity=".38"/></pattern>`).join('')}</defs>`;
  const preench = k => SEG[k].listras ? `url(#${uid}-${k})` : SEG[k].cor;

  const desenhaBarra = (segs, alvo) => {
    const W = Math.max(260, Math.round(svg.getBoundingClientRect().width || el.clientWidth || 320));
    const x0 = 2, Wi = W - 4, ys = 4, yb = 16, hb = 40, H = yb + hb + 26;
    const px = v => v / ESCALA * Wi;
    let x = x0, s = '';
    for (const k of ORDEM) {
      const v = segs[k];
      if (!(v > 0.5)) continue;
      const w = Math.max(4, px(v));
      s += `<rect x="${x.toFixed(1)}" y="${yb}" width="${w.toFixed(1)}" height="${hb}" fill="${preench(k)}"><title>${SEG[k].nome}: ${num(Math.round(alvo[k] || v))} tokens</title></rect>`;
      const rot = mil(alvo[k] || v), tw = larg(rot, 13);
      if (alvo[k] > 0 && tw + 10 <= w) s += `<text class="cpt-rot" x="${(x + w / 2).toFixed(1)}" y="${yb + hb / 2 + 4.5}" text-anchor="middle" font-size="13" stroke="${SEG[k].cor}" aria-hidden="true">${rot}</text>`;
      x += w;
    }
    const cinzaW = px(TOTAL0);
    const marcas = [0, 100000, 200000, 300000, 400000].map((v, i) => {
      const xm = Math.min(W - 1, x0 + px(v));
      return `<line x1="${xm}" x2="${xm}" y1="${yb + hb + 1}" y2="${yb + hb + 7}" stroke="var(--texto)" stroke-width="2"/><text x="${xm}" y="${yb + hb + 22}" font-size="13" class="cpt-t2" text-anchor="${i === 0 ? 'start' : 'middle'}">${v ? mil(v) : '0'}</text>`;
    }).join('');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`); svg.setAttribute('height', H);
    svg.innerHTML = defs()
      + `<rect x="${x0}" y="${ys - 1}" width="${cinzaW.toFixed(1)}" height="6" fill="${CINZA}"><title>Ao meio-dia, a situação original: 420.000 tokens</title></rect>`
      + `<rect class="cpt-trilho" x="1" y="${yb - 1}" width="${W - 2}" height="${hb + 2}"/>` + s + marcas;
  };

  const paraTimers = () => { timers.forEach(clearTimeout); timers = []; };
  const animaBarra = alvo => {
    paraTimers();
    const de = { ...desenhado };
    desenhado = alvo;
    if (reduz()) { desenhaBarra(alvo, alvo); return; }
    const mist = f => Object.fromEntries(ORDEM.map(k => [k, de[k] + (alvo[k] - de[k]) * f]));
    for (let i = 1; i <= 6; i++) timers.push(setTimeout(() => desenhaBarra(i === 6 ? alvo : mist(i / 6), alvo), i * 75));   // 0,45 s em 6 degraus
  };

  const desenhaMesa = () => {
    const mo = momento(), depois = mo.mesa === 'depois';
    const info = depois ? DEPOIS[caso] : ANTES;
    for (const [k] of LINHAS) {
      const li = el.querySelector(`[data-linha="${k}"]`);
      let est = info.est[k];
      if (mo.mesa === 'lendo' && k !== 'novo') est = 'lendo';
      if (mo.mesa === 'lendoB' && k !== 'novo') est = 'lendoB';
      const a0 = ANTES.tam[k], a1 = depois ? info.tam[k] : ANTES.tam[k];
      li.querySelector('[data-antes]').textContent = k === 'novo' ? 'antes: nada' : `antes: ${mil(a0)}`;
      li.querySelector('[data-agora]').textContent = typeof a1 === 'string' ? `agora: ${a1}` : (k === 'novo' && !a1) ? 'agora: nada' : `agora: ${mil(a1)}`;
      if (k === 'novo') {
        const amo = li.querySelector('[data-amostra]');
        const sk = depois ? (info.est.novo === 'resumo' ? 'resumo' : info.est.novo === 'notas' ? 'notas' : null) : null;
        amo.setAttribute('style', sk ? amostra(sk) : 'background:transparent;border-style:dashed');
      }
      const [ic, tx] = E[est];
      li.querySelector('[data-est]').innerHTML = `<i aria-hidden="true">${ic}</i><span>${tx}</span>`;
      li.dataset.muda = depois && est !== 'mesa' && est !== 'meio' && est !== 'nada' ? '1' : '0';
    }
  };

  const desenhaCartoes = () => {
    const mo = momento();
    const segs = segsAgora();
    const jan = Object.values(segs).reduce((a, b) => a + b, 0);
    $('[data-v="jan"]').textContent = mil(jan) + ' tokens';
    $('[data-c="jan"]').textContent = num(jan);
    const ruido = (segs.tentativas || 0) + (segs.saidas || 0);
    $('[data-c="ruido"]').textContent = ruido ? `${mil(ruido)} (${Math.round(ruido / (jan - segs.base) * 100)}%)`
      : (mo.mesa === 'depois' && (caso === 'compactar' || caso === 'foco') ? 'quase nada: uma linha no resumo' : 'nenhum');
    const ped = $('[data-c="ped"]'), pedsub = $('[data-c="pedsub"]');
    if (!mo.ped) { ped.textContent = '–'; pedsub.textContent = 'nenhum pedido ainda'; }
    else if (mo.ped === 'nenhum') { ped.textContent = '–'; pedsub.textContent = 'nenhum pedido nesta etapa'; }
    else if (typeof mo.ped === 'string') { ped.textContent = '0'; pedsub.textContent = mo.ped; }
    else { ped.textContent = num(mo.ped[0]); pedsub.textContent = mo.ped[1]; }
    const custo = $('[data-c="custo"]');
    custo.innerHTML = mo.custo ? `<span>cache quente</span><strong>${mo.custo[0]}</strong><span>cache frio</span><strong>${mo.custo[1]}</strong>`
      : `<strong class="cpt-so">${mo.ped ? 'nada a mais' : '–'}</strong>`;
  };

  const desenha = (anima = true) => {
    const mo = momento();
    const alvo = segsAgora();
    if (anima) animaBarra(alvo); else { paraTimers(); desenhado = alvo; desenhaBarra(alvo, alvo); }
    desenhaMesa();
    desenhaCartoes();
    el.querySelectorAll('[data-m]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.m === m)));
    $('.cpt-texto').innerHTML = `<b>${CASOS[caso].nome} · ${m === 4 ? '∞' : ROTULOS[m]}: ${NOMES_M[m]}</b>${mo.t}`;
    const jan = Object.values(alvo).reduce((a, b) => a + b, 0);
    svg.setAttribute('aria-label', `${CASOS[caso].nome}, ${m === 4 ? 'Momento ∞' : ROTULOS[m]}: janela com ${mil(jan)} tokens; original em 420 mil`);
  };

  sel.addEventListener('change', e => { caso = e.target.value; m = 0; desenha(); });
  const aoClicar = e => {
    const b = e.target.closest('[data-m]');
    if (b) { m = +b.dataset.m; desenha(); return; }
    if (e.target.closest('.cpt-prox')) { m = (m + 1) % ROTULOS.length; desenha(); }
  };
  const aoTeclar = e => {
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
  const ro = new ResizeObserver(() => { const w = Math.round(svg.getBoundingClientRect().width); if (w && w !== ultimaW) { ultimaW = w; desenhaBarra(desenhado, segsAgora()); } });
  ro.observe(svg);
  document.fonts?.ready.then(() => { if (el.isConnected) desenhaBarra(desenhado, segsAgora()); });

  desenha(false);
  return () => { paraTimers(); ro.disconnect(); el.removeEventListener('click', aoClicar); el.removeEventListener('keydown', aoTeclar); el.innerHTML = ''; };
}
