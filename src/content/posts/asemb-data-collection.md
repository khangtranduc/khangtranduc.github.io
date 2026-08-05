---
title: 'Data Collection'
description: Parsing free public SEC 13F and linking it to CRSP — and why I model at the PERMCO firm level.
date: 2026-08-03
published: true
tags:
  - cs
  - vertical-slice
project: asemb               # links this post into the OU-trading-on-Asset-Embeddings dev log
---

This slice rebuilds the [Gabaix–Koijen–Richmond–Yogo](https://www.nber.org/papers/w33651) asset-embedding universe from free public data: I parse the public SEC 13F filings directly and link them to CRSP.

**Identity resolution.** 13F reports **CUSIP** natively, so I link CUSIP-8 → CRSP PERMNO through a four-tier point-in-time cascade — a near 1:1, unambiguous map (zero ambiguous keys across the panel).

**Modeling unit.** I aggregate holdings to **PERMCO** (firm level). That's the correct unit because the valuation benchmark — Compustat book equity — is company-level and can't be split across share classes. I keep PERMNO underneath, since the trading stage needs per-security returns, which keeps the aggregation reversible.

**Universe** (following GKRY §5.1): US common stock only, drop micro/nano caps (below the NYSE 20th-percentile market equity), and require ≥20 investors per token and ≥20 tokens per investor, iterated to a fixed point. The panel spans 12 quarters, 2014Q1–2016Q4.

**Known limitation.** 13F is filed at the *manager* level, so a filer's separate funds get lumped into a single, sometimes index-like portfolio. The fix is fund-level holdings via CRSP MFDB — but I'd rather finish the whole vertical slice first, since at this stage we can't know whether that granularity actually moves the strategy's P&L.

Code: `code/asemb/data_in`.
