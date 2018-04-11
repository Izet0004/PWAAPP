// const cacheName = "PWACache";
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    '/assets/css/index.css',
                    '/assets/img/logoOrig.png',
                    '/index.html',
                    'service-worker.js'
                ]
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('PWAAPP').then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });