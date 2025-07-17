self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("dspm-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "form-9m.html",
        "style.css",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
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