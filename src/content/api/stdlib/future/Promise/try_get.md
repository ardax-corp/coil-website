---
slug: "stdlib/future/Promise/try_get"
package: "stdlib"
title: "Promise::try_get"
description: "The value if it is set, without waiting."
module: "future"
kind: "method"
name: "try_get"
parent: "Promise"
signature: "pub fn try_get() -> Option<T>"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L127"
order: 6
---

The value if it is set, without waiting.

Called on a `Promise` value as `value.try_get(…)`.

## Returns

`Option<T>`

## See also

- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.
- [`Promise::new`](/packages/stdlib/reference/future/Promise/new): A promise with no value yet.
- [`Promise::resolved`](/packages/stdlib/reference/future/Promise/resolved): A promise that already holds `value`.
- [`Promise::resolve`](/packages/stdlib/reference/future/Promise/resolve): Sets the value and wakes every waiter.
- [`Promise::cancel`](/packages/stdlib/reference/future/Promise/cancel): Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`.
- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait): Waits for the value (a suspension point).
- [`Promise::wait_timeout`](/packages/stdlib/reference/future/Promise/wait_timeout): Like `wait`, giving up after `ms` milliseconds.
- [`Promise::is_done`](/packages/stdlib/reference/future/Promise/is_done): `true` once the promise is resolved or cancelled.
