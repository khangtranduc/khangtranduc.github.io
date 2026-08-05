---
title: 'OU Trading'
description: An Avellaneda–Lee OU mean-reversion strategy, residualized against embedding k-NN peers.
date: 2026-08-05
published: true
tags:
  - cs
  - vertical-slice
project: asemb               # links this post into the OU-trading-on-Asset-Embeddings dev log
---

The trading stage follows [Avellaneda–Lee's](https://doi.org/10.1080/14697680903124632) OU s-score strategy: residualize each stock's daily return against a peer factor, model the residual as an Ornstein–Uhlenbeck (mean-reverting) process, and trade the contrarian s-score. I residualize each stock against its **embedding k-NN peer basket** (k = 20).

**The pipeline:** a 60-day trailing residual → AR(1) fit → keep only fast reverters (κ > 8.4) → s-score → bang-bang, dollar-neutral trades (enter at |s| > 1.25, exit at s = −0.5 long / +0.75 short) → 10 bps round-trip cost → walk-forward with a 45-day 13F-availability lag, so the signal is out-of-sample by construction.

![[asemb_ou_equity.png|Cumulative equity, 2014–2017. Ensemble peers (blue) beat single-seed (orange); gross (dashed) vs net-of-cost (solid).]]

**Result (2014–2017): gross Sharpe 1.24, net 0.37.** Two checks confirm the signal is real: the **ensemble** embedding beats a single seed (1.24 vs 1.10 gross — stability translates into P&L), and a **scrambled-signal** control loses badly (net −11.8), so the returns aren't a turnover artifact.

**The bottleneck is turnover, not signal.** Next steps target exactly that: optimal-stopping entry/exit bands (Leung–Li, *Optimal Mean Reversion Trading*) to replace the fixed ±1.25 / 0.5 thresholds, and an explicit cointegration test on the residual as the reversion filter.

Code: `code/asemb/alg`.
