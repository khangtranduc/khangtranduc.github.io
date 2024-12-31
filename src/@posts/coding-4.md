---
title: coding-4
description: Kattis - musicyourway
date: 2024-12-31
tags:
  - daily-coding
published: true
---
## Kattis – musicyourway
Not too bad, I learned a bit more about string processing in C++.

On another note, I really need to stick to the “daily” commitment otherwise this will become “every-other-day-coding” instead, which sounds a lot more cumbersome.

**My solution:**
```cpp
#include <bits/stdc++.h>

using namespace std;

bool cmp (vector<string> a, vector<string> b, int dim) {
    return a[dim] > b[dim];
}

int main() {
    string s;
    getline(cin, s);

    istringstream ss(s);

    map<string, int> map;

    string word;
    int i = 0;

    while (ss >> word)
        map[word] = i++;

    int n;
    cin >> n;
    cin.ignore();

    vector<vector<string>> songs;

    string s2;
    while (n--) {
        getline(cin, s2);
        stringstream ss2(s2);
        vector<string> song;
        while (ss2 >> word) song.push_back(word);
        songs.push_back(song);
    }

    cin >> n;
    int cat[n];

    for (i = 0; cin >> word; i++) cat[i] = map[word];

    for (auto x : cat) {
        stable_sort(songs.begin(), songs.end(), 
            [x](vector<string> a, vector<string> b) {
                return a[x] < b[x];
            });
        cout << s << "\n";
        for (auto y: songs) {
            for (auto z : y) cout << z << " ";
            cout << "\n";
        }
        cout << "\n";
    }
}
```