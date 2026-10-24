---
slug: "gc/index"
title: "gc"
description: "Garbage-collector handles: Root pins, Weak references, heap size and manual collection."
module: "gc"
kind: "module"
name: "gc"
origin: "builtin"
auto: false
order: 10
---

Coil's heap is garbage collected; most programs never touch this module. Use
it when native code holds on to a Coil value ([`root`](/docs/reference/gc/fn.root) it), when a registry
should not keep its entries alive ([`weak`](/docs/reference/gc/fn.weak) and [`upgrade`](/docs/reference/gc/upgrade)), or to measure memory
([`heap_bytes`](/docs/reference/gc/heap_bytes), [`collect`](/docs/reference/gc/collect)).

A class or enum can define `fn drop()` to release a native resource when its
value becomes unreachable. A collection marks everything reachable, runs the
`drop` of unreachable values (each at most once), clears [`Weak`](/docs/reference/gc/Weak) handles whose
value is gone, then frees memory. A [`Weak`](/docs/reference/gc/Weak) to an immediate value (an [`int`](/docs/reference/types/int), a
[`bool`](/docs/reference/types/bool)) always upgrades. [`Root`](/docs/reference/gc/Root) and [`Weak`](/docs/reference/gc/Weak) cannot be sent to another thread.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use gc::{Root, Weak};
```

## Types

| Name | Description |
|------|-------------|
| [`Root`](/docs/reference/gc/Root) | A strong pin that keeps a value alive, made by [`root`](/docs/reference/gc/fn.root). |
| [`Weak`](/docs/reference/gc/Weak) | A handle that refers to a value without keeping it alive, made by [`weak`](/docs/reference/gc/fn.weak). |

## Functions

| Name | Description |
|------|-------------|
| [`root`](/docs/reference/gc/fn.root) | Pins `value` so the garbage collector keeps it alive while the returned [`Root`](/docs/reference/gc/Root) is reachable. |
| [`get`](/docs/reference/gc/get) | Returns the pinned value, leaving the pin in place. |
| [`unroot`](/docs/reference/gc/unroot) | Releases the pin and returns the value it held. |
| [`weak`](/docs/reference/gc/fn.weak) | Makes a handle to `value` that does not keep it alive. |
| [`upgrade`](/docs/reference/gc/upgrade) | Returns the value while it is still alive, `None` once it was collected. |
| [`heap_bytes`](/docs/reference/gc/heap_bytes) | Returns the size of the managed heap in bytes. |
| [`collect`](/docs/reference/gc/collect) | Runs a full garbage collection now and returns the number of bytes freed. |
