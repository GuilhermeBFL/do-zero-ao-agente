// Tela da aula: blocos na ordem do prompt (seção 3) e da ESPEC (seção 4), exercícios e laboratório.
import { estado, salvar, esc, inline, embaralhar, aulaPorId, todasAulas, idTexto, barraTopo, barraCelular, rodape, aoSair, MIDIA_NOME, reduzMovimento } from './base.js';
import { comVideo, htmlPlayer, blocoCapitulos, transcricao, ligarPlayer } from './player.js';
import { registrar, quandoTexto, notaDosPontos, NOTAS, pontosHTML } from './revisao.js';
import { abrirProva } from './sobreposicoes.js';

const LINGUAGEM = { python: 'Python', html: 'HTML', javascript: 'JavaScript', js: 'JavaScript', powershell: 'PowerShell', bash: 'Terminal', json: 'JSON', texto: 'Texto', css: 'CSS', sql: 'SQL', markdown: 'Markdown' };
const codigoHTML = (c, copia, ling) => `<pre class="codigo">${ling ? `<span class="ling">${esc(LINGUAGEM[ling] || ling)}</span>` : ''}${copia ? '<button class="copiar" type="button">Copiar</button>' : ''}<code>${esc(c)}</code></pre>`;
const saidaHTML = (s, rot = 'Saída do terminal') => `<figure class="saida"><figcaption>${esc(rot)}</figcaption><pre><code>${esc(s)}</code></pre></figure>`;
const NATUREZA = { oficial: 'oficial', comunidade: 'comunidade', imprensa: 'imprensa', 'opinião': 'opinião', opiniao: 'opinião', 'acadêmico': 'acadêmico', academico: 'acadêmico' };

// Passo de laboratório: objeto { faz, cola, saida, espera } (formato novo) ou [texto, código, espera] (antigo).
const passoDe = p => (Array.isArray(p) ? { faz: p[0], cola: p[1], espera: p[2] } : p);
// Linha do "Coloque na ordem": texto ou { t, recuo, etapa }.
function linhasParsons(d) {
  const ls = d.linhas.map(l => (typeof l === 'string' ? { t: l, recuo: 0 } : { t: l.t, recuo: l.recuo || 0, etapa: l.etapa }));
  const ne = d.etapas?.length || 0;
  if (ne && ls.every(l => l.etapa === undefined)) {
    // Sem etapa em cada linha: as linhas se dividem em partes iguais, na ordem, entre as etapas.
    const por = Math.ceil(ls.length / ne);
    ls.forEach((l, i) => { l.etapa = Math.min(ne - 1, Math.floor(i / por)); });
  }
  ls.forEach(l => { l.etapa = ne ? Math.min(ne - 1, Math.max(0, l.etapa || 0)) : 0; });
  return ls;
}

