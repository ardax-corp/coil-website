---
slug: "gc/Root"
title: "Root"
description: "A strong pin that keeps a value alive, made by root."
module: "gc"
kind: "class"
name: "Root"
signature: "class Root<T>"
import: "use gc::{Root};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/c4231aba4e3db4e3f3f9ece8f3d5de6d8aa0ec4a/compiler/src/builtin_docs/gc.coil#L23"
order: 0
---

A strong pin that keeps a value alive, made by [`root`](/docs/reference/gc/fn.root).

While the `Root` is alive (until [`unroot`](/docs/reference/gc/unroot)), its value stays alive, even
when nothing else refers to it. The usual use is FFI:
pin a Coil buffer or callback before handing its address to C code that
keeps it. Read the value with [`get`](/docs/reference/gc/get), release it with [`unroot`](/docs/reference/gc/unroot). A `Root`
cannot be sent to another thread.

## Examples

```coil
use gc::{root, get, Root};
use tests::assert;
let pin: Root<Vec<int>> = root(Vec::from([1, 2, 3]));
let n = match get(pin) {
    Option::Some(v) => v.len(),
    Option::None => 0,
};
assert!(n == 3);
```

## See also

- [`gc::root`](/docs/reference/gc/fn.root)
- [`gc::unroot`](/docs/reference/gc/unroot)
- [`gc::get`](/docs/reference/gc/get)
- [`Weak`](/docs/reference/gc/Weak): A handle that refers to a value without keeping it alive, made by `weak`.
