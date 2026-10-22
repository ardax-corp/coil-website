---
slug: "arith/Overflowing/overflowing_neg"
title: "Overflowing::overflowing_neg"
description: "The wrapped -a, and whether it wrapped."
module: "arith"
kind: "method"
name: "overflowing_neg"
parent: "Overflowing"
signature: "fn overflowing_neg(S a) -> (S, bool)"
import: "use arith::{Overflowing};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/arith.hy#L152"
order: 3
---

The wrapped `-a`, and whether it wrapped.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |

## Returns

`(S, bool)`

## See also

- [`Overflowing`](/docs/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
- [`Overflowing::overflowing_add`](/docs/reference/arith/Overflowing/overflowing_add): The wrapped a + b, and whether it wrapped.
- [`Overflowing::overflowing_sub`](/docs/reference/arith/Overflowing/overflowing_sub): The wrapped a - b, and whether it wrapped.
- [`Overflowing::overflowing_mul`](/docs/reference/arith/Overflowing/overflowing_mul): The wrapped a * b, and whether it wrapped.
- [`Overflowing::overflowing_pow`](/docs/reference/arith/Overflowing/overflowing_pow): The wrapped a ** exp, and whether it wrapped.
- [`Overflowing::overflowing_shl`](/docs/reference/arith/Overflowing/overflowing_shl): a << (n & 63), and whether n was outside 0..=63.
- [`Overflowing::overflowing_shr`](/docs/reference/arith/Overflowing/overflowing_shr): a >> (n & 63), and whether n was outside 0..=63.
