---
slug: "stdlib/collections/list/List/push_back"
package: "stdlib"
title: "List::push_back"
description: "Adds v at the back. Rebuilds the list, so it takes time proportional to its length."
module: "collections::list"
kind: "method"
name: "push_back"
parent: "List"
signature: "pub fn push_back(T v)"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/list.hy#L95"
order: 4
---

Adds `v` at the back. Rebuilds the list, so it takes time proportional to its length.

Called on a `List` value as `value.push_back(…)`.

## Parameters

| Name | Type |
|------|------|
| `v` | `T` |

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == old(self.len) + 1
```

## Examples

```coil
use collections::list::{List};
use tests::assert;
let xs: List<int> = List::new();
xs.push_back(1);
xs.push_back(2);
let v = xs.to_vec();
assert!(v[1] == 2);
```

## See also

- [`List`](/packages/stdlib/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/packages/stdlib/reference/collections/list/List/new): Creates an empty list.
- [`List::len`](/packages/stdlib/reference/collections/list/List/len): Returns the number of values.
- [`List::is_empty`](/packages/stdlib/reference/collections/list/List/is_empty): Returns `true` when the list has no values.
- [`List::push_front`](/packages/stdlib/reference/collections/list/List/push_front): Adds `v` at the front.
- [`List::peek_front`](/packages/stdlib/reference/collections/list/List/peek_front): Returns the front value without removing it, or `None` when the list is empty.
- [`List::pop_front`](/packages/stdlib/reference/collections/list/List/pop_front): Removes and returns the front value, or `None` when the list is empty.
- [`List::pop_back`](/packages/stdlib/reference/collections/list/List/pop_back): Removes and returns the back value, or `None` when the list is empty.
