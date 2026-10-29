---
slug: "collections/vec/Partitioned"
title: "Partitioned"
description: "Two-bucket result of partition (matched = pred true, rest = pred false). Named pair instead of Vec<Vec<T>> so callers do not index [0]/[1]."
module: "collections::vec"
kind: "class"
name: "Partitioned"
signature: "class Partitioned<T>"
import: "use collections::vec::{Partitioned};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/vec.hy#L9"
order: 0
---

Two-bucket result of `partition` ([`matched`](/docs/reference/collections/vec/Partitioned/matched) = pred true, [`rest`](/docs/reference/collections/vec/Partitioned/rest) = pred false). Named pair instead of `Vec<Vec<T>>` so callers do not index `[0]`/`[1]`.

## Methods

| Name | Description |
|------|-------------|
| [`matched`](/docs/reference/collections/vec/Partitioned/matched) | The elements for which the predicate was `true`. |
| [`rest`](/docs/reference/collections/vec/Partitioned/rest) | The elements for which the predicate was `false`. |

## See also

- [`Partitioned::matched`](/docs/reference/collections/vec/Partitioned/matched)
- [`Partitioned::rest`](/docs/reference/collections/vec/Partitioned/rest)
