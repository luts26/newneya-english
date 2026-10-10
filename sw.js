const CACHE = 'learn-english-v1';
const ASSETS = [
  "./index.html",
  "./manifest.webmanifest",
  "./pwa.js",
  "./ledemo__x2/assets/images/favicon.png",
  "./ledemo__x2/assets/images/uk.png",
  "./ledemo__x2/assets/styles/bootstrap.min.css",
  "./ledemo__x2/assets/styles/style.css",
  "./ledemo__x2/components/menu.js",
  "./ledemo__x2/components/popup.js",
  "./ledemo__x2/data/be.js",
  "./ledemo__x2/data/form3.js",
  "./ledemo__x2/data/settings.js",
  "./ledemo__x2/data/t.js",
  "./ledemo__x2/data/w2.js",
  "./ledemo__x2/pages/app.js",
  "./ledemo__x2/pages/form3.js",
  "./ledemo__x2/pages/lessons.js",
  "./ledemo__x2/pages/words.js",
  "./ledemo__x2/xapp21.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];
self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('learn-english-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (event.request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
    event.respondWith(caches.open(CACHE).then(async cache => {
        if (event.request.mode === 'navigate') return cache.match('./index.html');
        return (await cache.match(event.request)) || fetch(event.request);
    }));
});
