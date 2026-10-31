---
slug: "msgpack/msgpack/MsgpackValue/ext_type"
package: "msgpack"
title: "MsgpackValue::ext_type"
description: "The type code of an extension (-1 for a timestamp), or 0 when this is not an extension."
module: "msgpack"
kind: "method"
name: "ext_type"
parent: "MsgpackValue"
signature: "pub fn ext_type() -> int"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L515"
order: 23
---

The type code of an extension (`-1` for a timestamp), or 0 when this is not an extension.

Called on a `MsgpackValue` value as `value.ext_type(…)`.

## Returns

`int`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
