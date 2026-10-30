---
slug: "stdlib/future/Promise/cancel"
package: "stdlib"
title: "Promise::cancel"
description: "Marks the promise as never getting a value (its producer is gone): waiters get Err(TaskError::Cancelled). Returns false when it was already resolved or cancelled."
module: "future"
kind: "method"
name: "cancel"
parent: "Promise"
signature: "pub fn cancel() -> bool"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L78"
order: 3
---

Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`. Returns `false` when it was already resolved or cancelled.

Called on a `Promise` value as `value.cancel(…)`.

## Returns

`bool`

## See also

- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.
- [`Promise::new`](/packages/stdlib/reference/future/Promise/new): A promise with no value yet.
- [`Promise::resolved`](/packages/stdlib/reference/future/Promise/resolved): A promise that already holds `value`.
- [`Promise::resolve`](/packages/stdlib/reference/future/Promise/resolve): Sets the value and wakes every waiter.
- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait): Waits for the value (a suspension point).
- [`Promise::wait_timeout`](/packages/stdlib/reference/future/Promise/wait_timeout): Like `wait`, giving up after `ms` milliseconds.
- [`Promise::try_get`](/packages/stdlib/reference/future/Promise/try_get): The value if it is set, without waiting.
- [`Promise::is_done`](/packages/stdlib/reference/future/Promise/is_done): `true` once the promise is resolved or cancelled.
