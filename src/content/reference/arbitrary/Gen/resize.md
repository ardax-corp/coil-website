---
slug: "arbitrary/Gen/resize"
title: "Gen::resize"
description: "Sets the size bound; negative sizes become 0."
module: "arbitrary"
kind: "method"
name: "resize"
parent: "Gen"
signature: "pub fn resize(int size)"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/arbitrary.hy#L49"
order: 2
---

Sets the size bound; negative sizes become 0.

Called on a `Gen` value as `value.resize(…)`.

## Parameters

| Name | Type |
|------|------|
| `size` | `int` |

## See also

- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with seed (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in [0, n); 0 when n <= 0.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in [lo, hi].
- [`Gen::one_in`](/docs/reference/arbitrary/Gen/one_in): True one time in n.
- [`Gen::len`](/docs/reference/arbitrary/Gen/len): How many elements a collection gets: up to size, none once the value is nested deep().
