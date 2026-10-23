---
slug: "arbitrary/Gen/enter"
title: "Gen::enter"
description: "Around the parts of a value. Once deep(), collections are empty and derived enums take a variant without payloads, so recursive types end."
module: "arbitrary"
kind: "method"
name: "enter"
parent: "Gen"
signature: "pub fn enter()"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/arbitrary.hy#L106"
order: 9
---

Around the parts of a value. Once [`deep()`](/docs/reference/arbitrary/Gen/deep), collections are empty and derived enums take a variant without payloads, so recursive types end.

Called on a `Gen` value as `value.enter(…)`.

## See also

- [`Gen::deep`](/docs/reference/arbitrary/Gen/deep)
- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with `seed` (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in `[0, n)`; 0 when `n <= 0`.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in `[lo, hi]`.
