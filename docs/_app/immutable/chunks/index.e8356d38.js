function E(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function W(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(W)}function L(t){return typeof t=="function"}function Ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function It(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Jt(t,e,n,r){if(t){const i=V(t,e,n,r);return t[0](i)}}function V(t,e,n,r){return t[1]&&r?ut(n.ctx.slice(),t[1](r(e))):n.ctx}function Kt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let c=0;c<s;c+=1)o[c]=e.dirty[c]|i[c];return o}return e.dirty|i}return e.dirty}function Qt(t,e,n,r,i,o){if(i){const s=V(e,n,r,o);t.p(s,i)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Wt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const X=typeof window<"u";let _t=X?()=>window.performance.now():()=>Date.now(),T=X?t=>requestAnimationFrame(t):E;const w=new Set;function Y(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&T(Y)}function dt(t){let e;return w.size===0&&T(Y),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let q=!1;function ht(){q=!0}function mt(){q=!1}function pt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:pt(1,i,d=>e[n[d]].claim_order,u))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],s=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<o.length&&s[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[l],f)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=et("style");return xt(Z(t),e),e.sheet}function xt(t,e){return gt(t.head||t,e),e.sheet}function $t(t,e){if(q){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){q&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Yt(){return H(" ")}function Zt(){return H("")}function te(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:wt(t,e,n)}function kt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,r,i=!1){Et(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function vt(t,e,n,r){return nt(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function ne(t,e,n){return vt(t,e,n,et)}function Nt(t,e){return nt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>H(e),!0)}function re(t){return Nt(t," ")}function ie(t,e){e=""+e,t.data!==e&&(t.data=e)}function ce(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function se(t,e){return new t(e)}const M=new Map;let O=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:bt(e),rules:{}};return M.set(t,n),n}function K(t,e,n,r,i,o,s,c=0){const l=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=l){const b=e+(n-e)*o(g);u+=g*100+`%{${s(b,1-b)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${c}`,d=Z(t),{stylesheet:_,rules:h}=M.get(d)||jt(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,O+=1,a}function St(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),O-=i,O||Mt())}function Mt(){T(()=>{O||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),M.clear())})}let A;function p(t){A=t}function I(){if(!A)throw new Error("Function called outside component initialization");return A}function le(t){I().$$.on_mount.push(t)}function ue(t){I().$$.after_update.push(t)}function oe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const $=[],Q=[];let k=[];const U=[],rt=Promise.resolve();let F=!1;function it(){F||(F=!0,rt.then(G))}function ae(){return it(),rt}function P(t){k.push(t)}const z=new Set;let x=0;function G(){if(x!==0)return;const t=A;do{try{for(;x<$.length;){const e=$[x];x++,p(e),Ot(e.$$)}}catch(e){throw $.length=0,x=0,e}for(p(null),$.length=0,x=0;Q.length;)Q.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];z.has(n)||(z.add(n),n())}k.length=0}while($.length);for(;U.length;)U.pop()();F=!1,z.clear(),p(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function Pt(t){const e=[],n=[];k.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),k=e}let N;function qt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function B(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function Dt(){y={r:0,c:[],p:y}}function Rt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function zt(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Bt={duration:0};function fe(t,e,n,r){const i={direction:"both"};let o=e(t,n,i),s=r?0:1,c=null,l=null,u=null;function f(){u&&St(t,u)}function a(_,h){const m=_.b-s;return h*=Math.abs(m),{a:s,b:_.b,d:m,duration:h,start:_.start,end:_.start+h,group:_.group}}function d(_){const{delay:h=0,duration:m=300,easing:g=lt,tick:b=E,css:D}=o||Bt,R={start:_t()+h,b:_};_||(R.group=y,y.r+=1),c||l?l=R:(D&&(f(),u=K(t,s,_,m,h,g,D)),_&&b(0,1),c=a(R,m),P(()=>B(t,_,"start")),dt(C=>{if(l&&C>l.start&&(c=a(l,m),l=null,B(t,c.b,"start"),D&&(f(),u=K(t,s,c.b,c.duration,0,g,o.css))),c){if(C>=c.end)b(s=c.b,1-s),B(t,c.b,"end"),l||(c.b?f():--c.group.r||v(c.group.c)),c=null;else if(C>=c.start){const st=C-c.start;s=c.a+c.d*g(st/c.duration),b(s,1-s)}}return!!(c||l)}))}return{run(_){L(o)?qt().then(()=>{o=o(i),d(_)}):d(_)},end(){f(),c=l=null}}}function _e(t,e){const n=e.token={};function r(i,o,s,c){if(e.token!==n)return;e.resolved=c;let l=e.ctx;s!==void 0&&(l=l.slice(),l[s]=c);const u=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==o&&a&&(Dt(),zt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),Rt())}):e.block.d(1),u.c(),ct(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[o]=u),f&&G()}if(ot(t)){const i=I();if(t.then(o=>{p(i),r(e.then,1,e.value,o),p(null)},o=>{if(p(i),r(e.catch,2,e.error,o),p(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function de(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function Ft(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||P(()=>{const s=t.$$.on_mount.map(W).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),o.forEach(P)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&($.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,r,i,o,s,c=[-1]){const l=A;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:i,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:J(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return u.ctx&&i(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Tt(t,a)),d}):[],u.update(),f=!0,v(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){ht();const a=kt(e.target);u.fragment&&u.fragment.l(a),a.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&ct(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),mt(),G()}p(l)}class ye{$destroy(){Lt(this,1),this.$destroy=E}$on(e,n){if(!L(n))return E;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ft as A,Lt as B,ee as C,$t as D,te as E,E as F,v as G,oe as H,Jt as I,It as J,Qt as K,Ut as L,Kt as M,Gt as N,Wt as O,_e as P,de as Q,P as R,ye as S,fe as T,Xt as U,Yt as a,Vt as b,re as c,zt as d,Zt as e,Rt as f,ct as g,tt as h,pe as i,ue as j,et as k,ne as l,kt as m,wt as n,le as o,ce as p,H as q,Nt as r,Ht as s,ae as t,ie as u,Dt as v,Q as w,se as x,he as y,me as z};