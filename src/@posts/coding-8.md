---
title: coding-8
description: Kattis - thrown
date: 2025-01-04
tags:
  - daily-coding
published: true
---
## Kattis – thrown
This one is quite a straight-forward stacks problem. An annoying hitch was not initializing `curr` properly, resulting correct answer no my laptop but wrong solutions on Kattis. Another hitch was not account for cases where the throw number `p` is negative AND whose absolute magnitude exceeds that of `n`
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int do_throw(int n, int curr, int op) {
    if (op < 0) op = -(-op % n);
    return (curr + op + n) % n;
}

int main() {
    int n, k, op, curr = 0;

    cin >> n >> k;

    stack<int> ops;

    while (k--) {
        cin >> op;
        if (cin.fail()) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), ' ');
            cin >> op;
            while (op--) {
                curr = do_throw(n, curr, -ops.top());
                ops.pop();
            }
        }
        else {
            curr = do_throw(n, curr, op);
            ops.push(op);
        }
    }

    cout << curr << "\n";

    return 0;
}
```