---
slug: "stdlib/future/Group/next_index"
package: "stdlib"
title: "Group::next_index"
description: "Like next, giving the child's position in spawn order instead."
module: "future"
kind: "method"
name: "next_index"
parent: "Group"
signature: "pub fn next_index() -> Option<int>"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.coil#L223"
order: 3
---

Like [`next`](/packages/stdlib/reference/future/Group/next), giving the child's position in spawn order instead.

Called on a `Group` value as `value.next_index(…)`.

## Returns

`Option<int>`

## See also

- [`Group::next`](/packages/stdlib/reference/future/Group/next)
- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
- [`Group::new`](/packages/stdlib/reference/future/Group/new): An empty group whose children run in scope `s`.
- [`Group::spawn`](/packages/stdlib/reference/future/Group/spawn): Starts `body` as a child task of the group's scope.
- [`Group::task`](/packages/stdlib/reference/future/Group/task): The child started `i`-th (from 0).
- [`Group::len`](/packages/stdlib/reference/future/Group/len): Number of children started.
- [`Group::pending`](/packages/stdlib/reference/future/Group/pending): Number of children `next` has not returned yet.
- [`Group::cancel_all`](/packages/stdlib/reference/future/Group/cancel_all): Cancels every child that has not finished.
