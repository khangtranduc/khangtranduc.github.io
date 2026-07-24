---
# ── POST frontmatter ──────────────────────────────────────────────────
# This lives in src/content/posts/, so it is a BLOG POST: it shows on
# /posts and at /posts/<slug>. Because `project:` is set, it ALSO appears
# in the Example Project's dev log and gets a "part of project" backlink.
title: 'Example dev log #1: getting started'
description: First entry of the example dev-log series — scaffolding the idea.
date: 2026-06-20
published: true
example: true                # template/demo content: shown in dev, stripped from prod builds
tags:                        # free-form topical tags; power the filter on /posts
  - example
  - cs
project: example-project     # <- the link. Must match a projects/<slug> filename.
# ──────────────────────────────────────────────────────────────────────
---

This is the **first dev log** for the Example Project. Notice the
`project: example-project` line above — that single field is what files this
post under the project's dev log while keeping it a normal blog post on `/posts`.

Write whatever you like here: progress notes, dead ends, snippets. Math and code
render the same as any other post:

```python
def hello(name: str) -> str:
    return f"hello, {name}"
```

## Embedding media

Drop the file into `static/media/`, then embed it by filename, Obsidian-style:

```md
![[screenshot.png]]              image (png, jpg, gif, svg, webp, avif)
![[screenshot.png|420]]          image at 420px wide
![[screenshot.png|A caption]]    image with a caption underneath
![[paper.pdf]]                   inline PDF viewer + an "open" link
![](https://www.youtube.com/watch?v=dQw4w9WgXcQ)   embedded YouTube video
```

Plain markdown works too — `![alt](/media/screenshot.png)` — and anything inside
a code block (like the samples above) is left untouched.
