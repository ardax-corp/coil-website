---
slug: "gc/unroot"
title: "unroot"
description: "Releases the pin and returns the value it held."
module: "gc"
kind: "fn"
name: "unroot"
signature: "fn unroot<T>(Root<T> pin) -> Option<T>"
import: "use gc::{unroot};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/gc.hy#L91"
order: 4
---

Releases the pin and returns the value it held.

After this the [`Root`](/docs/reference/gc/Root) no longer keeps the value alive, even if the
[`Root`](/docs/reference/gc/Root) itself is still reachable. A second `unroot` (or [`get`](/docs/reference/gc/get)) returns
`None`.

## Parameters

| Name | Type |
|------|------|
| `pin` | `Root<T>` |

## Returns

`Option<T>`

## Examples

```coil
use gc::{root, unroot};
use tests::assert;
let pin = root("once");
assert!(match unroot(pin) { Option::Some(s) => s == "once", Option::None => false });
assert!(match unroot(pin) { Option::Some(_) => false, Option::None => true });
```

## See also

- [`gc::Root`](/docs/reference/gc/Root)
- [`gc::get`](/docs/reference/gc/get)
- [`root`](/docs/reference/gc/fn.root): Pins `value` so the garbage collector keeps it alive while the returned `Root` is reachable.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`upgrade`](/docs/reference/gc/upgrade): Returns the value while it is still alive, `None` once it was collected.
- [`heap_bytes`](/docs/reference/gc/heap_bytes): Returns the size of the managed heap in bytes.
- [`collect`](/docs/reference/gc/collect): Runs a full garbage collection now and returns the number of bytes freed.
