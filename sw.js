// Gerado por motor/montar-site.mjs. Não edite à mão: o nome do cache muda quando qualquer arquivo do site muda.
// Rede primeiro, cache como reserva. Aulas, simuladores e capas entram no cache quando pedidos; vídeo .mp4 nunca.
const CACHE = 'zero-ao-agente-6a5834966cf6';
const BASE = [
 "./",
 "index.html",
 "app.js",
 "estilo.css",
 "manifest.webmanifest",
 "dados/curriculo.js",
 "dados/index.js",
 "dados/videos.js",
 "dados/glossario.js",
 "app/aula.js",
 "app/base.js",
 "app/dados.js",
 "app/mapa-modulo.js",
 "app/mapa.js",
 "app/player.js",
 "app/revisao.js",
 "app/sobreposicoes.js",
 "app/telas.js",
 "fontes/AtkinsonHyperlegible-Bold.ttf",
 "fontes/AtkinsonHyperlegible-BoldItalic.ttf",
 "fontes/AtkinsonHyperlegible-Italic.ttf",
 "fontes/AtkinsonHyperlegible-Regular.ttf",
 "fontes/Jersey10-Regular.ttf",
 "fontes/PressStart2P-Regular.ttf",
 "img/apple-touch-icon.png",
 "img/aulas/2-12-console.png",
 "img/aulas/2-12-pagina.png",
 "img/aulas/2-12-rede.png",
 "img/icone-192.png",
 "img/icone-512.png",
 "img/icone-maskable-192.png",
 "img/icone-maskable-512.png",
 "img/icone-maskable.svg",
 "img/icone.svg"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.endsWith('.mp4') || u.pathname.includes('/api/') || e.request.headers.has('range')) return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r.ok && r.status === 200) {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : undefined)))
  );
});
