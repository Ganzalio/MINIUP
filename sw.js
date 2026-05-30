const CACHE_NAME = 'victoria-v1';
const urlsToCache = [
  '/MINIUP/',
  '/MINIUP/index.html',
  '/MINIUP/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
