---
slug: "stdlib/collections/index/KeyIndex/keys"
package: "stdlib"
title: "KeyIndex::keys"
description: "Returns the keys, in slot order, without the removed ones."
module: "collections::index"
kind: "method"
name: "keys"
parent: "KeyIndex"
signature: "pub fn keys() -> Vec<K>"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/index.coil#L102"
order: 8
---

Returns the keys, in slot order, without the removed ones.

Called on a `KeyIndex` value as `value.keys(…)`.

## Returns

`Vec<K>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == self.len
```

## See also

- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
- [`KeyIndex::capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity): Returns how many keys the index holds before it grows.
- [`KeyIndex::slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots): Returns the number of slots, removed ones included: every slot number is below it.
- [`KeyIndex::is_live`](/packages/stdlib/reference/collections/index/KeyIndex/is_live): Returns `true` when `slot` holds a key (it was added and not removed).
