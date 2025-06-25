import{a as l,t as p}from"./disclose-version.gCkiB1NA.js";import"./legacy.BBWxuCkZ.js";import{L as o,M as e}from"./runtime.DIMTQvhB.js";import{h as c}from"./html.BSu0e-bj.js";const y={title:"coding-24",description:"UVa - sleepinginhostels",date:"2025-06-23T00:00:00.000Z",tags:["daily-coding"],published:!0};var t=p("<h2>UVa – sleepinginhostels</h2> <p>Quite a straightforward problem, compare spaces in between versus spaces at the edges, issue was just chasing down the corner cases.</p> <h2>my solution</h2> <!>",1);function i(a){var s=t(),n=o(e(s),6);c(n,()=>`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#A6ACCD">#include </span><span style="color:#A6ACCD">&#x3C;</span><span style="color:#5DE4C7">bits/stdc++.h</span><span style="color:#A6ACCD">></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#5DE4C7">using</span><span style="color:#91B4D5"> namespace</span><span style="color:#91B4D5"> std</span><span style="color:#A6ACCD">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91B4D5">int</span><span style="color:#ADD7FF"> main</span><span style="color:#A6ACCD">() &#123;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	string beds;</span></span>
<span class="line"><span style="color:#91B4D5">	int</span><span style="color:#A6ACCD"> champ, curr, left;</span></span>
<span class="line"><span style="color:#91B4D5">	bool</span><span style="color:#A6ACCD"> first;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	while (</span><span style="color:#ADD7FF">getline</span><span style="color:#A6ACCD">(cin, beds)) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">		first </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> true</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">		champ </span><span style="color:#91B4D5">=</span><span style="color:#91B4D5"> -</span><span style="color:#5DE4C7">1</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">		curr </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">		for (</span><span style="color:#91B4D5">int</span><span style="color:#A6ACCD"> i </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">; i </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#ADD7FF"> beds</span><span style="color:#A6ACCD">.</span><span style="color:#ADD7FF">length</span><span style="color:#A6ACCD">(); i</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">			if (</span><span style="color:#ADD7FF">beds</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">==</span><span style="color:#A6ACCD"> '</span><span style="color:#5DE4C7">.</span><span style="color:#A6ACCD">'</span><span style="color:#A6ACCD">) curr</span><span style="color:#91B4D5">++</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">			else if (</span><span style="color:#ADD7FF">beds</span><span style="color:#A6ACCD">[i] </span><span style="color:#91B4D5">==</span><span style="color:#A6ACCD"> '</span><span style="color:#5DE4C7">X</span><span style="color:#A6ACCD">'</span><span style="color:#A6ACCD">) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">				if (first) &#123;</span></span>
<span class="line"><span style="color:#A6ACCD">					first </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> false</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">					left </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> curr;	</span></span>
<span class="line"><span style="color:#A6ACCD">				&#125;</span></span>
<span class="line"><span style="color:#A6ACCD">				champ </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(champ, curr);</span></span>
<span class="line"><span style="color:#A6ACCD">				curr </span><span style="color:#91B4D5">=</span><span style="color:#5DE4C7"> 0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">			&#125;</span></span>
<span class="line"><span style="color:#A6ACCD">		&#125;</span></span>
<span class="line"><span style="color:#A6ACCD">		champ </span><span style="color:#91B4D5">=</span><span style="color:#A6ACCD"> (champ </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">)</span><span style="color:#91B4D5">/</span><span style="color:#5DE4C7">2</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">		left </span><span style="color:#91B4D5">=</span><span style="color:#ADD7FF"> max</span><span style="color:#A6ACCD">(left, curr) </span><span style="color:#91B4D5">-</span><span style="color:#5DE4C7"> 1</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">		if (left </span><span style="color:#91B4D5">&#x3C;</span><span style="color:#A6ACCD"> champ)</span></span>
<span class="line"><span style="color:#ADD7FF">			printf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, champ);</span></span>
<span class="line"><span style="color:#A6ACCD">		else</span></span>
<span class="line"><span style="color:#ADD7FF">			printf</span><span style="color:#A6ACCD">(</span><span style="color:#A6ACCD">"</span><span style="color:#E4F0FB">%d</span><span style="color:#5FB3A1">&#92;n</span><span style="color:#A6ACCD">"</span><span style="color:#A6ACCD">, left);</span></span>
<span class="line"><span style="color:#A6ACCD">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD">	return </span><span style="color:#5DE4C7">0</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`),l(a,s)}export{i as default,y as metadata};
