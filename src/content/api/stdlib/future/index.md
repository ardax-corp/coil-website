---
slug: "stdlib/future/index"
package: "stdlib"
title: "future"
description: "Futures over tasks: Promise<T>, Group<T> and combinators such as race, all and first_ok."
module: "future"
kind: "module"
name: "future"
origin: "stdlib"
auto: false
order: 15
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use future::{Promise, Group};
```

## Types

| Name | Description |
|------|-------------|
| [`Promise`](/packages/stdlib/reference/future/Promise) | A one-shot value that some other code sets: the resolver side of a future. |
| [`Group`](/packages/stdlib/reference/future/Group) | Tasks of one scope, handed back in the order they finish. |

## Functions

| Name | Description |
|------|-------------|
| [`all`](/packages/stdlib/reference/future/all) | Runs every body concurrently and returns their results in input order. |
| [`limit`](/packages/stdlib/reference/future/limit) | Like [`all`](/packages/stdlib/reference/future/all), with at most `n` bodies running at once (`n` at least 1). |
| [`try_all`](/packages/stdlib/reference/future/try_all) | Runs bodies that return [`Result`](/docs/reference/prelude/Result) and collects their `Ok` values in input order. |
| [`race`](/packages/stdlib/reference/future/race) | Runs every body and returns the first to finish; the others are cancelled (they unwind, running their `defer`s). |
| [`first_ok`](/packages/stdlib/reference/future/first_ok) | Runs bodies that return [`Result`](/docs/reference/prelude/Result) and returns the first `Ok`, cancelling the rest. |
