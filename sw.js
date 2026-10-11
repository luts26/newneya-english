const CACHE = 'learn-english-v3';
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
    const request = event.request;
    const url = new URL(request.url);

    if (
        request.method !== 'GET' ||
        url.origin !== self.location.origin ||
        !url.href.startsWith(self.registration.scope)
    ) return;

    event.respondWith((async () => {
        const cache = await caches.open(CACHE);
        const cacheURL = request.mode === 'navigate'
            ? new URL('./index.html', self.registration.scope).href
            : request;

        const cached = await cache.match(cacheURL, {
            ignoreSearch: true
        });

        if (cached) return cached;

        console.warn('Не знайдено в офлайн-кеші:', request.url);

        try {
            return await fetch(request);
        } catch {
            return new Response('Файл відсутній в офлайн-кеші', {
                status: 503,
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8'
                }
            });
        }
    })());
});
