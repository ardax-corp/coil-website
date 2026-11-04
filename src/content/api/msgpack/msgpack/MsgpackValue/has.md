---
slug: "msgpack/msgpack/MsgpackValue/has"
package: "msgpack"
title: "MsgpackValue::has"
description: "Returns true when this map has an entry whose key is the string key."
module: "msgpack"
kind: "method"
name: "has"
parent: "MsgpackValue"
signature: "pub fn has(string key) -> bool"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/d4bbea9d2025672c7051197559461ba467a0c8b0/src/msgpack.coil#L567"
order: 27
---

Returns `true` when this map has an entry whose key is the string `key`.

Called on a `MsgpackValue` value as `value.has(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`bool`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
