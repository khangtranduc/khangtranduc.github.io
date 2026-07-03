---
# ── PROJECT frontmatter ───────────────────────────────────────────────
# This file lives in src/content/projects/, so the site treats it as a
# PROJECT writeup: it appears on /projects and gets its own page at
# /projects/<slug>. The <slug> is the filename — here, "example-project".
title: Example Project
description: A template project writeup showing how a project and its dev-log posts link together.
date: 2026-07-02
published: true              # set false to hide it everywhere (draft)
tags:                        # drive the category tabs on /projects (all | cs | physics | ...)
  - cs
# image: /thumbs/example.png # optional card thumbnail — drop a file in static/thumbs/ and uncomment
status: in-progress          # optional: in-progress | complete
repo: https://github.com/khangtranduc   # optional link rendered on the page
demo: /test                  # optional link rendered on the page
# ──────────────────────────────────────────────────────────────────────
---

This is an **example project writeup**. Put the polished, final story of the
project here: what it is, why you built it, how it works, and the results.

## How the dev log links up

You never list related posts by hand. Any post in `src/content/posts/` whose
frontmatter sets `project: example-project` is **collected automatically** into
the _Dev log_ section at the bottom of this page (newest first). The three
`example-devlog-*.md` posts show the pattern — scroll down to see them appear.

To start your own project:

1. Copy this file to `src/content/projects/<your-slug>.md`.
2. In each related dev-log post, add `project: <your-slug>` to its frontmatter.

That is the entire tagging contract: **one field, matched by slug.** A typo in
that slug prints a `[content] … references unknown project` warning at build
time, so broken links can't slip through silently.
