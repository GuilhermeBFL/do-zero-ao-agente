// Telas de apoio: módulo, vídeos, glossário, como funciona e "em breve".
import { estado, esc, CURSO, GLOSSARIO, todasAulas, idTexto, barraTopo, barraCelular, rodape, MIDIA_NOME, PRATICA_NOME, min } from './base.js';
import { VIDEOS, urlMidia } from './player.js';
import { mapaModuloHTML } from './mapa-modulo.js';
import { INTERVALOS } from './revisao.js';

const tempoDe = (a, AULAS) => AULAS?.[a.id]?.tempo || a.tempo;
// Lista das aulas de um módulo, com mídia, prática, duração e estado (feita, aberta, em breve, opcional).
export function listaAulasHTML(m, AULAS, carregado = true) {
  return `<ol class="lista-aulas">${m.aulas.map(a => {
    const tem = !!AULAS?.[a.id];
    const feita = !!estado.feitas[a.id];
    const est = feita ? 'Feita' : !carregado ? '' : tem ? 'Aberta' : 'Em breve';
    const pr = (a.pratica || []).map(p => PRATICA_NOME[p]).filter(Boolean).join(', ');
    return `<li class="${feita ? 'feita' : ''} ${tem ? 'tem' : 'breve'} ${a.opcional ? 'opc' : ''}" data-aula="${a.id}"><a href="#/aula/${a.id}"><span class="la-id">${idTexto(a.id)}</span><span class="la-corpo"><span class="la-t">${esc(a.t)}${a.opcional ? ' <span class="tag-opc">Opcional</span>' : ''}</span><span class="la-info">${esc(MIDIA_NOME[a.midia] || '')}${pr ? ` · ${esc(pr)}` : ''} · ${tempoDe(a, AULAS)} min</span></span><span class="la-estado">${est}</span></a></li>`;
  }).join('')}</ol>`;
}

export function telaModulo(m, AULAS) {
  return `${barraTopo('/modulo')}<main class="pagina pagina-modulo" id="conteudo" tabindex="-1">
    <p class="miga"><a href="#/">Mapa</a> › Módulo ${esc(m.n)}</p>
    <h1>${m.bonus ? 'Fase bônus: ' : ''}${esc(m.n)}. ${esc(m.t)}</h1><p class="lead">${esc(m.d)}</p>
    ${mapaModuloHTML(m)}
    <h2>Aulas</h2>${listaAulasHTML(m, AULAS)}
  </main>${rodape()}${barraCelular('/modulo')}`;
}

const tipoDoVideo = (id, v, AULAS) => v.tipo || Object.values(AULAS).find(a => a.video === id)?.videoTipo || ({ c: 'conversa', s: 'curto', r: 'relembrar' }[id[0]]) || 'curto';
export function telaVideos(AULAS) {
  const aulaDo = id => Object.entries(AULAS).find(([, a]) => a.video === id)?.[0];
  const grupos = { conversa: [], curto: [], relembrar: [] };
  for (const [id, v] of Object.entries(VIDEOS)) (grupos[tipoDoVideo(id, v, AULAS)] || grupos.curto).push([id, v]);
  const cartao = ([id, v]) => {
    const aula = aulaDo(id);
    const capa = v.arquivos?.['16x9']?.capa;
    const corpo = `<span class="capa">${capa ? `<img src="${esc(urlMidia(capa))}" alt="" loading="lazy" width="640" height="360">` : '<span class="sem-capa">Em produção</span>'}${v.duracao ? `<span class="dur">${min(v.duracao)}</span>` : ''}</span><strong>${esc(v.titulo)}</strong><small>${aula ? `Aula ${idTexto(aula)}` : 'Ainda sem aula ligada'}${v.arquivos ? '' : ' · ainda sem arquivo de vídeo'}</small>`;
    return aula ? `<a class="cartao-video" href="#/aula/${aula}">${corpo}</a>` : `<div class="cartao-video">${corpo}</div>`;
  };
  const sec = (k, titulo, txt) => (grupos[k].length ? `<section class="grupo-videos"><h2>${titulo}</h2><p>${txt}</p><div class="grade-videos">${grupos[k].map(cartao).join('')}</div></section>` : '');
  const total = Object.keys(VIDEOS).length;
  return `${barraTopo('/videos')}<main class="pagina" id="conteudo" tabindex="-1"><h1>Vídeos</h1>
    <p class="lead">${total} ${total === 1 ? 'vídeo' : 'vídeos'}. Todo vídeo existe em horizontal e em vertical: o site escolhe sozinho, e troca se você girar o celular, sem perder o ponto.</p>
    ${sec('conversa', 'Conversas', 'Para o que é difícil: bonecos conversando, de 3 a 8 minutos.')}
    ${sec('curto', 'Vídeos curtos', 'Uma ideia só, de 1,5 a 2 minutos.')}
    ${sec('relembrar', 'Relembre em 1 minuto', 'Os pontos da aula de texto ou de simulador, para rever depois de ler.')}
  </main>${rodape()}${barraCelular('/videos')}`;
}

