"use strict";var precacheConfig=[["/portfolio/index.html","f53d8a5c6bd809a55768af9130d9ca1c"],["/portfolio/static/css/main.c18418c9.css","40da13e061cb3d1c7557257ef0680240"],["/portfolio/static/js/main.bdc965a6.js","86ae106125a2e5977eab423ccf62fdb8"],["/portfolio/static/media/StudentVoice.4a73063a.png","4a73063a3b5ce24abdcfc5f2555a425f"],["/portfolio/static/media/accentio.1fb0d9e1.png","1fb0d9e18708ee515822e3017cfb5fbb"],["/portfolio/static/media/apartmentPromo.32dde304.png","32dde304028cb88e8757ee2653a51ad7"],["/portfolio/static/media/bikeFinder.ba520a97.png","ba520a97c2c11ce526efde676d68963a"],["/portfolio/static/media/blackjack.5dd518e8.png","5dd518e8ff5dc036d71c1c03d8b6dd1b"],["/portfolio/static/media/boulderFinder.ceae9656.png","ceae9656d7ee6377a263cc1cddaf6147"],["/portfolio/static/media/bouldr.e3e0b288.png","e3e0b288d18fc853a7db3438dcb2599f"],["/portfolio/static/media/carshare.761ae5d3.png","761ae5d384cd4253da9025068cf29c3d"],["/portfolio/static/media/chi.33a1dca6.png","33a1dca6a37de51ecdc9975b688e1c1c"],["/portfolio/static/media/dac.b31a2aab.png","b31a2aab10bce5fd65399f235b503af1"],["/portfolio/static/media/darkWeb.461cd5bd.png","461cd5bd010d53a7c8ecff262b341699"],["/portfolio/static/media/electoralMap.c955c114.png","c955c114e794468469c93ec503687079"],["/portfolio/static/media/etech.59f428e5.png","59f428e5b519eff5d38065ed4e10aaa8"],["/portfolio/static/media/gis.7665e75c.png","7665e75c758264083132a909abdfcf2d"],["/portfolio/static/media/hcm.ab566014.png","ab5660140941bd8158d3612be30ce4c2"],["/portfolio/static/media/iot.1e5d031a.gif","1e5d031a602992b89fa0d131123de7f8"],["/portfolio/static/media/me1.e2a9e160.jpg","e2a9e16031fa7004fcdb8da82733d91d"],["/portfolio/static/media/medal.f88d5121.svg","f88d51219be7f603ce05c5b0b507b3b5"],["/portfolio/static/media/nationalParksFinder.28650228.png","28650228fc227a9b43fe2d0873178290"],["/portfolio/static/media/pcords.21540b29.png","21540b299a9a76265c3a69cf6eab9595"],["/portfolio/static/media/perk.0889d2fa.png","0889d2fa1861c392903c5a1989b53772"],["/portfolio/static/media/processor.b76a229c.png","b76a229c269fde765dd385396282b850"],["/portfolio/static/media/whispers.8b04d134.png","8b04d134410e17f34d563513d0854362"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});