function blocoHTML(b, i, ctx) {
  const [tipo, d] = b;
  const db = `data-b="${i}"`;
  switch (tipo) {
    case 'h2': return `<h2 id="s${i}" ${db}>${esc(d)}</h2>`;
    case 'h3': return `<h3 id="s${i}" class="sub" ${db}>${esc(d)}</h3>`;
    case 'p': return `<p ${db}>${inline(d)}</p>`;
    case 'quebra': return `<aside class="quebra" ${db}><strong>Onde a analogia quebra</strong>${inline(d)}</aside>`;
    case 'nota': return `<aside class="nota-aviso" ${db}>${inline(d)}</aside>`;
    case 'lista': return `<ul class="regras" ${db}>${d.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`;
    case 'fluxo': return `<ol class="fluxo" ${db}>${d.map(([q, t]) => `<li><strong>${esc(q)}</strong><span>${inline(t)}</span></li>`).join('')}</ol>`;
    case 'saida': return `<div ${db}>${saidaHTML(d)}</div>`;
    case 'tabela': return `<div class="tab-rola" ${db} tabindex="0" role="region" aria-label="Tabela"><table class="tab"><thead><tr>${d.colunas.map(c => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${d.linhas.map(l => `<tr>${l.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    case 'fundo': return `<details class="fundo" ${db}><summary>${esc(d.titulo || 'Para ir mais fundo')}</summary><div class="fundo-corpo">${d.blocos.map((x, j) => blocoHTML(x, `${i}.${j}`, ctx)).join('')}</div></details>`;
    case 'prever': return `<section class="caixa prever" ${db}><h3>Preveja antes de ver</h3><p>${inline(d.pergunta)}</p>${codigoHTML(d.codigo, false, d.linguagem)}<button class="botao mostrar" type="button">Mostrar a resposta</button><div class="resposta" hidden>${inline(d.resposta)}${d.vivo ? `<p class="vivo-instr">Agora toque para mudar o código e veja o resultado:</p><div class="vivo-bts">${d.vivo.map(([r, c]) => `<button class="botao leve" type="button" data-cod="${esc(c)}">${esc(r)}</button>`).join('')}</div><div class="vivo" data-orig="${esc(d.codigo)}"><pre class="codigo vivo-cod"><code>${esc(d.codigo)}</code></pre><iframe title="Resultado do código" sandbox></iframe></div>` : ''}</div></section>`;
    case 'pergunta': {
      const chave = ctx ? `${ctx.id}:pergunta:${ctx.conta.pergunta++}` : '';
      return `<section class="caixa pergunta" ${db} data-c="${d.c}" ${chave ? `data-chave="${chave}"` : ''}><h3>${esc(d.titulo || 'Pare e responda')}</h3><p>${inline(d.p)}</p>${embaralhar(d.o.map(([t, e], k) => ({ t, e, k })), d.p, ctx?.id || '').map(o => `<button class="opcao" type="button" data-k="${o.k}" data-e="${esc(o.e)}">${inline(o.t)}</button>`).join('')}<div class="explica" aria-live="polite"></div></section>`;
    }
    case 'erros': return `<div class="erros" ${db}>${d.map(([a, c]) => `<div><strong>${inline(a)}</strong>${inline(c)}</div>`).join('')}</div>`;
    case 'parsons': {
      const ls = linhasParsons(d);
      const recuo = ls.some(l => l.recuo > 0);
      return `<section class="caixa parsons" ${db} data-certo="${esc(JSON.stringify(ls))}" data-etapas="${esc(JSON.stringify(d.etapas || []))}" data-notas="${esc(JSON.stringify(d.notas || []))}" data-recuo="${recuo ? 1 : 0}"><h3>Coloque na ordem</h3><p>${inline(d.p)}</p><p class="instr">Use ▲ e ▼ para mudar a ordem${recuo ? ', e ← e → para o recuo (em Python, o recuo muda o sentido)' : ''}${d.etapas?.length ? '. Cada etapa se ordena por dentro' : ''}.</p><div class="grupos"></div><button class="botao cheio conferir" type="button">Conferir a ordem</button><p class="explica" aria-live="polite"></p></section>`;
    }
    case 'lembrar': {
      const chave = `${ctx.id}:lembrar:${ctx.conta.lembrar++}`;
      const n = Array.isArray(d.r) ? d.r.length : 1;
      return `<section class="caixa lembrar" ${db} data-chave="${chave}"><h3>Tente lembrar</h3><p>${inline(d.p)}</p><p class="instr">Pense na resposta, sem olhar para cima. Você não precisa escrever nada.</p><button class="botao mostrar" type="button">Ver a resposta</button><div class="resposta" hidden><p class="dica-pontos">A resposta tem ${n} ${n === 1 ? 'ponto' : 'pontos'}. Toque em "Lembrei este" em cada um que você lembrou, depois em Registrar.</p>${pontosHTML(d.r)}<button class="botao cheio lembrar-pronto" type="button">Registrar</button><p class="lembrou-res" aria-live="polite"></p></div></section>`;
    }
    case 'lab': return `<section class="caixa lab" id="s${i}" ${db}><h3>Laboratório: ${esc(d.titulo)}</h3><p class="onde">${esc(d.lugar)}${d.tempo ? `, ${esc(d.tempo)}` : ''}</p>${d.antes ? `<p>${inline(d.antes)}</p>` : ''}<div class="lab-bts">${d.link ? `<a class="botao" href="${esc(d.link[1])}" target="_blank" rel="noopener">${esc(d.link[0])}</a>` : ''}${d.arquivos ? `<a class="botao" href="${esc(d.arquivos)}" download>Baixar os arquivos</a>` : ''}</div><ol>${d.passos.map(passoDe).map((p, k) => `<li><label class="passo"><input type="checkbox" data-lab="${i}-${k}"><span>${inline(p.faz)}</span></label>${p.cola ? codigoHTML(p.cola, true) : ''}${p.saida ? saidaHTML(p.saida, 'O que aparece') : ''}${p.espera ? `<p class="espera"><strong>O que deve acontecer:</strong> ${inline(p.espera)}</p>` : ''}</li>`).join('')}</ol>${d.errado ? `<p class="espera errado"><strong>Se der errado:</strong> ${inline(d.errado)}</p>` : ''}</section>`;
    case 'quebrado': return `<section class="caixa quebrado" ${db}><h3>${esc(d.titulo || 'Laboratório quebrado')}</h3><p>${inline(d.texto)}</p>${d.cola ? `<p class="instr">Para reproduzir, cole:</p>${codigoHTML(d.cola, true)}` : ''}${d.saida || d.codigo ? saidaHTML(d.saida || d.codigo, 'O que apareceu') : ''}<p class="dica"><strong>Dica:</strong> ${inline(d.dica)}</p><button class="botao mostrar" type="button">Ver a causa</button><div class="resposta" hidden>${inline(d.resposta)}</div></section>`;
    case 'simulador': return `<section class="caixa simulador" ${db} data-sim="${esc(d.id)}"><h3>${esc(d.titulo || 'Simulador')}</h3><div class="sim-palco"><p>Carregando o simulador…</p></div></section>`;
    case 'fontes': return `<section class="fontes" id="s${i}" ${db}><h2>Fontes desta aula</h2><ul>${d.map(([t, u, n, data, pt]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a><small>${[NATUREZA[n] || n, data ? `conferida em ${data}` : '', pt === 'pt' ? 'em português' : 'em inglês'].filter(Boolean).map(esc).join(' · ')}</small></li>`).join('')}</ul></section>`;
    default: return '';
  }
}

export function telaAula(id, aula, modulo) {
  const info = aulaPorId(id);
  const m = info.m;
  const v = comVideo(aula.video);
  const relembrar = aula.videoTipo === 'relembrar';
  const tempo = aula.tempo || info.tempo;
  const opcional = aula.opcional ?? info.opcional;
  const ctx = { id, conta: { pergunta: 0, lembrar: 0 } };
  const temH2Lab = aula.blocos.some(b => b[0] === 'h2' && /^Laboratório$/i.test(b[1]));
  const titulos = aula.blocos.map((b, i) => (b[0] === 'h2' ? [i, b[1]] : b[0] === 'lab' && !temH2Lab ? [i, 'Laboratório'] : b[0] === 'fontes' ? [i, 'Fontes'] : null)).filter(Boolean);
  const pos = todasAulas.findIndex(a => a.id === id);
  const ant = todasAulas[pos - 1], prox = todasAulas[pos + 1];
  const player = (rot) => `<div class="player-grade">${htmlPlayer(v)}${blocoCapitulos(v)}</div>${rot || ''}`;
  return `${barraTopo('/aula')}
  <div class="aula-grade">
    <aside class="rail" aria-label="Aulas do módulo ${esc(m.n)}">
      <a class="volta" href="#/">Voltar ao mapa</a>
      <h2><a href="#/modulo/${esc(m.n)}">${esc(m.n)}. ${esc(m.t)}</a></h2>
      <ol>${m.aulas.map(a => {
        const nesta = a.id === id, tem = !!modulo[a.id];
        const marca = `${a.opcional ? '<span class="tag-opc">Opcional</span>' : ''}${tem ? '' : '<span class="tag-breve">em breve</span>'}`;
        const corpo = `<a href="#/aula/${a.id}" ${nesta ? 'aria-current="page"' : ''} class="${tem ? '' : 'breve'}"><span class="ponto ${estado.feitas[a.id] ? 'feita' : ''}" aria-hidden="true"></span><span><span class="rid">${idTexto(a.id)}</span> ${esc(a.t)} ${marca}${estado.feitas[a.id] ? '<span class="sr">, concluída</span>' : ''}</span></a>`;
        const sub = nesta ? `<nav class="nesta" aria-label="Nesta aula">${titulos.map(([k, tt]) => `<a href="#s${k}" data-ancora="s${k}">${esc(tt)}</a>`).join('')}</nav>` : '';
        return `<li>${corpo}${sub}</li>`;
      }).join('')}</ol>
    </aside>
    <main id="conteudo" class="aula-main" tabindex="-1">
      ${v && !relembrar ? `<section class="palco-video" aria-label="Vídeo da aula">${player(`<button class="ler-aula" type="button">Ler a aula: ${esc(info.t)}</button>`)}</section>` : ''}
      <article class="folha-texto">
        <div class="coluna">
          <div class="miga"><a href="#/">Mapa</a> › <a href="#/modulo/${esc(m.n)}">Módulo ${esc(m.n)}</a> › Aula ${idTexto(id)}</div>
          <h1>${esc(info.t)}</h1>
          <div class="meta-aula"><span>${tempo} minutos com a prática</span><span class="tag-midia">${esc(MIDIA_NOME[info.midia] || '')}</span>${opcional ? '<span class="tag-opc grande">Opcional</span>' : ''}<button class="botao leve pular-aula" type="button">Já sei, pular</button></div>
          ${opcional ? '<p class="aviso-opc">Esta aula é opcional: nenhuma aula do caminho principal depende dela.</p>' : ''}
          <p class="abertura" data-b="abertura">${inline(aula.abertura)}</p>
          ${aula.blocos.map((b, i) => (b[0] === 'fontes' ? '' : blocoHTML(b, i, ctx))).join('')}
          ${aula.fixar ? blocoHTML(['pergunta', { titulo: 'Para fechar', p: aula.fixar.p || 'Qual frase resume melhor esta aula?', o: aula.fixar.o, c: aula.fixar.c }], 'fim', null) : ''}
          ${v && relembrar ? `<section class="relembrar" aria-label="Vídeo de relembrar"><h2 id="s-relembre">Relembre em 1 minuto</h2>${player()}</section>` : ''}
          ${v ? transcricao(v) : ''}
          ${aula.blocos.map((b, i) => (b[0] === 'fontes' ? blocoHTML(b, i, ctx) : '')).join('')}
          <div class="concluir"><span>${estado.feitas[id] ? 'Aula concluída.' : 'Terminou a prática?'}</span><button class="botao cheio marca-feita" type="button">${estado.feitas[id] ? 'Desmarcar aula' : 'Marcar como concluída'}</button></div>
          <nav class="navega" aria-label="Outras aulas">${ant ? `<a class="botao" href="#/aula/${ant.id}">Anterior: ${esc(ant.t)}</a>` : '<span></span>'}${prox ? `<a class="botao cheio" href="#/aula/${prox.id}">Próxima: ${esc(prox.t)}</a>` : ''}</nav>
        </div>
      </article>
      ${rodape()}
    </main>
  </div>${barraCelular('/aula')}`;
}

function mostraHTML(nv, codigo) {
  nv.querySelector('.vivo-cod code').textContent = codigo;
  nv.querySelector('iframe').srcdoc = `<!doctype html><meta charset=utf-8><body style="font-family:system-ui;padding:8px">${codigo}`;
}

function ligarParsons(p, id) {
  const certo = JSON.parse(p.dataset.certo);
  const etapas = JSON.parse(p.dataset.etapas);
  const notas = JSON.parse(p.dataset.notas);
  const comRecuo = p.dataset.recuo === '1';
  const pareceCod = comRecuo || certo.some(l => /[=()[\]:]|^git |^\$ |^(pip|uv|npm|cd|ls|python) /.test(l.t));
  const grupos = (etapas.length ? etapas : ['']).map((nome, g) => {
    const corr = certo.map((l, k) => [l, k]).filter(([l]) => l.etapa === g).map(([, k]) => k);
    let ordem = embaralhar(corr, p.querySelector('p').textContent, id, String(g));
    if (ordem.length > 1 && ordem.every((k, j) => certo[k].t === certo[corr[j]].t)) ordem = [...ordem.slice(1), ordem[0]];
    return { nome, corr, ordem };
  });
  const recuo = certo.map(() => 0);
  let conferido = false;
  const okEm = (G, j) => certo[G.ordem[j]].t === certo[G.corr[j]].t && recuo[G.ordem[j]] === certo[G.corr[j]].recuo;
  const caixa = p.querySelector('.grupos');
  const desenha = foco => {
    caixa.innerHTML = grupos.map((G, g) => `<div class="parsons-grupo" data-g="${g}">${G.nome ? `<h4>${g + 1}. ${esc(G.nome)}</h4>` : ''}<div class="linhas">${G.ordem.map((k, j) => `<div class="parsons-linha ${pareceCod ? 'cod' : 'texto'} ${conferido ? (okEm(G, j) ? 'ok' : 'no') : ''}" data-k="${k}" data-recuo="${recuo[k]}" style="--recuo:${recuo[k]}"><span class="txt"><span class="lt">${esc(certo[k].t)}</span>${conferido && okEm(G, j) && notas[k] ? `<span class="nota">${esc(notas[k])}</span>` : ''}</span><span class="bts">${comRecuo ? `<button type="button" data-r="-1" data-g="${g}" data-j="${j}" aria-label="Diminuir o recuo de: ${esc(certo[k].t)}" ${recuo[k] === 0 ? 'disabled' : ''}>←</button><button type="button" data-r="1" data-g="${g}" data-j="${j}" aria-label="Aumentar o recuo de: ${esc(certo[k].t)}" ${recuo[k] >= 4 ? 'disabled' : ''}>→</button>` : ''}<button type="button" data-m="-1" data-g="${g}" data-j="${j}" aria-label="Subir: ${esc(certo[k].t)}" ${j === 0 ? 'disabled' : ''}>▲</button><button type="button" data-m="1" data-g="${g}" data-j="${j}" aria-label="Descer: ${esc(certo[k].t)}" ${j === G.ordem.length - 1 ? 'disabled' : ''}>▼</button></span></div>`).join('')}</div></div>`).join('');
    if (foco) caixa.querySelector(foco)?.focus();
  };
  desenha();
  caixa.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    const G = grupos[+b.dataset.g], j = +b.dataset.j;
    if (b.dataset.m) {
      const t = j + +b.dataset.m;
      [G.ordem[j], G.ordem[t]] = [G.ordem[t], G.ordem[j]];
      conferido = false;
      desenha(`[data-g="${b.dataset.g}"][data-j="${t}"][data-m="${b.dataset.m}"]`) ;
      if (document.activeElement === document.body) caixa.querySelector(`[data-g="${b.dataset.g}"][data-j="${t}"][data-m="${-b.dataset.m}"]`)?.focus();
    } else if (b.dataset.r) {
      const k = G.ordem[j];
      recuo[k] = Math.max(0, Math.min(4, recuo[k] + +b.dataset.r));
      conferido = false;
      desenha(`[data-g="${b.dataset.g}"][data-j="${j}"][data-r="${b.dataset.r}"]`);
    }
  });
  p.querySelector('.conferir').addEventListener('click', () => {
    conferido = true;
    desenha();
    const ok = grupos.every(G => G.ordem.every((_, j) => okEm(G, j)));
    const ex = p.querySelector('.explica');
    ex.className = `explica ${ok ? 'certa' : 'errada'}`;
    ex.innerHTML = ok ? '<strong>Certo.</strong> Essa é a ordem. Leia a nota de cada linha.' : `<strong>Ainda não.</strong> As linhas verdes estão no lugar${comRecuo ? ' e com o recuo certo' : ''}. Mude as outras e confira de novo.`;
  });
}

export function ligarAula(id, aula, alvo) {
  const raiz = document.getElementById('conteudo');
  const v = comVideo(aula.video);
  if (v) ligarPlayer(raiz, v);
  raiz.addEventListener('click', e => {
    const copiar = e.target.closest('.copiar');
    if (copiar) {
      const txt = copiar.parentElement.querySelector('code').textContent;
      navigator.clipboard?.writeText(txt).catch(() => {});
      copiar.textContent = 'Copiado';
      setTimeout(() => { copiar.textContent = 'Copiar'; }, 1600);
    }
    const mostrar = e.target.closest('.mostrar');
    if (mostrar) {
      const caixa = mostrar.closest('.caixa');
      const res = caixa.querySelector('.resposta');
      res.hidden = !res.hidden;
      mostrar.setAttribute('aria-expanded', String(!res.hidden));
      const nv = caixa.querySelector('.vivo');
      if (nv && !res.hidden) mostraHTML(nv, nv.dataset.orig);
    }
    const bCod = e.target.closest('[data-cod]');
    if (bCod) mostraHTML(bCod.closest('.resposta').querySelector('.vivo'), bCod.dataset.cod);
    const ponto = e.target.closest('.ponto-lembrei');
    if (ponto) ponto.setAttribute('aria-pressed', ponto.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    const pronto = e.target.closest('.lembrar-pronto');
    if (pronto) {
      const cx = pronto.closest('.lembrar');
      const marc = cx.querySelectorAll('.ponto-lembrei[aria-pressed="true"]').length;
      const nota = notaDosPontos(marc, cx.querySelectorAll('.ponto-lembrei').length);
      const r = registrar(cx.dataset.chave, nota);
      cx.querySelector('.lembrou-res').innerHTML = `<strong>${NOTAS[nota]}.</strong> ${marc} de ${cx.querySelectorAll('.ponto-lembrei').length} pontos. ${quandoTexto(r)}`;
    }
    const op = e.target.closest('.opcao');
    if (op) {
      const caixa = op.closest('.pergunta');
      const certo = +op.dataset.k === +caixa.dataset.c;
      caixa.querySelectorAll('.opcao').forEach(o => { o.classList.remove('certa', 'errada'); o.removeAttribute('aria-pressed'); });
      op.classList.add(certo ? 'certa' : 'errada');
      op.setAttribute('aria-pressed', 'true');
      const ex = caixa.querySelector('.explica');
      ex.className = `explica ${certo ? 'certa' : 'errada'}`;
      let extra = '';
      if (caixa.dataset.chave && !caixa.dataset.registrada) {
        caixa.dataset.registrada = '1';
        const r = registrar(caixa.dataset.chave, certo ? 'lembrei' : 'nao');
        extra = `<span class="rev-nota">${certo ? 'Acertou de primeira.' : 'Valeu a tentativa.'} ${quandoTexto(r)}</span>`;
      }
      ex.innerHTML = `<strong>${certo ? 'Certo.' : 'Ainda não.'}</strong> ${inline(op.dataset.e)}${extra || caixa.querySelector('.rev-nota')?.outerHTML || ''}`;
    }
  });
  raiz.querySelectorAll('.parsons').forEach(p => ligarParsons(p, id));
  raiz.querySelectorAll('input[data-lab]').forEach(c => {
    const k = `lab${id}:${c.dataset.lab}`;
    c.checked = !!estado.notas[k];
    c.addEventListener('change', () => { estado.notas[k] = c.checked; salvar(); });
  });
  raiz.querySelectorAll('.simulador[data-sim]').forEach(s => {
    const palco = s.querySelector('.sim-palco');
    import(`../simuladores/${s.dataset.sim}.js`).then(mod => {
      palco.innerHTML = '';
      const fim = mod.montar(palco, { reduz: reduzMovimento(), aula: id });
      if (typeof fim === 'function') aoSair(fim);
    }).catch(() => { palco.innerHTML = '<p>O simulador não carregou. Confira a internet e abra a aula de novo.</p>'; });
  });
  raiz.querySelector('.marca-feita').addEventListener('click', () => {
    if (estado.feitas[id]) delete estado.feitas[id]; else estado.feitas[id] = Date.now();
    salvar();
    dispatchEvent(new HashChangeEvent('hashchange'));
  });
  raiz.querySelector('.pular-aula').addEventListener('click', () => abrirProva(id));
  raiz.querySelector('.ler-aula')?.addEventListener('click', () => { const f = raiz.querySelector('.folha-texto'); f.scrollIntoView(); f.querySelector('h1').setAttribute('tabindex', '-1'); f.querySelector('h1').focus({ preventScroll: true }); });
  // Marcador da seção atual no menu lateral
  const ancoras = [...document.querySelectorAll('.nesta a')];
  if (ancoras.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(ents => {
      for (const en of ents) if (en.isIntersecting) ancoras.forEach(a => a.classList.toggle('ativa', a.dataset.ancora === en.target.id));
    }, { rootMargin: '-20% 0px -70% 0px' });
    raiz.querySelectorAll('.coluna [id^="s"]').forEach(h => obs.observe(h));
    aoSair(() => obs.disconnect());
  }
  ancoras.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(a.dataset.ancora)?.scrollIntoView();
    document.querySelector('.rail')?.classList.remove('aberta');
  }));
  const rail = document.querySelector('.rail');
  const btRail = document.querySelector('.abrir-rail-btn');
  btRail?.setAttribute('aria-expanded', 'false');
  btRail?.addEventListener('click', () => { const ab = rail.classList.toggle('aberta'); btRail.setAttribute('aria-expanded', String(ab)); if (ab) rail.querySelector('a')?.focus(); });
  rail?.addEventListener('keydown', e => { if (e.key === 'Escape' && rail.classList.contains('aberta')) { rail.classList.remove('aberta'); btRail?.focus(); } });
  // Veio da busca: rola até o trecho e destaca.
  if (alvo) {
    const el = alvo === 'abertura' ? raiz.querySelector('.abertura') : raiz.querySelector(`[data-b="${CSS.escape(alvo)}"]`);
    if (el) {
      el.closest('details')?.setAttribute('open', '');
      requestAnimationFrame(() => {
        el.scrollIntoView({ block: 'center' });
        el.classList.add('achado');
        setTimeout(() => el.classList.remove('achado'), 2600);
      });
      return true;
    }
  }
  return false;
}
