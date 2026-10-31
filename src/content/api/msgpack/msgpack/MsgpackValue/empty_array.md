---
slug: "msgpack/msgpack/MsgpackValue/empty_array"
package: "msgpack"
title: "MsgpackValue::empty_array"
description: "An empty array. Add elements with append."
module: "msgpack"
kind: "static method"
name: "empty_array"
parent: "MsgpackValue"
signature: "pub static fn empty_array() -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L430"
order: 9
---

An empty array. Add elements with [`append`](/packages/msgpack/reference/msgpack/MsgpackValue/append).

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue::append`](/packages/msgpack/reference/msgpack/MsgpackValue/append)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
