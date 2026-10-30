---
slug: "stdlib/collections/vec/Partitioned/rest"
package: "stdlib"
title: "Partitioned::rest"
description: "The elements for which the predicate was false."
module: "collections::vec"
kind: "method"
name: "rest"
parent: "Partitioned"
signature: "pub fn rest() -> Vec<T>"
import: "use collections::vec::{Partitioned};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/vec.hy#L21"
order: 1
---

The elements for which the predicate was `false`.

Called on a `Partitioned` value as `value.rest(…)`.

## Returns

`Vec<T>`

## See also

- [`Partitioned`](/packages/stdlib/reference/collections/vec/Partitioned): Two-bucket result of `partition` (`matched` = pred true, `rest` = pred false).
- [`Partitioned::matched`](/packages/stdlib/reference/collections/vec/Partitioned/matched): The elements for which the predicate was `true`.
