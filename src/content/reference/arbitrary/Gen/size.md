---
slug: "arbitrary/Gen/size"
title: "Gen::size"
description: "The current size bound."
module: "arbitrary"
kind: "method"
name: "size"
parent: "Gen"
signature: "pub fn size() -> int"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/arbitrary.hy#L44"
order: 1
---

The current size bound.

Called on a `Gen` value as `value.size(…)`.

## Returns

`int`

## See also

- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in `[0, n)`; 0 when `n <= 0`.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in `[lo, hi]`.
- [`Gen::one_in`](/docs/reference/arbitrary/Gen/one_in): True one time in `n`.
- [`Gen::len`](/docs/reference/arbitrary/Gen/len): How many elements a collection gets: up to `size`, none once the value is nested `deep()`.
