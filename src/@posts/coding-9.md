---
title: coding-9
description: Kattis - delimitersoup & Kattis - teque
date: 2025-01-05
tags:
  - daily-coding
published: true
---
Since the problems today aren’t too hard, and I desperately want to move on to the next chapter, I have decided to do a 2-for-1 special for today.
## Kattis - delimitersoup
Standard stack bracket matching problem, I used a map to match the different types of bracket for cleanliness.

## Kattis - teque
A bit trickier, I used two deques to represent two halves of the array. I ran into quite a bit of trouble as I forgot to rebalance the deques after `push_front` or `push_back` only remembering to rebalance for `push_middle`. After figuring that out, I got the problem pretty quickly.

## my solution (delimiter soup)
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    string str;
    cin >> n;
    cin.ignore();
    getline(cin, str);

    char c;

    stack<char> s;

    map<char, int> m = {
        {'(', 1},
        {'[', 2},
        {'{', 3},
        {')', 1},
        {']', 2},
        {'}', 3},
    };

    for (int i = 0; i < n; i++) {
        c = str[i];
        if (c == ' ') continue;
        if (c == '(' || c == '[' || c == '{')
            s.push(c);
        else {
            if (s.empty() || m[c] != m[s.top()]) {
                cout << c << " " << i << endl;
                return 0;
            }
            s.pop();
        }
    }

    cout << "ok so far" << endl;

    return 0;
}
```

## my solution (teque)
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

    ios::sync_with_stdio(0);
    cin.tie(0);

    deque<int> a, b;

    int n, e;
    cin >> n;

    string op;

    while (n--) {
        cin >> op >> e;
        
        if (op[0] == 'g')
            if (e < a.size()) cout << a[e] << "\n";
            else cout << b[e - a.size()] << "\n";
        else if (op[5] == 'b') {
            b.push_back(e);
            if (b.size() > a.size()) {
                a.push_back(b.front());
                b.pop_front();
            }
        }
        else if (op[5] == 'f') {
            a.push_front(e);
            if (b.size() < a.size() - 1) {
                b.push_front(a.back());
                a.pop_back();
            }
        }
        else if (op[5] == 'm')
            if ((a.size() + b.size()) % 2) b.push_front(e);
            else a.push_back(e);
    }

    return 0;
}
```