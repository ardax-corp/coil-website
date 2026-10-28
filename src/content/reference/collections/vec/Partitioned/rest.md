---
slug: "collections/vec/Partitioned/rest"
title: "Partitioned::rest"
description: "The elements for which the predicate was false."
module: "collections::vec"
kind: "method"
name: "rest"
parent: "Partitioned"
signature: "pub fn rest() -> Vec<T>"
import: "use collections::vec::{Partitioned};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/collections/vec.hy#L21"
order: 1
---

The elements for which the predicate was `false`.

Called on a `Partitioned` value as `value.rest(…)`.

## Returns

`Vec<T>`

## See also

- [`Partitioned`](/docs/reference/collections/vec/Partitioned): Two-bucket result of `partition` (`matched` = pred true, `rest` = pred false).
- [`Partitioned::matched`](/docs/reference/collections/vec/Partitioned/matched): The elements for which the predicate was `true`.
