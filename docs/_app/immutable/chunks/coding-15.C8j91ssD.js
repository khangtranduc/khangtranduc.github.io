import{a as g,t as x}from"./disclose-version.BnNttdGv.js";import"./legacy.CLC5nI8X.js";import{L as s,M as f,N as a,O as n,P as A}from"./runtime.C_7sD1QJ.js";import{h as l}from"./html.t7q5DTw9.js";const _={title:"coding-15",description:"Kattis - srednji",date:"2025-01-11T00:00:00.000Z",tags:["daily-coding"],published:!0};var w=x('<h2>Kattis – srednji</h2> <p>This is a pretty tough one for me. I wasn’t able to figure it out and had to consult a solution <a href="https://github.com/mpfeifer1/Kattis/blob/master/srednji.cpp" rel="nofollow">online</a>.</p> <p>I think I get how it works. We look left, counting the number of elements larger than <span class="math math-inline"><!></span>. When we look right, if there is that number of elements — say <span class="math math-inline"><!></span> — less than <span class="math math-inline"><!></span>, then all the left ranges + that right range forms a valid subset (where valid means it satisfies the problem conditions).</p> <p>The negative sign aggregation line</p> <!> <p>reflects that fact that we want to balance out the whatever number of elements larger than <span class="math math-inline"><!></span> on the other side.</p> <h2>my solution</h2> <!>',1);function v(y){var r=w(),p=s(f(r),4),o=s(a(p)),D=a(o);l(D,()=>'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>'),n(o);var t=s(o,2),m=a(t);l(m,()=>'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>'),n(t);var c=s(t,2),h=a(c);l(h,()=>'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>'),n(c),A(),n(p);var i=s(p,4);l(i,()=>'<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">ans </span><span style="color:#91B4D5">+=</span><span style="color:#E4F0FB"> map</span><span style="color:#A6ACCD">[</span><span style="color:#91B4D5">-</span><span style="color:#A6ACCD">no_larger]</span></span></code></pre>');var e=s(i,2),C=s(a(e)),d=a(C);l(d,()=>'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>'),n(C),A(),n(e);var B=s(e,4);l(B,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n, b, k;</span></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> b;</span></span>
<span class="line"><span style="color:#A6ACCD">    vector</span><span style="color:#91B4D5">&#x3C;int></span><span style="color:#ADD7FF"> a</span><span style="color:#A6ACCD">(n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#ADD7FF"> a</span><span style="color:#A6ACCD">[i];</span></span>
<span class="line"><span style="color:#A6ACCD">        if (</span><span style="color:#ADD7FF">a</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">==</span><span style="color:#A6ACCD"> b) k </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    map</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int></span><span style="color:#A6ACCD"> m;</span></span>
<span class="line"><span style="color:#E4F0FB">    m</span><span style="color:#A6ACCD">[</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">;</span><span style="color:#767C9DB0;font-style:italic"> // subset containing only itself</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> no_larger </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> k </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">>=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        if (</span><span style="color:#ADD7FF">a</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">></span><span style="color:#A6ACCD"> b) no_larger</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        else no_larger</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">        m</span><span style="color:#A6ACCD">[no_larger]</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> ans </span><span style="color:#91B4D5">=</span><span style="color:#E4F0FB"> m</span><span style="color:#A6ACCD">[</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">];</span></span>
<span class="line"><span style="color:#A6ACCD">    no_larger </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> k </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        if (</span><span style="color:#ADD7FF">a</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">></span><span style="color:#A6ACCD"> b) no_larger</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        else no_larger</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        ans </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> m</span><span style="color:#A6ACCD">[</span><span style="color:#91B4D5">-</span><span style="color:#A6ACCD">no_larger];</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> ans </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),g(y,r)}export{v as default,_ as metadata};