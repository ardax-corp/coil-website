---
slug: "gc/index"
title: "gc"
description: "The gc module."
module: "gc"
kind: "module"
name: "gc"
origin: "builtin"
auto: false
order: 9
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use gc::{Root, Weak};
```

## Types

| Name | Description |
|------|-------------|
| [`Root`](/docs/reference/gc/Root) | A strong pin that keeps a value alive, made by [`root`](/docs/reference/gc/root). |
| [`Weak`](/docs/reference/gc/Weak) | A handle that refers to a value without keeping it alive, made by [`weak`](/docs/reference/gc/weak). |

## Functions

| Name | Description |
|------|-------------|
| [`root`](/docs/reference/gc/root) | Pins `value` so the garbage collector keeps it alive while the returned [`Root`](/docs/reference/gc/Root) is reachable. |
| [`get`](/docs/reference/gc/get) | Returns the pinned value, leaving the pin in place. |
| [`unroot`](/docs/reference/gc/unroot) | Releases the pin and returns the value it held. |
| [`weak`](/docs/reference/gc/weak) | Makes a handle to `value` that does not keep it alive. |
| [`upgrade`](/docs/reference/gc/upgrade) | Returns the value while it is still alive, `None` once it was collected. |
| [`heap_bytes`](/docs/reference/gc/heap_bytes) | Returns the size of the managed heap in bytes. |
| [`collect`](/docs/reference/gc/collect) | Runs a full garbage collection now and returns the number of bytes freed. |
