---
slug: "random/Rng"
title: "Rng"
description: "A seeded pseudo-random number generator."
module: "random"
kind: "class"
name: "Rng"
signature: "class Rng"
import: "use random::{Rng};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/random.hy#L22"
order: 0
---

A seeded pseudo-random number generator.

The same seed always gives the same sequence, which makes tests repeatable.
It is not cryptographically secure: for keys, tokens and nonces use
`crypto::random_bytes` from coil-crypto. [`from_time`](/docs/reference/random/Rng/from_time) needs the coil-time
package on the module roots.

## Associated functions

| Name | Description |
|------|-------------|
| [`seeded`](/docs/reference/random/Rng/seeded) | Creates a generator from seed. |
| [`from_time`](/docs/reference/random/Rng/from_time) | Creates a generator seeded from the current wall-clock and monotonic time (via coil-time). |

## Methods

| Name | Description |
|------|-------------|
| [`next_u64`](/docs/reference/random/Rng/next_u64) | Returns the next raw value from the generator, a non-negative int. |
| [`range`](/docs/reference/random/Rng/range) | Returns a value in lo..hi (including lo, excluding hi), or lo when hi <= lo. |
| [`float`](/docs/reference/random/Rng/float) | Returns a float in 0.0..1.0. |
| [`bytes`](/docs/reference/random/Rng/bytes) | Returns n pseudo-random bytes (none when n <= 0). |

## Examples

```coil
use random::{Rng};
use tests::assert;
let a = Rng::seeded(7);
let b = Rng::seeded(7);
assert!(a.range(0, 100) == b.range(0, 100));
let roll = a.range(1, 7);
assert!(roll >= 1 && roll < 7);
```

## See also

- [`Rng::from_time`](/docs/reference/random/Rng/from_time)
