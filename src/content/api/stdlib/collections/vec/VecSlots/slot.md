---
slug: "stdlib/collections/vec/VecSlots/slot"
package: "stdlib"
title: "VecSlots::slot"
description: "The place of element i: a view whose set and update write xs."
module: "collections::vec"
kind: "method"
name: "slot"
parent: "VecSlots"
signature: "fn slot(V xs, int i) -> Slot<Item>"
import: "use collections::vec::{VecSlots};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/vec.coil#L567"
order: 0
---

The place of element `i`: a view whose [`set`](/packages/stdlib/reference/collections/set) and `update` write `xs`.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `i` | `int` |

## Returns

`Slot<Item>`

## See also

- [`collections::set`](/packages/stdlib/reference/collections/set)
- [`VecSlots`](/packages/stdlib/reference/collections/vec/VecSlots): `slot(i)` on any `Vec<T>`: the place of element `i`, which panics when `i` is out of range as `xs[i]` does.
