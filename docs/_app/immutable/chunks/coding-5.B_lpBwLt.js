import{a as p,t as l}from"./disclose-version.gCkiB1NA.js";import"./legacy.BBWxuCkZ.js";import{L as o,M as e}from"./runtime.DIMTQvhB.js";import{h as t}from"./html.BSu0e-bj.js";const y={title:"coding-5",description:"Kattis - mali",date:"2025-01-01T00:00:00.000Z",tags:["daily-coding"],published:!0};var c=l("<h2>Kattis – mali</h2> <p>The basic algorithm is easy to spot, the hard part is figuring out a way to get it under the time limit. We just need to exploit the fact that the numbers given is under 100.</p> <p>What’s weird however, is that the bookkeeping for <code>tempA</code> and <code>tempB</code> (zeroing) is needed for the solution to be correct? From my understanding, we never touch them again aside from the ones that doesn’t involve zeroing. Maybe it’s just some corner case.</p> <p><strong>My solution:</strong></p> <!>",1);function i(a){var s=c(),n=o(e(s),8);t(n,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">    // 101 so that no linear scan to find max elem</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">    // and 101 is quite small</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#E4F0FB"> freqA</span><span style="color:#A6ACCD">[</span><span style="color:#5DE4C7">101</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> &#123;</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">&#125;, </span><span style="color:#E4F0FB">freqB</span><span style="color:#A6ACCD">[</span><span style="color:#5DE4C7">101</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> &#123;</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">&#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (n</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#91B4D5">        int</span><span style="color:#A6ACCD"> A, B;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> A </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> B;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">        freqA</span><span style="color:#A6ACCD">[A]</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">        freqB</span><span style="color:#A6ACCD">[B]</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">        int</span><span style="color:#ADD7FF"> tempA</span><span style="color:#A6ACCD">[</span><span style="color:#5DE4C7">101</span><span style="color:#A6ACCD">], </span><span style="color:#ADD7FF">tempB</span><span style="color:#A6ACCD">[</span><span style="color:#5DE4C7">101</span><span style="color:#A6ACCD">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">        copy</span><span style="color:#A6ACCD">(freqA, freqA </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 101</span><span style="color:#A6ACCD">, tempA);</span></span>
<span class="line"><span style="color:#ADD7FF">        copy</span><span style="color:#A6ACCD">(freqB, freqB </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 101</span><span style="color:#A6ACCD">, tempB);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">        int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">, j </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 100</span><span style="color:#A6ACCD">, maximal </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> INT_MIN;</span></span>
<span class="line"><span style="color:#A6ACCD">        while (i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#5DE4C7"> 101</span><span style="color:#91B4D5"> &#x26;&#x26;</span><span style="color:#A6ACCD"> j </span><span style="color:#91B4D5">>=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            if (</span><span style="color:#ADD7FF">tempA</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">==</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">) i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            else if (</span><span style="color:#ADD7FF">tempB</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">==</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">) j</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            else if (</span><span style="color:#ADD7FF">tempA</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">==</span><span style="color:#ADD7FF"> tempB</span><span style="color:#A6ACCD">[j]) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">                maximal </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(maximal, i </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> j);</span></span>
<span class="line"><span style="color:#ADD7FF">                tempA</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">                tempB</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">                i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">                j</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">            else if (</span><span style="color:#ADD7FF">tempA</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">></span><span style="color:#ADD7FF"> tempB</span><span style="color:#A6ACCD">[j]) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">                maximal </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(maximal, i </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> j);</span></span>
<span class="line"><span style="color:#ADD7FF">                tempA</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">-=</span><span style="color:#ADD7FF"> tempB</span><span style="color:#A6ACCD">[j];</span></span>
<span class="line"><span style="color:#ADD7FF">                tempB</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">                j</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">            else if (</span><span style="color:#ADD7FF">tempA</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#ADD7FF"> tempB</span><span style="color:#A6ACCD">[j]) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">                maximal </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(maximal, i </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> j);</span></span>
<span class="line"><span style="color:#ADD7FF">                tempB</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">-=</span><span style="color:#ADD7FF"> tempA</span><span style="color:#A6ACCD">[i];</span></span>
<span class="line"><span style="color:#ADD7FF">                tempA</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">                i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        </span></span>
<span class="line"><span style="color:#A6ACCD">        cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> maximal </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),p(a,s)}export{i as default,y as metadata};
