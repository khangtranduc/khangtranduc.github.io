import{a as e,t}from"./disclose-version.BnNttdGv.js";import"./legacy.CLC5nI8X.js";import{L as a,M as c}from"./runtime.C_7sD1QJ.js";import{h as p}from"./html.t7q5DTw9.js";const i={title:"coding-12",description:"Kattis - freefood",date:"2025-01-08T00:00:00.000Z",tags:["daily-coding"],published:!0};var r=t('<h2>Kattis – freefood</h2> <p>This is a classic sweep-line problem, nevertheless, I still learned something out of it.</p> <ol><li>It is convenient to use <code>#define</code> for <code>minPQ</code>.</li></ol> <!> <ol start="2"><li>for range problems, double-counting can be eliminated by <strong>not including the end point</strong>. Now I understand why it is programming convention to exclude these endpoints.</li></ol> <h2>my solution</h2> <!>',1);function F(l){var s=r(),n=a(c(s),6);p(n,()=>'<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#define </span><span style="color:#ADD7FF">min_pq</span><span style="color:#A6ACCD"> priority_queue</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">pair</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int></span><span style="color:#A6ACCD">,vector</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">pair</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int>></span><span style="color:#A6ACCD">,greater</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">pair</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int>>></span></span></code></pre>');var o=a(n,6);p(o,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">#define </span><span style="color:#ADD7FF">min_pq</span><span style="color:#A6ACCD"> priority_queue</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">pair</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int></span><span style="color:#A6ACCD">,vector</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">pair</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int>></span><span style="color:#A6ACCD">,greater</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">pair</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int>>></span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n, start, end;</span></span>
<span class="line"><span style="color:#ADD7FF">    scanf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    bitset</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#5DE4C7">101</span><span style="color:#91B4D5">></span><span style="color:#A6ACCD"> mask;</span><span style="color:#767C9DB0;font-style:italic"> // mask</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> cnt </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">, prev </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">, curr;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    min_pq startPQ;</span></span>
<span class="line"><span style="color:#A6ACCD">    min_pq endPQ;</span></span>
<span class="line"><span style="color:#A6ACCD">    </span></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">        scanf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#E4F0FB"> %d</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">start, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">end);</span></span>
<span class="line"><span style="color:#ADD7FF">        startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">push</span><span style="color:#A6ACCD">(&#123;start, i&#125;);</span></span>
<span class="line"><span style="color:#ADD7FF">        endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">push</span><span style="color:#A6ACCD">(&#123;end </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">, i&#125;);</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (</span><span style="color:#91B4D5">!</span><span style="color:#E4F0FB">endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">empty</span><span style="color:#A6ACCD">()) &#123;</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // can't set curr to pair&#x3C;int, int> cuz funky pair comparison</span></span>
<span class="line"><span style="color:#A6ACCD">        if (</span><span style="color:#91B4D5">!</span><span style="color:#ADD7FF">startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">empty</span><span style="color:#A6ACCD">() </span><span style="color:#91B4D5">&#x26;&#x26;</span><span style="color:#ADD7FF"> startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">().</span><span style="color:#E4F0FB">first</span><span style="color:#91B4D5"> &#x3C;=</span><span style="color:#ADD7FF"> endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">().</span><span style="color:#E4F0FB">first</span><span style="color:#A6ACCD">) </span></span>
<span class="line"><span style="color:#A6ACCD">            curr </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">().</span><span style="color:#E4F0FB">first</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        else curr </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">().</span><span style="color:#E4F0FB">first</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">        if (</span><span style="color:#91B4D5">!</span><span style="color:#ADD7FF">startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">empty</span><span style="color:#A6ACCD">() </span><span style="color:#91B4D5">&#x26;&#x26;</span><span style="color:#ADD7FF"> startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">() </span><span style="color:#91B4D5">&#x3C;=</span><span style="color:#ADD7FF"> endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">()) &#123;</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">            // jump to startPQ</span></span>
<span class="line"><span style="color:#A6ACCD">            if (</span><span style="color:#ADD7FF">mask</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">any</span><span style="color:#A6ACCD">()) cnt </span><span style="color:#91B4D5">+=</span><span style="color:#A6ACCD"> curr </span><span style="color:#91B4D5">-</span><span style="color:#A6ACCD"> prev;</span></span>
<span class="line"><span style="color:#ADD7FF">            mask</span><span style="color:#A6ACCD">[</span><span style="color:#ADD7FF">startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">().</span><span style="color:#E4F0FB">second</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">            startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">pop</span><span style="color:#A6ACCD">();</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        else if (</span><span style="color:#ADD7FF">startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">empty</span><span style="color:#A6ACCD">() </span><span style="color:#91B4D5">||</span><span style="color:#ADD7FF"> startPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">() </span><span style="color:#91B4D5">></span><span style="color:#ADD7FF"> endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">()) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            if (</span><span style="color:#ADD7FF">mask</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">any</span><span style="color:#A6ACCD">()) cnt </span><span style="color:#91B4D5">+=</span><span style="color:#A6ACCD"> curr </span><span style="color:#91B4D5">-</span><span style="color:#A6ACCD"> prev;</span></span>
<span class="line"><span style="color:#ADD7FF">            mask</span><span style="color:#A6ACCD">[</span><span style="color:#ADD7FF">endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">top</span><span style="color:#A6ACCD">().</span><span style="color:#E4F0FB">second</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">            endPQ</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">pop</span><span style="color:#A6ACCD">();</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        prev </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> curr;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">    printf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, cnt);</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),e(l,s)}export{F as default,i as metadata};