'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "39ddb8d43124b43f1b8bf608a019fc55",
"version.json": "21b60d415374031526ebe304809a0f7a",
"assets/assets/images/menus/ic_cart.png": "04674a5d16849561f89188eb724a5cec",
"assets/assets/images/menus/ic_home.png": "883c90129a1e79aa60d37cb66829a2a2",
"assets/assets/images/menus/ic_account.png": "70c2ad64c6bc3c9b5400e762a54980a7",
"assets/assets/images/menus/ic_search_menu.png": "18f941292522ceb64951157abb24f2f5",
"assets/assets/images/menus/ic_food_express.png": "ff8daa08963a47aecce38d950457f756",
"assets/assets/images/menus/ic_app_icon_black.png": "7a30dc878368216d4e74768d29e2864a",
"assets/assets/images/menus/ic_near_by.png": "6764f2d60c138b53a696da8a194c7292",
"assets/assets/images/menus/ic_delete.png": "c8e38a93e1b0aa819ef9b7224c5f1f0c",
"assets/assets/images/menus/ic_credit_card.png": "b046ba8e2050ba8db86efd79aef29319",
"assets/assets/images/menus/ic_app_icon.png": "811a6b8913a0fb5094ca7baab43ef6f2",
"assets/assets/images/topmenu/ic_cake.png": "68ca078aaf28ad7537eafae7f9871561",
"assets/assets/images/topmenu/ic_pasta.png": "ff3e6bbd0f46c7ba28becf250d1c6159",
"assets/assets/images/topmenu/ic_sushi.png": "b4977c8006b2aa33576443e716d1c90c",
"assets/assets/images/topmenu/ic_pizza.png": "d970ed0836334cb0ccea8f02125d8a84",
"assets/assets/images/topmenu/ic_burger.png": "2406bdef149efed8d0a70472f261fccd",
"assets/assets/images/topmenu/ic_soft_drink.png": "526cd712f0782c1c8b8fa7d9ac73e7be",
"assets/assets/images/topmenu/ic_ice_cream.png": "0d02df9b6ca60e33a7ab1ad3f707c328",
"assets/assets/images/popular_foods/ic_popular_food_2.png": "c76484183aaa154b59d45af7728c5377",
"assets/assets/images/popular_foods/ic_popular_food_3.png": "9e1d95ab833ee4d1efe560a304f1e30f",
"assets/assets/images/popular_foods/ic_popular_food_6.png": "d981f47d57df38fd04aae8bafdeeda49",
"assets/assets/images/popular_foods/ic_popular_food_1.png": "604f1327a5c4f3c47957de9dd584cfe8",
"assets/assets/images/popular_foods/ic_popular_food_4.png": "d3503f895d700633996bf89e2caeaa29",
"assets/assets/images/popular_foods/ic_popular_food_5.png": "db0398fa3040ca0c8b9574d5c5635dd2",
"assets/assets/images/bestfood/ic_best_food_4.jpeg": "fd96d2f14b1e2232597afbdbf0402785",
"assets/assets/images/bestfood/ic_best_food_6.jpeg": "6fb4d65f2b28d7545fd3ecb895af8941",
"assets/assets/images/bestfood/ic_best_food_1.jpeg": "642c886b5d7d8b8ff9e688b002f1ca66",
"assets/assets/images/bestfood/ic_best_food_2.jpeg": "75274d964667aecc9ac8d076ac62e26d",
"assets/assets/images/bestfood/ic_best_food_7.jpeg": "671986b07138c07da9817dafb03127d9",
"assets/assets/images/bestfood/ic_best_food_3.jpeg": "688eb31885ddd522bb7d91b563bee160",
"assets/assets/images/bestfood/ic_best_food_5.jpeg": "28d5dd388994627e3cf2e5e88a48665f",
"assets/assets/images/bestfood/ic_best_food_9.jpeg": "66a6104142e08b315579854324830d9a",
"assets/assets/images/bestfood/ic_best_food_8.jpeg": "5d428e7d169839845c6b7fe5941adb19",
"assets/assets/images/bestfood/ic_best_food_10.jpeg": "2320a4844ba054be538c40e6862c169f",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "d58f09fb58519f02668e3160c73ad252",
"assets/NOTICES": "1be5736ce5ec83ce62e92bbe6d984ee9",
"assets/AssetManifest.json": "d9619cd6abda3120663d051caed88d19",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3bc221ac85f8d18e988392c127ffe841",
"/": "3bc221ac85f8d18e988392c127ffe841",
"manifest.json": "19002c286d13fbfa5b133ce0a66fda6b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
