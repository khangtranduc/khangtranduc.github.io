---
title: coding-18
description: Kattis - almostunionfind
date: 2025-01-18
tags:
  - daily-coding
published: true
---
## Kattis – almostunionfind
This is a crazy problem, not because it is hard, but because it seemed that **weighted quick-union w/ path compression** is slower than **quick-find w/ child set**!!!!

The gap between the last `daily-coding` was because I was moving back to Princeton after winter break and this problem completely stumped me, I was getting TLE with my **weighted quick-union w/ path compression** and I can’t figure out how to improve it further.

My quick-find solution was ***heavily*** “inspired” by `mpfeifer1`’s [solution](https://github.com/mpfeifer1/Kattis/blob/master/almostunionfind.cpp).

Though I still believe that a **quick-union** solution is possible given how the hint was phrased in `halim`. You can help me find the speed-up/mistake if you are so inclined. I have also left my TLE **quick-union** solution below.
## my solution (quick-find)
```cpp
#include <bits/stdc++.h>

using namespace std;

#define vi vector<int>
#define vl vector<long>

int main() {

    int n, m, op, e1, e2, x, y;

    ios::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    while (cin >> n && cin >> m) {
        // create almost-UF data structure of size n

        // maintain the sz for weighted-UF for convenience
        vi p(n + 1);
        vl sum(n + 1);
        // tracks the child elements of a parent
        // speeds up quick find
        vector<set<int>> sets(n + 1);

        for (int i = 1; i <= n; i++) {
            p[i] = i;
            sum[i] = i;
            sets[i].insert(i);
        }

        while (m--) {
            cin >> op;
            switch (op) {
                case 1:
                    cin >> e1 >> e2;
                    
                    e1 = p[e1];
                    e2 = p[e2];

                    if (e1 == e2) break;

                    if (sets[e2].size() < sets[e1].size()) swap(e1, e2);
                    // ensures sets[e1].size() <= sets[e2].size()
                    for (auto x : sets[e1]) {
                        sets[e2].insert(x);
                        p[x] = e2;
                    }

                    sets[e1].clear();
                    sum[e2] += sum[e1];
                    break;
                case 2:
                    // move e1 to set containing e2
                    cin >> e1 >> e2;
                    
                    e2 = p[e2];

                    if (e2 == p[e1]) break;

                    sum[e2] += e1;
                    sum[p[e1]] -= e1;

                    sets[p[e1]].erase(e1);
                    sets[e2].insert(e1);

                    p[e1] = e2;

                    break;
                case 3:
                    cin >> e1;
                    cout << sets[p[e1]].size() << " " << sum[p[e1]] << "\n";
                    break;
            }
        }
    }

    return 0;
}
```
## my solution (quick-union)
```cpp
#include <bits/stdc++.h>

using namespace std;

#define vi vector<int>
#define vl vector<long>

int findRoot(int i, vi p, vi& next) {
    int curr = next[i];
    while (p[curr] != curr) {
        curr = p[curr];
        p[curr] = p[p[curr]];
    }
    next[i] = curr; // cache the root
    return curr;
}

int main() {

    int n, m, op, e1, e2, x, y;

    ios::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    while (cin >> n && cin >> m) {
        // create almost-UF data structure of size n

        // maintain the sz for weighted-UF for convenience
        vi p(n + 1), sz(n + 1), next(n + 1);
        vl sum(n + 1);

        for (int i = 1; i <= n; i++) {
            p[i] = i;
            next[i] = i;
            sum[i] = i;
            sz[i] = 1;
        }

        while (m--) {
            cin >> op;
            switch (op) {
                case 1:
                    cin >> e1 >> e2;
                    x = findRoot(e1, p, next);
                    y = findRoot(e2, p, next);
                    if (x == y) break;

                    if (sz[x] > sz[y]) swap(x, y);
                    // sz[x] <= sz[y] is ensured
                    p[x] = y;
                    next[e1] = y; // shortcut to root -> path-compression
                    sz[y] += sz[x];
                    sum[y] += sum[x];
                    break;
                case 2:
                    cin >> e1 >> e2;
                    x = findRoot(e1, p, next);
                    y = findRoot(e2, p, next);
                    if (x == y) break;

                    // adjust shortcut to point to other tree
                    // maintains parent structure
                    next[e1] = y;

                    sz[x]--; // remove i, so one less
                    sum[x] -= e1; // remove i from sum

                    sz[y]++;
                    sum[y] += e1;
                    break;
                case 3:
                    cin >> e1;
                    e2 = findRoot(e1, p, next);
                    cout << sz[e2] << " " << sum[e2] << "\n";
                    break;
                default:
                    return 0;
            }
        }
    }

    return 0;
}
```