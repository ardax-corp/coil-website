---
slug: "stdlib/future/Group/task"
package: "stdlib"
title: "Group::task"
description: "The child started i-th (from 0)."
module: "future"
kind: "method"
name: "task"
parent: "Group"
signature: "pub fn task(int i) -> Task<T>"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.coil#L236"
order: 4
---

The child started `i`-th (from 0).

Called on a `Group` value as `value.task(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`Task<T>`

## See also

- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
- [`Group::new`](/packages/stdlib/reference/future/Group/new): An empty group whose children run in scope `s`.
- [`Group::spawn`](/packages/stdlib/reference/future/Group/spawn): Starts `body` as a child task of the group's scope.
- [`Group::next`](/packages/stdlib/reference/future/Group/next): Waits for the next child to finish and returns it; `None` once every child has been returned.
- [`Group::next_index`](/packages/stdlib/reference/future/Group/next_index): Like `next`, giving the child's position in spawn order instead.
- [`Group::len`](/packages/stdlib/reference/future/Group/len): Number of children started.
- [`Group::pending`](/packages/stdlib/reference/future/Group/pending): Number of children `next` has not returned yet.
- [`Group::cancel_all`](/packages/stdlib/reference/future/Group/cancel_all): Cancels every child that has not finished.
