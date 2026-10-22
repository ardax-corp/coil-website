---
slug: "random/Rng/seeded"
title: "Rng::seeded"
description: "Creates a generator from seed. A seed of 0 is treated as 1."
module: "random"
kind: "static method"
name: "seeded"
parent: "Rng"
signature: "pub static fn seeded(int seed) -> Rng"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/random.hy#L28"
order: 0
---

Creates a generator from `seed`. A seed of `0` is treated as `1`.

## Parameters

| Name | Type |
|------|------|
| `seed` | `int` |

## Returns

`Rng`

## See also

- [`Rng`](/docs/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::from_time`](/docs/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::next_u64`](/docs/reference/random/Rng/next_u64): Returns the next raw value from the generator, a non-negative int.
- [`Rng::range`](/docs/reference/random/Rng/range): Returns a value in lo..hi (including lo, excluding hi), or lo when hi <= lo.
- [`Rng::float`](/docs/reference/random/Rng/float): Returns a float in 0.0..1.0.
- [`Rng::bytes`](/docs/reference/random/Rng/bytes): Returns n pseudo-random bytes (none when n <= 0).
