---
slug: "stdlib/future/Promise/is_done"
package: "stdlib"
title: "Promise::is_done"
description: "true once the promise is resolved or cancelled."
module: "future"
kind: "method"
name: "is_done"
parent: "Promise"
signature: "pub fn is_done() -> bool"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L132"
order: 7
---

`true` once the promise is resolved or cancelled.

Called on a `Promise` value as `value.is_done(…)`.

## Returns

`bool`

## See also

- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.
- [`Promise::new`](/packages/stdlib/reference/future/Promise/new): A promise with no value yet.
- [`Promise::resolved`](/packages/stdlib/reference/future/Promise/resolved): A promise that already holds `value`.
- [`Promise::resolve`](/packages/stdlib/reference/future/Promise/resolve): Sets the value and wakes every waiter.
- [`Promise::cancel`](/packages/stdlib/reference/future/Promise/cancel): Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`.
- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait): Waits for the value (a suspension point).
- [`Promise::wait_timeout`](/packages/stdlib/reference/future/Promise/wait_timeout): Like `wait`, giving up after `ms` milliseconds.
- [`Promise::try_get`](/packages/stdlib/reference/future/Promise/try_get): The value if it is set, without waiting.
