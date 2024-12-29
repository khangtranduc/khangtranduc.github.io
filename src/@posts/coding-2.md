---
title: coding-2
description: Kattis - pivot
date: 2024-12-27
tags:
  - daily-coding
published: true
---
## Kattis – pivot
This one is not too bad either, we need to do two passes, one forwards and backwards. We also need to keep a set of candidate pivot elements. For the forward pass, we remove any elements that isn’t the largest so far from our set of candidates. We do something similar for the backwards pass, but in this case the smallest instead.

We can use C++ `unordered_set` for $O(1)$ `insert` and `erase`, which allows our algorithm to run in $O(n)$ time.

**My solution:**
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;

    scanf("%d", &n);

    int a[n];

    unordered_set<int> s;

    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
        s.insert(a[i]);
    }

    int largest = INT_MIN;

    for (int i = 0; i < n; i++) {
        if (a[i] > largest) largest = a[i];
        else s.erase(a[i]);
    }

    int smallest = INT_MAX;

    for (int i = n - 1; i >= 0; i--) {
        if (a[i] < smallest) smallest = a[i];
        else s.erase(a[i]);
    }

    printf("%d\n", s.size());

    return 0;
}
```