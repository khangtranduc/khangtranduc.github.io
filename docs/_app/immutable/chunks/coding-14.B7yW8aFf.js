import{a as e,t as c}from"./disclose-version.BMRgdCIc.js";import"./legacy.5F527xSo.js";import{L as n,M as t}from"./runtime.Bf9b1N9Y.js";import{h as l}from"./html.DjBeKjpD.js";const i={title:"coding-14",description:"Kattis - awkwardparty & Kattis - compoundwords",date:"2025-01-10T00:00:00.000Z",tags:["daily-coding"],published:!0};var r=c("<p>Today’s problems are a bit free, so I have decided to do 2 of them. They are: Kattis – awkwardparty and Kattis – compoundwords. The solution involves straightforward use of <code>unordered_map</code> and <code>set</code> (bBST) respectively.</p> <h2>my solution (awkwardparty)</h2> <!> <h2>my solution (compoundwords)</h2> <!>",1);function d(p){var s=r(),a=n(t(s),4);l(a,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n, c, lvl;</span></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    lvl </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    unordered_map</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int></span><span style="color:#A6ACCD"> m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> c;</span></span>
<span class="line"><span style="color:#A6ACCD">        if (</span><span style="color:#ADD7FF">m</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">count</span><span style="color:#A6ACCD">(c)) lvl </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> min</span><span style="color:#A6ACCD">(lvl, i </span><span style="color:#91B4D5">-</span><span style="color:#ADD7FF"> m</span><span style="color:#A6ACCD">[c]);</span></span>
<span class="line"><span style="color:#ADD7FF">        m</span><span style="color:#A6ACCD">[c] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> lvl </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`);var o=n(a,4);l(o,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">    string w;</span></span>
<span class="line"><span style="color:#A6ACCD">    vector</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">string</span><span style="color:#91B4D5">></span><span style="color:#A6ACCD"> words;</span></span>
<span class="line"><span style="color:#A6ACCD">    set</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">string</span><span style="color:#91B4D5">></span><span style="color:#A6ACCD"> s;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> w) </span><span style="color:#E4F0FB">words</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">push_back</span><span style="color:#A6ACCD">(w);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#E4F0FB"> words</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">size</span><span style="color:#A6ACCD">(); i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">)</span></span>
<span class="line"><span style="color:#A6ACCD">        for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> j </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; j </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#E4F0FB"> words</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">size</span><span style="color:#A6ACCD">(); j</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            w </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> words</span><span style="color:#A6ACCD">[i];</span></span>
<span class="line"><span style="color:#A6ACCD">            if (i </span><span style="color:#91B4D5">!=</span><span style="color:#A6ACCD"> j) </span><span style="color:#ADD7FF">s</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">insert</span><span style="color:#A6ACCD">(</span><span style="color:#ADD7FF">w</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">append</span><span style="color:#A6ACCD">(</span><span style="color:#ADD7FF">words</span><span style="color:#A6ACCD">[j]));</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">auto</span><span style="color:#A6ACCD"> x : s) cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> x </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),e(p,s)}export{d as default,i as metadata};
