---
slug: "arbitrary/Gen/new"
title: "Gen::new"
description: "A generator seeded with seed (0 is replaced by a fixed non-zero seed), starting at size 10."
module: "arbitrary"
kind: "static method"
name: "new"
parent: "Gen"
signature: "pub static fn new(int seed) -> Gen"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/arbitrary.hy#L35"
order: 0
---

A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10.

## Parameters

| Name | Type |
|------|------|
| `seed` | `int` |

## Returns

`Gen`

## Examples

```coil
use arbitrary::Gen;
use tests::assert;
let g = Gen::new(7);
let n = g.int_in(1, 6);
assert!(n >= 1 && n <= 6);
```

## See also

- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in `[0, n)`; 0 when `n <= 0`.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in `[lo, hi]`.
- [`Gen::one_in`](/docs/reference/arbitrary/Gen/one_in): True one time in `n`.
- [`Gen::len`](/docs/reference/arbitrary/Gen/len): How many elements a collection gets: up to `size`, none once the value is nested `deep()`.
