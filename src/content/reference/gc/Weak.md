---
slug: "gc/Weak"
title: "Weak"
description: "A handle that refers to a value without keeping it alive, made by weak."
module: "gc"
kind: "class"
name: "Weak"
signature: "class Weak<T>"
import: "use gc::{Weak};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/gc.hy#L45"
order: 1
---

A handle that refers to a value without keeping it alive, made by [`weak`](/docs/reference/gc/fn.weak).

[`upgrade`](/docs/reference/gc/upgrade) returns the value while something else still keeps it alive,
and `None` once a collection has freed it. Use it for registries and
caches that must not extend lifetimes. A `Weak` cannot be sent to
another thread.

## Examples

```coil
use gc::{weak, upgrade, Weak};
use tests::assert;
let data = Vec::from([1, 2]);
let w: Weak<Vec<int>> = weak(data);
let alive = match upgrade(w) {
    Option::Some(v) => v.len() == 2,
    Option::None => false,
};
assert!(alive && data.len() == 2);
```

## See also

- [`gc::weak`](/docs/reference/gc/fn.weak)
- [`gc::upgrade`](/docs/reference/gc/upgrade)
- [`Root`](/docs/reference/gc/Root): A strong pin that keeps a value alive, made by root.
