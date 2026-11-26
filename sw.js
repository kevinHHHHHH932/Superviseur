/* Superviseur — service worker : fonctionne hors ligne, aucune requête hors du site */
const C='superviseur-v1';
const SHELL=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','vault/vault.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
 if(u.pathname.endsWith('.bin')){ // images chiffrées : cache d'abord
  e.respondWith(caches.open(C).then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok)c.put(e.request,n.clone());return n}))));return}
 // reste : réseau d'abord (mises à jour), cache si hors ligne
 e.respondWith(fetch(e.request).then(n=>{if(n.ok){const cp=n.clone();caches.open(C).then(c=>c.put(e.request,cp))}return n}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
});
