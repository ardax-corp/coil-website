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
source: "https://github.com/ardax-corp/coil-lang/blob/c4231aba4e3db4e3f3f9ece8f3d5de6d8aa0ec4a/compiler/src/builtin_docs/gc.coil#L73"
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
- [`root`](/docs/reference/gc/fn.root): Pins `value` so it stays alive while the returned `Root` does.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`upgrade`](/docs/reference/gc/upgrade): Returns the value while it is still alive, `None` once it was freed.
- [`heap_bytes`](/docs/reference/gc/heap_bytes): Returns the size of the managed heap in bytes.
- [`collect`](/docs/reference/gc/collect): Runs every pending `fn drop()` and the cycle collector now, and returns the number of bytes freed.
