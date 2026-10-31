---
slug: "stdlib/future/try_all"
package: "stdlib"
title: "try_all"
description: "Runs bodies that return Result and collects their Ok values in input order. The first Err cancels the bodies still running and is returned."
module: "future"
kind: "fn"
name: "try_all"
signature: "fn try_all<T, E>(Vec<unit -> Result<T, E>> bodies) -> Result<Vec<T>, E>"
import: "use future::{try_all};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L367"
order: 4
---

Runs bodies that return [`Result`](/docs/reference/prelude/Result) and collects their `Ok` values in input order. The first `Err` cancels the bodies still running and is returned.

## Parameters

| Name | Type |
|------|------|
| `bodies` | `Vec<unit -> Result<T, E>>` |

## Returns

`Result<Vec<T>, E>`

## Panics

A panicking body is a bug, not an outcome: it fails the call with the same
message.

## Examples

```coil
use future::{try_all};
use tests::assert;
let bodies: Vec<unit -> Result<int, string>> = Vec::new();
bodies.push(fn () => Result::Ok(1));
bodies.push(fn () => Result::Err("no"));
assert!(try_all(bodies) == Result::Err("no"));
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`all`](/packages/stdlib/reference/future/all): Runs every body concurrently and returns their results in input order.
- [`limit`](/packages/stdlib/reference/future/limit): Like `all`, with at most `n` bodies running at once (`n` at least 1).
- [`race`](/packages/stdlib/reference/future/race): Runs every body and returns the first to finish; the others are cancelled (they unwind, running their `defer`s).
- [`first_ok`](/packages/stdlib/reference/future/first_ok): Runs bodies that return `Result` and returns the first `Ok`, cancelling the rest.
