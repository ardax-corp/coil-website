---
slug: "random/Rng/from_time"
title: "Rng::from_time"
description: "Creates a generator seeded from the current wall-clock and monotonic time (via coil-time)."
module: "random"
kind: "static method"
name: "from_time"
parent: "Rng"
signature: "pub static fn from_time() -> Rng"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/random.hy#L37"
order: 1
---

Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).

## Returns

`Rng`

## See also

- [`Rng`](/docs/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/docs/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::next_u64`](/docs/reference/random/Rng/next_u64): Returns the next raw value from the generator, a non-negative `int`.
- [`Rng::range`](/docs/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::float`](/docs/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
- [`Rng::bytes`](/docs/reference/random/Rng/bytes): Returns `n` pseudo-random bytes (none when `n <= 0`).
