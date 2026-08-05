---
title: OU trading on Asset Embeddings
description: Reproducing Gabaix et al.'s Asset Embeddings from free 13F data, ending in an Avellaneda–Lee statistical-arbitrage strategy.
date: 2026-08-05
published: true
tags:
  - finance
status: in-progress
image: /thumbs/asemb.webp  # optional card thumbnail — drop a file in static/thumbs/
repo: https://github.com/khangtranduc/asemb   # optional link rendered on the page
---

This project reproduces the Gabaix et. al. **Asset Embeddings** framework [@gabaixAssetEmbeddings2025] — Word2Vec run over institutional 13F portfolios to learn a data-driven characteristics space for stocks — using only **free** public SEC data plus CRSP, and turns the result into an **Ornstein–Uhlenbeck statistical-arbitrage** strategy. Raj Patel's thesis [@patelAssetEmbeddingsResidual] is the launch point; along the way I depart from it wherever the free-data path or the trading objective calls for it.

It's built as a vertical slice in three stages, each written up in the dev log below:
- **Data** — parse public 13F, link CUSIP-8 → CRSP PERMNO point-in-time, aggregate to the PERMCO firm level, and apply the GKRY size/breadth filters. Panel: 2014–2016.
- **Embeddings** — skip-gram Word2Vec with active-weight ordering and a narrow window; a seed-vs-seed **Jaccard** measure of reproducibility, plus a K-seed ensemble that lifts it from ~0.5 to ~0.77.
- **Trading** — Avellaneda–Lee OU s-scores residualized against embedding k-NN peers: **gross Sharpe 1.24 / net 0.37** (2014–2017).

Next up is the embedding side — adapting Bambler-Mandt dynamic word embeddings [@bamlerDynamicWordEmbeddings] to tackle cross-quarter drift.

<!-- The dev log below is auto-collected from posts with `project: asemb`. -->
