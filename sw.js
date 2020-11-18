self.addEventListener("install", e => {
   e.waitUntil(
      caches.open("static").then(cache => {
         return cache.addAll(["./", "./crop_black.png"]);
      })
   );
});


