---
slug: "arbitrary/Gen/int_in"
title: "Gen::int_in"
description: "Uniform in [lo, hi]."
module: "arbitrary"
kind: "method"
name: "int_in"
parent: "Gen"
signature: "pub fn int_in(int lo, int hi) -> int"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/arbitrary.hy#L78"
order: 5
---

Uniform in `[lo, hi]`.

Called on a `Gen` value as `value.int_in(…)`.

## Parameters

| Name | Type |
|------|------|
| `lo` | `int` |
| `hi` | `int` |

## Returns

`int`

## See also

- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in `[0, n)`; 0 when `n <= 0`.
- [`Gen::one_in`](/docs/reference/arbitrary/Gen/one_in): True one time in `n`.
- [`Gen::len`](/docs/reference/arbitrary/Gen/len): How many elements a collection gets: up to `size`, none once the value is nested `deep()`.
