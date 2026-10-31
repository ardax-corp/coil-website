---
slug: "stdlib/collections/list/List/clear"
package: "stdlib"
title: "List::clear"
description: "Removes every value."
module: "collections::list"
kind: "method"
name: "clear"
parent: "List"
signature: "pub fn clear()"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/list.hy#L168"
order: 8
---

Removes every value.

Called on a `List` value as `value.clear(…)`.

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == 0
```

## See also

- [`List`](/packages/stdlib/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/packages/stdlib/reference/collections/list/List/new): Creates an empty list.
- [`List::len`](/packages/stdlib/reference/collections/list/List/len): Returns the number of values.
- [`List::is_empty`](/packages/stdlib/reference/collections/list/List/is_empty): Returns `true` when the list has no values.
- [`List::push_front`](/packages/stdlib/reference/collections/list/List/push_front): Adds `v` at the front.
- [`List::push_back`](/packages/stdlib/reference/collections/list/List/push_back): Adds `v` at the back.
- [`List::peek_front`](/packages/stdlib/reference/collections/list/List/peek_front): Returns the front value without removing it, or `None` when the list is empty.
- [`List::pop_front`](/packages/stdlib/reference/collections/list/List/pop_front): Removes and returns the front value, or `None` when the list is empty.
