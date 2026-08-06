---
title: Untitled Wizard Game
description: Making a game from scratch in OpenGL 
date: 2026-08-05
published: true
tags:
  - cs
status: in-progress
image: /thumbs/wizgame.webp  # optional card thumbnail — drop a file in static/thumbs/
repo: https://github.com/khangtranduc/wizgame-1   # optional link rendered on the page
---

I wanted to make a spellcasting game from scratch in OpenGL.

What I got working:

- **Rendering** — forward Blinn-Phong with shadow mapping and an HDR → bloom pipeline.
- **Physics** — rigid-body AABB dynamics with impulse resolution, restitution and friction.
- **World** — infinite noise terrain, a Gerstner-wave ocean, procedural sky, and instanced wind-animated grass.
- **Effects** — a GPU-instanced particle system, and a castable refracting water vortex that lifts and traps whatever it catches.
- **Content** — hot-reloadable, data-driven `.level` files and spell definitions.

**By the numbers.** No engine, no physics library, no renderer library — the renderer, rigid-body solver, particle system, terrain generator, shadow mapping, HDR/bloom pipeline and level loader are all first-party. Measured in a `--bench` mode (fixed timestep, scripted camera path, per-pass `GL_TIME_ELAPSED` timer queries), median of three runs at 1080p, vsync off, release build, on an integrated Radeon 780M:

- **188 FPS mean / 137 FPS 1% low** (5.31 ms/frame, stddev 1.24 ms), with the 2048² shadow pass at 0.469 ms.
- **~450,000 live particles** and **2,560 rigid bodies** each sustained above 60 FPS.
- Instancing versus an identical naive draw path: **4,149× fewer draw calls and 3.9× faster frames** at 50K particles.
- **1,000,000 instanced grass blades** (9.1M triangles) in **one draw call** at 79 FPS mean.
- 740 ms cold start; 5.10 MB static Windows binary (MinGW cross-compile).

However, since I started the project after having spent only a few weeks of skimming [LearnOpenGL](https://learnopengl.com/) and with some carry-over experience from a computer graphics course in college, the project became unwieldy relatively quickly.

As such, I'll re-implement the current progress off of better game engine design principles that will hopefully make it more easy to work with. Furthermore, when I was working on it earlier, I was more focused on going fast and neglected to maintain a proper devlog, so this redesign will also be a good opportunity to have a good devlog.

Details of the state of the project before this reimplementation is in the [Wrap-up](/posts/wizgame-wrapup) post.

<!-- The dev log below is auto-collected from posts with `project: wizgame`. -->
