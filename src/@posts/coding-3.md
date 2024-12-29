---
title: coding-3
description: Kattis - rings2
date: 2024-12-29
tags: 
published: true
---
## Kattis – rings2
Quite a tricky problem, I wasn’t used to 2D arrays so it took a while heckling with the `C++`syntax. Additionally, I also wasn’t used to algorithms whose running time depends on the number of rings 😅 (I just automatically discounted that as inefficient), perhaps there is a better algorithms.

I also missed yesterday :((.

In any case, **my solution is:**
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {

    int rows, cols;

    scanf("%u %u", &rows, &cols);
    
    int grid[rows + 2][cols + 2];

    for (int i = 0; i < rows + 2; i++) {
        grid[i][0] = false;
        grid[i][cols + 1] = false;
    }

    for (int j = 0; j < cols + 2; j++) {
        grid[0][j] = false;
        grid[rows + 1][j] = false;
    }

    for (int i = 1; i < rows + 1; i++) {
        for (int j = 1; j < cols + 1; j++) {
            char a;
            scanf(" %c", &a);
            grid[i][j] = (a == 'T');
        }
    }

    // Idea: scan through whole thing, everything is 1 initially
    // Anything not touching edge becomes 2
    // Anything not touching one becomes 3 and so on

    int count, nb = 0;

    do {
        count = 0;
        for (int i = 1; i < rows + 1; i++) {
            for (int j = 1; j < cols + 1; j++) {
                bool neihbouring = grid[i][j - 1] <= nb 
	                || grid[i][j + 1] <= nb 
	                || grid[i - 1][j] <= nb 
	                || grid[i + 1][j] <= nb;
                if (grid[i][j] && !neihbouring) {
                    grid[i][j] = nb + 2;
                    count += 1;
                }
            }
        }
        nb += 1;
    } while (count > 0);

    bool twos = nb < 10;

    for (int i = 1; i < rows + 1; i++) {
        for (int j = 1; j < cols + 1; j++) {
            string to_print = grid[i][j] ? to_string(grid[i][j]) : "";
            if (twos) cout << setw(2) << right << setfill('.') << to_print;
            else cout << setw(3) << right << setfill('.') << to_print;
        }
        printf("\n");
    }

    return 0;
}
```