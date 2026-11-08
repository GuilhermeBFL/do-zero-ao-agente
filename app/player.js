// Player adaptativo: 16x9 no PC e deitado, 9x16 no celular em pé; troca de arquivo ao girar sem perder o ponto.
// O nome de cada arquivo vem de dados/videos.js (montar-site.mjs --versao N): VIDEOS[id].arquivos[formato].video e .capa.
import * as DADOS from '../dados/videos.js';
import { estado, salvar, esc, min, ICONE, aoSair } from './base.js';

const { VIDEOS } = DADOS;
export { VIDEOS };
// Endereço completo (https://..., vídeo já publicado em um repositório de vídeos) vem do dado e é usado como está;
// só o nome (ainda não publicado) ganha BASE_MIDIA na frente ('midia/' se o videos.js for antigo). Nome nenhum é montado aqui.
const BASE_MIDIA = DADOS.BASE_MIDIA || 'midia/';
export const urlMidia = nome => (/^(https?:)?\/\//.test(nome) || nome.includes('/') ? nome : BASE_MIDIA + nome);
// Vídeo só se montar-site.mjs achou os arquivos dos dois formatos; senão a aula abre sem player, capítulos e transcrição.
export function comVideo(id) {
  const v = id ? VIDEOS[id] : null;
  return v && v.arquivos && v.arquivos['16x9'] && v.arquivos['9x16'] ? v : null;
}
export function formatoIdeal() {
  if (estado.formato !== 'auto') return estado.formato;
  return matchMedia('(max-width: 960px) and (orientation: portrait)').matches ? '9x16' : '16x9';
}
const VELOCIDADES = ['0.85', '1', '1.25', '1.5', '1.75'];
export function htmlPlayer(v) {
  return `<div class="player" data-formato="16x9" data-tocando="false" tabindex="0" role="group" aria-label="Vídeo: ${esc(v.titulo)}. Espaço toca ou pausa; setas andam 5 segundos.">
    <video playsinline preload="metadata" aria-label="${esc(v.titulo)}"></video>
    <button class="play-grande" aria-label="Tocar o vídeo">${ICONE.play}</button>
    <div class="controles">
      <div class="barra" role="slider" aria-label="Posição do vídeo" aria-valuemin="0" aria-valuemax="${Math.round(v.duracao || 0)}" aria-valuenow="0" tabindex="0">
        <div class="barra-fundo"><div class="barra-feito"></div>${(v.capitulos || []).slice(1).map(c => `<span class="barra-marca" style="left:${(c.t / v.duracao) * 100}%"></span>`).join('')}<div class="barra-cab"></div></div>
      </div>
      <button class="c-play" aria-label="Tocar">${ICONE.play}</button>
      <button class="c-volta" aria-label="Voltar 10 segundos">${ICONE.menos}</button>
      <span class="tempo-txt">0:00 / ${min(v.duracao || 0)}</span>
      <div class="direita">
        <select class="c-vel" aria-label="Velocidade">${VELOCIDADES.map(x => `<option value="${x}">${x.replace('.', ',')}x</option>`).join('')}</select>
        <button class="c-formato" aria-label="Trocar entre vídeo horizontal e vertical">${ICONE.girar}</button>
        <button class="c-cheia" aria-label="Tela cheia">${ICONE.cheia}</button>
      </div>
    </div>
  </div>`;
}
export function blocoCapitulos(v) {
  return `<aside class="lista-cap" aria-label="Capítulos do vídeo"><h3>Capítulos</h3>${(v.capitulos || []).map(c => `<button type="button" data-t="${c.t}"><span class="t">${min(c.t)}</span><span>${esc(c.titulo)}</span></button>`).join('')}
    <div class="opcoes-video"><label><input type="checkbox" class="op-paradas" ${estado.paradas ? 'checked' : ''}> Parar no fim de cada capítulo</label></div>
  </aside>`;
}
export function transcricao(v) {
  return `<details class="caixa transcricao"><summary>Ler a transcrição do vídeo</summary><div>${(v.falas || []).map(f => `<p>${f.q ? `<strong>${esc(f.q)}:</strong> ` : ''}${esc(f.t)}</p>`).join('')}</div></details>`;
}
export function ligarPlayer(raiz, v) {
  const pl = raiz.querySelector('.player');
  const vid = pl.querySelector('video');
  const btnPlay = pl.querySelector('.c-play');
  const barra = pl.querySelector('.barra');
  const feito = pl.querySelector('.barra-feito');
  const cab = pl.querySelector('.barra-cab');
  const tempoTxt = pl.querySelector('.tempo-txt');
  const lista = raiz.querySelector('.lista-cap');
  const caps = v.capitulos || [];
  let fmt = null;
  let perguntou = false;
  function trocar(novo, manter = true) {
    if (novo === fmt) return;
    const t = manter ? vid.currentTime || estado.tempos[v.id] || 0 : 0;
    const tocava = !vid.paused;
    fmt = novo;
    pl.dataset.formato = novo;
    const arq = v.arquivos[novo];
    vid.poster = urlMidia(arq.capa);
    vid.src = urlMidia(arq.video);
    vid.width = arq.largura;
    vid.height = arq.altura;
    vid.addEventListener('loadedmetadata', () => {
      vid.playbackRate = +estado.velocidade || 1;
      if (t > 1 && t < (v.duracao || vid.duration) - 2) vid.currentTime = t;
      if (tocava) vid.play().catch(() => {});
    }, { once: true });
    vid.load();
    aviso();
  }
  function aviso() {
    pl.querySelector('.aviso-virar')?.remove();
    if (matchMedia('(max-width: 960px)').matches && fmt === '9x16' && estado.formato === 'auto') {
      const a = document.createElement('div');
      a.className = 'aviso-virar';
      a.textContent = 'Vire o celular para ver na horizontal';
      pl.append(a);
      setTimeout(() => a.remove(), 3500);
    }
  }
  const atualizar = () => {
    const d = vid.duration || v.duracao;
    const p = (vid.currentTime / d) * 100 || 0;
    feito.style.width = `${p}%`;
    cab.style.left = `${p}%`;
    tempoTxt.textContent = `${min(vid.currentTime)} / ${min(d)}`;
    barra.setAttribute('aria-valuenow', Math.round(vid.currentTime));
    barra.setAttribute('aria-valuetext', `${min(vid.currentTime)} de ${min(d)}`);
    if (lista) {
      let at = 0;
      caps.forEach((c, i) => { if (vid.currentTime >= c.t) at = i; });
      lista.querySelectorAll('button[data-t]').forEach((b, i) => b.setAttribute('aria-current', i === at));
    }
    if (vid.currentTime > 2) estado.tempos[v.id] = Math.floor(vid.currentTime);
    if (estado.paradas && !vid.paused) {
      for (const c of caps.slice(1)) {
        if (vid.currentTime >= c.t - 0.15 && vid.currentTime < c.t + 0.1 && pl.dataset.parou !== String(c.t)) { pl.dataset.parou = c.t; vid.pause(); }
      }
    }
    if (v.pergunta && !perguntou && vid.currentTime >= v.pergunta.t) { perguntou = true; fazerPergunta(); }
  };
  function fazerPergunta() {
    vid.pause();
    const q = v.pergunta;
    // Alternativas embaralhadas com semente (texto da pergunta + id do vídeo), como nas aulas: a certa não fica sempre na mesma posição.
    let h = 0; for (const ch of q.p + v.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const ordem = q.o.map((_, i) => i);
    for (let i = ordem.length - 1; i > 0; i--) { h = (h * 1664525 + 1013904223) >>> 0; const j = h % (i + 1); [ordem[i], ordem[j]] = [ordem[j], ordem[i]]; }
    const caixa = document.createElement('div');
    caixa.className = 'pausa-pergunta';
    caixa.innerHTML = `<div><h3>${esc(q.p)}</h3>${ordem.map(i => `<button data-i="${i}">${esc(Array.isArray(q.o[i]) ? q.o[i][0] : q.o[i])}</button>`).join('')}<p class="res" aria-live="polite" hidden></p><button class="seguir">Continuar o vídeo</button></div>`;
    pl.append(caixa);
    const res = caixa.querySelector('.res');
    caixa.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => {
      const i = +b.dataset.i, certo = i === q.c;
      const ex = Array.isArray(q.o[i]) ? q.o[i][1] : q.e;
      res.hidden = false;
      res.textContent = (certo ? 'Isso. ' : 'Ainda não. ') + (ex || '');
    }));
    caixa.querySelector('.seguir').addEventListener('click', () => { caixa.remove(); vid.play(); });
    caixa.querySelector('[data-i]').focus();
  }
  const alternar = () => (vid.paused ? vid.play().catch(() => {}) : vid.pause());
  pl.querySelector('.play-grande').addEventListener('click', alternar);
  btnPlay.addEventListener('click', alternar);
  vid.addEventListener('click', alternar);
  vid.addEventListener('play', () => { pl.dataset.tocando = 'true'; btnPlay.innerHTML = ICONE.pausa; btnPlay.setAttribute('aria-label', 'Pausar'); });
  vid.addEventListener('pause', () => { pl.dataset.tocando = 'false'; btnPlay.innerHTML = ICONE.play; btnPlay.setAttribute('aria-label', 'Tocar'); salvar(); });
  vid.addEventListener('timeupdate', atualizar);
  vid.addEventListener('ended', () => { delete estado.tempos[v.id]; salvar(); });
  vid.addEventListener('error', () => {
    if (pl.querySelector('.aviso-erro')) return;
    const e = document.createElement('div');
    e.className = 'aviso-virar aviso-erro';
    e.textContent = 'O vídeo não abriu. Confira a internet e toque de novo.';
    pl.append(e);
  });
  pl.querySelector('.c-volta').addEventListener('click', () => { vid.currentTime = Math.max(0, vid.currentTime - 10); });
  const sel = pl.querySelector('.c-vel');
  sel.value = VELOCIDADES.includes(String(estado.velocidade)) ? String(estado.velocidade) : '1';
  sel.addEventListener('change', e => { estado.velocidade = e.target.value; salvar(); vid.playbackRate = +e.target.value; });
  pl.querySelector('.c-formato').addEventListener('click', () => {
    estado.formato = fmt === '16x9' ? '9x16' : '16x9';
    salvar();
    trocar(estado.formato);
  });
  pl.querySelector('.c-cheia').addEventListener('click', async () => {
    if (document.fullscreenElement) { document.exitFullscreen(); return; }
    if (pl.requestFullscreen) {
      try {
        await pl.requestFullscreen();
        if (screen.orientation?.lock) await screen.orientation.lock(fmt === '16x9' ? 'landscape' : 'portrait').catch(() => {});
      } catch { vid.webkitEnterFullscreen?.(); }
    } else vid.webkitEnterFullscreen?.();
  });
  const irPara = cx => {
    const r = barra.getBoundingClientRect();
    vid.currentTime = Math.max(0, Math.min(1, (cx - r.left) / r.width)) * (vid.duration || v.duracao);
    atualizar();
  };
  barra.addEventListener('pointerdown', e => { barra.setPointerCapture(e.pointerId); irPara(e.clientX); barra.onpointermove = m => irPara(m.clientX); });
  barra.addEventListener('pointerup', () => { barra.onpointermove = null; });
  barra.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { vid.currentTime += 5; e.preventDefault(); }
    if (e.key === 'ArrowLeft') { vid.currentTime -= 5; e.preventDefault(); }
  });
  pl.addEventListener('keydown', e => {
    if (e.target.closest('select, button, .barra')) return;
    if (e.code === 'Space' || e.key === 'k') { e.preventDefault(); alternar(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); vid.currentTime += 5; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); vid.currentTime -= 5; }
  });
  let ocioso;
  const acorda = () => { pl.dataset.ocioso = 'false'; clearTimeout(ocioso); ocioso = setTimeout(() => { pl.dataset.ocioso = 'true'; }, 2600); };
  pl.addEventListener('pointermove', acorda);
  pl.addEventListener('pointerdown', acorda);
  pl.addEventListener('keydown', acorda);
  pl.addEventListener('focusin', acorda);
  lista?.querySelectorAll('button[data-t]').forEach(b => b.addEventListener('click', () => {
    vid.currentTime = +b.dataset.t;
    pl.dataset.parou = b.dataset.t;
    vid.play().catch(() => {});
    pl.scrollIntoView({ block: 'nearest' });
  }));
  raiz.querySelector('.op-paradas')?.addEventListener('change', e => { estado.paradas = e.target.checked; salvar(); });
  // Muda o arquivo quando o celular gira, sem perder o ponto do vídeo.
  const mq = matchMedia('(orientation: portrait)');
  const aoGirar = () => { if (estado.formato === 'auto') trocar(formatoIdeal()); };
  mq.addEventListener('change', aoGirar);
  addEventListener('resize', aoGirar);
  aoSair(() => { mq.removeEventListener('change', aoGirar); removeEventListener('resize', aoGirar); clearTimeout(ocioso); vid.pause(); salvar(); });
  trocar(formatoIdeal(), true);
  acorda();
  return { pl, vid };
}
