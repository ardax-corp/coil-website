---
slug: "arbitrary/Gen/leave"
title: "Gen::leave"
description: "Undoes one enter."
module: "arbitrary"
kind: "method"
name: "leave"
parent: "Gen"
signature: "pub fn leave()"
import: "use arbitrary::{Gen};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/arbitrary.hy#L111"
order: 10
---

Undoes one [`enter`](/docs/reference/arbitrary/Gen/enter).

Called on a `Gen` value as `value.leave(…)`.

## See also

- [`Gen::enter`](/docs/reference/arbitrary/Gen/enter)
- [`Gen`](/docs/reference/arbitrary/Gen): A seeded source of random values.
- [`Gen::new`](/docs/reference/arbitrary/Gen/new): A generator seeded with seed (0 is replaced by a fixed non-zero seed), starting at size 10.
- [`Gen::size`](/docs/reference/arbitrary/Gen/size): The current size bound.
- [`Gen::resize`](/docs/reference/arbitrary/Gen/resize): Sets the size bound; negative sizes become 0.
- [`Gen::bits`](/docs/reference/arbitrary/Gen/bits): 32 random bits.
- [`Gen::below`](/docs/reference/arbitrary/Gen/below): Uniform in [0, n); 0 when n <= 0.
- [`Gen::int_in`](/docs/reference/arbitrary/Gen/int_in): Uniform in [lo, hi].
