---
slug: "msgpack/msgpack/MsgpackValue/child"
package: "msgpack"
title: "MsgpackValue::child"
description: "Element n (0-based) of an array, or the value of entry n of a map."
module: "msgpack"
kind: "method"
name: "child"
parent: "MsgpackValue"
signature: "pub fn child(int n) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L535"
order: 25
---

Element `n` (0-based) of an array, or the value of entry `n` of a map.

When `n` is out of range, or this is neither, this returns the value
itself, so check `n` against [`array_len`](/packages/msgpack/reference/msgpack/MsgpackValue/array_len) / [`map_len`](/packages/msgpack/reference/msgpack/MsgpackValue/map_len) first.

Called on a `MsgpackValue` value as `value.child(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue::array_len`](/packages/msgpack/reference/msgpack/MsgpackValue/array_len)
- [`MsgpackValue::map_len`](/packages/msgpack/reference/msgpack/MsgpackValue/map_len)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
