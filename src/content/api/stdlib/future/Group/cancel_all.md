---
slug: "stdlib/future/Group/cancel_all"
package: "stdlib"
title: "Group::cancel_all"
description: "Cancels every child that has not finished. Each one unwinds at its next suspension point, running its defers, and still comes out of next."
module: "future"
kind: "method"
name: "cancel_all"
parent: "Group"
signature: "pub fn cancel_all()"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/future.hy#L253"
order: 7
---

Cancels every child that has not finished. Each one unwinds at its next suspension point, running its `defer`s, and still comes out of [`next`](/packages/stdlib/reference/future/Group/next).

Called on a `Group` value as `value.cancel_all(…)`.

## See also

- [`Group::next`](/packages/stdlib/reference/future/Group/next)
- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
- [`Group::new`](/packages/stdlib/reference/future/Group/new): An empty group whose children run in scope `s`.
- [`Group::spawn`](/packages/stdlib/reference/future/Group/spawn): Starts `body` as a child task of the group's scope.
- [`Group::next_index`](/packages/stdlib/reference/future/Group/next_index): Like `next`, giving the child's position in spawn order instead.
- [`Group::task`](/packages/stdlib/reference/future/Group/task): The child started `i`-th (from 0).
- [`Group::len`](/packages/stdlib/reference/future/Group/len): Number of children started.
- [`Group::pending`](/packages/stdlib/reference/future/Group/pending): Number of children `next` has not returned yet.
