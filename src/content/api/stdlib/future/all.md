---
slug: "stdlib/future/all"
package: "stdlib"
title: "all"
description: "Runs every body concurrently and returns their results in input order."
module: "future"
kind: "fn"
name: "all"
signature: "fn all<T>(Vec<unit -> T> bodies) -> Result<Vec<T>, TaskError>"
import: "use future::{all};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L293"
order: 2
---

Runs every body concurrently and returns their results in input order.

A panicking body fails the whole call (`Err(TaskError::Panicked)`), as a
panic fails its scope; a body's own errors are values (`T` may be a
[`Result`](/docs/reference/prelude/Result), see [`try_all`](/packages/stdlib/reference/future/try_all)).

## Parameters

| Name | Type |
|------|------|
| `bodies` | `Vec<unit -> T>` |

## Returns

`Result<Vec<T>, TaskError>`

## Examples

```coil
use future::{all};
use tests::assert;
let bodies: Vec<unit -> int> = Vec::new();
bodies.push(fn () => 1);
bodies.push(fn () => 2);
let ok = match all(bodies) {
    Result::Ok(out) => out.len() == 2 && out[0] == 1 && out[1] == 2,
    Result::Err(_) => false,
};
assert!(ok);
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`future::try_all`](/packages/stdlib/reference/future/try_all)
- [`limit`](/packages/stdlib/reference/future/limit): Like `all`, with at most `n` bodies running at once (`n` at least 1).
- [`race`](/packages/stdlib/reference/future/race): Runs every body and returns the first to finish; the others are cancelled (they unwind, running their `defer`s).
- [`first_ok`](/packages/stdlib/reference/future/first_ok): Runs bodies that return `Result` and returns the first `Ok`, cancelling the rest.
