self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('app-static-v1').then(function (cache) {
			return cache.addAll([
				'/',
				'css/styles.css',
				'./fend-restaurant-review-app/img/1.jpg',
				'./fend-restaurant-review-app/img/2.jpg',
				'./fend-restaurant-review-app/img/3.jpg',
				'./fend-restaurant-review-app/img/4.jpg',
				'./fend-restaurant-review-app/img/5.jpg',
				'./fend-restaurant-review-app/img/6.jpg',
				'./fend-restaurant-review-app/img/7.jpg',
				'./fend-restaurant-review-app/img/8.jpg',
				'./fend-restaurant-review-app/img/9.jpg',
				'./fend-restaurant-review-app/img/10.jpg',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'index.html',
				'restaurant.html'
			]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});