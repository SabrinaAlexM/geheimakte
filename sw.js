// Geheimakte Service Worker: macht die App offline-fähig.
// Bei jeder neuen Version die Zahl hochzählen, damit alle Geräte das Update laden.
const VERSION = 'geheimakte-v3';
const APP = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon.svg', './fonts/special-elite-400.woff2', './fonts/ibm-plex-mono-400.woff2', './fonts/ibm-plex-mono-500.woff2', './fonts/ibm-plex-mono-600.woff2', './fonts/ibm-plex-mono-700.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Seite selbst: zuerst Netz (neueste Version), sonst aus dem Speicher
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Alles andere (Icons, Schriften): aus dem Speicher, sonst Netz und merken
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  })));
});
