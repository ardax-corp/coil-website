---
slug: "stdlib/collections/vec/Partitioned"
package: "stdlib"
title: "Partitioned"
description: "Two-bucket result of partition (matched = pred true, rest = pred false). Named pair instead of Vec<Vec<T>> so callers do not index [0]/[1]."
module: "collections::vec"
kind: "class"
name: "Partitioned"
signature: "class Partitioned<T>"
import: "use collections::vec::{Partitioned};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/vec.coil#L10"
order: 0
---

Two-bucket result of `partition` ([`matched`](/packages/stdlib/reference/collections/vec/Partitioned/matched) = pred true, [`rest`](/packages/stdlib/reference/collections/vec/Partitioned/rest) = pred false). Named pair instead of `Vec<Vec<T>>` so callers do not index `[0]`/`[1]`.

## Methods

| Name | Description |
|------|-------------|
| [`matched`](/packages/stdlib/reference/collections/vec/Partitioned/matched) | The elements for which the predicate was `true`. |
| [`rest`](/packages/stdlib/reference/collections/vec/Partitioned/rest) | The elements for which the predicate was `false`. |

## See also

- [`Partitioned::matched`](/packages/stdlib/reference/collections/vec/Partitioned/matched)
- [`Partitioned::rest`](/packages/stdlib/reference/collections/vec/Partitioned/rest)
