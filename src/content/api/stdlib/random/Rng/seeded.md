---
slug: "stdlib/random/Rng/seeded"
package: "stdlib"
title: "Rng::seeded"
description: "Creates a generator from seed. A seed of 0 is treated as 1."
module: "random"
kind: "static method"
name: "seeded"
parent: "Rng"
signature: "pub static fn seeded(int seed) -> Rng"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/random.hy#L34"
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

- [`Rng`](/packages/stdlib/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::from_time`](/packages/stdlib/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::next_u64`](/packages/stdlib/reference/random/Rng/next_u64): Returns the next 64 raw bits from the generator as an `int`, so about half the values are negative (splitmix64).
- [`Rng::range`](/packages/stdlib/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::float`](/packages/stdlib/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
- [`Rng::bytes`](/packages/stdlib/reference/random/Rng/bytes): Returns `n` pseudo-random bytes (none when `n <= 0`).
