---
slug: "cell/index"
title: "cell"
description: "Ref<T>: a shared mutable cell for state that closures and tasks must see change."
module: "cell"
kind: "module"
name: "cell"
origin: "stdlib"
auto: false
order: 20
---

Lambdas, `defer` blocks and tasks capture copies of locals. Put state that several of them must update in a [`Ref`](/docs/reference/cell/Ref).

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use cell::{Ref};
```

## Types

| Name | Description |
|------|-------------|
| [`Ref`](/docs/reference/cell/Ref) | A shared, mutable box holding one `T`. |
