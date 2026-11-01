---
slug: "stdlib/random/Rng/next_u64"
package: "stdlib"
title: "Rng::next_u64"
description: "Returns the next 64 raw bits from the generator as an int, so about half the values are negative (splitmix64)."
module: "random"
kind: "method"
name: "next_u64"
parent: "Rng"
signature: "pub fn next_u64() -> int"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/c82d918049771e627c6139be8c1c1fa5a6a4642f/src/random.coil#L90"
order: 3
---

Returns the next 64 raw bits from the generator as an [`int`](/docs/reference/types/int), so about half the values are negative (splitmix64).

Called on a `Rng` value as `value.next_u64(…)`.

## Returns

`int`

## See also

- [`int`](/docs/reference/types/int)
- [`Rng`](/packages/stdlib/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/packages/stdlib/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::from_entropy`](/packages/stdlib/reference/random/Rng/from_entropy): Creates a generator seeded with 64 bits from the OS CSPRNG (`entropy::bytes`), so two processes started in the same instant still get different sequences.
- [`Rng::from_time`](/packages/stdlib/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::range`](/packages/stdlib/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::float`](/packages/stdlib/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
- [`Rng::bytes`](/packages/stdlib/reference/random/Rng/bytes): Returns `n` pseudo-random bytes (none when `n <= 0`).
