const VERSION = "70";
const CACHE_NAME = `free-knit-workbench-v${VERSION}`;
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg"
];

const versionedRequest = (url) => {
  const requestUrl = new URL(url, self.location.href);
  requestUrl.searchParams.set("swversion", VERSION);
  return requestUrl.toString();
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS.map(versionedRequest)))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  const isLocalAsset = requestUrl.origin === self.location.origin && ASSETS.some((asset) => new URL(asset, self.location.href).pathname === requestUrl.pathname);
  const cacheKey = isLocalAsset ? versionedRequest(requestUrl.pathname) : event.request;
  event.respondWith(
    caches.match(cacheKey).then((cached) => cached || fetch(event.request))
  );
});
