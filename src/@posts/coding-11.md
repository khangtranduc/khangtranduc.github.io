---
title: coding-11
description: Kattis - quickbrownfox
date: 2025-01-07
tags:
  - daily-coding
published: true
---
## Kattis – quickbrownfox
Direct Addressing Table (DAT) problem, which essentially means hashing problem but the hash function is the *identity*. Not too bad, got to use bitmasks again.

Ran into a hitch because implemented `LSOne` wrongly. The correct function is:
```cpp
T = (S & -S)
```
Note that the **negative sign is not the `~` (LOGICAL NOT) sign**
## my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;
    cin.ignore();

    string s;
    uint32_t mask;

    while (n--) {
        getline(cin, s);
        
        int j = 0;
        for (int i = 0; i < s.size(); i++)
            if (isalpha(s[i]))
                s[j++] = s[i];

        for (int i = 0; i < j; i++) {
            s[i] = tolower(s[i]);
            mask |= (1 << s[i] - 'a');
        }
        mask ^= (1 << 26) - 1;

        if (!mask) cout << "pangram\n";
        else {
            cout << "missing ";
            while (mask) {
                uint32_t T = mask & -mask; //LSOne
                cout << (char) ('a' + __builtin_ctz(T));
                mask &= ~T;
            }

            cout << "\n";
        }
    }
}
```