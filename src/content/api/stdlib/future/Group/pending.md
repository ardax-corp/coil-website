---
slug: "stdlib/future/Group/pending"
package: "stdlib"
title: "Group::pending"
description: "Number of children next has not returned yet."
module: "future"
kind: "method"
name: "pending"
parent: "Group"
signature: "pub fn pending() -> int"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L246"
order: 6
---

Number of children [`next`](/packages/stdlib/reference/future/Group/next) has not returned yet.

Called on a `Group` value as `value.pending(…)`.

## Returns

`int`

## See also

- [`Group::next`](/packages/stdlib/reference/future/Group/next)
- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
- [`Group::new`](/packages/stdlib/reference/future/Group/new): An empty group whose children run in scope `s`.
- [`Group::spawn`](/packages/stdlib/reference/future/Group/spawn): Starts `body` as a child task of the group's scope.
- [`Group::next_index`](/packages/stdlib/reference/future/Group/next_index): Like `next`, giving the child's position in spawn order instead.
- [`Group::task`](/packages/stdlib/reference/future/Group/task): The child started `i`-th (from 0).
- [`Group::len`](/packages/stdlib/reference/future/Group/len): Number of children started.
- [`Group::cancel_all`](/packages/stdlib/reference/future/Group/cancel_all): Cancels every child that has not finished.
