---
slug: "msgpack/msgpack/MsgpackValue/from_bool"
package: "msgpack"
title: "MsgpackValue::from_bool"
description: "A MessagePack boolean."
module: "msgpack"
kind: "static method"
name: "from_bool"
parent: "MsgpackValue"
signature: "pub static fn from_bool(bool flag) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L329"
order: 1
---

A MessagePack boolean.

## Parameters

| Name | Type |
|------|------|
| `flag` | `bool` |

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
- [`MsgpackValue::from_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bin): A MessagePack binary value holding `data`.
