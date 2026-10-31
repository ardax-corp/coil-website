---
slug: "stdlib/future/Promise/resolve"
package: "stdlib"
title: "Promise::resolve"
description: "Sets the value and wakes every waiter. Returns false, and changes nothing, when the promise was already resolved or cancelled."
module: "future"
kind: "method"
name: "resolve"
parent: "Promise"
signature: "pub fn resolve(T value) -> bool"
import: "use future::{Promise};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L66"
order: 2
---

Sets the value and wakes every waiter. Returns `false`, and changes nothing, when the promise was already resolved or cancelled.

Called on a `Promise` value as `value.resolve(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`bool`

## See also

- [`Promise`](/packages/stdlib/reference/future/Promise): A one-shot value that some other code sets: the resolver side of a future.
- [`Promise::new`](/packages/stdlib/reference/future/Promise/new): A promise with no value yet.
- [`Promise::resolved`](/packages/stdlib/reference/future/Promise/resolved): A promise that already holds `value`.
- [`Promise::cancel`](/packages/stdlib/reference/future/Promise/cancel): Marks the promise as never getting a value (its producer is gone): waiters get `Err(TaskError::Cancelled)`.
- [`Promise::wait`](/packages/stdlib/reference/future/Promise/wait): Waits for the value (a suspension point).
- [`Promise::wait_timeout`](/packages/stdlib/reference/future/Promise/wait_timeout): Like `wait`, giving up after `ms` milliseconds.
- [`Promise::try_get`](/packages/stdlib/reference/future/Promise/try_get): The value if it is set, without waiting.
- [`Promise::is_done`](/packages/stdlib/reference/future/Promise/is_done): `true` once the promise is resolved or cancelled.
