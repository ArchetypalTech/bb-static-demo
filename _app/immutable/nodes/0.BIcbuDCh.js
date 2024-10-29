import{a as X,e as g,b as C,z as Y,c as b,g as v,h as I,d as E,u as _,A as G,k as f,j as P,q as Z,w as K,t as U,B as V,f as j,C as J,D as L,E as $,l as ee,n as Q,r as te,F as se,G as le,H as ne,I as ae}from"../chunks/scheduler.DyfBZuh3.js";import{S as oe,i as re,t as B,c as ie,a as q,g as ce}from"../chunks/index.De2mMg2Q.js";import{d as O}from"../chunks/state.Bb7R8YXv.js";const ue=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,de=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:de},Symbol.toStringTag,{value:"Module"})),fe="f9bc1d26ec50c4eb2316b05a93db2712ce08eba88839e1da22d0ada9a873fb77";async function _e(n){const e=`${localStorage.getItem("bridge")}-${n}`;return await he(e)===fe}async function he(n){const l=new TextEncoder().encode(n),e=await window.crypto.subtle.digest("SHA-256",l);return Array.from(new Uint8Array(e)).map(a=>a.toString(16).padStart(2,"0")).join("")}const{document:W}=ue;function pe(n){let l,e,t,s='<svg style="fill: black; width: 3em; height: 3em"><use xlink:href="Archetypal.svg#logo"></use></svg>',a,u,p="Enter password to proceed",h,o,d,i,r,m="Submit",T,w,c,z,A=(n[4]>1&&` ${n[4]}`||"")+"",H,D,x,F;return{c(){l=g("div"),e=g("div"),t=g("div"),t.innerHTML=s,a=C(),u=g("h2"),u.textContent=p,h=C(),o=g("form"),d=g("input"),i=C(),r=g("button"),r.textContent=m,T=C(),w=g("div"),c=g("span"),z=U("left for dead"),H=U(A),D=U(", try again."),this.h()},l(y){l=b(y,"DIV",{class:!0});var k=E(l);e=b(k,"DIV",{class:!0});var S=E(e);t=b(S,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-bvnnvc"&&(t.innerHTML=s),a=I(S),u=b(S,"H2",{class:!0,"data-svelte-h":!0}),V(u)!=="svelte-1cbn7fw"&&(u.textContent=p),h=I(S),o=b(S,"FORM",{class:!0});var M=E(o);d=b(M,"INPUT",{type:!0,class:!0}),i=I(M),r=b(M,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),V(r)!=="svelte-eod3zx"&&(r.textContent=m),M.forEach(v),S.forEach(v),T=I(k),w=b(k,"DIV",{class:!0});var R=E(w);c=b(R,"SPAN",{class:!0});var N=E(c);z=j(N,"left for dead"),H=j(N,A),D=j(N,", try again."),N.forEach(v),R.forEach(v),k.forEach(v),this.h()},h(){_(t,"class","_icon self-center"),_(u,"class","text-lg italic"),_(d,"type","text"),_(d,"class","rounded-lg py-2 px-4"),_(r,"type","submit"),_(r,"class","border-black border-4 rounded-lg p-2"),_(o,"class","flex flex-col gap-4"),_(e,"class","_card p-12 rounded-xl flex flex-col gap-4 border-2 svelte-4dikzu"),_(c,"class","text-red-700 text-center"),_(w,"class","hidden"),_(l,"class","grid place-content-center min-h-screen")},m(y,k){P(y,l,k),f(l,e),f(e,t),f(e,a),f(e,u),f(e,h),f(e,o),f(o,d),J(d,n[1]),f(o,i),f(o,r),n[11](e),f(l,T),f(l,w),f(w,c),f(c,z),f(c,H),f(c,D),n[12](c),x||(F=[L(d,"blur",n[5]),L(d,"input",n[10]),L(o,"submit",$(n[5]))],x=!0)},p(y,k){k&2&&d.value!==y[1]&&J(d,y[1]),k&16&&A!==(A=(y[4]>1&&` ${y[4]}`||"")+"")&&ee(H,A)},i:Q,o:Q,d(y){y&&v(l),n[11](null),n[12](null),x=!1,te(F)}}}function me(n){let l;const e=n[9].default,t=se(e,n,n[8],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),l=!0},p(s,a){t&&t.p&&(!l||a&256)&&le(t,e,s,s[8],l?ae(e,s[8],a,null):ne(s[8]),null)},i(s){l||(q(t,s),l=!0)},o(s){B(t,s),l=!1},d(s){t&&t.d(s)}}}function ge(n){let l,e,t,s,a,u,p;const h=[me,pe],o=[];function d(i,r){return i[0]||O?0:1}return s=d(n),a=o[s]=h[s](n),{c(){l=g("link"),e=C(),t=g("main"),a.c(),this.h()},l(i){const r=Y("svelte-1y2ue3c",W.head);l=b(r,"LINK",{rel:!0,href:!0}),r.forEach(v),e=I(i),t=b(i,"MAIN",{class:!0});var m=E(t);a.l(m),m.forEach(v),this.h()},h(){_(l,"rel","stylesheet"),_(l,"href","https://unpkg.com/svelte-highlight/styles/github.css"),_(t,"class",u=G(n[0]||O?"is-open":"")+" svelte-4dikzu")},m(i,r){f(W.head,l),P(i,e,r),P(i,t,r),o[s].m(t,null),p=!0},p(i,[r]){let m=s;s=d(i),s===m?o[s].p(i,r):(ce(),B(o[m],1,1,()=>{o[m]=null}),ie(),a=o[s],a?a.p(i,r):(a=o[s]=h[s](i),a.c()),q(a,1),a.m(t,null)),(!p||r&1&&u!==(u=G(i[0]||O?"is-open":"")+" svelte-4dikzu"))&&_(t,"class",u)},i(i){p||(q(a),p=!0)},o(i){B(a),p=!1},d(i){i&&(v(e),v(t)),v(l),o[s].d()}}}function be(){localStorage.getItem("bridge")||localStorage.setItem("bridge","UPDATE_HERE")}function ve(n,l,e){let{$$slots:t={},$$scope:s}=l,a=!1,u="",p=!1,h=null,o=null,d=0;async function i(){e(0,a=await _e(u)),a||(e(6,p=!0),e(4,d++,d))}let r=null;Z(()=>{be(),e(2,h.style.viewTransitionName="active-1",h),e(3,o.style.viewTransitionName="active-2",o),e(7,r=()=>{document==null||document.startViewTransition(()=>{h.appendChild(o)})})});function m(){u=this.value,e(1,u)}function T(c){K[c?"unshift":"push"](()=>{h=c,e(2,h)})}function w(c){K[c?"unshift":"push"](()=>{o=c,e(3,o)})}return n.$$set=c=>{"$$scope"in c&&e(8,s=c.$$scope)},n.$$.update=()=>{n.$$.dirty&192&&p&&r&&r()},[a,u,h,o,d,i,p,r,s,t,m,T,w]}class Ee extends oe{constructor(l){super(),re(this,l,ve,ge,X,{})}}export{Ee as component,Se as universal};