---
title: coding-21
description: Kattis - supercomputer
date: 2025-01-26
tags:
  - daily-coding
published: true
---
## Kattis – supercomputer
Quite a straight-forward application of [Fenwick trees](/posts/coding-19).
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

#define LSOne(S) (S & -S)

class fenwick {
    private:
    vector<int> ft;

    public:
    fenwick(int m) { ft.assign(m + 1, 0); }

    void update(int i, int v) {
        for (; i < ft.size(); i += LSOne(i))
            ft[i] += v;
    }

    long rsq(int j) {
        long sum = 0;
        for (; j > 0; j -= LSOne(j))
            sum += ft[j];
        return sum;
    }
};

int main() {

    int n, k, u, v;

    cin >> n >> k;

    fenwick tree(n);
    vector<bool> vec;
    vec.assign(n + 1, 0);

    char op;

    while (k--) {
        cin >> op;
        switch (op) {
            case 'F':
                cin >> u;
                if (vec[u]) tree.update(u, -1);
                else tree.update(u, 1);
                vec[u] = !vec[u];
                break;
            case 'C':
                cin >> u >> v;
                cout << tree.rsq(v) - tree.rsq(u - 1) << "\n";
                break;
        }
    }

    return 0;
}
```