---
title: coding-20
description: Kattis - justforsidekicks
date: 2025-01-25
tags:
  - daily-coding
published: true
---
Just took a break for a few days to focus on COS 217 placement test. I think it went quite well. Still waiting for results tho…
## [Kattis – justforsidekicks](https://open.kattis.com/problems/justforsidekicks)
Quite a simple problem but I brain-farted so it took me a while to actually figure out how to do it. Essentially keep 6 [Fenwick trees](/posts/coding-19), each tracking the cumulative frequency of one type of gem. Then keep another array `v[]` that keeps track of the value of each gem type.

I definitely need more practice.
## my solution
```cpp
#include <bits/stdc++.h>

#define LSOne(S) (S & -S)
#define N_GEMS 6

using namespace std;

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
    // get frequency of each gem type
    // cummulative frequency of each gem type at each index
    // simple multiplication at op 3
    // simple changing of v at op 2

    // each fenwick counts cummulative up to that point
    // ofc there is mapping [1...n] -> [0...n)

    int n, q, op, e1, e2;

    cin >> n >> q;


    vector<int> v(N_GEMS);

    for (int i = 0; i < v.size(); i++)
        cin >> v[i];

    vector<char> c(n + 1);
    fenwick f1(n + 1), f2(n + 1), f3(n + 1), f4(n + 1), f5(n + 1), f6(n + 1);
    vector<fenwick> trees = {f1, f2, f3, f4, f5, f6};

    for (int i = 1; i <= n; i++){
        cin >> c[i];
        c[i] = c[i] - '1';
        trees[c[i]].update(i, 1);
    }

    while (q--) {
        cin >> op >> e1 >> e2;

        switch (op) {
            case 1:
                // replace gem @ e1 with e2 gem type
                trees[c[e1]].update(e1, -1);
                trees[--e2].update(e1, 1);
                c[e1] = e2;
                break;
            case 2:
                // change value of e1 gem to e2
                v[--e1] = e2;
                break;  
            case 3:
                // range sum query [e1, e2]
                long sum = 0;
                for (int i = 0; i < N_GEMS; i++)
                    sum += (trees[i].rsq(e2) - trees[i].rsq(e1 - 1)) * v[i];
                cout << sum << "\n";
                break;
        }
    }

    return 0;
}
```