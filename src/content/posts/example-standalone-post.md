---
# ── POST frontmatter (standalone) ─────────────────────────────────────
# A normal blog post with NO `project:` field. It appears on /posts only
# and is not attached to any project — this is the default kind of post.
title: Example standalone post
description: A plain blog post that doesn't belong to any project.
date: 2026-06-15
published: true
example: true                # template/demo content: shown in dev, stripped from prod builds
tags:
  - example
# ──────────────────────────────────────────────────────────────────────
---

This is a **standalone post**: no `project:` field, so it lives entirely on
`/posts` and never shows up under a project. Most day-to-day blogging looks like
this — reach for a `project:` slug only when a post is documenting a specific
project.
