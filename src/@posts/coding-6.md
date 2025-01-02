---
title: coding-6
description: Kattis - magicsequence
date: 2025-01-02
tags:
  - daily-coding
published: true
---
# Kattis – magicsequence
This took an especially long time due to Kattis hiding its test cases. This lead me to implementing wrong fixes. For example, I thought I needed to use `BigInteger`, so I ended up reimplementing the entire thing in java only to realize that it was unnecessary. Nevertheless, I learned quite a lot from this problem, namely.
## radix sort
Counting sort but for each “digit”, in brackets because that depends on what base (or radix) is used. The formula for the `i`-th “digit” given a radix is quite simple:
```cpp
(number / radix^i) % radix
```

After this, it is a matter of performing a **stable** counting sort on progressive more significant “digits”.
## stable counting sort
I got this algorithm from Prof. Halim’s Competitive Programming I book. Essentially, it is counting sort with the following additions:
- we convert the usual count array to a cumulative count.
- using this cumulative count, we can insert the elements from the original array in the sorted order, while still preserving relative ordering between elements.
## bit-wise shenanigans
With the two above methods, even with a carefully chosen radix (as hinted in Prof. Halim’s book), I still got TLE. 

After browsing the internet, I found a solution by [Rene Argento](https://github.com/reneargento/competitive-programming-4/blob/master/src/chapter2/section2/g/special/sorting/problems/MagicSequence.java) that employed an interesting way speed up the “digit”-extraction operation through bit-wise operations. This is quite clever and it got me over the TLE.

He also implemented an array swapping procedure to not have to create a new `temp` array per radix sort, which would speed things up further, but it was not necessary for me to clear the TLE.
# my solution
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

    int tc;

    cin >> tc;

    while (tc--) {
        int n, a, b, c, x, y;
        cin >> n >> a >> b >> c >> x >> y;

        long s[n];
        s[0] = a;
        long largest = a;
        for (int i = 1; i < n; i++) {
            s[i] = (s[i-1] * b + a) % c;
            largest = max(largest, s[i]);
        }

        int exp = 15;
        int radix = 2 << exp;

        // note the stable counting sort from halim
        for (long i = 1; (2l << i) < largest; i += exp) {
            int count[radix] = {0};

            for (int j = 0; j < n; j++)
                count[(s[j] >> (i - 1)) & (radix - 1)]++;

            // computing the prefix sum
            for (int j = 1; j < radix; j++) {
                count[j] += count[j - 1];
            }
            
            long temp[n];
            for (int j = n - 1; j >= 0; j--)
                temp[--count[(s[j] >> (i - 1)) & (radix - 1)]] = s[j];

            for (int j = 0; j < n; j++)
                s[j] = temp[j];
        }

        long v = 0;
        for (long r : s)
            v = (v * x + r) % y;
        
        cout << v << "\n";
    }

    return 0;
}
```