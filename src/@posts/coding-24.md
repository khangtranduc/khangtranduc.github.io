---
title: coding-24
description: UVa - sleepinginhostels
date: 2025-06-23
tags:
  - daily-coding
published: true
---
# UVa – sleepinginhostels
Quite a straightforward problem, compare spaces in between versus spaces at the edges, issue was just chasing down the corner cases.
# my solution
```cpp
#include <bits/stdc++.h>


using namespace std;

int main() {

	string beds;
	int champ, curr, left;
	bool first;

	while (getline(cin, beds)) {
		first = true;
		champ = -1;
		curr = 0;
		for (int i = 0; i < beds.length(); i++) {
			if (beds[i] == '.') curr++;
			else if (beds[i] == 'X') {
				if (first) {
					first = false;
					left = curr;	
				}
				champ = max(champ, curr);
				curr = 0;
			}
		}
		champ = (champ - 1)/2;
		left = max(left, curr) - 1;
		if (left < champ)
			printf("%d\n", champ);
		else
			printf("%d\n", left);
	}

	return 0;
}
```