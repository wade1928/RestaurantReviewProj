self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('stuff').then(function(cache) {
			return cache.addAll([
				'/',
				'/img/',
				'/index.html',
				'/css/styles.css'

			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
	);
});