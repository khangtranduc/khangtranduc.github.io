import{A as F,ac as N,ad as Y,ae as p,af as M,B as l,z as U,L,ag as x,ah as z,ab as T,ai as G,J as $,aj as j,ak as H,S as J,al as V,R as B,am as Z,a6 as K,C,an as Q}from"./runtime.BVfCZDAn.js";import{p as W}from"./proxy.aSRe3JN5.js";let c=!1;function X(r){var a=c;try{return c=!1,[r(),c]}finally{c=a}}function D(r){for(var a=C,n=C;a!==null&&!(a.f&(x|z));)a=a.parent;try{return T(a),r()}finally{T(n)}}function ae(r,a,n,v){var h;var b=(n&G)!==0,d=!$||(n&j)!==0,o=(n&H)!==0,q=(n&Q)!==0,I=!1,t;o?[t,I]=X(()=>r[a]):t=r[a];var w=J in r||V in r,_=((h=F(r,a))==null?void 0:h.set)??(w&&o&&a in r?e=>r[a]=e:void 0),i=v,P=!0,S=!1,g=()=>(S=!0,P&&(P=!1,q?i=L(v):i=v),i);t===void 0&&v!==void 0&&(_&&d&&N(),t=g(),_&&_(t));var f;if(d)f=()=>{var e=r[a];return e===void 0?g():(P=!0,S=!1,e)};else{var A=D(()=>(b?B:Z)(()=>r[a]));A.f|=Y,f=()=>{var e=l(A);return e!==void 0&&(i=void 0),e===void 0?i:e}}if(!(n&p))return f;if(_){var y=r.$$legacy;return function(e,u){return arguments.length>0?((!d||!u||y||I)&&_(u?f():e),e):f()}}var E=!1,O=!1,m=K(t),s=D(()=>B(()=>{var e=f(),u=l(m);return E?(E=!1,O=!0,u):(O=!1,m.v=e)}));return b||(s.equals=M),function(e,u){if(arguments.length>0){const R=u?l(s):d&&o?W(e):e;return s.equals(R)||(E=!0,U(m,R),S&&i!==void 0&&(i=R),L(()=>l(s))),e}return l(s)}}export{ae as p};