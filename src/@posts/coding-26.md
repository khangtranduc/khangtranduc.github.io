---
title: coding-26
description: kattis - greedilyincreasingsequence
date: 2025-06-25
tags:
  - daily-coding
published: true
---
# Kattis – greedilyincreasingsequence
Chill problem

# my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

	int n, v;
	vector<int> arr;

	scanf("%d", &n);
	scanf("%d", &v);
	arr.push_back(v);
	for (int i = 1; i < n; i++) {
		scanf("%d", &v);
		if (v > arr.back())
			arr.push_back(v);
	}

	printf("%d\n", arr.size());

	for (auto x : arr)
		printf("%d ", x);

	puts("");

	return 0;
}
```