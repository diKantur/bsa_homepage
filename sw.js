if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,t)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}})).then(e=>{const r=t(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-e41b4514"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"img/dt-100px.jpg",revision:"3f2b1a34a303270116bfa75eb543e9e3"},{url:"img/dt-150px.jpg",revision:"0f6ea16322688f623c10ae37576c78a8"},{url:"img/dt-200px.jpg",revision:"663459fd098fbb5259522bee22e315ee"},{url:"index.html",revision:"8e049b5cd79f23894909c9171ff20680"}],{})}));
//# sourceMappingURL=sw.js.map
