---
slug: "stdlib/random/Rng/range"
package: "stdlib"
title: "Rng::range"
description: "Returns a value in lo..hi (including lo, excluding hi), or lo when hi <= lo."
module: "random"
kind: "method"
name: "range"
parent: "Rng"
signature: "pub fn range(int lo, int hi) -> int"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/random.hy#L92"
order: 3
---

Returns a value in `lo..hi` (including `lo`, excluding `hi`), or `lo` when `hi <= lo`.

Called on a `Rng` value as `value.range(…)`.

## Parameters

| Name | Type |
|------|------|
| `lo` | `int` |
| `hi` | `int` |

## Returns

`int`

## Examples

```coil
use random::{Rng};
use tests::assert;
let r = Rng::seeded(1);
let i = 0;
while i < 20 {
    let x = r.range(-5, 5);
    assert!(x >= -5 && x < 5);
    i = i + 1;
}
assert!(r.range(3, 3) == 3);
```

## See also

- [`Rng`](/packages/stdlib/reference/random/Rng): A seeded pseudo-random number generator.
- [`Rng::seeded`](/packages/stdlib/reference/random/Rng/seeded): Creates a generator from `seed`.
- [`Rng::from_time`](/packages/stdlib/reference/random/Rng/from_time): Creates a generator seeded from the current wall-clock and monotonic time (via coil-time).
- [`Rng::next_u64`](/packages/stdlib/reference/random/Rng/next_u64): Returns the next 64 raw bits from the generator as an `int`, so about half the values are negative (splitmix64).
- [`Rng::float`](/packages/stdlib/reference/random/Rng/float): Returns a `float` in `0.0..1.0`.
- [`Rng::bytes`](/packages/stdlib/reference/random/Rng/bytes): Returns `n` pseudo-random bytes (none when `n <= 0`).
