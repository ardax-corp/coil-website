---
slug: "stdlib/future/limit"
package: "stdlib"
title: "limit"
description: "Like all, with at most n bodies running at once (n at least 1). The next body starts as soon as a running one finishes."
module: "future"
kind: "fn"
name: "limit"
signature: "fn limit<T>(int n, Vec<unit -> T> bodies) -> Result<Vec<T>, TaskError>"
import: "use future::{limit};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L303"
order: 3
---

Like [`all`](/packages/stdlib/reference/future/all), with at most `n` bodies running at once (`n` at least 1). The next body starts as soon as a running one finishes.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |
| `bodies` | `Vec<unit -> T>` |

## Returns

`Result<Vec<T>, TaskError>`

## Panics

Panics when `n` is less than 1.

## See also

- [`future::all`](/packages/stdlib/reference/future/all)
- [`try_all`](/packages/stdlib/reference/future/try_all): Runs bodies that return `Result` and collects their `Ok` values in input order.
- [`race`](/packages/stdlib/reference/future/race): Runs every body and returns the first to finish; the others are cancelled (they unwind, running their `defer`s).
- [`first_ok`](/packages/stdlib/reference/future/first_ok): Runs bodies that return `Result` and returns the first `Ok`, cancelling the rest.
