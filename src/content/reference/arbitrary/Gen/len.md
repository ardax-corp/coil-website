---
slug: "arbitrary/Gen/len"
title: "Gen::len"
description: "How many elements a collection gets: up to size, none once the value is nested deep()."
module: "arbitrary"
kind: "method"
name: "len"
parent: "Gen"
signature: "pub fn len() -> int"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/prelude/arbitrary.hy#L92"
order: 7
---

How many elements a collection gets: up to [`size`](/docs/reference/arbitrary/Gen/size), none once the value is nested [`deep()`](/docs/reference/arbitrary/Gen/deep).

Called on a `Gen` value as `value.len(…)`.

## Returns

`int`

## See also

- [`Gen::size`](/docs/reference/arbitrary/Gen/size)
- [`Gen::deep`](/docs/reference/arbitrary/Gen/deep)
- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in `[0, n)`; 0 when `n <= 0`.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in `[lo, hi]`.
