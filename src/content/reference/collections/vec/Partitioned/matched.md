---
slug: "collections/vec/Partitioned/matched"
title: "Partitioned::matched"
description: "The elements for which the predicate was true."
module: "collections::vec"
kind: "method"
name: "matched"
parent: "Partitioned"
signature: "pub fn matched() -> Vec<T>"
import: "use collections::vec::{Partitioned};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/vec.hy#L337"
order: 0
---

The elements for which the predicate was `true`.

Called on a `Partitioned` value as `value.matched(…)`.

## Returns

`Vec<T>`

## See also

- [`Partitioned`](/docs/reference/collections/vec/Partitioned): Two-bucket result of `partition` (`matched` = pred true, `rest` = pred false).
- [`Partitioned::rest`](/docs/reference/collections/vec/Partitioned/rest): The elements for which the predicate was `false`.
