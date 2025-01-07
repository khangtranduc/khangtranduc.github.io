import{a as p,t as l}from"./disclose-version.CWdtGiuR.js";import"./legacy.BA43j2PR.js";import{i as o,j as e}from"./runtime.BVfCZDAn.js";import{h as c}from"./html.DVHtKnJj.js";const y={title:"coding-8",description:"Kattis - thrown",date:"2025-01-04T00:00:00.000Z",tags:["daily-coding"],published:!0};var t=l("<h2>Kattis – thrown</h2> <p>This one is quite a straight-forward stacks problem. An annoying hitch was not initializing <code>curr</code> properly, resulting correct answer no my laptop but wrong solutions on Kattis. Another hitch was not account for cases where the throw number <code>p</code> is negative AND whose absolute magnitude exceeds that of <code>n</code></p> <h2>my solution</h2> <!>",1);function i(n){var s=t(),a=o(e(s),6);c(a,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> do_throw</span><span style="color:#A6ACCD">(</span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> n</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> curr</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> op</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">    if (op </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">) op </span><span style="color:#91B4D5">=</span><span style="color:#91B4D5"> -</span><span style="color:#A6ACCD">(</span><span style="color:#91B4D5">-</span><span style="color:#A6ACCD">op </span><span style="color:#91B4D5">%</span><span style="color:#A6ACCD"> n);</span></span>
<span class="line"><span style="color:#A6ACCD">    return (curr </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> op </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> n) </span><span style="color:#91B4D5">%</span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n, k, op, curr </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    stack</span><span style="color:#91B4D5">&#x3C;int></span><span style="color:#A6ACCD"> ops;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (k</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> op;</span></span>
<span class="line"><span style="color:#A6ACCD">        if (</span><span style="color:#ADD7FF">cin</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">fail</span><span style="color:#A6ACCD">()) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">            cin</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">clear</span><span style="color:#A6ACCD">();</span></span>
<span class="line"><span style="color:#ADD7FF">            cin</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">ignore</span><span style="color:#A6ACCD">(</span><span style="color:#91B4D5">numeric_limits</span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#A6ACCDC0">streamsize</span><span style="color:#A6ACCD">>::</span><span style="color:#ADD7FF">max</span><span style="color:#A6ACCD">(), </span><span style="color:#A6ACCD">'</span><span style="color:#A6ACCD"> '</span><span style="color:#A6ACCD">);</span></span>
<span class="line"><span style="color:#A6ACCD">            cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> op;</span></span>
<span class="line"><span style="color:#A6ACCD">            while (op</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">                curr </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> do_throw</span><span style="color:#A6ACCD">(n, curr, </span><span style="color:#91B4D5">-</span><span style="color:#ADD7FF">ops</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">());</span></span>
<span class="line"><span style="color:#ADD7FF">                ops</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">pop</span><span style="color:#A6ACCD">();</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        else &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            curr </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> do_throw</span><span style="color:#A6ACCD">(n, curr, op);</span></span>
<span class="line"><span style="color:#ADD7FF">            ops</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">push</span><span style="color:#A6ACCD">(op);</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> curr </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),p(n,s)}export{i as default,y as metadata};
