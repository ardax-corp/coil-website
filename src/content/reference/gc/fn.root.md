---
slug: "gc/fn.root"
title: "root"
description: "Pins value so it stays alive while the returned Root does."
module: "gc"
kind: "fn"
name: "root"
signature: "fn root<T>(T value) -> Root<T>"
import: "use gc::{root};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/c4231aba4e3db4e3f3f9ece8f3d5de6d8aa0ec4a/compiler/src/builtin_docs/gc.coil#L57"
order: 2
---

Pins `value` so it stays alive while the returned [`Root`](/docs/reference/gc/Root) does.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`Root<T>`

## Examples

```coil
use gc::{root, get};
use tests::assert;
let pin = root("kept");
assert!(match get(pin) { Option::Some(s) => s == "kept", Option::None => false });
```

## See also

- [`gc::Root`](/docs/reference/gc/Root)
- [`get`](/docs/reference/gc/get): Returns the pinned value, leaving the pin in place.
- [`unroot`](/docs/reference/gc/unroot): Releases the pin and returns the value it held.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`upgrade`](/docs/reference/gc/upgrade): Returns the value while it is still alive, `None` once it was freed.
- [`heap_bytes`](/docs/reference/gc/heap_bytes): Returns the size of the managed heap in bytes.
- [`collect`](/docs/reference/gc/collect): Runs every pending `fn drop()` and the cycle collector now, and returns the number of bytes freed.
