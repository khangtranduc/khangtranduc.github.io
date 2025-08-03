---
title: first codeforces contest!
description: IAEPC Prelims and I got cooked
date: 2025-01-20
tags:
  - codeforces
published: true
---
No `daily-coding`s today because I finally did a codeforces contest! I was only able to pass the pre-tests for the first questions :((. Though I was able to attempt 4 questions.
## my solutions
### part A:
This one was quite straight-forward, which was I its the only one I actually solved 💀.
```cpp
#include <bits/stdc++.h>
     
using namespace std;
 
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
 
	int t, n, a, odds = 0, evens = 0;
	cin >> t;
	
	while (t--) {
		cin >> n;
		while (n--) {
			cin >> a;
			if (a % 2) odds++;
			else evens++;
		}
		cout << odds - 1 + 2 * ((bool) evens) << "\n";
		odds = 0; evens = 0;
	}
 
 
	return 0;
}
```
### part B:
I believe that you need to check for cases (below) for this problem. However, this code does not pass all the pre-tests.
```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
typedef vector<int> vi;
 
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
 
	int t, n, a;
	bool flag = false;
	cin >> t;
 
	map<int, int> m;
 
	// for every pair, find 2 more
	// only need to check the minimum num
	// nah, gotta check them all for case 2:
 
	while (t--) {
		cin >> n;
		while (n--) {
			cin >> a;
			if (!m.count(a)) m[a] = 1;
			else m[a] += 1;
		}
 
		for (auto it = m.begin(); !flag && it != m.end(); it++) {
			pair<int, int> x = *it, y, z;
			switch (x.second) {
				case 2:
					for (auto jt = m.begin(); !flag && jt != m.end(); jt++) {
						if (jt == it) continue;
						y = *jt;
						if (y.second >= 2) {
							// we're done (rectangle)
							flag = true;
							int i = 2;
							while (i--) cout << x.first << " ";
							cout << y.first << " " << y.first << "\n";
						}
						else {
							if (next(jt, 1) == m.end()) break;
							if (next(jt, 1) == it) z = *next(jt, 2);
							else z = *next(jt, 1);
							if (2 * x.first + y.first > z.first) {
								flag = true;
								cout << x.first << " " << x.first;
								cout << " " << y.first;
								cout << " " << z.first << "\n";
							}
						}
					}
					break;
				case 3:
					// check one more
					if (3 * x.first > (*next(it, 1)).first) {
						flag = true;
						int i = 3;
						while (i--) cout << x.first << " ";
						cout << (*next(it, 1)).first << "\n";
					}
					break;
				case 4:
					// we're done (square)
					flag = true;
					int i = 3;
					while (i--) cout << x.first << " ";
					cout << x.first << "\n";
					break;
			}
		}
		if (!flag) cout << -1 << "\n";
		flag = false;
		m.clear();
	}
 
	return 0;
}
```
### part C:
This one was quite confusing, I was trying to brainstorm a solution involving maybe use of a table? with elements $n_k(i)$ that represented the number of states where $k$ people to the left of $i$ are liars. Eventually, I got too confused and gave up.
### part D:
This solution I feel pretty proud about, essentially it erases the intersection of the two sets. Then it breaks the elements in $b$ into $x$ and $y$ as there is only one unordered pair $(x, y)$ such that $x + y = b$. `YES` if $a$ and $b$ becomes empty and `NO` if we encounter an impossible situation.

Unfortunately, I just missed the deadline, so I wasn’t able to submit this. I will submit it to the practice judge later when that becomes available.

Edit: It got TLE :((
```cpp
#include <bits/stdc++.h>

using namespace std;

typedef multiset<int> ui;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    int t, n, m, a, b;
    long long sa = 0, sb = 0;
    cin >> t;

    // first pass to remove all common elements
    // is there any point saving? nah
    // for the rest, first do a sum check
    // break down each element in b into common elements
    // do one pass to remove
    // repeat

    ui va, vb, vaa, vbb;

    while (t--) {
        cin >> n >> m;
        
        va.clear();
        vb.clear();
        sa = 0; sb = 0;

        while (n--) {
            cin >> a;
            sa += a;
            va.insert(a);
        }
        while (m--) {
            cin >> b;
            sb += b;
            vb.insert(b);
        }

        if (sb != sa) {
            cout << "NO\n";
            continue;
        }

        while (vb.size() > 0 && va.size() > 0 && *vb.rbegin() >= *va.rbegin()) {
            // erase elements
            for (auto x : va) {
                // add abs(vb.count(x) - va.count(x));
                // to vaa and vbb depending on direction;
                // skip over elements already added
                int diff = vb.count(x) - va.count(x);
                if (diff > 0 && !vbb.count(x)) 
                    while (diff--) vbb.insert(x);
                else if (diff < 0 && !vaa.count(x))
                    while (diff++) vaa.insert(x);
            }
            for (auto x : vb) {
                int diff = vb.count(x) - va.count(x);
                if (diff > 0 && !vbb.count(x)) 
                    while (diff--) vbb.insert(x);
                else if (diff < 0 && !vaa.count(x))
                    while (diff++) vaa.insert(x);
            }
            va = vaa;
            vb.clear();
            // break elements
            for (auto x : vbb) {
                vb.insert(x/2);
                vb.insert(x/2 + (x%2));
            }
            vaa.clear();
            vbb.clear();
        }

        if (vb.size() > 0 || va.size() > 0) cout << "NO\n";
        else cout << "YES\n";
    }    

    return 0;
}
```