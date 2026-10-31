---
slug: "stdlib/future/Group/new"
package: "stdlib"
title: "Group::new"
description: "An empty group whose children run in scope s."
module: "future"
kind: "static method"
name: "new"
parent: "Group"
signature: "pub static fn new(Scope s) -> Group<T>"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.coil#L194"
order: 0
---

An empty group whose children run in scope `s`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Scope` |

## Returns

`Group<T>`

## See also

- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
- [`Group::spawn`](/packages/stdlib/reference/future/Group/spawn): Starts `body` as a child task of the group's scope.
- [`Group::next`](/packages/stdlib/reference/future/Group/next): Waits for the next child to finish and returns it; `None` once every child has been returned.
- [`Group::next_index`](/packages/stdlib/reference/future/Group/next_index): Like `next`, giving the child's position in spawn order instead.
- [`Group::task`](/packages/stdlib/reference/future/Group/task): The child started `i`-th (from 0).
- [`Group::len`](/packages/stdlib/reference/future/Group/len): Number of children started.
- [`Group::pending`](/packages/stdlib/reference/future/Group/pending): Number of children `next` has not returned yet.
- [`Group::cancel_all`](/packages/stdlib/reference/future/Group/cancel_all): Cancels every child that has not finished.
