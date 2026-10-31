---
slug: "msgpack/msgpack/MsgpackValue/put"
package: "msgpack"
title: "MsgpackValue::put"
description: "Copies key and val onto the end of this map as a new entry. An existing entry with the same key is kept, not replaced."
module: "msgpack"
kind: "method"
name: "put"
parent: "MsgpackValue"
signature: "pub fn put(MsgpackValue key, MsgpackValue val) -> Result<(), MsgpackError>"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L643"
order: 30
---

Copies `key` and `val` onto the end of this map as a new entry. An existing entry with the same key is kept, not replaced.

Returns [`MsgpackError::Invalid`](/packages/msgpack/reference/msgpack/MsgpackError#variant-invalid) when this is not a map.

Called on a `MsgpackValue` value as `value.put(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `MsgpackValue` |
| `val` | `MsgpackValue` |

## Returns

`Result<(), MsgpackError>`

## See also

- [`msgpack::MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
