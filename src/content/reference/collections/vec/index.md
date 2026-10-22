---
slug: "collections/vec/index"
title: "collections::vec"
description: "The collections::vec module."
module: "collections::vec"
kind: "module"
name: "collections::vec"
origin: "stdlib"
auto: false
order: 20
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::vec::{Partitioned, found_at};
```

## Types

| Name | Description |
|------|-------------|
| [`Partitioned`](/docs/reference/collections/vec/Partitioned) | Two-bucket result of [`partition`](/docs/reference/collections/vec/partition) (`matched` = pred true, `rest` = pred false). |

## Functions

| Name | Description |
|------|-------------|
| [`found_at`](/docs/reference/collections/vec/found_at) | `found` is `None` or an index of `needle` in `xs` (for contracts). |
| [`chunks`](/docs/reference/collections/vec/chunks) | Consecutive non-overlapping slices of `size` (last slice may be short). |
| [`windows`](/docs/reference/collections/vec/windows) | Overlapping sliding windows of exact `size`. |
| [`partition`](/docs/reference/collections/vec/partition) | Split `xs` into (`matched`, `rest`) by `pred`. |
