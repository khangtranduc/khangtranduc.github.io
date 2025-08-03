---
title: coding-25
description: Kattis - baloni + Kattis - downtime
date: 2025-06-24
tags:
  - daily-coding
published: true
---
# Kattis – baloni
Quite a clever use of a histogram array indeed. Essentially, each lower balloons removes a previous upper baloon.
# Kattis – downtime
Sliding window idea, find the bottleneck and that will inform minimum number of servers needed. Had a bug regarding closing times of windows. I think my fix was quite elegant.
# my solution (baloni)
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

	int n, curr, champ = -1, arrows = 0;
	vector<int> arr;
	arr.resize(10000001, 0);

	scanf("%d", &n);

	while (n--) {
		scanf("%d", &curr);
		if (arr[curr + 1] > 0) arr[curr + 1] -= 1;
		arr[curr] += 1;
		champ = max(champ, curr);
	}

	for (int i = 0; i < champ + 1; i++)
		arrows += arr[i];

	printf("%d\n", arrows);	

	return 0;
}
```
# my solution (downtime)
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

	int n, k, v, processing = 0, champ = 0;
	scanf("%d %d", &n, &k);

	map<int, int> m;

	while (n--) {
		scanf("%d", &v);
		m[v]++;
		m[v + 1000]--;
	}


	for (auto x : m) {
		processing += x.second;		
		champ = max(champ, processing);
	}

	printf("%d\n", (champ + k - 1)/k);
	
	return 0;
}
```