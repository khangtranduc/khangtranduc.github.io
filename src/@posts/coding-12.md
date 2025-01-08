---
title: coding-12
description: Kattis - freefood
date: 2025-01-08
tags:
  - daily-coding
published: true
---
## Kattis – freefood
This is a classic sweep-line problem, nevertheless, I still learned something out of it.
1. It is convenient to use `#define` for `minPQ`.
``` cpp
#define min_pq priority_queue<pair<int, int>,vector<pair<int, int>>,greater<pair<int, int>>>
```
2. for range problems, double-counting can be eliminated by **not including the end point**. Now I understand why it is programming convention to exclude these endpoints.
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

#define min_pq priority_queue<pair<int, int>,vector<pair<int, int>>,greater<pair<int, int>>>

int main() {
    int n, start, end;
    scanf("%d", &n);

    bitset<101> mask; // mask
    int cnt = 0, prev = 0, curr;

    min_pq startPQ;
    min_pq endPQ;
    
    for (int i = 0; i < n; i++) {
        scanf("%d %d", &start, &end);
        startPQ.push({start, i});
        endPQ.push({end + 1, i});
    }

    while (!endPQ.empty()) {
        // can't set curr to pair<int, int> cuz funky pair comparison
        if (!startPQ.empty() && startPQ.top().first <= endPQ.top().first) 
            curr = startPQ.top().first;
        else curr = endPQ.top().first;

        if (!startPQ.empty() && startPQ.top() <= endPQ.top()) {
            // jump to startPQ
            if (mask.any()) cnt += curr - prev;
            mask[startPQ.top().second] = 1;
            startPQ.pop();
        }
        else if (startPQ.empty() || startPQ.top() > endPQ.top()) {
            if (mask.any()) cnt += curr - prev;
            mask[endPQ.top().second] = 0;
            endPQ.pop();
        }
        prev = curr;
    }

    printf("%d\n", cnt);
}
```