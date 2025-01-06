---
title: coding-10
description: Kattis - stockprices
date: 2025-01-06
tags:
  - daily-coding
published: true
---
## Kattis – stockprices
Pretty nice problem. I learned a few nice tricks with C++ like the following for a `minPQ`
```cpp
priority_queue<T,vector<T>,greater<T>> q;
```
Furthermore, pairs use the second element as a tie-breaker, which took me a while to find out and cause several test cases to fail.
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

    int T, n, no_s, p, diff = 0;
    char op[10];

    scanf("%d", &T);

    while (T--) {
        scanf("%d", &n);

        pair<int, int> a = {-1, -1}, b;

        priority_queue<pair<int, int>> maxq;
        // very interesting how this works
        priority_queue<pair<int, int>, 
                vector<pair<int, int>>, 
                greater<pair<int, int>>> minq;

        while (n--) {
            scanf("%s %d %*s %*s %d", op, &no_s, &p);
            
            // these won't result in reference shenans
            // because the push operation copies the
            // object before inserting it into the pq
            if (op[0] == 'b') maxq.push({p, no_s});
            else if (op[0] == 's') minq.push({p, no_s});

            // be careful cuz pairs use second element
            // to break ties
            while (!minq.empty() && !maxq.empty() && minq.top().first <= maxq.top().first) {
                a = minq.top();
                b = maxq.top();
                diff = b.second - a.second;
                maxq.pop();
                minq.pop();
                if (diff > 0) maxq.push({b.first, diff});
                else if (diff < 0) minq.push({a.first, -diff});
            }

            if (minq.empty()) printf("- ");
            else printf("%d ", minq.top().first, minq.top().second);
            
            if (maxq.empty()) printf("- ");
            else printf("%d ", maxq.top().first, maxq.top().second);

            if (a.first == -1) printf("-\n");
            else printf("%d\n", a.first);
        }
    }

    return 0;
}
```