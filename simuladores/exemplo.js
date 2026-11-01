// Simulador de exemplo (estrutura que todo simulador segue): a situação original fica em cinza, uma caixa escolhe o
// caso, botões avançam pelos momentos (0, 1, 2… ∞) e um texto curto explica o que mudou. Sem voz; toque e teclado.
// Uso numa aula: ['simulador', { id: 'exemplo', titulo: 'Uma barra que enche' }]. O site chama montar(el, opcoes).
const CASOS = {
  curta: { nome: 'Conversa curta', valores: [5, 15, 25, 30], textos: ['Momento 0: a conversa começa quase vazia.', 'Momento 1: você manda o pedido; a barra sobe um pouco.', 'Momento 2: o Claude responde; sobe mais.', '∞: a conversa termina cedo e a barra fica baixa.'] },
  longa: { nome: 'Conversa longa', valores: [5, 35, 70, 95], textos: ['Momento 0: o mesmo começo da conversa curta.', 'Momento 1: arquivos lidos ocupam espaço.', 'Momento 2: cada troca soma; a barra passa do original em cinza.', '∞: quase cheia. Fica mais caro e o foco se perde.'] },
  limpa: { nome: '/clear no meio', valores: [5, 35, 5, 25], textos: ['Momento 0: o mesmo começo.', 'Momento 1: a barra sobe como na conversa longa.', 'Momento 2: /clear esvazia a barra: a conversa recomeça.', '∞: a barra volta a subir, mas a partir do zero.'] }
};
const ROTULOS = ['Momento 0', 'Momento 1', 'Momento 2', '∞'];

export function montar(el, opcoes = {}) {
  let caso = 'curta', m = 0;
  el.innerHTML = `<div class="sim">
    <label class="sim-caso">Caso: <select>${Object.entries(CASOS).map(([k, c]) => `<option value="${k}">${c.nome}</option>`).join('')}</select></label>
    <div class="sim-barras" role="img" aria-label="">
      <div class="sim-linha"><span>Original</span><div class="sim-trilho"><div class="sim-orig"></div></div></div>
      <div class="sim-linha"><span>Agora</span><div class="sim-trilho"><div class="sim-agora"></div></div></div>
    </div>
    <div class="sim-momentos" role="group" aria-label="Momentos">${ROTULOS.map((r, i) => `<button type="button" data-m="${i}" aria-pressed="${i === 0}">${r}</button>`).join('')}<button type="button" class="sim-prox">Próximo passo</button></div>
    <p class="sim-texto" aria-live="polite"></p>
  </div>`;
  const st = document.createElement('style');
  st.textContent = `.sim{display:grid;gap:12px}.sim-caso{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.sim-caso select{min-height:44px;padding:0 8px;border:2px solid currentColor;background:transparent}.sim-linha{display:grid;grid-template-columns:72px 1fr;gap:8px;align-items:center;font-size:15px}.sim-trilho{height:26px;border:2px solid currentColor;position:relative}.sim-orig,.sim-agora{position:absolute;left:0;top:0;bottom:0}.sim-orig{background:#9aa0b8}.sim-agora{background:#ffd23f;transition:width .45s steps(6)}.sim-momentos{display:flex;flex-wrap:wrap;gap:6px}.sim-momentos button{min-height:44px;min-width:44px;padding:0 12px;border:2px solid currentColor;background:transparent;cursor:pointer}.sim-momentos button[aria-pressed="true"]{background:#ffd23f;color:#1b1440}.sim-texto{margin:0;min-height:3em}@media (prefers-reduced-motion:reduce){.sim-agora{transition:none}}`;
  el.prepend(st);
  const orig = el.querySelector('.sim-orig'), agora = el.querySelector('.sim-agora'), txt = el.querySelector('.sim-texto'), barras = el.querySelector('.sim-barras');
  const desenha = () => {
    const c = CASOS[caso];
    orig.style.width = c.valores[0] + '%';   // a situação original fica parada, em cinza
    agora.style.width = c.valores[m] + '%';
    el.querySelectorAll('[data-m]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.m === m)));
    txt.textContent = c.textos[m];
    barras.setAttribute('aria-label', `${c.nome}, ${ROTULOS[m]}: barra em ${c.valores[m]}%, original em ${c.valores[0]}%`);
  };
  el.querySelector('select').addEventListener('change', e => { caso = e.target.value; m = 0; desenha(); });
  el.addEventListener('click', e => {
    const b = e.target.closest('[data-m]');
    if (b) { m = +b.dataset.m; desenha(); }
    if (e.target.closest('.sim-prox')) { m = (m + 1) % ROTULOS.length; desenha(); }
  });
  desenha();
  return () => { el.innerHTML = ''; };
}
