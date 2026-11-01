---
slug: "stdlib/random/Rng/from_entropy"
package: "stdlib"
title: "Rng::from_entropy"
description: "Creates a generator seeded with 64 bits from the OS CSPRNG (entropy::bytes), so two processes started in the same instant still get different sequences. The sequence itself is still splitmix64: not for keys or tokens."
module: "random"
kind: "static method"
name: "from_entropy"
parent: "Rng"
signature: "pub static fn from_entropy() -> Rng"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/c82d918049771e627c6139be8c1c1fa5a6a4642f/src/random.coil#L58"
order: 1
---

Creates a generator seeded with 64 bits from the OS CSPRNG ([`entropy::bytes`](/docs/reference/entropy/bytes)), so two processes started in the same instant still get different sequences. The sequence itself is still splitmix64: not for keys or tokens.

## Returns

`Rng`

## Examples

```coil
use random::{Rng};
use tests::assert;
let r = Rng::from_entropy();
let roll = r.range(1, 7);
assert!(roll >= 1 && roll < 7);
```

## See also

- [`entropy::bytes`](/docs/reference/entropy/bytes)
- [`Rng`](/packages/stdlib/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/packages/stdlib/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::from_time`](/packages/stdlib/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::next_u64`](/packages/stdlib/reference/random/Rng/next_u64): Returns the next 64 raw bits from the generator as an `int`, so about half the values are negative (splitmix64).
- [`Rng::range`](/packages/stdlib/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::float`](/packages/stdlib/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
- [`Rng::bytes`](/packages/stdlib/reference/random/Rng/bytes): Returns `n` pseudo-random bytes (none when `n <= 0`).
