---
title: coding-23
description: UVa - armybuddies
date: 2025-06-22
tags:
  - daily-coding
published: true
---
# UVa – armybuddies
Two book-keeping arrays for whose to the left and right. Initially used linear scans, got idea from viewing [ackoroa](https://github.com/ackoroa/UVa-Solutions/blob/master/UVa%2012356%20-%20Army%20Buddies/src/UVa%2012356%20-%20Army%20Buddies.cpp)’s solution.
# my solution
```cpp
#include <bits/stdc++.h>


using namespace std;

int main() {
	int s, b, left[100005], right[100005];

	while(scanf("%d %d", &s, &b), s || b) {
		int dead[s] = {}, l, r;
		for (int i = 1; i <= s; i++) {
			left[i] = i - 1;
			right[i] = i + 1;
		}

		while (b--) {
			scanf("%d %d", &l, &r);		
			left[right[r]] = left[l];
			right[left[l]] = right[r];

			if (left[l] < 1) printf("*");
			else printf("%d", left[l]);

			if (right[r] > s) printf(" *\n");
			else printf(" %d\n", right[r]);
		}
		puts("-");
	} 

}
```
