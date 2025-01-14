import{a as l,t as p}from"./disclose-version.w122s73S.js";import"./legacy.PYORki5n.js";import{L as o,M as e}from"./runtime.BcKyo7YD.js";import{h as t}from"./html.DxrNSgWl.js";const A={title:"coding-7",description:"Kattis - snapperhard",date:"2025-01-03T00:00:00.000Z",tags:["daily-coding"],published:!0};var c=p("<h2>Kattis – snapperhard</h2> <p>This was not too bad, it is a good refresher on bit manipulations. I might do more for practice in the subsequent days.</p> <p>The snaps function like additions. The configuration of the lamps is the binary representation of the number of snaps <code>K</code>.</p> <p>To figure out if a lamp connected to <code>N</code> is on, we just need to figure out if there is a contiguous sequence of 1s from LSB to N.</p> <h2>my solution</h2> <!>",1);function D(n){var s=c(),a=o(e(s),10);t(a,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">// Since 1 &#x3C;= N &#x3C;= 30, we can use a 32-bit integer bitmask</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    uint32_t</span><span style="color:#A6ACCD"> T, N, K;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> T;</span></span>
<span class="line"><span style="color:#A6ACCD">    </span></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;=</span><span style="color:#A6ACCD"> T; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">        cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> N </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> K;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // the bit representation of K will be the</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // final configuration of the snappers</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // after K snaps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // ON if there is a contiguous block from</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // start to N</span></span>
<span class="line"><span style="color:#767C9DB0;font-style:italic">        // for this, we flip bits and use the LSOne operation</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">        K </span><span style="color:#91B4D5">=</span><span style="color:#91B4D5"> ~</span><span style="color:#A6ACCD">K;</span></span>
<span class="line"><span style="color:#91B4D5">        uint32_t</span><span style="color:#A6ACCD"> T </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> K </span><span style="color:#91B4D5">&#x26;</span><span style="color:#91B4D5"> -</span><span style="color:#A6ACCD">K;</span></span>
<span class="line"><span style="color:#A6ACCD">        bitset</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#5DE4C7">32</span><span style="color:#91B4D5">></span><span style="color:#ADD7FF"> t</span><span style="color:#A6ACCD">(T);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">        cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5DE4C7">Case #</span><span style="color:#A6ACCD">"</span><span style="color:#91B4D5"> &#x3C;&#x3C;</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5DE4C7">: </span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        if (N </span><span style="color:#91B4D5">&#x3C;=</span><span style="color:#ADD7FF"> __builtin_ctz</span><span style="color:#A6ACCD">(T)) cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5DE4C7">ON</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        else cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5DE4C7">OFF</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),l(n,s)}export{D as default,A as metadata};
