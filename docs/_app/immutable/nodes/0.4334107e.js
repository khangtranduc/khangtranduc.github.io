var xe=Object.defineProperty;var Se=(t,n,e)=>n in t?xe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var Z=(t,n,e)=>(Se(t,typeof n!="symbol"?n+"":n,e),e);import{s as Xt,n as Et,r as Zt,c as pt,d as Ce,u as Ae,g as Te,e as je}from"../chunks/scheduler.571623b4.js";import{S as te,i as ee,g as k,h as x,j as L,f as O,x as ot,k as j,a as gt,y as I,z as Q,s as $,r as Oe,A as q,c as H,u as Pe,v as Ee,d as Mt,t as Lt,w as Me}from"../chunks/index.19a91bb9.js";import{j as Le}from"../chunks/singletons.e6b29d36.js";var B=(t=>(t[t.Ongoing=0]="Ongoing",t[t.Completed=1]="Completed",t[t.Sidelined=2]="Sidelined",t))(B||{});const Ne=!0,Fe=async()=>({projects:[{name:"Signal Noise Suppression in Portable MRI",status:B.Completed,desc:"mri.html",src:"/images/mri.jpg",att:[{name:"Download Report",icon:"lucide:download",href:"/downloads/mri_noise_proj.pdf"}]},{name:"Project 1",status:B.Ongoing,src:"/wave.gif"},{name:"Project 2",status:B.Sidelined},{name:"Project 2",status:B.Sidelined}].sort((t,n)=>t.status-n.status)}),Jn=Object.freeze(Object.defineProperty({__proto__:null,load:Fe,prerender:Ne},Symbol.toStringTag,{value:"Module"}));/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.8
*/const ne=Object.freeze({left:0,top:0,width:16,height:16}),it=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),W=Object.freeze({...ne,...it}),mt=Object.freeze({...W,body:"",hidden:!1}),Re=Object.freeze({width:null,height:null}),oe=Object.freeze({...Re,...it});function $e(t,n=0){const e=t.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(e===""){const o=parseInt(t);return isNaN(o)?0:i(o)}else if(e!==t){let o=0;switch(e){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-e.length));return isNaN(r)?0:(r=r/o,r%1===0?i(r):0)}}return n}const He=/[\s,]+/;function De(t,n){n.split(He).forEach(e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const ie={...oe,preserveAspectRatio:""};function Nt(t){const n={...ie},e=(i,o)=>t.getAttribute(i)||o;return n.width=e("width",null),n.height=e("height",null),n.rotate=$e(e("rotate","")),De(n,e("flip","")),n.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),n}function Qe(t,n){for(const e in ie)if(t[e]!==n[e])return!0;return!1}const U=/^[a-z0-9]+(-[a-z0-9]+)*$/,Y=(t,n,e,i="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:i,prefix:l,name:c};return n&&!et(a)?null:a}const r=o[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return n&&!et(c)?null:c}if(e&&i===""){const c={provider:i,prefix:"",name:r};return n&&!et(c,e)?null:c}return null},et=(t,n)=>t?!!((t.provider===""||t.provider.match(U))&&(n&&t.prefix===""||t.prefix.match(U))&&t.name.match(U)):!1;function qe(t,n){const e={};!t.hFlip!=!n.hFlip&&(e.hFlip=!0),!t.vFlip!=!n.vFlip&&(e.vFlip=!0);const i=((t.rotate||0)+(n.rotate||0))%4;return i&&(e.rotate=i),e}function Ft(t,n){const e=qe(t,n);for(const i in mt)i in it?i in t&&!(i in e)&&(e[i]=it[i]):i in n?e[i]=n[i]:i in t&&(e[i]=t[i]);return e}function ze(t,n){const e=t.icons,i=t.aliases||Object.create(null),o=Object.create(null);function r(s){if(e[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=i[s]&&i[s].parent,l=c&&r(c);l&&(o[s]=[c].concat(l))}return o[s]}return(n||Object.keys(e).concat(Object.keys(i))).forEach(r),o}function Be(t,n,e){const i=t.icons,o=t.aliases||Object.create(null);let r={};function s(c){r=Ft(i[c]||o[c],r)}return s(n),e.forEach(s),Ft(t,r)}function re(t,n){const e=[];if(typeof t!="object"||typeof t.icons!="object")return e;t.not_found instanceof Array&&t.not_found.forEach(o=>{n(o,null),e.push(o)});const i=ze(t);for(const o in i){const r=i[o];r&&(n(o,Be(t,o,r)),e.push(o))}return e}const Ue={provider:"",aliases:{},not_found:{},...ne};function ut(t,n){for(const e in n)if(e in t&&typeof t[e]!=typeof n[e])return!1;return!0}function se(t){if(typeof t!="object"||t===null)return null;const n=t;if(typeof n.prefix!="string"||!t.icons||typeof t.icons!="object"||!ut(t,Ue))return null;const e=n.icons;for(const o in e){const r=e[o];if(!o.match(U)||typeof r.body!="string"||!ut(r,mt))return null}const i=n.aliases||Object.create(null);for(const o in i){const r=i[o],s=r.parent;if(!o.match(U)||typeof s!="string"||!e[s]&&!i[s]||!ut(r,mt))return null}return n}const rt=Object.create(null);function Ve(t,n){return{provider:t,prefix:n,icons:Object.create(null),missing:new Set}}function N(t,n){const e=rt[t]||(rt[t]=Object.create(null));return e[n]||(e[n]=Ve(t,n))}function xt(t,n){return se(n)?re(n,(e,i)=>{i?t.icons[e]=i:t.missing.add(e)}):[]}function Ge(t,n,e){try{if(typeof e.body=="string")return t.icons[n]={...e},!0}catch{}return!1}function Je(t,n){let e=[];return(typeof t=="string"?[t]:Object.keys(rt)).forEach(o=>{(typeof o=="string"&&typeof n=="string"?[n]:Object.keys(rt[o]||{})).forEach(s=>{const c=N(o,s);e=e.concat(Object.keys(c.icons).map(l=>(o!==""?"@"+o+":":"")+s+":"+l))})}),e}let G=!1;function ce(t){return typeof t=="boolean"&&(G=t),G}function J(t){const n=typeof t=="string"?Y(t,!0,G):t;if(n){const e=N(n.provider,n.prefix),i=n.name;return e.icons[i]||(e.missing.has(i)?null:void 0)}}function le(t,n){const e=Y(t,!0,G);if(!e)return!1;const i=N(e.provider,e.prefix);return Ge(i,e.name,n)}function Rt(t,n){if(typeof t!="object")return!1;if(typeof n!="string"&&(n=t.provider||""),G&&!n&&!t.prefix){let o=!1;return se(t)&&(t.prefix="",re(t,(r,s)=>{s&&le(r,s)&&(o=!0)})),o}const e=t.prefix;if(!et({provider:n,prefix:e,name:"a"}))return!1;const i=N(n,e);return!!xt(i,t)}function Ke(t){return!!J(t)}function We(t){const n=J(t);return n?{...W,...n}:null}function Ye(t){const n={loaded:[],missing:[],pending:[]},e=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const r=o.provider,s=o.prefix,c=o.name,l=e[r]||(e[r]=Object.create(null)),a=l[s]||(l[s]=N(r,s));let u;c in a.icons?u=n.loaded:s===""||a.missing.has(c)?u=n.missing:u=n.pending;const f={provider:r,prefix:s,name:c};u.push(f)}),n}function ae(t,n){t.forEach(e=>{const i=e.loaderCallbacks;i&&(e.loaderCallbacks=i.filter(o=>o.id!==n))})}function Xe(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const n=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!n.length)return;let e=!1;const i=t.provider,o=t.prefix;n.forEach(r=>{const s=r.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:i,prefix:o,name:a});else if(t.missing.has(a))s.missing.push({provider:i,prefix:o,name:a});else return e=!0,!0;return!1}),s.pending.length!==c&&(e||ae([t],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let Ze=0;function tn(t,n,e){const i=Ze++,o=ae.bind(null,e,i);if(!n.pending.length)return o;const r={id:i,icons:n,callback:t,abort:o};return e.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),o}const yt=Object.create(null);function $t(t,n){yt[t]=n}function bt(t){return yt[t]||yt[""]}function en(t,n=!0,e=!1){const i=[];return t.forEach(o=>{const r=typeof o=="string"?Y(o,n,e):o;r&&i.push(r)}),i}var nn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function on(t,n,e,i){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let d=t.resources.slice(0);for(s=[];d.length>1;){const y=Math.floor(Math.random()*d.length);s.push(d[y]),d=d.slice(0,y).concat(d.slice(y+1))}s=s.concat(d)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",a=0,u,f=null,h=[],p=[];typeof i=="function"&&p.push(i);function w(){f&&(clearTimeout(f),f=null)}function b(){l==="pending"&&(l="aborted"),w(),h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function C(d,y){y&&(p=[]),typeof d=="function"&&p.push(d)}function F(){return{startTime:c,payload:n,status:l,queriesSent:a,queriesPending:h.length,subscribe:C,abort:b}}function _(){l="failed",p.forEach(d=>{d(void 0,u)})}function m(){h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function P(d,y,E){const A=y!=="success";switch(h=h.filter(T=>T!==d),l){case"pending":break;case"failed":if(A||!t.dataAfterTimeout)return;break;default:return}if(y==="abort"){u=E,_();return}if(A){u=E,h.length||(s.length?R():_());return}if(w(),m(),!t.random){const T=t.resources.indexOf(d.resource);T!==-1&&T!==t.index&&(t.index=T)}l="completed",p.forEach(T=>{T(E)})}function R(){if(l!=="pending")return;w();const d=s.shift();if(d===void 0){if(h.length){f=setTimeout(()=>{w(),l==="pending"&&(m(),_())},t.timeout);return}_();return}const y={status:"pending",resource:d,callback:(E,A)=>{P(y,E,A)}};h.push(y),a++,f=setTimeout(R,t.rotate),e(d,n,y.callback)}return setTimeout(R),F}function ue(t){const n={...nn,...t};let e=[];function i(){e=e.filter(c=>c().status==="pending")}function o(c,l,a){const u=on(n,c,l,(f,h)=>{i(),a&&a(f,h)});return e.push(u),u}function r(c){return e.find(l=>c(l))||null}return{query:o,find:r,setIndex:c=>{n.index=c},getIndex:()=>n.index,cleanup:i}}function St(t){let n;if(typeof t.resources=="string")n=[t.resources];else if(n=t.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ct=Object.create(null),z=["https://api.simplesvg.com","https://api.unisvg.com"],nt=[];for(;z.length>0;)z.length===1||Math.random()>.5?nt.push(z.shift()):nt.push(z.pop());ct[""]=St({resources:["https://api.iconify.design"].concat(nt)});function Ht(t,n){const e=St(n);return e===null?!1:(ct[t]=e,!0)}function lt(t){return ct[t]}function rn(){return Object.keys(ct)}function Dt(){}const ft=Object.create(null);function sn(t){if(!ft[t]){const n=lt(t);if(!n)return;const e=ue(n),i={config:n,redundancy:e};ft[t]=i}return ft[t]}function fe(t,n,e){let i,o;if(typeof t=="string"){const r=bt(t);if(!r)return e(void 0,424),Dt;o=r.send;const s=sn(t);s&&(i=s.redundancy)}else{const r=St(t);if(r){i=ue(r);const s=t.resources?t.resources[0]:"",c=bt(s);c&&(o=c.send)}}return!i||!o?(e(void 0,424),Dt):i.query(n,o,e)().abort}const Qt="iconify2",K="iconify",de=K+"-count",qt=K+"-version",he=36e5,cn=168;function wt(t,n){try{return t.getItem(n)}catch{}}function Ct(t,n,e){try{return t.setItem(n,e),!0}catch{}}function zt(t,n){try{t.removeItem(n)}catch{}}function _t(t,n){return Ct(t,de,n.toString())}function It(t){return parseInt(wt(t,de))||0}const D={local:!0,session:!0},pe={local:new Set,session:new Set};let At=!1;function ln(t){At=t}let tt=typeof window>"u"?{}:window;function ge(t){const n=t+"Storage";try{if(tt&&tt[n]&&typeof tt[n].length=="number")return tt[n]}catch{}D[t]=!1}function me(t,n){const e=ge(t);if(!e)return;const i=wt(e,qt);if(i!==Qt){if(i){const c=It(e);for(let l=0;l<c;l++)zt(e,K+l.toString())}Ct(e,qt,Qt),_t(e,0);return}const o=Math.floor(Date.now()/he)-cn,r=c=>{const l=K+c.toString(),a=wt(e,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&n(u,c))return!0}catch{}zt(e,l)}};let s=It(e);for(let c=s-1;c>=0;c--)r(c)||(c===s-1?(s--,_t(e,s)):pe[t].add(c))}function ye(){if(!At){ln(!0);for(const t in D)me(t,n=>{const e=n.data,i=n.provider,o=e.prefix,r=N(i,o);if(!xt(r,e).length)return!1;const s=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,s):s,!0})}}function an(t,n){const e=t.lastModifiedCached;if(e&&e>=n)return e===n;if(t.lastModifiedCached=n,e)for(const i in D)me(i,o=>{const r=o.data;return o.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===n});return!0}function un(t,n){At||ye();function e(i){let o;if(!D[i]||!(o=ge(i)))return;const r=pe[i];let s;if(r.size)r.delete(s=Array.from(r).shift());else if(s=It(o),!_t(o,s+1))return;const c={cached:Math.floor(Date.now()/he),provider:t.provider,data:n};return Ct(o,K+s.toString(),JSON.stringify(c))}n.lastModified&&!an(t,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),e("local")||e("session"))}function Bt(){}function fn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Xe(t)}))}function dn(t,n){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(n).sort():t.iconsToLoad=n,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:i}=t,o=t.iconsToLoad;delete t.iconsToLoad;let r;if(!o||!(r=bt(e)))return;r.prepare(e,i,o).forEach(c=>{fe(e,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=xt(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(f=>{u.delete(f)}),un(t,l)}catch(a){console.error(a)}fn(t)})})}))}const Tt=(t,n)=>{const e=en(t,!0,ce()),i=Ye(e);if(!i.pending.length){let l=!0;return n&&setTimeout(()=>{l&&n(i.loaded,i.missing,i.pending,Bt)}),()=>{l=!1}}const o=Object.create(null),r=[];let s,c;return i.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,r.push(N(a,u));const f=o[a]||(o[a]=Object.create(null));f[u]||(f[u]=[])}),i.pending.forEach(l=>{const{provider:a,prefix:u,name:f}=l,h=N(a,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(f)||(p.add(f),o[a][u].push(f))}),r.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&dn(l,o[a][u])}),n?tn(n,i,r):Bt},hn=t=>new Promise((n,e)=>{const i=typeof t=="string"?Y(t,!0):t;if(!i){e(t);return}Tt([i||t],o=>{if(o.length&&i){const r=J(i);if(r){n({...W,...r});return}}e(t)})});function pn(t){try{const n=typeof t=="string"?JSON.parse(t):t;if(typeof n.body=="string")return{...n}}catch{}}function gn(t,n){const e=typeof t=="string"?Y(t,!0,!0):null;if(!e){const r=pn(t);return{value:t,data:r}}const i=J(e);if(i!==void 0||!e.prefix)return{value:t,name:e,data:i};const o=Tt([e],()=>n(t,e,J(e)));return{value:t,name:e,loading:o}}function dt(t){return t.hasAttribute("inline")}let be=!1;try{be=navigator.vendor.indexOf("Apple")===0}catch{}function mn(t,n){switch(n){case"svg":case"bg":case"mask":return n}return n!=="style"&&(be||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const yn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,bn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function vt(t,n,e){if(n===1)return t;if(e=e||100,typeof t=="number")return Math.ceil(t*n*e)/e;if(typeof t!="string")return t;const i=t.split(yn);if(i===null||!i.length)return t;const o=[];let r=i.shift(),s=bn.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*n*e)/e)}else o.push(r);if(r=i.shift(),r===void 0)return o.join("");s=!s}}const wn=t=>t==="unset"||t==="undefined"||t==="none";function we(t,n){const e={...W,...t},i={...oe,...n},o={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,i].forEach(w=>{const b=[],C=w.hFlip,F=w.vFlip;let _=w.rotate;C?F?_+=2:(b.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),b.push("scale(-1 1)"),o.top=o.left=0):F&&(b.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),b.push("scale(1 -1)"),o.top=o.left=0);let m;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:m=o.height/2+o.top,b.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:b.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:m=o.width/2+o.left,b.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}_%2===1&&(o.left!==o.top&&(m=o.left,o.left=o.top,o.top=m),o.width!==o.height&&(m=o.width,o.width=o.height,o.height=m)),b.length&&(r='<g transform="'+b.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=o.width,a=o.height;let u,f;s===null?(f=c===null?"1em":c==="auto"?a:c,u=vt(f,l/a)):(u=s==="auto"?l:s,f=c===null?vt(u,a/l):c==="auto"?a:c);const h={},p=(w,b)=>{wn(b)||(h[w]=b.toString())};return p("width",u),p("height",f),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:h,body:r}}const _n=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let st=_n();function In(t){st=t}function vn(){return st}function kn(t,n){const e=lt(t);if(!e)return 0;let i;if(!e.maxURL)i=0;else{let o=0;e.resources.forEach(s=>{o=Math.max(o,s.length)});const r=n+".json?icons=";i=e.maxURL-o-e.path.length-r.length}return i}function xn(t){return t===404}const Sn=(t,n,e)=>{const i=[],o=kn(t,n),r="icons";let s={type:r,provider:t,prefix:n,icons:[]},c=0;return e.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(i.push(s),s={type:r,provider:t,prefix:n,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function Cn(t){if(typeof t=="string"){const n=lt(t);if(n)return n.path}return"/"}const An=(t,n,e)=>{if(!st){e("abort",424);return}let i=Cn(n.provider);switch(n.type){case"icons":{const r=n.prefix,c=n.icons.join(","),l=new URLSearchParams({icons:c});i+=r+".json?"+l.toString();break}case"custom":{const r=n.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let o=503;st(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{e(xn(s)?"abort":"next",s)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",o)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",o)})},Tn={prepare:Sn,send:An};function Ut(t,n){switch(t){case"local":case"session":D[t]=n;break;case"all":for(const e in D)D[e]=n;break}}const ht="data-style";let _e="";function jn(t){_e=t}function Vt(t,n){let e=Array.from(t.childNodes).find(i=>i.hasAttribute&&i.hasAttribute(ht));e||(e=document.createElement("style"),e.setAttribute(ht,ht),t.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(n?"-0.125em":"0")+"}span,svg{display:block}"+_e}function Ie(){$t("",Tn),ce(!0);let t;try{t=window}catch{}if(t){if(ye(),t.IconifyPreload!==void 0){const e=t.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Rt(o))&&console.error(i)}catch{console.error(i)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const i in e){const o="IconifyProviders["+i+"] is invalid.";try{const r=e[i];if(typeof r!="object"||!r||r.resources===void 0)continue;Ht(i,r)||console.error(o)}catch{console.error(o)}}}}return{enableCache:e=>Ut(e,!0),disableCache:e=>Ut(e,!1),iconExists:Ke,getIcon:We,listIcons:Je,addIcon:le,addCollection:Rt,calculateSize:vt,buildIcon:we,loadIcons:Tt,loadIcon:hn,addAPIProvider:Ht,appendCustomStyle:jn,_api:{getAPIConfig:lt,setAPIModule:$t,sendAPIQuery:fe,setFetch:In,getFetch:vn,listAPIProviders:rn}}}function ve(t,n){let e=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in n)e+=" "+i+'="'+n[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+t+"</svg>"}function On(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Pn(t){return"data:image/svg+xml,"+On(t)}function En(t){return'url("'+Pn(t)+'")'}const kt={"background-color":"currentColor"},ke={"background-color":"transparent"},Gt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Jt={"-webkit-mask":kt,mask:kt,background:ke};for(const t in Jt){const n=Jt[t];for(const e in Gt)n[t+"-"+e]=Gt[e]}function Kt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Mn(t,n,e){const i=document.createElement("span");let o=t.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const r=t.attributes,s=ve(o,{...r,width:n.width+"",height:n.height+""}),c=En(s),l=i.style,a={"--svg":c,width:Kt(r.width),height:Kt(r.height),...e?kt:ke};for(const u in a)l.setProperty(u,a[u]);return i}let V;function Ln(){try{V=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{V=null}}function Nn(t){return V===void 0&&Ln(),V?V.createHTML(t):t}function Fn(t){const n=document.createElement("span"),e=t.attributes;let i="";e.width||(i="width: inherit;"),e.height||(i+="height: inherit;"),i&&(e.style=i);const o=ve(t.body,e);return n.innerHTML=Nn(o),n.firstChild}function Wt(t,n){const e=n.icon.data,i=n.customisations,o=we(e,i);i.preserveAspectRatio&&(o.attributes.preserveAspectRatio=i.preserveAspectRatio);const r=n.renderedMode;let s;switch(r){case"svg":s=Fn(o);break;default:s=Mn(o,{...W,...e},r==="mask")}const c=Array.from(t.childNodes).find(l=>{const a=l.tagName&&l.tagName.toUpperCase();return a==="SPAN"||a==="SVG"});c?s.tagName==="SPAN"&&c.tagName===s.tagName?c.setAttribute("style",s.getAttribute("style")):t.replaceChild(s,c):t.appendChild(s)}function Yt(t,n,e){const i=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:n,icon:t,lastRender:i}}function Rn(t="iconify-icon"){let n,e;try{n=window.customElements,e=window.HTMLElement}catch{return}if(!n||!e)return;const i=n.get(t);if(i)return i;const o=["icon","mode","inline","width","height","rotate","flip"],r=class extends e{constructor(){super();Z(this,"_shadowRoot");Z(this,"_state");Z(this,"_checkQueued",!1);const l=this._shadowRoot=this.attachShadow({mode:"open"}),a=dt(this);Vt(l,a),this._state=Yt({value:""},a),this._queueCheck()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(l){if(l==="inline"){const a=dt(this),u=this._state;a!==u.inline&&(u.inline=a,Vt(this._shadowRoot,a))}else this._queueCheck()}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return dt(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const l=this._state;if(l.rendered){const a=this._shadowRoot;if(l.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}Wt(a,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,a=this.getAttribute("icon");if(a!==l.icon.value){this._iconChanged(a);return}if(!l.rendered)return;const u=this.getAttribute("mode"),f=Nt(this);(l.attrMode!==u||Qe(l.customisations,f))&&this._renderIcon(l.icon,f,u)}_iconChanged(l){const a=gn(l,(u,f,h)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==u)return;const w={value:u,name:f,data:h};w.data?this._gotIconData(w):p.icon=w});a.data?this._gotIconData(a):this._state=Yt(a,this._state.inline,this._state)}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Nt(this),this.getAttribute("mode"))}_renderIcon(l,a,u){const f=mn(l.data.body,u),h=this._state.inline;Wt(this._shadowRoot,this._state={rendered:!0,icon:l,inline:h,customisations:a,attrMode:u,renderedMode:f})}};o.forEach(c=>{c in r.prototype||Object.defineProperty(r.prototype,c,{get:function(){return this.getAttribute(c)},set:function(l){l!==null?this.setAttribute(c,l):this.removeAttribute(c)}})});const s=Ie();for(const c in s)r[c]=r.prototype[c]=s[c];return n.define(t,r),r}Rn()||Ie();const $n=Le("goto");function Hn(t){let n,e,i,o,r;return{c(){n=k("div"),e=k("iconify-icon"),this.h()},l(s){n=x(s,"DIV",{class:!0});var c=L(n);e=x(c,"ICONIFY-ICON",{icon:!0}),L(e).forEach(O),c.forEach(O),this.h()},h(){ot(e,"icon",i="lucide:"+t[0]),j(n,"class","svelte-1x7git7")},m(s,c){gt(s,n,c),I(n,e),o||(r=[Q(n,"click",t[1]),Q(n,"keydown",t[3])],o=!0)},p(s,[c]){c&1&&i!==(i="lucide:"+s[0])&&ot(e,"icon",i)},i:Et,o:Et,d(s){s&&O(n),o=!1,Zt(r)}}}function Dn(t,n,e){let i,o=!1;const r=()=>{e(2,o=!o),o?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")};function s(c){pt.call(this,t,c)}return t.$$.update=()=>{t.$$.dirty&4&&e(0,i=o?"sun":"moon")},[i,r,o,s]}class Qn extends te{constructor(n){super(),ee(this,n,Dn,Hn,Xt,{})}}function qn(t){let n,e,i,o='<li class="svelte-a1nknn"><img src="/favicon.png" alt="" class="svelte-a1nknn"/> <strong>Khang Tran</strong></li>',r,s,c,l='<iconify-icon icon="fa6-brands:whatsapp" width="25"></iconify-icon>',a,u,f='<iconify-icon icon="fa6-brands:telegram" width="25"></iconify-icon>',h,p,w='<iconify-icon icon="fa6-brands:github" width="25"></iconify-icon>',b,C,F='<iconify-icon icon="lucide:mail" width="25"></iconify-icon>',_,m,P,R,d,y,E,A,T,jt;y=new Qn({});const at=t[1].default,v=Ce(at,t,t[0],null);return{c(){n=k("main"),e=k("nav"),i=k("ul"),i.innerHTML=o,r=$(),s=k("ul"),c=k("li"),c.innerHTML=l,a=$(),u=k("li"),u.innerHTML=f,h=$(),p=k("li"),p.innerHTML=w,b=$(),C=k("li"),C.innerHTML=F,_=$(),m=k("li"),P=k("iconify-icon"),R=$(),d=k("li"),Oe(y.$$.fragment),E=$(),v&&v.c(),this.h()},l(g){n=x(g,"MAIN",{class:!0});var M=L(n);e=x(M,"NAV",{class:!0});var X=L(e);i=x(X,"UL",{"data-svelte-h":!0}),q(i)!=="svelte-1eab2z"&&(i.innerHTML=o),r=H(X),s=x(X,"UL",{role:!0,class:!0});var S=L(s);c=x(S,"LI",{class:!0,"data-svelte-h":!0}),q(c)!=="svelte-1bhxeav"&&(c.innerHTML=l),a=H(S),u=x(S,"LI",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-knhkm8"&&(u.innerHTML=f),h=H(S),p=x(S,"LI",{class:!0,"data-svelte-h":!0}),q(p)!=="svelte-179noyc"&&(p.innerHTML=w),b=H(S),C=x(S,"LI",{class:!0,"data-svelte-h":!0}),q(C)!=="svelte-1x71ak6"&&(C.innerHTML=F),_=H(S),m=x(S,"LI",{class:!0});var Ot=L(m);P=x(Ot,"ICONIFY-ICON",{icon:!0,width:!0}),L(P).forEach(O),Ot.forEach(O),R=H(S),d=x(S,"LI",{class:!0});var Pt=L(d);Pe(y.$$.fragment,Pt),Pt.forEach(O),S.forEach(O),X.forEach(O),M.forEach(O),E=H(g),v&&v.l(g),this.h()},h(){j(c,"class","svelte-a1nknn"),j(u,"class","svelte-a1nknn"),j(p,"class","svelte-a1nknn"),j(C,"class","svelte-a1nknn"),ot(P,"icon","fa6-brands:linkedin"),ot(P,"width","25"),j(m,"class","svelte-a1nknn"),j(d,"class","svelte-a1nknn"),j(s,"role","brands"),j(s,"class","svelte-a1nknn"),j(e,"class","container-fluid"),j(n,"class","svelte-a1nknn")},m(g,M){gt(g,n,M),I(n,e),I(e,i),I(e,r),I(e,s),I(s,c),I(s,a),I(s,u),I(s,h),I(s,p),I(s,b),I(s,C),I(s,_),I(s,m),I(m,P),I(s,R),I(s,d),Ee(y,d,null),gt(g,E,M),v&&v.m(g,M),A=!0,T||(jt=[Q(i,"click",t[4]),Q(i,"keydown",t[3]),Q(P,"keydown",t[2]),Q(P,"click",t[5])],T=!0)},p(g,[M]){v&&v.p&&(!A||M&1)&&Ae(v,at,g,g[0],A?je(at,g[0],M,null):Te(g[0]),null)},i(g){A||(Mt(y.$$.fragment,g),Mt(v,g),A=!0)},o(g){Lt(y.$$.fragment,g),Lt(v,g),A=!1},d(g){g&&(O(n),O(E)),Me(y),v&&v.d(g),T=!1,Zt(jt)}}}function zn(t,n,e){let{$$slots:i={},$$scope:o}=n;function r(a){pt.call(this,t,a)}function s(a){pt.call(this,t,a)}const c=()=>$n("/"),l=()=>window.open("https://www.linkedin.com/in/khangtranduc","_blank");return t.$$set=a=>{"$$scope"in a&&e(0,o=a.$$scope)},[o,i,r,s,c,l]}class Kn extends te{constructor(n){super(),ee(this,n,zn,qn,Xt,{})}}export{Kn as component,Jn as universal};