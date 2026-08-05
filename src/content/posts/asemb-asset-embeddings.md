---
title: 'Asset Embeddings'
description: Word2Vec on institutional portfolios — and quantifying how reproducible the embedding actually is.
date: 2026-08-04
published: true
tags:
  - cs
  - vertical-slice
project: asemb               # links this post into the OU-trading-on-Asset-Embeddings dev log
---

Each manager's portfolio is treated as a "sentence" and each stock (PERMCO) as a "word," ordered by holding conviction; Word2Vec then learns a dense vector per stock from co-holding patterns — the Asset Embeddings idea from [Gabaix et al.](https://www.nber.org/papers/w33651) I train a skip-gram model with negative sampling.

**Configuration.** Each portfolio is ordered by **active weight** — portfolio weight minus market weight — which demotes the mega-caps nearly everyone holds and surfaces idiosyncratic positions. The context window is **±10**, and the embedding dimension is **d = 100**.

**Measuring reproducibility.** The embedding axes are arbitrary (the space is only defined up to rotation), so I measure a rotation-invariant, seed-vs-seed **top-10 nearest-neighbor Jaccard** overlap — how much each stock's neighborhood survives re-training under a new random seed.

![[asemb_jaccard_dimension.png|Seed-vs-seed neighbor Jaccard. A whole-book window collapses the space (0.13); the ±10 window is the big fix (→0.47); dimension is a smaller lever that plateaus near 0.57–0.60.]]

A whole-book window **collapses** the space — every vector ends up nearly parallel (cos ≈ 0.99, Jaccard 0.13). The **±10 window is the real fix**, lifting it to 0.47; dimension adds a smaller gain, plateauing around 0.57–0.60, with d = 100 sitting on that plateau.

Even fully tuned, Jaccard is only **~0.5** — about a third of each stock's nearest neighbors change with the seed. I read this as the co-holding data **under-determining** the geometry (non-identifiability), not a bug.

**The fix: ensembling.** A K-seed, Procrustes-aligned ensemble raises the floor from 0.51 (single seed) to **~0.77 at K = 10**, with diminishing returns beyond — so I run K = 10.

![[asemb_ensemble_k.png|Averaging K Procrustes-aligned seeds raises the reproducibility floor from 0.51 toward ~0.8. K=10 is the compute/stability sweet spot.]]

The ensemble is what feeds the trading stage — and it improves the P&L there too, not just the Jaccard.

**Next: cross-quarter drift.** Independent per-quarter fits drift in their coordinate frame over time. I plan to adapt [Bamler–Mandt's dynamic word embeddings](https://arxiv.org/abs/1702.08359) to impose temporal coherence while keeping the nonlinear representation.

Code: `code/asemb/embed`.
