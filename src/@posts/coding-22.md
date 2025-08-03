---
title: coding-22
description: Kattis - jollyjumpers & UVa - poleposition
date: 2025-06-21
tags:
  - daily-coding
published: true
---
Done two problems today, quite slow, but hopefully things will speed up eventually.
# Kattis – jollyjumpers
Iteration and take diff, quite simple, took a while cuz I forgot C++ syntax.
# UVa – poleposition
Rank counting problem, wasn’t able to see the key at first, had to look at solutions.
# my solution (jolly)
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    bool flag;

    while(scanf("%d", &n) != EOF) {
        if (n <= 1) {
            printf("Jolly\n");
            scanf("%d", &n);
            continue;
        }
        int a[n - 1] = {0};
        int v, u;
        flag = false;
        scanf("%d", &v);
        for (int i = 0; i < n - 1; i++) {
            scanf("%d", &u);
            v = abs(v - u);
            if (v < 1 || v > n - 1){
                flag = true;
                continue;
            }
            a[v - 1]++;
            v = u;
        }
        for (int i = 0; i < n - 1; i++)
            if (a[i] != 1) {
                flag = true;
                break;
            }
        if (flag) printf("Not jolly\n");
        else printf("Jolly\n");
    }

    return 0;
}
```
## my solution (poleposition)
```cpp
#include <bits/stdc++.h>


using namespace std;

int main() {
	int n;
	
	while (scanf("%d", &n) != EOF && n) {
		int rank[10005] = {0}, err = 0, v, u;
		for (int i = 0; i < n; i++) {
			scanf("%d %d", &v, &u);
			// check out of range
			if (i + u < 0) err = 1;
			if (i + u >= n) err = 1;
			// check collision
			if (!err && rank[i + u]) err = 1; 
			if (err) continue;
			rank[i + u] = v; 
		}
		if (err) {
			puts("-1");
			continue;
		}
		printf("%d", rank[0]);
		for (int i = 1; i < n; i++)
			printf(" %d", rank[i]);
		puts("");
	}

	return 0;
}
```