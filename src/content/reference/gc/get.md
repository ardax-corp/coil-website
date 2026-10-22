---
slug: "gc/get"
title: "get"
description: "Returns the pinned value, leaving the pin in place."
module: "gc"
kind: "fn"
name: "get"
signature: "fn get<T>(Root<T> pin) -> Option<T>"
import: "use gc::{get};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/gc.hy#L74"
order: 3
---

Returns the pinned value, leaving the pin in place.

Returns `None` after [`unroot`](/docs/reference/gc/unroot) has released the pin.

## Parameters

| Name | Type |
|------|------|
| `pin` | `Root<T>` |

## Returns

`Option<T>`

## Examples

```coil
use gc::{root, get, unroot};
use tests::assert;
let pin = root(7);
assert!(match get(pin) { Option::Some(n) => n == 7, Option::None => false });
let _ = unroot(pin);
assert!(match get(pin) { Option::Some(_) => false, Option::None => true });
```

## See also

- [`gc::unroot`](/docs/reference/gc/unroot)
- [`root`](/docs/reference/gc/fn.root): Pins `value` so the garbage collector keeps it alive while the returned `Root` is reachable.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`upgrade`](/docs/reference/gc/upgrade): Returns the value while it is still alive, `None` once it was collected.
- [`heap_bytes`](/docs/reference/gc/heap_bytes): Returns the size of the managed heap in bytes.
- [`collect`](/docs/reference/gc/collect): Runs a full garbage collection now and returns the number of bytes freed.
