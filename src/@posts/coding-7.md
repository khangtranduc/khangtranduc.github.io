---
title: coding-7
description: Kattis - snapperhard
date: 2025-01-03
tags:
  - daily-coding
published: true
---
## Kattis – snapperhard
This was not too bad, it is a good refresher on bit manipulations. I might do more for practice in the subsequent days.

The snaps function like additions. The configuration of the lamps is the binary representation of the number of snaps `K`.

To figure out if a lamp connected to `N` is on, we just need to figure out if there is a contiguous sequence of 1s from LSB to N.
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

// Since 1 <= N <= 30, we can use a 32-bit integer bitmask

int main() {

    uint32_t T, N, K;

    cin >> T;
    
    for (int i = 1; i <= T; i++) {
        cin >> N >> K;

        // the bit representation of K will be the
        // final configuration of the snappers
        // after K snaps

        // ON if there is a contiguous block from
        // start to N
        // for this, we flip bits and use the LSOne operation

        K = ~K;
        uint32_t T = K & -K;
        bitset<32> t(T);

        cout << "Case #" << i << ": ";
        if (N <= __builtin_ctz(T)) cout << "ON\n";
        else cout << "OFF\n";
    }
    

    return 0;
}
```