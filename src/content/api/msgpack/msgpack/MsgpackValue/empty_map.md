---
slug: "msgpack/msgpack/MsgpackValue/empty_map"
package: "msgpack"
title: "MsgpackValue::empty_map"
description: "An empty map. Add entries with put."
module: "msgpack"
kind: "static method"
name: "empty_map"
parent: "MsgpackValue"
signature: "pub static fn empty_map() -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L437"
order: 10
---

An empty map. Add entries with [`put`](/packages/msgpack/reference/msgpack/MsgpackValue/put).

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue::put`](/packages/msgpack/reference/msgpack/MsgpackValue/put)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
