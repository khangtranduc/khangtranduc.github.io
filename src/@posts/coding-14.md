---
title: coding-14
description: Kattis - awkwardparty & Kattis - compoundwords
date: 2025-01-11
tags:
  - daily-coding
published: true
---
Today’s problems are a bit free, so I have decided to do 2 of them. They are: Kattis – awkwardparty and Kattis – compoundwords. The solution involves straightforward use of `unordered_map` and `set` (bBST) respectively.
## my solution (awkwardparty)
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

    int n, c, lvl;
    cin >> n;

    lvl = n;

    unordered_map<int, int> m;

    for (int i = 0; i < n; i++) {
        cin >> c;
        if (m.count(c)) lvl = min(lvl, i - m[c]);
        m[c] = i;
    }

    cout << lvl << "\n";

    return 0;
}
```
## my solution (compoundwords)
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    string w;
    vector<string> words;
    set<string> s;

    while (cin >> w) words.push_back(w);

    for (int i = 0; i < words.size(); i++)
        for (int j = 0; j < words.size(); j++) {
            w = words[i];
            if (i != j) s.insert(w.append(words[j]));
        }

    for (auto x : s) cout << x << "\n";
}
```