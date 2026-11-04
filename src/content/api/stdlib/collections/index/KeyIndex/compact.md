---
slug: "stdlib/collections/index/KeyIndex/compact"
package: "stdlib"
title: "KeyIndex::compact"
description: "Drops the removed slots and renumbers the keys from 0 in order."
module: "collections::index"
kind: "method"
name: "compact"
parent: "KeyIndex"
signature: "pub fn compact()"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/index.coil#L152"
order: 11
---

Drops the removed slots and renumbers the keys from `0` in order.

Called on a `KeyIndex` value as `value.compact(…)`.

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.keys.len() == self.len
```

## Examples

```coil
use collections::index::{KeyIndex};
use tests::assert;
let ix: KeyIndex<string> = KeyIndex::new();
let counts: Vec<int> = Vec::new();
for w in ["a", "b", "c"] {
    ix.insert(w);
    counts.push(w.len());
}
ix.remove("a");
ix.retain_live(counts);
ix.compact();
assert!(ix.find("b") == 0 && ix.slots() == 2 && counts.len() == 2);
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
