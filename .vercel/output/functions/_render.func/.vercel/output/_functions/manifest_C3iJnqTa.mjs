import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DFxSiHJC.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_oeCz78ac.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ajaym/anmol-jeevan/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.querySelectorAll(\"[data-accordion-button]\").forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.getAttribute(\"data-accordion-button\");k(Number(t))})});function k(e){const t=document.getElementById(`content-${e}`),s=document.getElementById(`icon-${e}`);if(!t||!s)return;const c={minus:`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4\">\n              <path d=\"M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z\" />\n            </svg>`,plus:`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4\">\n              <path d=\"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z\" />\n            </svg>`};t.style.maxHeight&&t.style.maxHeight!==\"0px\"?(t.style.maxHeight=\"0\",s.innerHTML=c.plus):(t.style.maxHeight=t.scrollHeight+\"px\",s.innerHTML=c.minus)}function f(e,t,s,c,b=\"\"){let l=null;const u=document.getElementById(e);if(!u)return;function v(h){l||(l=h);const g=Math.min((h-l)/c,1),y=Math.floor(g*(s-t)+t);u.textContent=`${y}${b}`,g<1&&window.requestAnimationFrame(v)}window.requestAnimationFrame(v)}const m=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(f(\"speed-counter\",0,95,2e3,\"%\"),f(\"time-counter\",0,10,2e3,\"Yrs\"),m.unobserve(t.target))})},{threshold:.5}),w=document.getElementById(\"speed-counter\"),L=document.getElementById(\"time-counter\");w&&m.observe(w);L&&m.observe(L);const i=document.getElementById(\"navbar\"),x=document.querySelector(\"[data-switch-theme]\"),d=document.querySelector(\"[data-navbar]\"),o=document.querySelector(\"[data-toggle-nav]\");let n=!1;function p(){if(!d||!o)return;n=!n,d.classList.toggle(\"show\"),o.setAttribute(\"aria-expanded\",n.toString()),document.body.style.overflow=n?\"hidden\":\"\",o.querySelectorAll(\"svg\").forEach(t=>t.classList.toggle(\"hidden\"))}function S(){const e=document.documentElement.classList.toggle(\"dark\");localStorage.setItem(\"theme\",e?\"dark\":\"light\")}function E(){n&&(n=!1,d?.classList.remove(\"show\"),o?.setAttribute(\"aria-expanded\",\"false\"),document.body.style.overflow=\"\")}(localStorage.theme===\"dark\"||!(\"theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches)&&document.documentElement.classList.add(\"dark\");o?.addEventListener(\"click\",p);document.querySelectorAll(\".nav-link\").forEach(e=>{e.addEventListener(\"click\",E)});o?.addEventListener(\"click\",p);x?.addEventListener(\"click\",S);window.addEventListener(\"resize\",()=>{window.innerWidth>=1024&&E()});let r=window.scrollY,a=!1;window.addEventListener(\"scroll\",()=>{a||window.requestAnimationFrame(()=>{const e=window.scrollY;n||(e<=0?i?.classList.remove(\"nav-hidden\"):e>r&&!i?.classList.contains(\"nav-hidden\")?i?.classList.add(\"nav-hidden\"):e<r&&i?.classList.contains(\"nav-hidden\")&&i?.classList.remove(\"nav-hidden\"),r=e,a=!1)}),a=!0},{passive:!0});document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"backToTop\");e&&(window.addEventListener(\"scroll\",()=>{window.scrollY>100?(e.classList.remove(\"hidden\"),e.classList.add(\"flex\")):(e.classList.remove(\"flex\"),e.classList.add(\"hidden\"))}),e.addEventListener(\"click\",()=>{window.scrollTo({top:0,behavior:\"smooth\"})}))});\n"}],"styles":[{"type":"external","src":"/_astro/index.Zbd9BWEB.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ajaym/anmol-jeevan/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Ajaym/anmol-jeevan/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/Ajaym/anmol-jeevan/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_C3iJnqTa.mjs","@/components/ui/marquee":"_astro/marquee.BpWp9Clx.js","@/components/ui/hero-video-dialog":"_astro/hero-video-dialog.BWREPhWv.js","@/components/shared/AnimatedBanner":"_astro/AnimatedBanner.C5pZz4Z6.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.BnckRZJ7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.Zbd9BWEB.css","/favicon.svg","/asset/about-1.png","/asset/about-2.png","/asset/about-3.png","/icons/anti-drug.svg","/icons/anti_heroine.svg","/icons/call.svg","/icons/detox.svg","/icons/diagnosis.svg","/icons/no-drink.svg","/icons/Nutrition.svg.svg","/icons/Pending_Action.svg.svg","/icons/Self_improvement.svg.svg","/Rehab/Rehab1.jpeg","/Rehab/Rehab2.jpeg","/Rehab/Rehab3.jpeg","/thumbnail/thumbnail-1.jpg","/thumbnail/thumbnail-2.jpg","/thumbnail/thumbnail-3.jpg","/thumbnail/thumbnail.jpg","/_astro/AnimatedBanner.C5pZz4Z6.js","/_astro/client.BIGLHmRd.js","/_astro/hero-video-dialog.BWREPhWv.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/marquee.BpWp9Clx.js","/_astro/proxy.D9LHLTT8.js","/_astro/utils._qghvgfj.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"6jWl/t94svUwYSzSUhjmQNvS8479epZA0bPGgZSpoQI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
