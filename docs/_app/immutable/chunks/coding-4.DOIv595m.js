import{a as l,t as p}from"./disclose-version.w122s73S.js";import"./legacy.PYORki5n.js";import{L as o,M as e}from"./runtime.BcKyo7YD.js";import{h as c}from"./html.DxrNSgWl.js";const D={title:"coding-4",description:"Kattis - musicyourway",date:"2024-12-31T00:00:00.000Z",tags:["daily-coding"],published:!0};var t=p("<h2>Kattis – musicyourway</h2> <p>Not too bad, I learned a bit more about string processing in C++.</p> <p>On another note, I really need to stick to the “daily” commitment otherwise this will become “every-other-day-coding” instead, which sounds a lot more cumbersome.</p> <p><strong>My solution:</strong></p> <!>",1);function i(n){var s=t(),a=o(e(s),8);c(a,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">bool</span><span style="color:#ADD7FF"> cmp</span><span style="color:#A6ACCD"> (</span><span style="color:#A6ACCDC0">vector</span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#A6ACCDC0">string</span><span style="color:#A6ACCD">> </span><span style="color:#E4F0FB">a</span><span style="color:#A6ACCD">, </span><span style="color:#A6ACCDC0">vector</span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#A6ACCDC0">string</span><span style="color:#A6ACCD">> </span><span style="color:#E4F0FB">b</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int</span><span style="color:#E4F0FB"> dim</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">    return </span><span style="color:#E4F0FB">a</span><span style="color:#A6ACCD">[dim] </span><span style="color:#91B4D5">></span><span style="color:#E4F0FB"> b</span><span style="color:#A6ACCD">[dim];</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">    string s;</span></span>
<span class="line"><span style="color:#ADD7FF">    getline</span><span style="color:#A6ACCD">(cin, s);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    istringstream </span><span style="color:#ADD7FF">ss</span><span style="color:#A6ACCD">(s);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    map</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">string, </span><span style="color:#91B4D5">int></span><span style="color:#A6ACCD"> map;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    string word;</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    while (ss </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> word)</span></span>
<span class="line"><span style="color:#E4F0FB">        map</span><span style="color:#A6ACCD">[word] </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"><span style="color:#E4F0FB">    cin</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">ignore</span><span style="color:#A6ACCD">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    vector</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">vector</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">string</span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> songs;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    string s2;</span></span>
<span class="line"><span style="color:#A6ACCD">    while (n</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">        getline</span><span style="color:#A6ACCD">(cin, s2);</span></span>
<span class="line"><span style="color:#A6ACCD">        stringstream </span><span style="color:#ADD7FF">ss2</span><span style="color:#A6ACCD">(s2);</span></span>
<span class="line"><span style="color:#A6ACCD">        vector</span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD">string</span><span style="color:#91B4D5">></span><span style="color:#A6ACCD"> song;</span></span>
<span class="line"><span style="color:#A6ACCD">        while (ss2 </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> word) </span><span style="color:#ADD7FF">song</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">push_back</span><span style="color:#A6ACCD">(word);</span></span>
<span class="line"><span style="color:#ADD7FF">        songs</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">push_back</span><span style="color:#A6ACCD">(song);</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> n;</span></span>
<span class="line"><span style="color:#91B4D5">    int</span><span style="color:#E4F0FB"> cat</span><span style="color:#A6ACCD">[n];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; cin </span><span style="color:#91B4D5">>></span><span style="color:#A6ACCD"> word; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) </span><span style="color:#E4F0FB">cat</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">=</span><span style="color:#E4F0FB"> map</span><span style="color:#A6ACCD">[word];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">    for (</span><span style="color:#91B4D5">auto</span><span style="color:#A6ACCD"> x : cat) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">        stable_sort</span><span style="color:#A6ACCD">(</span><span style="color:#ADD7FF">songs</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">begin</span><span style="color:#A6ACCD">(), </span><span style="color:#ADD7FF">songs</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">end</span><span style="color:#A6ACCD">(), </span></span>
<span class="line"><span style="color:#A6ACCD">            [</span><span style="color:#E4F0FB">x</span><span style="color:#A6ACCD">](</span><span style="color:#A6ACCDC0">vector</span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#A6ACCDC0">string</span><span style="color:#A6ACCD">> </span><span style="color:#E4F0FB">a</span><span style="color:#A6ACCD">, </span><span style="color:#A6ACCDC0">vector</span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#A6ACCDC0">string</span><span style="color:#A6ACCD">> </span><span style="color:#E4F0FB">b</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">                return </span><span style="color:#ADD7FF">a</span><span style="color:#A6ACCD">[x] </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#ADD7FF"> b</span><span style="color:#A6ACCD">[x];</span></span>
<span class="line"><span style="color:#A6ACCD">            &#125;);</span></span>
<span class="line"><span style="color:#A6ACCD">        cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> s </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        for (</span><span style="color:#91B4D5">auto</span><span style="color:#A6ACCD"> y: songs) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">            for (</span><span style="color:#91B4D5">auto</span><span style="color:#A6ACCD"> z : y) cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> z </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#A6ACCD"> "</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">            cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">        &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">        cout </span><span style="color:#91B4D5">&#x3C;&#x3C;</span><span style="color:#A6ACCD"> "</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">    &#125;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),l(n,s)}export{i as default,D as metadata};
