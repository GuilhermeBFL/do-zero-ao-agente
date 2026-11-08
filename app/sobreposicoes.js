// Janelas por cima da tela: modal genérico, prova de "Já sei, pular", busca e tutor.
import { estado, salvar, esc, inline, textoPuro, embaralhar, todasAulas, aulaPorId, idTexto, GLOSSARIO, celular } from './base.js';
import { carregarAula, carregarTodas } from './dados.js';

/* ---------- Modal ---------- */
export function abrirModal(html, aoAbrir, rotulo = 'Janela') {
  const veu = document.createElement('div');
  veu.className = 'veu';
  veu.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(rotulo)}" tabindex="-1">${html}</div>`;
  const ultimoFoco = document.activeElement;
  const modal = veu.querySelector('.modal');
  const fechar = () => { veu.remove(); removeEventListener('keydown', tecla, true); ultimoFoco?.focus?.(); };
  const tecla = e => {
    if (e.key === 'Escape') { e.stopPropagation(); fechar(); }
    if (e.key === 'Tab') {  // o foco fica dentro da janela
      const f = [...modal.querySelectorAll('button:not([disabled]), a[href], input, select, [tabindex="0"]')].filter(x => x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  };
  veu.addEventListener('click', e => { if (e.target === veu || e.target.closest('[data-fechar]')) fechar(); });
  addEventListener('keydown', tecla, true);
  document.body.append(veu);
  const h = modal.querySelector('h2');
  if (h) { h.id = 'modal-titulo'; modal.removeAttribute('aria-label'); modal.setAttribute('aria-labelledby', 'modal-titulo'); }
  (modal.querySelector('input, .opcao, button:not([data-fechar])') || modal).focus();
  aoAbrir?.(veu, fechar);
  return fechar;
}
export const fecharModais = () => document.querySelectorAll('.veu').forEach(v => v.remove());

/* ---------- Já sei, pular ---------- */
export async function abrirProva(id) {
  const aula = await carregarAula(id);
  if (!aula?.prova?.length) return;
  const lista = aula.prova;
  const html = lista.map((q, i) => `<section data-q="${i}" class="prova-q"><p class="prova-p">${inline(q.p)}</p>${embaralhar(q.o.map(([t, e], k) => ({ t, e, k })), q.p, id).map(o => `<button class="opcao" type="button" data-k="${o.k}" data-e="${esc(o.e)}">${inline(o.t)}</button>`).join('')}<p class="explica" aria-live="polite"></p></section>`).join('');
  abrirModal(`<h2>Mostre que já sabe</h2><p>Uma tentativa em cada pergunta. Acertando as duas, a aula conta como concluída.</p>${html}<p class="res" aria-live="polite"></p><button class="botao" data-fechar>Voltar para a aula</button>`, veu => {
    let certas = 0, feitas = 0;
    veu.querySelectorAll('section[data-q]').forEach(s => s.addEventListener('click', e => {
      const b = e.target.closest('.opcao');
      if (!b || s.dataset.feita) return;
      s.dataset.feita = '1';
      const q = lista[+s.dataset.q];
      const ok = +b.dataset.k === q.c;
      b.classList.add(ok ? 'certa' : 'errada');
      const certa = s.querySelector(`.opcao[data-k="${q.c}"]`);
      certa.classList.add('certa');
      s.querySelectorAll('.opcao').forEach(o => o.setAttribute('aria-disabled', 'true'));
      const ex = s.querySelector('.explica');
      ex.className = `explica ${ok ? 'certa' : 'errada'}`;
      ex.innerHTML = `<strong>${ok ? 'Certo.' : 'Ainda não.'}</strong> ${inline(b.dataset.e)}${ok ? '' : ` <span class="a-certa">A certa: ${inline(q.o[q.c][0])}. ${inline(q.o[q.c][1])}</span>`}`;
      feitas++;
      if (ok) certas++;
      if (feitas === lista.length) {
        const res = veu.querySelector('.res');
        if (certas === lista.length) {
          estado.feitas[id] = Date.now();
          salvar();
          res.innerHTML = '<strong>Pode pular.</strong> A aula ficou marcada como concluída.';
          document.dispatchEvent(new CustomEvent('progresso'));
        } else res.innerHTML = '<strong>Vale ver a aula.</strong> Assim você fecha o que faltou.';
      }
    }));
  }, 'Já sei, pular');
}

/* ---------- Busca ---------- */
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
let indice = null;
async function montarIndice() {
  const AULAS = await carregarTodas();
  const itens = [];
  for (const a of todasAulas) {
    const tem = !!AULAS[a.id];
    itens.push({ tipo: 'titulo', id: a.id, t: a.t, s: `Aula ${idTexto(a.id)} · Módulo ${a.m.n}: ${a.m.t}${tem ? '' : ' (em breve)'}`, h: `#/aula/${a.id}` });
  }
  for (const [id, aula] of Object.entries(AULAS)) {
    const info = aulaPorId(id);
    if (!info) continue;
    const add = (b, txt) => itens.push({ tipo: 'texto', id, t: info.t, txt: textoPuro(txt), h: `#/aula/${id}?b=${b}` });
    add('abertura', aula.abertura);
    const varre = (blocos, pref) => blocos.forEach((bl, i) => {
      const [tipo, d] = bl, b = pref + i;
      if (['p', 'h2', 'h3', 'quebra'].includes(tipo)) add(b, d);
      else if (tipo === 'lista') d.forEach(x => add(b, x));
      else if (tipo === 'erros') d.forEach(([x, y]) => add(b, `${x} ${y}`));
      else if (tipo === 'imagem' && d.legenda) add(b, d.legenda);
      else if (tipo === 'fundo') varre(d.blocos, `${b}.`);
    });
    varre(aula.blocos, '');
  }
  for (const [k, [t, d]] of Object.entries(GLOSSARIO)) itens.push({ tipo: 'gloss', t, txt: d, s: d, h: `#/glossario?t=${k}` });
  for (const it of itens) it.n = norm(it.tipo === 'titulo' ? it.t : `${it.t} ${it.txt}`);
  return itens;
}
function trecho(txt, q) {
  const n = norm(txt), i = n.indexOf(q);
  if (i < 0) return esc(txt.slice(0, 140));
  const ini = Math.max(0, i - 60), fim = Math.min(txt.length, i + q.length + 80);
  return `${ini ? '…' : ''}${esc(txt.slice(ini, i))}<mark>${esc(txt.slice(i, i + q.length))}</mark>${esc(txt.slice(i + q.length, fim))}${fim < txt.length ? '…' : ''}`;
}
export function abrirBusca() {
  if (document.querySelector('.modal .busca-campo')) return;
  abrirModal(`<h2>Buscar</h2><input class="busca-campo" type="search" placeholder="Digite: commit, chave, pasta escondida..." aria-label="Buscar no curso" autocomplete="off"><p class="busca-status" aria-live="polite"></p><ul class="busca-res"></ul>`, async (veu, fechar) => {
    const ca = veu.querySelector('input'), ul = veu.querySelector('ul'), st = veu.querySelector('.busca-status');
    const lista = () => {
      if (!indice) { st.textContent = 'Preparando a busca…'; return; }
      const q = norm(ca.value.trim());
      if (q.length < 2) { ul.innerHTML = ''; st.textContent = 'Busca nos títulos, no texto das aulas prontas e no glossário.'; return; }
      const achados = indice.filter(i => i.n.includes(q));
      const ordem = { titulo: 0, gloss: 1, texto: 2 };
      achados.sort((a, b) => ordem[a.tipo] - ordem[b.tipo]);
      const r = achados.slice(0, 14);
      st.textContent = achados.length ? `${achados.length} resultado${achados.length > 1 ? 's' : ''}${achados.length > r.length ? `; mostrando ${r.length}` : ''}.` : `Nada encontrado para "${ca.value}". Tente outra palavra.`;
      ul.innerHTML = r.map(i => i.tipo === 'texto'
        ? `<li><a href="${i.h}"><span class="br-t">${esc(i.t)}</span><small>Aula ${idTexto(i.id)}: ${trecho(i.txt, q)}</small></a></li>`
        : i.tipo === 'gloss' ? `<li><a href="${i.h}"><span class="br-t">${esc(i.t)}</span><small>Glossário: ${esc(i.s)}</small></a></li>`
          : `<li><a href="${i.h}"><span class="br-t">${esc(i.t)}</span><small>${esc(i.s)}</small></a></li>`).join('');
    };
    ca.addEventListener('input', lista);
    ul.addEventListener('click', e => { if (e.target.closest('a')) fechar(); });
    lista();
    if (!indice) { indice = await montarIndice(); lista(); }
  }, 'Buscar');
}

/* ---------- Tutor ---------- */
const CODIGO_CHAVE = 'curso.tutor.codigo';
const lerCodigo = () => { try { return localStorage.getItem(CODIGO_CHAVE) || ''; } catch { return ''; } };
const gravarCodigo = c => { try { if (c) localStorage.setItem(CODIGO_CHAVE, c); else localStorage.removeItem(CODIGO_CHAVE); } catch { /* sem armazenamento */ } };
// Id aleatório deste aparelho, para o limite por aparelho do tutor real (api/tutor.js). Não identifica a pessoa.
const APARELHO_CHAVE = 'curso.tutor.aparelho';
const lerAparelho = () => { try { let a = localStorage.getItem(APARELHO_CHAVE); if (!a) { a = Math.random().toString(36).slice(2, 12) + Date.now().toString(36); localStorage.setItem(APARELHO_CHAVE, a); } return a; } catch { return 'sem-armazenamento'; } };
const SUGESTOES_GERAIS = [
  ['Por onde eu começo?', 'Pela fase 0 do mapa, mesmo que pareça fácil: a aula 0.0 mostra como usar o curso e o Claude Code, e todo laboratório até o módulo 7 se apoia nela. Quer que eu explique o que tem na fase 0?'],
  ['Quanto tempo leva o curso?', 'Com 3 a 7 horas por semana e aulas de 20 a 45 minutos, o caminho principal leva alguns meses. As fases bônus são opcionais e podem ficar para depois.']
];
// Resposta de demonstração: a pergunta pronta mais parecida, ou um aviso.
function respostaDemo(pergunta, sug) {
  const palavras = norm(pergunta).split(/\W+/).filter(w => w.length > 3);
  let melhor = null, nota = 0;
  for (const [p, r] of sug) {
    const alvo = norm(p + ' ' + r);
    const n = palavras.filter(w => alvo.includes(w)).length;
    if (n > nota) { nota = n; melhor = r; }
  }
  return nota >= 2 ? melhor : 'No modo de demonstração eu só tenho respostas prontas para as perguntas desta aula. Toque em uma das perguntas sugeridas, ou use a busca para achar o trecho da aula que fala disso.';
}
export async function alternarTutor() {
  const ja = document.querySelector('.tutor');
  if (ja) { ja.remove(); return; }
  const m = location.hash.match(/aula\/([\w-]+)/);
  const id = m ? m[1] : null;
  const aula = id ? await carregarAula(id) : null;
  const info = id ? aulaPorId(id) : null;
  const sug = aula?.tutor?.length ? aula.tutor : SUGESTOES_GERAIS;
  const el = document.createElement('aside');
  el.className = 'tutor';
  el.setAttribute('aria-label', 'Tutor do curso');
  const historico = [];
  const modo = () => (lerCodigo() ? 'Com código de convite' : 'Tutor de demonstração: respostas prontas');
  el.innerHTML = `<header><h2>Tutor<small class="tutor-modo">${modo()}</small></h2><button class="fecha" aria-label="Fechar o tutor">×</button></header>
    <div class="msgs" aria-live="polite"><div class="msg bot">${info ? `Estou com a aula "${esc(info.t)}" aberta. Primeiro eu explico; se quiser, depois te faço uma pergunta.` : 'Oi. Abra uma aula e eu respondo com base nela.'}</div></div>
    <div class="sugestoes">${sug.map(([p], i) => `<button type="button" data-i="${i}">${esc(p)}</button>`).join('')}</div>
    <form class="tutor-form"><input type="text" placeholder="Escreva sua dúvida" aria-label="Sua dúvida" maxlength="600"><button>Enviar</button></form>
    <details class="tutor-codigo"><summary>Tenho um código de convite</summary><form class="codigo-form"><input type="text" aria-label="Código de convite" placeholder="Código de convite" autocomplete="off" value="${esc(lerCodigo())}" maxlength="64"><button>Guardar</button></form><p>O código fica só neste aparelho. Sem código, o tutor usa as respostas prontas.</p></details>`;
  document.body.append(el);
  const msgs = el.querySelector('.msgs');
  const addMsg = (t, q) => { const d = document.createElement('div'); d.className = `msg ${q}`; d.textContent = t; msgs.append(d); msgs.scrollTop = msgs.scrollHeight; return d; };
  el.querySelector('.fecha').addEventListener('click', () => el.remove());
  el.addEventListener('keydown', e => { if (e.key === 'Escape') el.remove(); });
  async function perguntar(texto, pronta) {
    addMsg(texto, 'eu');
    const codigo = lerCodigo();
    let resposta = null;
    if (codigo) {
      const espera = addMsg('Pensando…', 'bot espera');
      try {
        const r = await fetch('api/tutor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ codigo, aula: id, pergunta: texto, historico: historico.slice(-6), aparelho: lerAparelho() }) });
        // A função devolve 200 com {resposta} ou, numa recusa (convite inválido, limite), 200 com {resposta, erro}: o aviso vem em resposta.
        if (r.ok) { const j = await r.json(); resposta = j.resposta || j.erro || null; }
      } catch { /* sem rede ou sem função: cai na demonstração */ }
      espera.remove();
      if (!resposta) el.querySelector('.tutor-modo').textContent = 'Tutor de demonstração: respostas prontas';
    }
    if (!resposta) resposta = pronta ?? respostaDemo(texto, sug);
    historico.push({ pergunta: texto, resposta });
    setTimeout(() => addMsg(resposta, 'bot'), codigo ? 0 : 250);
  }
  el.querySelector('.sugestoes').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    const [p, r] = sug[+b.dataset.i];
    b.remove();
    perguntar(p, r);
  });
  el.querySelector('.tutor-form').addEventListener('submit', e => {
    e.preventDefault();
    const inp = e.target.querySelector('input');
    const t = inp.value.trim();
    if (!t) return;
    inp.value = '';
    perguntar(t);
  });
  el.querySelector('.codigo-form').addEventListener('submit', e => {
    e.preventDefault();
    gravarCodigo(e.target.querySelector('input').value.trim());
    el.querySelector('.tutor-modo').textContent = modo();
    el.querySelector('.tutor-codigo').open = false;
  });
  (celular() ? el.querySelector('.fecha') : el.querySelector('.sugestoes button, .tutor-form input')).focus();
}
