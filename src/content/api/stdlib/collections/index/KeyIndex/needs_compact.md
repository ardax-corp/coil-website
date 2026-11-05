---
slug: "stdlib/collections/index/KeyIndex/needs_compact"
package: "stdlib"
title: "KeyIndex::needs_compact"
description: "Returns true when removed slots outnumber the keys, so compact would at least halve slots()."
module: "collections::index"
kind: "method"
name: "needs_compact"
parent: "KeyIndex"
signature: "pub fn needs_compact() -> bool"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/index.coil#L118"
order: 9
---

Returns `true` when removed slots outnumber the keys, so [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact) would at least halve [`slots()`](/packages/stdlib/reference/collections/index/KeyIndex/slots).

Called on a `KeyIndex` value as `value.needs_compact(…)`.

## Returns

`bool`

## See also

- [`KeyIndex::compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact)
- [`KeyIndex::slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots)
- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
- [`KeyIndex::capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity): Returns how many keys the index holds before it grows.
