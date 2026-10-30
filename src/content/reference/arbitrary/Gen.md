---
slug: "arbitrary/Gen"
title: "Gen"
description: "A seeded source of random values. size bounds how big values get (ints in [-size, size], lengths up to size); coil test grows it from 0 so the first failures it finds are small."
module: "arbitrary"
kind: "class"
name: "Gen"
signature: "class Gen"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/arbitrary.hy#L11"
order: 0
---

A seeded source of random values. [`size`](/docs/reference/arbitrary/Gen/size) bounds how big values get (ints in `[-size, size]`, lengths up to [`size`](/docs/reference/arbitrary/Gen/size)); `coil test` grows it from 0 so the first failures it finds are small.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/docs/reference/arbitrary/Gen/new) | A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10. |

## Methods

| Name | Description |
|------|-------------|
| [`size`](/docs/reference/arbitrary/Gen/size) | The current size bound. |
| [`resize`](/docs/reference/arbitrary/Gen/resize) | Sets the size bound; negative sizes become 0. |
| [`bits`](/docs/reference/arbitrary/Gen/bits) | 32 random bits. |
| [`below`](/docs/reference/arbitrary/Gen/below) | Uniform in `[0, n)`; 0 when `n <= 0`. |
| [`int_in`](/docs/reference/arbitrary/Gen/int_in) | Uniform in `[lo, hi]`. |
| [`one_in`](/docs/reference/arbitrary/Gen/one_in) | True one time in `n`. |
| [`len`](/docs/reference/arbitrary/Gen/len) | How many elements a collection gets: up to [`size`](/docs/reference/arbitrary/Gen/size), none once the value is nested [`deep()`](/docs/reference/arbitrary/Gen/deep). |
| [`depth`](/docs/reference/arbitrary/Gen/depth) | How deep the value being built is nested in others. |
| [`enter`](/docs/reference/arbitrary/Gen/enter) | Around the parts of a value. |
| [`leave`](/docs/reference/arbitrary/Gen/leave) | Undoes one [`enter`](/docs/reference/arbitrary/Gen/enter). |
| [`deep`](/docs/reference/arbitrary/Gen/deep) | Past this depth derived enums stop nesting. |

## See also

- [`Gen::size`](/docs/reference/arbitrary/Gen/size)
