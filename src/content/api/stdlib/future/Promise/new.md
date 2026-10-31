---
slug: "stdlib/future/Promise/new"
package: "stdlib"
title: "Promise::new"
description: "A promise with no value yet."
module: "future"
kind: "static method"
name: "new"
parent: "Promise"
signature: "pub static fn new() -> Promise<T>"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L55"
order: 0
---

A promise with no value yet.

## Returns

`Promise<T>`

## See also

- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.
- [`Promise::resolved`](/packages/stdlib/reference/future/Promise/resolved): A promise that already holds `value`.
- [`Promise::resolve`](/packages/stdlib/reference/future/Promise/resolve): Sets the value and wakes every waiter.
- [`Promise::cancel`](/packages/stdlib/reference/future/Promise/cancel): Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`.
- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait): Waits for the value (a suspension point).
- [`Promise::wait_timeout`](/packages/stdlib/reference/future/Promise/wait_timeout): Like `wait`, giving up after `ms` milliseconds.
- [`Promise::try_get`](/packages/stdlib/reference/future/Promise/try_get): The value if it is set, without waiting.
- [`Promise::is_done`](/packages/stdlib/reference/future/Promise/is_done): `true` once the promise is resolved or cancelled.
