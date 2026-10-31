---
slug: "stdlib/future/race"
package: "stdlib"
title: "race"
description: "Runs every body and returns the first to finish; the others are cancelled (they unwind, running their defers)."
module: "future"
kind: "fn"
name: "race"
signature: "fn race<T>(Vec<unit -> T> bodies) -> Result<T, TaskError>"
import: "use future::{race};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L438"
order: 5
---

Runs every body and returns the first to finish; the others are cancelled (they unwind, running their `defer`s).

## Parameters

| Name | Type |
|------|------|
| `bodies` | `Vec<unit -> T>` |

## Returns

`Result<T, TaskError>`

## Errors

The first finisher's `TaskError` when it did not produce a value.

## Panics

Panics when `bodies` is empty.

## Examples

```coil
use future::{race};
use task::{sleep};
use tests::assert;
let bodies: Vec<unit -> string> = Vec::new();
bodies.push(fn () {
    sleep(50);
    return "slow";
});
bodies.push(fn () => "fast");
let winner = race(bodies);
assert!(winner.unwrap_or("") == "fast");
```

## See also

- [`all`](/packages/stdlib/reference/future/all): Runs every body concurrently and returns their results in input order.
- [`limit`](/packages/stdlib/reference/future/limit): Like `all`, with at most `n` bodies running at once (`n` at least 1).
- [`try_all`](/packages/stdlib/reference/future/try_all): Runs bodies that return `Result` and collects their `Ok` values in input order.
- [`first_ok`](/packages/stdlib/reference/future/first_ok): Runs bodies that return `Result` and returns the first `Ok`, cancelling the rest.
