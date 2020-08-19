---
---
// https://codelabs.developers.google.com/codelabs/pwa-caching-service-worker/index.html

const filesToCache = [
  '{{ site.baseurl }}/',
  '{{ site.baseurl }}/assets/materialize-1.0.0.min.css',
  '{{ site.baseurl }}/assets/tailwind-1.7.2.min.css',
  '{{ site.baseurl }}/assets/styles.css',
  '{{ site.baseurl }}/assets/clipboard-2.0.6.min.js',
  '{{ site.baseurl }}/assets/gifffer-0.32.min.js',
  '{{ site.baseurl }}/assets/scripts.js',
  '{{ site.baseurl }}/assets/scripts-emotes.js',
  '{{ site.baseurl }}/animated.html',
  '{{ site.baseurl }}/emotes.html'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      .then(response => {
        // TODO 5 - Respond with custom 404 page
        return caches.open(staticCacheName).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });

    }).catch(error => {

      return caches.open(staticCacheName).then(cache => {
        cache.put("{{ site.baseurl }}/", response.clone());
        return response;
      });

    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
