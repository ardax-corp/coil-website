---
slug: "stdlib/random/Rng/bytes"
package: "stdlib"
title: "Rng::bytes"
description: "Returns n pseudo-random bytes (none when n <= 0)."
module: "random"
kind: "method"
name: "bytes"
parent: "Rng"
signature: "pub fn bytes(int n) -> Vec<byte>"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/random.hy#L124"
order: 5
---

Returns `n` pseudo-random bytes (none when `n <= 0`).

Called on a `Rng` value as `value.bytes(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Vec<byte>`

## Examples

```coil
use random::{Rng};
use tests::assert;
let r = Rng::seeded(9);
assert!(r.bytes(16).len() == 16);
assert!(r.bytes(-1).len() == 0);
```

## See also

- [`Rng`](/packages/stdlib/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/packages/stdlib/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::from_time`](/packages/stdlib/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::next_u64`](/packages/stdlib/reference/random/Rng/next_u64): Returns the next 64 raw bits from the generator as an `int`, so about half the values are negative (splitmix64).
- [`Rng::range`](/packages/stdlib/reference/random/Rng/range): Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.
- [`Rng::float`](/packages/stdlib/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
