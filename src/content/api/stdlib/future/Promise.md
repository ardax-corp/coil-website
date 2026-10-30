---
slug: "stdlib/future/Promise"
package: "stdlib"
title: "Promise"
description: "A one-shot value that some other code sets: the resolver side of a future."
module: "future"
kind: "class"
name: "Promise"
signature: "shared class Promise<T>"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L46"
order: 0
---

A one-shot value that some other code sets: the resolver side of a future.

Make one with [`Promise::new`](/packages/stdlib/reference/future/Promise/new), hand it to whoever will produce the value,
and [`wait`](/packages/stdlib/reference/future/Promise/wait) for it. The first [`resolve`](/packages/stdlib/reference/future/Promise/resolve) wins; every waiter wakes. A promise
is not owned by a scope, so it can cross scopes and live in maps (a reply
matched to its request by id).

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/future/Promise/new) | A promise with no value yet. |
| [`resolved`](/packages/stdlib/reference/future/Promise/resolved) | A promise that already holds `value`. |

## Methods

| Name | Description |
|------|-------------|
| [`resolve`](/packages/stdlib/reference/future/Promise/resolve) | Sets the value and wakes every waiter. |
| [`cancel`](/packages/stdlib/reference/future/Promise/cancel) | Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`. |
| [`wait`](/packages/stdlib/reference/future/Promise/wait) | Waits for the value (a suspension point). |
| [`wait_timeout`](/packages/stdlib/reference/future/Promise/wait_timeout) | Like [`wait`](/packages/stdlib/reference/future/Promise/wait), giving up after `ms` milliseconds. |
| [`try_get`](/packages/stdlib/reference/future/Promise/try_get) | The value if it is set, without waiting. |
| [`is_done`](/packages/stdlib/reference/future/Promise/is_done) | `true` once the promise is resolved or cancelled. |

## Examples

```coil
use future::{Promise};
use task::{scope, Scope, sleep};
use tests::assert;
let r = scope(fn (Scope s) {
    let p: Promise<int> = Promise::new();
    s.spawn(fn () use (p) {
        sleep(1);
        p.resolve(42);
    });
    return p.wait();
});
assert!(r.unwrap_or(Result::Ok(0)).unwrap_or(0) == 42);
```

## See also

- [`Promise::new`](/packages/stdlib/reference/future/Promise/new)
- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait)
- [`Promise::resolve`](/packages/stdlib/reference/future/Promise/resolve)
- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
