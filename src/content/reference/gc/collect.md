---
slug: "gc/collect"
title: "collect"
description: "Runs every pending fn drop() and the cycle collector now, and returns the number of bytes freed."
module: "gc"
kind: "fn"
name: "collect"
signature: "fn collect() -> int"
import: "use gc::{collect};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/c4231aba4e3db4e3f3f9ece8f3d5de6d8aa0ec4a/compiler/src/builtin_docs/gc.coil#L178"
order: 8
---

Runs every pending `fn drop()` and the cycle collector now, and returns the number of bytes freed.

Values are freed as soon as their last owner goes; only reference cycles
between class instances wait for the cycle collector, which also runs on
its own as the heap grows. Call this to free such cycles, or run their
finalizers, at a known point, for example in tests. Values still named
by live locals stay alive.

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

- [`root`](/docs/reference/gc/fn.root): Pins `value` so it stays alive while the returned `Root` does.
- [`get`](/docs/reference/gc/get): Returns the pinned value, leaving the pin in place.
- [`unroot`](/docs/reference/gc/unroot): Releases the pin and returns the value it held.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`upgrade`](/docs/reference/gc/upgrade): Returns the value while it is still alive, `None` once it was freed.
- [`heap_bytes`](/docs/reference/gc/heap_bytes): Returns the size of the managed heap in bytes.
