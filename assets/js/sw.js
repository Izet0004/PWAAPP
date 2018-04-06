self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('PWAAPP').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html',
        '/css/index.css'
      ]);
    })
  );
 });
 