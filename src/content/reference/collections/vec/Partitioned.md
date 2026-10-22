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
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/vec.hy#L330"
order: 0
---

Two-bucket result of [`partition`](/docs/reference/collections/vec/partition) ([`matched`](/docs/reference/collections/vec/Partitioned/matched) = pred true, [`rest`](/docs/reference/collections/vec/Partitioned/rest) = pred false). Named pair instead of `Vec<Vec<T>>` so callers do not index `[0]`/`[1]`.

## Methods

| Name | Description |
|------|-------------|
| [`matched`](/docs/reference/collections/vec/Partitioned/matched) | The elements for which the predicate was `true`. |
| [`rest`](/docs/reference/collections/vec/Partitioned/rest) | The elements for which the predicate was `false`. |

## See also

- [`collections::vec::partition`](/docs/reference/collections/vec/partition)
- [`Partitioned::matched`](/docs/reference/collections/vec/Partitioned/matched)
- [`Partitioned::rest`](/docs/reference/collections/vec/Partitioned/rest)
