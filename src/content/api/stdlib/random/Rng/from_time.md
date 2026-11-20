---
slug: "stdlib/random/Rng/from_time"
package: "stdlib"
title: "Rng::from_time"
description: "Creates a generator seeded from the host's wall clock and monotonic clock (builtin clock::wall_nanos / clock::mono_nanos). Two processes started in the same nanosecond can get the same sequence; use from_entropy when that matters."
module: "random"
kind: "static method"
name: "from_time"
parent: "Rng"
signature: "pub static fn from_time() -> Rng"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/c40bfae5c8365e4f259e9293f705ad9411cd6bf7/src/random.coil#L83"
order: 2
---

Creates a generator seeded from the host's wall clock and monotonic clock (builtin [`clock::wall_nanos`](/docs/reference/clock/wall_nanos) / [`clock::mono_nanos`](/docs/reference/clock/mono_nanos)). Two processes started in the same nanosecond can get the same sequence; use [`from_entropy`](/packages/stdlib/reference/random/Rng/from_entropy) when that matters.

## Returns

`Rng`

## Examples

```coil
use random::{Rng};
use tests::assert;
let r = Rng::from_time();
let roll = r.range(1, 7);
assert!(roll >= 1 && roll < 7);
```

## See also

- [`clock::wall_nanos`](/docs/reference/clock/wall_nanos)
- [`clock::mono_nanos`](/docs/reference/clock/mono_nanos)
- [`Rng::from_entropy`](/packages/stdlib/reference/random/Rng/from_entropy)
- [`Rng`](/packages/stdlib/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/packages/stdlib/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::next_u64`](/packages/stdlib/reference/random/Rng/next_u64): Returns the next 64 raw bits from the generator as an `int`, so about half the values are negative (splitmix64).
- [`Rng::range`](/packages/stdlib/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::float`](/packages/stdlib/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
