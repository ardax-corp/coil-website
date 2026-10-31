---
slug: "msgpack/msgpack/MsgpackValue/is_bool"
package: "msgpack"
title: "MsgpackValue::is_bool"
description: "Returns true for a boolean."
module: "msgpack"
kind: "method"
name: "is_bool"
parent: "MsgpackValue"
signature: "pub fn is_bool() -> bool"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L449"
order: 12
---

Returns `true` for a boolean.

Called on a `MsgpackValue` value as `value.is_bool(…)`.

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
