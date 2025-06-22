import{a as e,t as c}from"./disclose-version.gCkiB1NA.js";import"./legacy.BBWxuCkZ.js";import{L as a,M as t}from"./runtime.DIMTQvhB.js";import{h as l}from"./html.BSu0e-bj.js";const i={title:"coding-18",description:"Kattis - almostunionfind",date:"2025-01-18T00:00:00.000Z",tags:["daily-coding"],published:!0};var r=c('<h2>Kattis – almostunionfind</h2> <p>This is a crazy problem, not because it is hard, but because it seemed that <strong>weighted quick-union w/ path compression</strong> is slower than <strong>quick-find w/ child set</strong>!!!!</p> <p>The gap between the last <code>daily-coding</code> was because I was moving back to Princeton after winter break and this problem completely stumped me, I was getting TLE with my <strong>weighted quick-union w/ path compression</strong> and I can’t figure out how to improve it further.</p> <p>My quick-find solution was <strong><em>heavily</em></strong> “inspired” by <code>mpfeifer1</code>’s <a href="https://github.com/mpfeifer1/Kattis/blob/master/almostunionfind.cpp" rel="nofollow">solution</a>.</p> <p>Though I still believe that a <strong>quick-union</strong> solution is possible given how the hint was phrased in <code>halim</code>. You can help me find the speed-up/mistake if you are so inclined. I have also left my TLE <strong>quick-union</strong> solution below.</p> <h2>my solution (quick-find)</h2> <!> <h2>my solution (quick-union)</h2> <!>',1);function F(p){var s=r(),n=a(t(s),12);l(n,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">#define </span><span style="color:#ADD7FF">vi</span><span style="color:#A6ACCD"> vector</span><span style="color:#91B4D5">&#x3C;int></span></span>
<span class="line"><span style="color:#A6ACCD">#define </span><span style="color:#ADD7FF">vl</span><span style="color:#A6ACCD"> vector</span><span style="color:#91B4D5">&#x3C;long></span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n, m, op, e1, e2, x, y;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    ios</span><span style="color:#A6ACCD">::</span><span style="color:#ADD7FF">sync_with_stdio</span><span style="color:#A6ACCD">(</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#E4F0FB">    cin</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">tie</span><span style="color:#A6ACCD">(</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">); </span><span style="color:#E4F0FB">cout</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">tie</span><span style="color:#A6ACCD">(</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n </span><span style="color:#91B4D5">&#x26;&#x26;</span><span style="color:#A6ACCD"> cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> m) &#123;</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // create almost-UF data structure of size n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // maintain the sz for weighted-UF for convenience</span></span>
<span class="line"><span style="color:#A6ACCD">        vi </span><span style="color:#ADD7FF">p</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#A6ACCD">        vl </span><span style="color:#ADD7FF">sum</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // tracks the child elements of a parent</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // speeds up quick find</span></span>
<span class="line"><span style="color:#A6ACCD">        vector</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">set</span><span style="color:#91B4D5">&#x3C;int>></span><span style="color:#ADD7FF"> sets</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">        for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;=</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">            p</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i;</span></span>
<span class="line"><span style="color:#ADD7FF">            sum</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i;</span></span>
<span class="line"><span style="color:#ADD7FF">            sets</span><span style="color:#A6ACCD">[i].</span><span style="color:#ADD7FF">insert</span><span style="color:#A6ACCD">(i);</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">        while (m</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> op;</span></span>
<span class="line"><span style="color:#A6ACCD">            switch (op) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">                case </span><span style="color:#5DE4C7">1</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e1 </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e2;</span></span>
<span class="line"><span style="color:#A6ACCD">                    </span></span>
<span class="line"><span style="color:#A6ACCD">                    e1 </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> p</span><span style="color:#A6ACCD">[e1];</span></span>
<span class="line"><span style="color:#A6ACCD">                    e2 </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> p</span><span style="color:#A6ACCD">[e2];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">                    if (e1 </span><span style="color:#91B4D5">==</span><span style="color:#A6ACCD"> e2) break;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">                    if (</span><span style="color:#ADD7FF">sets</span><span style="color:#A6ACCD">[e2].</span><span style="color:#ADD7FF">size</span><span style="color:#A6ACCD">() </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#ADD7FF"> sets</span><span style="color:#A6ACCD">[e1].</span><span style="color:#ADD7FF">size</span><span style="color:#A6ACCD">()) </span><span style="color:#ADD7FF">swap</span><span style="color:#A6ACCD">(e1, e2);</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">                    // ensures sets[e1].size() &#x3C;= sets[e2].size()</span></span>
<span class="line"><span style="color:#A6ACCD">                    for (</span><span style="color:#91B4D5">auto</span><span style="color:#A6ACCD"> x : </span><span style="color:#ADD7FF">sets</span><span style="color:#A6ACCD">[e1]) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">                        sets</span><span style="color:#A6ACCD">[e2].</span><span style="color:#ADD7FF">insert</span><span style="color:#A6ACCD">(x);</span></span>
<span class="line"><span style="color:#ADD7FF">                        p</span><span style="color:#A6ACCD">[x] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> e2;</span></span>
<span class="line"><span style="color:#A6ACCD">                    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">                    sets</span><span style="color:#A6ACCD">[e1].</span><span style="color:#ADD7FF">clear</span><span style="color:#A6ACCD">();</span></span>
<span class="line"><span style="color:#ADD7FF">                    sum</span><span style="color:#A6ACCD">[e2] </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> sum</span><span style="color:#A6ACCD">[e1];</span></span>
<span class="line"><span style="color:#A6ACCD">                    break;</span></span>
<span class="line"><span style="color:#A6ACCD">                case </span><span style="color:#5DE4C7">2</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">                    // move e1 to set containing e2</span></span>
<span class="line"><span style="color:#A6ACCD">                    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e1 </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e2;</span></span>
<span class="line"><span style="color:#A6ACCD">                    </span></span>
<span class="line"><span style="color:#A6ACCD">                    e2 </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> p</span><span style="color:#A6ACCD">[e2];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">                    if (e2 </span><span style="color:#91B4D5">==</span><span style="color:#ADD7FF"> p</span><span style="color:#A6ACCD">[e1]) break;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">                    sum</span><span style="color:#A6ACCD">[e2] </span><span style="color:#91B4D5">+=</span><span style="color:#A6ACCD"> e1;</span></span>
<span class="line"><span style="color:#ADD7FF">                    sum</span><span style="color:#A6ACCD">[</span><span style="color:#ADD7FF">p</span><span style="color:#A6ACCD">[e1]] </span><span style="color:#91B4D5">-=</span><span style="color:#A6ACCD"> e1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">                    sets</span><span style="color:#A6ACCD">[</span><span style="color:#ADD7FF">p</span><span style="color:#A6ACCD">[e1]].</span><span style="color:#ADD7FF">erase</span><span style="color:#A6ACCD">(e1);</span></span>
<span class="line"><span style="color:#ADD7FF">                    sets</span><span style="color:#A6ACCD">[e2].</span><span style="color:#ADD7FF">insert</span><span style="color:#A6ACCD">(e1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">                    p</span><span style="color:#A6ACCD">[e1] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> e2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">                    break;</span></span>
<span class="line"><span style="color:#A6ACCD">                case </span><span style="color:#5DE4C7">3</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e1;</span></span>
<span class="line"><span style="color:#A6ACCD">                    cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#ADD7FF"> sets</span><span style="color:#A6ACCD">[</span><span style="color:#ADD7FF">p</span><span style="color:#A6ACCD">[e1]].</span><span style="color:#ADD7FF">size</span><span style="color:#A6ACCD">() </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#A6ACCD"> "</span><span style="color:#91B4D5"> &#x3C;&#x3C;</span><span style="color:#ADD7FF"> sum</span><span style="color:#A6ACCD">[</span><span style="color:#ADD7FF">p</span><span style="color:#A6ACCD">[e1]] </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">                    break;</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`);var o=a(n,4);l(o,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">#define </span><span style="color:#ADD7FF">vi</span><span style="color:#A6ACCD"> vector</span><span style="color:#91B4D5">&#x3C;int></span></span>
<span class="line"><span style="color:#A6ACCD">#define </span><span style="color:#ADD7FF">vl</span><span style="color:#A6ACCD"> vector</span><span style="color:#91B4D5">&#x3C;long></span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> findRoot</span><span style="color:#A6ACCD">(</span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> i</span><span style="color:#A6ACCD">, </span><span style="color:#A6ACCDC0">vi</span><span style="color:#E4F0FB"> p</span><span style="color:#A6ACCD">, </span><span style="color:#A6ACCDC0">vi</span><span style="color:#5DE4C7">&#x26;</span><span style="color:#E4F0FB"> next</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> curr </span><span style="color:#91B4D5">=</span><span style="color:#E4F0FB"> next</span><span style="color:#A6ACCD">[i];</span></span>
<span class="line"><span style="color:#A6ACCD">    while (</span><span style="color:#E4F0FB">p</span><span style="color:#A6ACCD">[curr] </span><span style="color:#91B4D5">!=</span><span style="color:#A6ACCD"> curr) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        curr </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> p</span><span style="color:#A6ACCD">[curr];</span></span>
<span class="line"><span style="color:#ADD7FF">        p</span><span style="color:#A6ACCD">[curr] </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> p</span><span style="color:#A6ACCD">[</span><span style="color:#ADD7FF">p</span><span style="color:#A6ACCD">[curr]];</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"><span style="color:#E4F0FB">    next</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> curr;</span><span style="color:#767C9DB0;font-style:italic"> // cache the root</span></span>
<span class="line"><span style="color:#A6ACCD">    return curr;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n, m, op, e1, e2, x, y;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    ios</span><span style="color:#A6ACCD">::</span><span style="color:#ADD7FF">sync_with_stdio</span><span style="color:#A6ACCD">(</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#E4F0FB">    cin</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">tie</span><span style="color:#A6ACCD">(</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">); </span><span style="color:#E4F0FB">cout</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">tie</span><span style="color:#A6ACCD">(</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n </span><span style="color:#91B4D5">&#x26;&#x26;</span><span style="color:#A6ACCD"> cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> m) &#123;</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // create almost-UF data structure of size n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // maintain the sz for weighted-UF for convenience</span></span>
<span class="line"><span style="color:#A6ACCD">        vi </span><span style="color:#ADD7FF">p</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">), </span><span style="color:#ADD7FF">sz</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">), </span><span style="color:#ADD7FF">next</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#A6ACCD">        vl </span><span style="color:#ADD7FF">sum</span><span style="color:#A6ACCD">(n </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">        for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;=</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">            p</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i;</span></span>
<span class="line"><span style="color:#ADD7FF">            next</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i;</span></span>
<span class="line"><span style="color:#ADD7FF">            sum</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i;</span></span>
<span class="line"><span style="color:#ADD7FF">            sz</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">        while (m</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> op;</span></span>
<span class="line"><span style="color:#A6ACCD">            switch (op) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">                case </span><span style="color:#5DE4C7">1</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e1 </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e2;</span></span>
<span class="line"><span style="color:#A6ACCD">                    x </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> findRoot</span><span style="color:#A6ACCD">(e1, p, next);</span></span>
<span class="line"><span style="color:#A6ACCD">                    y </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> findRoot</span><span style="color:#A6ACCD">(e2, p, next);</span></span>
<span class="line"><span style="color:#A6ACCD">                    if (x </span><span style="color:#91B4D5">==</span><span style="color:#A6ACCD"> y) break;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">                    if (</span><span style="color:#ADD7FF">sz</span><span style="color:#A6ACCD">[x] </span><span style="color:#91B4D5">></span><span style="color:#ADD7FF"> sz</span><span style="color:#A6ACCD">[y]) </span><span style="color:#ADD7FF">swap</span><span style="color:#A6ACCD">(x, y);</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">                    // sz[x] &#x3C;= sz[y] is ensured</span></span>
<span class="line"><span style="color:#ADD7FF">                    p</span><span style="color:#A6ACCD">[x] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> y;</span></span>
<span class="line"><span style="color:#ADD7FF">                    next</span><span style="color:#A6ACCD">[e1] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> y;</span><span style="color:#767C9DB0;font-style:italic"> // shortcut to root -> path-compression</span></span>
<span class="line"><span style="color:#ADD7FF">                    sz</span><span style="color:#A6ACCD">[y] </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> sz</span><span style="color:#A6ACCD">[x];</span></span>
<span class="line"><span style="color:#ADD7FF">                    sum</span><span style="color:#A6ACCD">[y] </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> sum</span><span style="color:#A6ACCD">[x];</span></span>
<span class="line"><span style="color:#A6ACCD">                    break;</span></span>
<span class="line"><span style="color:#A6ACCD">                case </span><span style="color:#5DE4C7">2</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e1 </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e2;</span></span>
<span class="line"><span style="color:#A6ACCD">                    x </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> findRoot</span><span style="color:#A6ACCD">(e1, p, next);</span></span>
<span class="line"><span style="color:#A6ACCD">                    y </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> findRoot</span><span style="color:#A6ACCD">(e2, p, next);</span></span>
<span class="line"><span style="color:#A6ACCD">                    if (x </span><span style="color:#91B4D5">==</span><span style="color:#A6ACCD"> y) break;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">                    // adjust shortcut to point to other tree</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">                    // maintains parent structure</span></span>
<span class="line"><span style="color:#ADD7FF">                    next</span><span style="color:#A6ACCD">[e1] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> y;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">                    sz</span><span style="color:#A6ACCD">[x]</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">;</span><span style="color:#767C9DB0;font-style:italic"> // remove i, so one less</span></span>
<span class="line"><span style="color:#ADD7FF">                    sum</span><span style="color:#A6ACCD">[x] </span><span style="color:#91B4D5">-=</span><span style="color:#A6ACCD"> e1;</span><span style="color:#767C9DB0;font-style:italic"> // remove i from sum</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">                    sz</span><span style="color:#A6ACCD">[y]</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">                    sum</span><span style="color:#A6ACCD">[y] </span><span style="color:#91B4D5">+=</span><span style="color:#A6ACCD"> e1;</span></span>
<span class="line"><span style="color:#A6ACCD">                    break;</span></span>
<span class="line"><span style="color:#A6ACCD">                case </span><span style="color:#5DE4C7">3</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> e1;</span></span>
<span class="line"><span style="color:#A6ACCD">                    e2 </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> findRoot</span><span style="color:#A6ACCD">(e1, p, next);</span></span>
<span class="line"><span style="color:#A6ACCD">                    cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#ADD7FF"> sz</span><span style="color:#A6ACCD">[e2] </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#A6ACCD"> "</span><span style="color:#91B4D5"> &#x3C;&#x3C;</span><span style="color:#ADD7FF"> sum</span><span style="color:#A6ACCD">[e2] </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">                    break;</span></span>
<span class="line"><span style="color:#5DE4C7">                default</span><span style="color:#A6ACCD">:</span></span>
<span class="line"><span style="color:#A6ACCD">                    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),e(p,s)}export{F as default,i as metadata};
