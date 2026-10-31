---
slug: "gc/collect"
title: "collect"
description: "Runs a full garbage collection now and returns the number of bytes freed."
module: "gc"
kind: "fn"
name: "collect"
signature: "fn collect() -> int"
import: "use gc::{collect};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/gc.hy#L168"
order: 8
---

Runs a full garbage collection now and returns the number of bytes freed.

Collection normally happens on its own; call this to make finalizers
(`fn drop()`) and weak clearing happen at a known point, for example in
tests. Values still named by live locals stay alive.

## Returns

`int`

## Examples

```coil
use gc::{collect};
use tests::assert;
let freed = collect();
assert!(freed >= 0);
```

## See also

- [`root`](/docs/reference/gc/fn.root): Pins `value` so the garbage collector keeps it alive while the returned `Root` is reachable.
- [`get`](/docs/reference/gc/get): Returns the pinned value, leaving the pin in place.
- [`unroot`](/docs/reference/gc/unroot): Releases the pin and returns the value it held.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`upgrade`](/docs/reference/gc/upgrade): Returns the value while it is still alive, `None` once it was collected.
- [`heap_bytes`](/docs/reference/gc/heap_bytes): Returns the size of the managed heap in bytes.