export function telaGlossario() {
  const itens = Object.entries(GLOSSARIO).sort((a, b) => a[1][0].localeCompare(b[1][0], 'pt'));
  return `${barraTopo('/glossario')}<main class="pagina" id="conteudo" tabindex="-1"><h1>Glossário</h1><p class="lead">Toda palavra técnica do curso, com o sentido que ela tem aqui. ${itens.length} verbetes.</p>
    <input class="gloss-busca" type="search" placeholder="Filtrar palavras" aria-label="Filtrar o glossário">
    <dl class="gloss">${itens.map(([k, [t, d]]) => `<div id="g-${esc(k)}" data-b="${esc((t + ' ' + d).toLowerCase())}"><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>
  </main>${rodape()}${barraCelular('/glossario')}`;
}

export function telaComoFunciona() {
  const nAulas = todasAulas.length, nOpc = todasAulas.filter(a => a.opcional).length;
  const itens = [
    ['O mapa', `${CURSO.filter(m => !m.bonus).length} fases, uma por módulo, e ilhas bônus com as aulas opcionais. Nenhuma fase fica trancada: o cadeado só mostra o que você ainda não começou.`],
    ['Texto e vídeo, sempre juntos', 'O vídeo ajuda a entender. O texto é onde está a matéria inteira. Nenhum substitui o outro.'],
    ['Três tipos de vídeo', 'Conversas de 3 a 8 minutos para o que é difícil, vídeos curtos de 1,5 a 2 minutos para uma ideia só, e o "Relembre em 1 minuto" nas aulas de texto.'],
    ['No PC e no celular', 'No PC, o vídeo é horizontal. No celular, é vertical, e vira horizontal se você girar o aparelho, sem perder o ponto. A velocidade que você escolher vale para todos.'],
    ['Preveja antes de ver', 'Todo código começa com uma pergunta. A resposta só aparece depois que você tentou.'],
    ['Nada de escrever', 'Os exercícios são de assinalar, ordenar ou tocar. Funciona no PC e no celular.'],
    ['Palavras na margem', 'No PC, o termo técnico aparece explicado na margem do texto. No celular, abre ao toque.'],
    ['Tente lembrar e revisão', `Você pensa, vê a resposta em pontos e toca nos que lembrou; o site calcula a nota. As perguntas voltam em ${INTERVALOS.join(', ').replace(/, (\d+)$/, ' e $1')} dias, conforme você acerta.`],
    ['Prática no seu PC', 'Os laboratórios são reais, no Claude Code ou no navegador. Alguns já vêm quebrados, para você achar o erro.'],
    ['Pular só com prova', 'Já sabe? Acerte duas perguntas, de primeira, e a aula conta como concluída.'],
    ['Tutor na própria aula', 'Ele responde com base na aula aberta e explica antes de perguntar. Sem código de convite, usa respostas prontas.'],
    ['Progresso no aparelho', 'Fica salvo em cada aparelho. Abre sem internet as aulas que você já abriu; os vídeos precisam de conexão.']
  ];
  return `${barraTopo('/como-funciona')}<main class="pagina" id="conteudo" tabindex="-1"><h1>Como este curso funciona</h1><p class="lead">Programação e tudo o que dá para fazer com o Claude, para quem nunca leu uma linha de código. ${nAulas} aulas no plano, ${nOpc} delas opcionais.</p>
    <div class="sobre-grade">${itens.map(([a, b]) => `<section><h2>${esc(a)}</h2><p>${esc(b)}</p></section>`).join('')}</div>
    <p class="mais"><a class="botao" href="#/aula/0-0">Começar pela aula 0.0</a></p>
  </main>${rodape()}${barraCelular('/como-funciona')}`;
}

export function telaEmBreve(info) {
  if (!info) return `${barraTopo('/')}<main class="pagina" id="conteudo" tabindex="-1"><h1>Aula não encontrada</h1><p class="lead">Este endereço não corresponde a nenhuma aula do mapa.</p><a class="botao" href="#/">Voltar ao mapa</a></main>${rodape()}${barraCelular('/')}`;
  const pos = todasAulas.findIndex(a => a.id === info.id);
  const ant = todasAulas[pos - 1], prox = todasAulas[pos + 1];
  const pr = (info.pratica || []).map(p => PRATICA_NOME[p]).join(', ');
  return `${barraTopo('/')}<main class="pagina em-breve" id="conteudo" tabindex="-1">
    <p class="miga"><a href="#/">Mapa</a> › <a href="#/modulo/${esc(info.m.n)}">Módulo ${esc(info.m.n)}</a> › Aula ${idTexto(info.id)}</p>
    <h1>${esc(info.t)}</h1>
    <p class="selo-breve">Em breve${info.opcional ? ' · Opcional' : ''}</p>
    <p class="lead">Esta aula ainda está sendo escrita. Quando ficar pronta, aparece aqui, no mesmo endereço.</p>
    <ul class="ficha"><li><strong>Módulo:</strong> ${esc(info.m.n)}. ${esc(info.m.t)}</li><li><strong>Mídia:</strong> ${esc(MIDIA_NOME[info.midia] || '')}</li>${pr ? `<li><strong>Prática:</strong> ${esc(pr)}</li>` : ''}<li><strong>Duração prevista:</strong> ${info.tempo} minutos</li></ul>
    <nav class="navega" aria-label="Outras aulas">${ant ? `<a class="botao" href="#/aula/${ant.id}">Anterior: ${esc(ant.t)}</a>` : '<span></span>'}${prox ? `<a class="botao cheio" href="#/aula/${prox.id}">Próxima: ${esc(prox.t)}</a>` : ''}</nav>
  </main>${rodape()}${barraCelular('/')}`;
}
