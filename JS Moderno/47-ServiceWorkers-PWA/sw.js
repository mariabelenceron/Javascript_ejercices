const nombreCache = 'apv-v5';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

//Cuando se instala el service worker
//Una vez instalado no se vuelve a ejecutar
self.addEventListener('install', e => {
    console.log('Instalado el Service worker');

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando...');
                cache.addAll(archivos);
            })
    )
})

//Activar el service worker
self.addEventListener('activate', e=>{
    console.log('Service Worker activado');

    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);

                return Promise.all(
                    keys.filter( key => key !== nombreCache)
                        .map( key => caches.delete(key)) // Borra las versiones anteriores
                )
            })
    )
})

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch', e)

    e.respondWith(
        caches
            .match(e.request)
            .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))      
    )
})