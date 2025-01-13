---
title: coding-16
description: Kattis - gcpc
date: 2025-01-12
tags:
  - daily-coding
published: true
---
## Kattis – gcpc
Completed today’s daily coding a bit later than the others, which can all be attributed to waking up late (right now is 9:11pm). This problem is really interesting because I got to used a cool trick from halim. That is **policy-based data structures**.

Essentially, this gives me an STL-like tree that also implements fast `select` and `rank` operations, called an “ordered statistics tree” by Halim. 

An example (from Halim’s book):
```cpp
#include <bits/stdc++.h> 
using namespace std; 
#include <bits/extc++.h> // pbds 

using namespace __gnu_pbds; 

typedef tree<int, null_type, less<int>,
			rb_tree_tag, tree_order_statistics_node_update> ost; 

int main() { 
	int n = 9; 
	int A[] = { 2, 4, 7,10,15,23,50,65,71}; 
	// as in Chapter 2 ost tree; 
	for (int i = 0; i < n; ++i) // O(n log n) 
		tree.insert(A[i]);
	// O(log n) select
	cout << *tree.find_by_order(0) << "\n"; // 1-smallest = 2 
	cout << *tree.find_by_order(n-1) << "\n"; // 9-smallest/largest = 71 
	cout << *tree.find_by_order(4) << "\n"; // 5-smallest = 15 
	
	// O(log n) rank 
	cout << tree.order_of_key(2) << "\n"; // index 0 (rank 1) 
	cout << tree.order_of_key(71) << "\n"; // index 8 (rank 9) 
	cout << tree.order_of_key(15) << "\n"; // index 4 (rank 5) 
	return 0; 
}
```
## my solution
```cpp
#include <bits/stdc++.h>

#include <bits/extc++.h>

using namespace std;

using namespace __gnu_pbds;

typedef tree<pair<pair<int, int>, int>, null_type, greater<pair<pair<int, int>, int>>, rb_tree_tag, 
            tree_order_statistics_node_update> ost;

int main() {
    int n, m, i, b;
    scanf("%d %d", &n, &m);
    
    ost tree;
    unordered_map<int, pair<int, int>> mp;

    for (int i = 1; i <= n; i++) {
        tree.insert({{0, 0}, -i});
        mp[i] = {0, 0};
    }

    while (m--) {
        scanf("%d %d", &i, &b);
        tree.erase({mp[i], -i});
        mp[i] = {mp[i].first + 1, mp[i].second - b};
        tree.insert({mp[i], -i});
        printf("%d\n", tree.order_of_key({mp[1], 1}) + 1);
    }
}
```