const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/coding-1.DOnaWbYT.js","../chunks/disclose-version.yFYzY67q.js","../chunks/runtime.DNrlAA3c.js","../chunks/legacy.CQzi9stk.js","../chunks/html.gT-yHAVe.js","../chunks/coding-2.CkJgqFBU.js","../chunks/coding-3.C2WBr1NU.js","../chunks/coding-4.CPJIV2dE.js","../chunks/coding-5.DsuYNOJz.js","../chunks/new blog!.Bhak4WTm.js","../chunks/attributes._McLmDcC.js","../chunks/props.Dhqjm94L.js","../chunks/proxy.CPcOTx-B.js","../chunks/utils.CYVQJe4P.js","../assets/utils.RuDzfMCq.css"])))=>i.map(i=>d[i]);
import{_ as i,c as x}from"../chunks/preload-helper.BSIW6u5o.js";import{H as P}from"../chunks/control.CYgJF_JY.js";import{a as f,t as h}from"../chunks/disclose-version.yFYzY67q.js";import{al as O,N as _,am as T,i as p,j as D,at as I,k as s,l as o,B as R}from"../chunks/runtime.DNrlAA3c.js";import{h as A,s as g}from"../chunks/render.BrvNObUQ.js";import{e as L,s as V,i as j}from"../chunks/attributes._McLmDcC.js";import{f as k}from"../chunks/utils.CYVQJe4P.js";const H=(e,t,n)=>{const a=e[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((d,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};function M(e,t){throw new P(e,t)}new TextEncoder;async function q({params:e}){try{const t=await H(Object.assign({"../../../../@posts/coding-1.md":()=>i(()=>import("../chunks/coding-1.DOnaWbYT.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"../../../../@posts/coding-2.md":()=>i(()=>import("../chunks/coding-2.CkJgqFBU.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url),"../../../../@posts/coding-3.md":()=>i(()=>import("../chunks/coding-3.C2WBr1NU.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),"../../../../@posts/coding-4.md":()=>i(()=>import("../chunks/coding-4.CPJIV2dE.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url),"../../../../@posts/coding-5.md":()=>i(()=>import("../chunks/coding-5.DsuYNOJz.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url),"../../../../@posts/new blog!.md":()=>i(()=>import("../chunks/new blog!.Bhak4WTm.js"),__vite__mapDeps([9,1,2,3,10,11,12,13,14]),import.meta.url)}),`../../../../@posts/${e.slug}.md`,6);return{content:t.default,meta:t.metadata}}catch{M(404,`Could not find ${e.slug}$`)}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));var N=h('<meta property="og:type" content="article"> <meta property="og:title">',1),S=h('<span class="svelte-wx15co"> </span>'),z=h('<main class="svelte-wx15co"><hgroup class="svelte-wx15co"><h1> </h1> <p> </p> <div class="tags svelte-wx15co"></div> <div class="prose"><!></div></hgroup></main>');function W(e,t){O(t,!0);var n=z();A(m=>{var r=N(),l=p(D(r),2);_(()=>{I.title=t.data.meta.title,V(l,"content",t.data.meta.title)}),f(m,r)});var a=s(n),d=s(a),c=s(d,!0);o(d);var u=p(d,2),b=s(u);_(()=>g(b,`Published at ${k(t.data.meta.date)??""}`)),o(u);var v=p(u,2);L(v,21,()=>t.data.meta.tags,j,(m,r)=>{var l=S(),y=s(l);o(l),_(()=>g(y,`#${R(r)??""}`)),f(m,l)}),o(v);var E=p(v,2),w=s(E);x(w,()=>t.data.content,(m,r)=>{r(m,{})}),o(E),o(a),o(n),_(()=>g(c,t.data.meta.title)),f(e,n),T()}export{W as component,Q as universal};