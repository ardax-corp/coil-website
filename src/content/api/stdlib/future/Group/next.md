---
slug: "stdlib/future/Group/next"
package: "stdlib"
title: "Group::next"
description: "Waits for the next child to finish and returns it; None once every child has been returned. join on the result does not wait."
module: "future"
kind: "method"
name: "next"
parent: "Group"
signature: "pub fn next() -> Option<Task<T>>"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L215"
order: 2
---

Waits for the next child to finish and returns it; `None` once every child has been returned. `join` on the result does not wait.

Called on a `Group` value as `value.next(…)`.

## Returns

`Option<Task<T>>`

## Panics

Panics on a deadlock: children are pending and none can run.

## See also

- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
- [`Group::new`](/packages/stdlib/reference/future/Group/new): An empty group whose children run in scope `s`.
- [`Group::spawn`](/packages/stdlib/reference/future/Group/spawn): Starts `body` as a child task of the group's scope.
- [`Group::next_index`](/packages/stdlib/reference/future/Group/next_index): Like `next`, giving the child's position in spawn order instead.
- [`Group::task`](/packages/stdlib/reference/future/Group/task): The child started `i`-th (from 0).
- [`Group::len`](/packages/stdlib/reference/future/Group/len): Number of children started.
- [`Group::pending`](/packages/stdlib/reference/future/Group/pending): Number of children `next` has not returned yet.
- [`Group::cancel_all`](/packages/stdlib/reference/future/Group/cancel_all): Cancels every child that has not finished.
