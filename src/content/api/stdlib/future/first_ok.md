---
slug: "stdlib/future/first_ok"
package: "stdlib"
title: "first_ok"
description: "Runs bodies that return Result and returns the first Ok, cancelling the rest. When every body fails, returns all the errors in input order."
module: "future"
kind: "fn"
name: "first_ok"
signature: "fn first_ok<T, E>(Vec<unit -> Result<T, E>> bodies) -> Result<T, Vec<E>>"
import: "use future::{first_ok};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L474"
order: 6
---

Runs bodies that return [`Result`](/docs/reference/prelude/Result) and returns the first `Ok`, cancelling the rest. When every body fails, returns all the errors in input order.

## Parameters

| Name | Type |
|------|------|
| `bodies` | `Vec<unit -> Result<T, E>>` |

## Returns

`Result<T, Vec<E>>`

## Panics

A panicking body fails the call with the same message.

## Examples

```coil
use future::{first_ok};
use tests::assert;
let bodies: Vec<unit -> Result<int, string>> = Vec::new();
bodies.push(fn () => Result::Err("down"));
bodies.push(fn () => Result::Ok(7));
assert!(first_ok(bodies).unwrap_or(0) == 7);
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`all`](/packages/stdlib/reference/future/all): Runs every body concurrently and returns their results in input order.
- [`limit`](/packages/stdlib/reference/future/limit): Like `all`, with at most `n` bodies running at once (`n` at least 1).
- [`try_all`](/packages/stdlib/reference/future/try_all): Runs bodies that return `Result` and collects their `Ok` values in input order.
- [`race`](/packages/stdlib/reference/future/race): Runs every body and returns the first to finish; the others are cancelled (they unwind, running their `defer`s).
