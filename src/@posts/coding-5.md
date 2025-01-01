---
title: coding-5
description: Kattis - mali
date: 2025-01-31
tags:
  - daily-coding
published: true
---
## Kattis – mali
The basic algorithm is easy to spot, the hard part is figuring out a way to get it under the time limit. We just need to exploit the fact that the numbers given is under 100.

What’s weird however, is that the bookkeeping for `tempA` and `tempB` (zeroing) is needed for the solution to be correct? From my understanding, we never touch them again aside from the ones that doesn’t involve zeroing. Maybe it’s just some corner case.

**My solution:**
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

    int n;
    cin >> n;

    // 101 so that no linear scan to find max elem
    // and 101 is quite small
    int freqA[101] = {0}, freqB[101] = {0};

    while (n--) {
        int A, B;
        cin >> A >> B;

        freqA[A]++;
        freqB[B]++;

        int tempA[101], tempB[101];

        copy(freqA, freqA + 101, tempA);
        copy(freqB, freqB + 101, tempB);

        int i = 0, j = 100, maximal = INT_MIN;
        while (i < 101 && j >= 0) {
            if (tempA[i] == 0) i++;
            else if (tempB[j] == 0) j--;
            else if (tempA[i] == tempB[j]) {
                maximal = max(maximal, i + j);
                tempA[i] = 0;
                tempB[j] = 0;
                i++;
                j--;
            }
            else if (tempA[i] > tempB[j]) {
                maximal = max(maximal, i + j);
                tempA[i] -= tempB[j];
                tempB[j] = 0;
                j--;
            }
            else if (tempA[i] < tempB[j]) {
                maximal = max(maximal, i + j);
                tempB[j] -= tempA[i];
                tempA[i] = 0;
                i++;
            }
        }
        
        cout << maximal << "\n";
    }    

    return 0;
}
```