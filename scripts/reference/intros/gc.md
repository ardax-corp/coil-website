---
description: "Garbage-collector handles: Root pins, Weak references, heap size and manual collection."
---
Coil's heap is garbage collected; most programs never touch this module. Use
it when native code holds on to a Coil value (`root` it), when a registry
should not keep its entries alive (`weak` and `upgrade`), or to measure memory
(`heap_bytes`, `collect`).

A class or enum can define `fn drop()` to release a native resource when its
value becomes unreachable. A collection marks everything reachable, runs the
`drop` of unreachable values (each at most once), clears `Weak` handles whose
value is gone, then frees memory. A `Weak` to an immediate value (an `int`, a
`bool`) always upgrades. `Root` and `Weak` cannot be sent to another thread.
