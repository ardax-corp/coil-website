---
slug: "random/Rng/next_u64"
title: "Rng::next_u64"
description: "Returns the next 64 raw bits from the generator as an int, so about half the values are negative (splitmix64)."
module: "random"
kind: "method"
name: "next_u64"
parent: "Rng"
signature: "pub fn next_u64() -> int"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/random.hy#L63"
order: 2
---

Returns the next 64 raw bits from the generator as an [`int`](/docs/reference/types/int), so about half the values are negative (splitmix64).

Called on a `Rng` value as `value.next_u64(…)`.

## Returns

`int`

## See also

- [`int`](/docs/reference/types/int)
- [`Rng`](/docs/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/docs/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::from_time`](/docs/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::range`](/docs/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::float`](/docs/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
- [`Rng::bytes`](/docs/reference/random/Rng/bytes): Returns `n` pseudo-random bytes (none when `n <= 0`).
