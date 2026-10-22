---
slug: "collections/vec/found_at"
title: "found_at"
description: "found is None or an index of needle in xs (for contracts)."
module: "collections::vec"
kind: "fn"
name: "found_at"
signature: "fn found_at(Vec<int> xs, int needle, Option<int> found) -> bool"
import: "use collections::vec::{found_at};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections/vec.hy#L60"
order: 1
---

`found` is `None` or an index of `needle` in `xs` (for contracts).

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<int>` |
| `needle` | `int` |
| `found` | `Option<int>` |

## Returns

`bool`

## See also

- [`chunks`](/docs/reference/collections/vec/chunks): Consecutive non-overlapping slices of size (last slice may be short).
- [`windows`](/docs/reference/collections/vec/windows): Overlapping sliding windows of exact size.
- [`partition`](/docs/reference/collections/vec/partition): Split xs into (matched, rest) by pred.
