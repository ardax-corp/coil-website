---
slug: "stdlib/random/Rng/float"
package: "stdlib"
title: "Rng::float"
description: "Returns a float in 0.0..1.0."
module: "random"
kind: "method"
name: "float"
parent: "Rng"
signature: "pub fn float() -> float"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/random.hy#L107"
order: 4
---

Returns a [`float`](/docs/reference/types/float) in `0.0..1.0`.

Called on a `Rng` value as `value.float(…)`.

## Returns

`float`

## See also

- [`float`](/docs/reference/types/float)
- [`Rng`](/packages/stdlib/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/packages/stdlib/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::from_time`](/packages/stdlib/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::next_u64`](/packages/stdlib/reference/random/Rng/next_u64): Returns the next 64 raw bits from the generator as an `int`, so about half the values are negative (splitmix64).
- [`Rng::range`](/packages/stdlib/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::bytes`](/packages/stdlib/reference/random/Rng/bytes): Returns `n` pseudo-random bytes (none when `n <= 0`).
