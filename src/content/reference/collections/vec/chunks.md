---
slug: "collections/vec/chunks"
title: "chunks"
description: "Consecutive non-overlapping slices of size (last slice may be short). Empty when size <= 0. Name is chunks (no chunk alias)."
module: "collections::vec"
kind: "fn"
name: "chunks"
signature: "fn chunks<T>(Vec<T> xs, int size) -> Vec<Vec<T>>"
import: "use collections::vec::{chunks};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections/vec.hy#L190"
order: 2
---

Consecutive non-overlapping slices of `size` (last slice may be short). Empty when `size <= 0`. Name is `chunks` (no `chunk` alias).

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |
| `size` | `int` |

## Returns

`Vec<Vec<T>>`

## See also

- [`found_at`](/docs/reference/collections/vec/found_at): found is None or an index of needle in xs (for contracts).
- [`windows`](/docs/reference/collections/vec/windows): Overlapping sliding windows of exact size.
- [`partition`](/docs/reference/collections/vec/partition): Split xs into (matched, rest) by pred.
