import{a5 as m,a6 as T,_ as H,q as R,au as B,O as F,av as $,v as j,K as I,b as z,aw as K,h as g,ax as M,a2 as L,c as w,s as S,f as h,Y,ay as N,am as D,a as Z,Z as x,al as G,az as J,V as Q,M as U,aA as X,e as ee,C as re,D as te,w as ae}from"./runtime.C4fXvAoe.js";import{b as ne}from"./disclose-version.BI-S2rmR.js";const ie=["touchstart","touchmove"];function se(e){return ie.includes(e)}function oe(e){var r=H,a=R;m(null),T(null);try{return e()}finally{m(r),T(a)}}const ue=new Set,C=new Set;function le(e,r,a,i){function s(t){if(i.capture||b.call(r,t),!t.cancelBubble)return oe(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?F(()=>{r.addEventListener(e,s,i)}):r.addEventListener(e,s,i),s}function he(e,r,a,i,s){var t={capture:i,passive:s},l=le(e,r,a,t);(r===document.body||r===window||r===document)&&B(()=>{r.removeEventListener(e,l,t)})}function b(e){var k;var r=this,a=r.ownerDocument,i=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],t=s[0]||e.target,l=0,v=e.__root;if(v){var c=s.indexOf(v);if(c!==-1&&(r===document||r===window)){e.__root=r;return}var y=s.indexOf(r);if(y===-1)return;c<=y&&(l=c)}if(t=s[l]||e.target,t!==r){$(e,"currentTarget",{configurable:!0,get(){return t||a}});var A=H,d=R;m(null),T(null);try{for(var n,o=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+i];if(_!==void 0&&!t.disabled)if(j(_)){var[P,...W]=_;P.apply(t,[e,...W])}else _.call(t,e)}catch(E){n?o.push(E):n=E}if(e.cancelBubble||f===r||f===null)break;t=f}if(n){for(let E of o)queueMicrotask(()=>{throw E});throw n}}finally{e.__root=r,delete e.currentTarget,m(A),T(d)}}}let u;function de(){u=void 0}function ve(e){let r=null,a=g;var i;if(g){for(r=h,u===void 0&&(u=Y(document.head));u!==null&&(u.nodeType!==8||u.data!==M);)u=L(u);u===null?w(!1):u=S(L(u))}g||(i=document.head.appendChild(I()));try{z(()=>e(i),K)}finally{a&&(w(!0),u=h,S(r))}}let V=!0;function ye(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function fe(e,r){return q(e,r)}function pe(e,r){N(),r.intro=r.intro??!1;const a=r.target,i=g,s=h;try{for(var t=Y(a);t&&(t.nodeType!==8||t.data!==M);)t=L(t);if(!t)throw D;w(!0),S(t),Z();const l=q(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==x)throw G(),D;return w(!1),l}catch(l){if(l===D)return r.recover===!1&&J(),N(),Q(a),w(!1),fe(e,r);throw l}finally{w(i),S(s),de()}}const p=new Map;function q(e,{target:r,anchor:a,props:i={},events:s,context:t,intro:l=!0}){N();var v=new Set,c=d=>{for(var n=0;n<d.length;n++){var o=d[n];if(!v.has(o)){v.add(o);var f=se(o);r.addEventListener(o,b,{passive:f});var _=p.get(o);_===void 0?(document.addEventListener(o,b,{passive:f}),p.set(o,1)):p.set(o,_+1)}}};c(U(ue)),C.add(c);var y=void 0,A=X(()=>{var d=a??r.appendChild(I());return ee(()=>{if(t){re({});var n=ae;n.c=t}s&&(i.$$events=s),g&&ne(d,null),V=l,y=e(d,i)||{},V=!0,g&&(R.nodes_end=h),t&&te()}),()=>{var f;for(var n of v){r.removeEventListener(n,b);var o=p.get(n);--o===0?(document.removeEventListener(n,b),p.delete(n)):p.set(n,o)}C.delete(c),d!==a&&((f=d.parentNode)==null||f.removeChild(d))}});return O.set(y,A),y}let O=new WeakMap;function we(e,r){const a=O.get(e);return a?(O.delete(e),a(r)):Promise.resolve()}export{pe as a,V as b,he as e,ve as h,fe as m,ye as s,we as u};