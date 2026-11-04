---
slug: "stdlib/collections/index/KeyIndex/slots"
package: "stdlib"
title: "KeyIndex::slots"
description: "Returns the number of slots, removed ones included: every slot number is below it."
module: "collections::index"
kind: "method"
name: "slots"
parent: "KeyIndex"
signature: "pub fn slots() -> int"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/index.coil#L84"
order: 5
---

Returns the number of slots, removed ones included: every slot number is below it.

Called on a `KeyIndex` value as `value.slots(…)`.

## Returns

`int`

## See also

- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
- [`KeyIndex::capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity): Returns how many keys the index holds before it grows.
- [`KeyIndex::is_live`](/packages/stdlib/reference/collections/index/KeyIndex/is_live): Returns `true` when `slot` holds a key (it was added and not removed).
- [`KeyIndex::key_at`](/packages/stdlib/reference/collections/index/KeyIndex/key_at): Returns the key in `slot`.
