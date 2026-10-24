---
slug: "gc/heap_bytes"
title: "heap_bytes"
description: "Returns the size of the managed heap in bytes."
module: "gc"
kind: "fn"
name: "heap_bytes"
signature: "fn heap_bytes() -> int"
import: "use gc::{heap_bytes};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/gc.hy#L152"
order: 7
---

Returns the size of the managed heap in bytes.

This counts only memory the VM's garbage collector manages: not native
libraries, stacks or other process memory.

## Returns

`int`

## Examples

```coil
use gc::{heap_bytes};
use tests::assert;
let v = Vec::from([1, 2, 3]);
assert!(heap_bytes() > 0 && v.len() == 3);
```

## See also

- [`root`](/docs/reference/gc/fn.root): Pins `value` so the garbage collector keeps it alive while the returned `Root` is reachable.
- [`get`](/docs/reference/gc/get): Returns the pinned value, leaving the pin in place.
- [`unroot`](/docs/reference/gc/unroot): Releases the pin and returns the value it held.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`upgrade`](/docs/reference/gc/upgrade): Returns the value while it is still alive, `None` once it was collected.
- [`collect`](/docs/reference/gc/collect): Runs a full garbage collection now and returns the number of bytes freed.
