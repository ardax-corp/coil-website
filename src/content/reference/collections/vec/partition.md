---
slug: "collections/vec/partition"
title: "partition"
description: "Split xs into (matched, rest) by pred. Order inside each bucket is preserved."
module: "collections::vec"
kind: "fn"
name: "partition"
signature: "fn partition<T>(Vec<T> xs, T -> bool pred) -> Partitioned<T>"
import: "use collections::vec::{partition};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections/vec.hy#L253"
order: 4
---

Split `xs` into (`matched`, `rest`) by `pred`. Order inside each bucket is preserved.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |
| `pred` | `T -> bool` |

## Returns

`Partitioned<T>`

## See also

- [`found_at`](/docs/reference/collections/vec/found_at): found is None or an index of needle in xs (for contracts).
- [`chunks`](/docs/reference/collections/vec/chunks): Consecutive non-overlapping slices of size (last slice may be short).
- [`windows`](/docs/reference/collections/vec/windows): Overlapping sliding windows of exact size.
