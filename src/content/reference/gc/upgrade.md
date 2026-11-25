---
slug: "gc/upgrade"
title: "upgrade"
description: "Returns the value while it is still alive, None once it was freed."
module: "gc"
kind: "fn"
name: "upgrade"
signature: "fn upgrade<T>(Weak<T> handle) -> Option<T>"
import: "use gc::{upgrade};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/c4231aba4e3db4e3f3f9ece8f3d5de6d8aa0ec4a/compiler/src/builtin_docs/gc.coil#L144"
order: 6
---

Returns the value while it is still alive, `None` once it was freed.

A weak referent is cleared when nothing strong (a variable, a field, a
[`Root`](/docs/reference/gc/Root), ...) refers to it any more: at its last owner's release, or when
the cycle collector frees the cycle it is in. Class `drop`
finalizers run before weaks are cleared and can still upgrade a weak to
the object being dropped.

## Parameters

| Name | Type |
|------|------|
| `handle` | `Weak<T>` |

## Returns

`Option<T>`

## Examples

```coil
use gc::{weak, upgrade, collect, Weak};
use tests::assert;
fn make() -> Weak<Vec<int>> {
    let v = Vec::from([1, 2, 3]);
    // `v`, the only strong reference, ends with this call.
    return weak(v);
}

fn main() {
    let w = make();
    collect();
    let gone = match upgrade(w) {
        Option::Some(_) => false,
        Option::None => true,
    };
    assert!(gone);
}
```

## See also

- [`gc::Root`](/docs/reference/gc/Root)
- [`root`](/docs/reference/gc/fn.root): Pins `value` so it stays alive while the returned `Root` does.
- [`get`](/docs/reference/gc/get): Returns the pinned value, leaving the pin in place.
- [`unroot`](/docs/reference/gc/unroot): Releases the pin and returns the value it held.
- [`weak`](/docs/reference/gc/fn.weak): Makes a handle to `value` that does not keep it alive.
- [`heap_bytes`](/docs/reference/gc/heap_bytes): Returns the size of the managed heap in bytes.
- [`collect`](/docs/reference/gc/collect): Runs every pending `fn drop()` and the cycle collector now, and returns the number of bytes freed.
