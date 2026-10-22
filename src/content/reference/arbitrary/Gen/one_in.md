---
slug: "arbitrary/Gen/one_in"
title: "Gen::one_in"
description: "True one time in n."
module: "arbitrary"
kind: "method"
name: "one_in"
parent: "Gen"
signature: "pub fn one_in(int n) -> bool"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/arbitrary.hy#L86"
order: 6
---

True one time in `n`.

Called on a `Gen` value as `value.one_in(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`bool`

## See also

- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with seed (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in [0, n); 0 when n <= 0.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in [lo, hi].
- [`Gen::len`](/docs/reference/arbitrary/Gen/len): How many elements a collection gets: up to size, none once the value is nested deep().
