---
slug: "random/Rng/float"
title: "Rng::float"
description: "Returns a float in 0.0..1.0."
module: "random"
kind: "method"
name: "float"
parent: "Rng"
signature: "pub fn float() -> float"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/random.hy#L102"
order: 4
---

Returns a [`float`](/docs/reference/types/float) in `0.0..1.0`.

Called on a `Rng` value as `value.float(…)`.

## Returns

`float`

## See also

- [`float`](/docs/reference/types/float)
- [`Rng`](/docs/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/docs/reference/random/Rng/seeded): Creates a generator from seed.
- [`Rng::from_time`](/docs/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::next_u64`](/docs/reference/random/Rng/next_u64): Returns the next raw value from the generator, a non-negative int.
- [`Rng::range`](/docs/reference/random/Rng/range): Returns a value in lo..hi (including lo, excluding hi), or lo when hi <= lo.
- [`Rng::bytes`](/docs/reference/random/Rng/bytes): Returns n pseudo-random bytes (none when n <= 0).
