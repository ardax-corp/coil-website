---
slug: "msgpack/msgpack/MsgpackValue/key_at"
package: "msgpack"
title: "MsgpackValue::key_at"
description: "The key of entry n (0-based) of a map, as a value (keys need not be strings)."
module: "msgpack"
kind: "method"
name: "key_at"
parent: "MsgpackValue"
signature: "pub fn key_at(int n) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.coil#L555"
order: 26
---

The key of entry `n` (0-based) of a map, as a value (keys need not be strings).

When `n` is out of range, or this is not a map, this returns the value
itself.

Called on a `MsgpackValue` value as `value.key_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
