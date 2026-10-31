---
slug: "stdlib/future/Promise/wait_timeout"
package: "stdlib"
title: "Promise::wait_timeout"
description: "Like wait, giving up after ms milliseconds."
module: "future"
kind: "method"
name: "wait_timeout"
parent: "Promise"
signature: "pub fn wait_timeout(int ms) -> Result<T, TaskError>"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.coil#L115"
order: 5
---

Like [`wait`](/packages/stdlib/reference/future/Promise/wait), giving up after `ms` milliseconds.

Called on a `Promise` value as `value.wait_timeout(…)`.

## Parameters

| Name | Type |
|------|------|
| `ms` | `int` |

## Returns

`Result<T, TaskError>`

## Errors

`Err(TaskError::TimedOut)` when no value came in time, or
`Err(TaskError::Cancelled)` once the promise is cancelled.

## See also

- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait)
- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.
- [`Promise::new`](/packages/stdlib/reference/future/Promise/new): A promise with no value yet.
- [`Promise::resolved`](/packages/stdlib/reference/future/Promise/resolved): A promise that already holds `value`.
- [`Promise::resolve`](/packages/stdlib/reference/future/Promise/resolve): Sets the value and wakes every waiter.
- [`Promise::cancel`](/packages/stdlib/reference/future/Promise/cancel): Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`.
- [`Promise::try_get`](/packages/stdlib/reference/future/Promise/try_get): The value if it is set, without waiting.
- [`Promise::is_done`](/packages/stdlib/reference/future/Promise/is_done): `true` once the promise is resolved or cancelled.
