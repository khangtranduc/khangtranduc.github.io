import{a as p,t as l}from"./disclose-version.BMRgdCIc.js";import"./legacy.5F527xSo.js";import{L as o,M as e}from"./runtime.Bf9b1N9Y.js";import{h as c}from"./html.DjBeKjpD.js";const y={title:"coding-21",description:"Kattis - supercomputer",date:"2025-01-26T00:00:00.000Z",tags:["daily-coding"],published:!0};var t=l('<h2>Kattis – supercomputer</h2> <p>Quite a straight-forward application of <a href="/posts/coding-19">Fenwick trees</a>.</p> <h2>my solution</h2> <!>',1);function i(n){var s=t(),a=o(e(s),6);c(a,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">#define </span><span style="color:#ADD7FF">LSOne</span><span style="color:#A6ACCD">(</span><span style="color:#E4F0FB">S</span><span style="color:#A6ACCD">) (S </span><span style="color:#91B4D5">&#x26;</span><span style="color:#91B4D5"> -</span><span style="color:#A6ACCD">S)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">class</span><span style="color:#A6ACCDC0"> fenwick</span><span style="color:#A6ACCD"> &#123;</span></span>
<span class="line"><span style="color:#91B4D5">    private</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">    vector</span><span style="color:#91B4D5">&#x3C;int></span><span style="color:#A6ACCD"> ft;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    public</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#ADD7FF">    fenwick</span><span style="color:#A6ACCD">(</span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> m</span><span style="color:#A6ACCD">) &#123; </span><span style="color:#ADD7FF">ft</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">assign</span><span style="color:#A6ACCD">(m </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">, </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">); &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    void</span><span style="color:#ADD7FF"> update</span><span style="color:#A6ACCD">(</span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> i</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> v</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        for (; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#ADD7FF"> ft</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">size</span><span style="color:#A6ACCD">(); i </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> LSOne</span><span style="color:#A6ACCD">(i))</span></span>
<span class="line"><span style="color:#ADD7FF">            ft</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">+=</span><span style="color:#A6ACCD"> v;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    long</span><span style="color:#ADD7FF"> rsq</span><span style="color:#A6ACCD">(</span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> j</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#91B4D5">        long</span><span style="color:#A6ACCD"> sum </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        for (; j </span><span style="color:#91B4D5">></span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; j </span><span style="color:#91B4D5">-=</span><span style="color:#ADD7FF"> LSOne</span><span style="color:#A6ACCD">(j))</span></span>
<span class="line"><span style="color:#A6ACCD">            sum </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> ft</span><span style="color:#A6ACCD">[j];</span></span>
<span class="line"><span style="color:#A6ACCD">        return sum;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n, k, u, v;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    fenwick </span><span style="color:#ADD7FF">tree</span><span style="color:#A6ACCD">(n);</span></span>
<span class="line"><span style="color:#A6ACCD">    vector</span><span style="color:#91B4D5">&#x3C;bool></span><span style="color:#A6ACCD"> vec;</span></span>
<span class="line"><span style="color:#E4F0FB">    vec</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">assign</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">, </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    char</span><span style="color:#A6ACCD"> op;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (k</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> op;</span></span>
<span class="line"><span style="color:#A6ACCD">        switch (op) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            case </span><span style="color:#A6ACCD">'</span><span style="color:#5DE4C7">F</span><span style="color:#A6ACCD">'</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> u;</span></span>
<span class="line"><span style="color:#A6ACCD">                if (</span><span style="color:#ADD7FF">vec</span><span style="color:#A6ACCD">[u]) </span><span style="color:#ADD7FF">tree</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">update</span><span style="color:#A6ACCD">(u, </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7">1</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#A6ACCD">                else </span><span style="color:#ADD7FF">tree</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">update</span><span style="color:#A6ACCD">(u, </span><span style="color:#5DE4C7">1</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#ADD7FF">                vec</span><span style="color:#A6ACCD">[u] </span><span style="color:#91B4D5">=</span><span style="color:#91B4D5"> !</span><span style="color:#ADD7FF">vec</span><span style="color:#A6ACCD">[u];</span></span>
<span class="line"><span style="color:#A6ACCD">                break;</span></span>
<span class="line"><span style="color:#A6ACCD">            case </span><span style="color:#A6ACCD">'</span><span style="color:#5DE4C7">C</span><span style="color:#A6ACCD">'</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> u </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> v;</span></span>
<span class="line"><span style="color:#A6ACCD">                cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#ADD7FF"> tree</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">rsq</span><span style="color:#A6ACCD">(v) </span><span style="color:#91B4D5">-</span><span style="color:#ADD7FF"> tree</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">rsq</span><span style="color:#A6ACCD">(u </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">) </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">                break;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),p(n,s)}export{i as default,y as metadata};
