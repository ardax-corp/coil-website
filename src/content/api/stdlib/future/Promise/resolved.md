---
slug: "stdlib/future/Promise/resolved"
package: "stdlib"
title: "Promise::resolved"
description: "A promise that already holds value."
module: "future"
kind: "static method"
name: "resolved"
parent: "Promise"
signature: "pub static fn resolved(T value) -> Promise<T>"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L60"
order: 1
---

A promise that already holds `value`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`Promise<T>`

## See also

- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.
- [`Promise::new`](/packages/stdlib/reference/future/Promise/new): A promise with no value yet.
- [`Promise::resolve`](/packages/stdlib/reference/future/Promise/resolve): Sets the value and wakes every waiter.
- [`Promise::cancel`](/packages/stdlib/reference/future/Promise/cancel): Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`.
- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait): Waits for the value (a suspension point).
- [`Promise::wait_timeout`](/packages/stdlib/reference/future/Promise/wait_timeout): Like `wait`, giving up after `ms` milliseconds.
- [`Promise::try_get`](/packages/stdlib/reference/future/Promise/try_get): The value if it is set, without waiting.
- [`Promise::is_done`](/packages/stdlib/reference/future/Promise/is_done): `true` once the promise is resolved or cancelled.
