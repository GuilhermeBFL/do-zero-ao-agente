// Revisão espaçada: todo "Tente lembrar" e toda pergunta de "Pare e responda" entram, com chave '<aula>:<tipo>:<índice>'.
// Lembrei sobe um nível, Mais ou menos repete o nível, Não lembrei volta ao nível 0. A próxima volta é daqui a INTERVALOS[nível] dias.
// O item sai da revisão depois de ACERTOS_PARA_FECHAR "Lembrei" seguidos na própria revisão (plano de aulas v5).
import { estado, salvar, esc, inline, embaralhar, aulaPorId, idTexto } from './base.js';
import { carregarAula } from './dados.js';
import { abrirModal } from './sobreposicoes.js';

export const INTERVALOS = [1, 3, 7, 14, 30];
export const ACERTOS_PARA_FECHAR = 3;
const DIA = 864e5;
export const NOTAS = { lembrei: 'Lembrei', mais: 'Mais ou menos', nao: 'Não lembrei' };

export function registrar(chave, nota, naRevisao = false) {
  const it = estado.revisao[chave] || { nivel: 0, certos: 0 };
  if (nota === 'lembrei') it.nivel = Math.min(INTERVALOS.length - 1, it.nivel + 1);
  else if (nota === 'nao') it.nivel = 0;
  if (naRevisao) it.certos = nota === 'lembrei' ? (it.certos || 0) + 1 : 0;
  it.fechado = it.certos >= ACERTOS_PARA_FECHAR;
  it.quando = Date.now() + INTERVALOS[it.nivel] * DIA;
  estado.revisao[chave] = it;
  salvar();
  return it;
}
export const quandoTexto = it => (it.fechado ? 'Esta pergunta saiu da revisão: você lembrou certo 3 vezes.' : INTERVALOS[it.nivel] === 1 ? 'Ela volta na sua revisão amanhã.' : `Ela volta na sua revisão daqui a ${INTERVALOS[it.nivel]} dias.`);
// Nota calculada pelo site, a partir dos pontos que ele marcou.
export const notaDosPontos = (marcados, total) => (marcados === total ? 'lembrei' : marcados > 0 ? 'mais' : 'nao');
export function devidas() {
  const agora = Date.now();
  return Object.entries(estado.revisao).filter(([, r]) => !r.fechado && r.quando <= agora).sort((a, b) => a[1].quando - b[1].quando);
}
const doTipo = (aula, tipo, k) => aula?.blocos.filter(b => b[0] === tipo)[k]?.[1];

export function pontosHTML(r) {
  const pontos = Array.isArray(r) ? r : [r];
  return `<ul class="pontos">${pontos.map((p, i) => `<li><span>${inline(p)}</span><button class="botao leve ponto-lembrei" type="button" data-ponto="${i}" aria-pressed="false">Lembrei este</button></li>`).join('')}</ul>`;
}

export async function abrirRevisao() {
  const lista = devidas();
  if (!lista.length) {
    const proxima = Object.values(estado.revisao).filter(r => !r.fechado).sort((a, b) => a.quando - b.quando)[0];
    abrirModal(`<h2>Revisão de hoje</h2><p>Nada vencendo hoje.${proxima ? ` A próxima pergunta volta em ${new Date(proxima.quando).toLocaleDateString('pt-BR')}.` : ' As perguntas de "Tente lembrar" e de "Pare e responda" que você responder nas aulas aparecem aqui nos dias seguintes.'}</p><button class="botao" data-fechar>Fechar</button>`);
    return;
  }
  const itens = (await Promise.all(lista.map(async ([chave]) => {
    const [id, tipo, k] = chave.split(':');
    const d = doTipo(await carregarAula(id), tipo, +k);
    return d ? { chave, id, tipo, d } : null;
  }))).filter(Boolean);
  const html = itens.map((it, i) => {
    const origem = `<small class="rev-origem">Aula ${idTexto(it.id)}: ${esc(aulaPorId(it.id)?.t || '')}</small>`;
    if (it.tipo === 'lembrar') return `<section class="caixa rev" data-i="${i}">${origem}<p class="rev-p">${inline(it.d.p)}</p><button class="botao mostrar-rev" type="button">Ver a resposta</button><div class="resposta" hidden><p class="dica-pontos">Toque nos pontos que você lembrou.</p>${pontosHTML(it.d.r)}<button class="botao cheio rev-pronto" type="button">Registrar</button><p class="lembrou-res" aria-live="polite"></p></div></section>`;
    const ops = embaralhar(it.d.o.map(([t, e], k) => ({ t, e, k })), it.d.p, it.id);
    return `<section class="caixa rev" data-i="${i}">${origem}<p class="rev-p">${inline(it.d.p)}</p>${ops.map(o => `<button class="opcao" type="button" data-k="${o.k}" data-e="${esc(o.e)}">${inline(o.t)}</button>`).join('')}<p class="explica" aria-live="polite"></p></section>`;
  }).join('');
  abrirModal(`<h2>Revisão de hoje</h2><p>${itens.length === 1 ? 'Uma pergunta' : `${itens.length} perguntas`}. Pense antes de tocar: lembrar sem olhar fixa melhor que reler.</p>${html}<button class="botao" data-fechar>Fechar</button>`, veu => {
    veu.addEventListener('click', e => {
      const cx = e.target.closest('.rev');
      if (!cx) return;
      const it = itens[+cx.dataset.i];
      if (e.target.closest('.mostrar-rev')) { cx.querySelector('.resposta').hidden = false; e.target.closest('.mostrar-rev').hidden = true; }
      const p = e.target.closest('.ponto-lembrei');
      if (p && !cx.dataset.feita) p.setAttribute('aria-pressed', p.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      if (e.target.closest('.rev-pronto') && !cx.dataset.feita) {
        cx.dataset.feita = '1';
        const marc = cx.querySelectorAll('.ponto-lembrei[aria-pressed="true"]').length;
        const nota = notaDosPontos(marc, cx.querySelectorAll('.ponto-lembrei').length);
        const r = registrar(it.chave, nota, true);
        cx.querySelector('.lembrou-res').innerHTML = `<strong>${NOTAS[nota]}.</strong> ${quandoTexto(r)}`;
      }
      const op = e.target.closest('.opcao');
      if (op && !cx.dataset.feita) {
        cx.dataset.feita = '1';
        const ok = +op.dataset.k === it.d.c;
        op.classList.add(ok ? 'certa' : 'errada');
        cx.querySelector(`.opcao[data-k="${it.d.c}"]`).classList.add('certa');
        const r = registrar(it.chave, ok ? 'lembrei' : 'nao', true);
        const ex = cx.querySelector('.explica');
        ex.className = `explica ${ok ? 'certa' : 'errada'}`;
        ex.innerHTML = `<strong>${ok ? 'Certo.' : 'Ainda não.'}</strong> ${inline(op.dataset.e)} ${quandoTexto(r)}`;
      }
    });
  });
}
