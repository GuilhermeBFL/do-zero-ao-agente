// Entrada do site: roteador por hash e ações globais. As partes ficam em app/*.js (módulos ES).
import { estado, salvar, aulaPorId, moduloPorN, limpezas, zerarNotas, INICIO } from './app/base.js';
import { carregarModulo, carregarAula, carregarTodas, moduloDaAula } from './app/dados.js';
import { telaMapa, ligarMapa } from './app/mapa.js';
import { telaAula, ligarAula } from './app/aula.js';
import { telaModulo, telaVideos, telaGlossario, telaComoFunciona, telaEmBreve } from './app/telas.js';
import { ligarMapaModulo } from './app/mapa-modulo.js';
import { abrirBusca, alternarTutor, fecharModais } from './app/sobreposicoes.js';
import { abrirRevisao } from './app/revisao.js';

const app = document.getElementById('app');
const TITULO = 'Do zero ao agente';
let geracao = 0, primeira = true;

async function render() {
  const g = ++geracao;
  const h = location.hash.replace(/^#/, '') || '/';
  const [rota, query] = h.split('?');
  const params = new URLSearchParams(query || '');
  const mA = rota.match(/^\/aula\/([\w-]+)/), mM = rota.match(/^\/modulo\/([\w-]+)/);
  // Carrega o que a tela precisa antes de trocar, para não piscar.
  let monta;
  if (mA) {
    const id = mA[1], info = aulaPorId(id);
    const aula = info ? await carregarAula(id) : null;
    if (aula) {
      const modulo = await carregarModulo(info.m.n);
      monta = () => {
        estado.ultima = id;
        salvar();
        app.innerHTML = telaAula(id, aula, modulo);
        document.title = `${info.t}: ${TITULO}`;
        return ligarAula(id, aula, params.get('b'));
      };
    } else monta = () => { app.innerHTML = telaEmBreve(info); document.title = `${info ? info.t : 'Aula não encontrada'}: ${TITULO}`; };
  } else if (mM && moduloPorN(mM[1])) {
    const m = moduloPorN(mM[1]);
    const AULAS = await carregarModulo(m.n);
    monta = () => { app.innerHTML = telaModulo(m, AULAS); document.title = `Módulo ${m.n}: ${TITULO}`; const fim = ligarMapaModulo(document.querySelector('.mapa-modulo'), m); limpezas.push(fim); };
  } else if (rota === '/videos') {
    const AULAS = await carregarTodas();
    monta = () => { app.innerHTML = telaVideos(AULAS); document.title = `Vídeos: ${TITULO}`; };
  } else if (rota === '/glossario') {
    monta = () => {
      app.innerHTML = telaGlossario();
      document.title = `Glossário: ${TITULO}`;
      const inp = document.querySelector('.gloss-busca');
      inp.addEventListener('input', () => {
        const q = inp.value.toLowerCase();
        document.querySelectorAll('.gloss > div').forEach(d => { d.hidden = !d.dataset.b.includes(q); });
      });
      const t = params.get('t');
      const alvo = t && document.getElementById('g-' + t);
      if (alvo) { alvo.classList.add('achado'); requestAnimationFrame(() => alvo.scrollIntoView({ block: 'center' })); return true; }
    };
  } else if (rota === '/como-funciona') {
    monta = () => { app.innerHTML = telaComoFunciona(); document.title = `Como funciona: ${TITULO}`; };
  } else {
    monta = () => { app.innerHTML = telaMapa(); document.title = TITULO; ligarMapa(); };
  }
  if (g !== geracao) return;  // outra navegação começou enquanto carregava
  while (limpezas.length) { try { limpezas.pop()(); } catch { /* segue */ } }
  document.querySelector('.tutor')?.remove();
  fecharModais();
  zerarNotas();
  document.body.dataset.rota = mA ? 'aula' : mM || ['/videos', '/glossario', '/como-funciona'].includes(rota) ? 'outra' : 'mapa';
  const rolou = monta();
  if (!rolou) scrollTo(0, 0);
  if (!primeira) document.getElementById('conteudo')?.focus({ preventScroll: true });
  primeira = false;
}

document.addEventListener('click', e => {
  const pular = e.target.closest('.pular');
  if (pular) { e.preventDefault(); const c = document.getElementById('conteudo'); c?.focus(); c?.scrollIntoView(); return; }
  const b = e.target.closest('[data-acao]');
  if (!b) return;
  const a = b.dataset.acao;
  if (a === 'busca') abrirBusca();
  if (a === 'tutor') alternarTutor();
  if (a === 'revisao') abrirRevisao();
  if (a === 'tema') {
    estado.tema = estado.tema === 'dia' ? 'noite' : 'dia';
    document.documentElement.dataset.tema = estado.tema;
    document.querySelectorAll('[data-acao="tema"]').forEach(x => { x.textContent = estado.tema === 'dia' ? 'Noite' : 'Dia'; x.setAttribute('aria-label', estado.tema === 'dia' ? 'Ligar o modo noite' : 'Ligar o modo dia'); });
    salvar();
    document.dispatchEvent(new CustomEvent('tema'));
  }
});
addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); abrirBusca(); }
});
addEventListener('hashchange', render);
render();
// Deixa pronto o módulo onde ele parou (abre rápido e funciona sem internet depois).
(window.requestIdleCallback || setTimeout)(() => carregarModulo(moduloDaAula(estado.ultima || INICIO)));
window.__estado = estado;

if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
