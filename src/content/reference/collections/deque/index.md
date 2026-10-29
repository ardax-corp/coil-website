---
slug: "collections/deque/index"
title: "collections::deque"
description: "VecDeque: a double-ended queue with fast push and pop at both ends."
module: "collections::deque"
kind: "module"
name: "collections::deque"
origin: "stdlib"
auto: false
order: 23
---

Part of [coil-stdlib](/packages/stdlib). spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::deque::{VecDeque};
```

## Types

| Name | Description |
|------|-------------|
| [`VecDeque`](/docs/reference/collections/deque/VecDeque) | A double-ended queue: constant-time push and pop at both ends. |
