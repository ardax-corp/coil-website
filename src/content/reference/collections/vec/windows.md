---
slug: "collections/vec/windows"
title: "windows"
description: "Overlapping sliding windows of exact size. Empty if size <= 0 or size > len."
module: "collections::vec"
kind: "fn"
name: "windows"
signature: "fn windows<T>(Vec<T> xs, int size) -> Vec<Vec<T>>"
import: "use collections::vec::{windows};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections/vec.hy#L212"
order: 3
---

Overlapping sliding windows of exact `size`. Empty if `size <= 0` or `size > len`.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |
| `size` | `int` |

## Returns

`Vec<Vec<T>>`

## See also

- [`found_at`](/docs/reference/collections/vec/found_at): found is None or an index of needle in xs (for contracts).
- [`chunks`](/docs/reference/collections/vec/chunks): Consecutive non-overlapping slices of size (last slice may be short).
- [`partition`](/docs/reference/collections/vec/partition): Split xs into (matched, rest) by pred.
