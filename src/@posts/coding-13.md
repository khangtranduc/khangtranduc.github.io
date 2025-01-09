---
title: coding-13
description: Kattis - shiritori
date: 2025-01-09
tags:
  - daily-coding
published: true
---
## Kattis – shiritori
Quite a straight-forward problem. Normally, I would do another problem in this case, but today has been a slow day so maybe not.
## solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;

    unordered_set<string> s;

    char curr, prev;
    string str;

    for (int i = 0; i < n; i++) {
        cin >> str;
        curr = *str.begin();
        if (i == 0) prev = curr;
        if (curr != prev || s.count(str)) {
            cout << "Player " << i % 2 + 1 << " lost\n";
            return 0;
        }
        s.insert(str);
        prev = *str.rbegin();
    }

    cout << "Fair Game\n";

    return 0;
}
```