import{a as e,t as c}from"./disclose-version.gCkiB1NA.js";import"./legacy.BBWxuCkZ.js";import{L as n,M as r}from"./runtime.DIMTQvhB.js";import{h as p}from"./html.BSu0e-bj.js";const i={title:"coding-25",description:"Kattis - baloni",date:"2025-06-24T00:00:00.000Z",tags:["daily-coding"],published:!0};var t=c("<h2>Kattis – baloni</h2> <p>Quite a clever use of a histogram array indeed. Essentially, each lower balloons removes a previous upper baloon.</p> <h2>Kattis – downtime</h2> <p>Sliding window idea, find the bottleneck and that will inform minimum number of servers needed. Had a bug regarding closing times of windows. I think my fix was quite elegant.</p> <h2>my solution (baloni)</h2> <!> <h2>my solution (downtime)</h2> <!>",1);function B(l){var s=t(),a=n(r(s),10);p(a,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">	int</span><span style="color:#A6ACCD"> n, curr, champ </span><span style="color:#91B4D5">=</span><span style="color:#91B4D5"> -</span><span style="color:#5DE4C7">1</span><span style="color:#A6ACCD">, arrows </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">	vector</span><span style="color:#91B4D5">&#x3C;int></span><span style="color:#A6ACCD"> arr;</span></span>
<span class="line"><span style="color:#E4F0FB">	arr</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">resize</span><span style="color:#A6ACCD">(</span><span style="color:#5DE4C7">10000001</span><span style="color:#A6ACCD">, </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">	scanf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	while (n</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">		scanf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">curr);</span></span>
<span class="line"><span style="color:#A6ACCD">		if (</span><span style="color:#ADD7FF">arr</span><span style="color:#A6ACCD">[curr </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">></span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">) </span><span style="color:#ADD7FF">arr</span><span style="color:#A6ACCD">[curr </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">] </span><span style="color:#91B4D5">-=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">		arr</span><span style="color:#A6ACCD">[curr] </span><span style="color:#91B4D5">+=</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">		champ </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(champ, curr);</span></span>
<span class="line"><span style="color:#A6ACCD">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> champ </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">; i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">)</span></span>
<span class="line"><span style="color:#A6ACCD">		arrows </span><span style="color:#91B4D5">+=</span><span style="color:#E4F0FB"> arr</span><span style="color:#A6ACCD">[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">	printf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, arrows);	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`);var o=n(a,4);p(o,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">	int</span><span style="color:#A6ACCD"> n, k, v, processing </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">, champ </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">	scanf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#E4F0FB"> %d</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">n, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">k);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	map</span><span style="color:#91B4D5">&#x3C;int</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">int></span><span style="color:#A6ACCD"> m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	while (n</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">		scanf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, </span><span style="color:#91B4D5">&#x26;</span><span style="color:#A6ACCD">v);</span></span>
<span class="line"><span style="color:#ADD7FF">		m</span><span style="color:#A6ACCD">[v]</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">		m</span><span style="color:#A6ACCD">[v </span><span style="color:#91B4D5">+</span><span style="color:#5DE4C7"> 1000</span><span style="color:#A6ACCD">]</span><span style="color:#91B4D5">--</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">	&#125;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	for (</span><span style="color:#91B4D5">auto</span><span style="color:#A6ACCD"> x : m) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">		processing </span><span style="color:#91B4D5">+=</span><span style="color:#ADD7FF"> x</span><span style="color:#A6ACCD">.</span><span style="color:#E4F0FB">second</span><span style="color:#A6ACCD">;		</span></span>
<span class="line"><span style="color:#A6ACCD">		champ </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(champ, processing);</span></span>
<span class="line"><span style="color:#A6ACCD">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADD7FF">	printf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, (champ </span><span style="color:#91B4D5">+</span><span style="color:#A6ACCD"> k </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">)</span><span style="color:#91B4D5">/</span><span style="color:#A6ACCD">k);</span></span>
<span class="line"><span style="color:#A6ACCD">	</span></span>
<span class="line"><span style="color:#A6ACCD">	return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),e(l,s)}export{B as default,i as metadata};
