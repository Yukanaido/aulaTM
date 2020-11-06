var CACHE_NAME = 'fabricio_cache-v1'
var urlsToCache = [
    'img/android-icon-192x192.png',
    'img/apple-icon-144x144.png',
    'img/favicon-32x32.png',
    'js/jquery-3.5.1.min.js',
    'js/scripts.js'
]

self.addEventListener('install', function(event){
    //iniciaria os passos para instalação do nosso service worker
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Cache aberto...')
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response
            }
            return fetch(event.request)
        })
    )
})

