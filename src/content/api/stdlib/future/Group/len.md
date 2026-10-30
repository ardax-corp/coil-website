---
slug: "stdlib/future/Group/len"
package: "stdlib"
title: "Group::len"
description: "Number of children started."
module: "future"
kind: "method"
name: "len"
parent: "Group"
signature: "pub fn len() -> int"
import: "use future::{Group};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/future.hy#L241"
order: 5
---

Number of children started.

Called on a `Group` value as `value.len(…)`.

## Returns

`int`

## See also

- [`Group`](/packages/stdlib/reference/future/Group): Tasks of one scope, handed back in the order they finish.
- [`Group::new`](/packages/stdlib/reference/future/Group/new): An empty group whose children run in scope `s`.
- [`Group::spawn`](/packages/stdlib/reference/future/Group/spawn): Starts `body` as a child task of the group's scope.
- [`Group::next`](/packages/stdlib/reference/future/Group/next): Waits for the next child to finish and returns it; `None` once every child has been returned.
- [`Group::next_index`](/packages/stdlib/reference/future/Group/next_index): Like `next`, giving the child's position in spawn order instead.
- [`Group::task`](/packages/stdlib/reference/future/Group/task): The child started `i`-th (from 0).
- [`Group::pending`](/packages/stdlib/reference/future/Group/pending): Number of children `next` has not returned yet.
- [`Group::cancel_all`](/packages/stdlib/reference/future/Group/cancel_all): Cancels every child that has not finished.
