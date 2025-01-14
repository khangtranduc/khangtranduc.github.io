---
title: coding-17
description: Kattis - traveltheskies
date: 2025-01-14
tags:
  - daily-coding
published: true
---
## Kattis – traveltheskies
The problem was not too bad, since the problem statement was quite verbose, I committed a few syntax errors and misinterpreted the problem slightly. I was actually supposed to do this problem yesterday, and I pretty much did but buggy.

I fixed the bugs today. This also means I should be doing another problem for today, but I am lazy so maybe not.
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

typedef vector<vector<pair<int, int>>> G;

int main() {
    // vector of graphs, one for each day

    // if simulation survives, we can assume that all the past days were
    // optimal

    int k, n, m, u, v, d, c, acc;
    scanf("%d %d %d", &k, &n, &m);

    vector<G> vg(n);

    for (d = 0; d < n; d++) vg[d].resize(k + 1);

    for (int i = 0; i < m; i++) {
        scanf("%d %d %d %d", &u, &v, &d, &c);
        d--;
        // u -> v
        vg[d][u].push_back({v, -c});
        // implies a v <- u
        // push arrivals to the following day
        // as each passenger can only take one flight a day
        if (d + 1 < n) vg[d + 1][v].push_back({u, c});
    }
    
    while (scanf("%d %d %d", &v, &d, &c) != EOF) {
        d--;
        vg[d][v].push_back({0, c});
    }

    for (d = 0; d < n; d++) {
        for (int i = 0; i <= k; i++) {
            acc = 0;
            for (auto y : vg[d][i]) acc += y.second;
            if (acc < 0) {
                printf("suboptimal\n");
                return 0;
            }
        }
        
        if (d + 1 < n) {
            for (int i = 1; i <= k; i++) {
                acc = 0;
                for (auto x : vg[d][i]) acc += x.second;
                vg[d + 1][i].push_back({0, acc});
            }
        }
    }

    printf("optimal\n");
    return 0;
}
```