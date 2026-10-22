---
slug: "arbitrary/Gen/bits"
title: "Gen::bits"
description: "32 random bits."
module: "arbitrary"
kind: "method"
name: "bits"
parent: "Gen"
signature: "pub fn bits() -> int"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/arbitrary.hy#L57"
order: 3
---

32 random bits.

Called on a `Gen` value as `value.bits(…)`.

## Returns

`int`

## See also

- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in `[0, n)`; 0 when `n <= 0`.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in `[lo, hi]`.
- [`Gen::one_in`](/docs/reference/arbitrary/Gen/one_in): True one time in `n`.
- [`Gen::len`](/docs/reference/arbitrary/Gen/len): How many elements a collection gets: up to `size`, none once the value is nested `deep()`.
