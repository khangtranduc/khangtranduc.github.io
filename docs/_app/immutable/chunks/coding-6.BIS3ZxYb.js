import{a as e,t}from"./disclose-version.yFYzY67q.js";import"./legacy.CQzi9stk.js";import{i as a,j as r}from"./runtime.DNrlAA3c.js";import{h as l}from"./html.gT-yHAVe.js";const i={title:"coding-6",description:"Kattis - magicsequence",date:"2025-01-02T00:00:00.000Z",tags:["daily-coding"],published:!0};var c=t('<h2>Kattis – magicsequence</h2> <p>This took an especially long time due to Kattis hiding its test cases. This lead me to implementing wrong fixes. For example, I thought I needed to use <code>BigInteger</code>, so I ended up reimplementing the entire thing in java only to realize that it was unnecessary. Nevertheless, I learned quite a lot from this problem.</p> <h3>radix sort</h3> <p>Counting sort but for each “digit”, in brackets because that depends on what base (or radix) is used. The formula for the <code>i</code>-th “digit” given a radix is quite simple:</p> <!> <p>After this, it is a matter of performing a <strong>stable</strong> counting sort on progressive more significant “digits”.</p> <h3>stable counting sort</h3> <p>I got this algorithm from Prof. Halim’s Competitive Programming I book. Essentially, it is counting sort with the following additions:</p> <ul><li>we convert the usual count array to a cumulative count.</li> <li>using this cumulative count, we can insert the elements from the original array in the sorted order, while still preserving relative ordering between elements.</li></ul> <h3>bit-wise shenanigans</h3> <p>With the two above methods, even with a carefully chosen radix (as hinted in Prof. Halim’s book), I still got TLE.</p> <p>After browsing the internet, I found a solution by <a href="https://github.com/reneargento/competitive-programming-4/blob/master/src/chapter2/section2/g/special/sorting/problems/MagicSequence.java" rel="nofollow">Rene Argento</a> that employed an interesting way speed up the “digit”-extraction operation through bit-wise operations. This is quite clever and it got me over the TLE.</p> <p>He also implemented an array swapping procedure to not have to create a new <code>temp</code> array per radix sort, which would speed things up further, but it was not necessary for me to clear the TLE.</p> <h2>my solution</h2> <!>',1);function B(p){var s=c(),n=a(r(s),8);l(n,()=>'<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">(number </span><span style="color:#91B4D5">/</span><span style="color:#A6ACCD"> radix</span><span style="color:#91B4D5">^</span><span style="color:#A6ACCD">i) </span><span style="color:#91B4D5">%</span><span style="color:#A6ACCD"> radix</span></span></code></pre>');var o=a(n,20);l(o,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> tc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> tc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (tc</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#91B4D5">        int</span><span style="color:#A6ACCD"> n, a, b, c, x, y;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> a </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> b </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> c </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> x </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> y;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">        long</span><span style="color:#ADD7FF"> s</span><span style="color:#A6ACCD">[n];</span></span>
<span class="line"><span style="color:#ADD7FF">        s</span><span style="color:#A6ACCD">[</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> a;</span></span>
<span class="line"><span style="color:#91B4D5">        long</span><span style="color:#A6ACCD"> largest </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> a;</span></span>
<span class="line"><span style="color:#A6ACCD">        for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">            s</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> (</span><span style="color:#ADD7FF">s</span><span style="color:#A6ACCD">[i</span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7">1</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">*</span><span style="color:#A6ACCD"> b </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> a) </span><span style="color:#91B4D5">%</span><span style="color:#A6ACCD"> c;</span></span>
<span class="line"><span style="color:#A6ACCD">            largest </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(largest, </span><span style="color:#ADD7FF">s</span><span style="color:#A6ACCD">[i]);</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">        int</span><span style="color:#A6ACCD"> exp </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 15</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#91B4D5">        int</span><span style="color:#A6ACCD"> radix </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 2</span><span style="color:#91B4D5"> &#x3C;&#x3C;</span><span style="color:#A6ACCD"> exp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // note the stable counting sort from halim</span></span>
<span class="line"><span style="color:#A6ACCD">        for (</span><span style="color:#91B4D5">long</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; (</span><span style="color:#5DE4C7">2l</span><span style="color:#91B4D5"> &#x3C;&#x3C;</span><span style="color:#A6ACCD"> i) </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> largest; i </span><span style="color:#91B4D5">+=</span><span style="color:#A6ACCD"> exp) &#123;</span></span>
<span class="line"><span style="color:#91B4D5">            int</span><span style="color:#ADD7FF"> count</span><span style="color:#A6ACCD">[radix] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> &#123;</span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">&#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">            for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> j </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; j </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; j</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">)</span></span>
<span class="line"><span style="color:#ADD7FF">                count</span><span style="color:#A6ACCD">[(</span><span style="color:#ADD7FF">s</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> (i </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">)) </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD"> (radix </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">)]</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">            // computing the prefix sum</span></span>
<span class="line"><span style="color:#A6ACCD">            for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> j </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; j </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> radix; j</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">                count</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> count</span><span style="color:#A6ACCD">[j </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">];</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">            </span></span>
<span class="line"><span style="color:#91B4D5">            long</span><span style="color:#ADD7FF"> temp</span><span style="color:#A6ACCD">[n];</span></span>
<span class="line"><span style="color:#A6ACCD">            for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> j </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> n </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; j </span><span style="color:#91B4D5">>=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; j</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">)</span></span>
<span class="line"><span style="color:#ADD7FF">                temp</span><span style="color:#A6ACCD">[</span><span style="color:#91B4D5">--</span><span style="color:#ADD7FF">count</span><span style="color:#A6ACCD">[(</span><span style="color:#ADD7FF">s</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> (i </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">)) </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD"> (radix </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">)]] </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> s</span><span style="color:#A6ACCD">[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">            for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> j </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; j </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> n; j</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">)</span></span>
<span class="line"><span style="color:#ADD7FF">                s</span><span style="color:#A6ACCD">[j] </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> temp</span><span style="color:#A6ACCD">[j];</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">        long</span><span style="color:#A6ACCD"> v </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        for (</span><span style="color:#91B4D5">long</span><span style="color:#A6ACCD"> r : s)</span></span>
<span class="line"><span style="color:#A6ACCD">            v </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> (v </span><span style="color:#91B4D5">*</span><span style="color:#A6ACCD"> x </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> r) </span><span style="color:#91B4D5">%</span><span style="color:#A6ACCD"> y;</span></span>
<span class="line"><span style="color:#A6ACCD">        </span></span>
<span class="line"><span style="color:#A6ACCD">        cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> v </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),e(p,s)}export{B as default,i as metadata};