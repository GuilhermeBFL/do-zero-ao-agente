// Estado salvo no aparelho, currículo, texto com notas do glossário e as peças comuns a todas as telas.
import { CURSO } from '../dados/curriculo.js';
import { GLOSSARIO } from '../dados/glossario.js';

export { CURSO, GLOSSARIO };

/* ---------- Progresso no aparelho ---------- */
const PROG_CHAVE = 'curso.progresso.v1';
const guardado = (() => { try { return JSON.parse(localStorage.getItem(PROG_CHAVE)) || {}; } catch { return {}; } })();
export const estado = {
  feitas: guardado.feitas || {},
  ultima: guardado.ultima || null,
  notas: guardado.notas || {},
  tempos: guardado.tempos || {},
  paradas: guardado.paradas ?? false,
  formato: guardado.formato || 'auto',
  tema: guardado.tema === 'noite' ? 'noite' : 'dia',
  revisao: guardado.revisao || {},
  velocidade: guardado.velocidade || '1'
};
// Itens de revisão do formato antigo ('3-1:lembrar', sem nível) não valem mais.
for (const k of Object.keys(estado.revisao)) if (k.split(':').length !== 3 || typeof estado.revisao[k].nivel !== 'number') delete estado.revisao[k];
export const salvar = () => { try { localStorage.setItem(PROG_CHAVE, JSON.stringify(estado)); } catch { /* navegação privada */ } };
document.documentElement.dataset.tema = estado.tema;

/* ---------- Currículo ---------- */
export const principais = CURSO.filter(m => !m.bonus);
export const todasAulas = CURSO.flatMap(m => m.aulas.map(a => ({ ...a, m })));
export const aulaPorId = id => todasAulas.find(a => a.id === id);
export const moduloPorN = n => CURSO.find(m => m.n === String(n));
export const idTexto = id => id.replace('-', '.');
export const INICIO = '0-0';
export const MIDIA_NOME = { conversa: 'Conversa', curto: 'Vídeo curto', texto: 'Texto', simulador: 'Simulador' };
export const PRATICA_NOME = { lab: 'Laboratório', quebrado: 'Laboratório quebrado', ordenar: 'Coloque na ordem', prever: 'Preveja', pergunta: 'Perguntas com casos' };

/* ---------- Texto ---------- */
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
let idNota = 0;
export const zerarNotas = () => { idNota = 0; };
// {{chave}} ou {{chave|texto}} vira termo com nota na margem (PC) ou ao toque (celular); `x` é código; **x** é destaque.
export function inline(txt) {
  let s = esc(txt);
  s = s.replace(/\{\{([\w-]+)(?:\|([^}]+))?\}\}/g, (_, k, rot) => {
    const g = GLOSSARIO[k];
    if (!g) return rot || k;
    const i = `n${++idNota}`;
    return `<input class="termo-t" type="checkbox" id="${i}" aria-label="Ver o que é ${esc(g[0])}"><label class="termo" for="${i}">${rot || g[0]}</label><span class="nota-m"><strong>${esc(g[0])}.</strong> ${esc(g[1])}</span>`;
  });
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return s;
}
// Texto puro (sem marcação), para a busca e para rótulos.
export const textoPuro = txt => String(txt ?? '').replace(/\{\{([\w-]+)(?:\|([^}]+))?\}\}/g, (_, k, rot) => rot || GLOSSARIO[k]?.[0] || k).replace(/`([^`]+)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
// Embaralha com semente: o mesmo enunciado na mesma aula dá sempre a mesma ordem, e aulas diferentes dão ordens diferentes.
export function embaralhar(lista, ...semente) {
  let h = 7;
  for (const ch of semente.join('|')) h = (Math.imul(h, 31) + ch.charCodeAt(0)) >>> 0;
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    h = (Math.imul(h, 1664525) + 1013904223) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export const min = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
export const reduzMovimento = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export const celular = () => matchMedia('(max-width: 960px)').matches;

export const ICONE = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg>',
  pausa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z"/></svg>',
  cheia: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5v2H6v3zm11-5h5v5h-2V6h-3zM4 15h2v3h3v2H4zm14 0h2v5h-5v-2h3z"/></svg>',
  girar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h6a2 2 0 0 1 2 2v5h-2V5H7v14h3v2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 11h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/></svg>',
  menos: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V1.5L7 6.5l5 5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/></svg>',
  mapa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2zm6 0v12l6 2V7z"/></svg>',
  aulas: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"/></svg>',
  busca: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3a7 7 0 0 1 5.6 11.2l5.1 5.1-1.4 1.4-5.1-5.1A7 7 0 1 1 10 3zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',
  tutor: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/></svg>',
  video: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h13a1 1 0 0 1 1 1v3l4-3v10l-4-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/></svg>',
  seta: '<svg viewBox="0 0 5 7" aria-hidden="true" shape-rendering="crispEdges"><path d="M0 0h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1z"/></svg>'
};

/* ---------- Peças comuns ---------- */
export function barraTopo(rota) {
  const cur = r => (rota === r ? 'aria-current="page"' : '');
  return `<header class="topo">
    ${rota === '/aula' ? `<button class="botao-topo abrir-rail-btn" aria-label="Abrir a lista de aulas do módulo">${ICONE.aulas}</button>` : ''}
    <a class="marca" href="#/">Do zero ao agente</a>
    <nav class="nav-topo" aria-label="Principal">
      <a href="#/" ${cur('/')}>Mapa</a>
      <a href="#/videos" ${cur('/videos')}>Vídeos</a>
      <a href="#/glossario" ${cur('/glossario')}>Glossário</a>
      <a href="#/como-funciona" ${cur('/como-funciona')}>Como funciona</a>
    </nav>
    <span class="espaco"></span>
    <button class="botao-topo so-pc" data-acao="busca">Buscar <kbd>Ctrl K</kbd></button>
    <button class="botao-topo so-pc" data-acao="tutor">Perguntar ao tutor</button>
    <button class="botao-topo" data-acao="tema" aria-label="${estado.tema === 'dia' ? 'Ligar o modo noite' : 'Ligar o modo dia'}">${estado.tema === 'dia' ? 'Noite' : 'Dia'}</button>
  </header>`;
}
export function barraCelular(rota) {
  const cur = r => (rota === r ? 'aria-current="page"' : '');
  return `<nav class="barra-celular" aria-label="Navegação no celular">
    <a href="#/" ${cur('/')}>${ICONE.mapa}<span>Mapa</span></a>
    <a href="#/videos" ${cur('/videos')}>${ICONE.video}<span>Vídeos</span></a>
    <button data-acao="busca">${ICONE.busca}<span>Buscar</span></button>
    <button data-acao="tutor">${ICONE.tutor}<span>Tutor</span></button>
  </nav>`;
}
export function rodape(classe = '') {
  return `<footer class="rodape ${classe}"><p>Curso independente, sem afiliação ou endosso. Claude é marca da Anthropic. Codex e OpenAI são marcas da OpenAI.</p><p>Git Logo by Jason Long, CC BY 3.0</p></footer>`;
}

/* ---------- Limpeza ao trocar de tela ---------- */
export const limpezas = [];
export const aoSair = fn => limpezas.push(fn);
