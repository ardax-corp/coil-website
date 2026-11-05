---
slug: "stdlib/collections/index/KeyIndex"
package: "stdlib"
title: "KeyIndex"
description: "Gives each distinct key a slot number: 0 for the first key added, then 1, 2 and so on."
module: "collections::index"
kind: "class"
name: "KeyIndex"
signature: "class KeyIndex<K>"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/index.coil#L38"
order: 0
---

Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.

The index stores the keys and nothing else. To keep something with each
key, hold it in your own [`Vec`](/docs/reference/prelude/Vec) at the key's slot: `HashMap` keeps its
values that way, an interner keeps nothing more than the index, and a
group-by keeps a count or a [`Vec`](/docs/reference/prelude/Vec) per slot.

Any key with `Hash` and [`Eq`](/docs/reference/prelude/ops/Eq) works. Keys whose hashes match are told
apart by `==`, so a hand-written [`Eq`](/docs/reference/prelude/ops/Eq) decides as it does everywhere else;
its `Hash` must give equal keys equal hashes.

Removing a key leaves a gap: the other keys keep their slots, and
[`slots()`](/packages/stdlib/reference/collections/index/KeyIndex/slots) still counts the gap until [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact) renumbers. When you keep
values by slot, compact them with the index: call [`retain_live`](/packages/stdlib/reference/collections/index/KeyIndex/retain_live) on each
of your [`Vec`](/docs/reference/prelude/Vec)s, then [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact). [`needs_compact`](/packages/stdlib/reference/collections/index/KeyIndex/needs_compact) says when that is worth
doing.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/collections/index/KeyIndex/new) | Creates an empty index. |
| [`with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity) | Creates an empty index with room for `n` keys before it grows. |

## Methods

| Name | Description |
|------|-------------|
| [`len`](/packages/stdlib/reference/collections/index/KeyIndex/len) | Returns the number of keys. |
| [`is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty) | Returns `true` when the index has no keys. |
| [`capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity) | Returns how many keys the index holds before it grows. |
| [`slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots) | Returns the number of slots, removed ones included: every slot number is below it. |
| [`is_live`](/packages/stdlib/reference/collections/index/KeyIndex/is_live) | Returns `true` when `slot` holds a key (it was added and not removed). |
| [`key_at`](/packages/stdlib/reference/collections/index/KeyIndex/key_at) | Returns the key in `slot`. |
| [`keys`](/packages/stdlib/reference/collections/index/KeyIndex/keys) | Returns the keys, in slot order, without the removed ones. |
| [`needs_compact`](/packages/stdlib/reference/collections/index/KeyIndex/needs_compact) | Returns `true` when removed slots outnumber the keys, so [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact) would at least halve [`slots()`](/packages/stdlib/reference/collections/index/KeyIndex/slots). |
| [`retain_live`](/packages/stdlib/reference/collections/index/KeyIndex/retain_live) | Drops the elements of `v` at removed slots, keeping the order of the rest: the same renumbering [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact) applies to the index. |
| [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact) | Drops the removed slots and renumbers the keys from `0` in order. |
| [`clear`](/packages/stdlib/reference/collections/index/KeyIndex/clear) | Removes every key. |
| [`find`](/packages/stdlib/reference/collections/index/KeyIndex/find) | Returns the slot of `k`, or `-1` when it is not in the index. |
| [`find_hashed`](/packages/stdlib/reference/collections/index/KeyIndex/find_hashed) | [`find`](/packages/stdlib/reference/collections/index/KeyIndex/find) for a key whose hash `h` (`k.hash()`) the caller already has. |
| [`insert`](/packages/stdlib/reference/collections/index/KeyIndex/insert) | Returns the slot of `k`, adding it at the next slot when it is new. |
| [`push_hashed`](/packages/stdlib/reference/collections/index/KeyIndex/push_hashed) | Adds `k`, which `find_hashed(k, h)` did not find, at the next slot and returns it. |
| [`remove`](/packages/stdlib/reference/collections/index/KeyIndex/remove) | Removes `k` and returns the slot it had, or `-1` when it was not in the index. |
| [`remove_slot`](/packages/stdlib/reference/collections/index/KeyIndex/remove_slot) | Removes the key in `slot`. |

## Invariants

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
invariant self.len >= 0 && self.len <= self.keys.len()
invariant self.hashes.len() == self.keys.len() && self.live.len() == self.keys.len()
```

## Examples

```coil
use collections::index::{KeyIndex};
use tests::assert;
let ix: KeyIndex<string> = KeyIndex::new();
assert!(ix.insert("pear") == 0);
assert!(ix.insert("fig") == 1);
assert!(ix.insert("pear") == 0);
assert!(ix.find("fig") == 1);
assert!(ix.find("kiwi") == -1);
assert!(ix.key_at(1) == "fig");
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`KeyIndex::slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots)
- [`KeyIndex::compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact)
- [`KeyIndex::retain_live`](/packages/stdlib/reference/collections/index/KeyIndex/retain_live)
- [`KeyIndex::needs_compact`](/packages/stdlib/reference/collections/index/KeyIndex/needs_compact)
