---
slug: "arbitrary/Gen/below"
title: "Gen::below"
description: "Uniform in [0, n); 0 when n <= 0."
module: "arbitrary"
kind: "method"
name: "below"
parent: "Gen"
signature: "pub fn below(int n) -> int"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/prelude/arbitrary.hy#L67"
order: 4
---

Uniform in `[0, n)`; 0 when `n <= 0`.

Called on a `Gen` value as `value.below(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`int`

## See also

- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in `[lo, hi]`.
- [`Gen::one_in`](/docs/reference/arbitrary/Gen/one_in): True one time in `n`.
- [`Gen::len`](/docs/reference/arbitrary/Gen/len): How many elements a collection gets: up to `size`, none once the value is nested `deep()`.
