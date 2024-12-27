---
title: coding-1
description: Starting new series of posts. UVa 10978 write up.
date: 2024-12-26
tags:
  - cs
  - daily-coding
published: true
---
## new series!
I am planning to start a habit where I solve a competitive programming problem a day. Initially, I will start out with the curated problem from Prof. Halim’s excellent series of competitive programming books. After finishing the books, I will move onto the code forces gym or any interesting coding problems.

The point of this series is to hopefully **keep me accountable** in this habit.
## UVa 10978 — “Let’s Play Magic!”
This is quite a simple problem, we just need to add the string of the card $x$ spaces after the point of consideration, skipping any spaces that already has cards in them.

This problem took quite a while as I haven’t touch C++ in a while, and both me and my laptop seems to rusty. I had to figure out what was wrong with msys2 and after that have to reacquaint myself with C++ programming. Needless to say, it took me a while to find out that C++ `string` don’t play nicely with `scanf` and using `scanf` messes with the `cin >>` operations as `scanf` apparently keeps a buffer.

**My final solution:**
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int N, n;
    while (true) {
        cin >> N;
        if (cin.fail() || !N) break;
        n = N;
        
        string ret[N];
        
        string a, b;
        int len, i = 0;

        while (n--) {
            cin >> a >> b;
            len = b.length();

            while (len) {
                if (ret[i] == "") len--;
                i++;
                if (i >= N) i = 0;
            }

            ret[(i - 1 + N) % N] = a;
        }
        
        for (int i = 0; i < N; i++) {
            if (i > 0 && i < N) cout << " ";
            cout << ret[i];
        }
        cout << endl;
    }
    return 0;
}
```
