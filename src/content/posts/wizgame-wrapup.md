---
title: 'Wrap-up'
description: What the first from-scratch OpenGL spellcasting engine grew into before the rebuild — the benchmark numbers, and the architectural debt that prompted it.
date: 2026-07-26
published: true
tags:
  - graphics
  - opengl
  - cs
project: wizgame            # links this post into the Untitled Wizard Game dev log
---

Before starting over, a snapshot of how far the first engine got. It began as a spellcasting
game in **OpenGL 3.3 core**, its shape borrowed straight from [LearnOpenGL](https://learnopengl.com/) —
a `Game` shell (`init` / `processInput` / `update` / `render`), a `ResourceManager`, and the
usual `Shader` / `Texture` / `Mesh` wrappers — and grew from there into a fairly complete
little renderer.

## What got built

- **Physics** — rigid-body AABB dynamics: a force-accumulator semi-implicit Euler integrator,
  minimum-translation-vector collision, and impulse-based resolution with restitution and
  Coulomb friction.
- **Rendering** — forward Blinn-Phong with directional + point lights, **shadow mapping**
  (normal-offset bias + PCF), and a full **HDR → bright-pass → bloom** pipeline built on one
  general `Framebuffer` class.
- **Particles** — a GPU-instanced particle system with a pooled, swap-and-pop CPU update, one
  instanced draw call per emitter regardless of particle count.
- **Procedural world** — an infinite `heightAt` noise terrain (and a bounded authored arena
  behind the same seam), a procedural sky, a Gerstner-wave **ocean**, and instanced,
  wind-animated grass that bends away from the player.
- **The hero spell** — a castable **vortex**: a refracting, swirling water column that lifts
  and traps anything inside it, painted by a surface-agnostic 2D field onto a cylinder mesh.
- **Data-driven content** — `.level` files as verb + keyed tokens (hot-reloadable with one
  key), and a spell system where casting is **data → closures** and effect lifetime is
  **behavior → virtuals**.

The whole thing runs on **no engine, no physics library, no renderer library**. GLFW, glad, GLM, Assimp and
stb_image do windowing, GL loading, math, model import and image decode; everything else is
first-party.

## By the numbers

Measured with a `--bench` mode — fixed timestep, scripted camera path, per-pass
`GL_TIME_ELAPSED` timer queries — median of three runs at 1080p on an **integrated Radeon
780M**:

- **5.31 ms/frame** — 188 FPS mean, 137 FPS 1% low, frame-time stddev **1.24 ms** — with the
  2048² shadow pass isolated at **0.469 ms**.
- **Fill-bound, not CPU- or draw-call-bound:** across 720p/1080p/1440p, GPU time scaled
  1 : 1.96 : 3.45 against a 1 : 2.25 : 4.0 pixel ratio while CPU update stayed flat at ~0.13 ms.
- **Instancing vs an identical naive draw path:** at 50K particles, **4,149× fewer draw calls
  and 3.9× faster frames** (26.1 → 6.8 ms).
- **1,000,000 instanced grass blades** (9.1M triangles) in **one draw call** at 79 FPS mean —
  though the 1% low is 19 FPS, because every blade is re-scattered on an 8-unit snap and that
  rebuild stalls for 53 ms.
- **~450,000 live particles** and **2,560 rigid bodies** each sustained above 60 FPS (the
  physics is all-pairs, ~4 ns/pair at scale).
- **740 ms** cold start, and a **5.10 MB** static Windows binary from the MinGW cross-compile.

## Why stop here and rebuild

The renderer works, but the scaffolding didn't scale. `Game` became a god-object global,
`Entity` only half-decomposed into components, scene uniforms were re-uploaded per shader
program by hand, there was no general translucent draw queue, and the physics carried real
debt (no continuous collision, no inverse-mass correction). I was also moving fast enough
that I never kept a proper devlog.

Benchmarking turned up its own embarrassments — the kind measurement exists to catch. The
biggest: the **bloom pass ate 61% of GPU time and its output was never used** — `tonemap.fs`
had no sampler for the blur result, so ten full-resolution Gaussian passes were computed and
discarded every frame. That one is **fixed**: the composite now adds the blurred bright buffer
in linear HDR space before the tonemap, and wiring it cost nothing measurable (191.9 vs 188.2
mean FPS, inside run-to-run noise). What survives is a real trade-off rather than pure waste —
bloom is **2.59 ms of 4.33 ms of GPU time**, and skipping it still takes the scene from **192
to 400 FPS**, so the obvious next optimization is to run the blur at half resolution.

So the next pass is a clean-room re-implementation on better engine-design principles — and,
this time, with the devlog written as I go.
