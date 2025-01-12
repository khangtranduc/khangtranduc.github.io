---
title: coding-15
description: Kattis - srednji
date: 2025-01-11
tags:
  - daily-coding
published: true
---
## Kattis – srednji
This is a pretty tough one for me. I wasn’t able to figure it out and had to consult a solution [online](https://github.com/mpfeifer1/Kattis/blob/master/srednji.cpp). 

I think I get how it works. We look left, counting the number of elements larger than $B$. When we look right, if there is that number of elements — say $f$ — less than $B$, then all the left ranges + that right range forms a valid subset (where valid means it satisfies the problem conditions).

The negative sign aggregation line
```cpp
ans += map[-no_larger]
```
reflects that fact that we want to balance out the whatever number of elements larger than $B$ on the other side.
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n, b, k;
    cin >> n >> b;
    vector<int> a(n);

    for (int i = 0; i < n; i++) {
        cin >> a[i];
        if (a[i] == b) k = i;
    }

    map<int, int> m;
    m[0] = 1; // subset containing only itself
    int no_larger = 0;

    for (int i = k - 1; i >= 0; i--) {
        if (a[i] > b) no_larger++;
        else no_larger--;
        m[no_larger]++;
    }

    int ans = m[0];
    no_larger = 0;
    for (int i = k + 1; i < n; i++) {
        if (a[i] > b) no_larger++;
        else no_larger--;
        ans += m[-no_larger];
    }

    cout << ans << "\n";

    return 0;
}
```