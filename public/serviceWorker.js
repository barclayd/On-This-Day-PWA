self.addEventListener('install', (event) => {
   console.log('service worker installed');
   event.waitUntil(
       // pre-cache static assets
       caches.open('static')
           .then((cache) => {
               cache.addAll([
                   '/',
                   '/index.html',
                   '/src/js/app.js',
                   '/src/css/app.css',
                   '/src/images/otd.png',
                   'https://fonts.googleapis.com/css?family=Noto+Serif'
               ]);
           })
           .catch( err => {
               console.log(err);
           })
   );
});

self.addEventListener('activate', () => {
    console.log('service worker activated');
});

self.addEventListener('fetch', (event) => {
   event.respondWith(
       caches.match(event.request)
           .then((res) => {
               if(res) {
                   return res;
               } else {
                   return fetch(event.request);
               }
           })
   );
});
