self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("laam-wallet-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "https://i.ibb.co/r28SP1bN/20250802-225108.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
