---
slug: "stdlib/collections/vec/Partitioned/matched"
package: "stdlib"
title: "Partitioned::matched"
description: "The elements for which the predicate was true."
module: "collections::vec"
kind: "method"
name: "matched"
parent: "Partitioned"
signature: "pub fn matched() -> Vec<T>"
import: "use collections::vec::{Partitioned};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/vec.coil#L17"
order: 0
---

The elements for which the predicate was `true`.

Called on a `Partitioned` value as `value.matched(…)`.

## Returns

`Vec<T>`

## See also

- [`Partitioned`](/packages/stdlib/reference/collections/vec/Partitioned): Two-bucket result of `partition` (`matched` = pred true, `rest` = pred false).
- [`Partitioned::rest`](/packages/stdlib/reference/collections/vec/Partitioned/rest): The elements for which the predicate was `false`.
