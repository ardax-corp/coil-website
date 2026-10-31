---
slug: "msgpack/msgpack/MsgpackValue/get"
package: "msgpack"
title: "MsgpackValue::get"
description: "The value of the first entry of this map whose key is the string key."
module: "msgpack"
kind: "method"
name: "get"
parent: "MsgpackValue"
signature: "pub fn get(string key) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L587"
order: 28
---

The value of the first entry of this map whose key is the string `key`.

When there is none, or this is not a map, this returns the value
itself, so check [`has`](/packages/msgpack/reference/msgpack/MsgpackValue/has) first when the key may be missing.

Called on a `MsgpackValue` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`MsgpackValue`

## Examples

```coil
use msgpack::{MsgpackValue};
use tests::assert;
let m = MsgpackValue::empty_map();
let _ = m.put(MsgpackValue::from_string("a"), MsgpackValue::from_int(1));
let _ = m.put(MsgpackValue::from_string("a"), MsgpackValue::from_int(2));
assert!(m.map_len() == 2 && m.get("a").i == 1);
assert!(!m.has("b") && m.get("b").is_map());
```

## See also

- [`MsgpackValue::has`](/packages/msgpack/reference/msgpack/MsgpackValue/has)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
