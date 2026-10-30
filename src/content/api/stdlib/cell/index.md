---
slug: "stdlib/cell/index"
package: "stdlib"
title: "cell"
description: "Ref<T>: a shared mutable cell for state that closures and tasks must see change."
module: "cell"
kind: "module"
name: "cell"
origin: "stdlib"
auto: false
order: 3
---

Lambdas, `defer` blocks and tasks capture copies of locals. Put state that several of them must update in a [`Ref`](/packages/stdlib/reference/cell/Ref).

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use cell::{Ref};
```

## Types

| Name | Description |
|------|-------------|
| [`Ref`](/packages/stdlib/reference/cell/Ref) | A shared, mutable box holding one `T`. |
