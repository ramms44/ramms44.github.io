'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f3626e2d13d6d4a39bc5978a03a0ff74",
".git/config": "81f87cd5d5206388125e353e97905f63",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "b80d4ccdcb3a7068ce72756adb3016ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d3e37fd3309b6239b92fda3f631f5a6",
".git/logs/refs/heads/master": "9d3e37fd3309b6239b92fda3f631f5a6",
".git/logs/refs/remotes/origin/HEAD": "5a773f26df149754b7f941dea4d68d90",
".git/logs/refs/remotes/origin/master": "9803dc502ca062db60f6114bb3270de1",
".git/objects/19/324be43527a83c0c4b7be05aee9c8a96a1d1b9": "65459b4bd0a10aae61d84c3973399d6d",
".git/objects/27/c92664c09a908abde6c3b203cf2a5e300b24e0": "93f0ce10e49c167e66beb6b7b337d4bf",
".git/objects/36/591f5c836c23c3c04df4d3503e7cea3b727a22": "4a222506f2de09741d5d819cea0550d3",
".git/objects/47/882ca907f39e850eb085889bda91c06624f35e": "f2a47178e6c5fd0cf9bad895b1dfc980",
".git/objects/5b/68786258a6ca32b33faaf4ac27670c3c45124c": "2e4bd07907bf88872d0c7714711a15e0",
".git/objects/66/cb587cad8e6819e45069924fc3397fd514993d": "e022d5febed98c91545a17fd4b5a4f07",
".git/objects/6b/a2204921475c05191070470f272688d7290bd3": "aeb709a61d48be3ad274632687f13822",
".git/objects/78/37fed28d2ca406e8a7fa202cbc9bf4b06e315f": "eafa3e3692a12b568d0a563877ac8b99",
".git/objects/80/67468349ee91d4152a640b9d1cf74afd1b76d1": "8fc23b697644923deea52381f2b9460c",
".git/objects/93/552e24aa0e9403b5b4671426c79a09a133144a": "4dd0b07c622a35a45b62884514859cda",
".git/objects/a6/1e8a4551b4a299f7ab69bf08ce361798962b95": "ab5329ee62a55198c08784600e701474",
".git/objects/ca/dd1b7852918fe3732bce946934dfe698dac42a": "7ecc2facfeb5dc906ea726d6a4241969",
".git/objects/e8/b60f6ea9e65323889366cead60b2009b1f47f2": "6bd4318dfcd4915fddb4f1ee3ae0f39f",
".git/objects/fd/da435cdd5cd1214c4383fd58a68324a45606c6": "f3fec211ecdd2d72905eecf02606ae7a",
".git/objects/pack/pack-eecc7dcf707c0b56d682360a6cacff9a2edbebe8.idx": "c289a93509827a53fb8c3f4ff4e56be1",
".git/objects/pack/pack-eecc7dcf707c0b56d682360a6cacff9a2edbebe8.pack": "fbd35ec765b819b89aea1441086a2bf5",
".git/packed-refs": "4dc917b6b820ceb5a6614aeddf725d90",
".git/refs/heads/master": "17dafda891c6339890dce0c5b83f775e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "17dafda891c6339890dce0c5b83f775e",
"assets/AssetManifest.json": "2935f84964cd02d85764e2584145a165",
"assets/assets/fonts/Ostrich/ostrich-regular.ttf": "0ea8229b841487b599fb310da4890990",
"assets/assets/fonts/Web/webhostinghub-glyphs.ttf": "7ea76281f2dff12b64086cc036b816ff",
"assets/assets/images/Smart-black.png": "8dde3b768f8b8f5c559f4ac02b5c0cfc",
"assets/assets/images/Smart-white.png": "fa74897510a5b15982237285a4a43c79",
"assets/FontManifest.json": "61ed022157d0c5bdfa91f61c996f83d9",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "0b3c7d94bbe5ff2fd27ff51b081b9cd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2a1ecb80bd68f4ad966cd4b547fc5482",
"/": "2a1ecb80bd68f4ad966cd4b547fc5482",
"main.dart.js": "9918da47569e3c340f74e9c288dd46f0",
"manifest.json": "aebeaaf241f62db8e222aac70eb75385",
"version.json": "d134b54a2f0457a2a5b82605d71542d2"
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
