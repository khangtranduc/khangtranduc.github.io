import{a as l,t as p}from"./disclose-version.w122s73S.js";import"./legacy.PYORki5n.js";import{L as o,M as e}from"./runtime.BcKyo7YD.js";import{h as r}from"./html.DxrNSgWl.js";const D={title:"coding-13",description:"Kattis - shiritori",date:"2025-01-09T00:00:00.000Z",tags:["daily-coding"],published:!0};var t=p("<h2>Kattis – shiritori</h2> <p>Quite a straight-forward problem. Normally, I would do another problem in this case, but today has been a slow day so maybe not.</p> <h2>solution</h2> <!>",1);function i(a){var s=t(),n=o(e(s),6);r(n,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    unordered_set</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">string</span><span style="color:#91B4D5">></span><span style="color:#A6ACCD"> s;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    char</span><span style="color:#A6ACCD"> curr, prev;</span></span>
<span class="line"><span style="color:#A6ACCD">    string str;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> str;</span></span>
<span class="line"><span style="color:#A6ACCD">        curr </span><span style="color:#91B4D5">=</span><span style="color:#91B4D5"> *</span><span style="color:#ADD7FF">str</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">begin</span><span style="color:#A6ACCD">();</span></span>
<span class="line"><span style="color:#A6ACCD">        if (i </span><span style="color:#91B4D5">==</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">) prev </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> curr;</span></span>
<span class="line"><span style="color:#A6ACCD">        if (curr </span><span style="color:#91B4D5">!=</span><span style="color:#A6ACCD"> prev </span><span style="color:#91B4D5">||</span><span style="color:#ADD7FF"> s</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">count</span><span style="color:#A6ACCD">(str)) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5DE4C7">Player </span><span style="color:#A6ACCD">"</span><span style="color:#91B4D5"> &#x3C;&#x3C;</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">%</span><span style="color:#5DE4C7"> 2</span><span style="color:#91B4D5"> +</span><span style="color:#5DE4C7"> 1</span><span style="color:#91B4D5"> &#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5DE4C7"> lost</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#ADD7FF">        s</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">insert</span><span style="color:#A6ACCD">(str);</span></span>
<span class="line"><span style="color:#A6ACCD">        prev </span><span style="color:#91B4D5">=</span><span style="color:#91B4D5"> *</span><span style="color:#ADD7FF">str</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">rbegin</span><span style="color:#A6ACCD">();</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5DE4C7">Fair Game</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),l(a,s)}export{i as default,D as metadata};
